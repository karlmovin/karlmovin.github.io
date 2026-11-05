import { useTranslation } from "react-i18next";
import { t as tl } from "../data/i18n-helpers";
import { temperatures } from "../data/temperatures";

export default function Temperatures() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-1">
				{t("temperatures.title")}
			</h1>
			<p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
				{t("temperatures.description")}
			</p>
			<div className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-gray-300 dark:border-gray-600">
							<th className="text-left px-3 py-2 font-bold uppercase tracking-wider text-gray-900 dark:text-white">
								{t("temperatures.ingredient")}
							</th>
							<th className="text-left px-3 py-2 font-bold uppercase tracking-wider text-gray-900 dark:text-white">
								{t("temperatures.temperature")}
							</th>
						</tr>
					</thead>
					<tbody>
						{temperatures.map((item) => (
							<tr
								key={item.name.sv}
								className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
							>
								<td className="px-3 py-2 text-gray-800 dark:text-gray-200">
									{tl(item.name, lang)}
									{item.note && (
										<p className="text-xs text-gray-500 dark:text-gray-400">
											{tl(item.note, lang)}
										</p>
									)}
								</td>
								<td className="px-3 py-2 text-gray-800 dark:text-gray-200 whitespace-nowrap">
									{item.atLeast ? `${t("temperatures.atLeast")} ` : ""}
									{item.tempC}°C
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
