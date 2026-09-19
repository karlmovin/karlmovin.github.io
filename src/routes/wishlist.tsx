import { useTranslation } from "react-i18next";
import { t as tl } from "../data/i18n-helpers";
import { wishlist } from "../data/wishlist";

export default function Wishlist() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-1">
				{t("wishlist.title")}
			</h1>

			<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 max-w-xl">
				<ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc list-inside">
					{wishlist.map((item) => (
						<li key={item.label.sv}>
							{item.url ? (
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-700 dark:text-blue-400 hover:underline"
								>
									{tl(item.label, lang)}
								</a>
							) : (
								tl(item.label, lang)
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
