import type { Translated } from "./i18n-helpers";

export type Recipe = {
	title: string;
	url: string;
	tags: string[];
	description?: Translated;
};

export const recipes: Recipe[] = [
	{
		title: "Kalljästa Frallor",
		url: "https://www.alexanderlagarmat.se/wprm_print/2168#",
		tags: ["frukost", "bröd"],
	},
];
