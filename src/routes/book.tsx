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
      <div className="flex gap-2">
        {genres.map((genre) => (
          <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700">
            {genre}
          </div>
        ))}
      </div>
      <div className="w-[32rem]">
        <ul className="flex flex-col w-full">
          {notes.map((note, index) => (
            <li className="relative flex flex-col gap-2" key={index}>
              <div className="flex gap-4 pb-6">
                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-0.5 text-white"></span>
                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                <blockquote className="block font-sans text-normal antialiased font-normal leading-normal text-gray-600">
                  {note}
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default BookPage;
