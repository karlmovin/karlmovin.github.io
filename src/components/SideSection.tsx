import { useTranslation } from "react-i18next";
import { t as tData } from "../data/i18n-helpers";
import { notes } from "../data/notes";

function Notes() {
	const { t, i18n } = useTranslation();
	return (
		<section>
			{notes?.length ? (
				<>
					<p className="text-2xl">{t("sideSection.notes")}</p>
					<ol>
						{notes.map((note, index) => (
							<li key={index}>{tData(note, i18n.language)}</li>
						))}
					</ol>
				</>
			) : null}
		</section>
	);
}

export default function SideSection() {
	return (
		<aside className="hidden w-72 p-4 md:block">
			<Notes />
		</aside>
	);
}
