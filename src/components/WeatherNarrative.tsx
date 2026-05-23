import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	DEFAULT_LOCATIONS,
	fetchForecast,
	HUDDINGE,
	isInNordicCoverage,
	type SmhiForecast,
	type SmhiLocation,
	STOCKHOLM,
} from "../data/smhi";
import {
	analyzeForecast,
	classifySymbol,
	type DayPlan,
	degreesToCompass,
	formatHour,
} from "../data/weather-narrative";

type LocationKey = "stockholm" | "huddinge" | "custom";

export default function WeatherNarrative() {
	const { t, i18n } = useTranslation();
	const [selected, setSelected] = useState<LocationKey>("stockholm");
	const [customLocation, setCustomLocation] = useState<SmhiLocation | null>(
		null,
	);
	const [forecast, setForecast] = useState<SmhiForecast | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [geoMessage, setGeoMessage] = useState<string | null>(null);
	const [expanded, setExpanded] = useState<Record<number, boolean>>({});

	const activeLocation: SmhiLocation = useMemo(() => {
		if (selected === "huddinge") return HUDDINGE;
		if (selected === "custom" && customLocation) return customLocation;
		return STOCKHOLM;
	}, [selected, customLocation]);

	useEffect(() => {
		let cancelled = false;
		setLoading(true);
		setError(null);
		fetchForecast(activeLocation.lat, activeLocation.lon)
			.then((data) => {
				if (!cancelled) setForecast(data);
			})
			.catch((err: unknown) => {
				if (!cancelled)
					setError(err instanceof Error ? err.message : "unknown");
			})
			.finally(() => {
				if (!cancelled) setLoading(false);
			});
		return () => {
			cancelled = true;
		};
	}, [activeLocation]);

	const plans = useMemo(
		() => (forecast ? analyzeForecast(forecast) : []),
		[forecast],
	);

	const handleGeolocation = () => {
		if (!("geolocation" in navigator)) return;
		setGeoMessage(null);
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const { latitude, longitude } = pos.coords;
				if (!isInNordicCoverage(latitude, longitude)) {
					setGeoMessage(t("weather.narrative.outOfCoverage"));
					setSelected("stockholm");
					return;
				}
				setCustomLocation({
					id: "custom",
					name: t("weather.narrative.locationCustom"),
					lat: latitude,
					lon: longitude,
				});
				setSelected("custom");
			},
			() => {
				setGeoMessage(t("weather.narrative.outOfCoverage"));
			},
		);
	};

	return (
		<section className="flex w-full max-w-200 flex-col rounded-br-xl bg-white dark:bg-gray-800 bg-clip-border p-4 text-gray-700 dark:text-gray-200 shadow-xs mb-4">
			<header className="flex flex-wrap items-center justify-between gap-2 mb-3">
				<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
					{t("weather.narrative.title")}
				</h2>
				<div className="flex items-center gap-1 text-sm">
					{DEFAULT_LOCATIONS.map((loc) => {
						const key = loc.id as LocationKey;
						const labelKey =
							loc.id === "stockholm"
								? "weather.narrative.locationStockholm"
								: "weather.narrative.locationHuddinge";
						const isActive = selected === key;
						return (
							<button
								type="button"
								key={loc.id}
								onClick={() => setSelected(key)}
								className={`px-2 py-1 rounded-md transition-colors ${
									isActive
										? "bg-blue-600 text-white"
										: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
								}`}
							>
								{t(labelKey)}
							</button>
						);
					})}
					<button
						type="button"
						onClick={handleGeolocation}
						className={`px-2 py-1 rounded-md transition-colors ${
							selected === "custom"
								? "bg-blue-600 text-white"
								: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
						}`}
						title={t("weather.narrative.useMyLocation")}
					>
						{customLocation && selected === "custom"
							? t("weather.narrative.locationCustom")
							: t("weather.narrative.useMyLocation")}
					</button>
				</div>
			</header>

			{geoMessage && (
				<p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
					{geoMessage}
				</p>
			)}

			{loading && <p>{t("weather.narrative.loading")}</p>}
			{error && (
				<p className="text-red-600 dark:text-red-400">
					{t("weather.narrative.error")}
				</p>
			)}

			{!loading && !error && plans.length === 0 && (
				<p>{t("weather.narrative.error")}</p>
			)}

			<div className="flex flex-col gap-4">
				{plans.map((plan) => (
					<DayPlanCard
						key={plan.dayOffset}
						plan={plan}
						lang={i18n.language}
						expanded={!!expanded[plan.dayOffset]}
						onToggleExpand={() =>
							setExpanded((prev) => ({
								...prev,
								[plan.dayOffset]: !prev[plan.dayOffset],
							}))
						}
					/>
				))}
			</div>

			<p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
				{t("weather.narrative.poweredBy")}{" "}
				<a
					href="https://opendata.smhi.se/metfcst/snow1gv1/introduction"
					className="text-blue-600 dark:text-blue-400 hover:underline"
				>
					{t("weather.narrative.smhi")}
				</a>
			</p>
		</section>
	);
}

type DayPlanCardProps = {
	plan: DayPlan;
	lang: string;
	expanded: boolean;
	onToggleExpand: () => void;
};

function DayPlanCard({
	plan,
	lang,
	expanded,
	onToggleExpand,
}: DayPlanCardProps) {
	const { t } = useTranslation();
	const day = t(
		plan.dayOffset === 0
			? "weather.narrative.day.today"
			: "weather.narrative.day.tomorrow",
	);
	const warmth = t(`weather.narrative.warmth.${plan.warmth}`);
	const maxTime = formatHour(plan.tempMaxHour, lang);
	const minTime = formatHour(plan.tempMinHour, lang);

	const headlineSentence = t(
		`weather.narrative.headlineSentence.${plan.headline}`,
		{
			day,
			warmth,
			max: plan.tempMax,
			maxTime,
		},
	);

	const lowSentence = t("weather.narrative.lowSentence", {
		min: plan.tempMin,
		minTime,
	});

	return (
		<article className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
			<h3 className="font-semibold text-lg mb-1">{day}</h3>
			<p className="leading-relaxed">{headlineSentence}</p>
			<p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300">
				{lowSentence}
			</p>

			<ul className="mt-2 space-y-1 text-sm">
				{plan.parts.map((part) => (
					<li key={part.period}>
						{t("weather.narrative.periodLine", {
							period: t(`weather.narrative.period.${part.period}`),
							temp: Math.round(part.avgTemp),
							description: t(`weather.narrative.description.${part.headline}`),
						})}
					</li>
				))}
			</ul>

			{plan.events.length > 0 && (
				<ul className="mt-2 space-y-1 text-sm">
					{plan.events.map((ev) => (
						<li key={`${ev.type}-${ev.localHour}`}>
							{renderEvent(ev, t, lang)}
						</li>
					))}
				</ul>
			)}

			<p className="mt-2 text-sm">
				{t("weather.narrative.windLine", {
					wind: t(`weather.narrative.wind.${plan.windTier}`, {
						speed: plan.maxWind,
						direction: t(
							`weather.narrative.compass.${plan.dominantWindDirection}`,
						),
					}),
				})}
			</p>

			{plan.advice.length > 0 && (
				<p className="mt-2 text-sm">
					<span className="font-medium">
						{t("weather.narrative.adviceLead")}
					</span>{" "}
					{plan.advice
						.map((a) => t(`weather.narrative.advice.${a}`))
						.join(", ")}
					.
				</p>
			)}

			<button
				type="button"
				onClick={onToggleExpand}
				className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
			>
				{expanded
					? t("weather.narrative.hideDetails")
					: t("weather.narrative.showDetails")}
			</button>

			{expanded && <DayPlanDetails plan={plan} lang={lang} />}
		</article>
	);
}

type EventTFn = (key: string, opts?: Record<string, unknown>) => string;

function renderEvent(
	ev: DayPlan["events"][number],
	tFn: EventTFn,
	lang: string,
): string {
	const time = formatHour(ev.localHour, lang);
	switch (ev.type) {
		case "rainStarts":
			return tFn("weather.narrative.event.rainStarts", {
				time,
				intensity: tFn(`weather.narrative.intensity.${ev.intensity}`),
				probability: ev.probability,
			});
		case "rainStops":
			return tFn("weather.narrative.event.rainStops", { time });
		case "snowStarts":
			return tFn("weather.narrative.event.snowStarts", {
				time,
				intensity: tFn(`weather.narrative.intensity.${ev.intensity}`),
			});
		case "windPicksUp":
			return tFn("weather.narrative.event.windPicksUp", {
				time,
				speed: Math.round(ev.speed),
			});
		case "windShifts":
			return tFn("weather.narrative.event.windShifts", {
				time,
				from: tFn(`weather.narrative.compass.${ev.from}`),
				to: tFn(`weather.narrative.compass.${ev.to}`),
			});
		case "thunder":
			return tFn("weather.narrative.event.thunder", {
				time,
				probability: ev.probability,
			});
		case "cloudsClear":
			return tFn("weather.narrative.event.cloudsClear", { time });
		case "cloudsGather":
			return tFn("weather.narrative.event.cloudsGather", { time });
	}
}

function DayPlanDetails({ plan, lang }: { plan: DayPlan; lang: string }) {
	const { t } = useTranslation();
	const maxTime = formatHour(plan.tempMaxHour, lang);
	const minTime = formatHour(plan.tempMinHour, lang);

	return (
		<div className="mt-3 text-sm">
			<dl className="grid grid-cols-2 gap-x-4 gap-y-1">
				<dt className="font-medium">
					{t("weather.narrative.details.tempRange")}
				</dt>
				<dd>
					{t("weather.narrative.details.tempRangeValue", {
						min: plan.tempMin,
						minTime,
						max: plan.tempMax,
						maxTime,
					})}
				</dd>
				<dt className="font-medium">
					{t("weather.narrative.details.maxWind")}
				</dt>
				<dd>
					{t("weather.narrative.details.maxWindValue", { speed: plan.maxWind })}
				</dd>
				<dt className="font-medium">
					{t("weather.narrative.details.totalPrecip")}
				</dt>
				<dd>
					{t("weather.narrative.details.totalPrecipValue", {
						amount: plan.totalPrecip,
					})}
				</dd>
				<dt className="font-medium">
					{t("weather.narrative.details.maxPrecipProb")}
				</dt>
				<dd>
					{t("weather.narrative.details.maxPrecipProbValue", {
						prob: plan.maxPrecipProbability,
					})}
				</dd>
			</dl>

			<h4 className="font-medium mt-3 mb-1">
				{t("weather.narrative.details.hourly")}
			</h4>
			<div className="overflow-x-auto">
				<table className="w-full text-xs border-collapse">
					<thead>
						<tr className="text-left">
							<th className="pr-3 py-1">
								{t("weather.narrative.details.colHour")}
							</th>
							<th className="pr-3 py-1">
								{t("weather.narrative.details.colTemp")}
							</th>
							<th className="pr-3 py-1">
								{t("weather.narrative.details.colWind")}
							</th>
							<th className="pr-3 py-1">
								{t("weather.narrative.details.colWindDir")}
							</th>
							<th className="pr-3 py-1">
								{t("weather.narrative.details.colPrecip")}
							</th>
							<th className="pr-3 py-1">
								{t("weather.narrative.details.colSymbol")}
							</th>
						</tr>
					</thead>
					<tbody>
						{plan.parts.flatMap((part) =>
							part.hours.map((h) => {
								const localHourStr = new Intl.DateTimeFormat("sv-SE", {
									timeZone: "Europe/Stockholm",
									hour: "2-digit",
									minute: "2-digit",
								}).format(new Date(h.time));
								return (
									<tr
										key={h.time}
										className="border-t border-gray-200 dark:border-gray-700"
									>
										<td className="pr-3 py-1">{localHourStr}</td>
										<td className="pr-3 py-1">
											{Math.round(h.data.air_temperature)}°
										</td>
										<td className="pr-3 py-1">
											{Math.round(h.data.wind_speed)} m/s
										</td>
										<td className="pr-3 py-1">
											{h.data.wind_speed >= 2
												? degreesToCompass(h.data.wind_from_direction)
												: "—"}
										</td>
										<td className="pr-3 py-1">
											{h.data.precipitation_amount_mean > 0
												? `${h.data.precipitation_amount_mean.toFixed(1)} mm`
												: "—"}
										</td>
										<td className="pr-3 py-1">
											{t(
												`weather.narrative.description.${classifySymbol(h.data.symbol_code)}`,
											)}
										</td>
									</tr>
								);
							}),
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
