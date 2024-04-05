import { useState } from "react";

const konstnärer = {
  "Louis Wain": {
    url: "https://en.wikipedia.org/wiki/Louis_Wain",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Louis_Wain_-_Lascelles.png",
  },
  "Karl Mårtens": {
    url: "https://www.konstochfolk.se/2015/08/19/karl-martens/",
    image:
      "https://www.konstochfolk.se/files/2020/04/Karl-Ma%CC%8Artens-800x867.jpg",
  },
  "Theodor Kittelsen": {
    url: "https://en.wikipedia.org/wiki/Theodor_Kittelsen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kittelsen_av_krohg_1892.jpg",
  },
  "Eric H Olson": {
    url: "https://sv.wikipedia.org/wiki/Eric_H._Olson",
    image:
      "https://sis.modernamuseet.se/internal/media/dispatcher/12538/preview",
  },
  "Waldemar von Kozak": {
    url: "https://www.artstation.com/waldemarvonkozak",
    image:
      "https://cdnb.artstation.com/p/users/avatars/000/675/235/large/cc50ac9e26466f2eb71a4c677e6792b9.jpg?1520807145",
  },
  "Elhuervo (Niklas Åkerblad)": {
    url: "https://elhuervo.tumblr.com/",
    image:
      "https://static.tumblr.com/e812d26a629f7cbe9ece3d294ff752ce/jyntbvr/z5Anzi9x3/tumblr_static_8zjlkkr64xs0wso0oc4w808oo.jpg",
  },
  "Vincenzo Riccardi": {
    url: "https://www.artstation.com/vinartwork",
    image:
      "https://cdnb.artstation.com/p/users/avatars/000/733/101/large/20d2ce237e6e033c5f5e2d822710c1c3.jpg?1670611202",
  },
  "Hydro74 (Joshua M. Smith)": {
    url: "https://hydro74.com/",
    image: "https://hydro74.com/IMG_2024/LOGO_2.jpg",
  },
};
const konstperioder = {
  Medeltiden: {
    years: "500-1500",
    description: "En period präglad av religiös konst och kyrkliga motiv.",
    artists: [],
    url: "https://en.wikipedia.org/wiki/Medieval_art",
  },
  Renässansen: {
    years: "1400-1600",
    description:
      "En period av återupplivad intresse för antikens konst och humanism.",
    artists: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
    url: "https://en.wikipedia.org/wiki/Renaissance_art",
  },
  Manierismen: {
    years: "1520-1600",
    description:
      "Överdrivna former, tillgjorda teatraliska rörelser och oklara perspektiv.",
    artists: ["El Greco", "Parmigianino", "Giuseppe Arcimboldo"],
    url: "https://en.wikipedia.org/wiki/Mannerism",
  },
  Barocken: {
    years: "1600-1750",
    description:
      "En period av dramatisk och dekorativ konst med religiösa och världsliga motiv.",
    artists: ["Caravaggio", "Peter Paul Rubens", "Rembrandt"],
    url: "https://en.wikipedia.org/wiki/Baroque_art",
  },
  Rokoko: {
    years: "1700-1800",
    description:
      "En period av elegant och dekorativ konst med pastellfärger och romantiska motiv.",
    artists: [
      "Jean-Antoine Watteau",
      "François Boucher",
      "Jean-Honoré Fragonard",
    ],
    url: "https://en.wikipedia.org/wiki/Rococo",
  },
  Nyklassicismen: {
    years: "1750-1850",
    description:
      "En period av återgång till antikens ideal och enkelhet i konsten.",
    artists: [
      "Jacques-Louis David",
      "Antonio Canova",
      "Jean-Auguste-Dominique Ingres",
    ],
    url: "https://en.wikipedia.org/wiki/Neoclassicism",
  },
  Romantiken: {
    years: "1800-1850",
    description:
      "En period av känslomässig och dramatisk konst med fokus på naturen och det övernaturliga.",
    artists: ["Caspar David Friedrich", "Eugène Delacroix", "William Blake"],
    url: "https://en.wikipedia.org/wiki/Romanticism",
  },
  Realismen: {
    years: "1840-1900",
    description:
      "En period av konst som avbildar verkligheten och vardagslivet.",
    artists: ["Gustave Courbet", "Édouard Manet", "Jean-François Millet"],
    url: "https://en.wikipedia.org/wiki/Realism_(arts)",
  },
  Impressionismen: {
    years: "1860-1900",
    description:
      "En period av konst som fångar ögonblickets intryck och ljusets skiftningar.",
    artists: ["Claude Monet", "Pierre-Auguste Renoir", "Edgar Degas"],
    url: "https://en.wikipedia.org/wiki/Impressionism",
  },
  Symbolismen: {
    years: "1880-1910",
    description:
      "En period av konst som uttrycker symboliska och drömlika teman.",
    artists: ["Gustav Klimt", "Edvard Munch", "Odilon Redon"],
    url: "https://en.wikipedia.org/wiki/Symbolism_(arts)",
  },
  "Jugend / Art Nouveau": {
    years: "1890-1910",
    description:
      "En period av konst med organiska former och dekorativa mönster.",
    artists: ["Alphonse Mucha", "Antoni Gaudí", "René Lalique"],
    url: "https://en.wikipedia.org/wiki/Art_Nouveau",
  },
  Pointilism: {
    years: "1886-1906",
    description:
      "En period av konst som använder små prickar för att skapa bilder.",
    artists: ["Georges Seurat", "Paul Signac", "Camille Pissarro"],
    url: "https://en.wikipedia.org/wiki/Pointillism",
  },
  Modernism: {
    years: "1890-1940",
    description:
      "En period av konst som bryter med traditionella normer och utforskar nya uttrycksformer.",
    artists: ["Pablo Picasso", "Henri Matisse", "Wassily Kandinsky"],
    url: "https://en.wikipedia.org/wiki/Modernism",
  },
  Fauvismen: {
    years: "1900-1910",
    description: "En period av konst med starka och expressiva färger.",
    artists: ["Henri Matisse", "André Derain", "Raoul Dufy"],
    url: "https://en.wikipedia.org/wiki/Fauvism",
  },
  Kubismen: {
    years: "1907-1920",
    description:
      "En period av konst som bryter ner motiv i geometriska former och olika perspektiv.",
    artists: ["Pablo Picasso", "Georges Braque", "Juan Gris"],
    url: "https://en.wikipedia.org/wiki/Cubism",
  },
  Expressionism: {
    years: "1905-1925",
    description:
      "En period av konst som uttrycker starka känslor och inre upplevelser.",
    artists: ["Edvard Munch", "Egon Schiele", "Ernst Ludwig Kirchner"],
    url: "https://en.wikipedia.org/wiki/Expressionism",
  },
  "Futurismen / Vorticism": {
    years: "1909-1914",
    description:
      "En period av konst som hyllar teknologi, rörelse och framtidstro.",
    artists: ["Umberto Boccioni", "Giacomo Balla", "Wyndham Lewis"],
    url: "https://en.wikipedia.org/wiki/Futurism",
  },
  Suprematism: {
    years: "1913-1920",
    description:
      "En period av konst som fokuserar på geometriska former och abstraktion.",
    artists: ["Kazimir Malevich", "El Lissitzky", "Natalia Goncharova"],
    url: "https://en.wikipedia.org/wiki/Suprematism",
  },
  Dadaismen: {
    years: "1916-1924",
    description:
      "En period av konst som ifrågasätter etablerade normer och konventioner.",
    artists: ["Marcel Duchamp", "Hannah Höch", "Man Ray"],
    url: "https://en.wikipedia.org/wiki/Dada",
  },
  "Art Deco": {
    years: "1920-1939",
    description:
      "En period av konst med eleganta former, geometriska mönster och lyxiga material.",
    artists: ["Tamara de Lempicka", "Erté", "Cassandre"],
    url: "https://en.wikipedia.org/wiki/Art_Deco",
  },
  Surrealismen: {
    years: "1920-1950",
    description:
      "En period av konst som utforskar det undermedvetna och drömlika världar.",
    artists: ["Salvador Dalí", "René Magritte", "Max Ernst"],
    url: "https://en.wikipedia.org/wiki/Surrealism",
  },
  "Abstrakt konst": {
    years: "1910-",
    description:
      "En period av konst som inte föreställer något konkret utan fokuserar på färg, form och linje.",
    artists: ["Wassily Kandinsky", "Piet Mondrian", "Kazimir Malevich"],
    url: "https://en.wikipedia.org/wiki/Abstract_art",
  },
  Popkonst: {
    years: "1950-",
    description:
      "En period av konst som använder populärkulturella motiv och tekniker.",
    artists: ["Andy Warhol", "Roy Lichtenstein", "David Hockney"],
    url: "https://en.wikipedia.org/wiki/Pop_art",
  },
  Opkonst: {
    years: "1960-",
    description:
      "En period av konst som använder optiska illusioner och geometriska mönster.",
    artists: ["Victor Vasarely", "Bridget Riley", "Carlos Cruz-Diez"],
    url: "https://en.wikipedia.org/wiki/Op_art",
  },
  Minimalism: {
    years: "1960-",
    description:
      "En period av konst som reducerar form och material till det väsentliga.",
    artists: ["Donald Judd", "Dan Flavin", "Agnes Martin"],
    url: "https://en.wikipedia.org/wiki/Minimalism",
  },
  "Fotorealism / Superrealism": {
    years: "1960-",
    description:
      "En period av konst som återger motiv med extrem detaljrikedom och realism.",
    artists: ["Chuck Close", "Richard Estes", "Ralph Goings"],
    url: "https://en.wikipedia.org/wiki/Photorealism",
  },
  Hyperrealism: {
    years: "1960-",
    description:
      "En period av konst som strävar efter att återge motiv så verklighetstroget som möjligt.",
    artists: ["Duane Hanson", "Ron Mueck", "Robert Bechtle"],
    url: "https://en.wikipedia.org/wiki/Hyperrealism",
  },
  Postmodernism: {
    years: "1970-",
    description:
      "En period av konst som ifrågasätter modernismens ideal och experimenterar med olika stilar och tekniker.",
    artists: ["Cindy Sherman", "Jeff Koons", "Barbara Kruger"],
    url: "https://en.wikipedia.org/wiki/Postmodern_art",
  },
  Graffiti: {
    years: "1970-",
    description:
      "En period av konst som uttrycks genom målningar och texter på offentliga platser.",
    artists: ["Banksy", "Keith Haring", "Jean-Michel Basquiat"],
    url: "https://en.wikipedia.org/wiki/Graffiti",
  },
  "Digital konst": {
    years: "1980-",
    description:
      "En period av konst som skapas med hjälp av digitala verktyg och tekniker.",
    artists: ["Nam June Paik", "Stelarc", "Rafael Lozano-Hemmer"],
    url: "https://en.wikipedia.org/wiki/Digital_art",
  },
};

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          onClick={handleClick}
          className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 rounded-t-1 group text-dark-500"
        >
          <span>{title}</span>
          <span className={`material-symbols-outlined ${open && "rotate-180"}`}>
            arrow_drop_down
          </span>
        </button>
      </h6>
      <div hidden={!open} className=" transition-all duration-300 ease-in-out">
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Konst() {
  return (
    <section className="container max-w-screen-xl">
      <Accordion title="Konstriktning">
        En konstriktning är en stil inom konsten. Benämningen används för
        övergripande stilar som rör många konstnärer och under en längre tid,
        åtminstone några år. Många av konstriktningarna slutar med -ism (till
        exempel kubism och futurism), och benämns därför ofta som ismer.
        Benämningen av de olika konstriktningarna har ibland myntats av de
        utövande konstnärerna själva (till exempel dadaism och suprematism) och
        i andra fall av omvärlden och då speciellt konstkritiker (till exempel
        impressionism och fauvism). I många fall har benämningen uppkommit först
        efter konstriktningens slut, detta gäller speciellt äldre tiders stilar
        (till exempel rokoko och manierism).
      </Accordion>
      <Accordion title="Konststilar">
        Konststil används om stilar oberoende av storlek. Begreppet kan användas
        såväl för en konstriktning, en lokal tillfällig stil eller en enskild
        konstnärs stil.
      </Accordion>
      <Accordion title="Konstskola">
        Skola används oftast om en lokal undergrupp till en konstriktning. Till
        exempel var Barbizonskolan en grupp konstnärer inom realismen. Hudson
        River-skolan och Düsseldorfskolan var varianter under romantiken. I
        dessa fall används alltså inte ordet "skola" i betydelsen
        utbildningsanstalt, utan enbart "lokal konststil". Begreppet skola
        används även inom äldre måleri, till exempel Rubens skola. Det används
        då som beteckning för en krets konstnärer (eller elever) som studerat
        för en mästare, eller efterföljare till konstnären.
      </Accordion>

      <p className="text-2xl pb-2">Konstperioder</p>
      <div className="w-[32rem]">
        <ul className="flex flex-col w-full">
          {Object.entries(konstperioder).map(
            ([period, { years, description, url }]) => (
              <li className="relative flex flex-col gap-2">
                <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                  <span className="h-full w-0.5 bg-blue-gray-100"></span>
                </span>
                <div className="flex items-center h-3 gap-4">
                  <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-1.5 text-white"></span>
                  <h6 className="block font-sans text-base antialiased font-semibold leading-none tracking-normal text-blue-gray-900">
                    <a href={url} target="_blank">
                      {period}
                    </a>
                  </h6>
                </div>
                <div className="flex gap-4 pb">
                  <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                  <div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
                      {years}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 pb-4">
                  <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                  <div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
      <p className="text-2xl">Konstnärer</p>
      {Object.entries(konstnärer).map(([artist, { url, image }]) => (
        <a
          href={url}
          target="_blank"
          className="flex items-center gap-4 pb-1 w-max"
        >
          <img
            src={image}
            alt="avatar"
            className="inline-block relative object-cover object-center !rounded-full w-12 h-12"
          />
          <div>
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
              {artist}
            </h6>
            <div className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
              {url}
            </div>
          </div>
        </a>
      ))}
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
    </section>
  );
}
