import type { Translated } from "./i18n-helpers";

export type ContentBlock =
	| { type: "text"; text: Translated }
	| { type: "link"; url: string; label: Translated; description?: Translated }
	| { type: "image"; src: string; alt: Translated }
	| { type: "iframe"; src: string; title: string };

export const stsBlocks: ContentBlock[] = [
	{
		type: "link",
		url: "https://zrajm.org/teckentranskription/intro.html",
		label: { sv: "Transkription", en: "Transcription" },
	},
	{
		type: "link",
		url: "https://zrajm.org/teckentranskription/lexicon.html",
		label: { sv: "Zrajm lexikon", en: "Zrajm lexicon" },
	},
	{
		type: "link",
		url: "https://teckensprakslexikon.su.se/files/handformer-oversikt.pdf",
		label: { sv: "Handformer", en: "Hand forms" },
	},
	{
		type: "link",
		url: "https://teckensprakslexikon.su.se/",
		label: { sv: "Teckenspråkslexikon", en: "Sign language lexicon" },
	},
];
