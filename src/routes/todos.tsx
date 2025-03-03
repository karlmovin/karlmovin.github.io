import { todos } from "../data/todos";
import { notes } from "../data/notes";

export default function Todos() {
  return (
    <section className="container max-w-screen-xl">
      <p className="text-4xl">Todos</p>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>

      <p className="text-4xl pt-6">Notes</p>
      <ol>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ol>
      <iframe
        className="w-full h-screen"
        src="https://www.svt.se/text-tv/webb/100"
      ></iframe>
    </section>
  );
}
