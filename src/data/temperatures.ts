import type { Translated } from "./i18n-helpers";

export type TemperatureItem = {
	name: Translated;
	tempC: number;
	atLeast?: boolean;
	note?: Translated;
};

export const temperatures: TemperatureItem[] = [
	{
		name: { sv: "Benfri fläskkotlett", en: "Boneless pork chop" },
		tempC: 70,
	},
	{
		name: { sv: "Fläskkarré", en: "Pork loin" },
		tempC: 80,
		atLeast: true,
	},
	{
		name: { sv: "Nötfärs- och blandfärs", en: "Beef and mixed mince" },
		tempC: 70,
	},
	{
		name: { sv: "Kyckling- och kalkonbröst", en: "Chicken and turkey breast" },
		tempC: 68,
	},
	{
		name: { sv: "Kycklinglårfilé", en: "Chicken thigh fillet" },
		tempC: 72,
	},
	{
		name: { sv: "Fisk", en: "Fish" },
		tempC: 58,
		note: {
			sv: "Se dagens tillagning för eventuella undantag",
			en: "See the day's preparation for possible exceptions",
		},
	},
];
