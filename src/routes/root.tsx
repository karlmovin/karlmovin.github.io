import { Outlet } from "react-router";
import Nav from "../Nav";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    // Kontrollera om användaren tidigare har valt dark mode
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Nav />
      <Outlet />
    </div>
  );
}
