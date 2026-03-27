export type Translated = { sv: string; en: string };

export function t(value: Translated, lang: string): string {
	return lang === "en" ? value.en : value.sv;
}
