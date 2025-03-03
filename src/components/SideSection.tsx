import { notes } from "../data/notes";

function Notes() {
  return (
    <section>
      {notes?.length ? (
        <>
          <p className="text-2xl">NOTES</p>
          <ol>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ol>
        </>
      ) : null}
    </section>
  );
}

export default function SideSection() {
  return (
    <aside className="w-72 p-4">
      <Notes />
    </aside>
  );
}
