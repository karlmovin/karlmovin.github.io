import type { Translated } from "./i18n-helpers";

export type Wine = {
	name: string;
	year: number;
	rating: number;
	url: string;
	tags: string[];
	notes?: Translated;
};

export const wines: Wine[] = [
	{
		name: "Altitude by Duorum",
		year: 2024,
		rating: 4,
		url: "https://www.systembolaget.se/sok/?textQuery=altitude%20duorum",
		tags: ["pastapizza", "sällskap"],
		notes: {
			sv: "Gott sällskapsvin, passar till pasta och pizza.",
			en: "Good social wine, pairs with pasta and pizza.",
		},
	},
];
