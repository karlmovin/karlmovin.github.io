import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { t as tData } from "../data/i18n-helpers";
import type { Translated } from "../data/i18n-helpers";
import { packingListData } from "../data/packing_lists";

export default function PackingLists() {
	const [selectedEntries, setSelectedEntries] = useState<Set<string>>(
		new Set(),
	);
	const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	useEffect(() => {
		const savedItems = localStorage.getItem("packlistCheckedItems");
		if (savedItems) {
			setCheckedItems(JSON.parse(savedItems));
		}
		const savedEntries = localStorage.getItem("packlistSelectedEntries");
		if (savedEntries) {
			setSelectedEntries(new Set(JSON.parse(savedEntries)));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("packlistCheckedItems", JSON.stringify(checkedItems));
	}, [checkedItems]);

	useEffect(() => {
		localStorage.setItem(
			"packlistSelectedEntries",
			JSON.stringify([...selectedEntries]),
		);
	}, [selectedEntries]);

	const handleEntryToggle = (key: string) => {
		setSelectedEntries((prev) => {
			const next = new Set(prev);
			if (next.has(key)) {
				next.delete(key);
			} else {
				next.add(key);
			}
			return next;
		});
	};

	const handleItemToggle = (key: string) => {
		setCheckedItems((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const handleResetAll = () => {
		setCheckedItems({});
	};

	const hasCheckedItems = Object.values(checkedItems).some(Boolean);

	const mergedGroups: { title: Translated; items: Translated[] }[] = (() => {
		const groupMap: Map<string, Translated[]> = new Map();
		const groupOrder: Translated[] = [];

		for (const entry of packingListData) {
			if (!selectedEntries.has(entry.title.sv)) continue;
			for (const section of entry.data) {
				if (!section.items) continue;
				const key = section.title.sv;
				if (!groupMap.has(key)) {
					groupMap.set(key, []);
					groupOrder.push(section.title);
				}
				const existing = groupMap.get(key)!;
				for (const item of section.items) {
					const normalized = item.sv.trim().toLowerCase();
					if (!existing.some((e) => e.sv.trim().toLowerCase() === normalized)) {
						existing.push(item);
					}
				}
			}
		}

		return groupOrder.map((title) => ({
			title,
			items: groupMap.get(title.sv)!,
		}));
	})();

	const seasonEntries = packingListData.filter((d) => d.group === "season");
	const activityEntries = packingListData.filter((d) => d.group === "activity");

	const CheckboxGroup = ({
		label,
		entries,
	}: {
		label: string;
		entries: typeof packingListData;
	}) => (
		<div>
			<h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
				{label}
			</h2>
			<div className="flex flex-wrap gap-3">
				{entries.map(({ title }) => (
					<label
						key={title.sv}
						className="flex items-center space-x-2 cursor-pointer select-none"
					>
						<div className="relative">
							<input
								type="checkbox"
								className="peer sr-only"
								checked={selectedEntries.has(title.sv)}
								onChange={() => handleEntryToggle(title.sv)}
							/>
							<div className="h-5 w-5 rounded-sm border-2 border-gray-300 dark:border-gray-600 peer-checked:border-gray-700 peer-checked:bg-gray-700 dark:peer-checked:border-gray-300 dark:peer-checked:bg-gray-300 transition-colors flex items-center justify-center">
								{selectedEntries.has(title.sv) && (
									<svg
										className="h-4 w-4 text-white dark:text-gray-900"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={3}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								)}
							</div>
						</div>
						<span className="text-gray-700 dark:text-gray-200">
							{tData(title, lang)}
						</span>
					</label>
				))}
			</div>
		</div>
	);

	return (
		<main className="container max-w-(--breakpoint-xl) mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
					{t("packing_lists.title")}
				</h1>
				<div className="max-w-2xl mx-auto space-y-6">
					<CheckboxGroup
						label={t("packing_lists.season")}
						entries={seasonEntries}
					/>
					<CheckboxGroup
						label={t("packing_lists.activity")}
						entries={activityEntries}
					/>
					<button
						onClick={handleResetAll}
						disabled={!hasCheckedItems}
						className="w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-700"
					>
						{t("packing_lists.resetAll")}
					</button>
				</div>
			</div>

			{mergedGroups.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{mergedGroups.map(({ title: groupTitle, items }) => (
						<div
							key={groupTitle.sv}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
						>
							<div className="p-4 border-b border-gray-200 dark:border-gray-700">
								<h3 className="text-xl font-medium text-gray-900 dark:text-white">
									{tData(groupTitle, lang)}
								</h3>
							</div>
							<div className="divide-y divide-gray-200 dark:divide-gray-700">
								{items.map((item) => (
									<div
										key={item.sv}
										className="group flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
									>
										<label className="flex items-center space-x-3 cursor-pointer w-full">
											<div className="relative">
												<input
													type="checkbox"
													className="peer sr-only"
													id={`checkbox-${item.sv}`}
													checked={checkedItems[item.sv] || false}
													onChange={() => handleItemToggle(item.sv)}
												/>
												<div className="h-5 w-5 rounded-sm border-2 border-gray-300 dark:border-gray-600 peer-checked:border-gray-700 peer-checked:bg-gray-700 dark:peer-checked:border-gray-300 dark:peer-checked:bg-gray-300 transition-colors flex items-center justify-center">
													{checkedItems[item.sv] && (
														<svg
															className="h-4 w-4 text-white dark:text-gray-900"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={3}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													)}
												</div>
											</div>
											<span className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
												{tData(item, lang)}
											</span>
										</label>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}

			{mergedGroups.length === 0 && (
				<p className="text-center text-gray-500 dark:text-gray-400 mt-8">
					{t("packing_lists.emptyState")}
				</p>
			)}
		</main>
	);
}
