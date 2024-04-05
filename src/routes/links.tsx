import { useState } from "react";

function Card({
  title,
  description,
  href,
  tags,
  tagFilters,
  handleTagFilter,
}: {
  title: string;
  description?: string;
  href: string;
  tags: string[];
  tagFilters: string[];
  handleTagFilter: (checked: boolean, tag: string) => void;
}) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="p-6">
          <a
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            href={href}
            target="_blank"
          >
            Öppna
          </a>
        </div>
        <div className="flex gap-1 p-6">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`text-gray-500 text-sm hover:underline ${
                tagFilters.includes(tag) ? "font-semibold" : ""
              }`}
              onClick={() => handleTagFilter(!tagFilters.includes(tag), tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const bookmarks = [
  {
    title: "Flightradar24",
    url: "https://www.flightradar24.com/57.08,27.17/5",
    description: "Track flights in real-time",
    tags: ["travel", "flights"],
  },
  {
    title: "Material Design",
    url: "https://m3.material.io/",
    description:
      "Material 3 is the latest version of Google`s open-source design system. Design and build beautiful, usable products with Material 3.",
    tags: ["design", "development"],
  },
  {
    url: "https://fonts.google.com/",
    title: "Google Fonts",
    description:
      "Making the web more beautiful, fast, and open through great typography.",
    tags: ["design", "typography"],
  },
  {
    url: "https://chromewebstore.google.com/collection/2023_favorites",
    title: "Chrome Web Store",
    description: "Extensions, themes, and apps for Chrome",
    tags: ["web", "extensions"],
  },
  {
    url: "https://www.material-tailwind.com/docs/html/installation",
    title: "Material Tailwind",
    description: "Material Design components for Tailwind CSS",
    tags: ["design", "development"],
  },
  {
    url: "https://tailwindcss.com/docs/",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    tags: ["css", "development"],
  },
  {
    url: "https://unicode.org/charts/",
    title: "Unicode Character Table",
    description: "A complete table of Unicode characters",
    tags: ["unicode", "characters"],
  },
  {
    url: "https://www.ritsumei.ac.jp/~akitaoka/index-e.html",
    title: "Akiyoshi's illusion pages",
    description: "Akiyoshi Kitaoka's illusion pages",
    tags: ["optical illusions", "visual illusions"],
  },
  {
    url: "https://www.latinintroduktion.se/etapp-1/",
    title: "Latin Introduktion",
    description: "Latin Introduktion",
    tags: ["latin"],
  },
  {
    url: "https://fab.cba.mit.edu/classes/863.20/",
    title: "How to Make (Almost) Anything",
    description: "How to Make (Almost) Anything",
    tags: ["fablab", "mit"],
  },
  {
    url: "https://cba.mit.edu/classes/",
    title: "MIT Center for Bits and Atoms",
    description: "MIT Center for Bits and Atoms",
    tags: ["mit", "fablab"],
  },
  {
    url: "https://www.naturalhabitatshorts.com/",
    title: "Natural Habitat Shorts",
    description: "Natural Habitat Shorts",
    tags: ["film", "shorts"],
  },
  {
    url: "https://tlnotes.com/",
    title: "TL Notes",
    description: "TL Notes",
    tags: ["japanese", "language"],
  },
  {
    url: "https://paulgraham.com/ds.html",
    title: "Do Things that Don't Scale",
    description: "Do Things that Don't Scale",
    tags: ["startup", "business", "article"],
  },
  {
    url: "https://jakobgreenfeld.com/stay-in-touch",
    title: "Stay in Touch",
    description: "Stay in Touch",
    tags: ["networking", "business", "article"],
  },
  {
    url: "https://www.edge.org/adversarial-collaboration-daniel-kahneman",
    title: "Adversarial Collaboration",
    description: "Adversarial Collaboration",
    tags: ["collaboration", "psychology", "article"],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const comics = [
  "Oglaf",
  "Potatodogcomics",
  "Gone with the blastwave",
  "Baalbuddy",
  "Telepurte",
  "Wait but why",
  "SMBC",
  "XKCD",
  "Orc stain",
  "Steve Lichman",
  "Nedroid",
  "False knees",
  "CMT",
  "Marketoonist",
];

function BookmarksPage() {
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  const handleTagFilter = (isChecked: boolean, tag: string) => {
    if (isChecked) {
      setTagFilters([...tagFilters, tag]);
    } else {
      setTagFilters(tagFilters.filter((filter) => filter !== tag));
    }
  };

  return (
    <section className="container max-w-screen-xl">
      <p className="text-4xl">Bokmärken</p>
      <div className="flex gap-2 mt-4">
        {tagFilters.map((tag) => (
          <button
            key={tag}
            className="text-gray-500 text-sm hover:underline"
            onClick={() => handleTagFilter(false, tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="flex flex-wrap flex-row gap-8">
        {bookmarks
          .filter((bookmark) =>
            tagFilters.length === 0
              ? true
              : bookmark.tags.some((tag) => tagFilters.includes(tag))
          )
          .map((bookmark) => (
            <li key={bookmark.url}>
              <Card
                href={bookmark.url}
                title={bookmark.title}
                description={bookmark.description}
                tags={bookmark.tags}
                tagFilters={tagFilters}
                handleTagFilter={handleTagFilter}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default BookmarksPage;
