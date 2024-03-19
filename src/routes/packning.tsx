export default function Packning() {
  return (
    <main className="flex flex-col gap-8 container max-w-screen-xl">
      <section id="skridskopackning">
        <p className="text-4xl">Skridsko</p>
        <div className="mt-2 ml-1 flex flex-row">
          <div className="flex-1 ">
            <p className="text-xl">Utrustning</p>
            <ol className="border-double border-l-2 border-slate-400 pl-2">
              <li>Skridskor och pjäxor</li>
              <li>Isdubbar</li>
              <li>Ispikar</li>
              <li>Ryggsäck, grenrem, kastlina, visselpipa</li>
              <li>Skydd (Huvud, Knä, Armbåge)</li>
            </ol>
            <br />
            <p className="text-xl">Kläder</p>
            <ol className="border-double border-l-2 border-slate-400 pl-2">
              <li>Mössa/Balaklava, Buff</li>
              <li>Tumvantar/fingervantar, ej för tunna</li>
              <li>
                Underställ i ull, 1-2 lager beroende på väder (överkropp,
                underkropp)
              </li>
              <li>Tunn skaljacka med vindskydd som andas</li>
              <li>Tunna skalbyxor med vindskydd som andas</li>
              <li>Ullstrumpor</li>
              <li>Dunjacka (i ryggsäcken under skrinnande)</li>
            </ol>
            <br />
            <p className="text-lg">Bra att ha</p>
            <ol className="border-double border-l-2 border-slate-400 pl-2">
              <li>Sittunderlag</li>
              <li>Karta över området</li>
              <li>Kompass</li>
              <li>Solglasögon vid sol</li>
              <li>Lampa (för mörkeråkning)</li>
              <li>Överlevnadskit</li>
              <li>Handduk</li>
              <li>Liten slip</li>
              <li>Lina m magnet stark nog att hålla skridsko</li>
              <li>GoPro</li>
              <li>Sportklocka</li>
              <li>Pulsband</li>
            </ol>
          </div>
          <div className="flex-1">
            <p className="text-xl">Inuti ryggsäcken</p>
            <ol className="border-double border-l-2 border-slate-400 pl-2">
              <p className="text-lg">Energi</p>
              <li>
                Matsäck (1 macka per mil vid normala förhållanden om längre än
                2h skrinnande)
              </li>
              <li>Energi on the go, e.g. jägarblandning, saft</li>
              <li>Vätska (minst 1-2 liter)</li>
              <li>Värmande dryck i termos</li>
              <br />
              <p className="text-lg">Ombyte</p>
              <li>Underkläder</li>
              <li>Strumpor</li>
              <li>Våtsockor/plastpåsar för blöta pjäxor</li>
              <li>Tröjor</li>
              <li>Vattentät jacka</li>
              <li>Plastsäck om ombytesjacka ej vattentät</li>
              <li>Byxor</li>
              <li>Vattentäta påsar att förvara kläderna i</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="längd">
        <p className="text-4xl">Längdskidåkning (klassisk/skate)</p>
        <div className="mt-2 ml-1">
          <p className="text-xl">Utrustning</p>
          <ol className="border-double border-l-2 border-slate-400 pl-2">
            <li>Skidor och pjäxor (för klassisk och för skate)</li>
            <li>Stavar</li>
          </ol>
          <br />
          <p className="text-xl">Kläder</p>
          <ol className="border-double border-l-2 border-slate-400 pl-2">
            <li>Mössa/Balaklava, Buff</li>
            <li>
              Tumvantar/fingervantar, tunna och mellantjocka för kallt väder
            </li>
            <li>
              Underställ i ull, 1-2 lager beroende på väder (överkropp,
              underkropp)
            </li>
            <li>Tunn skaljacka med vindskydd som andas</li>
            <li>Tunna skalbyxor med vindskydd som andas</li>
            <li>Ullstrumpor</li>
            <li>Dunjacka/dunväst</li>
          </ol>
          <br />
          <p className="text-lg">Bra att ha</p>
          <ol className="border-double border-l-2 border-slate-400 pl-2">
            <li>Ombyte till efter (tröja, strumpor, skor, mössa, handskar)</li>
            <li>Saft, dryck, fika att ta med och/eller till efter</li>
            <li>Solglasögon vid sol</li>
            <li>Lampa (för mörkeråkning)</li>
            <li>GoPro</li>
            <li>Sportklocka</li>
            <li>Pulsband</li>
          </ol>
        </div>
      </section>
      <section id="utför">
        <p className="text-4xl">Utförsskidor/turskidor TODO</p>
        <ol className="border-double border-l-2 border-slate-400 pl-2">
          <li>Skidor och pjäxor</li>
          <li>Hudar (om turskidor)</li>
          <li>Stavar</li>
          <li>Skidjacka</li>
          <li>Skidbyxor</li>
          <li>Ryggsäck, spade, sändare, pinne (om turskidor)</li>
          <li>Skydd (Huvud, rygg om turskidor)</li>
        </ol>
      </section>
      <section id="vandring">
        <p className="text-4xl">Vandring TODO</p>
        <ol className="border-double border-l-2 border-slate-400 pl-2">
          <li>Kängor</li>
        </ol>
      </section>
      <section id="tältning">
        <p className="text-4xl">Tältning TODO</p>
        <ol className="border-double border-l-2 border-slate-400 pl-2">
          <li>Tält</li>
          <li>Sovsäck</li>
        </ol>
      </section>
      <section id="bebis">
        <p className="text-4xl">Bebis TODO</p>
        <ol className="border-double border-l-2 border-slate-400 pl-2">
          <li>Ombyte</li>
          <li>Blöjor</li>
          <li>Skötunderlägg</li>
          <li>Mat</li>
          <li>Vattenflaska</li>
        </ol>
      </section>
      <section id="resa">
        <p className="text-4xl">Resa TODO</p>
        <ol className="border-double border-l-2 border-slate-400 pl-2">
          <li>Tandborste, tandkräm</li>
          <li>Ombyten</li>
          <li>Necessär</li>
        </ol>
      </section>
      <section id="segling">
        <p className="text-4xl">Segling TODO</p>
        <ol className="border-double border-l-2 border-slate-400 pl-2">
          <li>Skor/stövlar med bra grepp som inte färgar av</li>
          <li>Seglarställ (byxor, jacka)</li>
          <li>Keps med rem</li>
          <li>Solglasögon</li>
          <li>Seglarhandskar</li>
          <li>Ombyte</li>
        </ol>
      </section>
    </main>
  );
}
