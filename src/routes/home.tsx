import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tData } from "../data/i18n-helpers";
import { quotes } from "../data/quotes";

export default function Home() {
	const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
	const [controlsVisible, setControlsVisible] = useState(false);
	const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const { t, i18n } = useTranslation();

	const goToQuote = (next: (prev: number) => number) =>
		setCurrentQuoteIndex((prev) => (next(prev) + quotes.length) % quotes.length);

	const handleMouseMove = () => {
		setControlsVisible(true);
		clearTimeout(hideTimer.current);
		hideTimer.current = setTimeout(() => setControlsVisible(false), 2000);
	};

	const handleMouseLeave = () => {
		clearTimeout(hideTimer.current);
		setControlsVisible(false);
	};

	useEffect(() => () => clearTimeout(hideTimer.current), []);

	useEffect(() => {
		// Only set up rotation if there are multiple quotes
		if (quotes.length > 1) {
			const interval = setInterval(() => {
				setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
			}, 10_000); // Change quote every 10 seconds

			return () => clearInterval(interval);
		}
	}, [currentQuoteIndex]);

	return (
		<main
			className="container max-w-(--breakpoint-xl) mx-auto px-4 py-8"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{quotes?.length ? (
				<div className="flex items-center gap-4 min-h-50">
					{quotes.length > 1 && (
						<button
							type="button"
							onClick={() => goToQuote((prev) => prev - 1)}
							aria-label={t("home.prevQuote")}
							className={`shrink-0 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-opacity ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
						>
							‹
						</button>
					)}
					<p className="flex-1 text-3xl font-bold text-center text-gray-700 dark:text-gray-200">
						{tData(quotes[currentQuoteIndex], i18n.language)}
					</p>
					{quotes.length > 1 && (
						<button
							type="button"
							onClick={() => goToQuote((prev) => prev + 1)}
							aria-label={t("home.nextQuote")}
							className={`shrink-0 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-opacity ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
						>
							›
						</button>
					)}
				</div>
			) : null}
		</main>
	);
}
