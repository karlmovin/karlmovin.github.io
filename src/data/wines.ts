import type { Translated } from "./i18n-helpers";

export type Country = {
	flag: string;
	name: Translated;
};

export type Color = "red" | "white" | "rose";

export const colorLabels: Record<Color, Translated> = {
	red: { sv: "Rött", en: "Red" },
	white: { sv: "Vitt", en: "White" },
	rose: { sv: "Rosé", en: "Rosé" },
};

export type FoodTag = "fish" | "beef" | "lamb" | "pasta" | "pizza" | "asian";

export const foodLabels: Record<FoodTag, Translated> = {
	fish: { sv: "Fisk", en: "Fish" },
	beef: { sv: "Nöt", en: "Beef" },
	lamb: { sv: "Lamm", en: "Lamb" },
	pasta: { sv: "Pasta", en: "Pasta" },
	pizza: { sv: "Pizza", en: "Pizza" },
	asian: { sv: "Asiatiskt", en: "Asian" },
};

export type Wine = {
	name: string;
	year: number;
	rating: number;
	priceClass: number;
	url: string;
	country: Country;
	color: Color;
	grapes: string[];
	food: FoodTag[];
	ecological: boolean;
	social: boolean;
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
		color: "red",
		grapes: ["Touriga"],
		food: ["pasta", "pizza"],
		ecological: false,
		social: true,
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
		color: "white",
		grapes: ["Kerner", "Rivaner"],
		food: ["asian", "fish"],
		ecological: false,
		social: true,
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
		color: "red",
		grapes: ["Sangiovese"],
		food: ["lamb", "beef"],
		ecological: true,
		social: false,
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
		color: "red",
		grapes: ["Tinta Roriz", "Touriga Francesa", "Touriga Nacional"],
		food: ["lamb", "beef"],
		ecological: false,
		social: false,
		notes: {
			sv: "Kryddigt, passar till smakrika rätter.",
			en: "Spicy, pairs with flavorful dishes.",
		},
	},
	{
		name: "Crudo Catarratto Zibibbo",
		year: 2024,
		rating: 7,
		priceClass: 1,
		url: "https://www.systembolaget.se/produkt/vin/crudo-7411308/",
		country: countries.IT,
		color: "white",
		grapes: ["Catarratto", "Zibibbo"],
		food: ["fish"],
		ecological: false,
		social: true,
		notes: {
			sv: "Spännande vitt sällskapsvin, gott till fisk.",
			en: "Exciting white social wine, good with fish.",
		},
	},
];
