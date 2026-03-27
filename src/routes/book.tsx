import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { type Book, books as booksData } from "../data/books";
import { genreTranslations } from "../data/genre-translations";

function BookPage() {
	const slug = useParams<{ slug: string }>().slug;
	const books = booksData as Book[];
	const book = books.find((b: Book) => b.slug === slug);
	const { t, i18n } = useTranslation();
	const translateGenre = (genre: string) =>
		i18n.language === "en" ? genreTranslations[genre] || genre : genre;

	if (!book) {
		return <p className="text-gray-500 text-sm">{t("books.loading")}</p>;
	}

	return (
		<main className="flex flex-col gap-4 container max-w-(--breakpoint-xl)">
			<p className="text-2xl text-gray-900 dark:text-gray-100">{book.title}</p>
			<p className="text-sm text-gray-700 dark:text-gray-300">
				{t("books.author")}: {book.author}
			</p>
			<div className="flex gap-2 flex-wrap">
				{book.genres.map((genre) => (
					<div
						key={genre}
						className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 dark:border-gray-100 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700 dark:text-gray-300"
					>
						{translateGenre(genre)}
					</div>
				))}
			</div>
			<ul className="flex flex-col w-full max-w-lg gap-3">
				{book.notes.map((note, index) => (
					<li
						className="flex gap-4 pt-2 pb-4 bg-slate-300 dark:bg-slate-700 border-l-2 border-slate-600 dark:border-slate-400"
						key={index}
					>
						<p className="before:content-['\u201C\u00a0'] after:content-['\u00a0\u201D'] italic mx-2 font-sans antialiased text-gray-800 dark:text-gray-200">
							{note}
						</p>
					</li>
				))}
			</ul>
		</main>
	);
}

export default BookPage;
