import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { type Bookmark, bookmarks as bookmarksData } from "../data/bookmarks";

function BookmarkList({
	bookmarks,
	tagFilters,
	handleTagFilter,
}: {
	bookmarks: Bookmark[];
	tagFilters: string[];
	handleTagFilter: (checked: boolean, tag: string) => void;
}) {
	if (bookmarks.length === 0) return null;
	return (
		<ol className="space-y-0.5">
			{bookmarks.map((bookmark, index) => (
				<li
					key={bookmark.id || bookmark.url || index}
					className="flex items-baseline gap-x-1 py-0.5 text-sm leading-5"
				>
					<span className="text-gray-400 text-xs w-5 shrink-0 text-right">
						{index + 1}.
					</span>
					<a
						href={bookmark.url}
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-gray-900 dark:text-gray-100 hover:underline"
					>
						{bookmark.title}
					</a>
					{bookmark.description && (
						<span className="text-gray-500 text-xs hidden sm:inline">
							— {bookmark.description}
						</span>
					)}
					<span className="hidden sm:inline text-xs text-gray-400">
						|{" "}
						{bookmark.tags.map((tag, ti) => (
							<button
								key={`${bookmark.url}-${tag}-${ti}`}
								className={`hover:underline ${tagFilters.includes(tag) ? "font-semibold text-gray-600 dark:text-gray-300" : ""}`}
								onClick={() =>
									handleTagFilter(!tagFilters.includes(tag), tag)
								}
							>
								{tag}
								{ti < bookmark.tags.length - 1 ? ", " : ""}
							</button>
						))}
					</span>
				</li>
			))}
		</ol>
	);
}

function BookmarksPage() {
	const bookmarks = bookmarksData as Bookmark[];
	const [tagFilters, setTagFilters] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const { t } = useTranslation();
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const searchRef = useRef<HTMLDivElement>(null);

	const availableTags = Array.from(
		new Set(bookmarks.flatMap((bookmark) => bookmark.tags)),
	).sort((tagA, tagB) => {
		const countA = bookmarks.filter((bookmark) =>
			bookmark.tags.includes(tagA),
		).length;
		const countB = bookmarks.filter((bookmark) =>
			bookmark.tags.includes(tagB),
		).length;
		return countB - countA;
	});

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node)
			) {
				setShowSuggestions(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleTagFilter = (isChecked: boolean, tag: string) => {
		if (isChecked) {
			setTagFilters([...tagFilters, tag]);
		} else {
			setTagFilters(tagFilters.filter((filter) => filter !== tag));
		}
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);

		if (value.length > 0) {
			const filteredTags = availableTags.filter((tag) =>
				tag.toLowerCase().includes(value.toLowerCase()),
			);
			setSuggestions(filteredTags);
			setShowSuggestions(true);
		} else {
			setSuggestions([]);
			setShowSuggestions(false);
		}
	};

	const handleSuggestionClick = (tag: string) => {
		setSearchTerm("");
		setShowSuggestions(false);
		if (!tagFilters.includes(tag)) {
			handleTagFilter(true, tag);
		}
	};

	const filteredBookmarks = bookmarks.filter((bookmark) => {
		const { title, tags } = bookmark;
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		const matchesSearch =
			title.toLowerCase().includes(lowerCaseSearchTerm) ||
			tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm));
		const matchesTags =
			tagFilters.length === 0 ||
			bookmark.tags.some((tag) => tagFilters.includes(tag));
		return matchesSearch && matchesTags;
	});

	return (
		<main className="flex flex-col gap-4 container max-w-(--breakpoint-xl)">
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
					{t("bookmarks.title")}
				</h1>
				<div className="relative" ref={searchRef}>
					<input
						type="text"
						placeholder={t("bookmarks.searchPlaceholder")}
						value={searchTerm}
						onChange={handleSearch}
						onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
					/>
					{showSuggestions && suggestions.length > 0 && (
						<div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
							{suggestions.map((tag) => (
								<button
									key={tag}
									onClick={() => handleSuggestionClick(tag)}
									className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
								>
									<span>{tag}</span>
									{tagFilters.includes(tag) && (
										<span className="text-blue-500">✓</span>
									)}
								</button>
							))}
						</div>
					)}
				</div>
			</div>
			{tagFilters.length > 0 && (
				<div className="flex flex-wrap gap-2">
					<button
						onClick={() => setTagFilters([])}
						className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
					>
						{t("bookmarks.clearFilters")}
					</button>
					{tagFilters.map((tag) => (
						<button
							key={tag}
							onClick={() => handleTagFilter(false, tag)}
							className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors flex items-center gap-1"
						>
							{tag}
							<span className="text-lg">&times;</span>
						</button>
					))}
				</div>
			)}
			{tagFilters.length > 0 ? (
				availableTags
					.filter((tag) => tagFilters.includes(tag))
					.map((tag) => {
						const tagBookmarks = filteredBookmarks.filter((b) =>
							b.tags.includes(tag),
						);
						if (tagBookmarks.length === 0) return null;
						return (
							<section key={tag}>
								<div className="flex items-center gap-3 mb-1">
									<p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 shrink-0">
										{tag} ({tagBookmarks.length})
									</p>
									<hr className="flex-1 border-gray-200 dark:border-gray-700" />
								</div>
								<BookmarkList
									bookmarks={tagBookmarks}
									tagFilters={tagFilters}
									handleTagFilter={handleTagFilter}
								/>
							</section>
						);
					})
			) : (
				availableTags.map((tag) => {
					const tagBookmarks = filteredBookmarks.filter((b) =>
						b.tags.includes(tag),
					);
					if (tagBookmarks.length === 0) return null;
					return (
						<section key={tag}>
							<div className="flex items-center gap-3 mb-1">
								<p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 shrink-0">
									{tag} ({tagBookmarks.length})
								</p>
								<hr className="flex-1 border-gray-200 dark:border-gray-700" />
							</div>
							<BookmarkList
								bookmarks={tagBookmarks}
								tagFilters={tagFilters}
								handleTagFilter={handleTagFilter}
							/>
						</section>
					);
				})
			)}
		</main>
	);
}

export default BookmarksPage;
