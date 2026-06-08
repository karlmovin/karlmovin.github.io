import type { Translated } from "./i18n-helpers";

type ArtPeriod = {
	name: Translated;
	years: string;
	description: Translated;
	artists: string[];
	url: string;
	images: string[];
};

export const artists: Record<string, { url: string; image: string }> = {
	"Louis Wain": {
		url: "https://en.wikipedia.org/wiki/Louis_Wain",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/f/fd/Louis_Wain_-_Lascelles.png",
	},
	"Karl Mårtens": {
		url: "https://www.konstochfolk.se/2015/08/19/karl-martens/",
		image:
			"https://www.konstochfolk.se/wp-content/uploads/2020/04/Karl-Ma%CC%8Artens-800x867.jpg",
	},
	"Theodor Kittelsen": {
		url: "https://en.wikipedia.org/wiki/Theodor_Kittelsen",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/c/ce/Kittelsen_av_krohg_1892.jpg",
	},
	"Eric H Olson": {
		url: "https://sv.wikipedia.org/wiki/Eric_H._Olson",
		image:
			"https://sis.modernamuseet.se/internal/media/dispatcher/12538/preview",
	},
	"Waldemar von Kozak": {
		url: "https://www.artstation.com/waldemarvonkozak",
		image:
			"https://cdnb.artstation.com/p/users/avatars/000/675/235/large/cc50ac9e26466f2eb71a4c677e6792b9.jpg?1520807145",
	},
	"Elhuervo (Niklas Åkerblad)": {
		url: "https://elhuervo.tumblr.com/",
		image:
			"https://static.tumblr.com/e812d26a629f7cbe9ece3d294ff752ce/jyntbvr/z5Anzi9x3/tumblr_static_8zjlkkr64xs0wso0oc4w808oo.jpg",
	},
	"Vincenzo Riccardi": {
		url: "https://www.artstation.com/vinartwork",
		image:
			"https://cdnb.artstation.com/p/users/avatars/000/733/101/large/20d2ce237e6e033c5f5e2d822710c1c3.jpg?1670611202",
	},
	"Hydro74 (Joshua M. Smith)": {
		url: "https://hydro74.com/",
		image: "https://hydro74.com/IMG_2024/LOGO_2.jpg",
	},
	"Eyvind Earle": {
		url: "https://en.wikipedia.org/wiki/Eyvind_Earle",
		image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Eyvind_Earle.jpg",
	},
};

export const artPeriods: ArtPeriod[] = [
	{
		name: { sv: "Medeltiden", en: "Medieval" },
		years: "500-1500",
		description: {
			sv: "En period präglad av religiös konst och kyrkliga motiv.",
			en: "A period characterized by religious art and ecclesiastical motifs.",
		},
		artists: [],
		url: "https://en.wikipedia.org/wiki/Medieval_art",
		images: ["/konstbilder/medeltid.jpeg"],
	},
	{
		name: { sv: "Renässansen", en: "Renaissance" },
		years: "1400-1600",
		description: {
			sv: "En period av återupplivad intresse för antikens konst och humanism.",
			en: "A period of renewed interest in ancient art and humanism.",
		},
		artists: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
		url: "https://en.wikipedia.org/wiki/Renaissance_art",
		images: ["/konstbilder/renässans.jpg"],
	},
	{
		name: { sv: "Manierismen", en: "Mannerism" },
		years: "1520-1600",
		description: {
			sv: "Överdrivna former, tillgjorda teatraliska rörelser och oklara perspektiv.",
			en: "Exaggerated forms, theatrical movements and unclear perspectives.",
		},
		artists: ["El Greco", "Parmigianino", "Giuseppe Arcimboldo"],
		url: "https://en.wikipedia.org/wiki/Mannerism",
		images: ["/konstbilder/manierism.jpg"],
	},
	{
		name: { sv: "Barocken", en: "Baroque" },
		years: "1600-1750",
		description: {
			sv: "En period av dramatisk och dekorativ konst med religiösa och världsliga motiv.",
			en: "A period of dramatic and decorative art with religious and secular motifs.",
		},
		artists: ["Caravaggio", "Peter Paul Rubens", "Rembrandt"],
		url: "https://en.wikipedia.org/wiki/Baroque_art",
		images: ["/konstbilder/barock.jpg"],
	},
	{
		name: { sv: "Rokoko", en: "Rococo" },
		years: "1700-1800",
		description: {
			sv: "En period av elegant och dekorativ konst med pastellfärger och romantiska motiv.",
			en: "A period of elegant and decorative art with pastel colors and romantic motifs.",
		},
		artists: [
			"Jean-Antoine Watteau",
			"François Boucher",
			"Jean-Honoré Fragonard",
		],
		url: "https://en.wikipedia.org/wiki/Rococo",
		images: ["/konstbilder/rokoko.jpg"],
	},
	{
		name: { sv: "Nyklassicismen", en: "Neoclassicism" },
		years: "1750-1850",
		description: {
			sv: "En period av återgång till antikens ideal och enkelhet i konsten.",
			en: "A period of return to ancient ideals and simplicity in art.",
		},
		artists: [
			"Jacques-Louis David",
			"Antonio Canova",
			"Jean-Auguste-Dominique Ingres",
		],
		url: "https://en.wikipedia.org/wiki/Neoclassicism",
		images: ["/konstbilder/klassicism.jpg"],
	},
	{
		name: { sv: "Romantiken", en: "Romanticism" },
		years: "1800-1850",
		description: {
			sv: "En period av känslomässig och dramatisk konst med fokus på naturen och det övernaturliga.",
			en: "A period of emotional and dramatic art focused on nature and the supernatural.",
		},
		artists: ["Caspar David Friedrich", "Eugène Delacroix", "William Blake"],
		url: "https://en.wikipedia.org/wiki/Romanticism",
		images: ["/konstbilder/romantik.jpg"],
	},
	{
		name: { sv: "Realismen", en: "Realism" },
		years: "1840-1900",
		description: {
			sv: "En period av konst som avbildar verkligheten och vardagslivet.",
			en: "A period of art that depicts reality and everyday life.",
		},
		artists: ["Gustave Courbet", "Édouard Manet", "Jean-François Millet"],
		url: "https://en.wikipedia.org/wiki/Realism_(arts)",
		images: ["/konstbilder/realism.jpg"],
	},
	{
		name: { sv: "Impressionismen", en: "Impressionism" },
		years: "1860-1900",
		description: {
			sv: "En period av konst som fångar ögonblickets intryck och ljusets skiftningar.",
			en: "A period of art that captures the impression of the moment and shifts in light.",
		},
		artists: ["Claude Monet", "Pierre-Auguste Renoir", "Edgar Degas"],
		url: "https://en.wikipedia.org/wiki/Impressionism",
		images: ["/konstbilder/impressionism.jpg"],
	},
	{
		name: { sv: "Symbolismen", en: "Symbolism" },
		years: "1880-1910",
		description: {
			sv: "En period av konst som uttrycker symboliska och drömlika teman.",
			en: "A period of art that expresses symbolic and dreamlike themes.",
		},
		artists: ["Gustav Klimt", "Edvard Munch", "Odilon Redon"],
		url: "https://en.wikipedia.org/wiki/Symbolism_(arts)",
		images: ["/konstbilder/symbolism.jpg"],
	},
	{
		name: { sv: "Jugend / Art Nouveau", en: "Art Nouveau" },
		years: "1890-1910",
		description: {
			sv: "En period av konst med organiska former och dekorativa mönster.",
			en: "A period of art with organic forms and decorative patterns.",
		},
		artists: ["Alphonse Mucha", "Antoni Gaudí", "René Lalique"],
		url: "https://en.wikipedia.org/wiki/Art_Nouveau",
		images: ["/konstbilder/jugend.jpg"],
	},
	{
		name: { sv: "Pointilism", en: "Pointillism" },
		years: "1886-1906",
		description: {
			sv: "En period av konst som använder små prickar för att skapa bilder.",
			en: "A period of art that uses small dots to create images.",
		},
		artists: ["Georges Seurat", "Paul Signac", "Camille Pissarro"],
		url: "https://en.wikipedia.org/wiki/Pointillism",
		images: ["/konstbilder/pointilism.jpg"],
	},
	{
		name: { sv: "Modernism", en: "Modernism" },
		years: "1890-1940",
		description: {
			sv: "En period av konst som bryter med traditionella normer och utforskar nya uttrycksformer.",
			en: "A period of art that breaks with traditional norms and explores new forms of expression.",
		},
		artists: ["Pablo Picasso", "Henri Matisse", "Wassily Kandinsky"],
		url: "https://en.wikipedia.org/wiki/Modernism",
		images: ["/konstbilder/modernism.jpg"],
	},
	{
		name: { sv: "Fauvismen", en: "Fauvism" },
		years: "1900-1910",
		description: {
			sv: "En period av konst med starka och expressiva färger.",
			en: "A period of art with strong and expressive colors.",
		},
		artists: ["Henri Matisse", "André Derain", "Raoul Dufy"],
		url: "https://en.wikipedia.org/wiki/Fauvism",
		images: ["/konstbilder/fauvism.jpg"],
	},
	{
		name: { sv: "Kubismen", en: "Cubism" },
		years: "1907-1920",
		description: {
			sv: "En period av konst som bryter ner motiv i geometriska former och olika perspektiv.",
			en: "A period of art that breaks down subjects into geometric shapes and different perspectives.",
		},
		artists: ["Pablo Picasso", "Georges Braque", "Juan Gris"],
		url: "https://en.wikipedia.org/wiki/Cubism",
		images: ["/konstbilder/kubism.jpg"],
	},
	{
		name: { sv: "Expressionism", en: "Expressionism" },
		years: "1905-1925",
		description: {
			sv: "En period av konst som uttrycker starka känslor och inre upplevelser.",
			en: "A period of art that expresses strong emotions and inner experiences.",
		},
		artists: ["Edvard Munch", "Egon Schiele", "Ernst Ludwig Kirchner"],
		url: "https://en.wikipedia.org/wiki/Expressionism",
		images: ["/konstbilder/expressionism.jpg"],
	},
	{
		name: { sv: "Futurismen / Vorticism", en: "Futurism / Vorticism" },
		years: "1909-1914",
		description: {
			sv: "En period av konst som hyllar teknologi, rörelse och framtidstro.",
			en: "A period of art that celebrates technology, movement and belief in the future.",
		},
		artists: ["Umberto Boccioni", "Giacomo Balla", "Wyndham Lewis"],
		url: "https://en.wikipedia.org/wiki/Futurism",
		images: ["/konstbilder/futurism.webp"],
	},
	{
		name: { sv: "Suprematism", en: "Suprematism" },
		years: "1913-1920",
		description: {
			sv: "En period av konst som fokuserar på geometriska former och abstraktion.",
			en: "A period of art that focuses on geometric shapes and abstraction.",
		},
		artists: ["Kazimir Malevich", "El Lissitzky", "Natalia Goncharova"],
		url: "https://en.wikipedia.org/wiki/Suprematism",
		images: ["/konstbilder/suprematism.jpg"],
	},
	{
		name: { sv: "Dadaismen", en: "Dadaism" },
		years: "1916-1924",
		description: {
			sv: "En period av konst som ifrågasätter etablerade normer och konventioner.",
			en: "A period of art that questions established norms and conventions.",
		},
		artists: ["Marcel Duchamp", "Hannah Höch", "Man Ray"],
		url: "https://en.wikipedia.org/wiki/Dada",
		images: ["/konstbilder/dadaism.jpg"],
	},
	{
		name: { sv: "Art Deco", en: "Art Deco" },
		years: "1920-1939",
		description: {
			sv: "En period av konst med eleganta former, geometriska mönster och lyxiga material.",
			en: "A period of art with elegant forms, geometric patterns and luxurious materials.",
		},
		artists: ["Tamara de Lempicka", "Erté", "Cassandre"],
		url: "https://en.wikipedia.org/wiki/Art_Deco",
		images: ["/konstbilder/art-deco.jpg"],
	},
	{
		name: { sv: "Surrealismen", en: "Surrealism" },
		years: "1920-1950",
		description: {
			sv: "En period av konst som utforskar det undermedvetna och drömlika världar.",
			en: "A period of art that explores the subconscious and dreamlike worlds.",
		},
		artists: ["Salvador Dalí", "René Magritte", "Max Ernst"],
		url: "https://en.wikipedia.org/wiki/Surrealism",
		images: ["/konstbilder/surrealism.webp"],
	},
	{
		name: { sv: "Abstrakt konst", en: "Abstract Art" },
		years: "1910-",
		description: {
			sv: "En period av konst som inte föreställer något konkret utan fokuserar på färg, form och linje.",
			en: "A period of art that doesn't depict anything concrete but focuses on color, shape and line.",
		},
		artists: ["Wassily Kandinsky", "Piet Mondrian", "Kazimir Malevich"],
		url: "https://en.wikipedia.org/wiki/Abstract_art",
		images: ["/konstbilder/abstrakt.jpg"],
	},
	{
		name: { sv: "Popkonst", en: "Pop Art" },
		years: "1950-",
		description: {
			sv: "En period av konst som använder populärkulturella motiv och tekniker.",
			en: "A period of art that uses popular culture motifs and techniques.",
		},
		artists: ["Andy Warhol", "Roy Lichtenstein", "David Hockney"],
		url: "https://en.wikipedia.org/wiki/Pop_art",
		images: ["/konstbilder/pop_konst.jpg"],
	},
	{
		name: { sv: "Opkonst", en: "Op Art" },
		years: "1960-",
		description: {
			sv: "En period av konst som använder optiska illusioner och geometriska mönster.",
			en: "A period of art that uses optical illusions and geometric patterns.",
		},
		artists: ["Victor Vasarely", "Bridget Riley", "Carlos Cruz-Diez"],
		url: "https://en.wikipedia.org/wiki/Op_art",
		images: ["/konstbilder/op_konst.jpeg"],
	},
	{
		name: { sv: "Minimalism", en: "Minimalism" },
		years: "1960-",
		description: {
			sv: "En period av konst som reducerar form och material till det väsentliga.",
			en: "A period of art that reduces form and material to the essential.",
		},
		artists: ["Donald Judd", "Dan Flavin", "Agnes Martin"],
		url: "https://en.wikipedia.org/wiki/Minimalism",
		images: ["/konstbilder/minimalism.webp"],
	},
	{
		name: {
			sv: "Fotorealism / Superrealism",
			en: "Photorealism / Superrealism",
		},
		years: "1960-",
		description: {
			sv: "En period av konst som återger motiv med extrem detaljrikedom och realism.",
			en: "A period of art that renders subjects with extreme detail and realism.",
		},
		artists: ["Chuck Close", "Richard Estes", "Ralph Goings"],
		url: "https://en.wikipedia.org/wiki/Photorealism",
		images: ["/konstbilder/fotorealism.jpeg"],
	},
	{
		name: { sv: "Hyperrealism", en: "Hyperrealism" },
		years: "1960-",
		description: {
			sv: "En period av konst som strävar efter att återge motiv så verklighetstroget som möjligt.",
			en: "A period of art that strives to render subjects as realistically as possible.",
		},
		artists: ["Duane Hanson", "Ron Mueck", "Robert Bechtle"],
		url: "https://en.wikipedia.org/wiki/Hyperrealism",
		images: ["/konstbilder/hyperrealism.jpeg"],
	},
	{
		name: { sv: "Postmodernism", en: "Postmodernism" },
		years: "1970-",
		description: {
			sv: "En period av konst som ifrågasätter modernismens ideal och experimenterar med olika stilar och tekniker.",
			en: "A period of art that questions modernism's ideals and experiments with different styles and techniques.",
		},
		artists: ["Cindy Sherman", "Jeff Koons", "Barbara Kruger"],
		url: "https://en.wikipedia.org/wiki/Postmodern_art",
		images: ["/konstbilder/postmodern.jpeg"],
	},
	{
		name: { sv: "Graffiti", en: "Graffiti" },
		years: "1970-",
		description: {
			sv: "En period av konst som uttrycks genom målningar och texter på offentliga platser.",
			en: "A period of art expressed through paintings and texts in public places.",
		},
		artists: ["Banksy", "Keith Haring", "Jean-Michel Basquiat"],
		url: "https://en.wikipedia.org/wiki/Graffiti",
		images: ["/konstbilder/graffiti.jpeg"],
	},
	{
		name: { sv: "Digital konst", en: "Digital Art" },
		years: "1980-",
		description: {
			sv: "En period av konst som skapas med hjälp av digitala verktyg och tekniker.",
			en: "A period of art created with digital tools and techniques.",
		},
		artists: ["Nam June Paik", "Stelarc", "Rafael Lozano-Hemmer"],
		url: "https://en.wikipedia.org/wiki/Digital_art",
		images: ["/konstbilder/digital.jpeg"],
	},
];
