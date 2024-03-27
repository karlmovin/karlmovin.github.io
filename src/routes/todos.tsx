const todos = [
  "lägg till funktion att filtrera böcker på genre",
  "förbättra bokanteckningsvisningen",
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
