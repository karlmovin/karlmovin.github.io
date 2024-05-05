import { useParams } from "react-router-dom";
import books from "../data/books.json";

function BookPage() {
  const slug = useParams<{ slug: string }>().slug;
  const { title, author, genres, notes } = books.books.find(
    (book) => book.slug === slug
  )!;
  return (
    <main className="flex flex-col gap-4 container max-w-screen-xl">
      <p className="text-2xl">{title}</p>
      <p className="text-sm">Författare: {author}</p>
      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <div
            key={genre}
            className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700"
          >
            {genre}
          </div>
        ))}
      </div>
      <ul className="flex flex-col w-full max-w-[32rem] gap-3">
        {notes.map((note, index) => (
          <li
            className="flex gap-4 pt-2 pb-4 bg-slate-300 border-l-2 border-slate-600"
            key={index}
          >
            <p className="before:content-['\201C\00a0'] after:content-['\00a0\201C'] italic mx-2 font-sans antialiased text-gray-800">
              {note}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BookPage;
