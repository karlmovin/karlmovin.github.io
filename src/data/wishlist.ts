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
		label: {
			sv: "The Lord of the Rings (english)",
			en: "The Lord of the Rings (english)",
		},
	},
];
