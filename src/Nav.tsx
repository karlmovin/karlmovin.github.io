import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import logo from "./assets/logo.svg";
import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";
import WhatToDoPopup from "./components/WhatToDoPopup";

function ChevronDown({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function NavDropdown({
	label,
	children,
	openDropdown,
	setOpenDropdown,
	id,
}: {
	label: string;
	children: React.ReactNode;
	openDropdown: string | null;
	setOpenDropdown: (id: string | null) => void;
	id: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const isOpen = openDropdown === id;

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				if (isOpen) setOpenDropdown(null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen, setOpenDropdown]);

	return (
		<div className="relative inline-flex items-center" ref={ref}>
			<button
				onClick={() => setOpenDropdown(isOpen ? null : id)}
				className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white h-full"
			>
				{label}
				<ChevronDown
					className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>
			{isOpen && (
				<div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 z-50">
					<div className="py-1">{children}</div>
				</div>
			)}
		</div>
	);
}

function DropdownLink({
	to,
	onClick,
	children,
}: {
	to: string;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<NavLink
			to={to}
			onClick={onClick}
			className={({ isActive }: { isActive: boolean }) =>
				`block px-4 py-2 text-sm ${
					isActive
						? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
						: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
				}`
			}
		>
			{children}
		</NavLink>
	);
}

function DropdownButton({
	onClick,
	children,
}: {
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<button
			onClick={onClick}
			className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
		>
			{children}
		</button>
	);
}

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [isWhatToDoOpen, setIsWhatToDoOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [openMobileSection, setOpenMobileSection] = useState<string | null>(
		null,
	);
	const { t } = useTranslation();

	const closeDropdown = () => setOpenDropdown(null);

	const mobileInactiveClass =
		"border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white";
	const mobileActiveClass =
		"bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white";

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
								<img src={logo} className="h-10 w-10 transition-transform group-hover:scale-105" alt="KRL"/>
								<span className="self-center text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									GAS - globally available stuff
								</span>
							</NavLink>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-stretch">
							<NavDropdown
								label={t("nav.tools")}
								id="tools"
								openDropdown={openDropdown}
								setOpenDropdown={setOpenDropdown}
							>
								<DropdownLink
									to="../weather"
									onClick={closeDropdown}
								>
									{t("nav.weather")}
								</DropdownLink>
								<DropdownLink
									to="../news"
									onClick={closeDropdown}
								>
									{t("nav.news")}
								</DropdownLink>
								<DropdownLink
									to="../packing_lists"
									onClick={closeDropdown}
								>
									{t("nav.packing_lists")}
								</DropdownLink>
								<DropdownButton
									onClick={() => {
										setIsWhatToDoOpen(true);
										closeDropdown();
									}}
								>
									{t("nav.whatToDo")}
								</DropdownButton>
							</NavDropdown>
							<NavDropdown
								label={t("nav.information")}
								id="information"
								openDropdown={openDropdown}
								setOpenDropdown={setOpenDropdown}
							>
								<DropdownLink
									to="../art"
									onClick={closeDropdown}
								>
									{t("nav.art")}
								</DropdownLink>
								<DropdownLink
									to="../books"
									onClick={closeDropdown}
								>
									{t("nav.books")}
								</DropdownLink>
								<DropdownLink
									to="../bookmarks"
									onClick={closeDropdown}
								>
									{t("nav.bookmarks")}
								</DropdownLink>
							</NavDropdown>
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
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
						<LanguageToggle />
						<ThemeToggle />
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-gray-500"
							aria-expanded="false"
						>
							<span className="sr-only">
								{t("nav.openMenu")}
							</span>
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
						{/* Tools section */}
						<button
							onClick={() =>
								setOpenMobileSection(
									openMobileSection === "tools"
										? null
										: "tools",
								)
							}
							className="flex items-center justify-between w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
						>
							{t("nav.tools")}
							<ChevronDown
								className={`h-5 w-5 transition-transform ${openMobileSection === "tools" ? "rotate-180" : ""}`}
							/>
						</button>
						{openMobileSection === "tools" && (
							<div className="pl-6 space-y-1">
								<NavLink
									to="../weather"
									className={({ isActive }: { isActive: boolean }) =>
										`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
									}
								>
									{t("nav.weather")}
								</NavLink>
								<NavLink
									to="../news"
									className={({ isActive }: { isActive: boolean }) =>
										`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
									}
								>
									{t("nav.news")}
								</NavLink>
								<NavLink
									to="../packing_lists"
									className={({ isActive }: { isActive: boolean }) =>
										`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
									}
								>
									{t("nav.packing_lists")}
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
						)}

						{/* Information section */}
						<button
							onClick={() =>
								setOpenMobileSection(
									openMobileSection === "information"
										? null
										: "information",
								)
							}
							className="flex items-center justify-between w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
						>
							{t("nav.information")}
							<ChevronDown
								className={`h-5 w-5 transition-transform ${openMobileSection === "information" ? "rotate-180" : ""}`}
							/>
						</button>
						{openMobileSection === "information" && (
							<div className="pl-6 space-y-1">
								<NavLink
									to="../art"
									className={({ isActive }: { isActive: boolean }) =>
										`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
									}
								>
									{t("nav.art")}
								</NavLink>
								<NavLink
									to="../books"
									className={({ isActive }: { isActive: boolean }) =>
										`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
									}
								>
									{t("nav.books")}
								</NavLink>
								<NavLink
									to="../bookmarks"
									className={({ isActive }: { isActive: boolean }) =>
										`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
									}
								>
									{t("nav.bookmarks")}
								</NavLink>
							</div>
						)}

						{/* Blog */}
						<NavLink
							to="../blog"
							className={({ isActive }: { isActive: boolean }) =>
								`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive ? mobileActiveClass : mobileInactiveClass}`
							}
						>
							{t("nav.blog")}
						</NavLink>
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
