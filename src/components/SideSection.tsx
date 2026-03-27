import { useTranslation } from "react-i18next";
import { notes } from "../data/notes";

function Notes() {
	const { t } = useTranslation();
	return (
		<section>
			{notes?.length ? (
				<>
					<p className="text-2xl">{t("sideSection.notes")}</p>
					<ol>
						{notes.map((note, index) => (
							<li key={index}>{note}</li>
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
