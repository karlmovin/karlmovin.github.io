import type { Translated } from "./i18n-helpers";

export type Country = {
	flag: string;
	name: Translated;
};

export type Wine = {
	name: string;
	year: number;
	rating: number;
	priceClass: number;
	url: string;
	country: Country;
	tags: string[];
	notes?: Translated;
};

export const countries = {
	PT: { flag: "🇵🇹", name: { sv: "Portugal", en: "Portugal" } },
	DE: { flag: "🇩🇪", name: { sv: "Tyskland", en: "Germany" } },
	IT: { flag: "🇮🇹", name: { sv: "Italien", en: "Italy" } },
} satisfies Record<string, Country>;

export const wines: Wine[] = [
	{
		name: "Altitude by Duorum",
		year: 2024,
		rating: 8,
		priceClass: 1,
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
		priceClass: 1,
		url: "https://www.systembolaget.se/produkt/vin/peacock-537201/",
		country: countries.DE,
		tags: ["vitt", "kerner", "rivaner", "asiatisk", "fisk", "sällskap", "sött"],
		notes: {
			sv: "Sött, småsurt sällskapsvin, passar till asiatisk mat och fisk.",
			en: "Sweet, slightly sour social wine, pairs with Asian food and fish.",
		},
	},
	{
		name: "Castelgufo Chianti Riserva Organic",
		year: 2022,
		rating: 7,
		priceClass: 2,
		url: "https://www.systembolaget.se/produkt/vin/castelgufo-7238901/",
		country: countries.IT,
		tags: ["rött", "sangiovese", "chianti", "ekologiskt", "lamm", "nöt"],
		notes: {
			sv: "Mellantungt, passar till tyngre smaker.",
			en: "Medium-bodied, pairs with heavier flavors.",
		},
	},
	{
		name: "Mural",
		year: 2024,
		rating: 6,
		priceClass: 2,
		url: "https://www.systembolaget.se/produkt/vin/mural-9414001/",
		country: countries.PT,
		tags: [
			"rött",
			"tinta roriz",
			"touriga francesa",
			"touriga nacional",
			"douro",
			"lamm",
			"nöt",
		],
		notes: {
			sv: "Kryddigt, passar till smakrika rätter.",
			en: "Spicy, pairs with flavorful dishes.",
		},
	},
];
