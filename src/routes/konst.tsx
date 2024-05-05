import { useState } from "react";
import { artists, konstperioder } from "../data/konst.json";

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
      {Object.entries(artists).map(([artist, { url, image }]) => (
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
    </section>
  );
}
