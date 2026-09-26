import type { Translated } from "./i18n-helpers";

export type HandPlanePartId =
	| "body"
	| "frog"
	| "frogScrews"
	| "depthKnob"
	| "yLever"
	| "lateralLever"
	| "iron"
	| "chipbreaker"
	| "capIronScrew"
	| "leverCapScrew"
	| "leverCap"
	| "tote"
	| "knob";

export type HandPlanePart = {
	id: HandPlanePartId;
	name: Translated;
	description: Translated;
	/** Swatch colour in the legend, matches the 3D material. */
	color: string;
	/** Offset in cm applied when the model is fully exploded. */
	explode: [number, number, number];
};

// Modelled on a Stanley/Bailey No. 4 smoothing plane. Listed in assembly order.
export const handPlaneParts: HandPlanePart[] = [
	{
		id: "body",
		name: { sv: "Hyvelkropp och sula", en: "Body and sole" },
		description: {
			sv: "Gjutjärnskroppen. Sulan måste vara plan och har ett munstycke där järnet sticker ut.",
			en: "The cast iron body. The sole must be flat and has the mouth where the iron pokes through.",
		},
		color: "#2b2b2f",
		explode: [0, -3, 0],
	},
	{
		id: "frog",
		name: { sv: "Grodan", en: "Frog" },
		description: {
			sv: "Den vinklade bädden (45°) som järnet vilar på. Kan flyttas fram och bak för att ställa munöppningen.",
			en: "The angled bed (45°) the iron rests on. Can be moved back and forth to set the mouth opening.",
		},
		color: "#44444c",
		explode: [-1.5, 3.5, 0],
	},
	{
		id: "frogScrews",
		name: { sv: "Grodskruvar", en: "Frog screws" },
		description: {
			sv: "Två skruvar som låser grodan mot kroppen.",
			en: "Two screws that lock the frog to the body.",
		},
		color: "#9ca3af",
		explode: [1.8, 1.2, 0],
	},
	{
		id: "depthKnob",
		name: { sv: "Djupjusteringsratt", en: "Depth adjustment knob" },
		description: {
			sv: "Mässingsratt som via Y-spaken flyttar järnet upp och ner, dvs. hur tjock spånan blir.",
			en: "Brass knob that moves the iron up and down via the Y-lever, setting the depth of cut.",
		},
		color: "#c9a14a",
		explode: [-5, 2, 0],
	},
	{
		id: "yLever",
		name: { sv: "Y-spak", en: "Y-lever (yoke)" },
		description: {
			sv: "Vippar på grodan och överför rattens rörelse till spånbrytaren.",
			en: "Pivots in the frog and transfers the knob's movement to the chipbreaker.",
		},
		color: "#6b7280",
		explode: [-1.5, 3.5, -5],
	},
	{
		id: "lateralLever",
		name: { sv: "Sidojusteringsspak", en: "Lateral adjustment lever" },
		description: {
			sv: "Tippar järnet åt sidan så att eggen blir parallell med sulan.",
			en: "Tilts the iron sideways so the edge is parallel to the sole.",
		},
		color: "#a1a1aa",
		explode: [-1.5, 4.5, 5],
	},
	{
		id: "iron",
		name: { sv: "Hyveljärn", en: "Iron (blade)" },
		description: {
			sv: "Själva skäret. Slipas med facetten nedåt, mot grodan.",
			en: "The cutting blade. Sharpened with the bevel facing down, towards the frog.",
		},
		color: "#c4c8ce",
		explode: [3, 4.5, 0],
	},
	{
		id: "chipbreaker",
		name: { sv: "Spånbrytare", en: "Chipbreaker (cap iron)" },
		description: {
			sv: "Skruvas fast på järnet strax bakom eggen. Styvar upp järnet och bryter spånan för att minska rivning.",
			en: "Screwed to the iron just behind the edge. Stiffens the iron and breaks the shaving to reduce tear-out.",
		},
		color: "#8f949b",
		explode: [6, 7.5, 0],
	},
	{
		id: "capIronScrew",
		name: { sv: "Spånbrytarskruv", en: "Cap iron screw" },
		description: {
			sv: "Håller ihop järnet och spånbrytaren.",
			en: "Holds the iron and the chipbreaker together.",
		},
		color: "#b0b5bb",
		explode: [7, 10, 0],
	},
	{
		id: "leverCapScrew",
		name: { sv: "Låsbygelskruv", en: "Lever cap screw" },
		description: {
			sv: "Sitter i grodan och sticker upp genom järnets spår. Låsbygeln hakas över dess huvud.",
			en: "Threaded into the frog and sticking up through the iron's slot. The lever cap hooks over its head.",
		},
		color: "#d1d5db",
		explode: [0.5, 7, 5],
	},
	{
		id: "leverCap",
		name: { sv: "Låsbygel", en: "Lever cap" },
		description: {
			sv: "Förnicklad bygel med kamspak som pressar järnet och spånbrytaren mot grodan.",
			en: "Nickel-plated cap with a cam lever that clamps the iron and chipbreaker against the frog.",
		},
		color: "#e5e7eb",
		explode: [10, 12, 0],
	},
	{
		id: "tote",
		name: { sv: "Handtag", en: "Tote (rear handle)" },
		description: {
			sv: "Det bakre handtaget, ofta i rosenträ eller bok. Här kommer kraften ifrån.",
			en: "The rear handle, often rosewood or beech. This is where the push comes from.",
		},
		color: "#7a3a1e",
		explode: [-6, 1.5, 0],
	},
	{
		id: "knob",
		name: { sv: "Knopp", en: "Front knob" },
		description: {
			sv: "Den främre knoppen som styr och trycker ner hyvelns nos.",
			en: "The front knob that guides the plane and presses down its toe.",
		},
		color: "#8a4424",
		explode: [6, 3, 0],
	},
];
