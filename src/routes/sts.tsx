import { useTranslation } from "react-i18next";
import { stsBlocks, type ContentBlock } from "../data/sts";
import { t as tl } from "../data/i18n-helpers";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
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

function blockKey(block: ContentBlock): string {
	switch (block.type) {
		case "text":
			return block.text.sv;
		case "link":
			return block.url;
		case "image":
			return block.src;
		case "iframe":
			return block.src;
	}
}

function Block({ block, lang }: { block: ContentBlock; lang: string }) {
	switch (block.type) {
		case "text":
			return (
				<p className="text-sm text-gray-800 dark:text-gray-200">
					{tl(block.text, lang)}
				</p>
			);
		case "link":
			return (
				<div className="text-sm">
					<ExtLink href={block.url}>{tl(block.label, lang)}</ExtLink>
					{block.description && (
						<p className="text-xs text-gray-600 dark:text-gray-400">
							{tl(block.description, lang)}
						</p>
					)}
				</div>
			);
		case "image":
			return (
				<img
					src={block.src}
					alt={tl(block.alt, lang)}
					className="max-w-full rounded"
				/>
			);
		case "iframe":
			return (
				<iframe
					src={block.src}
					title={block.title}
					className="w-full h-96 border-0"
				/>
			);
	}
}

export default function Sts() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-1">
				{t("sts.title")}
			</h1>
			<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 space-y-2">
				{stsBlocks.map((block) => (
					<Block key={blockKey(block)} block={block} lang={lang} />
				))}
			</div>
		</div>
	);
}
