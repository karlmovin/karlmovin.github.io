import { todos } from "../data/todos";

export default function Todos() {
  return (
    <section className="container max-w-screen-xl">
      {todos?.length ? (
        <>
          <p className="text-4xl">Todos</p>
          <ol>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ol>
        </>
      ) : null}
    </section>
  );
}
