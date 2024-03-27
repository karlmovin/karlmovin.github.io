import { useState } from "react";

const packlistdata = [
  {
    title: "Resa (TODO)",
    data: [
      {
        title: "Necessär",
        items: [
          "Tandborste",
          "Tandkräm",
          "Tvål",
          "Schampo",
          "Balsam",
          "Rakhyvel",
          "Deodorant",
          "Hårborste",
          "Hårband",
          "Smink",
          "Solkräm",
          "Läppbalsam",
          "Tamponger",
          "Toalettpapper",
        ],
      },
      {
        title: "Kläder",
        items: [
          "Underkläder",
          "Strumpor",
          "Byxor",
          "Tröjor",
          "Kjol",
          "Klänning",
          "Shorts",
          "T-shirt",
          "Skjorta",
          "Kostym",
          "Kavaj",
        ],
      },
      {
        title: "Underhållning",
        items: [
          "Bok",
          "Tidning",
          "Laddare",
          "Headset",
          "Dator",
          "Surfplatta",
          "Kamera",
          "GoPro",
          "Kikare",
          "Kortlek",
          "Resespel",
        ],
      },
    ],
  },
  {
    title: "Utflykt med bebis",
    data: [
      {
        title: "På flyget / i bilen / på tåget",
        items: [
          "Skötväskan (skötunderlägg, blöjor, tvättdukar osv)",
          "Ombyte",
          "Vårservetter",
          "Smoothies, gröt och mat",
          "Snacks (gärna sådant bebisen kan pilla länge med)",
          "Flaska för vatten",
          "Plastpåse för skräp",
          "Surfplatta",
          "Leksaker och underhållning",
        ],
      },
      {
        title: "Vagn och bilstol",
        items: [
          "Resesulky eller vanlig vagn",
          "Myggnät och regnskydd till vagnen",
          "Tunn filt eller solparasoll till vagnen som extra solskydd",
          "Bärsele eller bärsjal",
          "Babyskydd eller bilstol",
          "Transportväska till vagn och bilstol",
        ],
      },
      {
        title: "Äta",
        items: [
          "Barnmatsburkar och smoothies",
          "Nappflaska, haklapp och bestick",
          "Välling och grötpulver",
          "Bröstmjölksersättning",
          "Termos eller vattenkokare (går ofta att låna på hotellet)",
        ],
      },
      {
        title: "Sol och bad",
        items: [
          "Solskyddskläder",
          "Solhatt",
          "Badblöjor",
          "UV-tält (ofta ganska smidiga att packa ner)",
          "Solkräm för barn",
          "Badskor",
        ],
      },
      {
        title: "Sova",
        items: [
          "Resesäng (men enklare att boka på hotellet)",
          "Babyvakt",
          "Egen kudde och filt",
        ],
      },
      {
        title: "Reseapotek till bebis",
        items: [
          "Alvedon eller Ipren för barn",
          "Näsdroppar / nässug",
          "Kräm för bett",
          "Kräm för blöjeksem",
          "D-droppar",
          "Plåster och sårtvätt",
          "Vätskeersättning",
          "Febertermometer",
          "Myggmedel (men läs på om vilka som passar för barn)",
          "Handdesinfektion",
        ],
      },
    ],
  },
  {
    title: "Skridsko",
    data: [
      {
        title: "Utrustning",
        items: [
          "Skridskor och pjäxor",
          "Isdubbar",
          "Ispikar",
          "Ryggsäck, grenrem, kastlina, visselpipa",
          "Skydd (Huvud, Knä, Armbåge)",
        ],
      },
      {
        title: "Kläder",
        items: [
          "Mössa/Balaklava, Buff",
          "Tumvantar/fingervantar, ej för tunna",
          "Underställ i ull, 1-2 lager beroende på väder (överkropp, underkropp)",
          "Tunn skaljacka med vindskydd som andas",
          "Tunna skalbyxor med vindskydd som andas",
          "Ullstrumpor",
          "Dunjacka (i ryggsäcken under skrinnande)",
        ],
      },
      {
        title: "Bra att ha",
        items: [
          "Sittunderlag",
          "Karta över området",
          "Kompass",
          "Solglasögon vid sol",
          "Lampa (för mörkeråkning)",
          "Överlevnadskit",
          "Handduk",
          "Liten slip",
          "Lina m magnet stark nog att hålla skridsko",
          "GoPro",
          "Sportklocka",
          "Pulsband",
        ],
      },
      {
        title: "Inuti ryggsäcken",
        items: [
          "Matsäck (1 macka per mil vid normala förhållanden om längre än 2h skrinnande)",
          "Energi on the go, e.g. jägarblandning, saft",
          "Vätska (minst 1-2 liter)",
          "Värmande dryck i termos",
          "Underkläder",
          "Strumpor",
          "Våtsockor/plastpåsar för blöta pjäxor",
          "Tröjor",
          "Vattentät jacka",
          "Plastsäck om ombytesjacka ej vattentät",
          "Byxor",
          "Vattentäta påsar att förvara kläderna i",
        ],
      },
    ],
  },
  {
    title: "Längdskidåkning (klassisk/skate)",
    data: [
      {
        title: "Utrustning",
        items: ["Skidor och pjäxor (för klassisk och för skate)", "Stavar"],
      },
      {
        title: "Kläder",
        items: [
          "Mössa/Balaklava, Buff",
          "Tumvantar/fingervantar, tunna och mellantjocka för kallt väder",
          "Underställ i ull, 1-2 lager beroende på väder (överkropp, underkropp)",
          "Tunn skaljacka med vindskydd som andas",
          "Tunna skalbyxor med vindskydd som andas",
          "Ullstrumpor",
          "Dunjacka/dunväst",
        ],
      },
      {
        title: "Bra att ha",
        items: [
          "Ombyte till efter (tröja, strumpor, skor, mössa, handskar)",
          "Saft, dryck, fika att ta med och/eller till efter",
          "Solglasögon vid sol",
          "Lampa (för mörkeråkning)",
          "GoPro",
          "Sportklocka",
          "Pulsband",
        ],
      },
    ],
  },
  {
    title: "Utförsåkning",
    data: [
      {
        title: "Utrustning",
        items: [
          "Skidor och pjäxor",
          "Stavar",
          "Skidhandskar",
          "Skidhjälm",
          "Ryggskydd",
          "Goggles",
        ],
      },
      {
        title: "Kläder",
        items: [
          "Skidunderställ (2 par räcker för de flesta)",
          "Skidkläder",
          "Skidstrumpor",
          "Mössa/pannband/balaklava",
          "Handskar",
          "Halsduk/buff",
          "2 par byxor",
          "3-4 överdelar",
          "1-3 tjockare tröjor",
          "Underkläder",
          "Vinterskor och kanske ett lättare par du kan ha inne på hotellet",
        ],
      },
      {
        title: "Bra att ha",
        items: [
          "Solglasögon",
          "Underkläder",
          "Toalettartiklar (glöm inte viktiga mediciner)",
          "Solkräm",
          "Laddare",
        ],
      },
    ],
  },
  {
    title: "Turskidor",
    data: [
      {
        title: "Utrustning",
        items: [
          "Skidor, hudar, pjäxor och stavar",
          "Ryggsäck, spade, sändare, söksond",
          "Skydd (Huvud, rygg)",
        ],
      },
      {
        title: "Kläder",
        subtitle:
          "Basen i din packning är densamma på dagsturen som på den längre utfärden. Däremot tillkommer utrustning för övernattning, samt ombyten om du blir borta i flera dagar. Under vintern blir det extra viktigt att klä sig enligt lager på lager-principen. Kom även ihåg att du lätt fryser när du stannar till. Därför behövs förstärkningsplagg, såsom dunjacka, under pauserna. På långturer är det viktigt att ha med en bra jacka som tål både vind och väta. ",
        items: [
          "Ull-/syntetunderställ närmast kroppen.",
          "Tröja.",
          "Strumpor och sockor i ull.",
          "Bra skalplagg (vindjacka/vintäta byxor) att ha när du rör dig.",
          "Varm dun-/syntetjacka (förstärkningsplagg) för pauser.",
          "Damasker.",
          "Extra mössa, buff och vantar. Helst tjocka tumvantar.",
          "Extra underställ och strumpor. Men ta inte med för mycket, du kan tvätta om det behövs.",
        ],
      },
      {
        title: "Annat",
        subtitle:
          "Du som ska på flerdagstur i snön kan dra packningen på en pulka, så avlastar du ryggen. I fjällvärlden slipper du bära med dig mat om du i förväg ser efter vilka av STFs fjällstugor som har butik. Glöm inte att läsa på om fjällsäkerhet innan du ger dig av.",
        items: [
          "Solglasögon/skidglasögon, solskyddsfaktor.",
          "Mat och dryck. Vattenflaska, termos, kåsa och spork.",
          "Plastpåsar för skräp (så du kan ta med det ned från fjället och närmsta sophantering).",
          "Tvål som fungerar för tvätt, städ och disk.",
          "Ligg-/sittunderlag.",
          "Första hjälpen-kit, inklusive första förband, elastisk binda och skavsårsplåster.",
          "Toalettpapper.",
          "Karta och kompass (och ev. GPS)",
          "Fickkniv, tändstickor/tändstål.",
          "Ficklampa, pannlampa.",
          "Mobiltelefon och powerbank. (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
          "Vindsäck. De går att hyra på många fjällstationer.",
          "Lite reparationsutrustning, exempelvis silvertejp och remmar.",
        ],
      },
      {
        title: "Turskidor med barn",
        subtitle:
          "Barn behöver ungefär samma utrustning som vuxna, men ofta lite fler ombyten. Vattentäta ytterplagg är naturligtvis A och O på packlistan. Vintern ställer även krav på ordentliga skor, extra vantar och strumpor för barnen. Det är klokt att klä dem i merinoull eller syntet närmast kroppen. Ull är varmast, merinoull är mjukast och syntet torkar snabbast. Av dessa skäl är bomull är värt att undvika. \n\n Du gör rätt i att ta med några lätta leksaker, så blir turen roligare om tålamodet tryter. Torkad frukt eller nötter snabbt ger ny energi. Tänk slutligen på att packa ner solskydd, eftersom solen tar även när det är molnigt.",
      },
      {
        title: "Tältning med turskidor",
        subtitle:
          "Det är bra att tälta i närheten av en fjällstuga eller fjällstation de första gångerna. Då kan du värma dig innan du kryper in i tältet eller bivacken för natten. STF har vinterfjällkurser för dig som vill lära dig att vintertälta. För en tälttur på vintern behöver din ryggsäck rymma ca 70–90 liter eller att du använder pulka. Komplettera packlistan med följande:",
        items: [
          "Tält anpassat för vinterförhållanden.",
          "Sovsäck och eventuellt dubbla liggunderlag om det är mycket kallt.",
          "Värmebyxor eller värmekjol.",
          "Stormkök, bränsle, tändstickor/tändstål och diskverktyg. Bensinkök är att föredra.",
          "Matvaror, såvida du inte handlar i fjällbutik.",
          "Nål, tråd och silvertejp så att du kan reparera ryggsäck, tält eller kläder.",
          "Grävpåsar(Vadarpåsar/vadarstövel) till skor och handskar.",
        ],
      },
    ],
  },
  {
    title: "Vandring",
    extra:
      "Tänk på att packningen kan variera beroende på årstid och väder. Listor tagna från STF: https://www.svenskaturistforeningen.se/guider-tips/packlistor/packlista-fjallvandring/",
    data: [
      {
        title: "Vandring i skog och mark",
        subtitle:
          "Börja med att fundera på vad du vill få ut av din utfärd. Vandring kan antingen innebära en ordentlig utflykt, med korvgrillning och trevliga naturupplevelser, eller ett fullfjädrat flerdagsäventyr. De kräver ofta samma grundutrustning, med tillägg för extra mat och kläder. Du behöver även tänka på var du ska övernatta. Vill du tälta eller kanske sova på STFs boenden? Det gör stor skillnad för vad du ska ha i ryggsäcken. \n\n Under flerdagsvandringar behöver du undersöka dina möjligheter att hitta färskvatten. Är du osäker på tillgången till vatten kan du överväga att ta med reningstabletter eller vattenfilter. De går att köpa i vanliga friluftsbutiker.",
        items: [
          "Ryggsäck som får plats med allt. 50-65 L är lagom storlek.",
          "Tunn skaljacka med en varm tröja under, snarare än en tjock jacka.",
          "Strumpor och underställ i syntet/ull. Ull är varmare, men syntet torkar snabbare.",
          "Regnkläder. De skyddar även mot vind.",
          "Väl ingångna vandringsskor eller trailskor, valda efter årstid och terräng.",
          "Lätta, luftiga långbyxor istället för shorts. De skyddar mot mygg, rispor och skrapsår.",
          "Vantar och mössa för kalla kvällar.",
          "Extra underställ och strumpor. Men ta med så lite som möjligt och tvätta.",
          "Solkräm, solstift, solglasögon, keps/hatt. Solen tar även vid molnigt väder.",
          "Myggmedel.",
          "Matvaror och dryck. Gärna termos, kåsa och spork.",
          "Plastpåse för skräp.",
          "Sitt- eller liggunderlag.",
          "Karta och kompass.",
          "Mobiltelefon och powerbank. (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
          "Toalettpapper + liten trädgårdsspade för att gräva en grop.",
          "Fickkniv, tändstickor/tändstål.",
          "Reseapotek med första förband, inklusive skavsårsplåster.",
          "Ficklampa och visselpipa.",
          "Eventuellt kikare och kamera.",
        ],
      },
      {
        title: "Tältning",
        subtitle: "Komplettera med följande:",
        items: [
          "Ryggsäck 60-80 L",
          "Tält, eller tarp (lättviktspresenning som spänns upp med pinnar eller mellan träd)",
          "Sovsäck och liggunderlag",
          "Stormkök, bränsle + tändstickor/tändstål",
          "Ficklampa/pannlampa",
          "Matvaror",
          "Nål, tråd och silvertejp så att du kan reparera ryggsäck, tält eller kläder",
        ],
      },
      {
        title: "Vandring med barn",
        subtitle:
          "I det stora hela behöver barn samma saker som vuxna på tur. Kläder ska kunna anpassas efter väder, enligt lager på lager-principen. Det gäller även barnkläder. Unga upptäckare behöver ofta några extra ombyten, samt något spel eller en leksak som kan muntra upp. Ett annat knep är att redan på morgonen förbereda familjens lunch, så är ni redo när barnen blir hungriga. Ta gärna med torkad frukt eller nötter som ger snabb energi. \n\n Det är roligt för barn att känna sig delaktiga, exempelvis genom att de själva får bära en liten ryggsäck, välja rastplats och titta på kartan. Under vandringen kanske ni även kan kika på Allemansrättsskolan tillsammans?",
      },
      {
        title: "Vandring i fjällen",
        subtitle:
          "För fjällturer över dagen behöver du bara ha med dig det nödvändigaste. Den största skillnaden vid flerdagsvandringar är att du behöver fler ombyten, samt utrustning anpassad efter var du ska övernatta. Du kan komplettera packningen för boende i tält eller stuga, enligt listorna nedan. I övrigt är det alltid klokt att packa kläder i ull eller funktionsmaterial. Läs gärna mer om lager på lager-principen om du undrar vilka kläder som är viktigast. \n\n När du går mellan STFs fjällstugor finns ofta butiker där du kan handla mat och dryck. Det betyder att du slipper bära livsmedel i ryggsäcken.",
        items: [
          "Underkläder i ull/syntet att ha närmast kroppen",
          "Skaljacka som även är vattentät",
          "Väl ingångna vandringsskor",
          "Extra sockor",
          "Använd dubbla lager för att undvika skav: tunn ullstrumpa närmast foten och ett par strumpor över",
          "Dunjacka/varm tröja, mössa, vantar",
          "Rena och bekväma kläder att byta om till, samt extra underställ",
          "Tvål som fungerar för tvätt, städ och disk",
          "Mat och dryck",
          "Termos, kåsa och spork",
          "På vissa sträckningar har du tillgång till fjällbutiker",
          "Plastpåse för skräp",
          "Sitt- eller liggunderlag för pausen",
          "Reseapotek och första förband, inklusive skavsårsplåster",
          "Solglasögon, solkräm och keps",
          "Myggmedel",
          "Fjällkarta och kompass",
          "Mobiltelefon och powerbank (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
          "Fickkniv, tändstickor/tändstål",
          "Toalettpapper + liten trädgårdsspade för att gräva en grop",
          "Ficklampa, pannlampa",
          "Eventuellt kamera och kikare",
        ],
      },
      {
        title: "Tältning i fjällen",
        subtitle: "Komplettera med följande:",
        items: [
          "60-80 L ryggsäck",
          "Tält, sovsäck och liggunderlag",
          "Matvaror",
          "Stormkök, bränsle, tändstickor/tändstål och diskverktyg",
          "Ficklampa och pannlampa",
          "Större sjukvårdskit",
          "Nål, tråd och silvertejp så att du kan reparera ryggsäck, tält eller kläder",
        ],
      },
      {
        title: "Komplettering för vandring mellan fjällstugor",
        subtitle: "Komplettera med följande:",
        items: [
          "Ryggsäck 50-65 L",
          "Reselakan eller lätt sovsäck",
          "Handduk",
          "Ficklampa och pannlampa",
          "Ombyte med rena och bekväma plagg",
          "Inomhustofflor",
          "Kontanter/kontokort och ditt medlemskort i STF",
        ],
      },
    ],
  },
  {
    title: "Segling",
    data: [
      {
        title: "I packningen",
        items: [
          "Skor/stövlar med bra grepp som inte färgar av",
          "Seglarställ (byxor, jacka)",
          "Keps/solhatt med senilsnöre/rem",
          "Seglarhandskar",
          "Ombyte",
          "Oömma kläder, sådana som tål att slitas",
          "Varma kläder, mössa, vantar",
          "Flytväst",
          "Solglasögon och solskydd",
          "Gymnastikskor, gärna fler par.",
          "Badkläder",
          "Badhandduk",
          "Myggstift/spray",
          "Tandborste, tandkräm, hårborste, tvål, schampo osv",
          "Vattenflaska",
        ],
      },
    ],
  },
  {
    title: "Klättring",
    data: [
      {
        title: "Utrustning",
        items: [
          "Klätterskor",
          "Hjälm",
          "Klättersele",
          "Karbiner",
          "Repslingor",
          "Rep",
          "Kalk",
          "Kalkpåse",
        ],
      },
    ],
  },
  {
    title: "Cykling",
    data: [
      {
        title: "Utrustning",
        items: [
          "Cykel",
          "Hjälm",
          "Reservslang",
          "Pump",
          "Verktyg",
          "Däckavtagare",
          "Extra kledja",
          "Kedjefett",
          "Kedjelås",
        ],
      },
    ],
  },
];

export default function Packlistor() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <main className="flex flex-col gap-8 container max-w-screen-xl">
      <div className="relative h-10 w-72 min-w-[200px]">
        <select
          value={selectedCategory || ""}
          onChange={handleCategoryChange}
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          <option value={""}>Alla listor</option>
          {packlistdata.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      {packlistdata
        .filter(
          (category) =>
            selectedCategory === "" || category.title === selectedCategory
        )
        .map(({ title, data }) => (
          <section id={title} key={title} className="flex flex-col">
            <p className="text-4xl self-center pb-3">{title}</p>
            <div className="mt-2 gap-2 flex flex-row flex-wrap">
              {data.map(({ title: dataTitle, subtitle, items }) => (
                <div className="flex flex-col">
                  <p className="px-2 text-xl self-center font-medium text-gray-700 bg-white shadow-md rounded-t-xl bg-clip-border">
                    {dataTitle}
                  </p>
                  {subtitle && (
                    <p className="text-sm p-2 whitespace-pre-line text-gray-700 bg-white shadow-md  bg-clip-border">
                      {subtitle}
                    </p>
                  )}
                  {items && (
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-b-xl bg-clip-border">
                      <div className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 divide-y">
                        {items?.map((item) => (
                          <div
                            role="button"
                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                          >
                            <label
                              htmlFor={`vertical-list-${item}`}
                              className="flex items-center w-full px-3 py-2 cursor-pointer"
                            >
                              <div className="grid mr-3 place-items-center">
                                <div className="inline-flex items-center">
                                  <label
                                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                                    htmlFor={`vertical-list-${item}`}
                                  >
                                    <input
                                      id={`vertical-list-${item}`}
                                      type="checkbox"
                                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                    />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {item}
                              </p>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
    </main>
  );
}
