import { todos } from "../data/todos";

export default function Todos() {
  return (
    <main className="container max-w-screen-xl mx-auto px-4 py-8">
      {todos?.length ? (
        <div className="card p-6">
          <h1 className="text-3xl font-bold mb-6">Todos</h1>
          <ol className="space-y-3">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span className="text-gray-500 dark:text-gray-400">
                  {index + 1}.
                </span>
                <span className="text-gray-700 dark:text-gray-200">{todo}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </main>
  );
}
