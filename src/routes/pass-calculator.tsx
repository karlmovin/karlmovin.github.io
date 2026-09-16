import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type Period = "week" | "month" | "year";

const DAYS_PER_MONTH = 30.5;
const DAYS_PER_YEAR = 365;
const WEEKS_PER_PERIOD: Record<Period, number> = {
	week: 1,
	month: DAYS_PER_MONTH / 7,
	year: DAYS_PER_YEAR / 7,
};

function formatCurrency(value: number, lang: string): string {
	const locale = lang === "en" ? "en-SE" : "sv-SE";
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: "SEK",
		maximumFractionDigits: 0,
	}).format(value);
}

function formatNumber(value: number, lang: string, digits = 1): string {
	const locale = lang === "en" ? "en-SE" : "sv-SE";
	return new Intl.NumberFormat(locale, {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits,
	}).format(value);
}

export default function PassCalculator() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	const [singleTicket, setSingleTicket] = useState<string>("42");
	const [tripsPerWeek, setTripsPerWeek] = useState<string>("5");
	const [roundTrip, setRoundTrip] = useState<boolean>(true);
	const [passCost, setPassCost] = useState<string>("1020");
	const [passPeriod, setPassPeriod] = useState<Period>("month");

	const numbers = useMemo(() => {
		const s = Number.parseFloat(singleTicket.replace(",", ".")) || 0;
		const trips = Number.parseFloat(tripsPerWeek.replace(",", ".")) || 0;
		const pass = Number.parseFloat(passCost.replace(",", ".")) || 0;
		const multiplier = roundTrip ? 2 : 1;
		const singlesPerWeek = trips * multiplier;
		const ticketCostPerWeek = s * singlesPerWeek;
		const weeksPerPeriod = WEEKS_PER_PERIOD[passPeriod];
		const ticketCostForPeriod = ticketCostPerWeek * weeksPerPeriod;
		const passCostPerWeek = weeksPerPeriod > 0 ? pass / weeksPerPeriod : 0;
		const passCostPerMonth = passCostPerWeek * WEEKS_PER_PERIOD.month;
		const passCostPerYear = passCostPerWeek * WEEKS_PER_PERIOD.year;
		const savingsForPeriod = ticketCostForPeriod - pass;
		const perSingleFare = s * multiplier;
		const breakevenSinglesPerWeek =
			perSingleFare > 0 && weeksPerPeriod > 0
				? pass / (perSingleFare * weeksPerPeriod)
				: 0;
		const breakevenSinglesPerMonth =
			breakevenSinglesPerWeek * WEEKS_PER_PERIOD.month;
		const worthIt = ticketCostForPeriod > pass && pass > 0;
		return {
			s,
			trips,
			pass,
			multiplier,
			singlesPerWeek,
			ticketCostPerWeek,
			ticketCostForPeriod,
			passCostPerWeek,
			passCostPerMonth,
			passCostPerYear,
			savingsForPeriod,
			breakevenSinglesPerWeek,
			breakevenSinglesPerMonth,
			worthIt,
			inputsValid: s > 0 && trips > 0 && pass > 0,
		};
	}, [singleTicket, tripsPerWeek, roundTrip, passCost, passPeriod]);

	const periodLabel = t(`verktyg.period.${passPeriod}`);
	const perPeriodLabel = t(`verktyg.perPeriod.${passPeriod}`);

	const fieldBase =
		"rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500";
	const inputClass = `${fieldBase} w-full`;
	const labelClass =
		"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

	return (
		<main className="container max-w-(--breakpoint-lg) mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
				{t("verktyg.seasonPass.title")}
			</h1>
			<p className="text-gray-600 dark:text-gray-400 mb-6">
				{t("verktyg.seasonPass.intro")}
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 space-y-4">
					<h2 className="text-lg font-semibold text-gray-900 dark:text-white">
						{t("verktyg.seasonPass.inputs")}
					</h2>

					<div>
						<label htmlFor="singleTicket" className={labelClass}>
							{t("verktyg.seasonPass.singleTicket")}
						</label>
						<div className="relative">
							<input
								id="singleTicket"
								type="number"
								inputMode="decimal"
								min="0"
								step="1"
								value={singleTicket}
								onChange={(e) => setSingleTicket(e.target.value)}
								className={`${inputClass} pr-12`}
							/>
							<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
								SEK
							</span>
						</div>
					</div>

					<div>
						<label htmlFor="tripsPerWeek" className={labelClass}>
							{t("verktyg.seasonPass.tripsPerWeek")}
						</label>
						<input
							id="tripsPerWeek"
							type="number"
							inputMode="decimal"
							min="0"
							step="0.5"
							value={tripsPerWeek}
							onChange={(e) => setTripsPerWeek(e.target.value)}
							className={inputClass}
						/>
						<label className="flex items-center gap-2 mt-2 text-sm text-gray-700 dark:text-gray-300">
							<input
								type="checkbox"
								checked={roundTrip}
								onChange={(e) => setRoundTrip(e.target.checked)}
								className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
							/>
							{t("verktyg.seasonPass.roundTrip")}
						</label>
					</div>

					<div>
						<label htmlFor="passCost" className={labelClass}>
							{t("verktyg.seasonPass.passCost")}
						</label>
						<div className="flex gap-2">
							<div className="relative flex-1">
								<input
									id="passCost"
									type="number"
									inputMode="decimal"
									min="0"
									step="1"
									value={passCost}
									onChange={(e) => setPassCost(e.target.value)}
									className={`${inputClass} pr-12`}
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
									SEK
								</span>
							</div>
							<select
								aria-label={t("verktyg.seasonPass.passPeriod")}
								value={passPeriod}
								onChange={(e) => setPassPeriod(e.target.value as Period)}
								className={`${fieldBase} w-32 shrink-0`}
							>
								<option value="week">{t("verktyg.period.week")}</option>
								<option value="month">{t("verktyg.period.month")}</option>
								<option value="year">{t("verktyg.period.year")}</option>
							</select>
						</div>
					</div>
				</section>

				<section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 space-y-4">
					<h2 className="text-lg font-semibold text-gray-900 dark:text-white">
						{t("verktyg.seasonPass.result")}
					</h2>

					{numbers.inputsValid ? (
						<>
							<div
								className={`rounded-md p-4 border ${
									numbers.worthIt
										? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700 text-green-900 dark:text-green-100"
										: "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100"
								}`}
							>
								<p className="font-semibold">
									{numbers.worthIt
										? t("verktyg.seasonPass.worthIt")
										: t("verktyg.seasonPass.notWorthIt")}
								</p>
								<p className="text-sm mt-1">
									{t("verktyg.seasonPass.summary", {
										ticketCost: formatCurrency(
											numbers.ticketCostForPeriod,
											lang,
										),
										passCost: formatCurrency(numbers.pass, lang),
										period: perPeriodLabel,
										diff: formatCurrency(
											Math.abs(numbers.savingsForPeriod),
											lang,
										),
										action: numbers.worthIt
											? t("verktyg.seasonPass.saving")
											: t("verktyg.seasonPass.losing"),
									})}
								</p>
							</div>

							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
									{t("verktyg.seasonPass.breakeven")}
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
									{t("verktyg.seasonPass.breakevenIntro", {
										passCost: formatCurrency(numbers.pass, lang),
										period: periodLabel,
									})}
								</p>
								<ul className="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-md">
									<BreakevenRow
										label={t("verktyg.seasonPass.perWeek")}
										breakevenValue={numbers.breakevenSinglesPerWeek}
										actualValue={numbers.singlesPerWeek}
										lang={lang}
										t={t}
										multiplier={numbers.multiplier}
									/>
									<BreakevenRow
										label={t("verktyg.seasonPass.perMonth")}
										breakevenValue={numbers.breakevenSinglesPerMonth}
										actualValue={
											numbers.singlesPerWeek * WEEKS_PER_PERIOD.month
										}
										lang={lang}
										t={t}
										multiplier={numbers.multiplier}
									/>
								</ul>
							</div>

							<div>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
									{t("verktyg.seasonPass.passCostBreakdown")}
								</h3>
								<dl className="grid grid-cols-3 gap-2 text-sm">
									<div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
										<dt className="text-gray-500 dark:text-gray-400">
											{t("verktyg.perPeriod.week")}
										</dt>
										<dd className="font-medium text-gray-900 dark:text-white">
											{formatCurrency(numbers.passCostPerWeek, lang)}
										</dd>
									</div>
									<div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
										<dt className="text-gray-500 dark:text-gray-400">
											{t("verktyg.perPeriod.month")}
										</dt>
										<dd className="font-medium text-gray-900 dark:text-white">
											{formatCurrency(numbers.passCostPerMonth, lang)}
										</dd>
									</div>
									<div className="bg-gray-50 dark:bg-gray-900 rounded p-2">
										<dt className="text-gray-500 dark:text-gray-400">
											{t("verktyg.perPeriod.year")}
										</dt>
										<dd className="font-medium text-gray-900 dark:text-white">
											{formatCurrency(numbers.passCostPerYear, lang)}
										</dd>
									</div>
								</dl>
							</div>
						</>
					) : (
						<p className="text-gray-500 dark:text-gray-400 text-sm">
							{t("verktyg.seasonPass.enterValues")}
						</p>
					)}
				</section>
			</div>

			<p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
				{t("verktyg.seasonPass.assumption", {
					days: formatNumber(DAYS_PER_MONTH, lang),
				})}
			</p>
		</main>
	);
}

function BreakevenRow({
	label,
	breakevenValue,
	actualValue,
	lang,
	t,
	multiplier,
}: {
	label: string;
	breakevenValue: number;
	actualValue: number;
	lang: string;
	t: (key: string, opts?: Record<string, unknown>) => string;
	multiplier: number;
}) {
	const above = actualValue >= breakevenValue;
	const breakevenTrips = breakevenValue / multiplier;
	const actualTrips = actualValue / multiplier;
	return (
		<li className="flex items-center justify-between p-3 gap-2">
			<div>
				<p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
				<p className="text-xs text-gray-500 dark:text-gray-400">
					{t("verktyg.seasonPass.breakevenRow", {
						trips: formatNumber(breakevenTrips, lang),
						singles: formatNumber(breakevenValue, lang),
					})}
				</p>
			</div>
			<div className="text-right">
				<p
					className={`text-sm font-semibold ${
						above
							? "text-green-700 dark:text-green-400"
							: "text-amber-700 dark:text-amber-400"
					}`}
				>
					{formatNumber(actualTrips, lang)}
				</p>
				<p className="text-xs text-gray-500 dark:text-gray-400">
					{above
						? t("verktyg.seasonPass.above")
						: t("verktyg.seasonPass.below")}
				</p>
			</div>
		</li>
	);
}
