import { useState } from "react";
import books from "../data/books.json";
import { Link } from "react-router-dom";

function BookList({
  books,
  genreFilters = [],
  handleGenreFilter = () => {},
}: {
  books: {
    title: string;
    author: string;
    genres: string[];
    notes: string[];
    status: string;
    slug?: string;
  }[];
  genreFilters?: string[];
  handleGenreFilter?: (checked: boolean, genre: string) => void;
}) {
  if (books.length === 0)
    return <p className="text-gray-500 text-sm">Inga böcker</p>;
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {books.map((book) => (
        <li key={book.title} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <li>
                <Link
                  to={book.slug ?? ""}
                  className={book.slug ? "" : "pointer-events-none"}
                  aria-disabled={book.slug ? "false" : "true"}
                >
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {book.title}
                  </p>
                </Link>
              </li>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {book.author}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900 flex gap-1">
              <span className="material-symbols-outlined">notes</span>
              {book.notes.length}
            </p>
            <div className="flex gap-1">
              {book.genres.map((genre) => (
                <button
                  key={genre}
                  className={`text-gray-500 text-sm hover:underline ${
                    genreFilters.includes(genre) ? "font-semibold" : ""
                  }`}
                  onClick={() =>
                    handleGenreFilter(!genreFilters.includes(genre), genre)
                  }
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Books() {
  const booksByStatus = [
    ["reading", "Pågående böcker"],
    ["read", "Lästa böcker"],
    ["planned", "Planerade böcker"],
  ].map(([status, title]) => ({
    title,
    books: books.books.filter((book) => book.status === status),
  }));

  // const allBookGenres = Array.from(
  //   new Set(books.books.flatMap((book) => book.genres))
  // );

  const [genreFilters, setGenreFilters] = useState<string[]>([]);
  const handleGenreFilter = (checked: boolean, genre: string) => {
    setGenreFilters((prev) =>
      checked ? [...prev, genre] : prev.filter((g) => g !== genre)
    );
  };

  return (
    <main className="flex flex-col gap-4 container max-w-screen-xl">
      {booksByStatus.map(({ title, books }) => (
        <section key={title}>
          <p className="text-2xl">{title}</p>
          <BookList
            books={books.filter((book) =>
              genreFilters.length === 0
                ? true
                : book.genres.some((genre) => genreFilters.includes(genre))
            )}
            genreFilters={genreFilters}
            handleGenreFilter={handleGenreFilter}
          />
        </section>
      ))}
    </main>
  );
}
