import books from "../data/books.json";
export default function Books() {
  return (
    <>
      <main className="flex flex-col gap-4 container max-w-screen-xl">
        <section>
          <p className="text-4xl">Anteckningar från böcker</p>
        </section>
        <section>
          <p className="text-2xl">Lästa böcker</p>
          <ul>
            {books.books
              .filter((book) => book.status === "read")
              .map((book) => (
                <li>
                  {book.title} av {book.author}
                </li>
              ))}
          </ul>
        </section>

        <section>
          <p className="text-2xl">Pågående böcker</p>
          <ul>
            {books.books
              .filter((book) => book.status === "reading")
              .map((book) => (
                <li>
                  {book.title} av {book.author}
                </li>
              ))}
          </ul>
        </section>

        <section>
          <p className="text-2xl">Planerade böcker</p>
          <ul>
            {books.books
              .filter((book) => book.status === "planned")
              .map((book) => (
                <li>
                  {book.title} av {book.author}
                </li>
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}
