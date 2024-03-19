import { useParams } from "react-router-dom";
import books from "../data/books.json";

function BookPage() {
  const slug = useParams<{ slug: string }>().slug;
  const { title, author, genres, notes } = books.books.find(
    (book) => book.slug === slug
  )!;
  return (
    <div>
      <h1>{title}</h1>
      <h2>Author: {author}</h2>
      <h3>Genres: {genres.join(", ")}</h3>
      <h3>Notes:</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookPage;
