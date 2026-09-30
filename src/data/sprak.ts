import type { Translated } from "./i18n-helpers";

export type ContentBlock =
	| { type: "text"; text: Translated }
	| { type: "link"; url: string; label: Translated; description?: Translated }
	| { type: "image"; src: string; alt: Translated }
	| { type: "iframe"; src: string; title: string };

export type LanguageSubsection = {
	id: string;
	title: Translated;
	abbreviation?: string;
	blocks: ContentBlock[];
};

export const svensktTeckensprak: LanguageSubsection = {
	id: "svensktTeckensprak",
	title: { sv: "Svenskt teckenspråk", en: "Swedish Sign Language" },
	abbreviation: "Sts",
	blocks: [
		{
			type: "link",
			url: "https://zrajm.org/teckentranskription/intro.html",
			label: { sv: "Transkription", en: "Transcription" },
		},
		{
			type: "link",
			url: "https://teckensprakslexikon.su.se/files/handformer-oversikt.pdf",
			label: { sv: "Handformer", en: "Hand forms" },
		},
	],
};

export const languageSubsections: LanguageSubsection[] = [svensktTeckensprak];
