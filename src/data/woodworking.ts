import type { Translated } from "./i18n-helpers";

export type WoodworkingLink = {
	label: string | Translated;
	url: string;
};

export type WoodworkingPerson = {
	name: string;
	url?: string;
};

export const plannedProjectKeys = [
	"woodworking.project1",
	"woodworking.project2",
	"woodworking.project3",
	"woodworking.project4",
	"woodworking.project5",
	"woodworking.project6",
];

export const resources: WoodworkingLink[] = [
	{
		label: { sv: "Snickerihandbok", en: "Carpentry Handbook" },
		url: "https://www.svenskttra.se/publikationer-start/publikationer/snickerihandbok/",
	},
	{ label: "Rubank", url: "https://www.rubank.se/" },
];

export const courses: WoodworkingLink[] = [
	{
		label: "Formlabbet",
		url: "https://formlabbet.com/kurs-i-mobelsnickeri",
	},
	{
		label: "Folkuniversitetet",
		url: "https://www.folkuniversitetet.se/kurser-utbildningar/konsthantverk/konsthantverk/mobelsnickeri/upplands-vasby/1156039/",
	},
	{
		label: { sv: "Mariabergets snickeri", en: "Mariaberget Carpentry" },
		url: "https://mariabergetssnickeri.se/kontakt",
	},
	{
		label: "Birkagården",
		url: "https://www.birkagarden.se/kurser-kvallstid.html",
	},
];

export const woodworkers: WoodworkingPerson[] = [
	{ name: "Adrian Preda", url: "https://www.adrianpreda.com/blog/tools" },
	{ name: "Paul Sellers", url: "https://paulsellers.com/" },
	{ name: "JSK Koubou", url: "https://www.youtube.com/channel/UCez62GvvsH05IunJJsRuvuQ" },
	{ name: "Yasuhiro TV", url: "https://www.youtube.com/@YASUHIROTV" },
	{ name: "Jesper Makes", url: "https://www.youtube.com/@JesperMakes" },
	{ name: "Lincoln St. Woodworks", url: "https://www.youtube.com/@Lincolnstww" },
	{ name: "Matt Estlea", url: "https://www.youtube.com/@MattEstlea" },
	{ name: "Studio No Ha", url: "https://www.youtube.com/@No.hastudio" },
	{ name: "Steve Ramsey WWFMM", url: "https://www.youtube.com/@SteveRamsey" },
];

export const inspiration: WoodworkingLink[] = [
	{
		label: { sv: "Boksnurra", en: "Revolving Bookcase" },
		url: "https://www.bukowskis.com/sv/lots/1301898-boksnurra-1900-talets-andra-halft",
	},
	{ label: "FutoNota", url: "https://futonota.se/" },
	{
		label: { sv: "Verkstad", en: "Workshop" },
		url: "https://www.pinterest.co.uk/pin/155374255872022332/",
	},
	{
		label: { sv: "Verkstad 2", en: "Workshop 2" },
		url: "https://issuu.com/viktoryak56/docs/workshop_solutions/15",
	},
];

export const japanInspiration: WoodworkingLink[] = [
	{
		label: { sv: "Världshistoria", en: "World History" },
		url: "https://www.worldhistory.org/img/c/p/1200x627/11013.jpg?v=1610671503",
	},
	{
		label: { sv: "Japansk interiör 1", en: "Japanese Interior 1" },
		url: "https://www.homeartmania.com/wp-content/uploads/2016/08/Japanese-style-interior-designs60.jpg",
	},
	{
		label: { sv: "Nihon rumsdesign", en: "Nihon Room Design" },
		url: "https://image.freepik.com/free-photo/nihon-room-design-interior-cabinet-shelf-wall-tatami-mat-floor-room-japanese-style-3d-rendering_43151-3772.jpg",
	},
	{
		label: { sv: "Japanska husdekorationer", en: "Japanese House Decorations" },
		url: "https://www.flutternyc.com/wp-content/uploads/2019/03/Japanese-House-Decorations.jpg",
	},
	{
		label: { sv: "Japansk interiör 2", en: "Japanese Interior 2" },
		url: "https://www.homeartmania.com/wp-content/uploads/2016/08/Japanese-style-interior-designs53.jpg",
	},
	{
		label: { sv: "Wara Juraku exteriör", en: "Wara Juraku Exterior" },
		url: "https://habitusoutlet.com/wp-content/uploads/2017/11/Wara-Juraku-Exterior-Feature-1000x400.jpg",
	},
];
