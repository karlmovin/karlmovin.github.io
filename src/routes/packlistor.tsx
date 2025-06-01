import { useState, useEffect } from "react";
import { packlistdata } from "../data/packlistor";

export default function Packlistor() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    packlistdata[0].title
  );
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Läs in sparade värden från localStorage vid start
  useEffect(() => {
    const savedItems = localStorage.getItem("packlistCheckedItems");
    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }
  }, []);

  // Spara ändringar i localStorage
  useEffect(() => {
    localStorage.setItem("packlistCheckedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleItemToggle = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleResetAll = () => {
    setCheckedItems({});
  };

  // Kontrollera om några items är checkade
  const hasCheckedItems = Object.values(checkedItems).some(
    (isChecked) => isChecked
  );

  return (
    <main className="container max-w-screen-xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Packlistor
        </h1>
        <div className="max-w-md mx-auto space-y-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
          >
            {packlistdata.map(({ title }) => (
              <option
                key={title}
                value={title}
                className="text-gray-900 dark:text-white"
              >
                {title}
              </option>
            ))}
          </select>
          <button
            onClick={handleResetAll}
            disabled={!hasCheckedItems}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-700"
          >
            Återställ alla
          </button>
        </div>
      </div>

      {packlistdata
        .filter((category) => category.title === selectedCategory)
        .map(({ title, data }) => (
          <section key={title} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
              {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map(({ title: dataTitle, subtitle, items }) => (
                <div
                  key={dataTitle}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {dataTitle}
                    </h3>
                    {subtitle && (
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {subtitle}
                      </p>
                    )}
                  </div>
                  {items && (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {items.map((item) => (
                        <div
                          key={item}
                          className="group flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                          <label className="flex items-center space-x-3 cursor-pointer w-full">
                            <div className="relative">
                              <input
                                type="checkbox"
                                className="peer sr-only"
                                id={`checkbox-${item}`}
                                checked={checkedItems[item] || false}
                                onChange={() => handleItemToggle(item)}
                              />
                              <div className="h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-gray-700 peer-checked:bg-gray-700 dark:peer-checked:border-gray-300 dark:peer-checked:bg-gray-300 transition-colors flex items-center justify-center">
                                {checkedItems[item] && (
                                  <svg
                                    className="h-4 w-4 text-white dark:text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={3}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                              {item}
                            </span>
                          </label>
                        </div>
                      ))}
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
