import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tData } from "../data/i18n-helpers";
import { interests } from "../data/interests";
import { sports } from "../data/sports";
import type { Forecast, Instant, TimeSerie } from "./weather";

// https://api.met.no/weatherapi/documentation
// https://api.met.no/doc/ClientLibraries
// https://opendata.smhi.se/apidocs/metobs/index.html
// YRs ikoner: https://github.com/metno/weathericons/tree/main
// https://www.geonames.org/export/web-services.html
// https://nominatim.org/
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

//TODOS
/*
 "inkludera rimliga tider i vad ska jag göra?",
  "visa förslagen på vad jag kan göra på ett bättre sätt",
*/

export default function WhatToDo() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
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
	const [textTvWeather, setTextTvWeather] = useState<
		| {
				num: string;
				title: string;
				content: string[];
				content_plain: string[];
				next_page: string;
				prev_page: string;
				date_updated_unix: number;
				permalink: string;
				id: string;
				breadcrumbs: [];
		  }[]
		| null
	>(null);

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
		async function fetchTextTvWeather() {
			const response = await fetch(
				"https://api.texttv.nu/api/get/410?includePlainTextContent=1&app=kallesväder",
			);
			const data = await response.json();
			setTextTvWeather(data);
		}
		async function fetchWeather() {
			// https://developer.yr.no/doc/GettingStarted/
			// https://docs.api.met.no/doc/
			// https://api.met.no/weatherapi/locationforecast/2.0/documentation
			// https://api.met.no/doc/ForecastJSON
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
		if (!textTvWeather) {
			fetchTextTvWeather();
		}
	}, [location]);

	const handleButtonClick = () => {
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

		const randomIndex = Math.floor(Math.random() * availableSports.length);
		const randomSport = availableSports[randomIndex];
		setSelectedSport(randomSport);

		const availableInterests = Object.keys(interests).filter((interest) => {
			const interestData = interest in interests ? interests[interest] : null;
			return (
				interestData &&
				currentHour >= interestData.hoursOfDay.from &&
				currentHour <= interestData.hoursOfDay.to
			);
		});
		const randomInterestIndex = Math.floor(
			Math.random() * availableInterests.length,
		);
		const randomInterest = availableInterests[randomInterestIndex];
		setSelectedIntresse(randomInterest);
	};

	return (
		<main className="container max-w-(--breakpoint-xl) place-content-center flex h-dvh items-center flex-col">
			{selectedSport || selectedInterest ? (
				<p className="text-2xl">
					{t("whatToDo.suggestion")}
					{selectedSport
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
						: ` ${tData(interests[selectedInterest].verb, lang)}?`}
				</p>
			) : null}
			<button
				className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
				type="button"
				onClick={handleButtonClick}
			>
				{!selectedSport && !selectedInterest
					? t("whatToDo.button")
					: t("whatToDo.tryAgain")}
			</button>
		</main>
	);
}
