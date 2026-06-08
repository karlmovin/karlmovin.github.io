import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tData } from "../data/i18n-helpers";
import { quotes } from "../data/quotes";

export default function Home() {
	const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
	const { i18n } = useTranslation();

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
					<div className="flex items-center justify-center min-h-50">
						<p className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200">
							{tData(quotes[currentQuoteIndex], i18n.language)}
						</p>
					</div>
			) : null}
		</main>
	);
}
