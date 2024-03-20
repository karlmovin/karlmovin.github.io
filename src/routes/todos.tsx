const todos = [
  "lägg till funktion att filtrera på genre",
  "presentera anteckningar bättre",
  "förbättra packlistvisningen, gör den dynamisk",
  "gör klart packlistorna",
];

export default function Todos() {
  return (
    <section className="container max-w-screen-xl">
      <p className="text-4xl">todos</p>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </section>
  );
}
