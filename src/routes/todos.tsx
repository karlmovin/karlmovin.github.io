const todos = [
  "kika på https://github.com/remarkjs/react-markdown?tab=readme-ov-file",
  "inkludera rimliga tider i vad ska jag göra?",
  "visa förslagen på vad jag kan göra på ett bättre sätt",
  "Kika på https://twitter.com/i/events/994601867987619840 och https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886, börja bygga temat...",
];

const notes = [
  "känsla->behov->vilja->handling",
  "fler gubbar, minst 4. 2 skarvsladdar a 10 m. 1 vinda. 2 polermaskiner. 4 stegar , möjligen fixade som en ställning med gåplank. många rena microfleecedukar. tvål för rengöring. kläder som kan bli skitiga. torrt uppe vid relingen, dvs avtorkat efter tvätten. högtalare. fika. lunch. papper för applicering av medel. hushållspapper o handdukar. process: applicera med papper, polera med maskin. krokar gör att hänga saker på. örpnproppar. visir. ansiktsskydd.",
];

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
