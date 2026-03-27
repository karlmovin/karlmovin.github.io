import { useEffect, useState } from "react";
import { intressen } from "../data/interests";
import { sporter } from "../data/sports";
import type { Forecast, Instant, TimeSerie } from "../routes/weather";

type WhatToDoPopupProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function WhatToDoPopup({ isOpen, onClose }: WhatToDoPopupProps) {
	const [selectedSport, setSelectedSport] = useState("");
	const [selectedIntresse, setSelectedIntresse] = useState("");
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

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				setLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});
			});
		}
	}, []);

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

	const handleButtonClick = () => {
		const currentMonth = new Date().getMonth() + 1;
		const currentHour = new Date().getHours();
		if (!weather) return;
		const currentWeather = weather?.forecast.next_1_hours.summary.symbol_code;
		const currentTemperature = weather.now.details.air_temperature;

		const availableSports = Object.keys(sporter).filter((sport) => {
			const sportData = sport in sporter && sporter[sport];
			return (
				sportData &&
				sportData.månader.includes(currentMonth) &&
				(!sportData.krav || sportData.krav.includes(currentWeather)) &&
				(!sportData.temperaturer ||
					(currentTemperature >= sportData.temperaturer.min &&
						currentTemperature <= sportData.temperaturer.max)) &&
				currentHour >= sportData.tiderPåDygnet.från &&
				currentHour + sportData.tidsåtgång.min <= sportData.tiderPåDygnet.till
			);
		});

		const randomIndex = Math.floor(Math.random() * availableSports.length);
		const randomSport = availableSports[randomIndex];
		setSelectedSport(randomSport);

		const availableIntressen = Object.keys(intressen).filter((intresse) => {
			const intresseData = intresse in intressen ? intressen[intresse] : null;
			return (
				intresseData &&
				currentHour >= intresseData.tiderPåDygnet.från &&
				currentHour <= intresseData.tiderPåDygnet.till
			);
		});
		const randomIntresseIndex = Math.floor(
			Math.random() * availableIntressen.length,
		);
		const randomIntresse = availableIntressen[randomIntresseIndex];
		setSelectedIntresse(randomIntresse);
	};

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			onClick={handleBackdropClick}
		>
			<div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="text-center">
					{selectedSport || selectedIntresse ? (
						<p className="text-xl mb-4 text-gray-900 dark:text-white">
							Du kan till exempel
							{selectedSport
								? ` ${sporter[selectedSport].verb} ${
										sporter[selectedSport].plats[
											Math.floor(
												Math.random() * sporter[selectedSport].plats.length,
											)
										]
									}${
										selectedIntresse
											? " eller så kan du kanske " +
												intressen[selectedIntresse].verb +
												"?"
											: "?"
									}`
								: " " + intressen[selectedIntresse].verb + "?"}
						</p>
					) : null}
					<button
						className="px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium transition-colors"
						onClick={handleButtonClick}
					>
						{!selectedSport && !selectedIntresse
							? "Vad ska jag göra idag?"
							: "Nä tack, något annat?"}
					</button>
				</div>
			</div>
		</div>
	);
}
