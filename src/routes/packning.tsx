export default function Packning() {
  const packningData = [
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
      title: "Utförsskidor/turskidor",
      data: [
        {
          title: "Utrustning",
          items: [
            "Skidor och pjäxor",
            "Hudar (om turskidor)",
            "Stavar",
            "Skidjacka",
            "Skidbyxor",
            "Ryggsäck, spade, sändare, pinne (om turskidor)",
            "Skydd (Huvud, rygg om turskidor)",
          ],
        },
      ],
    },
    { title: "vandring", data: [{ title: "utrustning", items: ["Kängor"] }] },
    {
      title: "taltning",
      data: [{ title: "utrustning", items: ["Tält", "Sovsäck"] }],
    },
    {
      title: "bebis",
      data: [
        {
          title: "skötväska",
          items: ["Ombyte", "Blöjor", "Skötunderlägg", "Mat", "Vattenflaska"],
        },
      ],
    },
    {
      title: "resa",
      data: [
        {
          title: "resväska",
          items: ["Tandborste, tandkräm", "Ombyten", "Necessär"],
        },
      ],
    },
    {
      title: "segling",
      data: [
        {
          title: "xxx",
          items: [
            "Skor/stövlar med bra grepp som inte färgar av",
            "Seglarställ (byxor, jacka)",
            "Keps med rem",
            "Solglasögon",
            "Seglarhandskar",
            "Ombyte",
          ],
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col gap-8 container max-w-screen-xl">
      {packningData.map(({ title, data }) => (
        <section id={title}>
          <p className="text-4xl">{title}</p>
          <div className="mt-2 ml-1 flex flex-row">
            <div className="flex-1 ">
              {data.map(({ title: dataTitle, items }) => (
                <>
                  <p className="text-xl">{dataTitle}</p>
                  <ol className="border-double border-l-2 border-slate-400 pl-2">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
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
