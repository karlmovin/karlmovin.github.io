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
          "UV-tält (ofta ganska smidiga att packa ner!)",
          "Solkräm för barn (våra bästa tips här!)",
          "Badskor",
        ],
      },
      {
        title: "Sova",
        items: [
          "Resesäng (men enklare att boka på hotellet!)",
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
    title: "Utförsskidor",
    data: [
      {
        title: "Utrustning",
        items: [
          "Skidor och pjäxor",
          "Stavar",
          "Skidunderställ (2 par räcker för de flesta)",
          "Skidkläder",
          "Skidstrumpor",
          "Skidhandskar",
          "Skidhjälm",
          "Ryggskydd",
          "Goggles",
          "Solglasögon",
          "Mössa/pannband/balaklava",
          "Handskar",
          "Halsduk/buff",
          "2 par byxor",
          "3-4 överdelar",
          "1-3 tjockare tröjor",
          "Underkläder",
          "Toalettartiklar (glöm inte viktiga mediciner)",
          "Solkräm",
          "Laddare",
          "Vinterskor och kanske ett lättare par du kan ha inne på hotellet",
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
        title: "Turskidor",
        subtitle:
          "Basen i din packning är densamma på dagsturen som på den längre utfärden. Däremot tillkommer utrustning för övernattning, samt ombyten om du blir borta i flera dagar. Under vintern blir det extra viktigt att klä sig enligt lager på lager-principen. Kom även ihåg att du lätt fryser när du stannar till. Därför behövs förstärkningsplagg, såsom dunjacka, under pauserna. På långturer är det viktigt att ha med en bra jacka som tål både vind och väta. \n\n Du som ska på flerdagstur i snön kan dra packningen på en pulka, så avlastar du ryggen. I fjällvärlden slipper du bära med dig mat om du i förväg ser efter vilka av STFs fjällstugor som har butik. Glöm inte att läsa på om fjällsäkerhet innan du ger dig av.",
        items: [
          "Ull-/syntetunderställ närmast kroppen.",
          "Tröja.",
          "Strumpor och sockor i ull.",
          "Bra skalplagg (vindjacka/vintäta byxor) att ha när du rör dig.",
          "Varm dun-/syntetjacka (förstärkningsplagg) för pauser.",
          "Damasker.",
          "Extra mössa, buff och vantar. Helst tjocka tumvantar.",
          "Extra underställ och strumpor. Men ta inte med för mycket, du kan tvätta om det behövs.",
          "Tvål som fungerar för tvätt, städ och disk.",
          "Solglasögon/skidglasögon, solskyddsfaktor.",
          "Mat och dryck. Vattenflaska, termos, kåsa och spork.",
          "Plastpåsar för skräp (så du kan ta med det ned från fjället och närmsta sophantering).",
          "Ligg-/sittunderlag.",
          "Första hjälpen-kit, inklusive första förband, elastisk binda och skavsårsplåster.",
          "Toalettpapper.",
          "Karta och kompass (och ev. GPS)",
          "Fickkniv, tändstickor/tändstål.",
          "Ficklampa, pannlampa.",
          "Mobiltelefon och powerbank. (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
          "Vindsäck och spade. De går att hyra på många fjällstationer.",
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
      <select
        value={selectedCategory || ""}
        onChange={handleCategoryChange}
        className="w-48 p-2 border border-gray-300 rounded-md"
      >
        <option value={""}>Alla listor</option>
        {packlistdata.map(({ title }) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
      {packlistdata
        .filter(
          (category) =>
            selectedCategory === "" || category.title === selectedCategory
        )
        .map(({ title, data }) => (
          <section id={title} key={title}>
            <p className="text-4xl">{title}</p>
            <div className="mt-2 ml-1 flex flex-row">
              <div className="flex-1">
                {data.map(({ title: dataTitle, subtitle, items }) => (
                  <>
                    <p className="text-xl">{dataTitle}</p>
                    <p className="text-sm py-2 whitespace-pre-line">
                      {subtitle}
                    </p>
                    <ol className="pl-2">
                      {items?.map((item) => (
                        <li key={item}>
                          <input
                            type="checkbox"
                            className="checked:bg-blue-500 mr-1"
                          />
                          {item}
                        </li>
                      ))}
                    </ol>
                    <br />
                  </>
                ))}
              </div>
            </div>
          </section>
        ))}
    </main>
  );
}
