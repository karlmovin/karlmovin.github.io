const todos = [
  "fixa mobilvyn",
  "känsla->behov->vilja->handling",
  "kika på https://github.com/remarkjs/react-markdown?tab=readme-ov-file",
  "inkludera rimliga tider i vad ska jag göra?",
  "fundera över hur typisk konst för en period ska visas på konstsidan",
  "fundera över hur bokmärkena ska sorteras på ett vettigt sätt",
  "flytta väderdatan åt sidan",
  "använd metAPIs ikoner, fundera över att använda existerande lib för detta",
  "vis förslagen på vad jag kan göra på ett bättre sätt",
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
