import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors duration-300 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Växla mellan ljust och mörkt tema"
    >
      <div
        className={`absolute flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <span className="material-symbols-outlined text-lg text-gray-800">
            dark_mode
          </span>
        ) : (
          <span className="material-symbols-outlined text-lg text-yellow-500">
            light_mode
          </span>
        )}
      </div>
      <div className="flex w-full justify-between px-1">
        <span className="material-symbols-outlined text-lg text-yellow-500 opacity-100 transition-opacity duration-300">
          light_mode
        </span>
        <span className="material-symbols-outlined text-lg text-gray-800 opacity-100 transition-opacity duration-300">
          dark_mode
        </span>
      </div>
    </button>
  );
}
