import books from "../data/books.json";
import BookList from "../components/BookList";

export default function Books() {
  return (
    <>
      <main className="flex flex-col gap-4 container max-w-screen-xl">
        <section>
          <p className="text-4xl">Anteckningar från böcker</p>
        </section>

        <section>
          <p className="text-2xl">Pågående böcker</p>
          <BookList
            books={books.books.filter((book) => book.status === "reading")}
          />
        </section>

        <section>
          <p className="text-2xl">Lästa böcker</p>
          <BookList
            books={books.books.filter((book) => book.status === "read")}
          />
        </section>

        <section>
          <p className="text-2xl">Planerade böcker</p>
          <BookList
            books={books.books.filter((book) => book.status === "planned")}
          />
        </section>
      </main>
    </>
  );
}
