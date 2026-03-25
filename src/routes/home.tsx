import { useState, useEffect } from "react";
import { quotes } from "../data/quotes";

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Only set up rotation if there are multiple quotes
    if (quotes.length > 1) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 5000); // Change quote every 5 seconds

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <main className="container max-w-(--breakpoint-xl) mx-auto px-4 py-8">
      {quotes?.length ? (
        <div className="card p-6">
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200">
              {quotes[currentQuoteIndex]}
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
