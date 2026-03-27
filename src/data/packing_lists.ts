import type { Translated } from "./i18n-helpers";

export type PackingListGroup = "season" | "activity";

export const packingListData: {
	title: Translated;
	group: PackingListGroup;
	extra?: string;
	data: { title: Translated; subtitle?: string; items?: Translated[] }[];
}[] = [
	{
		title: { sv: "Vinter", en: "Winter" },
		group: "season",
		data: [
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{ sv: "Mössa/Balaklava", en: "Beanie/Balaclava" },
					{ sv: "Buff/Halsduk", en: "Buff/Scarf" },
					{ sv: "Tumvantar", en: "Mittens" },
					{ sv: "Fingervantar", en: "Gloves" },
					{
						sv: "Underställ överkropp (ull/syntet)",
						en: "Base layer top (wool/synthetic)",
					},
					{
						sv: "Underställ underkropp (ull/syntet)",
						en: "Base layer bottom (wool/synthetic)",
					},
					{ sv: "Ullstrumpor", en: "Wool socks" },
					{ sv: "Varm mellanlagerströja", en: "Warm mid-layer sweater" },
					{ sv: "Dunjacka/varm jacka", en: "Down jacket/warm jacket" },
					{
						sv: "Skaljacka med vindskydd",
						en: "Shell jacket with wind protection",
					},
					{
						sv: "Skalbyxor med vindskydd",
						en: "Shell pants with wind protection",
					},
					{ sv: "Vattentäta skor/stövlar", en: "Waterproof shoes/boots" },
				],
			},
			{
				title: { sv: "Bra att ha", en: "Good to have" },
				items: [
					{
						sv: "Pannlampa (mörknar tidigt)",
						en: "Headlamp (gets dark early)",
					},
					{ sv: "Värmepåsar för händer/fötter", en: "Hand/foot warmers" },
					{ sv: "Solglasögon (sol och snö)", en: "Sunglasses (sun and snow)" },
					{
						sv: "Solkräm (UV-strålning i snö)",
						en: "Sunscreen (UV radiation in snow)",
					},
					{ sv: "Termos med varm dryck", en: "Thermos with hot drink" },
					{ sv: "Snökedja för skor", en: "Snow chains for shoes" },
				],
			},
		],
	},
	{
		title: { sv: "Sommar", en: "Summer" },
		group: "season",
		data: [
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{ sv: "Shorts", en: "Shorts" },
					{ sv: "T-shirt", en: "T-shirt" },
					{ sv: "Lätta byxor", en: "Light pants" },
					{ sv: "Baddräkt/badbyxor", en: "Swimsuit/swim trunks" },
					{ sv: "Sandaler", en: "Sandals" },
					{ sv: "Lätta skor", en: "Light shoes" },
					{ sv: "Keps/solhatt", en: "Cap/sun hat" },
				],
			},
			{
				title: { sv: "Solskydd", en: "Sun protection" },
				items: [
					{ sv: "Solkräm", en: "Sunscreen" },
					{ sv: "Solglasögon", en: "Sunglasses" },
					{ sv: "Läppbalsam med SPF", en: "Lip balm with SPF" },
				],
			},
			{
				title: { sv: "Bra att ha", en: "Good to have" },
				items: [
					{ sv: "Myggmedel", en: "Insect repellent" },
					{ sv: "Vattenflaska", en: "Water bottle" },
					{ sv: "Fläkt/solparasoll", en: "Fan/parasol" },
				],
			},
		],
	},
	{
		title: { sv: "Vår/Höst", en: "Spring/Autumn" },
		group: "season",
		data: [
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{
						sv: "Regnkläder (jacka och byxor)",
						en: "Rain gear (jacket and pants)",
					},
					{ sv: "Lätt mellanlager", en: "Light mid-layer" },
					{ sv: "Lager-på-lager klädsel", en: "Layered clothing" },
					{ sv: "Vattenresistenta skor", en: "Water-resistant shoes" },
					{ sv: "Vantar (tunna)", en: "Gloves (thin)" },
					{ sv: "Mössa (tunn)", en: "Beanie (thin)" },
				],
			},
			{
				title: { sv: "Bra att ha", en: "Good to have" },
				items: [
					{ sv: "Paraply", en: "Umbrella" },
					{ sv: "Vattenflaska", en: "Water bottle" },
				],
			},
		],
	},
	{
		title: { sv: "Resa", en: "Travel" },
		group: "activity",
		data: [
			{
				title: { sv: "Necessär", en: "Toiletry bag" },
				items: [
					{ sv: "Tandborste", en: "Toothbrush" },
					{ sv: "Tandkräm", en: "Toothpaste" },
					{ sv: "Tvål", en: "Soap" },
					{ sv: "Schampo", en: "Shampoo" },
					{ sv: "Balsam", en: "Conditioner" },
					{ sv: "Rakhyvel", en: "Razor" },
					{ sv: "Deodorant", en: "Deodorant" },
					{ sv: "Hårborste", en: "Hairbrush" },
					{ sv: "Hårband", en: "Hair tie" },
					{ sv: "Smink", en: "Makeup" },
					{ sv: "Solkräm", en: "Sunscreen" },
					{ sv: "Läppbalsam", en: "Lip balm" },
					{ sv: "Tamponger", en: "Tampons" },
					{ sv: "Toalettpapper", en: "Toilet paper" },
				],
			},
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{ sv: "Underkläder", en: "Underwear" },
					{ sv: "Strumpor", en: "Socks" },
					{ sv: "Byxor", en: "Pants" },
					{ sv: "Tröjor", en: "Sweaters" },
					{ sv: "Kjol", en: "Skirt" },
					{ sv: "Klänning", en: "Dress" },
					{ sv: "Shorts", en: "Shorts" },
					{ sv: "T-shirt", en: "T-shirt" },
					{ sv: "Skjorta", en: "Shirt" },
					{ sv: "Kostym", en: "Suit" },
					{ sv: "Kavaj", en: "Blazer" },
				],
			},
			{
				title: { sv: "Underhållning", en: "Entertainment" },
				items: [
					{ sv: "Bok", en: "Book" },
					{ sv: "Tidning", en: "Magazine" },
					{ sv: "Laddare", en: "Charger" },
					{ sv: "Headset", en: "Headset" },
					{ sv: "Dator", en: "Laptop" },
					{ sv: "Surfplatta", en: "Tablet" },
					{ sv: "Kamera", en: "Camera" },
					{ sv: "GoPro", en: "GoPro" },
					{ sv: "Kikare", en: "Binoculars" },
					{ sv: "Kortlek", en: "Deck of cards" },
					{ sv: "Resespel", en: "Travel games" },
					{ sv: "Högtalare", en: "Speaker" },
				],
			},
		],
	},
	{
		title: { sv: "Utflykt med bebis", en: "Trip with baby" },
		group: "activity",
		data: [
			{
				title: {
					sv: "På flyget / i bilen / på tåget",
					en: "On the plane / in the car / on the train",
				},
				items: [
					{
						sv: "Skötväskan (skötunderlägg, blöjor, tvättdukar osv)",
						en: "Diaper bag (changing mat, diapers, wipes etc)",
					},
					{ sv: "Ombyte", en: "Change of clothes" },
					{ sv: "Våtservetter", en: "Wet wipes" },
					{ sv: "Smoothies, gröt och mat", en: "Smoothies, porridge and food" },
					{
						sv: "Snacks (gärna sådant bebisen kan pilla länge med)",
						en: "Snacks (preferably things baby can fiddle with)",
					},
					{ sv: "Flaska för vatten", en: "Water bottle" },
					{ sv: "Plastpåse för skräp", en: "Plastic bag for trash" },
					{ sv: "Surfplatta", en: "Tablet" },
					{ sv: "Leksaker och underhållning", en: "Toys and entertainment" },
				],
			},
			{
				title: { sv: "Vagn och bilstol", en: "Stroller and car seat" },
				items: [
					{
						sv: "Resesulky eller vanlig vagn",
						en: "Travel stroller or regular stroller",
					},
					{
						sv: "Myggnät och regnskydd till vagnen",
						en: "Mosquito net and rain cover for stroller",
					},
					{
						sv: "Tunn filt eller solparasoll till vagnen som extra solskydd",
						en: "Thin blanket or parasol for extra sun protection",
					},
					{ sv: "Bärsele eller bärsjal", en: "Baby carrier or wrap" },
					{ sv: "Babyskydd eller bilstol", en: "Infant car seat or car seat" },
					{
						sv: "Transportväska till vagn och bilstol",
						en: "Travel bag for stroller and car seat",
					},
				],
			},
			{
				title: { sv: "Äta", en: "Eating" },
				items: [
					{
						sv: "Grötpåsar, Barnmatsburkar och smoothies",
						en: "Porridge pouches, baby food jars and smoothies",
					},
					{
						sv: "Nappflaska, haklapp och bestick",
						en: "Baby bottle, bib and cutlery",
					},
					{
						sv: "Välling och grötpulver",
						en: "Baby formula and porridge powder",
					},
					{ sv: "Bröstmjölksersättning", en: "Infant formula" },
					{
						sv: "Termos eller vattenkokare (går ofta att låna på hotellet)",
						en: "Thermos or kettle (often available at the hotel)",
					},
					{ sv: "Barnstol", en: "High chair" },
				],
			},
			{
				title: { sv: "Sol och bad", en: "Sun and swim" },
				items: [
					{ sv: "Solskyddskläder", en: "Sun protection clothing" },
					{ sv: "Solhatt", en: "Sun hat" },
					{ sv: "Badblöjor", en: "Swim diapers" },
					{
						sv: "UV-tält (ofta ganska smidiga att packa ner)",
						en: "UV tent (often quite easy to pack)",
					},
					{ sv: "Solkräm för barn", en: "Sunscreen for children" },
					{ sv: "Badskor", en: "Water shoes" },
				],
			},
			{
				title: { sv: "Sova", en: "Sleeping" },
				items: [
					{
						sv: "Resesäng (men enklare att boka på hotellet)",
						en: "Travel crib (but easier to book at the hotel)",
					},
					{ sv: "Babyvakt", en: "Baby monitor" },
					{ sv: "Egen kudde och filt", en: "Own pillow and blanket" },
					{ sv: "Högtalare", en: "Speaker" },
					{ sv: "Vattenflaska", en: "Water bottle" },
				],
			},
			{
				title: { sv: "Reseapotek till bebis", en: "Travel pharmacy for baby" },
				items: [
					{ sv: "Alvedon eller Ipren för barn", en: "Children's pain relief" },
					{ sv: "Näsdroppar / nässug", en: "Nasal drops / nasal aspirator" },
					{ sv: "Kräm för bett", en: "Bite cream" },
					{ sv: "Kräm för blöjeksem", en: "Diaper rash cream" },
					{ sv: "D-droppar", en: "Vitamin D drops" },
					{ sv: "Plåster och sårtvätt", en: "Band-aids and wound cleanser" },
					{ sv: "Vätskeersättning", en: "Oral rehydration salts" },
					{ sv: "Febertermometer", en: "Fever thermometer" },
					{
						sv: "Myggmedel (men läs på om vilka som passar för barn)",
						en: "Insect repellent (check which ones are safe for children)",
					},
					{ sv: "Handdesinfektion", en: "Hand sanitizer" },
				],
			},
		],
	},
	{
		title: { sv: "Skridsko", en: "Ice skating" },
		group: "activity",
		data: [
			{
				title: { sv: "Utrustning", en: "Equipment" },
				items: [
					{ sv: "Skridskor och pjäxor", en: "Ice skates and boots" },
					{ sv: "Isdubbar", en: "Ice picks" },
					{ sv: "Ispikar", en: "Ice spikes" },
					{
						sv: "Ryggsäck, grenrem, kastlina, visselpipa",
						en: "Backpack, crotch strap, throw line, whistle",
					},
					{
						sv: "Skydd (Huvud, Knä, Armbåge)",
						en: "Protection (Head, Knee, Elbow)",
					},
				],
			},
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{ sv: "Mössa/Balaklava, Buff", en: "Beanie/Balaclava, Buff" },
					{
						sv: "Tumvantar/fingervantar, ej för tunna",
						en: "Mittens/gloves, not too thin",
					},
					{
						sv: "Underställ i ull, 1-2 lager beroende på väder (överkropp, underkropp)",
						en: "Wool base layer, 1-2 layers depending on weather (upper body, lower body)",
					},
					{
						sv: "Tunn skaljacka med vindskydd som andas",
						en: "Thin shell jacket with breathable wind protection",
					},
					{
						sv: "Tunna skalbyxor med vindskydd som andas",
						en: "Thin shell pants with breathable wind protection",
					},
					{ sv: "Ullstrumpor", en: "Wool socks" },
					{
						sv: "Dunjacka (i ryggsäcken under skrinnande)",
						en: "Down jacket (in backpack while skating)",
					},
				],
			},
			{
				title: { sv: "Bra att ha", en: "Good to have" },
				items: [
					{ sv: "Sittunderlag", en: "Seat pad" },
					{ sv: "Karta över området", en: "Map of the area" },
					{ sv: "Kompass", en: "Compass" },
					{ sv: "Solglasögon vid sol", en: "Sunglasses in sun" },
					{ sv: "Lampa (för mörkeråkning)", en: "Light (for dark skating)" },
					{ sv: "Överlevnadskit", en: "Survival kit" },
					{ sv: "Handduk", en: "Towel" },
					{ sv: "Liten slip", en: "Small sharpener" },
					{
						sv: "Lina m magnet stark nog att hålla skridsko",
						en: "Line with magnet strong enough to hold skate",
					},
					{ sv: "GoPro", en: "GoPro" },
					{ sv: "Sportklocka", en: "Sports watch" },
					{ sv: "Pulsband", en: "Heart rate monitor" },
				],
			},
			{
				title: { sv: "Inuti ryggsäcken", en: "Inside the backpack" },
				items: [
					{
						sv: "Matsäck (1 macka per mil vid normala förhållanden om längre än 2h skrinnande)",
						en: "Packed lunch (1 sandwich per 10km in normal conditions if skating more than 2h)",
					},
					{
						sv: "Energi on the go, e.g. jägarblandning, saft",
						en: "Energy on the go, e.g. trail mix, juice",
					},
					{
						sv: "Vätska (minst 1-2 liter)",
						en: "Fluids (at least 1-2 liters)",
					},
					{ sv: "Värmande dryck i termos", en: "Hot drink in thermos" },
					{ sv: "Underkläder", en: "Underwear" },
					{ sv: "Strumpor", en: "Socks" },
					{
						sv: "Våtsockor/plastpåsar för blöta pjäxor",
						en: "Wet socks/plastic bags for wet boots",
					},
					{ sv: "Tröjor", en: "Sweaters" },
					{ sv: "Vattentät jacka", en: "Waterproof jacket" },
					{
						sv: "Plastsäck om ombytesjacka ej vattentät",
						en: "Plastic bag if change jacket isn't waterproof",
					},
					{ sv: "Byxor", en: "Pants" },
					{
						sv: "Vattentäta påsar att förvara kläderna i",
						en: "Waterproof bags to store clothes in",
					},
				],
			},
		],
	},
	{
		title: {
			sv: "Längdskidåkning (klassisk/skate)",
			en: "Cross-country skiing (classic/skate)",
		},
		group: "activity",
		data: [
			{
				title: { sv: "Utrustning", en: "Equipment" },
				items: [
					{
						sv: "Skidor och pjäxor (för klassisk och för skate)",
						en: "Skis and boots (for classic and skate)",
					},
					{ sv: "Stavar", en: "Poles" },
				],
			},
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{ sv: "Mössa/Balaklava, Buff", en: "Beanie/Balaclava, Buff" },
					{
						sv: "Tumvantar/fingervantar, tunna och mellantjocka för kallt väder",
						en: "Mittens/gloves, thin and medium-thick for cold weather",
					},
					{
						sv: "Underställ i ull, 1-2 lager beroende på väder (överkropp, underkropp)",
						en: "Wool base layer, 1-2 layers depending on weather (upper body, lower body)",
					},
					{
						sv: "Tunn skaljacka med vindskydd som andas",
						en: "Thin shell jacket with breathable wind protection",
					},
					{
						sv: "Tunna skalbyxor med vindskydd som andas",
						en: "Thin shell pants with breathable wind protection",
					},
					{ sv: "Ullstrumpor", en: "Wool socks" },
					{ sv: "Dunjacka/dunväst", en: "Down jacket/down vest" },
				],
			},
			{
				title: { sv: "Bra att ha", en: "Good to have" },
				items: [
					{
						sv: "Ombyte till efter (tröja, strumpor, skor, mössa, handskar)",
						en: "Change of clothes for after (sweater, socks, shoes, beanie, gloves)",
					},
					{
						sv: "Saft, dryck, fika att ta med och/eller till efter",
						en: "Juice, drinks, snacks to bring and/or for after",
					},
					{
						sv: "Behållare för dryck: vätskebälte, vätskeryggsäck",
						en: "Drink container: hydration belt, hydration pack",
					},
					{ sv: "Solglasögon vid sol", en: "Sunglasses in sun" },
					{ sv: "Lampa (för mörkeråkning)", en: "Light (for dark skiing)" },
					{ sv: "GoPro", en: "GoPro" },
					{ sv: "Sportklocka", en: "Sports watch" },
					{ sv: "Pulsband", en: "Heart rate monitor" },
					{ sv: "Dubbskor", en: "Studded shoes" },
				],
			},
		],
	},
	{
		title: { sv: "Utförsåkning", en: "Downhill skiing" },
		group: "activity",
		data: [
			{
				title: { sv: "Utrustning", en: "Equipment" },
				items: [
					{ sv: "Skidor och pjäxor", en: "Skis and boots" },
					{ sv: "Stavar", en: "Poles" },
					{ sv: "Skidhandskar", en: "Ski gloves" },
					{ sv: "Skidhjälm", en: "Ski helmet" },
					{ sv: "Ryggskydd", en: "Back protector" },
					{ sv: "Goggles", en: "Goggles" },
				],
			},
			{
				title: { sv: "Kläder", en: "Clothing" },
				items: [
					{
						sv: "Skidunderställ (2 par räcker för de flesta)",
						en: "Ski base layers (2 pairs is enough for most)",
					},
					{ sv: "Skidkläder", en: "Ski clothes" },
					{ sv: "Skidstrumpor", en: "Ski socks" },
					{ sv: "Mössa/pannband/balaklava", en: "Beanie/headband/balaclava" },
					{ sv: "Handskar", en: "Gloves" },
					{ sv: "Halsduk/buff", en: "Scarf/buff" },
					{ sv: "2 par byxor", en: "2 pairs of pants" },
					{ sv: "3-4 överdelar", en: "3-4 tops" },
					{ sv: "1-3 tjockare tröjor", en: "1-3 thicker sweaters" },
					{ sv: "Underkläder", en: "Underwear" },
					{
						sv: "Vinterskor och kanske ett lättare par du kan ha inne på hotellet",
						en: "Winter shoes and maybe a lighter pair for the hotel",
					},
				],
			},
			{
				title: { sv: "Bra att ha", en: "Good to have" },
				items: [
					{ sv: "Solglasögon", en: "Sunglasses" },
					{ sv: "Underkläder", en: "Underwear" },
					{
						sv: "Toalettartiklar (glöm inte viktiga mediciner)",
						en: "Toiletries (don't forget important medications)",
					},
					{ sv: "Solkräm", en: "Sunscreen" },
					{ sv: "Laddare", en: "Charger" },
				],
			},
		],
	},
	{
		title: { sv: "Turskidor", en: "Ski touring" },
		group: "activity",
		data: [
			{
				title: { sv: "Utrustning", en: "Equipment" },
				items: [
					{
						sv: "Skidor, hudar, pjäxor och stavar",
						en: "Skis, skins, boots and poles",
					},
					{
						sv: "Ryggsäck, spade, sändare, söksond",
						en: "Backpack, shovel, transceiver, probe",
					},
					{ sv: "Skydd (Huvud, rygg)", en: "Protection (Head, back)" },
				],
			},
			{
				title: { sv: "Kläder", en: "Clothing" },
				subtitle:
					"Basen i din packning är densamma på dagsturen som på den längre utfärden. Däremot tillkommer utrustning för övernattning, samt ombyten om du blir borta i flera dagar. Under vintern blir det extra viktigt att klä sig enligt lager på lager-principen. Kom även ihåg att du lätt fryser när du stannar till. Därför behövs förstärkningsplagg, såsom dunjacka, under pauserna. På långturer är det viktigt att ha med en bra jacka som tål både vind och väta. ",
				items: [
					{
						sv: "Ull-/syntetunderställ närmast kroppen.",
						en: "Wool/synthetic base layer closest to the body.",
					},
					{ sv: "Tröja.", en: "Sweater." },
					{ sv: "Strumpor och sockor i ull.", en: "Socks in wool." },
					{
						sv: "Bra skalplagg (vindjacka/vintäta byxor) att ha när du rör dig.",
						en: "Good shell garments (wind jacket/windproof pants) to wear while moving.",
					},
					{
						sv: "Varm dun-/syntetjacka (förstärkningsplagg) för pauser.",
						en: "Warm down/synthetic jacket (reinforcement garment) for breaks.",
					},
					{ sv: "Damasker.", en: "Gaiters." },
					{
						sv: "Extra mössa, buff och vantar. Helst tjocka tumvantar.",
						en: "Extra beanie, buff and mittens. Preferably thick mittens.",
					},
					{
						sv: "Extra underställ och strumpor. Men ta inte med för mycket, du kan tvätta om det behövs.",
						en: "Extra base layers and socks. But don't bring too much, you can wash if needed.",
					},
				],
			},
			{
				title: { sv: "Annat", en: "Other" },
				subtitle:
					"Du som ska på flerdagstur i snön kan dra packningen på en pulka, så avlastar du ryggen. I fjällvärlden slipper du bära med dig mat om du i förväg ser efter vilka av STFs fjällstugor som har butik. Glöm inte att läsa på om fjällsäkerhet innan du ger dig av.",
				items: [
					{
						sv: "Solglasögon/skidglasögon, solskyddsfaktor.",
						en: "Sunglasses/ski goggles, sunscreen.",
					},
					{
						sv: "Mat och dryck. Vattenflaska, termos, kåsa och spork.",
						en: "Food and drink. Water bottle, thermos, mug and spork.",
					},
					{
						sv: "Plastpåsar för skräp (så du kan ta med det ned från fjället och närmsta sophantering).",
						en: "Plastic bags for trash (so you can bring it down from the mountain to the nearest waste facility).",
					},
					{
						sv: "Tvål som fungerar för tvätt, städ och disk.",
						en: "Soap that works for laundry, cleaning and dishes.",
					},
					{ sv: "Ligg-/sittunderlag.", en: "Sleeping/sitting pad." },
					{
						sv: "Första hjälpen-kit, inklusive första förband, elastisk binda och skavsårsplåster.",
						en: "First aid kit, including first aid bandage, elastic bandage and blister plasters.",
					},
					{ sv: "Toalettpapper.", en: "Toilet paper." },
					{
						sv: "Karta och kompass (och ev. GPS)",
						en: "Map and compass (and possibly GPS)",
					},
					{
						sv: "Fickkniv, tändstickor/tändstål.",
						en: "Pocket knife, matches/fire steel.",
					},
					{ sv: "Ficklampa, pannlampa.", en: "Flashlight, headlamp." },
					{
						sv: "Mobiltelefon och powerbank. (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
						en: "Mobile phone and power bank. (Note that there isn't always mobile coverage in the mountains)",
					},
					{
						sv: "Vindsäck. De går att hyra på många fjällstationer.",
						en: "Wind sack. They can be rented at many mountain stations.",
					},
					{
						sv: "Lite reparationsutrustning, exempelvis silvertejp och remmar.",
						en: "Some repair equipment, such as duct tape and straps.",
					},
				],
			},
			{
				title: { sv: "Turskidor med barn", en: "Ski touring with children" },
				subtitle:
					"Barn behöver ungefär samma utrustning som vuxna, men ofta lite fler ombyten. Vattentäta ytterplagg är naturligtvis A och O på packlistan. Vintern ställer även krav på ordentliga skor, extra vantar och strumpor för barnen. Det är klokt att klä dem i merinoull eller syntet närmast kroppen. Ull är varmast, merinoull är mjukast och syntet torkar snabbast. Av dessa skäl är bomull är värt att undvika. \n\n Du gör rätt i att ta med några lätta leksaker, så blir turen roligare om tålamodet tryter. Torkad frukt eller nötter snabbt ger ny energi. Tänk slutligen på att packa ner solskydd, eftersom solen tar även när det är molnigt.",
			},
			{
				title: { sv: "Tältning med turskidor", en: "Camping with ski touring" },
				subtitle:
					"Det är bra att tälta i närheten av en fjällstuga eller fjällstation de första gångerna. Då kan du värma dig innan du kryper in i tältet eller bivacken för natten. STF har vinterfjällkurser för dig som vill lära dig att vintertälta. För en tälttur på vintern behöver din ryggsäck rymma ca 70–90 liter eller att du använder pulka. Komplettera packlistan med följande:",
				items: [
					{
						sv: "Tält anpassat för vinterförhållanden.",
						en: "Tent adapted for winter conditions.",
					},
					{
						sv: "Sovsäck och eventuellt dubbla liggunderlag om det är mycket kallt.",
						en: "Sleeping bag and possibly double sleeping pads if very cold.",
					},
					{
						sv: "Värmebyxor eller värmekjol.",
						en: "Insulated pants or insulated skirt.",
					},
					{
						sv: "Stormkök, bränsle, tändstickor/tändstål och diskverktyg. Bensinkök är att föredra.",
						en: "Camp stove, fuel, matches/fire steel and dish tools. Gas stove is preferred.",
					},
					{
						sv: "Matvaror, såvida du inte handlar i fjällbutik.",
						en: "Food, unless you shop at a mountain store.",
					},
					{
						sv: "Nål, tråd och silvertejp så att du kan reparera ryggsäck, tält eller kläder.",
						en: "Needle, thread and duct tape so you can repair backpack, tent or clothes.",
					},
					{
						sv: "Grävpåsar(Vadarpåsar/vadarstövel) till skor och handskar.",
						en: "Vapor barrier bags for shoes and gloves.",
					},
				],
			},
		],
	},
	{
		title: { sv: "Vandring", en: "Hiking" },
		group: "activity",
		extra:
			"Tänk på att packningen kan variera beroende på årstid och väder. Listor tagna från STF: https://www.svenskaturistforeningen.se/guider-tips/packlistor/packlista-fjallvandring/",
		data: [
			{
				title: {
					sv: "Vandring i skog och mark",
					en: "Hiking in forests and fields",
				},
				subtitle:
					"Börja med att fundera på vad du vill få ut av din utfärd. Vandring kan antingen innebära en ordentlig utflykt, med korvgrillning och trevliga naturupplevelser, eller ett fullfjädrat flerdagsäventyr. De kräver ofta samma grundutrustning, med tillägg för extra mat och kläder. Du behöver även tänka på var du ska övernatta. Vill du tälta eller kanske sova på STFs boenden? Det gör stor skillnad för vad du ska ha i ryggsäcken. \n\n Under flerdagsvandringar behöver du undersöka dina möjligheter att hitta färskvatten. Är du osäker på tillgången till vatten kan du överväga att ta med reningstabletter eller vattenfilter. De går att köpa i vanliga friluftsbutiker.",
				items: [
					{
						sv: "Ryggsäck som får plats med allt. 50-65 L är lagom storlek.",
						en: "Backpack that fits everything. 50-65L is a good size.",
					},
					{
						sv: "Tunn skaljacka med en varm tröja under, snarare än en tjock jacka.",
						en: "Thin shell jacket with a warm sweater underneath, rather than a thick jacket.",
					},
					{
						sv: "Strumpor och underställ i syntet/ull. Ull är varmare, men syntet torkar snabbare.",
						en: "Socks and base layers in synthetic/wool. Wool is warmer, but synthetic dries faster.",
					},
					{
						sv: "Regnkläder. De skyddar även mot vind.",
						en: "Rain gear. They also protect against wind.",
					},
					{
						sv: "Väl ingångna vandringsskor eller trailskor, valda efter årstid och terräng.",
						en: "Well broken-in hiking boots or trail shoes, chosen for season and terrain.",
					},
					{
						sv: "Lätta, luftiga långbyxor istället för shorts. De skyddar mot mygg, rispor och skrapsår.",
						en: "Light, airy long pants instead of shorts. They protect against mosquitoes, scratches and scrapes.",
					},
					{
						sv: "Vantar och mössa för kalla kvällar.",
						en: "Gloves and beanie for cold evenings.",
					},
					{
						sv: "Extra underställ och strumpor. Men ta med så lite som möjligt och tvätta.",
						en: "Extra base layers and socks. But bring as little as possible and wash.",
					},
					{
						sv: "Solkräm, solstift, solglasögon, keps/hatt. Solen tar även vid molnigt väder.",
						en: "Sunscreen, sun stick, sunglasses, cap/hat. The sun is strong even in cloudy weather.",
					},
					{ sv: "Myggmedel.", en: "Insect repellent." },
					{
						sv: "Matvaror och dryck. Gärna termos, kåsa och spork.",
						en: "Food and drink. Preferably thermos, mug and spork.",
					},
					{ sv: "Plastpåse för skräp.", en: "Plastic bag for trash." },
					{ sv: "Sitt- eller liggunderlag.", en: "Sitting or sleeping pad." },
					{ sv: "Karta och kompass.", en: "Map and compass." },
					{
						sv: "Mobiltelefon och powerbank. (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
						en: "Mobile phone and power bank. (Note that there isn't always mobile coverage in the mountains)",
					},
					{
						sv: "Toalettpapper + liten trädgårdsspade för att gräva en grop.",
						en: "Toilet paper + small garden trowel to dig a hole.",
					},
					{
						sv: "Fickkniv, tändstickor/tändstål.",
						en: "Pocket knife, matches/fire steel.",
					},
					{
						sv: "Reseapotek med första förband, inklusive skavsårsplåster.",
						en: "Travel pharmacy with first aid, including blister plasters.",
					},
					{ sv: "Ficklampa och visselpipa.", en: "Flashlight and whistle." },
					{
						sv: "Eventuellt kikare och kamera.",
						en: "Possibly binoculars and camera.",
					},
				],
			},
			{
				title: { sv: "Tältning", en: "Camping" },
				subtitle: "Komplettera med följande:",
				items: [
					{ sv: "Ryggsäck 60-80 L", en: "Backpack 60-80L" },
					{
						sv: "Tält, eller tarp (lättviktspresenning som spänns upp med pinnar eller mellan träd)",
						en: "Tent, or tarp (lightweight tarpaulin stretched with pegs or between trees)",
					},
					{
						sv: "Sovsäck och liggunderlag",
						en: "Sleeping bag and sleeping pad",
					},
					{
						sv: "Stormkök, bränsle + tändstickor/tändstål",
						en: "Camp stove, fuel + matches/fire steel",
					},
					{ sv: "Ficklampa/pannlampa", en: "Flashlight/headlamp" },
					{ sv: "Matvaror", en: "Food" },
					{
						sv: "Nål, tråd och silvertejp så att du kan reparera ryggsäck, tält eller kläder",
						en: "Needle, thread and duct tape so you can repair backpack, tent or clothes",
					},
				],
			},
			{
				title: { sv: "Vandring med barn", en: "Hiking with children" },
				subtitle:
					"I det stora hela behöver barn samma saker som vuxna på tur. Kläder ska kunna anpassas efter väder, enligt lager på lager-principen. Det gäller även barnkläder. Unga upptäckare behöver ofta några extra ombyten, samt något spel eller en leksak som kan muntra upp. Ett annat knep är att redan på morgonen förbereda familjens lunch, så är ni redo när barnen blir hungriga. Ta gärna med torkad frukt eller nötter som ger snabb energi. \n\n Det är roligt för barn att känna sig delaktiga, exempelvis genom att de själva får bära en liten ryggsäck, välja rastplats och titta på kartan. Under vandringen kanske ni även kan kika på Allemansrättsskolan tillsammans?",
			},
			{
				title: { sv: "Vandring i fjällen", en: "Hiking in the mountains" },
				subtitle:
					"För fjällturer över dagen behöver du bara ha med dig det nödvändigaste. Den största skillnaden vid flerdagsvandringar är att du behöver fler ombyten, samt utrustning anpassad efter var du ska övernatta. Du kan komplettera packningen för boende i tält eller stuga, enligt listorna nedan. I övrigt är det alltid klokt att packa kläder i ull eller funktionsmaterial. Läs gärna mer om lager på lager-principen om du undrar vilka kläder som är viktigast. \n\n När du går mellan STFs fjällstugor finns ofta butiker där du kan handla mat och dryck. Det betyder att du slipper bära livsmedel i ryggsäcken.",
				items: [
					{
						sv: "Underkläder i ull/syntet att ha närmast kroppen",
						en: "Wool/synthetic underwear to wear closest to the body",
					},
					{
						sv: "Skaljacka som även är vattentät",
						en: "Shell jacket that is also waterproof",
					},
					{
						sv: "Väl ingångna vandringsskor",
						en: "Well broken-in hiking boots",
					},
					{ sv: "Extra sockor", en: "Extra socks" },
					{
						sv: "Använd dubbla lager för att undvika skav: tunn ullstrumpa närmast foten och ett par strumpor över",
						en: "Use double layers to avoid chafing: thin wool sock closest to the foot and a pair of socks over",
					},
					{
						sv: "Dunjacka/varm tröja, mössa, vantar",
						en: "Down jacket/warm sweater, beanie, mittens",
					},
					{
						sv: "Rena och bekväma kläder att byta om till, samt extra underställ",
						en: "Clean and comfortable clothes to change into, plus extra base layers",
					},
					{
						sv: "Tvål som fungerar för tvätt, städ och disk",
						en: "Soap that works for laundry, cleaning and dishes",
					},
					{ sv: "Mat och dryck", en: "Food and drink" },
					{ sv: "Termos, kåsa och spork", en: "Thermos, mug and spork" },
					{
						sv: "På vissa sträckningar har du tillgång till fjällbutiker",
						en: "On some routes you have access to mountain stores",
					},
					{ sv: "Plastpåse för skräp", en: "Plastic bag for trash" },
					{
						sv: "Sitt- eller liggunderlag för pausen",
						en: "Sitting or sleeping pad for breaks",
					},
					{
						sv: "Reseapotek och första förband, inklusive skavsårsplåster",
						en: "Travel pharmacy and first aid, including blister plasters",
					},
					{
						sv: "Solglasögon, solkräm och keps",
						en: "Sunglasses, sunscreen and cap",
					},
					{ sv: "Myggmedel", en: "Insect repellent" },
					{ sv: "Fjällkarta och kompass", en: "Mountain map and compass" },
					{
						sv: "Mobiltelefon och powerbank (Tänk på att det inte alltid finns mobiltäckning i fjällvärlden)",
						en: "Mobile phone and power bank (Note that there isn't always mobile coverage in the mountains)",
					},
					{
						sv: "Fickkniv, tändstickor/tändstål",
						en: "Pocket knife, matches/fire steel",
					},
					{
						sv: "Toalettpapper + liten trädgårdsspade för att gräva en grop",
						en: "Toilet paper + small garden trowel to dig a hole",
					},
					{ sv: "Ficklampa, pannlampa", en: "Flashlight, headlamp" },
					{
						sv: "Eventuellt kamera och kikare",
						en: "Possibly camera and binoculars",
					},
				],
			},
			{
				title: { sv: "Tältning i fjällen", en: "Camping in the mountains" },
				subtitle: "Komplettera med följande:",
				items: [
					{ sv: "60-80 L ryggsäck", en: "60-80L backpack" },
					{
						sv: "Tält, sovsäck och liggunderlag",
						en: "Tent, sleeping bag and sleeping pad",
					},
					{ sv: "Matvaror", en: "Food" },
					{
						sv: "Stormkök, bränsle, tändstickor/tändstål och diskverktyg",
						en: "Camp stove, fuel, matches/fire steel and dish tools",
					},
					{ sv: "Ficklampa och pannlampa", en: "Flashlight and headlamp" },
					{ sv: "Större sjukvårdskit", en: "Larger first aid kit" },
					{
						sv: "Nål, tråd och silvertejp så att du kan reparera ryggsäck, tält eller kläder",
						en: "Needle, thread and duct tape so you can repair backpack, tent or clothes",
					},
				],
			},
			{
				title: {
					sv: "Komplettering för vandring mellan fjällstugor",
					en: "Supplement for hiking between mountain huts",
				},
				subtitle: "Komplettera med följande:",
				items: [
					{ sv: "Ryggsäck 50-65 L", en: "Backpack 50-65L" },
					{
						sv: "Reselakan eller lätt sovsäck",
						en: "Travel sheet or light sleeping bag",
					},
					{ sv: "Handduk", en: "Towel" },
					{ sv: "Ficklampa och pannlampa", en: "Flashlight and headlamp" },
					{
						sv: "Ombyte med rena och bekväma plagg",
						en: "Change with clean and comfortable clothes",
					},
					{ sv: "Inomhustofflor", en: "Indoor slippers" },
					{
						sv: "Kontanter/kontokort och ditt medlemskort i STF",
						en: "Cash/debit card and your STF membership card",
					},
				],
			},
		],
	},
	{
		title: { sv: "Segling", en: "Sailing" },
		group: "activity",
		data: [
			{
				title: { sv: "I packningen", en: "In the packing" },
				items: [
					{
						sv: "Skor/stövlar med bra grepp som inte färgar av",
						en: "Shoes/boots with good grip that don't stain",
					},
					{
						sv: "Seglarställ (byxor, jacka)",
						en: "Sailing gear (pants, jacket)",
					},
					{
						sv: "Keps/solhatt med senilsnöre/rem",
						en: "Cap/sun hat with retainer strap",
					},
					{ sv: "Seglarhandskar", en: "Sailing gloves" },
					{ sv: "Ombyte", en: "Change of clothes" },
					{
						sv: "Oömma kläder, sådana som tål att slitas",
						en: "Rugged clothes that can take a beating",
					},
					{
						sv: "Varma kläder, mössa, vantar",
						en: "Warm clothes, beanie, gloves",
					},
					{ sv: "Flytväst", en: "Life jacket" },
					{
						sv: "Solglasögon och solskydd",
						en: "Sunglasses and sun protection",
					},
					{
						sv: "Gymnastikskor, gärna fler par.",
						en: "Sneakers, preferably multiple pairs.",
					},
					{ sv: "Badkläder", en: "Swimwear" },
					{ sv: "Badhandduk", en: "Beach towel" },
					{ sv: "Myggstift/spray", en: "Mosquito stick/spray" },
					{
						sv: "Tandborste, tandkräm, hårborste, tvål, schampo osv",
						en: "Toothbrush, toothpaste, hairbrush, soap, shampoo etc",
					},
					{ sv: "Vattenflaska", en: "Water bottle" },
				],
			},
		],
	},
	{
		title: { sv: "Klättring", en: "Climbing" },
		group: "activity",
		data: [
			{
				title: { sv: "Utrustning", en: "Equipment" },
				items: [
					{ sv: "Klätterskor", en: "Climbing shoes" },
					{ sv: "Hjälm", en: "Helmet" },
					{ sv: "Klättersele", en: "Climbing harness" },
					{ sv: "Karbiner", en: "Carabiners" },
					{ sv: "Repslingor", en: "Slings" },
					{ sv: "Rep", en: "Rope" },
					{ sv: "Kalk", en: "Chalk" },
					{ sv: "Kalkpåse", en: "Chalk bag" },
				],
			},
		],
	},
	{
		title: { sv: "Cykling", en: "Cycling" },
		group: "activity",
		data: [
			{
				title: { sv: "Utrustning", en: "Equipment" },
				items: [
					{ sv: "Cykel", en: "Bicycle" },
					{ sv: "Hjälm", en: "Helmet" },
					{ sv: "Reservslang", en: "Spare tube" },
					{ sv: "Pump", en: "Pump" },
					{ sv: "Verktyg", en: "Tools" },
					{ sv: "Däckavtagare", en: "Tire levers" },
					{ sv: "Extra kledja", en: "Extra chain link" },
					{ sv: "Kedjefett", en: "Chain lube" },
					{ sv: "Kedjelås", en: "Chain lock" },
				],
			},
		],
	},
];
