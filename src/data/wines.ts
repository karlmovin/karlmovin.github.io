import type { Translated } from "./i18n-helpers";

export type Country = {
	flag: string;
	name: Translated;
};

export type Wine = {
	name: string;
	year: number;
	rating: number;
	url: string;
	country: Country;
	tags: string[];
	notes?: Translated;
};

export const countries = {
	PT: { flag: "🇵🇹", name: { sv: "Portugal", en: "Portugal" } },
} satisfies Record<string, Country>;

export const wines: Wine[] = [
	{
		name: "Altitude by Duorum",
		year: 2024,
		rating: 8,
		url: "https://www.systembolaget.se/produkt/vin/altitude-by-duorum-255501/",
		country: countries.PT,
		tags: ["rött", "touriga", "pasta", "pizza", "sällskap"],
		notes: {
			sv: "Gott sällskapsvin, passar till pasta och pizza.",
			en: "Good social wine, pairs with pasta and pizza.",
		},
	},
];
