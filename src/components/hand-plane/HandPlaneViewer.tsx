import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { HandPlanePart, HandPlanePartId } from "../../data/hand-plane";
import { buildPart } from "./buildHandPlane";

type Props = {
	parts: HandPlanePart[];
	/** 0 = assembled, 1 = fully exploded. */
	explode: number;
	selected: HandPlanePartId | null;
	/** Hide every part except the selected one. */
	isolate: boolean;
	autoRotate: boolean;
	/** Increment to reset the camera. */
	resetToken: number;
	onSelect: (id: HandPlanePartId | null) => void;
};

type PartEntry = {
	id: HandPlanePartId;
	group: THREE.Group;
	explode: THREE.Vector3;
	/** Centre of the part when assembled, used for labels and focusing. */
	center: THREE.Vector3;
	/** Diagonal of the part's bounding box, used to pick a zoom distance. */
	size: number;
	materials: THREE.MeshStandardMaterial[];
};

const HOME_TARGET = new THREE.Vector3(0.5, 5, 0);
const HOME_CAMERA = new THREE.Vector3(25, 20, 34);
const HOME_DISTANCE = HOME_CAMERA.distanceTo(HOME_TARGET);
/** Narrowest aspect ratio the home view fits without backing off. */
const FIT_ASPECT = 1.2;
const HIGHLIGHT = new THREE.Color("#3b82f6");
const NO_EMISSIVE = new THREE.Color(0);

export default function HandPlaneViewer({
	parts,
	explode,
	selected,
	isolate,
	autoRotate,
	resetToken,
	onSelect,
}: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	const labelRefs = useRef(new Map<HandPlanePartId, HTMLButtonElement>());
	// The render loop reads props through this ref so the scene is only built once.
	const state = useRef({ explode, selected, isolate, autoRotate, onSelect });
	state.current = { explode, selected, isolate, autoRotate, onSelect };
	const resetRef = useRef<() => void>(() => {});

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		container.appendChild(renderer.domElement);
		renderer.domElement.style.display = "block";
		renderer.domElement.style.touchAction = "none";

		const scene = new THREE.Scene();
		const pmrem = new THREE.PMREMGenerator(renderer);
		const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
		scene.environment = envTexture;

		const camera = new THREE.PerspectiveCamera(35, 1, 0.5, 500);
		camera.position.copy(HOME_CAMERA);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.target.copy(HOME_TARGET);
		controls.minDistance = 4;
		controls.maxDistance = 120;
		controls.autoRotateSpeed = 1.2;

		const sun = new THREE.DirectionalLight("#ffffff", 1.6);
		sun.position.set(10, 25, 15);
		sun.castShadow = true;
		sun.shadow.mapSize.set(2048, 2048);
		sun.shadow.camera.left = -30;
		sun.shadow.camera.right = 30;
		sun.shadow.camera.top = 30;
		sun.shadow.camera.bottom = -30;
		sun.shadow.bias = -0.0005;
		scene.add(sun, new THREE.HemisphereLight("#ffffff", "#666666", 0.5));

		const ground = new THREE.Mesh(
			new THREE.PlaneGeometry(200, 200),
			new THREE.ShadowMaterial({ opacity: 0.18 }),
		);
		ground.rotation.x = -Math.PI / 2;
		ground.position.y = -3.2;
		ground.receiveShadow = true;
		scene.add(ground);

		const entries: PartEntry[] = parts.map((p) => {
			const group = buildPart(p.id, p.color);
			scene.add(group);
			const materials: THREE.MeshStandardMaterial[] = [];
			group.traverse((o) => {
				if (o instanceof THREE.Mesh) {
					// Each part gets its own materials so it can be ghosted independently.
					o.material = (o.material as THREE.MeshStandardMaterial).clone();
					materials.push(o.material);
				}
			});
			const box = new THREE.Box3().setFromObject(group);
			const center = box.getCenter(new THREE.Vector3());
			const size = box.getSize(new THREE.Vector3()).length();
			return {
				id: p.id,
				group,
				explode: new THREE.Vector3(...p.explode),
				center,
				size,
				materials,
			};
		});

		// Animated values that ease towards the props.
		let currentExplode = state.current.explode;
		let focusing = false;
		let lastFocus: HandPlanePartId | null = null;
		// Stop steering the camera as soon as the user grabs it.
		controls.addEventListener("start", () => {
			focusing = false;
		});

		// Back the camera off on narrow (portrait) screens so the exploded view fits.
		let homeDistance = HOME_DISTANCE;
		const homeCamera = () =>
			HOME_CAMERA.clone()
				.sub(HOME_TARGET)
				.setLength(homeDistance)
				.add(HOME_TARGET);

		resetRef.current = () => {
			camera.position.copy(homeCamera());
			controls.target.copy(HOME_TARGET);
			focusing = false;
			lastFocus = null;
		};

		const resize = () => {
			const { clientWidth: w, clientHeight: h } = container;
			renderer.setSize(w, h);
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			homeDistance = HOME_DISTANCE * Math.max(1, FIT_ASPECT / camera.aspect);
		};
		resize();
		camera.position.copy(homeCamera());
		const observer = new ResizeObserver(resize);
		observer.observe(container);

		// Click (not drag) to select a part.
		const raycaster = new THREE.Raycaster();
		const pointer = new THREE.Vector2();
		let downAt: { x: number; y: number } | null = null;
		const onPointerDown = (e: PointerEvent) => {
			downAt = { x: e.clientX, y: e.clientY };
		};
		const onPointerUp = (e: PointerEvent) => {
			if (!downAt || Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 5)
				return;
			downAt = null;
			const rect = renderer.domElement.getBoundingClientRect();
			pointer.set(
				((e.clientX - rect.left) / rect.width) * 2 - 1,
				-((e.clientY - rect.top) / rect.height) * 2 + 1,
			);
			raycaster.setFromCamera(pointer, camera);
			const pickable = entries
				.filter((en) => en.group.visible)
				.map((en) => en.group);
			const hit = raycaster.intersectObjects(pickable, true)[0];
			const id =
				(hit?.object.userData.partId as HandPlanePartId | undefined) ?? null;
			const { onSelect: select, selected: current } = state.current;
			select(id === current ? null : id);
		};
		renderer.domElement.addEventListener("pointerdown", onPointerDown);
		renderer.domElement.addEventListener("pointerup", onPointerUp);

		const projected = new THREE.Vector3();
		let frame = 0;
		const clock = new THREE.Clock();
		const tick = () => {
			frame = requestAnimationFrame(tick);
			const s = state.current;
			// Frame-rate independent easing factor.
			const ease = 1 - Math.exp(-clock.getDelta() * 8);
			currentExplode += (s.explode - currentExplode) * ease;
			controls.autoRotate = s.autoRotate;

			for (const en of entries) {
				en.group.position.copy(en.explode).multiplyScalar(currentExplode);
				const isSelected = s.selected === en.id;
				en.group.visible = !(s.isolate && s.selected && !isSelected);
				const ghost = s.selected !== null && !isSelected;
				for (const m of en.materials) {
					m.transparent = ghost;
					m.opacity = ghost ? 0.18 : 1;
					m.depthWrite = !ghost;
					m.emissive.copy(isSelected ? HIGHLIGHT : NO_EMISSIVE);
					m.emissiveIntensity = isSelected ? 0.25 : 0;
				}
			}

			// When a part is isolated, glide the camera onto it; when released, glide home.
			const focusId = s.isolate ? s.selected : null;
			if (focusId !== lastFocus) {
				lastFocus = focusId;
				focusing = true;
			}
			if (focusing) {
				const en = entries.find((e) => e.id === focusId);
				const goal = en
					? en.center.clone().addScaledVector(en.explode, currentExplode)
					: HOME_TARGET;
				const goalDistance = en ? Math.max(5, en.size * 2.2) : homeDistance;
				const offset = camera.position.clone().sub(controls.target);
				const distance = offset.length();
				const delta = goal.clone().sub(controls.target).multiplyScalar(ease);
				controls.target.add(delta);
				const nextDistance = distance + (goalDistance - distance) * ease;
				camera.position
					.copy(controls.target)
					.addScaledVector(offset.normalize(), nextDistance);
				if (
					delta.lengthSq() < 1e-6 &&
					Math.abs(goalDistance - distance) < 0.01
				) {
					focusing = false;
				}
			}

			controls.update();
			renderer.render(scene, camera);

			// Numbered labels follow each part on screen.
			const { clientWidth: w, clientHeight: h } = container;
			for (const en of entries) {
				const label = labelRefs.current.get(en.id);
				if (!label) continue;
				projected
					.copy(en.center)
					.addScaledVector(en.explode, currentExplode)
					.project(camera);
				const show =
					en.group.visible &&
					projected.z < 1 &&
					(currentExplode > 0.25 || s.selected === en.id);
				label.style.display = show ? "flex" : "none";
				label.style.transform = `translate(${((projected.x + 1) / 2) * w}px, ${((1 - projected.y) / 2) * h}px) translate(-50%, -50%)`;
			}
		};
		tick();

		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			renderer.domElement.removeEventListener("pointerdown", onPointerDown);
			renderer.domElement.removeEventListener("pointerup", onPointerUp);
			controls.dispose();
			scene.traverse((o) => {
				if (o instanceof THREE.Mesh) {
					o.geometry.dispose();
					(o.material as THREE.Material).dispose();
				}
			});
			envTexture.dispose();
			pmrem.dispose();
			renderer.dispose();
			renderer.domElement.remove();
		};
	}, [parts]);

	useEffect(() => {
		if (resetToken > 0) resetRef.current();
	}, [resetToken]);

	return (
		<div ref={containerRef} className="relative w-full h-full overflow-hidden">
			{parts.map((p, i) => (
				<button
					key={p.id}
					type="button"
					ref={(el) => {
						if (el) labelRefs.current.set(p.id, el);
						else labelRefs.current.delete(p.id);
					}}
					onClick={() => onSelect(selected === p.id ? null : p.id)}
					className={`absolute left-0 top-0 hidden items-center justify-center w-6 h-6 rounded-full text-xs font-bold shadow ring-1 ${
						selected === p.id
							? "bg-blue-600 text-white ring-blue-300"
							: "bg-white/90 text-gray-900 ring-gray-400 dark:bg-gray-800/90 dark:text-white dark:ring-gray-500"
					}`}
				>
					{i + 1}
				</button>
			))}
		</div>
	);
}
