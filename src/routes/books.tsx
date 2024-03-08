export default function Books() {
  return (
    <>
      <main className="flex flex-col gap-4">
        <section>
          <p className="text-2xl">Anteckningar från böcker</p>
        </section>

        <section>
          <p className="text-2xl">Anteckningar från pågående böcker</p>
          <ul>
            <li>
              Barn i början: Språkutveckling i förskoleåldern av Monica
              Westerlund
            </li>
            <li>
              Liv 3.0: Att vara människa i den artificiella intelligensens tid
              av Max Tegmark
            </li>
            <li>På spaning efter språkets ursprung av Sverker Johansson</li>
          </ul>
        </section>

        <section>
          <p className="text-2xl">Planerade böcker</p>
        </section>

        <section>
          <p className="text-2xl">Potentiellt intressanta böcker</p>
          <ul>
            <li>
              Errornomics: Why We Make Mistakes and What We Can Do To Avoid Them
              av Joseph T Hallinan
            </li>
            <li>
              The Upward Spiral: Using Neuroscience to Reverse the Course of
              Depression, One Small Change at a Time av Alex Korb
            </li>
            <li>
              The Willpower Instinct: How Self-Control Works, Why It Matters,
              and What You Can Do to Get More of It av Kelly McGonigal
            </li>
            <li>
              The Power of Habit: Why We Do What We Do in Life and Business av
              Charles Duhigg
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
