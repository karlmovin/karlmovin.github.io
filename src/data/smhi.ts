// SMHI snow1g (Swedish National Operational Weather) point forecast client.
// Docs: https://opendata.smhi.se/metfcst/snow1gv1/introduction

export type SmhiLocation = {
	id: "stockholm" | "huddinge" | "custom";
	name: string;
	lat: number;
	lon: number;
};

export const STOCKHOLM: SmhiLocation = {
	id: "stockholm",
	name: "Stockholm",
	lat: 59.3293,
	lon: 18.0686,
};

export const HUDDINGE: SmhiLocation = {
	id: "huddinge",
	name: "Huddinge",
	lat: 59.2367,
	lon: 17.9821,
};

export const DEFAULT_LOCATIONS = [STOCKHOLM, HUDDINGE];

// snow1g covers the Nordic region. Loose bounding box used to validate user-supplied coords.
const NORDIC_BOUNDS = {
	minLat: 53,
	maxLat: 71,
	minLon: 2,
	maxLon: 32,
};

export function isInNordicCoverage(lat: number, lon: number): boolean {
	return (
		lat >= NORDIC_BOUNDS.minLat &&
		lat <= NORDIC_BOUNDS.maxLat &&
		lon >= NORDIC_BOUNDS.minLon &&
		lon <= NORDIC_BOUNDS.maxLon
	);
}

export type SmhiHourly = {
	time: string;
	intervalParametersStartTime: string;
	data: {
		air_temperature: number;
		wind_from_direction: number;
		wind_speed: number;
		wind_speed_of_gust: number;
		relative_humidity: number;
		air_pressure_at_mean_sea_level: number;
		visibility_in_air: number;
		thunderstorm_probability: number;
		probability_of_frozen_precipitation: number;
		cloud_area_fraction: number;
		low_type_cloud_area_fraction: number;
		medium_type_cloud_area_fraction: number;
		high_type_cloud_area_fraction: number;
		cloud_base_altitude: number;
		cloud_top_altitude: number;
		precipitation_amount_mean_deterministic: number;
		precipitation_amount_mean: number;
		precipitation_amount_min: number;
		precipitation_amount_max: number;
		precipitation_amount_median: number;
		probability_of_precipitation: number;
		precipitation_frozen_part: number;
		predominant_precipitation_type_at_surface: number;
		symbol_code: number;
	};
};

export type SmhiForecast = {
	createdTime: string;
	referenceTime: string;
	geometry: { type: "Point"; coordinates: [number, number] };
	timeSeries: SmhiHourly[];
};

const ENDPOINT =
	"https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point";

function cacheKey(lat: number, lon: number): string {
	const hourBucket = Math.floor(Date.now() / 3_600_000);
	return `smhi:${lat.toFixed(4)}:${lon.toFixed(4)}:${hourBucket}`;
}

export async function fetchForecast(
	lat: number,
	lon: number,
): Promise<SmhiForecast> {
	const key = cacheKey(lat, lon);
	const cached = sessionStorage.getItem(key);
	if (cached) {
		return JSON.parse(cached) as SmhiForecast;
	}
	const url = `${ENDPOINT}/lon/${lon}/lat/${lat}/data.json`;
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`SMHI fetch failed: ${res.status}`);
	}
	const data = (await res.json()) as SmhiForecast;
	try {
		sessionStorage.setItem(key, JSON.stringify(data));
	} catch {
		// Quota exceeded — proceed without caching.
	}
	return data;
}

// Weather symbol code (Wsymb2) — 27 codes covering sky condition + precipitation type/intensity.
export const SYMBOL_CODE = {
	CLEAR_SKY: 1,
	NEARLY_CLEAR: 2,
	VARIABLE_CLOUDINESS: 3,
	HALFCLEAR: 4,
	CLOUDY: 5,
	OVERCAST: 6,
	FOG: 7,
	LIGHT_RAIN_SHOWERS: 8,
	MODERATE_RAIN_SHOWERS: 9,
	HEAVY_RAIN_SHOWERS: 10,
	THUNDERSTORM: 11,
	LIGHT_SLEET_SHOWERS: 12,
	MODERATE_SLEET_SHOWERS: 13,
	HEAVY_SLEET_SHOWERS: 14,
	LIGHT_SNOW_SHOWERS: 15,
	MODERATE_SNOW_SHOWERS: 16,
	HEAVY_SNOW_SHOWERS: 17,
	LIGHT_RAIN: 18,
	MODERATE_RAIN: 19,
	HEAVY_RAIN: 20,
	THUNDER: 21,
	LIGHT_SLEET: 22,
	MODERATE_SLEET: 23,
	HEAVY_SLEET: 24,
	LIGHT_SNOW: 25,
	MODERATE_SNOW: 26,
	HEAVY_SNOW: 27,
} as const;

// ECMWF precipitation type code (parameter 260015).
// 0 = none, 1 = rain, 3 = freezing rain, 5 = snow, 6 = wet snow (sleet), 7 = mixed, 8 = ice pellets
export const PRECIP_TYPE = {
	NONE: 0,
	RAIN: 1,
	FREEZING_RAIN: 3,
	SNOW: 5,
	WET_SNOW: 6,
	MIXED: 7,
	ICE_PELLETS: 8,
} as const;
