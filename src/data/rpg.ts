import type { Translated } from "./i18n-helpers";

export type RpgLink = {
	label: string | Translated;
	url?: string;
};

export const assets: RpgLink[] = [
	{ label: "The Trove" },
	{ label: "AnyFlip", url: "https://anyflip.com/fgoih/myrh" },
	{
		label: "RPGBot — Rune Knight",
		url: "https://rpgbot.net/dnd5/characters/classes/fighter/subclasses/rune-knight/#rune-knight-races",
	},
	{
		label: "Wizards of the Coast",
		url: "https://dnd.wizards.com/resources/remote-tips-and-tricks",
	},
	{
		label: { sv: "Bästa one-shots (5e)", en: "Best One-Shots (5e)" },
		url: "https://dungeonsanddragonsfan.com/best-dnd-one-shots-5e/",
	},
	{
		label: { sv: "Gratis one-shots (5e)", en: "Free One-Shots (5e)" },
		url: "https://geektogeekmedia.com/geekery/tabletop-gaming/best-free-dnd-one-shots-5e/",
	},
	{
		label: "Kobold Press — Where to Start",
		url: "https://koboldpress.com/where-to-start/",
	},
	{
		label: "The Alexandrian — So You Want to Be a GM",
		url: "https://thealexandrian.net/so-you-want-to-be-a-game-master",
	},
];

export const tools: RpgLink[] = [
	{ label: "Adventure Roll", url: "https://www.adventureroll.com/" },
	{ label: "DnDBeyond", url: "https://www.dndbeyond.com/sources" },
	{ label: "RPGBot", url: "https://rpgbot.net/" },
	{
		label: { sv: "DnDBeyond solospel", en: "DnDBeyond Solo Play" },
		url: "https://www.dndbeyond.com/begin/en",
	},
	{ label: "Roll20", url: "https://app.roll20.net/campaigns/search" },
	{ label: "Owlbear Rodeo", url: "https://www.owlbear.rodeo/" },
];

export const dmStuff: RpgLink[] = [
	{ label: "The Lazy DM", url: "https://anyflip.com/fsfu/nctn/" },
	{
		label: { sv: "Beskrivna besvärjelser", en: "Described Spells" },
		url: "https://drive.google.com/file/d/1FtenI5Uq1Nwqjkj5rF2LQsqEyprMr0Nr/view",
	},
	{ label: "DMs Guild", url: "https://www.dmsguild.com/" },
	{ label: "DriveThruRPG", url: "https://www.drivethrurpg.com/?site=dtrpg" },
	{
		label: { sv: "Ensidig dungeon-generator", en: "One Page Dungeon Generator" },
		url: "https://watabou.itch.io/one-page-dungeon",
	},
];

export const blogs: RpgLink[] = [
	{ label: "The Monsters Know", url: "https://www.themonstersknow.com/" },
	{
		label: "The Alexandrian — Three Clue Rule",
		url: "https://thealexandrian.net/wordpress/1118/roleplaying-games/three-clue-rule",
	},
	{
		label: "Tabletop Joab — Red Thread DM Tip",
		url: "https://tabletopjoab.com/red-thread-dm-tip/",
	},
];

export const art: RpgLink[] = [
	{
		label: "Taran Fiddler Art",
		url: "https://www.artstation.com/tfiddlerart",
	},
];

export const miniatures: RpgLink[] = [
	{ label: "Loot Studios", url: "https://lootstudios.com/login/" },
	{ label: "Lost Adventures", url: "https://lostadventures.co/account" },
	{ label: "MZ4250", url: "https://www.patreon.com/posts/48877278" },
	{
		label: "Top STLs",
		url: "https://www.stltop.com/?page=1&tag=Fantasy&order=desc",
	},
	{ label: "STL Bundles", url: "https://stlbundles.com/" },
];

export const maps: RpgLink[] = [
	{
		label: { sv: "Kartor (Wargamer)", en: "Maps (Wargamer)" },
		url: "https://www.wargamer.com/dnd/maps",
	},
];

export const alternativeRpgs: RpgLink[] = [
	{
		label: "Drakar och Demoner",
		url: "https://www.kickstarter.com/projects/1192053011/drakar-och-demoner-dragonbane/posts",
	},
	{ label: "Basic Fantasy", url: "https://www.basicfantasy.org/" },
	{ label: "Index Card RPG" },
];

export const campaignSheet =
	"https://docs.google.com/spreadsheets/d/1_4O-azqRxhLRAgU2oNtsrFyYutppRmomRg9n0XzwmY8/edit?resourcekey#gid=154058982";
