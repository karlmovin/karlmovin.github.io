const todos = [
  "fixa mobilvyn",
  "känsla->behov->vilja->handling",
  "kika på https://github.com/remarkjs/react-markdown?tab=readme-ov-file",
  "inkludera rimliga tider i vad ska jag göra?",
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
