import { useState, useRef, useEffect } from "react";
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
    <div className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 w-[300px] h-[280px]">
      <div className="p-6 overflow-hidden">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {title}
        </h5>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                tagFilters.includes(tag)
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => handleTagFilter(!tagFilters.includes(tag), tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
        >
          Öppna
        </a>
      </div>
    </div>
  );
}

function HorizontalList({ children }: { children: React.ReactNode[] }) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setShowScrollButton(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const container = containerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, []);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto pb-4 scrollbar-hide"
      >
        <div className="flex gap-6">{children}</div>
      </div>
      {showScrollButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:scale-110 flex items-center justify-center w-8 h-8 animate-color-pulse dark:animate-color-pulse-dark"
        >
          <span className="material-symbols-outlined text-xl">
            chevron_right
          </span>
        </button>
      )}
    </div>
  );
}

function BookmarksPage() {
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const availableTags = Array.from(
    new Set(bookmarks.flatMap((bookmark) => bookmark.tags))
  ).sort((tagA, tagB) => {
    const countA = bookmarks.filter((bookmark) =>
      bookmark.tags.includes(tagA)
    ).length;
    const countB = bookmarks.filter((bookmark) =>
      bookmark.tags.includes(tagB)
    ).length;
    return countB - countA;
  });

  useEffect(() => {
    // Hantera klick utanför sökrutan
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTagFilter = (isChecked: boolean, tag: string) => {
    if (isChecked) {
      setTagFilters([...tagFilters, tag]);
    } else {
      setTagFilters(tagFilters.filter((filter) => filter !== tag));
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredTags = availableTags.filter((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredTags);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (tag: string) => {
    setSearchTerm("");
    setShowSuggestions(false);
    if (!tagFilters.includes(tag)) {
      handleTagFilter(true, tag);
    }
  };

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const { title, tags } = bookmark;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseSearchTerm) ||
      tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });

  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Bokmärken
        </h1>
        <div className="relative" ref={searchRef}>
          <input
            type="text"
            placeholder="Sök eller välj tagg..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
              {suggestions.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSuggestionClick(tag)}
                  className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
                >
                  <span>{tag}</span>
                  {tagFilters.includes(tag) && (
                    <span className="text-blue-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {tagFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setTagFilters([])}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Rensa filter
          </button>
          {tagFilters.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagFilter(false, tag)}
              className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors flex items-center gap-1"
            >
              {tag}
              <span className="text-lg">&times;</span>
            </button>
          ))}
        </div>
      )}
      <HorizontalList>
        {filteredBookmarks
          .filter((bookmark) =>
            tagFilters.length
              ? bookmark.tags.some((tag) => tagFilters.includes(tag))
              : searchTerm.length
              ? true
              : false
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
        <div className="my-8" key={availableTag}>
          {filteredBookmarks.find((bookmark) =>
            bookmark.tags.includes(availableTag)
          ) && (
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {availableTag}
            </h2>
          )}
          <HorizontalList key={availableTag}>
            {filteredBookmarks
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
