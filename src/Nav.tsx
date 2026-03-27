import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import karl from "./assets/karl.png";
import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";
import WhatToDoPopup from "./components/WhatToDoPopup";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [isWhatToDoOpen, setIsWhatToDoOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="shrink-0 flex items-center">
							<NavLink
								to="../"
								className="flex items-center space-x-3 rtl:space-x-reverse group"
							>
								<img
									src={karl}
									className="h-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-700 transition-transform group-hover:scale-105"
									alt="Karl"
								/>
								<span className="self-center text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									Karl Movin
								</span>
							</NavLink>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<NavLink
								to="../packing_lists"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.packing_lists")}
							</NavLink>
							<NavLink
								to="../books"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.books")}
							</NavLink>
							<NavLink
								to="../bookmarks"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.bookmarks")}
							</NavLink>
							<NavLink
								to="../konst"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.art")}
							</NavLink>
							<NavLink
								to="../weather"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.weather")}
							</NavLink>
							<NavLink
								to="../blog"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.blog")}
							</NavLink>
							<NavLink
								to="../news"
								className={({ isActive }: { isActive: boolean }) =>
									`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
										isActive
											? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
											: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
									}`
								}
							>
								{t("nav.news")}
							</NavLink>
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
						<button
							onClick={() => setIsWhatToDoOpen(true)}
							className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							{t("nav.whatToDo")}
						</button>
						<LanguageToggle />
						<ThemeToggle />
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-gray-500"
							aria-expanded="false"
						>
							<span className="sr-only">{t("nav.openMenu")}</span>
							{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="sm:hidden">
					<div className="pt-2 pb-3 space-y-1">
						<NavLink
							to="../packing_lists"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.packing_lists")}
						</NavLink>
						<NavLink
							to="../books"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.books")}
						</NavLink>
						<NavLink
							to="../bookmarks"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.bookmarks")}
						</NavLink>
						<NavLink
							to="../konst"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.art")}
						</NavLink>
						<NavLink
							to="../weather"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.weather")}
						</NavLink>
						<NavLink
							to="../blog"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.blog")}
						</NavLink>
						<NavLink
							to="../news"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
									isActive
										? "bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white"
										: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
								}`
							}
						>
							{t("nav.news")}
						</NavLink>
						<button
							onClick={() => {
								setIsWhatToDoOpen(true);
								setIsOpen(false);
							}}
							className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white"
						>
							{t("nav.whatToDo")}
						</button>
					</div>
					<div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
						<div className="flex items-center px-4 gap-4">
							<LanguageToggle />
							<ThemeToggle />
						</div>
					</div>
				</div>
			)}

			<WhatToDoPopup
				isOpen={isWhatToDoOpen}
				onClose={() => setIsWhatToDoOpen(false)}
			/>
		</nav>
	);
}
