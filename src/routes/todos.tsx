const todos = [
  "fixa mobilvyn",
  "känsla->behov->vilja->handling",
  "kika på https://github.com/remarkjs/react-markdown?tab=readme-ov-file",
  "inkludera rimliga tider i vad ska jag göra?",
  "fundera över hur typisk konst för en period ska visas på konstsidan: Karusell?",
  "flytta väderdatan åt sidan",
  "använd metAPIs ikoner, fundera över att använda existerande lib för detta",
  "visa förslagen på vad jag kan göra på ett bättre sätt",
  "kika på https://texttv.nu/blogg/texttv-api",
  "fler gubbar, minst 4. 2 skarvsladdar a 10 m. 1 vinda. 2 polermaskiner. 4 stegar , möjligen fixade som en ställning med gåplank. många rena microfleecedukar. tvål för rengöring. kläder som kan bli skitiga. torrt uppe vid relingen, dvs avtorkat efter tvätten. högtalare. fika. lunch. papper för applicering av medel. hushållspapper o handdukar. process: applicera med papper, polera med maskin. krokar gör att hänga saker på. örpnproppar. visir. ansiktsskydd.",
  "https://www.trafiklab.se/sv/api/trafiklab-apis/sl/",
  "https://api.sl.se/fordonspositioner#PT",
  "https://en.parkopedia.se/",
  "https://loppistajm.se/kalender.html",
  "https://ground.news/landingV7/nutshell?utm_source=nutshell&utm_medium=Youtube&utm_campaign=nov30",
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
