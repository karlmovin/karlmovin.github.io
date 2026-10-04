import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tl } from "../data/i18n-helpers";
import {
	type Color,
	colorLabels,
	type FoodTag,
	foodLabels,
	wines,
} from "../data/wines";

function Rating({ value, max = 10 }: { value: number; max?: number }) {
	return (
		<span
			className="text-yellow-500 dark:text-yellow-400"
			aria-label={`${value} / ${max}`}
			title={`${value} / ${max}`}
		>
			{"★".repeat(value)}
			<span className="text-gray-300 dark:text-gray-600">
				{"★".repeat(max - value)}
			</span>
		</span>
	);
}

function PriceClass({ value, max = 4 }: { value: number; max?: number }) {
	return (
		<span
			className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full text-green-600 dark:text-green-400"
			aria-label={`${"$".repeat(value)} / ${"$".repeat(max)}`}
			title={`${"$".repeat(value)} / ${"$".repeat(max)}`}
		>
			{"$".repeat(value)}
			<span className="text-gray-300 dark:text-gray-500">
				{"$".repeat(max - value)}
			</span>
		</span>
	);
}

const chipClass =
	"px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full";

function Select({
	ariaLabel,
	value,
	onChange,
	children,
}: {
	ariaLabel: string;
	value: string;
	onChange: (value: string) => void;
	children: React.ReactNode;
}) {
	return (
		<div className="relative">
			<select
				aria-label={ariaLabel}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="appearance-none cursor-pointer rounded-full bg-gray-100 dark:bg-gray-700 py-2 pl-4 pr-9 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
			>
				{children}
			</select>
			<svg
				aria-hidden="true"
				viewBox="0 0 20 20"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
			</svg>
		</div>
	);
}

function ToggleChip({
	checked,
	onChange,
	label,
}: {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label: string;
}) {
	return (
		<button
			type="button"
			aria-pressed={checked}
			onClick={() => onChange(!checked)}
			className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
				checked
					? "bg-blue-600 text-white hover:bg-blue-700"
					: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
			}`}
		>
			{label}
		</button>
	);
}

export default function Wines() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const [searchTerm, setSearchTerm] = useState("");
	const [colorFilter, setColorFilter] = useState<Color | "">("");
	const [grapeFilter, setGrapeFilter] = useState("");
	const [foodFilter, setFoodFilter] = useState<FoodTag | "">("");
	const [ecologicalOnly, setEcologicalOnly] = useState(false);
	const [socialOnly, setSocialOnly] = useState(false);

	const allGrapes = useMemo(() => {
		const grapes = new Set<string>();
		for (const w of wines) {
			for (const grape of w.grapes) grapes.add(grape);
		}
		return Array.from(grapes).sort();
	}, []);

	const filtered = useMemo(() => {
		const q = searchTerm.toLowerCase();
		return wines.filter((w) => {
			const notes = w.notes ? tl(w.notes, lang) : "";
			const matchesSearch =
				!q ||
				w.name.toLowerCase().includes(q) ||
				notes.toLowerCase().includes(q);
			const matchesColor = !colorFilter || w.color === colorFilter;
			const matchesGrape = !grapeFilter || w.grapes.includes(grapeFilter);
			const matchesFood = !foodFilter || w.food.includes(foodFilter);
			const matchesEcological = !ecologicalOnly || w.ecological;
			const matchesSocial = !socialOnly || w.social;
			return (
				matchesSearch &&
				matchesColor &&
				matchesGrape &&
				matchesFood &&
				matchesEcological &&
				matchesSocial
			);
		});
	}, [
		searchTerm,
		colorFilter,
		grapeFilter,
		foodFilter,
		ecologicalOnly,
		socialOnly,
		lang,
	]);

	return (
		<main className="flex flex-col gap-6 py-8 container max-w-(--breakpoint-xl) mx-auto px-4">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
					{t("wines.title")}
				</h1>

				<div className="flex flex-col gap-4">
					<input
						type="text"
						placeholder={t("wines.searchPlaceholder")}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
					/>

					<div className="flex flex-wrap items-center gap-3">
						<Select
							ariaLabel={t("wines.filters.color")}
							value={colorFilter}
							onChange={(value) => setColorFilter(value as Color | "")}
						>
							<option value="">{t("wines.filters.allColors")}</option>
							{(Object.keys(colorLabels) as Color[]).map((color) => (
								<option key={color} value={color}>
									{tl(colorLabels[color], lang)}
								</option>
							))}
						</Select>

						<Select
							ariaLabel={t("wines.filters.grapes")}
							value={grapeFilter}
							onChange={setGrapeFilter}
						>
							<option value="">{t("wines.filters.allGrapes")}</option>
							{allGrapes.map((grape) => (
								<option key={grape} value={grape}>
									{grape}
								</option>
							))}
						</Select>

						<Select
							ariaLabel={t("wines.filters.food")}
							value={foodFilter}
							onChange={(value) => setFoodFilter(value as FoodTag | "")}
						>
							<option value="">{t("wines.filters.allFood")}</option>
							{(Object.keys(foodLabels) as FoodTag[]).map((food) => (
								<option key={food} value={food}>
									{tl(foodLabels[food], lang)}
								</option>
							))}
						</Select>

						<ToggleChip
							checked={ecologicalOnly}
							onChange={setEcologicalOnly}
							label={t("wines.filters.ecological")}
						/>

						<ToggleChip
							checked={socialOnly}
							onChange={setSocialOnly}
							label={t("wines.filters.social")}
						/>
					</div>
				</div>
			</div>

			{filtered.length === 0 ? (
				<div className="text-center py-8 text-gray-600 dark:text-gray-400">
					{t("wines.noResults")}
				</div>
			) : (
				<ul className="flex flex-col gap-6">
					{filtered.map((w) => (
						<li
							key={w.url}
							className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
						>
							<div className="flex flex-col gap-1">
								<a
									href={w.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xl font-semibold text-blue-700 dark:text-blue-400 hover:underline"
								>
									{w.name} ↗
								</a>
								<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
									<span className="text-sm text-gray-600 dark:text-gray-400">
										<span
											aria-label={tl(w.country.name, lang)}
											className="mr-1"
										>
											{w.country.flag}
										</span>
										{tl(w.country.name, lang)}
									</span>
									<span className="text-sm text-gray-600 dark:text-gray-400">
										{w.year}
									</span>
									<Rating value={w.rating} />
									<PriceClass value={w.priceClass} />
								</div>
							</div>
							{w.notes && (
								<p className="max-w-prose text-gray-700 dark:text-gray-200 leading-relaxed">
									{tl(w.notes, lang)}
								</p>
							)}
							<div className="flex flex-wrap gap-2">
								<span className={chipClass}>
									{tl(colorLabels[w.color], lang)}
								</span>
								{w.grapes.map((grape) => (
									<span key={grape} className={chipClass}>
										{grape}
									</span>
								))}
								{w.food.map((food) => (
									<span key={food} className={chipClass}>
										{tl(foodLabels[food], lang)}
									</span>
								))}
								{w.ecological && (
									<span className={chipClass}>
										{t("wines.filters.ecological")}
									</span>
								)}
								{w.social && (
									<span className={chipClass}>{t("wines.filters.social")}</span>
								)}
							</div>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
