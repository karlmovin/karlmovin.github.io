import { useState } from "react";
import { useTranslation } from "react-i18next";
import { type HandPlanePartId, handPlaneParts } from "../../data/hand-plane";
import { t as tl } from "../../data/i18n-helpers";
import HandPlaneViewer from "./HandPlaneViewer";

/** Interactive, explodable 3D hand plane with a legend of its parts. */
export default function HandPlaneAnatomy() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const [explode, setExplode] = useState(0);
	const [selected, setSelected] = useState<HandPlanePartId | null>(null);
	const [isolate, setIsolate] = useState(false);
	const [autoRotate, setAutoRotate] = useState(false);
	const [resetToken, setResetToken] = useState(0);

	const selectedIndex = handPlaneParts.findIndex((p) => p.id === selected);
	const selectedPart =
		selectedIndex >= 0 ? handPlaneParts[selectedIndex] : null;

	const select = (id: HandPlanePartId | null) => {
		setSelected(id);
		if (id === null) setIsolate(false);
	};

	const step = (delta: number) => {
		const n = handPlaneParts.length;
		const next =
			selectedIndex < 0
				? delta > 0
					? 0
					: n - 1
				: (selectedIndex + delta + n) % n;
		setSelected(handPlaneParts[next].id);
	};

	const buttonClass =
		"px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40";

	return (
		<div>
			<h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
				{t("handPlane.title")}
			</h3>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
				<div className="lg:col-span-2 space-y-2">
					<div className="border border-gray-300 dark:border-gray-600 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 h-[55vh] min-h-80">
						<HandPlaneViewer
							parts={handPlaneParts}
							explode={explode}
							selected={selected}
							isolate={isolate}
							autoRotate={autoRotate}
							resetToken={resetToken}
							onSelect={select}
						/>
					</div>

					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 space-y-2">
						<label className="flex items-center gap-3 text-sm text-gray-800 dark:text-gray-200">
							<span className="shrink-0 font-medium">
								{t("handPlane.explode")}
							</span>
							<input
								type="range"
								min={0}
								max={100}
								value={Math.round(explode * 100)}
								onChange={(e) => setExplode(Number(e.target.value) / 100)}
								className="w-full accent-blue-600"
							/>
						</label>
						<div className="flex flex-wrap gap-2 items-center">
							<button
								type="button"
								className={buttonClass}
								onClick={() => setExplode(explode > 0.5 ? 0 : 1)}
							>
								{explode > 0.5
									? t("handPlane.assemble")
									: t("handPlane.explodeAll")}
							</button>
							<button
								type="button"
								className={buttonClass}
								onClick={() => setResetToken((n) => n + 1)}
							>
								{t("handPlane.resetView")}
							</button>
							<label className="flex items-center gap-1 text-sm text-gray-800 dark:text-gray-200">
								<input
									type="checkbox"
									checked={autoRotate}
									onChange={(e) => setAutoRotate(e.target.checked)}
								/>
								{t("handPlane.autoRotate")}
							</label>
							<label className="flex items-center gap-1 text-sm text-gray-800 dark:text-gray-200">
								<input
									type="checkbox"
									checked={isolate}
									disabled={!selected}
									onChange={(e) => setIsolate(e.target.checked)}
								/>
								{t("handPlane.isolate")}
							</label>
						</div>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							{t("handPlane.hint")}
						</p>
					</div>
				</div>

				<div className="space-y-3">
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							<h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
								{t("handPlane.parts")}
							</h4>
							<div className="flex gap-1">
								<button
									type="button"
									className={buttonClass}
									aria-label={t("handPlane.previous")}
									onClick={() => step(-1)}
								>
									‹
								</button>
								<button
									type="button"
									className={buttonClass}
									aria-label={t("handPlane.next")}
									onClick={() => step(1)}
								>
									›
								</button>
							</div>
						</div>
						<ol className="text-sm space-y-0.5">
							{handPlaneParts.map((p, i) => (
								<li key={p.id}>
									<button
										type="button"
										onClick={() => select(selected === p.id ? null : p.id)}
										className={`w-full flex items-center gap-2 px-1.5 py-1 text-left ${
											selected === p.id
												? "bg-blue-100 dark:bg-blue-900/50 text-gray-900 dark:text-white"
												: "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
										}`}
									>
										<span className="w-5 text-right text-xs font-bold text-gray-500 dark:text-gray-400">
											{i + 1}
										</span>
										<span
											className="w-3 h-3 shrink-0 rounded-sm ring-1 ring-black/20 dark:ring-white/20"
											style={{ backgroundColor: p.color }}
										/>
										{tl(p.name, lang)}
									</button>
								</li>
							))}
						</ol>
					</div>

					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 min-h-24">
						{selectedPart ? (
							<>
								<h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
									{selectedIndex + 1}. {tl(selectedPart.name, lang)}
								</h4>
								<p className="text-sm text-gray-700 dark:text-gray-300">
									{tl(selectedPart.description, lang)}
								</p>
							</>
						) : (
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{t("handPlane.selectPrompt")}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
