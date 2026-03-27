import { useState } from "react";
import { useTranslation } from "react-i18next";
import { artists, konstperioder } from "../data/konst.json";

function Accordion({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<main className="relative mb-3">
			<h6 className="mb-0">
				<button
					onClick={handleClick}
					className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 rounded-t-1 group text-dark-500"
				>
					<span>{title}</span>
					<span className={`material-symbols-outlined ${open && "rotate-180"}`}>
						arrow_drop_down
					</span>
				</button>
			</h6>
			<div hidden={!open} className=" transition-all duration-300 ease-in-out">
				<div className="p-4 text-sm leading-normal text-blue-gray-500/80">
					{children}
				</div>
			</div>
		</main>
	);
}

export default function Konst() {
	const { t } = useTranslation();
	return (
		<section className="container max-w-(--breakpoint-xl)">
			<p className="text-2xl pb-2">{t("konst.periods")}</p>
			<div className="w-lg">
				<ul className="flex flex-col w-full">
					{Object.entries(konstperioder).map(
						([period, { years, description, url, images }]) => (
							<a
								key={period}
								href={url}
								target="_blank"
								className="flex items-center gap-4 pb-1 w-max"
								rel="noopener"
							>
								<img
									src={images[0]} // Make it random
									alt={period}
									className="inline-block relative object-cover object-center w-28 h-28"
								/>
								<div>
									<h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
										{period}
									</h6>
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
										{years}
									</p>
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
										{description}
									</p>
									<div className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
										{url}
									</div>
								</div>
							</a>
						),
					)}
				</ul>
			</div>
			<Accordion title={t("konst.konstriktning")}>
				{t("konst.konstriktningText")}
			</Accordion>
			<Accordion title={t("konst.konststilar")}>
				{t("konst.konststilarText")}
			</Accordion>
			<Accordion title={t("konst.konstskola")}>
				{t("konst.konstskolaText")}
			</Accordion>
			<p className="text-2xl">{t("konst.artists")}</p>
			{Object.entries(artists).map(([artist, { url, image }]) => (
				<a
					key={artist}
					href={url}
					target="_blank"
					className="flex items-center gap-4 pb-1 w-max"
					rel="noopener"
				>
					<img
						src={image}
						alt="avatar"
						className="inline-block relative object-cover object-center rounded-full! w-12 h-12"
					/>
					<div>
						<h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
							{artist}
						</h6>
						<div className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
							{url}
						</div>
					</div>
				</a>
			))}
		</section>
	);
}
