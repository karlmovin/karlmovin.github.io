import {
	PRECIP_TYPE,
	type SmhiForecast,
	type SmhiHourly,
	SYMBOL_CODE,
} from "./smhi";

const TZ = "Europe/Stockholm";

export type Headline =
	| "clear"
	| "partlyCloudy"
	| "cloudy"
	| "fog"
	| "rainy"
	| "snowy"
	| "sleet"
	| "thunder";

export type Warmth = "freezing" | "cold" | "cool" | "mild" | "warm" | "hot";

export type WindTier = "calm" | "breezy" | "windy" | "veryWindy";

export type Period = "night" | "morning" | "afternoon" | "evening";

export type DayPart = {
	period: Period;
	avgTemp: number;
	dominantSymbol: number;
	headline: Headline;
	maxWind: number;
	precipTotal: number;
	hours: SmhiHourly[];
};

export type Compass = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";

export type WeatherEvent =
	| {
			type: "rainStarts";
			localHour: number;
			intensity: "light" | "moderate" | "heavy";
			probability: number;
	  }
	| { type: "rainStops"; localHour: number }
	| {
			type: "snowStarts";
			localHour: number;
			intensity: "light" | "moderate" | "heavy";
	  }
	| { type: "windPicksUp"; localHour: number; speed: number }
	| {
			type: "windShifts";
			localHour: number;
			from: Compass;
			to: Compass;
	  }
	| { type: "thunder"; localHour: number; probability: number }
	| { type: "cloudsClear"; localHour: number }
	| { type: "cloudsGather"; localHour: number };

export type Advice =
	| "lightLayers"
	| "extraLayer"
	| "removableLayers"
	| "warmJacket"
	| "heavyCoat"
	| "hatAndGloves"
	| "scarf"
	| "rainJacket"
	| "umbrella"
	| "waterproofShoes"
	| "winterBoots"
	| "sunscreen"
	| "sunglasses"
	| "windproof"
	| "iceWarning"
	| "thunderShelter";

export type DayPlan = {
	dateISO: string; // YYYY-MM-DD in Stockholm time
	dayOffset: 0 | 1; // 0 = today, 1 = tomorrow
	headline: Headline;
	warmth: Warmth;
	windTier: WindTier;
	tempMin: number;
	tempMinHour: number; // local hour 0-23
	tempMax: number;
	tempMaxHour: number;
	maxWind: number;
	dominantWindDirection: Compass;
	totalPrecip: number;
	maxPrecipProbability: number;
	parts: DayPart[];
	events: WeatherEvent[];
	advice: Advice[];
	hourCount: number;
};

export function degreesToCompass(deg: number): Compass {
	// 8-point compass. Each sector is 45° wide, centred on the cardinal/intercardinal bearing.
	// N covers 337.5°–22.5°, NE covers 22.5°–67.5°, and so on.
	const norm = ((deg % 360) + 360) % 360;
	const sector = Math.round(norm / 45) % 8;
	const points: Compass[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
	return points[sector];
}

function compassDiff(a: Compass, b: Compass): number {
	const order: Compass[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
	const ai = order.indexOf(a);
	const bi = order.indexOf(b);
	const d = Math.abs(ai - bi);
	return Math.min(d, 8 - d) * 45;
}

// --- helpers ---

function localDateParts(iso: string): { date: string; hour: number } {
	// Format the UTC ISO timestamp in Stockholm local time and extract date + hour.
	const dt = new Date(iso);
	const parts = new Intl.DateTimeFormat("en-CA", {
		timeZone: TZ,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		hour12: false,
	}).formatToParts(dt);
	const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
	const hour = parseInt(get("hour"), 10) % 24;
	return { date: `${get("year")}-${get("month")}-${get("day")}`, hour };
}

function todayAndTomorrowISO(now: Date): [string, string] {
	const t = localDateParts(now.toISOString()).date;
	const tomorrow = new Date(now.getTime() + 86_400_000);
	return [t, localDateParts(tomorrow.toISOString()).date];
}

export function classifySymbol(code: number): Headline {
	if (code === SYMBOL_CODE.CLEAR_SKY || code === SYMBOL_CODE.NEARLY_CLEAR)
		return "clear";
	if (
		code === SYMBOL_CODE.VARIABLE_CLOUDINESS ||
		code === SYMBOL_CODE.HALFCLEAR
	)
		return "partlyCloudy";
	if (code === SYMBOL_CODE.CLOUDY || code === SYMBOL_CODE.OVERCAST)
		return "cloudy";
	if (code === SYMBOL_CODE.FOG) return "fog";
	if (code === SYMBOL_CODE.THUNDERSTORM || code === SYMBOL_CODE.THUNDER)
		return "thunder";
	if (code >= 15 && code <= 17) return "snowy";
	if (code >= 25 && code <= 27) return "snowy";
	if (code >= 12 && code <= 14) return "sleet";
	if (code >= 22 && code <= 24) return "sleet";
	if (code >= 8 && code <= 10) return "rainy";
	if (code >= 18 && code <= 20) return "rainy";
	return "cloudy";
}

function classifyWarmth(maxTemp: number): Warmth {
	if (maxTemp < -5) return "freezing";
	if (maxTemp < 3) return "cold";
	if (maxTemp < 12) return "cool";
	if (maxTemp < 18) return "mild";
	if (maxTemp < 24) return "warm";
	return "hot";
}

function classifyWind(ms: number): WindTier {
	if (ms < 3) return "calm";
	if (ms < 8) return "breezy";
	if (ms < 14) return "windy";
	return "veryWindy";
}

function classifyIntensity(mmPerHour: number): "light" | "moderate" | "heavy" {
	if (mmPerHour < 0.5) return "light";
	if (mmPerHour < 2.5) return "moderate";
	return "heavy";
}

function periodFor(hour: number): Period {
	if (hour < 6) return "night";
	if (hour < 12) return "morning";
	if (hour < 18) return "afternoon";
	return "evening";
}

function mostCommon<T>(items: T[]): T | undefined {
	if (items.length === 0) return undefined;
	const counts = new Map<T, number>();
	for (const it of items) counts.set(it, (counts.get(it) ?? 0) + 1);
	let best: T | undefined;
	let bestCount = -1;
	for (const [k, v] of counts) {
		if (v > bestCount) {
			best = k;
			bestCount = v;
		}
	}
	return best;
}

function isPrecipitating(h: SmhiHourly): boolean {
	const t = h.data.predominant_precipitation_type_at_surface;
	const amount = h.data.precipitation_amount_mean;
	return t !== PRECIP_TYPE.NONE && amount > 0.05;
}

function isSnow(h: SmhiHourly): boolean {
	const t = h.data.predominant_precipitation_type_at_surface;
	return t === PRECIP_TYPE.SNOW || t === PRECIP_TYPE.WET_SNOW;
}

// --- core builder ---

function buildPart(period: Period, hours: SmhiHourly[]): DayPart {
	const temps = hours.map((h) => h.data.air_temperature);
	const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
	const maxWind = Math.max(...hours.map((h) => h.data.wind_speed));
	const precipTotal = hours.reduce(
		(a, h) => a + h.data.precipitation_amount_mean,
		0,
	);
	const dominantSymbol =
		mostCommon(hours.map((h) => h.data.symbol_code)) ??
		hours[0].data.symbol_code;
	return {
		period,
		avgTemp,
		dominantSymbol,
		headline: classifySymbol(dominantSymbol),
		maxWind,
		precipTotal,
		hours,
	};
}

function detectEvents(
	hours: { hour: number; entry: SmhiHourly }[],
): WeatherEvent[] {
	const events: WeatherEvent[] = [];
	let wasPrecipitating = false;
	let prevWindTier: WindTier | null = null;
	let prevCloudFraction: number | null = null;
	let thunderReported = false;
	// Track the last *meaningful* wind direction. Below ~2 m/s the direction is
	// effectively noise, so we don't fire a shift event off near-calm hours.
	let lastSignificantCompass: Compass | null = null;
	for (const { hour, entry } of hours) {
		const precipNow = isPrecipitating(entry);
		if (precipNow && !wasPrecipitating) {
			if (isSnow(entry)) {
				events.push({
					type: "snowStarts",
					localHour: hour,
					intensity: classifyIntensity(entry.data.precipitation_amount_mean),
				});
			} else {
				events.push({
					type: "rainStarts",
					localHour: hour,
					intensity: classifyIntensity(entry.data.precipitation_amount_mean),
					probability: entry.data.probability_of_precipitation,
				});
			}
		} else if (!precipNow && wasPrecipitating) {
			events.push({ type: "rainStops", localHour: hour });
		}
		wasPrecipitating = precipNow;

		const windTier = classifyWind(entry.data.wind_speed);
		if (prevWindTier && windTier !== prevWindTier) {
			const order: WindTier[] = ["calm", "breezy", "windy", "veryWindy"];
			if (
				order.indexOf(windTier) > order.indexOf(prevWindTier) &&
				(windTier === "windy" || windTier === "veryWindy")
			) {
				events.push({
					type: "windPicksUp",
					localHour: hour,
					speed: entry.data.wind_speed,
				});
			}
		}
		prevWindTier = windTier;

		if (!thunderReported && entry.data.thunderstorm_probability >= 30) {
			events.push({
				type: "thunder",
				localHour: hour,
				probability: entry.data.thunderstorm_probability,
			});
			thunderReported = true;
		}

		const cloudFraction = entry.data.cloud_area_fraction;
		if (prevCloudFraction !== null) {
			if (prevCloudFraction <= 2 && cloudFraction >= 6) {
				events.push({ type: "cloudsGather", localHour: hour });
			} else if (prevCloudFraction >= 6 && cloudFraction <= 2) {
				events.push({ type: "cloudsClear", localHour: hour });
			}
		}
		prevCloudFraction = cloudFraction;

		if (entry.data.wind_speed >= 2) {
			const compass = degreesToCompass(entry.data.wind_from_direction);
			if (
				lastSignificantCompass &&
				compassDiff(lastSignificantCompass, compass) >= 90
			) {
				events.push({
					type: "windShifts",
					localHour: hour,
					from: lastSignificantCompass,
					to: compass,
				});
			}
			lastSignificantCompass = compass;
		}
	}
	return events;
}

// Sweden-pragmatic advice rules. Prefers "always grab a layer" defaults and lower
// rain/wind thresholds than strict meteorological cutoffs. Items are added to a Set
// so combinations (cold + windy → scarf appears once) don't duplicate. See
// [[feedback-weather-advice]] for the underlying preference.
function pickAdvice(plan: Omit<DayPlan, "advice">): Advice[] {
	const advice = new Set<Advice>();
	const tempSwing = plan.tempMax - plan.tempMin;
	const isWindy = plan.windTier === "windy" || plan.windTier === "veryWindy";
	const isWet = plan.totalPrecip >= 0.3 || plan.maxPrecipProbability >= 30;
	const isHeavyRain = plan.totalPrecip >= 5;
	const hasSnow =
		plan.headline === "snowy" ||
		plan.events.some((e) => e.type === "snowStarts");
	const hasThunder = plan.events.some((e) => e.type === "thunder");
	const isClearish =
		plan.headline === "clear" || plan.headline === "partlyCloudy";

	// Temperature-graded base. Sweden-pragmatic: even "warm" days get a layer hint
	// since evenings cool, and "mild" already calls for a sweater rather than a tee.
	switch (plan.warmth) {
		case "hot":
			advice.add("sunscreen");
			break;
		case "warm":
			advice.add("lightLayers");
			break;
		case "mild":
			advice.add("extraLayer");
			break;
		case "cool":
			advice.add("warmJacket");
			break;
		case "cold":
			advice.add("warmJacket");
			advice.add("hatAndGloves");
			break;
		case "freezing":
			advice.add("heavyCoat");
			advice.add("hatAndGloves");
			advice.add("scarf");
			break;
	}

	// Wind chill: cold air plus wind → upgrade to scarf even if not yet freezing.
	if ((plan.warmth === "cold" || plan.warmth === "freezing") && isWindy) {
		advice.add("scarf");
	}

	// Big swing → plan to peel layers off rather than stand around in a heavy coat.
	if (tempSwing >= 10) {
		advice.add("removableLayers");
	}

	// Wind on milder days isn't covered by the jacket choice — flag separately.
	if (
		isWindy &&
		(plan.warmth === "warm" || plan.warmth === "mild" || plan.warmth === "cool")
	) {
		advice.add("windproof");
	}

	// Precipitation: pick umbrella for calm rain, rain jacket once wind makes
	// umbrellas useless. Heavy rain always wants the jacket and waterproof shoes.
	if (isWet) {
		if (isWindy || isHeavyRain) {
			advice.add("rainJacket");
		} else {
			advice.add("umbrella");
		}
	}
	if (isHeavyRain) {
		advice.add("waterproofShoes");
	}
	if (hasSnow) {
		advice.add("winterBoots");
	}

	// Sun + glare. Sunscreen already added for "hot"; add sunglasses on bright days,
	// and treat a clear snow day as sun-glare territory too.
	if (isClearish && (plan.warmth === "warm" || plan.warmth === "hot")) {
		advice.add("sunscreen");
		advice.add("sunglasses");
	}
	if (isClearish && hasSnow) {
		advice.add("sunglasses");
	}

	if (hasThunder) {
		advice.add("thunderShelter");
	}

	if (
		plan.tempMin <= 0 &&
		plan.events.some((e) => e.type === "rainStarts" || e.type === "snowStarts")
	) {
		advice.add("iceWarning");
	}

	return Array.from(advice);
}

function buildDayPlan(
	dateISO: string,
	dayOffset: 0 | 1,
	hours: { hour: number; entry: SmhiHourly }[],
): DayPlan | null {
	if (hours.length === 0) return null;

	const temps = hours.map((h) => h.entry.data.air_temperature);
	let tempMin = Infinity;
	let tempMax = -Infinity;
	let tempMinHour = 0;
	let tempMaxHour = 0;
	for (const { hour, entry } of hours) {
		const t = entry.data.air_temperature;
		if (t < tempMin) {
			tempMin = t;
			tempMinHour = hour;
		}
		if (t > tempMax) {
			tempMax = t;
			tempMaxHour = hour;
		}
	}

	const partsMap = new Map<Period, SmhiHourly[]>();
	for (const { hour, entry } of hours) {
		const p = periodFor(hour);
		const arr = partsMap.get(p) ?? [];
		arr.push(entry);
		partsMap.set(p, arr);
	}
	const periodOrder: Period[] = ["night", "morning", "afternoon", "evening"];
	const parts: DayPart[] = [];
	for (const p of periodOrder) {
		const arr = partsMap.get(p);
		if (arr && arr.length > 0) parts.push(buildPart(p, arr));
	}

	const allSymbols = hours.map((h) => h.entry.data.symbol_code);
	const dominantSymbol = mostCommon(allSymbols) ?? allSymbols[0];
	const headline = classifySymbol(dominantSymbol);
	const maxWind = Math.max(...hours.map((h) => h.entry.data.wind_speed));
	const totalPrecip = hours.reduce(
		(a, h) => a + h.entry.data.precipitation_amount_mean,
		0,
	);
	const maxPrecipProbability = Math.max(
		...hours.map((h) => h.entry.data.probability_of_precipitation),
	);

	// Wind direction averaged via unit-vector sum so that 350° and 10° average to 0°, not 180°.
	// Only weigh hours where wind speed is meaningful (≥2 m/s).
	let xSum = 0;
	let ySum = 0;
	for (const { entry } of hours) {
		if (entry.data.wind_speed < 2) continue;
		const rad = (entry.data.wind_from_direction * Math.PI) / 180;
		xSum += Math.sin(rad);
		ySum += Math.cos(rad);
	}
	const meanDeg =
		xSum === 0 && ySum === 0
			? (hours[0]?.entry.data.wind_from_direction ?? 0)
			: (Math.atan2(xSum, ySum) * 180) / Math.PI;
	const dominantWindDirection = degreesToCompass(meanDeg);

	const events = detectEvents(hours);

	void temps;

	const baseplan: Omit<DayPlan, "advice"> = {
		dateISO,
		dayOffset,
		headline,
		warmth: classifyWarmth(tempMax),
		windTier: classifyWind(maxWind),
		tempMin: Math.round(tempMin),
		tempMinHour,
		tempMax: Math.round(tempMax),
		tempMaxHour,
		maxWind: Math.round(maxWind),
		dominantWindDirection,
		totalPrecip: Math.round(totalPrecip * 10) / 10,
		maxPrecipProbability,
		parts,
		events,
		hourCount: hours.length,
	};

	return { ...baseplan, advice: pickAdvice(baseplan) };
}

export function analyzeForecast(
	forecast: SmhiForecast,
	now: Date = new Date(),
): DayPlan[] {
	const [todayISO, tomorrowISO] = todayAndTomorrowISO(now);
	const todayHours: { hour: number; entry: SmhiHourly }[] = [];
	const tomorrowHours: { hour: number; entry: SmhiHourly }[] = [];

	for (const entry of forecast.timeSeries) {
		const { date, hour } = localDateParts(entry.time);
		if (date === todayISO) todayHours.push({ hour, entry });
		else if (date === tomorrowISO) tomorrowHours.push({ hour, entry });
	}

	const plans: DayPlan[] = [];
	const today = buildDayPlan(todayISO, 0, todayHours);
	if (today) plans.push(today);
	const tomorrow = buildDayPlan(tomorrowISO, 1, tomorrowHours);
	if (tomorrow) plans.push(tomorrow);
	return plans;
}

export function formatHour(localHour: number, lang: string): string {
	// Render an hour-of-day as e.g. "07:00" or "19:00".
	const h = String(localHour).padStart(2, "0");
	void lang;
	return `${h}:00`;
}
