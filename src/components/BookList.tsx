import { Link } from "react-router-dom";

export default function BookList({
  books,
}: {
  books: {
    title: string;
    author: string;
    genres: string[];
    notes: string[];
    status: string;
    slug?: string;
  }[];
}) {
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
            {/* <p className="text-sm leading-6 text-gray-900">{book.status}</p> */}
            <p className="text-sm leading-6 text-gray-900 flex gap-1">
              <span className="material-symbols-outlined">notes</span>
              {book.notes.length}
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              {book.genres.join(", ")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
