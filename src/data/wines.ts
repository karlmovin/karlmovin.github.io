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
	DE: { flag: "🇩🇪", name: { sv: "Tyskland", en: "Germany" } },
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
	{
		name: "Peacock",
		year: 2023,
		rating: 4,
		url: "https://www.systembolaget.se/produkt/vin/peacock-537201/",
		country: countries.DE,
		tags: ["vitt", "kerner", "rivaner", "asiatisk", "fisk", "sällskap", "sött"],
		notes: {
			sv: "Sött, småsurt sällskapsvin, passar till asiatisk mat och fisk.",
			en: "Sweet, slightly sour social wine, pairs with Asian food and fish.",
		},
	},
];
