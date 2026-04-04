import { useTranslation } from "react-i18next";
import {
	assets,
	tools,
	dmStuff,
	blogs,
	art,
	miniatures,
	maps,
	alternativeRpgs,
	campaignSheet,
	type RpgLink,
} from "../data/rpg";
import { t as tl } from "../data/i18n-helpers";

function resolveLabel(label: RpgLink["label"], lang: string): string {
	return typeof label === "string" ? label : tl(label, lang);
}

function ExtLink({
	href,
	children,
}: { href: string; children: React.ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-700 dark:text-blue-400 hover:underline break-all"
		>
			{children}
		</a>
	);
}

function Section({
	title,
	items,
	lang,
}: { title: string; items: RpgLink[]; lang: string }) {
	return (
		<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
			<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
				{title}
			</h2>
			<ul className="text-sm space-y-1">
				{items.map((item) => (
					<li key={item.url ?? resolveLabel(item.label, lang)}>
						{item.url ? (
							<ExtLink href={item.url}>
								{resolveLabel(item.label, lang)}
							</ExtLink>
						) : (
							<span className="text-gray-800 dark:text-gray-200">
								{resolveLabel(item.label, lang)}
							</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Rpg() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
			<div className="flex items-baseline justify-between mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-1">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
					{t("rpg.title")}
				</h1>
				<ExtLink href={campaignSheet}>
					{t("rpg.campaignSheet")} ↗
				</ExtLink>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				{/* Left column */}
				<div className="space-y-3">
					<Section title={t("rpg.assets")} items={assets} lang={lang} />
					<Section title={t("rpg.tools")} items={tools} lang={lang} />
				</div>

				{/* Middle column */}
				<div className="space-y-3">
					<Section title={t("rpg.dmStuff")} items={dmStuff} lang={lang} />
					<Section title={t("rpg.blogs")} items={blogs} lang={lang} />
					<Section title={t("rpg.art")} items={art} lang={lang} />
				</div>

				{/* Right column */}
				<div className="space-y-3">
					<Section
						title={t("rpg.miniatures")}
						items={miniatures}
						lang={lang}
					/>
					<Section title={t("rpg.maps")} items={maps} lang={lang} />
					<Section
						title={t("rpg.alternativeRpgs")}
						items={alternativeRpgs}
						lang={lang}
					/>
				</div>
			</div>
		</div>
	);
}
