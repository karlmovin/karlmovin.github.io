import type { Translated } from "./i18n-helpers";

export type WishlistItem = {
	label: Translated;
	url?: string;
};

export const wishlist: WishlistItem[] = [
	{
		label: { sv: "Läderförkläde", en: "Leather apron" },
	},
	{
		label: { sv: "Symaskin", en: "Sewing machine" },
	},
	{
		label: { sv: "Snygg jacka, ex nubuck", en: "Nice jacket, e.g. nubuck" },
	},
	{
		label: {
			sv: "Snygga byxor, typ canvas och/eller jeans",
			en: "Nice pants, e.g. canvas and/or jeans",
		},
	},
	{
		label: {
			sv: "Snygg ryggsäck, men måste vara skön att bära också",
			en: "Nice backpack, but must be comfortable to wear too",
		},
	},
];
