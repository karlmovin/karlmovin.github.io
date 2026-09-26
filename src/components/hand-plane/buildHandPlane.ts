import * as THREE from "three";
import type { HandPlanePartId } from "../../data/hand-plane";

// Units are centimetres. X runs heel (-) to toe (+), Y is up, Z is across the sole.
const LENGTH = 24.5;
const WIDTH = 6;
const WALL = 0.3;
const SOLE = 0.3;
// Where the cutting edge meets the sole.
const MOUTH_X = 3;

type MaterialKind = "japanned" | "steel" | "nickel" | "brass" | "wood";

function material(
	kind: MaterialKind,
	color: string,
): THREE.MeshStandardMaterial {
	const props: Record<MaterialKind, { metalness: number; roughness: number }> =
		{
			japanned: { metalness: 0.3, roughness: 0.35 },
			steel: { metalness: 0.9, roughness: 0.3 },
			nickel: { metalness: 1, roughness: 0.18 },
			brass: { metalness: 0.9, roughness: 0.3 },
			wood: { metalness: 0, roughness: 0.55 },
		};
	return new THREE.MeshStandardMaterial({ color, ...props[kind] });
}

/** Extrudes a shape drawn in the XY plane along Z, centred on Z = 0. */
function extrudeXY(
	shape: THREE.Shape,
	depth: number,
	bevel = 0,
): THREE.ExtrudeGeometry {
	const geo = new THREE.ExtrudeGeometry(shape, {
		depth: depth - bevel * 2,
		bevelEnabled: bevel > 0,
		bevelThickness: bevel,
		bevelSize: bevel,
		bevelSegments: 3,
		curveSegments: 24,
	});
	geo.translate(0, 0, -depth / 2 + bevel);
	return geo;
}

/**
 * A flat plate whose outline is drawn in (x, z) and which is `thickness` thick in Y,
 * starting at `y0`. Used for parts lying on the 45° bed.
 */
function plate(
	shape: THREE.Shape,
	thickness: number,
	y0: number,
): THREE.ExtrudeGeometry {
	const geo = new THREE.ExtrudeGeometry(shape, {
		depth: thickness,
		bevelEnabled: false,
		curveSegments: 24,
	});
	geo.rotateX(Math.PI / 2);
	geo.translate(0, y0 + thickness, 0);
	return geo;
}

function roundedRect(
	x0: number,
	z0: number,
	x1: number,
	z1: number,
	r: number,
): THREE.Shape {
	const s = new THREE.Shape();
	s.moveTo(x0 + r, z0);
	s.lineTo(x1 - r, z0);
	s.quadraticCurveTo(x1, z0, x1, z0 + r);
	s.lineTo(x1, z1 - r);
	s.quadraticCurveTo(x1, z1, x1 - r, z1);
	s.lineTo(x0 + r, z1);
	s.quadraticCurveTo(x0, z1, x0, z1 - r);
	s.lineTo(x0, z0 + r);
	s.quadraticCurveTo(x0, z0, x0 + r, z0);
	return s;
}

function slot(x0: number, x1: number, w: number): THREE.Path {
	const r = w / 2;
	const p = new THREE.Path();
	p.moveTo(x0 + r, -r);
	p.lineTo(x1 - r, -r);
	p.absarc(x1 - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
	p.lineTo(x0 + r, r);
	p.absarc(x0 + r, 0, r, Math.PI / 2, (3 * Math.PI) / 2, false);
	return p;
}

/**
 * Group whose local frame lies on the bed: origin at the cutting edge, local X points
 * down the bed towards the edge (so the iron extends into -X), local Y points away
 * from the frog, local Z is across the plane.
 */
function bedFrame(): THREE.Group {
	const g = new THREE.Group();
	g.position.set(MOUTH_X, -0.03, 0);
	g.rotation.z = -Math.PI / 4;
	return g;
}

/** Converts a bed-frame (x, y) point to world XY. */
function bedToWorld(x: number, y: number): THREE.Vector2 {
	const k = Math.SQRT1_2;
	return new THREE.Vector2(MOUTH_X + k * (x + y), -0.03 + k * (y - x));
}

function mesh(geo: THREE.BufferGeometry, mat: THREE.Material): THREE.Mesh {
	const m = new THREE.Mesh(geo, mat);
	m.castShadow = true;
	m.receiveShadow = true;
	return m;
}

function buildBody(color: string): THREE.Group {
	const g = new THREE.Group();
	const mat = material("japanned", color);
	const half = LENGTH / 2;

	// Sole, seen from above, with the mouth cut out. Drawn in (x, z), extruded up.
	const sole = roundedRect(-half, -WIDTH / 2, half, WIDTH / 2, 0.4);
	sole.holes.push(
		roundedRectPath(MOUTH_X - 0.8, -2.7, MOUTH_X + 0.6, 2.7, 0.1),
	);
	const soleGeo = new THREE.ExtrudeGeometry(sole, {
		depth: SOLE,
		bevelEnabled: false,
	});
	soleGeo.rotateX(Math.PI / 2);
	soleGeo.translate(0, SOLE, 0);
	g.add(mesh(soleGeo, mat));

	// Side profile: low at heel and toe, tall around the frog.
	const side = new THREE.Shape();
	side.moveTo(-half, 0);
	side.lineTo(-half, 1.1);
	side.quadraticCurveTo(-half + 0.6, 1.6, -9, 1.7);
	side.quadraticCurveTo(-3.5, 1.8, -1.5, 3.1);
	side.lineTo(4.5, 3.1);
	side.quadraticCurveTo(7.5, 1.8, half - 0.8, 1.6);
	side.quadraticCurveTo(half, 1.5, half, 1);
	side.lineTo(half, 0);
	side.lineTo(-half, 0);
	for (const z of [-(WIDTH - WALL) / 2, (WIDTH - WALL) / 2]) {
		const m = mesh(extrudeXY(side, WALL), mat);
		m.position.z = z;
		g.add(m);
	}

	// Raised bosses the tote and knob sit on.
	const toteBoss = mesh(new THREE.BoxGeometry(4.2, 0.35, 2.4), mat);
	toteBoss.position.set(-9.5, SOLE + 0.17, 0);
	g.add(toteBoss);
	const knobBoss = mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.35, 32), mat);
	knobBoss.position.set(8.2, SOLE + 0.17, 0);
	g.add(knobBoss);
	return g;
}

function roundedRectPath(
	x0: number,
	z0: number,
	x1: number,
	z1: number,
	r: number,
): THREE.Path {
	const s = roundedRect(x0, z0, x1, z1, r);
	const p = new THREE.Path();
	p.curves = s.curves;
	return p;
}

function buildFrog(color: string): THREE.Group {
	const g = new THREE.Group();
	const mat = material("japanned", color);
	const a = bedToWorld(-1.4, 0);
	const b = bedToWorld(-8, 0);
	const base = SOLE + 0.35;
	const shape = new THREE.Shape();
	shape.moveTo(a.x, a.y);
	shape.lineTo(b.x, b.y);
	shape.lineTo(b.x - 0.3, b.y - 0.3);
	shape.lineTo(b.x - 0.3, base + 1.2);
	shape.quadraticCurveTo(b.x - 0.3, base, b.x + 1, base);
	shape.lineTo(a.x, base);
	shape.lineTo(a.x, a.y);
	g.add(mesh(extrudeXY(shape, 5.2, 0.05), mat));
	return g;
}

function buildFrogScrews(color: string): THREE.Group {
	const g = new THREE.Group();
	const mat = material("steel", color);
	for (const z of [-1.7, 1.7]) {
		const shank = mesh(new THREE.CylinderGeometry(0.18, 0.18, 2, 16), mat);
		shank.position.set(0.9, 1.05, z);
		const head = mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 24), mat);
		head.position.set(0.9, 1.8, z);
		g.add(shank, head);
	}
	return g;
}

function buildDepthKnob(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("brass", color);
	const knob = mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.9, 40), mat);
	knob.rotation.z = Math.PI / 2;
	knob.position.set(-7.2, -2.6, 0);
	// Knurling hint: a few thin rings.
	for (const dx of [-0.3, 0, 0.3]) {
		const ring = mesh(new THREE.TorusGeometry(0.9, 0.04, 8, 40), mat);
		ring.rotation.y = Math.PI / 2;
		ring.position.set(-7.2 + dx, -2.6, 0);
		frame.add(ring);
	}
	const stud = mesh(
		new THREE.CylinderGeometry(0.18, 0.18, 2.6, 16),
		material("steel", "#9ca3af"),
	);
	stud.rotation.z = Math.PI / 2;
	stud.position.set(-6.3, -2.6, 0);
	frame.add(knob, stud);
	g.add(frame);
	return g;
}

function buildYLever(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("steel", color);
	const from = new THREE.Vector2(-6.8, -2.1);
	const to = new THREE.Vector2(-8.2, 0.35);
	const dir = to.clone().sub(from);
	const bar = mesh(new THREE.BoxGeometry(dir.length(), 0.22, 0.45), mat);
	bar.position.set((from.x + to.x) / 2, (from.y + to.y) / 2, 0);
	bar.rotation.z = Math.atan2(dir.y, dir.x);
	// Fork around the depth knob's stud.
	for (const z of [-0.35, 0.35]) {
		const prong = mesh(new THREE.BoxGeometry(0.2, 0.7, 0.14), mat);
		prong.position.set(from.x, from.y - 0.25, z);
		frame.add(prong);
	}
	const pin = mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 12), mat);
	pin.rotation.x = Math.PI / 2;
	pin.position.set((from.x + to.x) / 2, (from.y + to.y) / 2, 0);
	frame.add(bar, pin);
	g.add(frame);
	return g;
}

function buildLateralLever(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("steel", color);
	const from = new THREE.Vector2(-7.4, 0);
	const to = new THREE.Vector2(-9.8, 1.9); // (x, z)
	const dir = to.clone().sub(from);
	const bar = mesh(new THREE.BoxGeometry(dir.length(), 0.12, 0.35), mat);
	bar.position.set((from.x + to.x) / 2, -0.12, (from.y + to.y) / 2);
	bar.rotation.y = -Math.atan2(dir.y, dir.x);
	const tab = mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.12, 24), mat);
	tab.position.set(to.x, -0.12, to.y);
	// Disc that rides in the iron's slot.
	const disc = mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.3, 16), mat);
	disc.position.set(from.x, 0.05, from.y);
	frame.add(bar, tab, disc);
	g.add(frame);
	return g;
}

function buildIron(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const shape = roundedRect(-12, -2.54, 0, 2.54, 0.15);
	shape.holes.push(slot(-8.8, -3.8, 0.7));
	frame.add(mesh(plate(shape, 0.2, 0), material("steel", color)));
	g.add(frame);
	return g;
}

function buildChipbreaker(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("steel", color);
	const shape = roundedRect(-8.6, -2.45, -0.5, 2.45, 0.2);
	frame.add(mesh(plate(shape, 0.16, 0.22), mat));
	// Curved lip that bears down on the iron just behind the edge.
	const lip = mesh(
		new THREE.CylinderGeometry(0.28, 0.28, 4.9, 24, 1, false, 0, Math.PI),
		mat,
	);
	lip.rotation.x = Math.PI / 2;
	lip.position.set(-0.5, 0.2, 0);
	frame.add(lip);
	g.add(frame);
	return g;
}

function buildCapIronScrew(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("steel", color);
	const head = mesh(new THREE.CylinderGeometry(0.6, 0.62, 0.35, 32), mat);
	head.position.set(-7, 0.56, 0);
	const shank = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.6, 16), mat);
	shank.position.set(-7, 0.15, 0);
	frame.add(head, shank);
	g.add(frame);
	return g;
}

function buildLeverCapScrew(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("steel", color);
	const shank = mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 16), mat);
	shank.position.set(-4.8, -0.2, 0);
	const head = mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 24), mat);
	head.position.set(-4.8, 0.46, 0);
	frame.add(shank, head);
	g.add(frame);
	return g;
}

function buildLeverCap(color: string): THREE.Group {
	const g = new THREE.Group();
	const frame = bedFrame();
	const mat = material("nickel", color);
	const shape = new THREE.Shape();
	shape.moveTo(-0.9, -2.4);
	shape.lineTo(-0.9, 2.4);
	shape.lineTo(-5, 1.7);
	shape.quadraticCurveTo(-6.1, 1.5, -6.1, 0);
	shape.quadraticCurveTo(-6.1, -1.5, -5, -1.7);
	shape.lineTo(-0.9, -2.4);
	frame.add(mesh(plate(shape, 0.24, 0.53), mat));
	const cam = mesh(new THREE.BoxGeometry(2, 0.18, 1.3), mat);
	cam.position.set(-4.6, 0.86, 0);
	frame.add(cam);
	g.add(frame);
	return g;
}

function buildTote(color: string): THREE.Group {
	const g = new THREE.Group();
	const base = SOLE + 0.35;
	const s = new THREE.Shape();
	s.moveTo(-11.6, base);
	s.lineTo(-7.4, base);
	s.quadraticCurveTo(-7.2, base + 1.2, -8.2, 2.4);
	s.bezierCurveTo(-9, 4, -9.3, 6.5, -9.1, 8.3);
	s.quadraticCurveTo(-8.4, 9.6, -9.4, 10.3);
	s.quadraticCurveTo(-10.8, 11, -11.9, 9.6);
	s.bezierCurveTo(-12, 7.5, -11.3, 5, -10.8, 3.2);
	s.quadraticCurveTo(-10.6, 2.2, -11.6, 1.6);
	s.lineTo(-11.6, base);
	g.add(mesh(extrudeXY(s, 2.6, 0.35), material("wood", color)));
	return g;
}

function buildKnob(color: string): THREE.Group {
	const g = new THREE.Group();
	const profile = [
		[0, 0],
		[1.2, 0],
		[1.25, 0.3],
		[1.45, 1.2],
		[1.55, 2.2],
		[1.45, 3.1],
		[1.15, 3.8],
		[0.65, 4.2],
		[0, 4.3],
	].map(([r, y]) => new THREE.Vector2(r, y));
	const knob = mesh(
		new THREE.LatheGeometry(profile, 48),
		material("wood", color),
	);
	knob.position.set(8.2, SOLE + 0.35, 0);
	g.add(knob);
	return g;
}

const builders: Record<HandPlanePartId, (color: string) => THREE.Group> = {
	body: buildBody,
	frog: buildFrog,
	frogScrews: buildFrogScrews,
	depthKnob: buildDepthKnob,
	yLever: buildYLever,
	lateralLever: buildLateralLever,
	iron: buildIron,
	chipbreaker: buildChipbreaker,
	capIronScrew: buildCapIronScrew,
	leverCapScrew: buildLeverCapScrew,
	leverCap: buildLeverCap,
	tote: buildTote,
	knob: buildKnob,
};

export function buildPart(id: HandPlanePartId, color: string): THREE.Group {
	const group = builders[id](color);
	group.name = id;
	group.traverse((o) => {
		o.userData.partId = id;
	});
	return group;
}
