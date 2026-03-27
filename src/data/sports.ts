import type { Translated } from "./i18n-helpers";

export const sports: Record<
	string,
	{
		verb: Translated;
		months: number[];
		places: Translated[];
		requirements?: string[];
		duration: { min: number; max: number };
		hoursOfDay: { from: number; to: number };
		temperatures: { max: number; min: number };
	}
> = {
	iceSkating: {
		verb: { sv: "åka skridsko", en: "go ice skating" },
		months: [10, 11, 12, 1, 2, 3],
		places: [
			{ sv: "på isbanan", en: "at the ice rink" },
			{ sv: "på sjön", en: "on the lake" },
			{ sv: "i skärgården", en: "in the archipelago" },
		],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 1, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 10 },
	},
	crossCountrySkiing: {
		verb: { sv: "åka längdskidor", en: "go cross-country skiing" },
		months: [12, 1, 2, 3],
		places: [{ sv: "i skidspåret", en: "on the ski trail" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 1, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 10 },
	},
	crossCountrySkiingMountains: {
		verb: { sv: "åka längdskidor", en: "go cross-country skiing" },
		months: [11, 12, 1, 2, 3, 4],
		places: [{ sv: "i fjällen", en: "in the mountains" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 1, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 10 },
	},
	downhillSkiing: {
		verb: { sv: "åka utförsåkning", en: "go downhill skiing" },
		months: [1, 2, 3, 4],
		places: [
			{ sv: "i skidbacken", en: "on the ski slope" },
			{ sv: "i fjällen", en: "in the mountains" },
		],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 2, max: 7 },
		hoursOfDay: { from: 8, to: 16 },
		temperatures: { min: -20, max: 10 },
	},
	randonnee: {
		verb: { sv: "åka randonné", en: "go ski touring" },
		months: [1, 2, 3, 4],
		places: [{ sv: "i fjällen", en: "in the mountains" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 4, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 10 },
	},
	backcountrySkiing: {
		verb: { sv: "åka turskidor", en: "go backcountry skiing" },
		months: [1, 2, 3, 4],
		places: [{ sv: "i fjällen", en: "in the mountains" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 4, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 10 },
	},
	hiking: {
		verb: { sv: "vandra", en: "go hiking" },
		months: [4, 5, 6, 7, 8, 9, 10],
		places: [
			{ sv: "i skogen", en: "in the forest" },
			{ sv: "i fjällen", en: "in the mountains" },
		],
		duration: { min: 2, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	camping: {
		verb: { sv: "tälta", en: "go camping" },
		months: [4, 5, 6, 7, 8, 9, 10],
		places: [
			{ sv: "i skogen", en: "in the forest" },
			{ sv: "i fjällen", en: "in the mountains" },
		],
		duration: { min: 6, max: 10 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	orienteering: {
		verb: { sv: "orientera", en: "go orienteering" },
		months: [4, 5, 6, 7, 8, 9, 10],
		places: [{ sv: "i skogen", en: "in the forest" }],
		duration: { min: 1, max: 4 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 0, max: 30 },
	},
	sailing: {
		verb: { sv: "segla", en: "go sailing" },
		months: [5, 6, 7, 8, 9],
		places: [{ sv: "i skärgården", en: "in the archipelago" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 2, max: 8 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	outdoorClimbing: {
		verb: { sv: "klättra utomhus", en: "go outdoor climbing" },
		months: [5, 6, 7, 8, 9],
		places: [{ sv: "vid klipporna", en: "at the cliffs" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 2, max: 8 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	indoorClimbing: {
		verb: { sv: "klättra inomhus", en: "go indoor climbing" },
		months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		places: [{ sv: "i klätterhallen", en: "at the climbing gym" }],
		duration: { min: 1, max: 4 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 40 },
	},
	mountainbike: {
		verb: { sv: "cykla mountainbike", en: "go mountain biking" },
		months: [4, 5, 6, 7, 8, 9, 10],
		places: [
			{ sv: "i skogen", en: "in the forest" },
			{ sv: "i fjällen", en: "in the mountains" },
		],
		duration: { min: 2, max: 8 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	roadCycling: {
		verb: { sv: "cykla landsvägscykel", en: "go road cycling" },
		months: [5, 6, 7, 8, 9],
		places: [{ sv: "på vägen", en: "on the road" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 2, max: 8 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	gravelbike: {
		verb: { sv: "cykla gravelbike", en: "go gravel biking" },
		months: [4, 5, 6, 7, 8, 9, 10],
		places: [
			{ sv: "på vägen", en: "on the road" },
			{ sv: "på grusvägar", en: "on gravel roads" },
		],
		duration: { min: 2, max: 8 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	running: {
		verb: { sv: "springa", en: "go running" },
		months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		places: [
			{ sv: "i skogen", en: "in the forest" },
			{ sv: "i parken", en: "in the park" },
		],
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 40 },
	},
	swimming: {
		verb: { sv: "simma", en: "go swimming" },
		months: [6, 7, 8, 9],
		places: [
			{ sv: "i sjön", en: "in the lake" },
			{ sv: "i havet", en: "in the sea" },
		],
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	indoorSwimming: {
		verb: { sv: "simma", en: "go swimming" },
		months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		places: [{ sv: "i bassängen", en: "at the pool" }],
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 40 },
	},
	kayaking: {
		verb: { sv: "kajaka", en: "go kayaking" },
		months: [5, 6, 7, 8, 9],
		places: [
			{ sv: "i skärgården", en: "in the archipelago" },
			{ sv: "i havet", en: "in the sea" },
		],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 2, max: 8 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	downhill: {
		verb: { sv: "köra downhill", en: "go downhill biking" },
		months: [5, 6, 7, 8, 9],
		places: [{ sv: "i skidbacken", en: "on the ski slope" }],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 2, max: 6 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
	indoorWorkout: {
		verb: { sv: "träna inomhus", en: "work out indoors" },
		months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		places: [
			{ sv: "på gymmet", en: "at the gym" },
			{ sv: "hemma", en: "at home" },
		],
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: -20, max: 40 },
	},
	outdoorWorkout: {
		verb: { sv: "träna utomhus", en: "work out outdoors" },
		months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		places: [
			{ sv: "i parken", en: "in the park" },
			{ sv: "på altanen", en: "on the patio" },
		],
		requirements: ["fair", "cloudy", "clear"],
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		temperatures: { min: 10, max: 30 },
	},
};
