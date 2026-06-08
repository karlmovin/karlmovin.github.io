import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tData } from "../data/i18n-helpers";
import { interests } from "../data/interests";
import { sports } from "../data/sports";
import type { Forecast, Instant, TimeSerie } from "../routes/weather";

export default function WhatToDo() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedSport, setSelectedSport] = useState("");
	const [selectedInterest, setSelectedIntresse] = useState("");
	const [location, setLocation] = useState({ lat: 59.334591, lon: 18.06324 });
	const [weather, setWeather] = useState<{
		time: string;
		now: Instant;
		forecast: {
			next_1_hours: Forecast;
			next_6_hours: Forecast;
			next_12_hours: Forecast;
			tomorrow: Forecast;
		};
	} | null>(null);
	const ref = useRef<HTMLDivElement>(null);
	const locationRequested = useRef(false);

	const requestLocation = () => {
		if (locationRequested.current) return;
		locationRequested.current = true;
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				setLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});
			});
		}
	};

	useEffect(() => {
		async function fetchWeather() {
			const response = await fetch(
				`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${location.lat}&lon=${location.lon}`,
			);
			const data = await response.json();
			const today = new Date();

			const closestPassedHour: TimeSerie = data.properties.timeseries.find(
				({ time }: { time: string }) =>
					new Date(time).getHours() === today.getHours(),
			);
			const closestComingHour: TimeSerie = data.properties.timeseries.find(
				({ time }: { time: string }) =>
					new Date(time).getHours() + 1 === today.getHours(),
			);

			const tomorrow: TimeSerie = data.properties.timeseries.find(
				({ time }: { time: string }) =>
					time >=
					new Date(
						today.getFullYear(),
						today.getMonth(),
						today.getDate() + 1,
						9,
					).toISOString(),
			);

			setWeather({
				time: closestPassedHour.time,
				now: closestPassedHour.data.instant,
				forecast: {
					next_1_hours: {
						summary: closestPassedHour.data.next_1_hours.summary,
						details: {
							...closestPassedHour.data.instant.details,
							...closestComingHour.data.next_1_hours.details,
							air_temperature_max:
								closestPassedHour.data.instant.details
									.air_temperature_percentile_90,
							air_temperature_min:
								closestPassedHour.data.instant.details
									.air_temperature_percentile_10,
						},
					},
					next_6_hours: closestPassedHour.data.next_6_hours,
					next_12_hours: closestPassedHour.data.next_12_hours,
					tomorrow: {
						summary: tomorrow.data.next_12_hours.summary,
						details: {
							...tomorrow.data.next_1_hours.details,
							...tomorrow.data.next_12_hours.details,
							...tomorrow.data.next_6_hours.details,
						},
					},
				},
			});
		}

		if (location) {
			fetchWeather();
		}
	}, [location]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const rollSuggestion = () => {
		const currentMonth = new Date().getMonth() + 1;
		const currentHour = new Date().getHours();
		if (!weather) return;
		const currentWeather = weather?.forecast.next_1_hours.summary.symbol_code;
		const currentTemperature = weather.now.details.air_temperature;

		const availableSports = Object.keys(sports).filter((sport) => {
			const sportData = sport in sports && sports[sport];
			return (
				sportData &&
				sportData.months.includes(currentMonth) &&
				(!sportData.requirements ||
					sportData.requirements.includes(currentWeather)) &&
				(!sportData.temperatures ||
					(currentTemperature >= sportData.temperatures.min &&
						currentTemperature <= sportData.temperatures.max)) &&
				currentHour >= sportData.hoursOfDay.from &&
				currentHour + sportData.duration.min <= sportData.hoursOfDay.to
			);
		});

		const randomSport =
			availableSports[Math.floor(Math.random() * availableSports.length)];
		setSelectedSport(randomSport);

		const availableInterests = Object.keys(interests).filter((interest) => {
			const interestData = interest in interests ? interests[interest] : null;
			return (
				interestData &&
				currentHour >= interestData.hoursOfDay.from &&
				currentHour <= interestData.hoursOfDay.to
			);
		});
		const randomInterest =
			availableInterests[
				Math.floor(Math.random() * availableInterests.length)
			];
		setSelectedIntresse(randomInterest);
	};

	const handleClick = () => {
		requestLocation();
		if (!isOpen) {
			setIsOpen(true);
			rollSuggestion();
		} else {
			rollSuggestion();
		}
	};

	const suggestion =
		selectedSport || selectedInterest
			? `${t("whatToDo.suggestion")}${
					selectedSport
						? ` ${tData(sports[selectedSport].verb, lang)} ${tData(
								sports[selectedSport].places[
									Math.floor(
										Math.random() * sports[selectedSport].places.length,
									)
								],
								lang,
							)}${
								selectedInterest
									? ` ${t("whatToDo.orMaybe")} ${tData(interests[selectedInterest].verb, lang)}?`
									: "?"
							}`
						: ` ${tData(interests[selectedInterest].verb, lang)}?`
				}`
			: null;

	return (
		<div className="relative" ref={ref}>
			<button
				onClick={handleClick}
				className="px-2 py-1 text-xs font-bold tracking-wide rounded bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
			>
				WTFTODO
			</button>
			{isOpen && suggestion && (
				<div className="absolute right-0 top-full mt-2 w-72 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 z-50">
					<p className="text-sm text-gray-900 dark:text-white mb-3">
						{suggestion}
					</p>
					<button
						onClick={rollSuggestion}
						className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					>
						{t("whatToDo.tryAgain")}
					</button>
				</div>
			)}
		</div>
	);
}
