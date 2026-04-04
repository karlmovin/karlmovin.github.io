import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, useRouteError, useNavigate, useLocation } from "react-router";

export default function ErrorPage() {
	const error = useRouteError();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const [countdown, setCountdown] = useState(5);

	const is404 = isRouteErrorResponse(error) && error.status === 404;

	useEffect(() => {
		if (!is404) return;
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					navigate("/", { replace: true });
					return 0;
				}
				return prev - 1;
			});
		}, 1000);
		return () => clearInterval(timer);
	}, [is404, navigate]);

	if (!is404) {
		const message =
			error instanceof Error
				? error.message
				: typeof error === "string"
					? error
					: "Unknown error";
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
				<div className="text-center">
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{message}
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
			<div className="text-center">
				<p className="text-sm font-mono text-gray-400 dark:text-gray-500 mb-2">
					{location.pathname}
				</p>
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
					{t("error.pageNotFound")}
				</h1>
				<p className="text-gray-500 dark:text-gray-400 mb-6">
					{t("error.redirecting", { seconds: countdown })}
				</p>
				<button
					onClick={() => navigate("/", { replace: true })}
					className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
				>
					{t("error.home")}
				</button>
			</div>
		</div>
	);
}
