import { useParams } from "react-router";
import { books as booksData } from "../data/books.json";

type Book = {
  title: string;
  author?: string;
  genres: string[];
  notes: string[];
  slug: string;
};

function BookPage() {
  const slug = useParams<{ slug: string }>().slug;
  const books = booksData as Book[];
  const book = books.find((b: Book) => b.slug === slug);

  if (!book) {
    return <p className="text-gray-500 text-sm">Laddar bok...</p>;
  }

  return (
    <main className="flex flex-col gap-4 container max-w-(--breakpoint-xl)">
      <p className="text-2xl text-gray-900 dark:text-gray-100">{book.title}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Författare: {book.author}
      </p>
      <div className="flex gap-2 flex-wrap">
        {book.genres.map((genre) => (
          <div
            key={genre}
            className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 dark:border-gray-100 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700 dark:text-gray-300"
          >
            {genre}
          </div>
        ))}
      </div>
      <ul className="flex flex-col w-full max-w-lg gap-3">
        {book.notes.map((note, index) => (
          <li
            className="flex gap-4 pt-2 pb-4 bg-slate-300 dark:bg-slate-700 border-l-2 border-slate-600 dark:border-slate-400"
            key={index}
          >
            <p className="before:content-['\201C\00a0'] after:content-['\00a0\201D'] italic mx-2 font-sans antialiased text-gray-800 dark:text-gray-200">
              {note}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BookPage;
