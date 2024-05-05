import { useState } from "react";
import books from "../data/books.json";
import { Link } from "react-router-dom";

function BookList({
  books,
  genreFilters = [],
  handleGenreFilter = () => {},
}: {
  books: {
    title?: string;
    author?: string;
    genres: string[];
    notes: string[];
    status?: string;
    slug?: string;
    image?: string;
    rating?: number;
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
            {book.image && (
              <img
                src={book.image}
                alt="avatar"
                className="inline-block relative object-cover object-center w-12 h-12"
              />
            )}
            <div className="min-w-0 flex-auto">
              <Link
                to={book.slug ?? ""}
                className={book.slug ? "" : "pointer-events-none"}
                aria-disabled={book.slug ? "false" : "true"}
              >
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {book.title}
                </p>
              </Link>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {book.author}
              </p>
              <div className="flex sm:hidden gap-1 flex-wrap">
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
          </div>
          <div className="shrink-0 flex flex-col items-end">
            <div className="flex gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < (book?.rating ?? 0) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      ></path>
                    </svg>
                  )
                )}
              </div>
              <p className="text-sm leading-6 text-gray-900 flex gap-1">
                <span className="material-symbols-outlined">notes</span>
                {book.notes.length}
              </p>
            </div>
            <div className="hidden sm:flex gap-1">
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
    ["paused", "Påbörjade böcker"],
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
