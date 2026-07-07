import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { type Book, books as booksData } from "../data/books";
import { genreTranslations } from "../data/genre-translations";

function BookList({
	books,
	genreFilters = [],
	handleGenreFilter = () => {},
}: {
	books: Book[];
	genreFilters?: string[];
	handleGenreFilter?: (checked: boolean, genre: string) => void;
}) {
	const { t, i18n } = useTranslation();
	const translateGenre = (genre: string) =>
		i18n.language === "en" ? genreTranslations[genre] || genre : genre;
	if (books.length === 0)
		return <p className="text-gray-500 text-sm">{t("books.noBooks")}</p>;
	return (
		<ol className="space-y-0.5">
			{books.map((book, index) => (
				<li
					key={book.id || book.slug || index}
					className="flex items-baseline gap-x-1 py-0.5 text-sm leading-5"
				>
					<span className="text-gray-400 text-xs w-5 shrink-0 text-right">
						{index + 1}.
					</span>
					{(book.rating ?? 0) > 0 && (
						<span className="text-yellow-600 dark:text-yellow-400 text-xs">
							{"★".repeat(book.rating ?? 0)}
						</span>
					)}
					<Link
						to={book.slug ?? ""}
						className={`font-medium text-gray-900 dark:text-gray-100 hover:underline ${book.slug ? "" : "pointer-events-none"}`}
						aria-disabled={book.slug ? "false" : "true"}
					>
						{book.title.split(":")[0]}
					</Link>
						<span className="text-gray-500 text-xs">
							— {book.author}
						</span>
					<span className="ml-auto flex items-baseline gap-x-1">
						{(book.notes?.length ?? 0) > 0 && (
							<span className="text-gray-400 text-xs">
								({book.notes?.length})
							</span>
						)}
						<span className="hidden sm:inline text-xs text-gray-400">
							|{" "}
							{book.genres.map((genre, gi) => (
								<button
									key={`${book.slug}-${genre}-${gi}`}
									className={`hover:underline ${genreFilters.includes(genre) ? "font-semibold text-gray-600 dark:text-gray-300" : ""}`}
									onClick={() =>
										handleGenreFilter(
											!genreFilters.includes(genre),
											genre,
										)
									}
								>
									{translateGenre(genre)}
									{gi < book.genres.length - 1 ? ", " : ""}
								</button>
							))}
						</span>
					</span>
				</li>
			))}
		</ol>
	);
}

export default function Books() {
	const books = booksData as Book[];
	const { t } = useTranslation();

	const booksByStatus = [
		{ status: "reading" as const, title: t("books.reading") },
		{ status: "paused" as const, title: t("books.paused") },
		{ status: "read" as const, title: t("books.read") },
		{ status: "planned" as const, title: t("books.planned") },
	].map(({ status, title }) => ({
		title,
		books: books.filter((book) => book.status === status),
	}));

	const [genreFilters, setGenreFilters] = useState<string[]>([]);
	const handleGenreFilter = (checked: boolean, genre: string) => {
		setGenreFilters((prev) =>
			checked ? [...prev, genre] : prev.filter((g) => g !== genre),
		);
	};

	const filteredBooks = (books: Book[]) =>
		books.filter((book) =>
			genreFilters?.length === 0
				? true
				: book.genres.some((genre) => genreFilters.includes(genre)),
		);

	return (
		<main className="flex flex-col gap-4 container max-w-(--breakpoint-xl)">
			{booksByStatus.map(({ title, books }) => (
				<section key={title}>
					<div className="flex items-center gap-3 mb-1">
						<p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 shrink-0">
							{title} ({filteredBooks(books).length})
						</p>
						<hr className="flex-1 border-gray-200 dark:border-gray-700" />
					</div>
					<BookList
						books={filteredBooks(books)}
						genreFilters={genreFilters}
						handleGenreFilter={handleGenreFilter}
					/>
				</section>
			))}
		</main>
	);
}
