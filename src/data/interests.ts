import type { Translated } from "./i18n-helpers";

export const interests: Record<
	string,
	{
		verb: Translated;
		duration: { min: number; max: number };
		hoursOfDay: { from: number; to: number };
		requirements?: string[];
	}
> = {
	programming: {
		verb: { sv: "programmera", en: "do some programming" },
		duration: { min: 1, max: 4 },
		hoursOfDay: { from: 8, to: 20 },
	},
	reading: {
		verb: { sv: "läsa", en: "read a book" },
		duration: { min: 1, max: 2 },
		hoursOfDay: { from: 8, to: 22 },
	},
	movies: {
		verb: { sv: "titta på film/serier", en: "watch movies/series" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	boardGames: {
		verb: { sv: "spela brädspel", en: "play board games" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		requirements: ["fler än 1 personer"],
	},
	videoGames: {
		verb: { sv: "spela dataspel", en: "play video games" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 19 },
	},
	ceramics: {
		verb: { sv: "göra keramik", en: "do some ceramics" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	woodworking: {
		verb: { sv: "snickra", en: "do some woodworking" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	painting: {
		verb: { sv: "måla", en: "paint" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	video: {
		verb: { sv: "göra video", en: "make a video" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 19 },
	},
	music: {
		verb: { sv: "göra musik", en: "make some music" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	tabletopRpg: {
		verb: { sv: "spela rollspel", en: "play tabletop RPGs" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
		requirements: ["fler än 1 personer"],
	},
	rpgPrep: {
		verb: { sv: "förbereda rollspel", en: "prepare for RPG sessions" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	diorama: {
		verb: { sv: "göra diorama", en: "build a diorama" },
		duration: { min: 1, max: 3 },
		hoursOfDay: { from: 8, to: 20 },
	},
	sleep: {
		verb: { sv: "gå och lägga dig", en: "go to bed" },
		duration: { min: 1, max: 9 },
		hoursOfDay: { from: 20, to: 24 + 8 },
	},
};
