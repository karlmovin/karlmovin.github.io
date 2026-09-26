import { useTranslation } from "react-i18next";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
	plannedProjectKeys,
	resources,
	courses,
	woodworkers,
	inspiration,
	japanInspiration,
	type WoodworkingLink,
} from "../data/woodworking";
import { t as tl } from "../data/i18n-helpers";

// three.js is heavy, so the 3D model is split into its own chunk.
const HandPlaneAnatomy = lazy(
	() => import("../components/hand-plane/HandPlaneAnatomy"),
);

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

/** Renders its children only once scrolled near, so the 3D chunk isn't fetched up front. */
function WhenVisible({
	placeholder,
	children,
}: {
	placeholder: React.ReactNode;
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || visible) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ rootMargin: "300px" },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [visible]);

	return <div ref={ref}>{visible ? children : placeholder}</div>;
}

function resolveLabel(label: WoodworkingLink["label"], lang: string): string {
	return typeof label === "string" ? label : tl(label, lang);
}

export default function Woodworking() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-800 dark:border-gray-200 pb-1">
				{t("woodworking.title")}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				{/* Left column */}
				<div className="space-y-3">
					{/* Planned Projects */}
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							{t("woodworking.plannedProjects")}
						</h2>
						<ol className="list-decimal list-inside text-sm text-gray-800 dark:text-gray-200 space-y-0.5">
							{plannedProjectKeys.map((key) => (
								<li key={key}>{t(key)}</li>
							))}
						</ol>
					</div>

					{/* Resources */}
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							{t("woodworking.resources")}
						</h2>
						<ul className="text-sm space-y-1">
							{resources.map((r) => (
								<li key={r.url}>
									<ExtLink href={r.url}>{resolveLabel(r.label, lang)}</ExtLink>
								</li>
							))}
						</ul>
					</div>

					{/* Courses */}
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							{t("woodworking.courses")}
						</h2>
						<ul className="text-sm space-y-1">
							{courses.map((c) => (
								<li key={c.url}>
									<ExtLink href={c.url}>{resolveLabel(c.label, lang)}</ExtLink>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Middle column */}
				<div className="space-y-3">
					{/* Woodworkers */}
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							{t("woodworking.woodworkers")}
						</h2>
						<ul className="text-sm space-y-1">
							{woodworkers.map((w) => (
								<li key={w.name}>
									{w.url ? (
										<ExtLink href={w.url}>{w.name}</ExtLink>
									) : (
										<span className="text-gray-800 dark:text-gray-200">{w.name}</span>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Inspiration */}
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							{t("woodworking.inspiration")}
						</h2>
						<ul className="text-sm space-y-1">
							{inspiration.map((i) => (
								<li key={i.url}>
									<ExtLink href={i.url}>{resolveLabel(i.label, lang)}</ExtLink>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Right column */}
				<div className="space-y-3">
					{/* Japan Inspiration */}
					<div className="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
						<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
							{t("woodworking.japanInspo")}
						</h2>
						<ul className="text-sm space-y-1">
							{japanInspiration.map((j) => (
								<li key={j.url}>
									<ExtLink href={j.url}>{resolveLabel(j.label, lang)}</ExtLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* Terminology & anatomy */}
			<section className="mt-3 border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800">
				<h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-1 mb-2">
					{t("woodworking.anatomy")}
				</h2>
				<WhenVisible placeholder={<p className="h-80 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
						{t("woodworking.loading3d")}
					</p>}>
					<Suspense fallback={<p className="h-80 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
							{t("woodworking.loading3d")}
						</p>}>
						<HandPlaneAnatomy />
					</Suspense>
				</WhenVisible>
			</section>
		</div>
	);
}
