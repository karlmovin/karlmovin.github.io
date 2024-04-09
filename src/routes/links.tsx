import { useState } from "react";
import { bookmarks } from "../data/bookmarks.json";

function Card({
  title,
  description,
  url: href,
  tags,
  tagFilters,
  handleTagFilter,
}: {
  title: string;
  description?: string;
  url: string;
  tags: string[];
  tagFilters: string[];
  handleTagFilter: (checked: boolean, tag: string) => void;
}) {
  return (
    <div className="flex flex-col justify-between text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
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

function HorizontalList({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="flex">
      <div className="flex overflow-x-scroll">
        <div className="flex gap-8">{children}</div>
      </div>
      <button
        disabled
        className={`${children.length > 1 ? "animate-pulse" : "hidden"} 
        md:${children.length > 2 ? "animate-pulse" : "hidden"}
        lg:${children.length > 3 ? "animate-pulse" : "hidden"} 
         -translate-x-2 self-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white`}
      >
        <span className="material-symbols-outlined p-1">chevron_right</span>
      </button>
    </div>
  );
}

function BookmarksPage() {
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  const availableTags = Array.from(
    new Set(bookmarks.flatMap((bookmark) => bookmark.tags))
  );

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
          <div key={tag}>
            <button
              key={tag}
              className="text-gray-500 text-2xl hover:underline"
              onClick={() => handleTagFilter(false, tag)}
            >
              {tag}
            </button>
            {tagFilters[tagFilters.length - 1] != tag && (
              <span className="text-gray-500 text-2xl"> |</span>
            )}
          </div>
        ))}
      </div>
      <HorizontalList>
        {bookmarks
          .filter((bookmark) =>
            tagFilters.length === 0
              ? false
              : bookmark.tags.some((tag) => tagFilters.includes(tag))
          )
          .map((bookmark) => (
            <Card
              key={bookmark.url}
              tagFilters={tagFilters}
              handleTagFilter={handleTagFilter}
              {...bookmark}
            />
          ))}
      </HorizontalList>
      {availableTags.map((availableTag) => (
        <div className="my-2" key={availableTag}>
          <div className="text-2xl">{availableTag}</div>
          <HorizontalList key={availableTag}>
            {bookmarks
              .filter((bookmark) => bookmark.tags.includes(availableTag))
              .map((bookmark) => (
                <Card
                  key={bookmark.url + availableTag}
                  tagFilters={tagFilters}
                  handleTagFilter={handleTagFilter}
                  {...bookmark}
                />
              ))}
          </HorizontalList>
        </div>
      ))}
    </section>
  );
}

export default BookmarksPage;
