import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tl } from "../data/i18n-helpers";
import { recipes } from "../data/recipes";

export default function Recipes() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const allTags = useMemo(() => {
		const tags = new Set<string>();
		recipes.forEach((r) => r.tags.forEach((tag) => tags.add(tag)));
		return Array.from(tags).sort();
	}, []);

	const filtered = useMemo(() => {
		const q = searchTerm.toLowerCase();
		return recipes.filter((r) => {
			const desc = r.description ? tl(r.description, lang) : "";
			const matchesSearch =
				!q ||
				r.title.toLowerCase().includes(q) ||
				desc.toLowerCase().includes(q);
			const matchesTags =
				selectedTags.length === 0 ||
				selectedTags.every((tag) => r.tags.includes(tag));
			return matchesSearch && matchesTags;
		});
	}, [searchTerm, selectedTags, lang]);

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	};

	return (
		<main className="flex flex-col gap-6 py-8 container max-w-(--breakpoint-xl) mx-auto px-4">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
					{t("recipes.title")}
				</h1>

				<div className="flex flex-col gap-4">
					<input
						type="text"
						placeholder={t("recipes.searchPlaceholder")}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
					/>

					{allTags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{allTags.map((tag) => (
								<button
									key={tag}
									onClick={() => toggleTag(tag)}
									className={`px-3 py-1 rounded-full text-sm transition-colors ${
										selectedTags.includes(tag)
											? "bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white font-medium"
											: "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
									}`}
								>
									{tag}
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			{filtered.length === 0 ? (
				<div className="text-center py-8 text-gray-600 dark:text-gray-400">
					{t("recipes.noResults")}
				</div>
			) : (
				<ul className="flex flex-col gap-6">
					{filtered.map((r) => (
						<li
							key={r.url}
							className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
						>
							<a
								href={r.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl font-semibold text-blue-700 dark:text-blue-400 hover:underline self-start"
							>
								{r.title} ↗
							</a>
							{r.description && (
								<p className="max-w-prose text-gray-700 dark:text-gray-200 leading-relaxed">
									{tl(r.description, lang)}
								</p>
							)}
							{r.tags.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{r.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
