import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type PostAttributes = {
	title: string;
	date: string;
	tags?: string[];
};

type Post = PostAttributes & {
	body: string;
};

const postModules = import.meta.glob("../data/posts/*.md", {
	eager: true,
}) as Record<string, { attributes: PostAttributes; markdown: string }>;

const posts: Post[] = Object.values(postModules).map((mod) => ({
	...mod.attributes,
	body: mod.markdown,
}));

function HighlightText({
	text,
	searchTerm,
}: {
	text: string;
	searchTerm: string;
}) {
	if (!searchTerm) return <>{text}</>;

	const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));

	return (
		<>
			{parts.map((part, i) =>
				part.toLowerCase() === searchTerm.toLowerCase() ? (
					<mark
						key={i}
						className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-gray-100 px-0.5 rounded-sm"
					>
						{part}
					</mark>
				) : (
					part
				),
			)}
		</>
	);
}

function Post({
	children: post,
	searchTerm,
}: {
	children: Post;
	searchTerm: string;
}) {
	const [isTruncated, setIsTruncated] = useState(true);
	const { t, i18n } = useTranslation();
	const formattedDate = new Date(post.date).toLocaleDateString(
		i18n.language === "sv" ? "sv-SE" : "en-US",
		{
			year: "numeric",
			month: "long",
			day: "numeric",
		},
	);

	return (
		<li className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
			<div className="flex flex-col gap-1">
				<div className="text-xl font-semibold text-gray-900 dark:text-white">
					<HighlightText text={post.title} searchTerm={searchTerm} />
				</div>
				<div className="text-sm text-gray-600 dark:text-gray-400">
					{formattedDate}
				</div>
			</div>
			<div
				className={`${
					isTruncated ? "line-clamp-3" : "line-clamp-none"
				} max-w-prose text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line`}
			>
				<HighlightText text={post.body} searchTerm={searchTerm} />
			</div>
			{post.tags && post.tags.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full"
						>
							{tag}
						</span>
					))}
				</div>
			)}
			<button
				onClick={() => setIsTruncated(!isTruncated)}
				className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors self-start"
			>
				{isTruncated ? t("blog.showMore") : t("blog.showLess")}
			</button>
		</li>
	);
}

function Blog() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const { t } = useTranslation();

	const allTags = useMemo(() => {
		const tags = new Set<string>();
		posts.forEach((post) => {
			post.tags?.forEach((tag) => tags.add(tag));
		});
		return Array.from(tags).sort();
	}, []);

	const filteredPosts = useMemo(() => {
		return posts
			.filter((post) => {
				const matchesSearch =
					post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					post.body.toLowerCase().includes(searchTerm.toLowerCase());
				const matchesTags =
					selectedTags.length === 0 ||
					selectedTags.every((tag) => post.tags?.includes(tag));
				return matchesSearch && matchesTags;
			})
			.sort((b, a) => a.date.localeCompare(b.date));
	}, [searchTerm, selectedTags]);

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	};

	return (
		<main className="flex flex-col gap-6 py-8 container max-w-(--breakpoint-xl) mx-auto px-4">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
					{t("blog.title")}
				</h1>

				<div className="flex flex-col gap-4">
					<input
						type="text"
						placeholder={t("blog.searchPlaceholder")}
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

			{filteredPosts.length === 0 ? (
				<div className="text-center py-8 text-gray-600 dark:text-gray-400">
					{t("blog.noResults")}
				</div>
			) : (
				<ul className="flex flex-col gap-6">
					{filteredPosts.map((post) => (
						<Post key={post.title} searchTerm={searchTerm}>
							{post}
						</Post>
					))}
				</ul>
			)}
		</main>
	);
}

export default Blog;
