import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import logo from "./assets/logo.svg";
import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";
import WhatToDo from "./components/WhatToDoPopup";

type NavLeaf =
	| { type: "link"; to: string; label: string }
	| { type: "external"; href: string; label: string };

type NavGroup = {
	type: "group";
	label: string;
	children: NavLeaf[];
};

type NavItem = NavLeaf | NavGroup;

type NavSection = {
	id: string;
	label: string;
	items: NavItem[];
};

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

const dropdownItemClass =
	"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white";
const dropdownItemActiveClass =
	"block px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white";
const dropdownSubItemClass =
	"block pl-8 pr-4 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white";
const dropdownSubItemActiveClass =
	"block pl-8 pr-4 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white";

const mobileItemClass =
	"block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white";
const mobileItemActiveClass =
	"block pl-3 pr-4 py-2 border-l-4 text-base font-medium bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white";
const mobileSubItemClass =
	"block pl-6 pr-4 py-1.5 border-l-4 text-sm font-medium border-transparent text-gray-400 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white";
const mobileSubItemActiveClass =
	"block pl-6 pr-4 py-1.5 border-l-4 text-sm font-medium bg-gray-50 dark:bg-gray-800 border-gray-900 dark:border-white text-gray-900 dark:text-white";

function LeafItem({
	item,
	onClick,
	className,
	activeClassName,
}: {
	item: NavLeaf;
	onClick?: () => void;
	className: string;
	activeClassName: string;
}) {
	if (item.type === "link") {
		return (
			<NavLink
				to={`../${item.to}`}
				onClick={onClick}
				className={({ isActive }: { isActive: boolean }) =>
					isActive ? activeClassName : className
				}
			>
				{item.label}
			</NavLink>
		);
	}
	return (
		<a
			href={item.href}
			target="_blank"
			rel="noopener noreferrer"
			onClick={onClick}
			className={className}
		>
			{item.label} ↗
		</a>
	);
}

function DesktopDropdownItems({
	items,
	onClose,
	expandedGroup,
	setExpandedGroup,
}: {
	items: NavItem[];
	onClose: () => void;
	expandedGroup: string | null;
	setExpandedGroup: (id: string | null) => void;
}) {
	return items.map((item) => {
		if (item.type === "group") {
			const isExpanded = expandedGroup === item.label;
			return (
				<div key={item.label}>
					<button
						onClick={() =>
							setExpandedGroup(isExpanded ? null : item.label)
						}
						className={`${dropdownItemClass} flex items-center justify-between w-full`}
					>
						{item.label}
						<ChevronDown
							className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
						/>
					</button>
					{isExpanded &&
						item.children.map((child) => (
							<LeafItem
								key={child.type === "link" ? child.to : child.href}
								item={child}
								onClick={onClose}
								className={dropdownSubItemClass}
								activeClassName={dropdownSubItemActiveClass}
							/>
						))}
				</div>
			);
		}
		return (
			<LeafItem
				key={item.type === "link" ? item.to : item.href}
				item={item}
				onClick={onClose}
				className={dropdownItemClass}
				activeClassName={dropdownItemActiveClass}
			/>
		);
	});
}

function MobileItems({
	items,
	expandedGroup,
	setExpandedGroup,
}: {
	items: NavItem[];
	expandedGroup: string | null;
	setExpandedGroup: (id: string | null) => void;
}) {
	return items.map((item) => {
		if (item.type === "group") {
			const isExpanded = expandedGroup === item.label;
			return (
				<div key={item.label}>
					<button
						onClick={() =>
							setExpandedGroup(isExpanded ? null : item.label)
						}
						className={`${mobileItemClass} flex items-center justify-between w-full`}
					>
						{item.label}
						<ChevronDown
							className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
						/>
					</button>
					{isExpanded &&
						item.children.map((child) => (
							<LeafItem
								key={child.type === "link" ? child.to : child.href}
								item={child}
								className={mobileSubItemClass}
								activeClassName={mobileSubItemActiveClass}
							/>
						))}
				</div>
			);
		}
		return (
			<LeafItem
				key={item.type === "link" ? item.to : item.href}
				item={item}
				className={mobileItemClass}
				activeClassName={mobileItemActiveClass}
			/>
		);
	});
}

function MobileSection({
	section,
	isOpen,
	onToggle,
	expandedGroup,
	setExpandedGroup,
}: {
	section: NavSection;
	isOpen: boolean;
	onToggle: () => void;
	expandedGroup: string | null;
	setExpandedGroup: (id: string | null) => void;
}) {
	return (
		<>
			<button
				onClick={onToggle}
				className="flex items-center justify-between w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
			>
				{section.label}
				<ChevronDown
					className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>
			{isOpen && (
				<div className="pl-6 space-y-1">
					<MobileItems
						items={section.items}
						expandedGroup={expandedGroup}
						setExpandedGroup={setExpandedGroup}
					/>
				</div>
			)}
		</>
	);
}

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [openMobileSection, setOpenMobileSection] = useState<string | null>(
		null,
	);
	const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
	const [logoAnim, setLogoAnim] = useState("");
	const { t } = useTranslation();

	const logoAnimations = [
		"animate-flip",
		"animate-spin",
		"animate-wiggle",
		"animate-pulsing",
	];
	const startLogoAnim = () => {
		setLogoAnim(
			logoAnimations[Math.floor(Math.random() * logoAnimations.length)],
		);
	};
	const stopLogoAnim = () => setLogoAnim("");

	const closeDropdown = () => setOpenDropdown(null);

	const sections: NavSection[] = [
		{
			id: "tools",
			label: t("nav.tools"),
			items: [
				{ type: "link", to: "weather", label: t("nav.weather") },
				{
					type: "group",
					label: t("nav.news"),
					children: [
						{ type: "link", to: "news", label: "Text-TV" },
						{ type: "external", href: "https://ground.news", label: "Ground News" },
					],
				},
				{ type: "link", to: "packing_lists", label: t("nav.packing_lists") },
				{ type: "external", href: "https://sl-map.gunnar.se/", label: t("nav.slMap") },
				{ type: "external", href: "https://nvdbpakarta.trafikverket.se/map", label: t("nav.trafficMap") },
				{ type: "external", href: "https://minkarta.lantmateriet.se/map", label: t("nav.trafficMap") },
			],
		},
		{
			id: "information",
			label: t("nav.information"),
			items: [
				{ type: "link", to: "art", label: t("nav.art") },
				{ type: "link", to: "books", label: t("nav.books") },
				{ type: "link", to: "links", label: t("nav.links") },
				{ type: "link", to: "woodworking", label: t("nav.woodworking") },
				{ type: "link", to: "rpg", label: t("nav.rpg") },
			],
		},
	];

	const topLevelLinks: NavLeaf[] = [
		{ type: "link", to: "blog", label: t("nav.blog") },
	];

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="shrink-0 flex items-center">
							<NavLink
								to="../"
								onMouseEnter={startLogoAnim}
								onMouseLeave={stopLogoAnim}
								className="flex items-center space-x-3 rtl:space-x-reverse group perspective-[600px]"
							>
								<img
									src={logo}
									className={`h-10 w-10 origin-center transition-[filter] duration-300 ${logoAnim}`}
									alt="Globally Available Stuff"
								/>
							</NavLink>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-stretch">
							{sections.map((section) => (
								<NavDropdown
									key={section.id}
									label={section.label}
									id={section.id}
									openDropdown={openDropdown}
									setOpenDropdown={setOpenDropdown}
								>
									<DesktopDropdownItems
										items={section.items}
										onClose={closeDropdown}
										expandedGroup={expandedGroup}
										setExpandedGroup={setExpandedGroup}
									/>
								</NavDropdown>
							))}
							{topLevelLinks.map((item) => (
								<LeafItem
									key={item.type === "link" ? item.to : item.href}
									item={item}
									className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white hover:text-gray-700 dark:hover:text-white`}
									activeClassName={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium border-gray-900 dark:border-white text-gray-900 dark:text-white`}
								/>
							))}
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
						<WhatToDo />
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
						{sections.map((section) => (
							<MobileSection
								key={section.id}
								section={section}
								isOpen={openMobileSection === section.id}
								onToggle={() =>
									setOpenMobileSection(
										openMobileSection === section.id
											? null
											: section.id,
									)
								}
								expandedGroup={expandedGroup}
								setExpandedGroup={setExpandedGroup}
							/>
						))}
						{topLevelLinks.map((item) => (
							<LeafItem
								key={item.type === "link" ? item.to : item.href}
								item={item}
								className={mobileItemClass}
								activeClassName={mobileItemActiveClass}
							/>
						))}
					</div>
					<div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
						<div className="flex items-center px-4 gap-4">
							<WhatToDo />
							<LanguageToggle />
							<ThemeToggle />
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
