import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "sv" ? "en" : "sv";
		i18n.changeLanguage(newLang);
		localStorage.setItem("language", newLang);
	};

	return (
		<button
			onClick={toggleLanguage}
			className="px-2 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
			aria-label="Toggle language"
		>
			{i18n.language === "sv" ? "EN" : "SV"}
		</button>
	);
}
