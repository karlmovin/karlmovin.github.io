export enum LinkTag {
	ThreeDPrinting = "3d printing",
	Ai = "ai",
	Api = "api",
	Art = "art",
	BoardGames = "board games",
	Books = "books",
	Career = "career",
	Comics = "comics",
	Cooking = "cooking",
	Courses = "courses",
	Crafts = "crafts",
	Crypto = "crypto",
	Design = "design",
	Development = "software development",
	Diy = "diy",
	Education = "education",
	Entertainment = "entertainment",
	Family = "family",
	Film = "film",
	Finance = "finance",
	Fitness = "fitness",
	Gaming = "gaming",
	Hardware = "hardware",
	Health = "health",
	Hobbies = "hobbies",
	Home = "home",
	HomeAutomation = "home automation",
	Ideas = "ideas",
	Infrastructure = "infrastructure",
	Inspiration = "inspiration",
	Kids = "kids",
	Language = "language",
	Life = "life",
	Manga = "manga",
	Maps = "maps",
	Math = "math",
	Media = "media",
	Misc = "misc",
	Music = "music",
	News = "news",
	Photography = "photography",
	Robotics = "robotics",
	Sailing = "sailing",
	Security = "security",
	Streaming = "streaming",
	Tools = "tools",
	Travel = "travel",
	Ttrpg = "ttrpg",
	Weather = "weather",
	Web = "web",
	Woodworking = "woodworking",
}

export type Link = {
	id?: string;
	title: string;
	url: string;
	description?: string;
	tags: LinkTag[];
};

export const links: Link[] = [
	{
		title: "Flightradar24",
		url: "https://www.flightradar24.com/57.08,27.17/5",
		description: "Track flights in real-time",
		tags: [LinkTag.Misc],
	},
	{
		title: "Material Design",
		url: "https://m3.material.io/",
		description:
			"Material 3 is the latest version of Google`s open-source design system. Design and build beautiful, usable products with Material 3.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://fonts.google.com/",
		title: "Google Fonts",
		description:
			"Making the web more beautiful, fast, and open through great typography.",
		tags: [LinkTag.Design],
	},
	{
		url: "https://www.material-tailwind.com/docs/html/installation",
		title: "Material Tailwind",
		description: "Material Design components for Tailwind CSS",
		tags: [LinkTag.Development],
	},
	{
		url: "https://tailwindcss.com/docs/",
		title: "Tailwind CSS",
		description: "A utility-first CSS framework for rapid UI development.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://unicode.org/charts/",
		title: "Unicode Character Table",
		description: "A complete table of Unicode characters",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.ritsumei.ac.jp/~akitaoka/index-e.html",
		title: "Akiyoshi's illusion pages",
		description: "Akiyoshi Kitaoka's illusion pages",
		tags: [LinkTag.Misc],
	},
	{
		url: "https://www.latinintroduktion.se/etapp-1/",
		title: "Latin Introduktion",
		description: "Latin Introduktion",
		tags: [LinkTag.Language],
	},
	{
		url: "https://fab.cba.mit.edu/classes/863.20/",
		title: "How to Make (Almost) Anything",
		description: "How to Make (Almost) Anything",
		tags: [LinkTag.Education],
	},
	{
		url: "https://cba.mit.edu/classes/",
		title: "MIT Center for Bits and Atoms",
		description: "MIT Center for Bits and Atoms",
		tags: [LinkTag.Education],
	},
	{
		url: "https://www.naturalhabitatshorts.com/",
		title: "Natural Habitat Shorts",
		description: "Natural Habitat Shorts",
		tags: [LinkTag.Film],
	},
	{
		url: "https://tlnotes.com/",
		title: "TL Notes",
		description: "TL Notes",
		tags: [LinkTag.Language],
	},
	{
		url: "https://paulgraham.com/ds.html",
		title: "Do Things that Don't Scale",
		description: "Do Things that Don't Scale",
		tags: [LinkTag.Life],
	},
	{
		url: "https://jakobgreenfeld.com/stay-in-touch",
		title: "Stay in Touch",
		description: "Stay in Touch",
		tags: [LinkTag.Life],
	},
	{
		url: "https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene",
		title: "Three.js",
		description: "Three.js",
		tags: [LinkTag.Development],
	},
	{
		url: "https://firebase.google.com/docs/firestore/quickstart?authuser=0&hl=en#web-modular-api",
		title: "Firebase Firestore",
		description: "Firebase Firestore",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.github.com/en/rest/quickstart?apiVersion=2022-11-28",
		title: "GitHub API",
		description: "GitHub API",
		tags: [LinkTag.Development],
	},
	{
		url: "https://learn.svelte.dev/tutorial/post-handlers",
		title: "Svelte",
		description: "Svelte",
		tags: [LinkTag.Development],
	},
	{
		url: "https://oglaf.com/",
		title: "Oglaf (NSFW)",
		description: "Oglaf",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://potatodogcomics.tumblr.com/",
		title: "Potatodogcomics",
		description: "Potatodogcomics",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://www.blastwave-comic.com/",
		title: "Gone with the blastwave",
		description: "Gone with the blastwave",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://waitbutwhy.com/",
		title: "Wait but why",
		description: "Wait but why",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://www.smbc-comics.com/",
		title: "SMBC",
		description: "SMBC",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://xkcd.com/",
		title: "XKCD",
		description: "XKCD",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://imagecomics.com/comics/series/orc-stain",
		title: "Orc stain",
		description: "Orc stain",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://www.stevelichman.com/",
		title: "Steve Lichman",
		description: "Steve Lichman",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://nedroid.com/",
		title: "Nedroid",
		description: "Nedroid",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://falseknees.com/",
		title: "False knees",
		description: "False knees",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://www.webtoons.com/en/canvas/the-weekly-roll/list",
		title: "The weekly roll",
		description: "The weekly roll",
		tags: [LinkTag.Comics],
	},
	{
		url: "https://marketoonist.com/",
		title: "Marketoonist",
		description: "Marketoonist",
		tags: [LinkTag.Comics],
	},
	{
		url: "http://play-agricola.com/Agricola/Board1/Agricola.html",
		title: "Play Agricola",
		description: "Online version of the board game Agricola",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://terra.snellman.net/",
		title: "terra.snellman.net",
		description: "Play Terra Mystica online",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://catanuniverse.com/en/game/",
		title: "Catan Universe",
		description: "Play the popular board game Catan online",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://www.jinteki.net/",
		title: "Jinteki.net",
		description: "Play the card game Android: Netrunner online",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://tabletopia.com/find-play#games-in-progress",
		title: "Tabletopia",
		description: "Play a wide variety of board games online",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://cascadiagame.github.io/",
		title: "Cascadia",
		description: "Play the board game Cascadia online",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://console.groq.com/playground",
		title: "Groq Playground",
		description: "Groq Playground",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://chat.openai.com/",
		title: "OpenAI Chat",
		description: "OpenAI Chat",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://www.openapis.org/",
		title: "OpenAPI",
		description: "OpenAPI",
		tags: [LinkTag.Development],
	},
	{
		url: "https://swagger.io/specification/",
		title: "Swagger",
		description: "Swagger",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.postman.com/",
		title: "Postman",
		description: "Postman",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.trafiklab.se/sv/api/trafiklab-apis/sl/",
		title: "Trafiklab SL",
		description: "Trafiklab SL",
		tags: [LinkTag.Development],
	},
	{
		url: "https://en.parkopedia.se/",
		title: "Parkopedia",
		description: "Parkopedia",
		tags: [LinkTag.Misc],
	},
	{
		url: "https://api.sl.se/fordonspositioner#PT",
		title: "SL Fordonspositioner",
		description: "SL Fordonspositioner",
		tags: [LinkTag.Development],
	},
	{
		url: "https://loppistajm.se/kalender.html",
		title: "Loppistajm",
		description: "Loppistajm",
		tags: [LinkTag.Misc],
	},
	{
		url: "https://ground.news/landingV7/nutshell?utm_source=nutshell&utm_medium=Youtube&utm_campaign=nov30",
		title: "Ground News",
		description: "Ground News",
		tags: [LinkTag.News],
	},
	{
		url: "https://texttv.nu/blogg/texttv-api",
		title: "TextTV API",
		description: "TextTV API",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.tate.org.uk/art/art-terms",
		title: "Tate Art Terms",
		description: "Tate Art Terms",
		tags: [LinkTag.Art],
	},
	{
		url: "https://api.pollenrapporten.se/docs/",
		title: "Pollenrapporten",
		description: "Pollenrapporten",
		tags: [LinkTag.Api],
	},
	{
		url: "https://ncf.idallen.com/english.html",
		title: "The Chaos by Gerard Nolst Trenité",
		description:
			"English Vocabulary Word Lists with Games, Puzzles and Quizzes",
		tags: [LinkTag.Language],
	},
	{
		url: "https://immersivemath.com/ila/index.html",
		title: "Immersive Linear Algebra",
		description: "Immersive Linear Algebra",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.3blue1brown.com/",
		title: "3Blue1Brown",
		description: "3Blue1Brown",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.khanacademy.org/math",
		title: "Khan Academy",
		description: "Khan Academy",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.wolframalpha.com/",
		title: "Wolfram Alpha",
		description: "Wolfram Alpha",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.desmos.com/",
		title: "Desmos",
		description: "Desmos",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.geogebra.org/",
		title: "Geogebra",
		description: "Geogebra",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.mathway.com/",
		title: "Mathway",
		description: "Mathway",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.symbolab.com/",
		title: "Symbolab",
		description: "Symbolab",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.mathsisfun.com/",
		title: "Math is Fun",
		description: "Math is Fun",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.mathopenref.com/",
		title: "Math Open Reference",
		description: "Math Open Reference",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.lesswrong.com/posts/BPpeBH8brSCRvZajs/how-to-be-an-amateur-polyglot",
		title: "How to be an amateur polyglot",
		description: "How to be an amateur polyglot",
		tags: [LinkTag.Language],
	},
	{
		url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
		title: "Stable Diffusion WebUI",
		description: "Stable Diffusion WebUI",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://github.com/open-webui/open-webui",
		title: "Open WebUI",
		description: "Open WebUI",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://huggingface.co/welcome",
		title: "Hugging Face",
		description: "Hugging Face",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://www.youtube.com/watch?v=zjkBMFhNj_g&t=1234s",
		title: "[1hr Talk] Intro to Large Language Models",
		description:
			"This is a 1 hour general-audience introduction to Large Language Models: the core technical component behind systems like ChatGPT, Claude, and Bard. What they are, where they are headed, comparisons and analogies to present-day operating systems, and some of the security-related challenges of this new computing paradigm.",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://joinmastodon.org/",
		title: "Mastodon",
		description: "Mastodon",
		tags: [LinkTag.Media],
	},
	{
		url: "https://relentless.so/",
		description:
			"Publish websites from your markdown notes. Great for sharing technical blogs, academic wikis and rich content",
		title: "Relentless",
		tags: [LinkTag.Development],
	},
	{
		url: "https://firebase.blog/posts/2024/05/introducing-app-hosting/",
		title: "Introducing App Hosting",
		description: "Introducing App Hosting",
		tags: [LinkTag.Development],
	},
	{
		url: "https://teachyourselfmath.app/?page=1&tags=&difficulty=",
		title: "Teach Yourself Math",
		description: "Teach Yourself Math",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.executeprogram.com/",
		title: "Execute Program",
		description:
			"Execute Program is a learning platform built by developers for developers, because we thought there should be a better way to learn – and remember – programming languages and tools.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://monkeytype.com/",
		title: "Monkeytype",
		description: "Improve your typing speed",
		tags: [LinkTag.Misc],
	},
	{
		url: "https://codeium.com/",
		title: "Codeium",
		description: "Codeium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://cssgridgarden.com/",
		title: "CSS Grid Garden",
		description: "CSS Grid Garden",
		tags: [LinkTag.Development],
	},
	{
		url: "https://flexboxfroggy.com/",
		title: "Flexbox Froggy",
		description: "Flexbox Froggy",
		tags: [LinkTag.Development],
	},
	{
		url: "https://3dinsider.com/3d-printing-filaments-types/",
		title: "3D Printing Filaments",
		description: "3D Printing Filaments",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.thingiverse.com/education",
		title: "Thingiverse Education",
		description: "Thingiverse Education",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.outdoorexperten.se/sv/magasinet/bygga-klattervagg",
		title: "Bygga klättervägg",
		description: "Guide on how to build a climbing wall",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://www.smartblinds.com/stories/the-difference-between-thread-and-matter/",
		title: "The Difference Between Thread and Matter",
		description:
			"Learn about the difference between Thread and Matter in smart blinds technology",
		tags: [LinkTag.HomeAutomation],
	},
	{
		url: "https://nginx.org/en/",
		title: "NGINX",
		description:
			"NGINX is a high-performance web server and reverse proxy server.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://vercel.com/",
		title: "Vercel",
		description:
			"Vercel is a cloud platform for static sites and serverless functions.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.martinsons.se/sv/kunskap-och-inspiration/inspiration/arets-trafluga/",
		title: "Årets Träfluga",
		description: "Inspiration and knowledge about woodworking and carpentry",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.bauhaus.se/bordssag-skil-1340aa-2000w",
		title: "Bordssåg Skil 1340AA 2000W",
		description: "A powerful table saw for woodworking projects",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://civitai.com/",
		title: "Civitai",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://reesewoods.com/how-to-make-a-homemade-adjustable-kettlebell/",
		title: "How to Make a Homemade Adjustable Kettlebell",
		description: "Learn how to make your own adjustable kettlebell at home",
		tags: [LinkTag.Fitness, LinkTag.Diy],
	},
	{
		url: "https://www.stremio.com/",
		title: "Stremio",
		description: "Stremio is a media streaming platform",
		tags: [LinkTag.Media, LinkTag.Streaming],
	},
	{
		url: "https://real-debrid.com/",
		title: "Real-Debrid",
		description:
			"Real-Debrid is a subscription service that provides access to various file hosting websites and allows for faster and unrestricted downloading.",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://nextcloud.com/",
		title: "Nextcloud",
		description:
			"Nextcloud is a self-hosted file sync and share solution designed to be easy to use and highly secure.",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://pi-hole.net/",
		title: "Pi-hole",
		description:
			"Pi-hole is a network-wide ad blocker that acts as a DNS sinkhole, blocking ads and tracking domains at the network level.",
		tags: [LinkTag.Security],
	},
	{
		url: "https://www.one.com/sv/webbhotell-hosting/vad-ar-vps-hosting",
		title: "VPS Hosting",
		description:
			"VPS hosting, or Virtual Private Server hosting, is a type of hosting that uses virtualization technology to provide dedicated resources on a shared server.",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://shadcn.com/",
		title: "Shadowsocks",
		description:
			"Shadowsocks is an open-source proxy tool that allows users to bypass internet censorship and securely access restricted content.",
		tags: [LinkTag.Security],
	},
	{
		url: "https://headlessui.com/",
		title: "Headless UI",
		description:
			"Headless UI is a set of completely unstyled, fully accessible UI components for React and Vue.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://grpc.io/",
		title: "gRPC",
		description:
			"gRPC is a high-performance, open-source framework for building remote procedure call (RPC) APIs.",
		tags: [LinkTag.Api],
	},
	{
		url: "https://www.cloudflare.com/",
		title: "Cloudflare",
		description:
			"Cloudflare is a web infrastructure and website security company that provides content delivery network (CDN) services, DDoS mitigation, and more.",
		tags: [LinkTag.Infrastructure, LinkTag.Security],
	},
	{
		url: "https://svenska.yle.fi/a/7-1456449",
		title: "Bygg en egen limknekt",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.hantverkarpriser.se/sida/prisgue-infor-ditt-altanbygge",
		title: "Prisguide inför ditt altanbygge",
		description: "Get a price guide for building your deck",
		tags: [LinkTag.Home],
	},
	{
		url: "https://www.levels.fyi/?compare=Spotify,Ericsson,Klarna&track=Software%20Engineer",
		title: "Software Engineer Salary Comparison",
		description:
			"Compare salaries of software engineers at Spotify, Ericsson, and Klarna",
		tags: [LinkTag.Career],
	},
	{
		url: "https://pappor.se/",
		title: "Pappor.se",
		description: "A website for fathers, providing resources and support",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://d3js.org/",
		title: "D3.js",
		description:
			"D3.js is a JavaScript library for manipulating documents based on data.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://animejs.com/",
		title: "Anime.js",
		description: "Anime.js is a JavaScript library for creating animations.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://min.io/",
		title: "Min.io",
		description:
			"Min.io is a high performance, distributed object storage system.",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://github.com/jesseduffield/lazygit",
		title: "Lazygit",
		description: "Simple terminal UI for git commands",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/jesseduffield/lazygit/blob/master/docs/keybindings/Keybindings_en.md",
		title: "Lazygit Keybindings",
		description: "Keybinding reference for lazygit",
		tags: [LinkTag.Development],
	},
	{
		url: "https://gist.github.com/MohamedAlaa/2961058",
		title: "tmux Keybindings",
		description: "tmux shortcuts & cheatsheet",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.bwplotka.dev/2025/lazygit/",
		title: "Lazygit blog post",
		description: "Blog post on lazygit by bwplotka",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/sindresorhus/awesome",
		title: "Awesome",
		description: "Awesome lists about all kinds of interesting topics",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/ohmyzsh/ohmyzsh/",
		title: "Oh My Zsh",
		description: "Framework for managing your zsh configuration",
		tags: [LinkTag.Development],
	},
	{
		url: "https://tldr.tech/",
		title: "TLDR",
		description: "Free daily newsletter with the most interesting stories in tech",
		tags: [LinkTag.News, LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/",
		title: "Hacker News",
		description: "Social news website focusing on computer science and entrepreneurship",
		tags: [LinkTag.News, LinkTag.Development],
	},

	{
		url: "https://hackaday.com/2025/02/27/shelved-kindle-gets-new-life-as-weather-display/",
		title: "Shelved Kindle Gets New Life As Weather Display | Hackaday",
		tags: [LinkTag.Diy, LinkTag.Hardware, LinkTag.Weather],
	},
	{
		url: "https://www.beepbox.co/#9n31s6k0l00e00t2ma7g0fj07r1i0o432T5v1u50f0qwx10p511d08H-JJAArrqiih999h0E1b6T1v1u31f0qwx10r511d08AbF6B2Q069eP7b72E3b76367iT7v1u07f0q00d03HU70U0000000000h0IaE107T4v1uf0f0q011z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00E0b4h400000000h4g000000014h000000004h400000000p214FE-1BMc1jj0QQS4tlp600aqfQhQ4t17ghQ4t17ghQ4o2Cz84t5R97hjihQkQQIQpcAo0",
		title: "BeepBox",
		tags: [LinkTag.Music],
	},
	{
		url: "https://www.home-assistant.io/installation/raspberrypi",
		title: "Raspberry Pi - Home Assistant",
		tags: [LinkTag.Diy, LinkTag.Hardware, LinkTag.HomeAutomation],
	},
	{
		url: "https://creativepark.canon/en/categories/CAT-ST01-0072/index.html",
		title: "Animals - Paper Craft - Canon Creative Park",
		tags: [LinkTag.Kids, LinkTag.Crafts],
	},
	{
		url: "https://bladdrat.se/las-i-ratt-ordning-sagan-om-den-underbara-familjen-kanin/",
		title: "Lilla familjen kanin",
		tags: [LinkTag.Kids, LinkTag.Family, LinkTag.Books],
	},
	{
		url: "https://www.bonnierforlagen.se/wp-content/uploads/2022/03/familjen-kanin-lh.pdf",
		title: "familjen-kanin-lh.pdf",
		tags: [LinkTag.Kids, LinkTag.Family, LinkTag.Books],
	},
	{
		url: "https://litteraturhusbloggen.se/sortera-med-fargmonstret/",
		title: "Färgmonstret",
		tags: [LinkTag.Kids, LinkTag.Family, LinkTag.Books],
	},
	{
		url: "https://ocw.mit.edu/",
		title: "MIT OpenCourseWare | Free Online Course Materials",
		tags: [LinkTag.Education, LinkTag.Courses],
	},
	{
		url: "https://analoguelife.com/en",
		title: "Analogue Life",
		tags: [LinkTag.Art],
	},
	{
		url: "https://photographylife.com/what-is-moire",
		title: "What is Moiré?",
		tags: [LinkTag.Art, LinkTag.Photography],
	},
	{
		url: "https://vignette.wikia.nocookie.net/soulcalibur/images/3/3f/SC6_Yoshimitsu.jpg/revision/latest?cb=20180518103728",
		title: "Yoshimitsu - Soulcalibur VI",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.rottentomatoes.com/m/the-fall-2008",
		title: "The Fall (2008) - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/m/they_shall_not_grow_old",
		title: "They Shall Not Grow Old - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/tv/star_wars_visions",
		title: "Star Wars Visions - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/m/whiplash",
		title: "Whiplash - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/m/crumb_documentary",
		title: "Crumb Documentary - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/m/parasyte_movie",
		title: "Parasyte Movie - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/m/gurren_lagann",
		title: "Gurren Lagann - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://tokuzilla.net/watch/the-hero-yoshihiko-and-the-demon-kings-castle.html",
		title: "The Hero Yoshihiko and the Demon King's Castle - Tokuzilla",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/tv/smiling_friends",
		title: "Smiling Friends - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://www.rottentomatoes.com/m/miraklet_i_gullspang",
		title: "Miraklet i Gullspång - Rotten Tomatoes",
		tags: [LinkTag.Art, LinkTag.Film],
	},
	{
		url: "https://static.wikia.nocookie.net/okami/images/0/01/Shiranui.png/revision/latest?cb=20171114225310",
		title: "Okami Shiranui - Wikia",
		tags: [LinkTag.Art],
	},
	{
		url: "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/114721-Okami.jpg",
		title: "Okami Wallpaper - HDWallpaperim (1680×1050)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://static.wikia.nocookie.net/okami/images/e/e3/Wp04_1600.jpg/revision/latest?cb=20101208040011",
		title: "Okami Wallpaper - Wikia (1600×1200)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.konstochfolk.se/produkt/tallen/",
		title: "Tallen – Konstochfolk",
		tags: [LinkTag.Art],
	},
	{
		url: "https://store.falseknees.com/collections/comics/products/sky-egg?variant=39677486760114",
		title: "Sky Egg – False Knees Store",
		tags: [LinkTag.Art],
	},
	{
		url: "https://desenio.se/sv/amber-dusk-50x70?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTKU4WmEDvN_QSmiaQ6w2RzRMOX3oF0qV-MTjOjEiwX3-HEJjagePkaAhc5EALw_wcB",
		title: "Amber Dusk Poster - Grafiska berg - desenio.se",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.wexthuset.com/fakta-och-rad/skotselrad-om-vaxter-i-kruka-och-tradgard/beskrivning-av-krukvaxter-odling-och-forokning/skotselrad-fuchsia",
		title: "Skötselråd Fuchsia. Odla, beskär, vattna och överv... | Wexthuset",
		tags: [LinkTag.Art],
	},
	{
		url: "https://sv.m.wikipedia.org/wiki/F%C3%B6nsterfikus",
		title: "Fönsterfikus – Wikipedia",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.trendrum.se/pedestaler",
		title: "Piedestaler i trä, mässing, stål & marmor m.m. | Trendrum",
		tags: [LinkTag.Art],
	},
	{
		url: "http://cyaneus.com/",
		title: "Cyaneus.com",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.artstation.com/tonysart",
		title: "ArtStation - Tony Sart",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.deviantart.com/waldemar-kazak/gallery",
		title: "Waldemar-Kazak - Professional, Digital Artist | DeviantArt",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.deviantart.com/cirenk/gallery",
		title: "cirenk - Professional, Digital Artist | DeviantArt",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.reddit.com/r/Piracy/comments/2oftbu/guide_the_idiot_proof_guide_to_downloading_ebooks/",
		title: "Guide: Ebooks off IRC.",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.johanegerkrans.com/cdn/shop/products/Sjorathumb_1512x.png?v=1643793184",
		title: "Sjorathumb_1512x.png (1512×1512)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.johanegerkrans.com/cdn/shop/products/MioTheLandFarawayA3copy_1080x.jpg?v=1630951739",
		title: "MioTheLandFarawayA3copy_1080x.jpg (1080×1527)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.johanegerkrans.com/cdn/shop/products/yulepigA3_1080x.jpg?v=1638374349",
		title: "yulepigA3_1080x.jpg (1080×1527)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.johanegerkrans.com/collections/frontpage/products/mimir-statuette",
		title: "MIMIR STATUETTE – Johan Egerkrans Shop",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.johanegerkrans.com/cdn/shop/files/dullahanA3copy_1080x.jpg?v=1698238949",
		title: "dullahanA3copy_1080x.jpg (1080×1527)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.johanegerkrans.com/cdn/shop/products/Miodawnlightbridgecopy_1080x.jpg?v=1632312838",
		title: "Miodawnlightbridgecopy_1080x.jpg (1080×1527)",
		tags: [LinkTag.Art],
	},
	{
		url: "https://tann.itch.io/slice-dice",
		title: "Slice & Dice by tann",
		tags: [LinkTag.Art],
	},
	{
		url: "https://theweekendwoodworker.com/free-shop-jigs-plans?vgo_ee=MPd35QbANmCRAeShMWgMpflMy%2BOWWuyaZunZiCXh6gI%3D",
		title: "My Favorite Shop Jigs",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.finewoodworking.com/magazine",
		title: "Magazine - FineWoodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/renovera/prisvarda-verktyg#sida-10",
		title: "Prisvärda verktyg | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/renovera/bra-grunduppsttning-verktyg",
		title: "En bra grunduppsättning av verktyg | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/renovera/mina-10-basta-verktygstips",
		title: "Mina 10 bästa verktygstips | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/renovera/bra-pris-verktyg-sa-kan-du-fynda",
		title: "Bra pris på verktyg - så kan du fynda | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/renovera/verktyg-kpa-dyrt-eller-billigt",
		title: "Verktyg - köpa dyrt eller billigt? | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/snickeritips-fran-mobelsnickaren-dela-rolla-laga-malla-saga",
		title: "Snickeritips från möbelsnickaren - dela, rolla, laga, malla, såga | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/forum/threads/saga-rakt-med-handcirkelsag.18811/",
		title: "Såga rakt med handcirkelsåg | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/top-10-basta-verktygsforvaringen#sida-2",
		title: "Top 10: Bästa verktygsförvaringen | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/forum/threads/hyvel.252500/",
		title: "Hyvel | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.workshopheaven.com/",
		title: "Workshop Heaven - Fine Tools",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/forum/threads/hur-skoeter-man-baest-en-hyvel.327905/",
		title: "Hur sköter man bäst en hyvel? | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/forum/threads/vaerdet-pa-en-stanley-no-4-hyvel.331972/page-2",
		title: "Värdet på en Stanley no 4 hyvel? | Sida 2 | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.holteyplanes.com/",
		title: "\"Holtey Classic Handplanes Homepage.\"",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.hyvlar.se/en",
		title: "The place for Handtools and premium Planes since 2010",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "http://www.hardenborg.se/handverktygslista.html",
		title: "Håkan Hardenborg",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.mariasoxbo.se/2016/05/09/diy-lastpall-mobler-du-kan-gora-gratis/",
		title: "DIY lastpall – möbler du kan göra gratis! • Maria Soxbo",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.woodsmithplans.com/plan/quick-and-easy-router-table/",
		title: "Quick & Easy Router Table | Woodworking Project | Woodsmith Plans",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.woodsmithplans.com/plan/stow-away-router-table/",
		title: "Stow-Away Router Table | Woodworking Project | Woodsmith Plans",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.popularwoodworking.com/projects/cam-marking-gauge/",
		title: "CAM Marking Gauge | Popular Woodworking Magazine",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://passionforwood.com/",
		title: "Passion Group of Companies - Passion Group of Companies",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.popularwoodworking.com/editors-blog/permanent-collection-%E2%80%9Cthe-essential-woodworker%E2%80%9D/",
		title: "Permanent Collection: “The Essential Woodworker” | Popular Woodworking Magazine",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.festoolownersgroup.com/",
		title: "(54) Festool Owners Group - Index",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.popularwoodworking.com/chris-schwarz-blog/",
		title: "Chris Schwarz Blog | Popular Woodworking Magazine",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://thecarpentryway.blog/?b2w=https://thecarpentryway.blogspot.com/",
		title: "The Carpentry Way – Designing and building in solid wood, emphasizing joinery with minimal use of glue or metal fasteners.",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.newyankee.com/",
		title: "Home - The New Yankee Workshop",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.youtube.com/watch?v=1wcqqo0S8kU",
		title: "Minimalist Woodworker Tool Set - YouTube",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.finewoodworking.com/",
		title: "FineWoodworking - Expert advice on woodworking and furniture making, with thousands of how-to videos, step-by-step articles, project plans, photo galleries, tool reviews, blogs, and more",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/forum/threads/finsnickeritermer-pa-svenska.297776/",
		title: "Finsnickeritermer på svenska! | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.byggahus.se/handoverfras-allt-du-behover-veta-om-handoverfrasar#beskrivning",
		title: "Handöverfräs - allt du behöver veta om handöverfräsar | Byggahus.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.bauhaus.se/bryningsstod-stanley-3-delar",
		title: "BRYNINGSSTÖD STANLEY 3 DELAR",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://woodandshop.com/woodworking-hand-tool-buying-guide-workbench-tool-storage/",
		title: "How To Choose A Woodworking Bench | Workbench Guide Part 1",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://imgur.com/a/QCsaRdC",
		title: "Storage under stairs - Imgur",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.goodreads.com/book/show/1446196.Making_Shoji",
		title: "Making Shoji by Toshio Odate",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/998538.Hand_Tools",
		title: "Hand Tools: Their Ways and Workings by Aldren A. Watson",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/156605.Understanding_Wood",
		title: "Understanding Wood by R. Bruce Hoadley",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/author/show/981385.Christopher_Schwarz",
		title: "Christopher Schwarz (Author of The Anarchist's Tool Chest)",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/5731602-turning-wood-with-richard-raffan",
		title: "Turning Wood with Richard Raffan by Richard Raffan",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/11350175-the-joiner-and-cabinet-maker",
		title: "The Joiner and Cabinet Maker: His Work and Its Principles by Anonymous",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/review/list/3452722-koen-crolla?shelf=woodworking",
		title: "Koen Crolla’s Bookshelf: woodworking",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/2533078.Collins_Complete_Woodworker_s_Manual",
		title: "Collins Complete Woodworker's Manual by Albert Jackson",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.amazon.se/gp/aw/d/1951217063/ref=cm_cr_arp_mb_bdcrb_top?ie=UTF8",
		title: "The Minimalist Woodworker: Essential Tools and Smart Shop Ideas for Building with Less : Tesolin, Vic: Amazon.se: Böcker",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.amazon.se/Why-How-Woodworking-Approach-Meaningful/dp/1631869272/ref=zg_bs_20686649031_18?_encoding=UTF8&psc=1&refRID=N4RZ98DTN3VCSF9HQTJJ",
		title: "The Why & How of Woodworking: A Simple Approach to Making Meaningful Work : Pekovich, Michael: Amazon.se: Böcker",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.amazon.se/Complete-Japanese-Joinery-Yasuo-Nakahara/dp/0881791210/ref=zg_bs_20686649031_26?_encoding=UTF8&psc=1&refRID=N33ZRYNCY2AEK1WXR1SM",
		title: "The Complete Japanese Joinery : Sato, Hideo, Nakahara, Yasua, Nii, Koichi Paul: Amazon.se: Böcker",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.amazon.se/Whittling-Flat-Plane-Animals-Projects-Carve/dp/1497101158/ref=zg_bs_20686389031_82?_encoding=UTF8&psc=1&refRID=1CCDQR7G2Q0SZ48VF61P",
		title: "Whittling Flat-Plane Animals: 15 Projects to Carve with Just One Knife : Miller, James: Amazon.se: Böcker",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.byggahus.se/forum/threads/boecker-som-borde-finnas-i-ett-snickeri-bibliotek.293325/",
		title: "Böcker som borde finnas i ett snickeri-bibliotek | Byggahus.se",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.byggahus.se/forum/threads/boktips.232031/",
		title: "Boktips | Byggahus.se",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.byggahus.se/forum/threads/boktips.138580/",
		title: "Boktips | Byggahus.se",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.byggahus.se/forum/threads/boktips.191996/",
		title: "Boktips | Byggahus.se",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.adlibris.com/se/bok/tage-frid-teaches-woodworking-three-step-by-step-guidebooks-to-essential-woodworking-techniques-9781561588268",
		title: "Tage Frid Teaches Woodworking: Three Step-By-Step Guidebooks to Essential Woodworking Techniques - Tage Frid - häftad (9781561588268) | Adlibris Bokhandel",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.adlibris.com/se/bok/the-minimalist-woodworker-9781951217068",
		title: "The Minimalist Woodworker - Vic Tesolin - pocket (9781951217068) | Adlibris Bokhandel",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/25982177-the-minimalist-woodworker",
		title: "The Minimalist Woodworker: Essential Tools & Smart Shop Ideas for Building with Less by Vic Tesolin",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.amazon.com/Woodwork-Joints-Dovetails-Mechanical-Manufactured/dp/0806988061",
		title: "Woodwork Joints: Edge Joints, Mortise & Tenon, Halved & Bridle Joints, Housed & Dowelled, Dovetails, Length Joints, Mechanical Joints, Joints for Manufactured Boards: Charles H. Hayward: 9780806988061: Amazon.com: Books",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.duvan.se/prismas-stora-snickarbok-en-mangsidig-och-praktisk-handbok-for-hemmasnickaren",
		title: "Prismas stora snickarbok : En mångsidig och praktisk handbok för hemmasnickaren",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://blog.lostartpress.com/2024/04/14/a-free-download-now-and-forever-the-anarchists-tool-chest/",
		title: "A Free Download Now and Forever: ‘The Anarchist’s Tool Chest’ – Lost Art Press",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://archive.org/details/essentialwoodwor0000wear/page/n6/mode/1up",
		title: "The essential woodworker : Wearing, Robert : Free Download, Borrow, and Streaming : Internet Archive",
		tags: [LinkTag.Woodworking, LinkTag.Books],
	},
	{
		url: "https://www.goodsjapan.com/woodworking-tools-supplies",
		title: "Woodworking Tool & Supplies | Goods Japan",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.wood-database.com/wood-articles/drying-wood-at-home/#google_vignette",
		title: "Drying Wood at Home | The Wood Database",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.ellos.se/pastill/julie-dagbadd-i-furu/1689948-01",
		title: "Pastill Julie dagbädd i furu - Beige - Dagbäddar | Ellos.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.skivspecialisten.se/",
		title: "Skivspecialisten",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://calexicowood.se/furu",
		title: "Furu by CALEXICO WOOD ABs trävaror",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://gds.se/tak/takplat/plastskivor-till-tak",
		title: "De populäraste plasttaken till små byggnader | Gör Det Själv",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.matthewpeech.com/",
		title: "Matthew Peech Woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://commonwoodworking.com/bench-plane-setup/",
		title: "Bench Plane Setup | Common Woodworking | Woodworking for Beginners",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://toolsforworkingwood.com/store/blog/1314",
		title: "Stanley and Stanley Bedrock Premium Line of Planes",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://paulsellers.com/2012/02/plane-soles-should-be-mostly-flat/",
		title: "Plane soles should be mostly flat - Paul Sellers' Blog",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.finewoodworking.com/forum/help-choosing-an-old-stanley",
		title: "Help choosing an old Stanley - FineWoodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.leevalley.com/en-gb/discover/articles/restoringanoldhandplane",
		title: "Restoring an Old Hand Plane - Lee Valley Tools",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.swedishwoodworking.com/articles/the-micro-workshop-part-2/",
		title: "The Micro Workshop, part 2 | Swedish Woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/woodworking/comments/16rcy2w/someone_talk_me_outta_making_this/",
		title: "Someone talk me outta making this.: woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.techradar.com/reviews/insta360-x3-review",
		title: "Insta360 X3 review | TechRadar",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.pinterest.se/pin/324470348157220741/",
		title: "How to Organize Closet and Small Spaces for Storage in Your Small Bedroom",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://grisslan.blogspot.com/p/verktygsmani.html?m=1",
		title: "Grisslan: Verktygsmani!",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://notes.andymatuschak.org/%C2%A7Note-writing_systems",
		title: "§Note-writing systems",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://teachingwoodwork.com/tools/hand-planes-for-beginners-a-working-guide/",
		title: "Hand Planes for Beginners - A Working Guide",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.facebook.com/story.php/?id=1633602763594237&story_fbid=3589409654680195",
		title: "Facebook",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.familyhandyman.com/list/bench-grinder-basics/",
		title: "Bench Grinder Basics You Need to Know — The Family Handyman",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.protoolreviews.com/types-wood-drilling-bits/",
		title: "Types of Wood Drilling Bits - Use the Right One - Pro Tool Reviews",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.google.com/search?client=ms-android-samsung&sxsrf=AB5stBiuouRR4_9T8YBX4xB2LnKnplbxjg:1690187271728&q=aku+aku&tbm=isch&sa=X&ved=2ahUKEwjymL2f9qaAAxWhR_EDHfDnDxkQ0pQJegQIBxAB&biw=412&bih=718&dpr=2.63",
		title: "aku aku – Google Sök",
		tags: [LinkTag.Woodworking, LinkTag.Ideas],
	},
	{
		url: "https://sawsonskates.com/diy-boot-jack-plans/",
		title: "DIY Boot Jack Plans | Sawson Skates",
		tags: [LinkTag.Woodworking, LinkTag.Ideas],
	},
	{
		url: "https://www.ana-white.com/woodworking-projects/roll-out-pantry-narrow-gaps-kitchen-cabinets-or-fridge",
		title: "Roll Out Pantry - For Narrow Gaps in Kitchen Cabinets or Fridge | Ana White",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.medborgarskolan.se/kurser-och-evenemang/konst-och-hantverk/konsthantverk/traslojd/?city=stockholms%20l%C3%A4n&subject=278",
		title: "Kurs i träslöjd och diplomutbildning i möbelsnickeri | Medborgarskolan",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://abfstockholm.se/kurs/nyhet-mobelsnickeri-2/",
		title: "Möbelsnickeri - ABF Stockholm",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.folkuniversitetet.se/kurser-utbildningar/konsthantverk/konsthantverk/mobelsnickeri/",
		title: "Möbelsnickerikurser. Kurser i möbesnickeri - Folkuniversitetet",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://app.squarespacescheduling.com/schedule/d8520858/?categories%5B%5D=M%C3%B6belkurs",
		title: "Schedule Appointment with Formlabbet",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.sv.se/sokresultat?q=&g_County=Stockholms+l%C3%A4n&g_DistanceCourse=False",
		title: "Sökresultat Studieförbundet Vuxenskolan",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.brokedeckcreations.com/",
		title: "BrokeDeck Creations",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.woodreview.com.au/moty",
		title: "Maker of the Year Awards 2024 - Australian Wood Review",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.birkagarden.se/hantverks-kurser",
		title: "HANTVERKS-KURSER",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://huddingesnickeri.se/kontakta-oss/",
		title: "Kontakta oss - Huddinge snickeri AB",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://diyfaqs.com/homemade-slant-board",
		title: "Homemade Slant Board - DIY FAQs",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.diva-portal.org/smash/get/diva2:1073763/FULLTEXT01.pdf",
		title: "Träfakta - DiVA portal",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://stalands.se/hallmobler/hallbankar/ivar-hallpall-oljad-ek?fbclid=IwY2xjawH220VleHRuA2FlbQEwAGFkaWQBqxgC6kpRmwEddWDIa0Uc20WEvbPy6sOrovBsJLvPVynfXYlUudsq-uZz2MTiYCIkPsEZ_aem__94JTdGHX6G-RBZf6sFoaw&utm_medium=paid&utm_source=fb&utm_id=120216213387690427&utm_content=120216213411290427&utm_term=120216213387710427&utm_campaign=120216213387690427",
		title: "Ivar Hallpall oljad ek - Stalands Möbler",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://woodworkingforabeginner.com/",
		title: "Home - Woodworking For Beginners",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://woodarchivist.com/",
		title: "WoodArchivist",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://lostartpress.com/",
		title: "Lost Art Press",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://christopherschwarz.substack.com/p/steal-this-book",
		title: "Steal This Book... - by Christopher Schwarz",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://things-ive-made.mataroa.blog/blog/printing-and-binding-the-greatest-way-to-experience-media/",
		title: "Printing and Binding - The Greatest Way to Experience Media — Things I've Made",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/BeginnerWoodWorking/comments/s9vutl/how_essential_is_a_band_saw/",
		title: "How essential is a band saw? : r/BeginnerWoodWorking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://woodworkersarchive.com/",
		title: "The Woodworker's Archive - Woodworking Plans",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/woodworking/comments/5y8r2n/differences_among_japanese_pull_saws/",
		title: "Differences among Japanese pull saws : r/woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://books.google.ca/books?id=49gDAAAAMBAJ&pg=PA207&source=gbs_toc_r&hl=en&pli=1#v=onepage&q&f=false",
		title: "Popular Mechanics - Google Books",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "http://woodtools.nov.ru/big/TAOW/The_Art_Of_Woodworking.htm",
		title: "Wood Tools - Журналы - The Art Of Woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/handtools/comments/196gdsk/wooden_planes_western_vs_japanese_push_vs_pull/",
		title: "Wooden planes, western vs Japanese, push vs pull : r/handtools",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/BeginnerWoodWorking/comments/1abfmvc/dont_get_cheap_band_saws/",
		title: "Don’t get cheap band saws : r/BeginnerWoodWorking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/woodworking/comments/1o8ih1l/what_is_the_only_book_you_will_ever_need_for/",
		title: "What is \"the only book you will ever need\" for woodworking? : r/woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://suikoushya.com/ja/2017/11/27/why-kanna-finish/",
		title: "Why use a Kanna? – 翠紅舎-Suikoushya-",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://archive.org/details/practicalwoodwor02unse/page/838/mode/2up",
		title: "The practical woodworker : a complete guide to the art and practice of woodworking : Free Download, Borrow, and Streaming : Internet Archive",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/handtools/comments/1nzuhko/picked_up_this_stanley_no_5_wanting_to_restore/",
		title: "Picked up this Stanley No 5, wanting to restore. How much of a challenge am I in for? : r/handtools",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/HandToolRescue/comments/1edzed6/budget_rust_remover/",
		title: "Budget rust remover : r/HandToolRescue",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/woodworking/comments/aqvvyg/just_got_gifted_a_table_for_our_first_home_is/",
		title: "Just got gifted a table for our first home! (: is there a better way to remove old varnish (is that what it’s called?) than just sanding it and clogging up a billion sanding discs? : r/woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.abebooks.com/9781565233256/Jigs-Fixtures-Table-Saw-Router-1565233255/plp",
		title: "Jigs & Fixtures for the Table Saw and Router - AbeBooks",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://archive.org/details/japanesewoodwork0000odat",
		title: "Japanese woodworking tools : their tradition, spirit, and use : Ōdate, Toshio : Free Download, Borrow, and Streaming : Internet Archive",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.paoson.com/blog/en/workbench-dogs-holdfast-clamps-n120/",
		title: "Holdfast Clamp DIY - Paoson Blog",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.dinbyggare.se/viktiga-matverktyg/",
		title: "Viktiga mätverktyg - Lär dig mer om mätverktyg när du ska bygga om | dinbyggare.se",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://archive.org/details/irwin-wood-boring-tools-catalog-11/page/n50/mode/1up",
		title: "Irwin Wood Boring Tools : Catalog No. 11 : Irwin Auger Bit Co. : Free Download, Borrow, and Streaming : Internet Archive",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/handtools/comments/1ajware/auger_bits_for_brace/",
		title: "Auger Bits for Brace : r/handtools",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.woodtalkonline.com/",
		title: "Forums - Wood Talk Online",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.rockler.com/rockler-deluxe-honing-guide-and-setup-gauge",
		title: "Rockler Deluxe Honing Guide and Setup Gauge",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://dev.to/m4cs/creating-a-cleaner-macos-workspace-2e35",
		title: "Creating a Cleaner MacOS Workspace - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/kamranahmedse/developer-roadmap",
		title: "kamranahmedse/developer-roadmap: Roadmap to becoming a web developer in 2020",
		tags: [LinkTag.Development],
	},
	{
		url: "https://choosealicense.com/",
		title: "Choose an open source license | Choose a License",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.theregister.com/AMP/2020/09/21/github_commandline_interface_v1/",
		title: "Imagine working for GitHub and writing a command-line interface for the platform, then GitHub makes an 'official' one • The Register",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/analytics-vidhya/testing-a-difference-in-population-proportions-in-python-89d57a06254",
		title: "Testing a Difference in Population Proportions in Python | by Satya Pattnaik | Analytics Vidhya | Jul, 2020 | Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dart.dev/",
		title: "Dart programming language | Dart",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.logrocket.com/rich-accessible-uis-react-spectrum/",
		title: "Richer, more accessible UIs with React Spectrum - LogRocket Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.sankalpjonna.com/posts/hosting-your-entire-web-application-using-s3-cloudfront",
		title: "Hosting your entire web application using S3 + CloudFront | Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.businessnewsdaily.com/11057-cloud-hosting-web-hosting-best-business.html#:~:text=Shared%20hosting%20servers%20are%20servers%20with%20multiple%20websites%20on%20them.&text=Cloud%20hosting%20is%20a%20service,performance%20spikes%20and%20other%20stresses.",
		title: "Cloud Hosting vs. Shared Web Hosting - businessnewsdaily.com",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.slashgear.com/progressive-web-apps-still-have-a-long-way-to-go-17629387/amp/",
		title: "Progressive Web Apps still have a long way to go - SlashGear",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.howtographql.com/basics/1-graphql-is-the-better-rest/",
		title: "GraphQL vs REST - A comparison",
		tags: [LinkTag.Development],
	},
	{
		url: "https://serokell.io/blog/why-typescript",
		title: "Why You Should Use TypeScript in 2021",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/",
		title: "Blogged Answers: A (Mostly) Complete Guide to React Rendering Behavior · Mark's Dev Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.logrocket.com/rust-and-node-js-a-match-made-in-heaven/",
		title: "Rust and Node.js: A match made in heaven - LogRocket Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.smashingmagazine.com/2020/04/react-hooks-best-practices/",
		title: "Best Practices With React Hooks — Smashing Magazine",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.blog/2020-04-09-from-48k-lines-of-code-to-10-the-story-of-githubs-javascript-sdk/",
		title: "From 48k lines of code to 10—the story of GitHub's JavaScript SDK - The GitHub Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/bytebodger/reinventing-the-wheel-with-react-hooks-29f9",
		title: "Reinventing the Wheel With React Hooks - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://roadmap.sh/frontend",
		title: "Learn to become a modern frontend developer",
		tags: [LinkTag.Development],
	},
	{
		url: "https://i.redd.it/nit55p5cr8p41.png",
		title: "nit55p5cr8p41.png (6518×4056)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://jaxenter.com/clojure-alternative-java-169315.html",
		title: "Clojure: a mature alternative to Java - JAXenter",
		tags: [LinkTag.Development],
	},
	{
		url: "https://redux-toolkit.js.org/",
		title: "Redux Toolkit | Redux Toolkit",
		tags: [LinkTag.Development],
	},
	{
		url: "https://levelup.gitconnected.com/conditional-statements-are-a-code-smell-here-is-your-relief-38e50c023708",
		title: "Conditional Statements are a Code Smell — Here is Your Relief | by Madhavan Nagarajan | Level Up Coding",
		tags: [LinkTag.Development],
	},
	{
		url: "https://levelup.gitconnected.com/ultimate-guide-to-tips-tricks-and-javascript-features-you-should-know-27e0a4a6ffdf",
		title: "Ultimate Guide to Tips, Tricks, and JavaScript Features You Should Know! | by Daniel Movsesyan | Level Up Coding",
		tags: [LinkTag.Development],
	},
	{
		url: "https://howtodoinjava.com/java/exception-handling/checked-vs-unchecked-exceptions-in-java/",
		title: "Java Checked vs Unchecked Exceptions - HowToDoInJava",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/NARKOZ/hacker-scripts",
		title: "NARKOZ/hacker-scripts: Based on a true story",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/monisnap/bye-bye-postman-let-s-share-your-rest-api-calls-in-team-easily-h6l",
		title: "Bye bye Postman ! Let's share your REST API calls in team, easily ! - DEV Community 👩‍💻👨‍💻",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/duomly/how-to-become-a-front-end-developer-2935",
		title: "What you should learn to become a good front-end developer? - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/swlh/the-software-engineering-interview-cheatsheet-98466b14054",
		title: "The Tech Interview Study Guide and Cheatsheet | The Startup",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/leolanese/functional-programming-buzzwords-36c1",
		title: "Functional Programming buzzwords - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=25700135",
		title: "Ask HN: Show me your half baked project | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://2020.stateofjs.com/en-US/technologies/",
		title: "State of JS 2020: Technologies",
		tags: [LinkTag.Development],
	},
	{
		url: "https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/",
		title: "Theming and Theme Switching with React and styled-components | CSS-Tricks",
		tags: [LinkTag.Development],
	},
	{
		url: "https://alexkondov.com/tao-of-react/",
		title: "Tao of React - Software Design, Architecture & Best Practices | Alex Kondov - Software Engineer",
		tags: [LinkTag.Development],
	},
	{
		url: "http://jeffe.cs.illinois.edu/teaching/algorithms/",
		title: "Algorithms by Jeff Erickson",
		tags: [LinkTag.Development],
	},
	{
		url: "https://craigmod.com/essays/fast_software/",
		title: "Fast Software, the Best Software — by Craig Mod",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=26059517",
		title: "Don't Offer a Free Plan | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://atthis.link/blog/2021/rss.html",
		title: "Why I Still Use RSS | atthislink",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=26014344",
		title: "I Still Use RSS | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://gourav.io/clone-wars",
		title: "Clone Wars - Open source clones of popular sites",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.codecademy.com/courses/learn-sql/lessons/manipulation/exercises/sql",
		title: "Learn SQL | Codecademy",
		tags: [LinkTag.Development],
	},
	{
		url: "https://selectstarsql.com/",
		title: "Select Star SQL",
		tags: [LinkTag.Development],
	},
	{
		url: "https://quip.com/2gwZArKuWk7W",
		title: "Quip",
		tags: [LinkTag.Development],
	},
	{
		url: "https://leetcode.com/problemset/database/",
		title: "Problems - LeetCode",
		tags: [LinkTag.Development],
	},
	{
		url: "https://milapneupane.com.np/2020/05/01/the-ultimate-flutter-tutorial-for-beginners",
		title: "The ultimate Flutter Tutorial for beginners | Milap Neupane Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ferd.ca/awk-in-20-minutes.html",
		title: "Awk in 20 Minutes",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.javascripting.com/",
		title: "JavaScripting.com - The Database of JavaScript Libraries",
		tags: [LinkTag.Development],
	},
	{
		url: "https://redis.io/",
		title: "Redis",
		tags: [LinkTag.Development],
	},
	{
		url: "https://1loc.dev/",
		title: "1loc | Favorite JavaScript single line of code",
		tags: [LinkTag.Development],
	},
	{
		url: "https://gist.github.com/mandiwise/dc53cb9da00856d7cdbb",
		title: "A command to calculate lines of code in all tracked files in a Git repo",
		tags: [LinkTag.Development],
	},
	{
		url: "https://sql.js.org/#/",
		title: "sql.js",
		tags: [LinkTag.Development],
	},
	{
		url: "https://trekhleb.dev/blog/2018/dynamic-programming-vs-divide-and-conquer/",
		title: "Dynamic Programming vs Divide-and-Conquer | Trekhleb",
		tags: [LinkTag.Development],
	},
	{
		url: "https://lichess.org/blog/YF-ZORQAACAA89PI/why-lichess-will-always-be-free.",
		title: "Why Lichess will always be free. | Blog • lichess.org",
		tags: [LinkTag.Development],
	},
	{
		url: "http://js4ds.org/",
		title: "JavaScript for Data Science",
		tags: [LinkTag.Development],
	},
	{
		url: "https://cheats.rs/",
		title: "Rust Language Cheat Sheet",
		tags: [LinkTag.Development],
	},
	{
		url: "https://markodenic.com/use-google-like-a-pro/",
		title: "Use Google like a pro - Marko Denic - Web Developer",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.jakobmeier.ch/blogging/Rust_on_the_Web.html",
		title: "Rust meets the web - a clash of programming paradigms | Technology blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://shaunlebron.github.io/t3tr0s-slides/#4",
		title: "shaunlebron.github.io",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.zir-ai.com/the-high-cost-of-keyword-search",
		title: "Semantic search as an alternative to keyword search",
		tags: [LinkTag.Development],
	},
	{
		url: "https://about.gitlab.com/images/press/git-cheat-sheet.pdf",
		title: "git-cheat-sheet.pdf",
		tags: [LinkTag.Development],
	},
	{
		url: "https://jvns.ca/",
		title: "Julia Evans",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.joelonsoftware.com/",
		title: "Joel on Software",
		tags: [LinkTag.Development],
	},
	{
		url: "https://caddyserver.com/",
		title: "Caddy - The Ultimate Server with Automatic HTTPS",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.digitalocean.com/community/tools/nginx?domains.0.php.php=false&domains.0.reverseProxy.reverseProxy=true&domains.0.routing.root=false",
		title: "NGINXConfig | DigitalOcean",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.acolyer.org/",
		title: "the morning paper | a random walk through Computer Science research, by Adrian Colyer",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=28707463",
		title: "Understanding Awk | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://twitter.com/b0rk",
		title: "🔎Julia Evans🔍 (@b0rk) / Twitter",
		tags: [LinkTag.Development],
	},
	{
		url: "https://wizardzines.com/",
		title: "wizard zines",
		tags: [LinkTag.Development],
	},
	{
		url: "https://scattered-thoughts.net/writing/things-unlearned/",
		title: "Things unlearned",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.kernel.org/doc/html/latest/process/management-style.html",
		title: "Linux kernel management style — The Linux Kernel documentation",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ben.balter.com/2021/12/15/github-actions-website-api-change-notification/",
		title: "Using GitHub Actions to get notified when an API response (or web page) changes | Ben Balter",
		tags: [LinkTag.Development],
	},
	{
		url: "https://malisper.me/an-algorithm-for-passing-programming-interviews/",
		title: "An Algorithm for Passing Programming Interviews - malisper.me",
		tags: [LinkTag.Development],
	},
	{
		url: "https://abseil.io/resources/swe-book",
		title: "abseil / Software Engineering at Google",
		tags: [LinkTag.Development],
	},
	{
		url: "https://coolors.co/palettes/trending",
		title: "Trending Color Palettes - Coolors",
		tags: [LinkTag.Development],
	},
	{
		url: "https://surfshark.com/",
		title: "Secure Your Digital Life - Surfshark",
		tags: [LinkTag.Development],
	},
	{
		url: "https://app.netlify.com/",
		title: "Welcome to Netlify | Netlify",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/webdev/comments/5m8tr4/how_do_i_host_the_website_i_just_built/",
		title: "(2) How do I host the website I just built? : webdev",
		tags: [LinkTag.Development],
	},
	{
		url: "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/",
		title: "A visual introduction to machine learning",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dotfiles.github.io/tutorials/",
		title: "Tutorials - dotfiles.github.io",
		tags: [LinkTag.Development],
	},
	{
		url: "https://evanhahn.com/a-decade-of-dotfiles/",
		title: "A decade of dotfiles",
		tags: [LinkTag.Development],
	},
	{
		url: "https://idea-instructions.com/",
		title: "IDEA – nonverbal algorithm assembly instructions",
		tags: [LinkTag.Development],
	},
	{
		url: "https://jdsalaro.com/blog/git-tutorial/",
		title: "Git for Beginners: Zero to Hero 🐙 — Jayson Salazar Rodriguez | @jdsalaro | Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://mobbin.com/browse/web/apps",
		title: "Browse Web Apps | Mobbin",
		tags: [LinkTag.Development],
	},
	{
		url: "https://beta.elevenlabs.io/",
		title: "ElevenLabs || Prime Voice AI",
		tags: [LinkTag.Development],
	},
	{
		url: "https://svelte.dev/",
		title: "Svelte - Cybernetically enhanced web apps",
		tags: [LinkTag.Development],
	},
	{
		url: "https://firebase.google.com/",
		title: "Firebase - Google",
		tags: [LinkTag.Development],
	},
	{
		url: "https://firebase.google.com/products/firestore",
		title: "Firestore - Firebase",
		tags: [LinkTag.Development],
	},
	{
		url: "https://codedamn.com/",
		title: "Learn to code for free - Personal AI powered tutor 100+ interactive courses",
		tags: [LinkTag.Development],
	},
	{
		url: "https://picockpit.com/raspberry-pi/sv/de-basta-raspberry-pi-projekten-i-oktober-2023/",
		title: "De bästa Raspberry Pi-projekten i oktober 2023 | PiCockpit",
		tags: [LinkTag.Development],
	},
	{
		url: "https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/",
		title: "Why your website should be under 14kB in size | endtimes.dev",
		tags: [LinkTag.Development],
	},
	{
		url: "https://api.met.no/product/THREDDS",
		title: "THREDDS dataset archive landing page",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.freecodecamp.org/here-are-some-app-ideas-you-can-build-to-level-up-your-coding-skills-39618291f672",
		title: "Here are some app ideas you can build to level up your coding skills",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.passbolt.com/",
		title: "Passbolt | Open source password manager for teams",
		tags: [LinkTag.Development],
	},
	{
		url: "http://frankforce.com/?p=5826",
		title: "I’m only making business card sized games now | Killed By A Pixel",
		tags: [LinkTag.Development],
	},
	{
		url: "https://kevinmartinjose.com/2019/04/08/programming-doing-it-more-vs-doing-it-better/",
		title: "Programming: doing it more vs doing it better – Kevin Martin Jose",
		tags: [LinkTag.Development],
	},
	{
		url: "http://www.gabrielgambetta.com/computer-graphics-from-scratch/introduction.html",
		title: "Introduction - Computer Graphics from scratch - Gabriel Gambetta",
		tags: [LinkTag.Development],
	},
	{
		url: "https://cstack.github.io/db_tutorial/",
		title: "How Does a Database Work? | Let’s Build a Simple Database",
		tags: [LinkTag.Development],
	},
	{
		url: "http://www.gabrielgambetta.com/computer-graphics-from-scratch/table-of-contents.html",
		title: "Table of contents - Gabriel Gambetta",
		tags: [LinkTag.Development],
	},
	{
		url: "https://yanis.blog/best-javascript-bloggers-to-follow-in-2019/",
		title: "Best JavaScript Bloggers To Follow In 2019 - Yanis Blogs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.terraform.io/",
		title: "Terraform by HashiCorp",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/KTH/devops-course/issues/118",
		title: "Open task: CI hackathon · Issue #118 · KTH/devops-course",
		tags: [LinkTag.Development],
	},
	{
		url: "https://computinged.wordpress.com/2019/02/04/inverse-live-coding-a-practice-for-teaching-web-development/",
		title: "Inverse Live Coding: A practice for learning web development | Computing Education Research Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.freecodecamp.org/how-i-went-from-newbie-to-software-engineer-in-9-months-while-working-full-time-460bd8485847",
		title: "How I went from newbie to Software Engineer in 9 months while working full time",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb",
		title: "You Are Not Google – Bradfield",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.freecodecamp.org/learn-the-fundamentals-of-a-good-developer-mindset-in-15-minutes-81321ab8a682",
		title: "Learn the fundamentals of a good developer mindset in 15 minutes",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/lukegarrigan/why-codewars-is-the-best-way-to-learn-a-new-programming-language-4216",
		title: "Why Codewars is the best way to learn a new programming language! - DEV Community 👩‍💻👨‍💻",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/programming/comments/cm186o/using_typescript_like_a_pro/",
		title: "Using TypeScript Like A Pro - programming",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/put-your-dev-env-in-github/amp/",
		title: "Please, everyone, put your entire development environment in Github",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.freecodecamp.org/five-important-lessons-from-four-years-as-a-software-developer-9b367f256226",
		title: "Five important lessons from four years as a software developer",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/@alexc73/things-to-consider-when-building-a-product-from-scratch-f5a120bf18a3",
		title: "Building the first product at a startup – Alexander Curtis – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/hmif-itb/introduction-to-application-containerization-1a6df386309e",
		title: "Introduction to application containerization – HMIF ITB Tech – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.freecodecamp.org/the-minimum-viable-product-explained-8f1187ca7cec",
		title: "The Minimum Viable Product, explained. – freeCodeCamp.org",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/walmartlabs/on-a-b-testing-preview-4f594403c774",
		title: "On A/B Testing: Preview – WalmartLabs – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/swlh/why-test-driven-development-tdd-is-the-best-way-for-robust-coding-a1821de51e19",
		title: "Why Test Driven Development (TDD) is the Best Way for Robust Coding.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/@justkrup/deploy-a-docker-container-free-on-heroku-5c803d2fdeb1",
		title: "Deploy A Docker Container Free (on Heroku) – Justin Krup – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/design-and-tech-co/modular-monoliths-a-gateway-to-microservices-946f2cbdf382",
		title: "Modular Monoliths — A Gateway to Microservices – Design and Tech.Co – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://stackshare.io/tools/trending",
		title: "Trending Open Source & SaaS Tools | StackShare | StackShare",
		tags: [LinkTag.Development],
	},
	{
		url: "https://opensource.com/article/19/4/devops-pipeline",
		title: "A beginner's guide to building DevOps pipelines with open source tools | Opensource.com",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.bitsrc.io/why-i-chose-vue-over-react-f1507fa8e382",
		title: "Why I Chose Vue over React – Bits and Pieces",
		tags: [LinkTag.Development],
	},
	{
		url: "https://swizec.com/blog/immutable-data/swizec/7613",
		title: "Do you really need immutable data? - A geek with a hat",
		tags: [LinkTag.Development],
	},
	{
		url: "https://karl-voit.at/2017/09/23/orgmode-as-markup-only/",
		title: "Org-Mode Is One of the Most Reasonable Markup Languages to Use for Text",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.netlify.com/products/dev/",
		title: "Netlify Dev | Netlify",
		tags: [LinkTag.Development],
	},
	{
		url: "https://codebushi.com/gatsby-starters/",
		title: "Gatsby.js Starters and Templates | Code Bushi",
		tags: [LinkTag.Development],
	},
	{
		url: "https://html5up.net/",
		title: "HTML5 UP! Responsive HTML5 and CSS3 Site Templates",
		tags: [LinkTag.Development],
	},
	{
		url: "https://slides.com/",
		title: "Slides – Create and share presentations online",
		tags: [LinkTag.Development],
	},
	{
		url: "https://learndigital.withgoogle.com/digitalgarage/courses/data_tech",
		title: "Courses List - Digital Garage",
		tags: [LinkTag.Development],
	},
	{
		url: "https://explainprogrammerhumor.com/",
		title: "Explain Programmer Humor",
		tags: [LinkTag.Development],
	},
	{
		url: "http://chamook.lol/",
		title: "Chamook (now on the internet!)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://conemu.github.io/",
		title: "ConEmu - Handy Windows Terminal",
		tags: [LinkTag.Development],
	},
	{
		url: "http://www.cs.otago.ac.nz/staffpriv/ok/Joe-Hates-OO.htm",
		title: "Why OO Sucks",
		tags: [LinkTag.Development],
	},
	{
		url: "http://troubles.md/posts/wasm-is-not-a-stack-machine/",
		title: "WebAssembly Troubles part 1: WebAssembly Is Not a Stack Machine",
		tags: [LinkTag.Development],
	},
	{
		url: "https://daneden.github.io/animate.css/",
		title: "Animate.css",
		tags: [LinkTag.Development],
	},
	{
		url: "https://developer.github.com/v3/",
		title: "GitHub API v3 | GitHub Developer Guide",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.interviewcake.com/sorting-algorithm-cheat-sheet",
		title: "Sorting algorithm reference, for coding interviews and computer science classes | Interview Cake",
		tags: [LinkTag.Development],
	},
	{
		url: "https://material.io/design/introduction/#principles",
		title: "Introduction - Material Design",
		tags: [LinkTag.Development],
	},
	{
		url: "https://picsum.photos/",
		title: "Lorem Picsum",
		tags: [LinkTag.Development],
	},
	{
		url: "https://itnext.io/why-concept-of-immutability-is-so-damn-important-for-a-beginner-front-end-developer-8da85b565c8e",
		title: "Why concept of immutability is so awfully important for a beginner front-end developer?",
		tags: [LinkTag.Development],
	},
	{
		url: "https://lab.github.com/",
		title: "GitHub Learning Lab",
		tags: [LinkTag.Development],
	},
	{
		url: "https://writing.markchristian.org/2019/04/29/personal-web-sites/?c=1",
		title: "You should have a personal web site - ideas & ramblings",
		tags: [LinkTag.Development],
	},
	{
		url: "https://pspdfkit.com/blog/2019/benefits-of-a-monorepo/",
		title: "The Many Benefits of Using a Monorepo | Inside PSPDFKit",
		tags: [LinkTag.Development],
	},
	{
		url: "https://wiki.postgresql.org/wiki/Don%27t_Do_This",
		title: "Don't Do This - PostgreSQL wiki",
		tags: [LinkTag.Development],
	},
	{
		url: "https://idursun.com/posts/zero_to_kubernetes/",
		title: "Zero to Kubernetes on Azure",
		tags: [LinkTag.Development],
	},
	{
		url: "https://maddiestone.github.io/AndroidAppRE/reversing_intro.html",
		title: "Android App Reverse Engineering 101 | Learn to reverse engineer Android applications!",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dfhack.readthedocs.io/en/stable/docs/Introduction.html#installing-dfhack",
		title: "Introduction and Overview — DFHack 0.44.12-r2 documentation",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/mifki/df-twbt",
		title: "mifki/df-twbt: Text Will Be Text",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/humblebundles/comments/bgxtdk/humble_fullstack_web_development_bundle/",
		title: "Humble Full-Stack Web Development Bundle : humblebundles",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.nethack.org/common/git.html",
		title: "NetHack 3.6.2: Git",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ohshitgit.com/",
		title: "Oh, shit, git!",
		tags: [LinkTag.Development],
	},
	{
		url: "https://svelte.dev/blog/virtual-dom-is-pure-overhead",
		title: "Virtual DOM is pure overhead",
		tags: [LinkTag.Development],
	},
	{
		url: "https://portal.azure.com/#blade/Microsoft_Azure_Billing/FreeServicesBlade",
		title: "Free services - Microsoft Azure",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.information-age.com/ultimate-guide-devops-123482326/",
		title: "The ultimate guide to DevOps –– everything an enterprise needs to know",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/flant-com/werf-devops-tool-d3f1251a65ab",
		title: "Announcing werf — a missing part for CI/CD systems – Flant – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.klipse.tech/clojure/2019/05/10/java-is-confusing-clojure-is-simple.html",
		title: "Java is confusing, Clojure is simple.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.freecodecamp.org/how-to-leverage-your-react-skills-with-static-site-generator-gatsby-js-81843e928606",
		title: "How to leverage your React skills with static site generator Gatsby.js",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/javinpaul/top-20-string-coding-problems-from-programming-job-interviews-493m",
		title: "Top 20 String Coding Problems from Programming Job Interviews - DEV Community 👩‍💻👨‍💻",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/better-programming/the-one-programming-language-to-rule-them-all-620366df2805",
		title: "The One Programming Language to Rule Them All – Better Programming – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.marktechpost.com/free-resources/",
		title: "Free Resources | MarkTechPost",
		tags: [LinkTag.Development],
	},
	{
		url: "http://blog.cleancoder.com/uncle-bob/2019/07/22/WhyWontIt.html",
		title: "Clean Coder Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://sijinjoseph.com/programmer-competency-matrix/",
		title: "Programmer Competency Matrix | Sijin Joseph",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/linux_gaming/comments/9oqq3w/guide_migrating_to_linux_in_2019/",
		title: "Guide: Migrating to Linux in 2019 : linux_gaming",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/tkssharma/medium-com-tkssharma-react/home",
		title: "React JS – Javascript Developers – Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://hackernoon.com/goodbye-redux-26e6a27b3a0b",
		title: "Goodbye Redux - By Jack R. Scott",
		tags: [LinkTag.Development],
	},
	{
		url: "https://hackernoon.com/",
		title: "Hacker Noon",
		tags: [LinkTag.Development],
	},
	{
		url: "https://webpack.js.org/guides/code-splitting/",
		title: "Code Splitting | webpack",
		tags: [LinkTag.Development],
	},
	{
		url: "http://itsnat.sourceforge.net/php/spim/spi_manifesto_en.php",
		title: "The Single Page Interface Manifesto",
		tags: [LinkTag.Development],
	},
	{
		url: "https://martinfowler.com/",
		title: "martinfowler.com",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.polemicdigital.com/view-source-quickly-compare-raw-html-rendered-dom/",
		title: "View Source: Why it Still Matters and How to Quickly Compare it to a Rendered DOM | Polemic Digital",
		tags: [LinkTag.Development],
	},
	{
		url: "https://roadmap.sh/",
		title: "Developer Roadmaps - roadmap.sh",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.irccloud.com/",
		title: "IRCCloud",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.gislounge.com/openlayers-geospatial-javascript-library/",
		title: "Openlayers: Geospatial JavaScript Library - GIS Lounge",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.blog/2020-06-18-introducing-github-super-linter-one-linter-to-rule-them-all/",
		title: "Introducing GitHub Super Linter: one linter to rule them all - The GitHub Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/swlh/the-hitchhikers-guide-to-next-js-fd7aa14ae8d0",
		title: "The Hitchhiker’s Guide to Next.js - The Startup - Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://missing.csail.mit.edu/2020/editors/",
		title: "Editors (Vim) · the missing semester of your cs education",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.erlang-solutions.com/blog/why-elixir-is-the-programming-language-you-should-learn-in-2020.html",
		title: "Why Elixir is the Programming Language You Should Learn in 2020 | Erlang Solution blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/@biratkirat/step-8-the-boy-scout-rule-robert-c-martin-uncle-bob-9ac839778385",
		title: "Step 8: The Boy Scout Rule ~Robert C. Martin (Uncle Bob)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading",
		title: "Introducing Hot Reloading · React Native",
		tags: [LinkTag.Development],
	},
	{
		url: "https://kwokchain.com/2020/06/19/why-figma-wins/",
		title: "Why Figma Wins - kwokchain",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.theodinproject.com/",
		title: "Your Career in Web Development Starts Here | The Odin Project",
		tags: [LinkTag.Development],
	},
	{
		url: "https://opensource.com/article/19/8/webassembly-speed-code-reuse",
		title: "WebAssembly for speed and code reuse | Opensource.com",
		tags: [LinkTag.Development],
	},
	{
		url: "https://clojurecademy.com/courses",
		title: "All Courses | Clojurecademy",
		tags: [LinkTag.Development],
	},
	{
		url: "https://itnext.io/getting-started-with-clojure-e8f207ff8eab",
		title: "Getting Started with Clojure - ITNEXT",
		tags: [LinkTag.Development],
	},
	{
		url: "https://itrevolution.com/love-letter-to-clojure-part-1/",
		title: "Love Letter To Clojure (Part 1) | Gene Kim",
		tags: [LinkTag.Development],
	},
	{
		url: "https://itnext.io/react-lifting-state-up-is-killing-your-app-3ad6f0e1213d",
		title: "React: Lifting state up is killing your app - ITNEXT",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.datadoghq.com/product/integrations/#all",
		title: "Instantly see into all your systems, apps, and services | Datadog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly",
		title: "What does O(log n) mean exactly? - Stack Overflow",
		tags: [LinkTag.Development],
	},
	{
		url: "http://www.stilldrinking.com/programming-sucks",
		title: "Programming Sucks",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=21765528",
		title: "Ask HN: Fun Tech Book Recommendations? | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://observablehq.com/",
		title: "The magic notebook for exploring data / Observable",
		tags: [LinkTag.Development],
	},
	{
		url: "https://observablehq.com/@observablehq/observables-not-javascript",
		title: "Observable’s not JavaScript / Observable / Observable",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.namecheap.com/domains/",
		title: "Domain Registration | Register a domain name - Namecheap",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/akshay35c/productive-tools-for-web-development-4bd5",
		title: "Productive Tools🚀 For Web Development😎 - DEV Community 👩‍💻👨‍💻",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/webdev/comments/f8wusz/vuejs_the_documentary/",
		title: "Vue.js: The Documentary. : webdev",
		tags: [LinkTag.Development],
	},
	{
		url: "https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab",
		title: "Optimizing Performance – React",
		tags: [LinkTag.Development],
	},
	{
		url: "https://education.github.com/pack/offers",
		title: "GitHub Student Developer Pack - GitHub Education",
		tags: [LinkTag.Development],
	},
	{
		url: "https://developers.google.com/web/progressive-web-apps/checklist",
		title: "Progressive Web App Checklist  |  Web  |  Google Developers",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/",
		title: "How Browsers Work: Behind the scenes of modern web browsers - HTML5 Rocks",
		tags: [LinkTag.Development],
	},
	{
		url: "https://developers.google.com/web/tools/lighthouse/audits/dom-size?utm_source=lighthouse&utm_medium=devtools",
		title: "Uses An Excessive DOM Size  |  Tools for Web Developers",
		tags: [LinkTag.Development],
	},
	{
		url: "https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape",
		title: "Normalizing State Shape · Redux",
		tags: [LinkTag.Development],
	},
	{
		url: "http://reagent-project.github.io/docs/master/ManagingState.html",
		title: "Managing state: atoms, cursors, Reactions, and tracking",
		tags: [LinkTag.Development],
	},
	{
		url: "https://purelyfunctional.tv/guide/state-in-re-frame/#tools",
		title: "Where to Store State in Re-frame?",
		tags: [LinkTag.Development],
	},
	{
		url: "https://redux.js.org/faq",
		title: "FAQ Index · Redux",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/hugoduncan/criterium",
		title: "GitHub - hugoduncan/criterium: Benchmarking library for clojure",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.maketecheasier.com/install-use-i3-window-manager-ubuntu/",
		title: "Install and Use i3 Window Manager on Ubuntu - Make Tech Easier",
		tags: [LinkTag.Development],
	},
	{
		url: "https://i3wm.org/docs/4.12/userguide.html#_using_i3",
		title: "i3: i3 User’s Guide",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.computerhope.com/shortcut/chrome.htm",
		title: "Google Chrome shortcut keys",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.maketecheasier.com/vim-keyboard-shortcuts-cheatsheet/",
		title: "Vim Keyboard Shortcuts Cheatsheet - Make Tech Easier",
		tags: [LinkTag.Development],
	},
	{
		url: "https://snapcraft.io/store",
		title: "Install Linux apps using the Snap Store | Snapcraft",
		tags: [LinkTag.Development],
	},
	{
		url: "https://bestofjs.org/",
		title: "Best of JavaScript",
		tags: [LinkTag.Development],
	},
	{
		url: "https://bestofjs.org/projects/reselect",
		title: "Best of JavaScript",
		tags: [LinkTag.Development],
	},
	{
		url: "https://gist.github.com/staltz/868e7e9bc2a7b8c1f754",
		title: "The introduction to Reactive Programming you've been missing",
		tags: [LinkTag.Development],
	},
	{
		url: "https://weblogs.asp.net/dixin/understanding-all-javascript-module-formats-and-tools",
		title: "Dixin's Blog - Understanding (all) JavaScript module formats and tools",
		tags: [LinkTag.Development],
	},
	{
		url: "https://andrewrondeau.com/blog/2020/04/take-home-vs-whiteboard-coding-the-problem-is-bad-interviews",
		title: "Take-home vs whiteboard coding: The problem is bad interviews - Andrew Rondeau",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/",
		title: "GitHub Protips: Tips, tricks, hacks, and secrets from Lee Reilly - The GitHub Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/",
		title: "Blogged Answers: Redux - Not Dead Yet! · Mark's Dev Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/coreybutler/nvm-windows",
		title: "coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/nodejs/node-gyp#on-windows",
		title: "nodejs/node-gyp: Node.js native addon build tool",
		tags: [LinkTag.Development],
	},
	{
		url: "https://m.imgur.com/gallery/vqUQ5",
		title: "I would buy them all... - Imgur",
		tags: [LinkTag.Development],
	},
	{
		url: "https://sonic-pi.net/",
		title: "Sonic Pi - The Live Coding Music Synth for Everyone",
		tags: [LinkTag.Development],
	},
	{
		url: "http://rethread.art/#",
		title: "rethread",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/how-to-make-programming-a-daily-habit/",
		title: "How to Make Programming a Daily Habit",
		tags: [LinkTag.Development],
	},
	{
		url: "https://jeffhuang.com/designed_to_last/",
		title: "This Page is Designed to Last: A Manifesto for Preserving Content on the Web",
		tags: [LinkTag.Development],
	},
	{
		url: "https://instadeq.com/blog/posts/things-end-users-care-about-but-programmers-dont/",
		title: "Things end users care about but programmers don't | Instadeq Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://entrepreneurshandbook.co/how-we-got-into-y-combinator-a7d0f0183307",
		title: "4 Crucial Keys to Get Into Y Combinator - Entrepreneur's Handbook",
		tags: [LinkTag.Development],
	},
	{
		url: "https://archive.org/details/gamesourcecode",
		title: "Game Source Code Collection : Free Software : Free Download, Borrow and Streaming : Internet Archive",
		tags: [LinkTag.Development],
	},
	{
		url: "https://legion.stanford.edu/",
		title: "Legion Programming System",
		tags: [LinkTag.Development],
	},
	{
		url: "https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4",
		title: "When a rewrite isn’t: rebuilding Slack on the desktop",
		tags: [LinkTag.Development],
	},
	{
		url: "https://wordsandbuttons.online/index.html",
		title: "Words and buttons online",
		tags: [LinkTag.Development],
	},
	{
		url: "https://towardsdatascience.com/i-wish-i-read-this-book-when-i-first-started-out-in-data-science-a47196329cec",
		title: "I Wish I Read This Book When I First Started Out in Data Science",
		tags: [LinkTag.Development],
	},
	{
		url: "https://qz.com/work/1201384/everyone-claims-they-are-following-agile-methods-but-few-actually-do/",
		title: "Everyone claims they are following “agile methods” but few actually do — Quartz at Work",
		tags: [LinkTag.Development],
	},
	{
		url: "https://shields.io/category/build/",
		title: "Shields.io: Quality metadata badges for open source projects",
		tags: [LinkTag.Development],
	},
	{
		url: "https://shields.io/",
		title: "Shields.io: Quality metadata badges for open source projects",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.sherlock.stanford.edu/posts/when-setting-an-environment-variable-gives-you-a-40-x-speedup",
		title: "Sherlock changelog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://joearms.github.io/#2016-03-21%20Why%20Markdown%20Sucks",
		title: "Joe's Blog — a non-linear personal web notebook",
		tags: [LinkTag.Development],
	},
	{
		url: "https://tomcam.github.io/postgres/",
		title: "psql command line tutorial and cheat sheet | postgres",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=25113440",
		title: "PostgreSQL psql command line tutorial and cheat sheet | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.pgcli.com/",
		title: "pgcli",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/okbob/pspg",
		title: "GitHub - okbob/pspg: Unix pager (with very rich functionality) designed for work with tables. Designed for PostgreSQL, but MySQL is supported too. Works well with pgcli too. Can be used as CSV or TSV viewer too. It supports searching, selecting rows, columns, or block and export selected area to clipboard.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/tomcam/postgres#timing",
		title: "GitHub - tomcam/postgres: The least you need to know about Postgres",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.sanalabs.com/",
		title: "Unlock your company’s knowledge | Sana",
		tags: [LinkTag.Development],
	},
	{
		url: "https://multiply.co/",
		title: "Multiply: Superpower your work with AI",
		tags: [LinkTag.Development],
	},
	{
		url: "https://momang.io/en",
		title: "Momang - Awesome sales tool for consultants",
		tags: [LinkTag.Development],
	},
	{
		url: "https://hypertype.co/",
		title: "Hypertype",
		tags: [LinkTag.Development],
	},
	{
		url: "https://quartr.com/",
		title: "Quartr - Investor Relations, but Convenient",
		tags: [LinkTag.Development],
	},
	{
		url: "https://oneflow.com/",
		title: "Oneflow - Less contract admin, more contract magic",
		tags: [LinkTag.Development],
	},
	{
		url: "https://spacio.ai/",
		title: "Spacio - There is a better way to design buildings",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.gethume.com/",
		title: "Hume",
		tags: [LinkTag.Development],
	},
	{
		url: "https://supernormal.com/",
		title: "Supernormal - AI That Writes Your Meeting Notes",
		tags: [LinkTag.Development],
	},
	{
		url: "https://stability.ai/",
		title: "Stability AI",
		tags: [LinkTag.Development],
	},
	{
		url: "https://vitejs.dev/guide/comparisons.html",
		title: "Comparisons | Vite",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/topics/javascript",
		title: "javascript · GitHub Topics · GitHub",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/trekhleb/javascript-algorithms",
		title: "GitHub - trekhleb/javascript-algorithms: 📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/practical-tutorials/project-based-learning#javascript",
		title: "practical-tutorials/project-based-learning: Curated list of project-based tutorials",
		tags: [LinkTag.Development],
	},
	{
		url: "https://webdesign.tutsplus.com/build-a-simple-weather-app-with-vanilla-javascript--cms-33893t",
		title: "Build a Simple Weather App With Vanilla JavaScript | Envato Tuts+",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/30-seconds/30-seconds-of-code",
		title: "30-seconds/30-seconds-of-code: Short code snippets for all your development needs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/goldbergyoni/nodebestpractices",
		title: "goldbergyoni/nodebestpractices: :white_check_mark: The Node.js best practices list (July 2023)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/denoland/deno",
		title: "denoland/deno: A modern runtime for JavaScript and TypeScript.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/oven-sh/bun",
		title: "oven-sh/bun: Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/nestjs/nest",
		title: "nestjs/nest: A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications with TypeScript/JavaScript 🚀",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/mermaid-js/mermaid",
		title: "mermaid-js/mermaid: Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/leonardomso/33-js-concepts",
		title: "leonardomso/33-js-concepts: 📜 33 JavaScript concepts every developer should know.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/strapi/strapi",
		title: "strapi/strapi: 🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript/TypeScript, fully customizable and developer-first.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/topics/webapp",
		title: "webapp · GitHub Topics",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.theodinproject.com/lessons/foundations-setting-up-git",
		title: "Setting up Git | The Odin Project",
		tags: [LinkTag.Development],
	},
	{
		url: "https://roadmap.sh/full-stack",
		title: "Full Stack Developer Roadmap",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/underscorecode/javascript-bundlers-an-in-depth-comparative-is-webpack-still-the-best-bundler-in-2021-59jk",
		title: "JavaScript Bundlers: An in-depth comparative 👍👎 Is Webpack still the best bundler in 2021? 📦 - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://moiva.io/?npm=esbuild+rollup+vite+webpack",
		title: "esbuild vs rollup vs vite vs webpack: Detailed NPM Packages Comparison | Performance, Security & Trends",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/vitejs/vite",
		title: "GitHub - vitejs/vite: Next generation frontend tooling. It's fast!",
		tags: [LinkTag.Development],
	},
	{
		url: "https://nodejs.org/dist/latest-v20.x/docs/api/http.html#httpcreateserveroptions-requestlistener",
		title: "HTTP | Node.js v20.8.0 Documentation",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.youtube.com/watch?v=ko2Tl7cDl6E",
		title: "Amazing ways to use hand electric planers as 3 types of processing machines - YouTube",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.youtube.com/watch?v=MviF3g0UCdE",
		title: "Don't Make a 2x4 Workbench - YouTube",
		tags: [LinkTag.Development],
	},
	{
		url: "https://tim.blog/",
		title: "The Blog of Author Tim Ferriss - Tim Ferriss's 4-Hour Workweek and Lifestyle Design Blog. Tim is an author of 5 #1 NYT/WSJ bestsellers, investor (FB, Uber, Twitter, 50+ more), and host of The Tim Ferriss Show podcast (400M+ downloads)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.marginalia.nu/",
		title: "www.marginalia.nu @ marginalia.nu",
		tags: [LinkTag.Development],
	},
	{
		url: "https://wiki.thingsandstuff.org/Woodwork",
		title: "Woodwork - Things and Stuff Wiki",
		tags: [LinkTag.Development],
	},
	{
		url: "https://syncthing.net/",
		title: "Syncthing",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.loom.com/",
		title: "Free screen recorder for Mac and PC | Loom",
		tags: [LinkTag.Development],
	},
	{
		url: "https://fullstackopen.com/en/",
		title: "Full stack open",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/create-a-serverless-chatgpt-app/",
		title: "How to Create a Serverless ChatGPT App in 10 Minutes",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.sequoiacap.com/article/ai-powered-developer-tools/",
		title: "Developer Tools 2.0 | Sequoia Capital US/Europe",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/jon_snow789/20-github-repositories-every-developer-should-bookmarkhigh-value-resources-4jm6",
		title: "21 Github repositories every developer should bookmark(high value resources) - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://learning.postman.com/docs/postman-flows/gs/flows-overview/",
		title: "Postman Flows overview | Postman Learning Center",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/codecrafters-io/build-your-own-x#build-your-own-database",
		title: "GitHub - codecrafters-io/build-your-own-x: Master programming by recreating your favorite technologies from scratch.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/",
		title: "The State of JS 2022: Front-end Frameworks",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/how-to-communicate-with-ai-tools-prompt-engineering/",
		title: "How to Communicate with ChatGPT – A Guide to Prompt Engineering",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/javinpaul/my-favorite-courses-to-learn-docker-and-containers-in-depth-11fp",
		title: "My Favorite Courses to Learn Docker and Containers in Depth - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.tomshardware.com/news/openai-sends-shutdown-letter-to-gpt4free",
		title: "OpenAI Threatens Popular GitHub Project With Lawsuit Over API Use | Tom's Hardware",
		tags: [LinkTag.Development],
	},
	{
		url: "https://graphql.org/",
		title: "GraphQL - A query language for your API",
		tags: [LinkTag.Development],
	},
	{
		url: "https://react.dev/learn/add-react-to-an-existing-project",
		title: "Add React to an Existing Project – React",
		tags: [LinkTag.Development],
	},
	{
		url: "https://laravel.com/docs/10.x/vite",
		title: "Asset Bundling (Vite) - Laravel - The PHP Framework For Web Artisans",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/traccar/traccar",
		title: "GitHub - traccar/traccar: Traccar GPS Tracking System",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/how-to-build-a-routing-system-in-php/",
		title: "How to Build a Routing System for a PHP App from Scratch",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.infoq.com/news/2022/11/engineer-manager-pendulum/",
		title: "The Engineer/Manager Pendulum: Charity Majors at QCon SF",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/metno/NWPdocs/wiki",
		title: "MEPS Forecast - MET Norway",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.pragmaticengineer.com/github-copilot-alternatives/",
		title: "Github Copilot and ChatGPT alternatives - The Pragmatic Engineer",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
		title: "ChatGPT Prompt Engineering for Developers - DeepLearning.AI",
		tags: [LinkTag.Development],
	},
	{
		url: "http://mdt.aawgames.com/index.asp?Platform=0",
		title: "Mini-Dungeon Tome Adventure Assistant - AAW Games",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.kickstarter.com/projects/adventureaweek/mini-dungeon-tome-ii/rewards",
		title: "Mini-Dungeon Tome II by AAW Games — Kickstarter",
		tags: [LinkTag.Development],
	},
	{
		url: "https://joplinapp.org/",
		title: "Joplin",
		tags: [LinkTag.Development],
	},
	{
		url: "https://publish.obsidian.md/hub/05+-+Concepts/%F0%9F%97%82%EF%B8%8F+05+-+Concepts",
		title: "🗂️ 05 - Concepts - Obsidian Hub - Obsidian Publish",
		tags: [LinkTag.Development],
	},
	{
		url: "https://logseq.com/",
		title: "Logseq: A privacy-first, open-source knowledge base",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dev.to/kumo/deploy-a-nextjs-app-for-free-on-aws-with-sst-3g28",
		title: "Deploy a NEXT.js app for FREE on AWS with SST - DEV Community",
		tags: [LinkTag.Development],
	},
	{
		url: "https://hackernoon.com/the-7-software-architecture-books-experienced-developers-need-to-read",
		title: "The 7 Software Architecture Books Experienced Developers Need to Read | HackerNoon",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.truenas.com/",
		title: "TrueNAS - Welcome to the Open Source Storage Era",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.pcforalla.se/article/1725277/raspberry-pi-nas.html",
		title: "Raspberry Pi-guide: Så bygger du en billig nas-server - PCforAlla",
		tags: [LinkTag.Development],
	},
	{
		url: "https://codestitch.app/complete-guide-to-freelancing",
		title: "CodeStitch | High quality HTML and CSS only component library | No Frameworks, No Configurations",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ray.run/glossary",
		title: "Software Testing Glossary: Key Terms & Definitions for QA Testers",
		tags: [LinkTag.Development],
	},
	{
		url: "https://paulonteri.com/thoughts/how-to/custom-domain-with-gmail",
		title: "How to Use Your Own Custom Domain with Gmail for Free | Paul Onteri",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.namecheap.com/domains/registration/results/?domain=Jdksoanbaj.se&_gl=1*c1mx0b*_ga*NDI0NTIwNjg0LjE2OTQxNjgzNTE.*_ga_7DMJMG20P8*MTY5NDE2ODM1MC4xLjEuMTY5NDE2ODQwMy43LjAuMA..",
		title: "Namecheap",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/diagrams-as-code-with-mermaid-github-and-vs-code/",
		title: "How to Create Diagrams as Code with Mermaid, GitHub, and Visual Studio Code",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/reactjs/comments/16wy2so/learning_good_software_architecture_as_a_junior/",
		title: "Learning good software architecture as a junior without a mentor: reactjs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.patterns.dev/",
		title: "Patterns.dev - Modern Web App Design Patterns",
		tags: [LinkTag.Development],
	},
	{
		url: "http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
		title: "Clean Coder Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.ryujinx.org/",
		title: "Ryujinx - Blog",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.tensorflow.org/js",
		title: "TensorFlow.js | Machine Learning for JavaScript Developers",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript",
		title: "The Birth & Death of JavaScript",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.the-diy-life.com/make-a-tiny-raspberry-pi-based-cyberdeck/",
		title: "Make A Tiny Raspberry Pi Based Cyberdeck - The DIY Life",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/dvcoolarun/web2pdf",
		title: "GitHub - dvcoolarun/web2pdf: CLI to convert Webpages to PDFs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=39263664",
		title: "Ask HN: What have you built with LLMs? | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/franekmagiera/just-tell-me",
		title: "GitHub - franekmagiera/just-tell-me: short youtube video summaries",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ap.www.namecheap.com/",
		title: "My Account Panel - Namecheap.com",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.astro.build/en/concepts/islands/#creating-an-island",
		title: "Astro Islands | Docs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://trpc.io/docs/concepts",
		title: "Concepts | tRPC",
		tags: [LinkTag.Development],
	},
	{
		url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
		title: "Using custom elements - Web APIs | MDN",
		tags: [LinkTag.Development],
	},
	{
		url: "https://handlebarsjs.com/guide/#nested-input-objects",
		title: "Introduction | Handlebars",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/janl/mustache.js",
		title: "janl/mustache.js: Minimal templating with {{mustaches}} in JavaScript",
		tags: [LinkTag.Development],
	},
	{
		url: "https://tailwindcss.com/docs/gap",
		title: "Gap - Tailwind CSS",
		tags: [LinkTag.Development],
	},
	{
		url: "https://tailwindui.com/documentation",
		title: "Documentation - Tailwind UI",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/vercel/turbo",
		title: "vercel/turbo: Incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust – including Turbopack and Turborepo.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://toml.io/en/",
		title: "TOML: Tom's Obvious Minimal Language",
		tags: [LinkTag.Development],
	},
	{
		url: "http://demo.showdownjs.com/",
		title: "Showdown Live Editor",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=39605670",
		title: "Doks – Build a Docs Site | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://getdoks.org/docs/start-here/getting-started/",
		title: "Getting Started — Doks",
		tags: [LinkTag.Development],
	},
	{
		url: "https://react.dev/reference/react-dom/server/renderToStaticMarkup",
		title: "renderToStaticMarkup – React",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.mkdocs.org/",
		title: "MkDocs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://starlight.astro.build/",
		title: "Starlight 🌟 Build documentation sites with Astro",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ui.aceternity.com/docs/add-utilities",
		title: "Add Utilities",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ui.shadcn.com/",
		title: "shadcn/ui",
		tags: [LinkTag.Development],
	},
	{
		url: "https://transform.tools/html-to-jsx",
		title: "HTML to JSX",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ai.google.dev/gemini-api/docs/prompting-strategies",
		title: "Prompt design strategies  |  Google AI for Developers",
		tags: [LinkTag.Development],
	},
	{
		url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions",
		title: "Prompt engineering techniques with Azure OpenAI - Azure OpenAI Service | Microsoft Learn",
		tags: [LinkTag.Development],
	},
	{
		url: "https://cookbook.openai.com/",
		title: "OpenAI Cookbook",
		tags: [LinkTag.Development],
	},
	{
		url: "https://cookbook.openai.com/articles/techniques_to_improve_reliability",
		title: "Techniques to improve reliability | OpenAI Cookbook",
		tags: [LinkTag.Development],
	},
	{
		url: "https://platform.openai.com/docs/guides/prompt-engineering",
		title: "Prompt engineering - OpenAI API",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.ai.se/sv/projekt/gpt-sw3",
		title: "GPT-SW3 | AI Sweden",
		tags: [LinkTag.Development],
	},
	{
		url: "https://huggingface.co/AI-Sweden-Models",
		title: "AI-Sweden-Models (AI Sweden Model Hub)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://browser.dataspace.copernicus.eu/?zoom=13&lat=60.36583&lng=18.59797&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fsh.dataspace.copernicus.eu%2Fogc%2Fwms%2Fa91f72b5-f393-4320-bc0f-990129bd9e63&datasetId=S2_L2A_CDAS&fromTime=2024-02-10T00%3A00%3A00.000Z&toTime=2024-02-10T23%3A59%3A59.999Z&layerId=1_TRUE_COLOR&demSource3D=%22MAPZEN%22&cloudCoverage=30&dateMode=SINGLE",
		title: "Copernicus Browser (Global mosaics data, i.e. satellite imagery)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.lineageos.org/",
		title: "LineageOS – LineageOS Android Distribution",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.kdnuggets.com/large-language-models-explained-in-3-levels-of-difficulty",
		title: "Large Language Models Explained in 3 Levels of Difficulty - KDnuggets",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.freecodecamp.org/news/learn-sveltekit-full-course/",
		title: "Learn SvelteKit in 2 hours",
		tags: [LinkTag.Development],
	},
	{
		url: "https://groq.com/",
		title: "GroqChat",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.turingpost.com/p/fod41",
		title: "GPU's rival? What is Language Processing Unit (LPU)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://swedroid.se/google-gemma-har-oppen-kallkod-och-kan-koras-lokalt-pa-pc/",
		title: "Google Gemma har öppen källkod och kan köras lokalt på PC - Swedroid",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=39458264",
		title: "The killer app of Gemini Pro 1.5 is using video as an input | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.hackster.io/news/an-easy-button-for-ai-ae9ca7f767fc",
		title: "An Easy Button for AI - Hackster.io",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.anthropic.com/news/claude-3-family",
		title: "Introducing the next generation of Claude \\ Anthropic",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.sweclockers.com/forum/trad/1711803-helgsnack-vad-kan-man-gora-med-gamla-datorer",
		title: "Helgsnack: Vad kan man göra med gamla datorer? - Nyhetskommentarer",
		tags: [LinkTag.Development],
	},
	{
		url: "https://pkl-lang.org/",
		title: "Pkl :: Pkl Docs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.cloudflare.com/developer-platform/products/",
		title: "Cloudflare Developer Platform Product Offering | Cloudflare",
		tags: [LinkTag.Development],
	},
	{
		url: "https://suno.com/me",
		title: "Suno",
		tags: [LinkTag.Development],
	},
	{
		url: "https://platform.stability.ai/pricing",
		title: "Stability AI - Developer Platform",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/homeassistant/comments/1c7wlkl/raspberry_pi_or_mini_pc/",
		title: "Raspberry Pi or mini PC? : r/homeassistant",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.home-assistant.io/",
		title: "Home Assistant",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.proxmox.com/en/",
		title: "Proxmox - Powerful open-source server solutions",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/webdev/comments/1c8d13z/is_there_a_more_sane_way_to_write_this_with/",
		title: "Is there a more sane way to write this with tailwind? : r/webdev",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/webdev/comments/1c9hyug/are_we_overcomplicating_web_dev_in_2024/",
		title: "Are we overcomplicating web dev in 2024? : r/webdev",
		tags: [LinkTag.Development],
	},
	{
		url: "https://getpublii.com/",
		title: "The Static CMS with GUI for Secure, Fast, and GDPR Compliant Websites.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.microsoft.com/en-us/research/project/vasa-1/",
		title: "VASA-1 - Microsoft Research",
		tags: [LinkTag.Development],
	},
	{
		url: "https://matheusportela.com/double-entry-bookkeeping-as-a-directed-graph",
		title: "Double-Entry Bookkeeping as a Directed Graph · Matheus Portela",
		tags: [LinkTag.Development],
	},
	{
		url: "https://git-lfs.com/",
		title: "Git Large File Storage | Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.netlify.com/platform/core/cli/",
		title: "Netlify CLI",
		tags: [LinkTag.Development],
	},
	{
		url: "https://sslip.io/",
		title: "Welcome to sslip.io",
		tags: [LinkTag.Development],
	},
	{
		url: "https://fly.io/",
		title: "Deploy app servers close to your users · Fly",
		tags: [LinkTag.Development],
	},
	{
		url: "https://fireship.io/courses/javascript/node-basics/",
		title: "Node.js Quickstart",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.deno.com/runtime/",
		title: "Getting Started",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.deno.com/deploy/manual/",
		title: "Deploy Quick Start",
		tags: [LinkTag.Development],
	},
	{
		url: "https://twind.dev/",
		title: "Twind",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/MightyMoud/sidekick",
		title: "MightyMoud/sidekick: Bare metal to production ready in mins; your own fly server on your VPS.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.openhistoricalmap.org/#map=4/55.60/17.23&layers=O&date=1996-04-19&daterange=1824-01-01,2024-12-31",
		title: "OpenHistoricalMap",
		tags: [LinkTag.Development],
	},
	{
		url: "https://openfreemap.org/",
		title: "OpenFreeMap",
		tags: [LinkTag.Development],
	},
	{
		url: "https://inleed.io/notification-channels",
		title: "Inleed Uptime",
		tags: [LinkTag.Development, LinkTag.Web],
	},
	{
		url: "https://bun.sh/docs/runtime/nodejs-apis",
		title: "Node.js compatibility – Runtime | Bun Docs",
		tags: [LinkTag.Development, LinkTag.Web],
	},
	{
		url: "https://tryhackme.com/room/offensivesecurityintro",
		title: "TryHackMe | Offensive Security Intro",
		tags: [LinkTag.Development],
	},
	{
		url: "https://deno.com/deploy",
		title: "Deno Deploy | Deno",
		tags: [LinkTag.Development],
	},
	{
		url: "https://fresh.deno.dev/docs/getting-started/deploy-to-production",
		title: "Deploy to production | Fresh docs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://neon.tech/",
		title: "Neon Serverless Postgres — Ship faster",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.mapbox.com/",
		title: "Mapbox | Maps, Navigation, Search, and Data",
		tags: [LinkTag.Development],
	},
	{
		url: "https://en.wikipedia.org/wiki/ASCII#Printable_character_table",
		title: "ASCII - Wikipedia",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.regular-expressions.info/catastrophic.html",
		title: "Runaway Regular Expressions: Catastrophic Backtracking",
		tags: [LinkTag.Development],
	},
	{
		url: "https://phosphoricons.com/?q=%22github%22",
		title: "Phosphor Icons",
		tags: [LinkTag.Development],
	},
	{
		url: "https://regexone.com/lesson/nested_groups?",
		title: "RegexOne - Learn Regular Expressions - Lesson 12: Nested groups",
		tags: [LinkTag.Development],
	},
	{
		url: "https://regexcrossword.com/tutorial/1",
		title: "Tutorial: 1",
		tags: [LinkTag.Development],
	},
	{
		url: "https://antfu.me/",
		title: "Anthony Fu",
		tags: [LinkTag.Development],
	},
	{
		url: "https://madebyevan.com/",
		title: "Made by Evan",
		tags: [LinkTag.Development],
	},
	{
		url: "https://cline.bot/",
		title: "Cline - AI Autonomous Coding Agent for VS Code",
		tags: [LinkTag.Development],
	},
	{
		url: "https://verpex.com/blog/website-tips/free-public-apis-for-developers?ref=dailydev",
		title: "Free Public APIs for Developers",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.opensourcealternative.to/?page=2",
		title: "Open Source Alternatives To Proprietary Software",
		tags: [LinkTag.Development],
	},
	{
		url: "https://noelberry.ca/index.html",
		title: "Noel Berry",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.techinterviewhandbook.org/software-engineering-interview-guide/",
		title: "Software Engineer interviews: Everything you need to prepare | Tech Interview Handbook",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://www.techinterviewhandbook.org/coding-interview-study-plan/",
		title: "Coding interview study plan - what to study and practice based on time left | Tech Interview Handbook",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://www.techinterviewhandbook.org/grind75/",
		title: "Grind 75 - A better Blind 75 you can customize, by the author of Blind 75",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://www.techinterviewhandbook.org/coding-interview-techniques/",
		title: "Top techniques to approach and solve coding interview questions | Tech Interview Handbook",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://www.techinterviewhandbook.org/behavioral-interview-rubrics/",
		title: "How candidates are evaluated in behavioral interviews at top tech companies | Tech Interview Handbook",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://www.hackerrank.com/domains/algorithms?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=problem-solving",
		title: "Solve Algorithms | HackerRank",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://80000hours.org/career-guide/",
		title: "Research-backed guide to a fulfilling career that does good",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://80000hours.org/agi/guide/when-will-agi-arrive/",
		title: "The case for AGI by 2030 - 80,000 Hours",
		tags: [LinkTag.Development, LinkTag.Career],
	},
	{
		url: "https://backstage.io/",
		title: "Backstage Software Catalog and Developer Platform",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.thoughtworks.com/radar",
		title: "Technology Radar | Guide to technology landscape | Thoughtworks",
		tags: [LinkTag.Development],
	},
	{
		url: "https://spinnaker.io/",
		title: "Spinnaker",
		tags: [LinkTag.Development],
	},
	{
		url: "https://backstage.io/docs/features/techdocs/",
		title: "TechDocs Documentation | Backstage Software Catalog and Developer Platform",
		tags: [LinkTag.Development],
	},
	{
		url: "https://swagger.io/",
		title: "API Documentation & Design Tools for Teams | Swagger",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.restapitutorial.com/httpstatuscodes",
		title: "HTTP Status Codes - REST API Tutorial",
		tags: [LinkTag.Development],
	},
	{
		url: "https://app.codecrafters.io/catalog",
		title: "Catalog | CodeCrafters",
		tags: [LinkTag.Development],
	},
	{
		url: "https://newsletter.techworld-with-milan.com/",
		title: "Tech World With Milan Newsletter | Dr Milan Milanović | Substack",
		tags: [LinkTag.Development],
	},
	{
		url: "https://restfulapi.net/",
		title: "What is REST?: REST API Tutorial",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.amigoscode.com/p/the-5-layers-of-software-explained",
		title: "The 5 Layers of Software Explained",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.builder.io/blog/mcp-server",
		title: "How to Build Your Own MCP Server",
		tags: [LinkTag.Development],
	},
	{
		url: "https://exercism.org/",
		title: "Exercism",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.codewars.com/",
		title: "Codewars - Achieve mastery through coding practice and developer mentorship",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.phind.com/",
		title: "Phind",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.railway.com/quick-start",
		title: "Quick Start Tutorial | Railway Docs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://blog.dailydoseofds.com/p/5-powerful-mcp-servers",
		title: "5 Powerful MCP Servers - by Avi Chawla",
		tags: [LinkTag.Development],
	},
	{
		url: "https://replit.com/learn/100-days-of-python",
		title: "100 Days of Code - The Complete Python Course - Replit",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=44194709",
		title: "Disconnect from FAANG, Connect to Free | Hacker News",
		tags: [LinkTag.Development],
	},
	{
		url: "https://leetcode.com/",
		title: "LeetCode - The World's Leading Online Programming Learning Platform",
		tags: [LinkTag.Development],
	},
	{
		url: "https://medium.com/@shivambhadani_/system-design-for-beginners-everything-you-need-in-one-article-c74eb702540b",
		title: "System Design For Beginners: Everything You Need in One Article | by Shivam Bhadani | Medium",
		tags: [LinkTag.Development],
	},
	{
		url: "https://hub.docker.com/repositories/ffloven",
		title: "Docker Hub",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.wasmtime.dev/",
		title: "Introduction - Wasmtime",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.assemblyscript.org/",
		title: "AssemblyScript",
		tags: [LinkTag.Development],
	},
	{
		url: "https://terminaltrove.com/glow/",
		title: "glow terminal markdown reader",
		tags: [LinkTag.Development],
	},
	{
		url: "https://astro.build/",
		title: "Astro",
		tags: [LinkTag.Development],
	},
	{
		url: "https://orpc.unnoq.com/",
		title: "oRPC - Typesafe APIs Made Simple 🪄",
		tags: [LinkTag.Development],
	},
	{
		url: "https://evanhahn.com/scripts-i-wrote-that-i-use-all-the-time/",
		title: "Scripts I wrote that I use all the time",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.claude.com/product/claude-code",
		title: "Claude Code | Claude",
		tags: [LinkTag.Development],
	},
	{
		url: "https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/",
		title: "</> htmx ~ How Did REST Come To Mean The Opposite of REST?",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/webdev/comments/1m7o1n7/how_do_you_protect_your_tiny_side_project_from/",
		title: "How Do You Protect Your Tiny Side Project From $10,000 Bills? (DDoS) : r/webdev",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.reddit.com/r/webdev/comments/1mcldwt/what_do_you_use_to_host_your_projects/",
		title: "What do you use to host your projects ? : r/webdev",
		tags: [LinkTag.Development],
	},
	{
		url: "https://levelup.gitconnected.com/monorepo-vs-multi-repo-vs-git-submodule-vs-git-subtree-a-complete-guide-for-developers-961535aa6d4c",
		title: "Monorepo vs Multi-repo vs Git submodule vs Git Subtree: A Complete Guide for Developers | by Subodh Shetty | Nov, 2025 | Level Up Coding",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.staticapps.org/articles/defining-static-web-apps/",
		title: "Defining Static Web Apps",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/developit/htm",
		title: "GitHub - developit/htm: Hyperscript Tagged Markup: JSX alternative using standard tagged templates, with compiler support.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://alpinetoolbox.com/examples/navbar",
		title: "Alpine Toolbox - Navbar",
		tags: [LinkTag.Development],
	},
	{
		url: "https://dribbble.com/",
		title: "Dribbble - Discover the World’s Top Designers & Creative Professionals",
		tags: [LinkTag.Development],
	},
	{
		url: "https://mobbin.com/",
		title: "Mobbin — UI & UX design inspiration for mobile & web apps",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.behance.net/",
		title: "Showcase, Discover, and Hire Creatives :: Behance",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.awwwards.com/",
		title: "Awwwards - Website Awards - Best Web Design Trends",
		tags: [LinkTag.Development],
	},
	{
		url: "https://unsplash.com/",
		title: "Unsplash - Free High-Resolution Photos",
		tags: [LinkTag.Development],
	},
	{
		url: "https://iconmonstr.com/",
		title: "iconmonstr - Free simple icons for your next project",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.pexels.com/",
		title: "Free Stock Photos, Royalty Free Stock Images & Copyright Free Pictures · Pexels",
		tags: [LinkTag.Development],
	},
	{
		url: "https://coolors.co/",
		title: "Coolors - The super fast color palettes generator!",
		tags: [LinkTag.Development],
	},
	{
		url: "https://realpython.com/python-mcp/",
		title: "Python MCP Server: Connect LLMs to Your Data – Real Python",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.thebioneer.com/",
		title: "The Bioneer - SuperFunctional Training",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://www.youtube.com/@TheBioneer",
		title: "The Bioneer - YouTube",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://www.specialized.com/se/sv/mens-stumpjumper-comp-alloy-29--12-speed/p/157617?color=236397-157617",
		title: "Men's Stumpjumper Comp Alloy 29 - 12-speed | Specialized.com",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://www.friluftsframjandet.se/",
		title: "Låt äventyret börja - Friluftsfrämjandet",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://luffarligan.se/",
		title: "Välkommen till Luffarligan",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://pocketyoga.com/pose/",
		title: "Yoga Poses Dictionary | Pocket Yoga",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://www.vecteezy.com/members/lioputrahard729797",
		title: "Creative Content by Lio putra",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://regionuppsala.se/infoteket/hitta-tips-och-verktyg/tecken-som-alternativ-och-kompletterande-kommunikation/",
		title: "Gratis webbkurs i Tecken som alternativ och kompletterande kommunikation (TAKK)",
		tags: [LinkTag.Language],
	},
	{
		url: "https://streamio.com/api/v1/videos/6363c2eb6f8d8dd4b8000004/public_show?player_id=59eed3d56f8d8d20b5000001&link=true",
		title: "Streamio - Intro till Tecken som AKK",
		tags: [LinkTag.Language],
	},
	{
		url: "https://morkborg.com/content/",
		title: "MÖRK BORG CONTENT",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://2e.aonprd.com/PlayersGuide.aspx",
		title: "Player's Guide - Archives of Nethys: Pathfinder 2nd Edition Database",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://koboldpress.com/blog/",
		title: "Delve into the Depths in the Kobold Blog - Kobold Press",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/shadowdarkrpg/shadowdark-rpg-old-school-gaming-modernized/description",
		title: "Shadowdark RPG: Old-School Gaming, Modernized by The Arcane Library — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://slyflourish.com/the_lazy_dungeon_master_cc.html",
		title: "The Lazy Dungeon Master",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/ultimategamemaster/the-ultimate-game-master-screen?ref=section-homepage-view-more-recommendations-p1",
		title: "The Ultimate Game Master Screen: Customizable & Affordable by The Ultimate Game Master — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://dungeon-world.com/",
		title: "Dungeon World - Wave hands like a muppet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://troypress.com/the-top-10-things-to-know-when-switching-from-5e-to-dungeon-world/",
		title: "The Top 10 Things to Know When Switching from 5e to Dungeon World – Troy Press",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://paizo.com/community/blog/v5748dyo6sico?ORC-License-The-Final-Version-is-Here&fbclid=IwAR2hx4LgbUr1PhyUYLvBbB848z1MdWYGRVhfiiqVoqUJ1jbrHBdyaSdteB0",
		title: "paizo.com - Community / Paizo Blog",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/1192053011/drakar-och-demoner-dragonbane/posts/3854620",
		title: "Drakar och Demoner / Dragonbane by Free League » The Foundry Modules Are Out! — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/1192053011/drakar-och-demoner-dragonbane/description",
		title: "Drakar och Demoner / Dragonbane by Free League — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/1192053011/drakar-och-demoner-dragonbane/posts/3880061?ref=ksr_email_backer_project_update_registered_users",
		title: "Drakar och Demoner / Dragonbane by Free League » Play Dragonbane on Roll20 — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://docs.google.com/document/u/0/d/1Cd5-o8xKs_Wl3Rm1SV7MYVSCwhXaCHRxmP85v-p_sLU/mobilebasic",
		title: "DCC Compiled Free Resource List 2023",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.google.com/search?client=ms-android-samsung&sca_esv=563166832&sxsrf=AB5stBjeRNwPOK89rcH-8-JDHUA8q9s3Hg:1694030806491&q=the+dungeon+of+black+company&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjR_tXD5JaBAxXYRvEDHSx2COgQ0pQJegQICxAB&biw=412&bih=670&dpr=2.63",
		title: "the dungeon of black company – Google Sök",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://necroticgnome.com/products/old-school-essentials-basic-rules?fbclid=IwAR3mWVpnlWPrkerh9E_eRFiCi1kUyaOU1-oqQ740QHoRglwDFMF4fzVn9kI",
		title: "Old-School Essentials Basic Rules – Necrotic Gnome",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://drive.google.com/drive/u/0/mobile/folders/1On4fOqTFTSrK81QQhsslGAP2n3J343Kg?usp=sharing&fbclid=IwAR2rKXKxTnh5WAZXP_9legwGRlt--QAipKNijrfjYQtjNa1YHLH_OJ3RjNY",
		title: "Dragonbane – Google Drive",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://online.anyflip.com/afgs/qptc/mobile/index.html#p=14",
		title: "Tales from the Yawning Portal",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://online.anyflip.com/afgs/hzos/mobile/index.html#p=90",
		title: "Out of the Abyss",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://dm-tuz.tumblr.com/",
		title: "Dungeon Master Tuz's Tools of Trade",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://preview.drivethrurpg.com/en/publisher/19384/dario-corallo",
		title: "DriveThruRPG - Dario Corallo",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://campaignwiki.org/wiki/LinksToWisdom/HomePage",
		title: "Campaign Wiki LinksToWisdom: HomePage",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.goodreads.com/book/show/43822502-the-monsters-know-what-they-re-doing",
		title: "The Monsters Know What They're Doing: Combat Tactics for Dungeon Masters by Keith Ammann",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dropbox.com/sh/1g8no5gr18mu6so/AACk4aAX0BFPQ8CysSulc66Ta?dl=0",
		title: "Lost Adventures Stretch Goals - Dropbox",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dropbox.com/sh/7vrq4wp44xe5m20/AABkMtqF9uLg10FPY13At25Aa?dl=0",
		title: "Lost Adventures Core Files - Dropbox",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/hitpointpress/the-deck-of-many-animated-spells-tarot-and-more-for-5e?",
		title: "The Deck of Many Animated Spells, Tarot and More for 5e DND by Hit Point Press — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/hitpointpress/the-deck-of-many-animated-spells-tarot-and-more-for-5e?fbclid=IwAR2Oq6VSIp64hrGr-m4j3tdYjij81-bEwQmY18BS7gmvzDSgQi1lA85yIS0&ref=c00yhh",
		title: "The Deck of Many Animated Spells, Tarot and More for 5e DND by Hit Point Press — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dmsguild.com/",
		title: "Dungeon Masters Guild -",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://app.astraltabletop.com/play/-M4FLDTb0qpRieZtY70F/portal",
		title: "Application | Astral TableTop",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.thingiverse.com/thing:2863900",
		title: "D&D Coins - Dungeons & Dragons - 5E Doublesided by Lil_Doodie - Thingiverse",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dmsguild.com/m/product/287008",
		title: "Dungeon Masters Guild",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dmsguild.com/m",
		title: "Dungeon Masters Guild",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dropbox.com/sh/hiavsiegq28xd7u/AABcMGhKcr8CYgeKaHK1ZDzJa?dl=0",
		title: "Dropbox - D&D App Files - Simplify your life",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/DMAcademy/comments/9isnmy/best_free_apps_for_a_dungeon_master/",
		title: "Best free apps for a dungeon master? - DMAcademy",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://donjon.bin.sh/fantasy/town/",
		title: "donjon; Fantasy Town Generator",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kassoon.com/dnd/town-generator/",
		title: "Town Generator - Kassoon.com",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.google.com/search?q=anyflip+dungeons+and+dragons&oq=anyflip+dungeons+and+dragons&aqs=chrome.0.69i59j0l3j69i60.3514j0j7&sourceid=chrome&ie=UTF-8",
		title: "anyflip dungeons and dragons - Google Search",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dndbeyond.com/posts/325-why-run-combat-in-the-theater-of-the-mind",
		title: "Why Run Combat in the Theater of the Mind? - Posts - D&D Beyond",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dndbeyond.com/posts/355-how-to-run-combat-in-the-theater-of-the-mind",
		title: "How to Run Combat in the Theater of the Mind - Posts - D&D Beyond",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://blackmagiccraft.wordpress.com/shop/",
		title: "Black Magic Craft",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://kobold.club/fight/#/encounter-builder",
		title: "Kobold Fight Club: The first rule of KFC is 'Yip yip!'",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/DnD/wiki/world_and_map_generation/",
		title: "reddit: the front page of the internet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.patreon.com/Manuel_Boria",
		title: "Manuel Boria is creating 3D Printable Miniatures for Tabletop Games | Patreon",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.patreon.com/M3DM/posts",
		title: "Mia Kay is creating FREE Tabletop Miniatures for 3D Printing | Patreon",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "http://anyflip.com/suxb/riws",
		title: "D&D 5e Princes of the Apocalypse | AnyFlip",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://hobbyinspired.com/dd-5e-adventures/",
		title: "Guide to D&D 5e Adventures for 2019 (Officially Premade Campaigns)",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://media.wizards.com/2015/downloads/dnd/EE_PlayersCompanion.pdf",
		title: "EE_PlayersCompanion.pdf",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "http://archive.wizards.com/default.asp?x=dnd/downloads",
		title: "Downloads",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://rpg.stackexchange.com/questions/63297/is-it-necessary-to-purchase-all-the-dd-5th-edition-books-to-have-access-to-all",
		title: "dnd 5e - Is it necessary to purchase all the D&D 5th edition books to have access to all player character options? - Role-playing Games Stack Exchange",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://azgaar.github.io/Fantasy-Map-Generator/",
		title: "Azgaar's Fantasy Map Generator v 1.0",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://2minutetabletop.com/product-category/battle-maps/?orderby=popularity&fbclid=IwAR0YWZa6x583GXzB0BvHSybbeX4UpgZYPzivyNWfpoyyUSgq0jNcsCaw658",
		title: "Battle Maps Archives – 2-Minute Tabletop",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dndbeyond.com/posts/750-new-players-guide-how-to-play-d-d-online",
		title: "New Player's Guide: How to Play D&D Online - Posts - D&D Beyond",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://dnd.wizards.com/remote",
		title: "Remote D&D Tips and Tricks | Dungeons & Dragons",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/Roll20/comments/a5dxm8/what_do_i_need_to_prepare_for_playing_on_roll20/",
		title: "What do I need to prepare for playing on Roll20? : Roll20",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://donjon.bin.sh/d20/demographics/",
		title: "donjon; d20 Demographics Calculator",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://watabou.itch.io/medieval-fantasy-city-generator",
		title: "Medieval Fantasy City Generator by watabou",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://inkarnate.com/maps#/new?skin=fantasy-world",
		title: "Inkarnate - Maps",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.pixels-dice.com/kickstarter",
		title: "Kickstarter — Pixels",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://rpg.stackexchange.com/questions/45316/are-melee-combatants-limited-to-standing-around-saying-i-attack",
		title: "Are melee combatants limited to standing around saying \"I attack\"? - Role-playing Games Stack Exchange",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.lastgaspgrimoire.com/in-corpathium/",
		title: "In Cörpathium",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/DnD/wiki/mobile_apps",
		title: "reddit: the front page of the internet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/DnD/wiki/gift_guide",
		title: "reddit: the front page of the internet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/criticalrole/wiki/matthewmercer",
		title: "reddit: the front page of the internet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.kickstarter.com/projects/shadowdarkrpg/shadowdark-rpg-old-school-gaming-modernized",
		title: "Shadowdark RPG: Old-School Gaming, Modernized by The Arcane Library — Kickstarter",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.thearcanelibrary.com/collections/shadowdark-rpg",
		title: "Shadowdark RPG - The Arcane Library",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://deathbringerrpg.com/",
		title: "Deathbringer",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://slyflourish.com/eight_steps_2023.html",
		title: "The Eight Steps of the Lazy DM – 2023 Review: SlyFlourish.com",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://morkborg.com/",
		title: "MÖRK BORG",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://paizo.com/pathfinder",
		title: "Pathfinder Roleplaying Game: Unleash Your Hero! | Paizo",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://thealexandrian.net/",
		title: "The Alexandrian",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://mcdm-rpg.backerkit.com/hosted_preorders",
		title: "Preorder The MCDM RPG on BackerKit",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://bookriot.com/thought-provoking-fantasy-books/",
		title: "8 of the Most Thought-Provoking Fantasy Books Ever Written",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://alphaspel.se/1908-modiphius-entertainment/",
		title: "Modiphius Entertainment - Alphaspel",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/shadowdark/",
		title: "Shadowdark RPG",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.drivethrurpg.com/en/mylibrary",
		title: "DriveThruRPG - The Largest RPG Download Store!",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://bundleofholding.com/download/list",
		title: "Bundle of Holding - Wizard's Cabinet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://forgottenmaps.web.app/map/Faerun?fbclid=IwZXh0bgNhZW0CMTEAAR3GC9Lg-l2weDsbkxY41NIt1GSU1V_khiE4wGRnV6Q_UJqM3jnZElJthY4_aem_AThFxLhWmbWrbycMvlqCV-wkq9g7sFbLZjC6sFVoNB6fOj_9ABw4eb94JodBxPCoU6DEqIosQ9crQQls2hx9V2Eb",
		title: "Faerun Interactive Map",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.aidedd.org/atlas/index.php?map=R&l=1&fbclid=IwZXh0bgNhZW0CMTEAAR2bjWqcNNB4lYdXVC8trsxS7Ga57wSUOh4gRgdh1WjVxWQiAEYMPPkMvfc_aem_ATiklOYFJVZ59kRGJ8pz5CLxsVHeVQi3CfEPMu0Uj5HvhkIyMs0f1Ou80TRkLZEHhiq93N39dXwY8WSO6XI0dibf",
		title: "Sword Coast Interactive Map",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.strahdreloaded.com/Introduction/Introduction",
		title: "Introduction - Curse of Strahd: Reloaded",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://drive.google.com/drive/u/0/mobile/folders/1kVoAMR8TiO3CXFYcigFN2B6zk62xcnv9",
		title: "Warcraft 5E Project Folder – Google Drive",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.runehammer.online/crown-skull-rpg",
		title: "Crown & Skull RPG | Runehammer Games",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://foundryvtt.com/purchase/",
		title: "Purchase | Foundry Virtual Tabletop",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://app.roll20.net/campaigns/new",
		title: "New Campaign | Roll20: Online virtual tabletop",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://imgur.com/a/simon-st-lenhag-part-1-complete-high-res-cGibB#0",
		title: "Simon Stålenhag | Part 1 | Complete High Res - Creativity post - Imgur",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dungeonscrawl.com/",
		title: "Dungeon Scrawl | Free Online D&D Map Maker",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://anyflip.com/homepage/yfqjo",
		title: "DnDArchive Official Homepage",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://anyflip.com/bookcase/zfrzk/",
		title: "Dungeons & Dragons Fifth Edition Collection Bookcase - Flip Book| AnyFlip",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.dungeonscrawl.com/",
		title: "Dungeon Scrawl - Free Online D&D Map Maker",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://melefors.com/collections/all-glaskonst",
		title: "All glaskonst | Kosta Boda glaskonst | Galleri Melefors säljes",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.redbubble.com/people/DingHuArt/explore?page=1&sortOrder=recent",
		title: "DingHuArt Shop | Redbubble",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.reddit.com/r/DungeonsAndDragons/comments/13a7lwy/ocart_zombie_corpse_ball_isometric_sketchbook/",
		title: "[OC][ART] Zombie Corpse Ball [Isometric sketchbook]: DungeonsAndDragons",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://wolfard.com/",
		title: "Wolfard Glass Blowing",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://hackaday.com/2023/05/31/moon-phase-lamp-uses-rotating-shade/",
		title: "Moon Phase Lamp Uses Rotating Shade | Hackaday",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.sleepo.se/produkter/pace-dagbadd-natur-linen-200cm?gclid=CjwKCAjwp6CkBhB_EiwAlQVyxSPZBcQ4GL75xTUJxfJ5x8ZQ1DgqaN7aNbuhMa0YqvNT0etRRODsUhoCbksQAvD_BwE",
		title: "Karup Design Pace Dagbädd Natur/Linen 200cm - Sleepo",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://alltomtradgard.expressen.se/tradgard/tradgardsdesign/rita-oversiktsplan/",
		title: "Rita en översiktsplan och planera din trädgård | Allt om Trädgård",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://alltomtradgard.expressen.se/topic/designinspiration/",
		title: "Designinspiration | Allt om Trädgård",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.boktugg.se/bok/9789127355330/",
		title: "Allt om trädgård : planering, växter, skötsel",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://bodillanden.com/2019/10/27/att-skapa-rum-pa-liten-yta/",
		title: "Att skapa rum på liten yta! – BM idé & trädgård Blogg",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://larportal.svenskttra.se/utbildning/introduktion-att-valja-tra",
		title: "Att välja trä",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.paradoxmuseumstockholm.com/",
		title: "Paradox Museum Stockholm - Sverige | Hötorget T-banestation",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.kurser.se/kurs/keramik-huddinge/c3778-d83482",
		title: "Keramikkurs i Huddinge - Hitta din kurs här!",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.scsstockholm.se/sv/nya-formanscykel",
		title: "Förmånscykel från Specialized - En förmån full av värde - Specialized Concept Store",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.bga.se/mattbestallt-glas-1?gad=1&gclid=CjwKCAjwtuOlBhBREiwA7agf1mb1pMSJI8srPluzZiBrK8TYHgmW7oryIQLWHsevn80WC41XLMCl_xoC8gEQAvD_BwE",
		title: "Köp Måttbeställt glas här - BGA.SE",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.hiveworkshop.com/threads/how-do-i-download-warcraft-3-classic-thats-not-the-reforged-version.332396/",
		title: "How Do I Download Warcraft 3 Classic That's Not The Reforged Version | HIVE",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.kickstarter.com/projects/kakapopo/lotd",
		title: "Lord of the Dice, the One Cube to replace them all... by Sam Zhao — Kickstarter",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.slattergubben.se/produkter/fagelmatare-tillbehor/bygga-egen-fagelmatare",
		title: "Köp eller bygg din egen fågelmatare! - Slåttergubben",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.reddit.com/r/boardgames/comments/185iar8/large_wall_war_of_the_ring_board/?share_id=MUcYVabd0pAhRjBNDGkc5&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1",
		title: "Large wall war of the ring board : r/boardgames",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.reddit.com/r/boardgames/comments/18u3xeo/war_of_the_ring/",
		title: "War of the Ring : r/boardgames",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.dreamstime.com/stock-photo-japanese-signage-made-wood-written-meaning-usual-route-way-image68740548",
		title: "Japanese signage stock photo. Image of copy, pattern - 68740548",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.123rf.com/photo_76979506_noren-curtains-at-the-entrance-to-a-japanese-restaurant-.html",
		title: "Noren Curtains At The Entrance To A Japanese Restaurant. Stock Photo, Picture And Royalty Free Image. Image 76979506.",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://www.japanvisitor.com/images/content_images/noren20193.jpg",
		title: "noren20193.jpg (838×559)",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://mellowpine.com/diy/diy-geometric-wood-wall-art/",
		title: "DIY Geometric Wood Wall Art Tutorial - MellowPine",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://simplyexplained.com/blog/how-i-built-an-nfc-movie-library-for-my-kids/",
		title: "How I Built an NFC Movie Library for my Kids | Simply Explained",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://superfront.com/sv_se/journal/sideboards/inspiration-besta",
		title: "Ikea Bestå inspiration - Se våra sideboards | Superfront",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://trendenser.se/2021/03/local-hero-pashyllan-norrgavel/",
		title: "Local hero: Påshyllan Norrgavel - Trendenser",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://ikebanatool.com/blogs/feature/kenzan",
		title: "Kenzan - Ikebana Tool",
		tags: [LinkTag.Inspiration],
	},
	{
		url: "https://sv.m.wikipedia.org/wiki/Kognat_(lingvistik)",
		title: "Kognat (lingvistik) – Wikipedia",
		tags: [LinkTag.Language],
	},
	{
		url: "https://www.su.se/sok-kurser-och-program/lin131-1.412064?open-collapse-boxes=course-time-table",
		title: "Introduktion till lingvistik - Stockholms universitet",
		tags: [LinkTag.Language],
	},
	{
		url: "https://libris.kb.se/bib/20167622",
		title: "Svenska skrivregler - Libris",
		tags: [LinkTag.Language],
	},
	{
		url: "https://larportal.halmstad.se/courses/takktss",
		title: "Digital kurs i TAKK/TSS - Pedagog Halmstads lärportal",
		tags: [LinkTag.Language],
	},
	{
		url: "https://penpal.jp/go/mangajin/Mangajin-issue-01.pdf",
		title: "penpal.jp/go/mangajin/Mangajin-issue-01.pdf",
		tags: [LinkTag.Language],
	},
	{
		url: "https://standardebooks.org/ebooks/rudyard-kipling/the-jungle-book",
		title: "The Jungle Book, by Rudyard Kipling - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/seneca/dialogues/aubrey-stewart",
		title: "Dialogues, by Seneca. Translated by Aubrey Stewart - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks?tags%5B%5D=comedy&tags%5B%5D=fantasy&tags%5B%5D=fiction&tags%5B%5D=mystery&tags%5B%5D=nonfiction&tags%5B%5D=philosophy&tags%5B%5D=satire&tags%5B%5D=science-fiction&query=Jar&sort=newest&view=grid&per-page=48",
		title: "Browse Standard Ebooks - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/fyodor-dostoevsky/the-idiot/eva-m-martin",
		title: "The Idiot, by Fyodor Dostoevsky. Translated by Eva M. Martin - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/adam-smith/the-wealth-of-nations",
		title: "The Wealth of Nations, by Adam Smith - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/plato/dialogues/benjamin-jowett",
		title: "Dialogues, by Plato. Translated by Benjamin Jowett - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/jules-verne/topsy-turvy/j-g-ogilvie",
		title: "Topsy-Turvy, by Jules Verne. Translated by J. G. Ogilvie - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/dante-alighieri/the-divine-comedy/henry-wadsworth-longfellow",
		title: "The Divine Comedy, by Dante Alighieri. Translated by Henry Wadsworth Longfellow - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/alexandre-dumas/the-count-of-monte-cristo/chapman-and-hall",
		title: "The Count of Monte Cristo, by Alexandre Dumas. Translated by Chapman and Hall - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/philip-wylie/gladiator",
		title: "Gladiator, by Philip Wylie - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/f-scott-fitzgerald/the-great-gatsby",
		title: "The Great Gatsby, by F. Scott Fitzgerald - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/leo-tolstoy/war-and-peace/louise-maude_aylmer-maude",
		title: "War and Peace, by Leo Tolstoy. Translated by Louise Maude and Aylmer Maude - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/epictetus/discourses/george-long",
		title: "Discourses, by Epictetus. Translated by George Long - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/jonathan-swift/gullivers-travels",
		title: "Gulliver’s Travels, by Jonathan Swift - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/l-frank-baum/the-marvelous-land-of-oz",
		title: "The Marvelous Land of Oz, by L. Frank Baum - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/charlotte-bronte/jane-eyre",
		title: "Jane Eyre, by Charlotte Brontë - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/mark-twain/the-adventures-of-tom-sawyer",
		title: "The Adventures of Tom Sawyer, by Mark Twain - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/jane-austen/sense-and-sensibility",
		title: "Sense and Sensibility, by Jane Austen - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/victor-hugo/les-miserables/isabel-f-hapgood",
		title: "Les Misérables, by Victor Hugo. Translated by Isabel F. Hapgood - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/fyodor-dostoevsky/the-brothers-karamazov/constance-garnett",
		title: "The Brothers Karamazov, by Fyodor Dostoevsky. Translated by Constance Garnett - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/l-frank-baum/the-wonderful-wizard-of-oz",
		title: "The Wonderful Wizard of Oz, by L. Frank Baum - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/ludwig-wittgenstein/tractatus-logico-philosophicus/c-k-ogden",
		title: "Tractatus Logico-Philosophicus, by Ludwig Wittgenstein. Translated by C. K. Ogden - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/alexandre-dumas/the-black-tulip/p-f-collier-and-son",
		title: "The Black Tulip, by Alexandre Dumas. Translated by P. F. Collier and Son - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/arthur-conan-doyle/the-adventures-of-sherlock-holmes",
		title: "The Adventures of Sherlock Holmes, by Arthur Conan Doyle - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/miguel-de-cervantes-saavedra/don-quixote/john-ormsby",
		title: "Don Quixote, by Miguel de Cervantes Saavedra. Translated by John Ormsby - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/h-g-wells/the-war-of-the-worlds",
		title: "The War of the Worlds, by H. G. Wells - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/hermann-hesse/siddhartha/gunther-olesch_anke-dreher_amy-coulter_stefan-langer_semyon-chaichenets",
		title: "Siddhartha, by Hermann Hesse. Translated by Gunther Olesch, Anke Dreher, Amy Coulter, Stefan Langer, and Semyon Chaichenets - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/robert-louis-stevenson/the-strange-case-of-dr-jekyll-and-mr-hyde",
		title: "The Strange Case of Dr. Jekyll and Mr. Hyde, by Robert Louis Stevenson - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/lewis-carroll/alices-adventures-in-wonderland/john-tenniel",
		title: "Alice’s Adventures in Wonderland, by Lewis Carroll. Illustrated by John Tenniel - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/laozi/tao-te-ching/james-legge",
		title: "Tao Te Ching, by Laozi. Translated by James Legge - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/robert-louis-stevenson/treasure-island",
		title: "Treasure Island, by Robert Louis Stevenson - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/friedrich-nietzsche/beyond-good-and-evil/helen-zimmern",
		title: "Beyond Good and Evil, by Friedrich Nietzsche. Translated by Helen Zimmern - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/h-g-wells/the-time-machine",
		title: "The Time Machine, by H. G. Wells - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/niccolo-machiavelli/the-prince/w-k-marriott",
		title: "The Prince, by Niccolò Machiavelli. Translated by W. K. Marriott - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/herman-melville/moby-dick",
		title: "Moby Dick, by Herman Melville - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://standardebooks.org/ebooks/marcus-aurelius/meditations/george-long",
		title: "Meditations, by Marcus Aurelius. Translated by George Long - Free ebook download - Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover",
		tags: [LinkTag.Language, LinkTag.Books],
	},
	{
		url: "https://japanesetease.net/easy-to-read-manga-for-japanese-beginners-vol-01/",
		title: "Easy to read manga for Japanese beginners Vol. 01 | Japanese Tease",
		tags: [LinkTag.Language],
	},
	{
		url: "https://www.reddit.com/r/latin/comments/knuc4h/a_sanskrit_project_inspired_by_hans_%C3%B8rberg_and/?tl=sv",
		title: "Ett sanskritprojekt inspirerat av Hans Ørberg och det levande latinska samhället : r/latin",
		tags: [LinkTag.Language],
	},
	{
		url: "https://www.isof.se/svenskt-teckensprak/laromedel-och-utbildningsmaterial/det-svenska-teckensprakets-grammatik",
		title: "Det svenska teckenspråkets grammatik | Institutet för språk och folkminnen",
		tags: [LinkTag.Language],
	},
	{
		url: "https://www.textkit.com/greek-latin-forum/viewtopic.php?f=6&p=213636",
		title: "The Textkit Book Collection - Textkit Greek and Latin Forums",
		tags: [LinkTag.Language],
	},
	{
		url: "https://lukesmith.xyz/articles/learn-latin/",
		title: "Learn Latin | Luke's Webpage",
		tags: [LinkTag.Language],
	},
	{
		url: "https://www.printables.com/",
		title: "3D models database | Printables.com",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.reddit.com/r/3Dprinting/wiki/gettingstarted/#wiki_getting_started_with_3d_printing",
		title: "Reddit - Dive into anything",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://thangs.com/designer/Dead.Pixel/3d-model/Battery%20Holder%20with%20optional%20Gridfinity%20base%20-1131060",
		title: "Battery Holder with optional Gridfinity base - 3D model by Dead.Pixel on Thangs",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://thangs.com/designer/Geoshape/3d-model/Umea%20-%20a%20standing%20lamp%20in%20boho%20style-1126279",
		title: "Umea - a standing lamp in boho style - 3D model by Geoshape on Thangs",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://thangs.com/designer/glennovits3d/3d-model/Tactile%20Fidget%20Rings%20%28spinning%20fun%20toy%29-1124970",
		title: "Tactile Fidget Rings (spinning fun toy) - 3D model by glennovits3d on Thangs",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://thangs.com/designer/glennovits3d/3d-model/Drill%20Dust%20Collector%20%28use%20with%20or%20without%20a%20vacuum%20-%20incl.%20alignment%20marks%29-1124969",
		title: "Drill Dust Collector (use with or without a vacuum - incl. alignment marks) - 3D model by glennovits3d on Thangs",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://thangs.com/designer/lollo1188/3d-model/Metric%20screw%20measuring%20device%20M2-M12%28M16-M20-M24%29%2070mm%20%23throwback-1130228",
		title: "Metric screw measuring device M2-M12(M16-M20-M24) 70mm #throwback - 3D model by lollo1188 on Thangs",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.thingiverse.com/thing:4826878",
		title: "Spice Rack Pullout Design Update by spongybob1958 - Thingiverse",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.reddit.com/r/3Dprinting/wiki/slicers/",
		title: "Reddit - Dive into anything",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.yeggi.com/q/hand/",
		title: "\"hand\" 3D Models to Print - yeggi",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://cults3d.com/en/collections/best-3d-model-dragonball",
		title: "🔮 Best STL files 3D printed for Dragon Ball — 102 designs・Cults",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://cults3d.com/en/collections?page=3",
		title: "Top collections made on Cults・Cults",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.3dsourced.com/3d-software/best-stl-editors/",
		title: "7 Best STL Editors in 2024 (Free & Premium) - 3DSourced",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://github.com/SoftFever/OrcaSlicer",
		title: "SoftFever/OrcaSlicer: G-code generator for 3D printers (Bambu, Prusa, Voron, VzBot, RatRig, Creality, etc.)",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.tinkercad.com/dashboard",
		title: "Tinkercad - Dashboard",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://github.com/alicevision/AliceVision",
		title: "alicevision/AliceVision: Photogrammetric Computer Vision Framework",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://blog.octoeverywhere.com/free-remote-access-for-the-creality-ender-v3-ke/",
		title: "Free Creality Ender V3 KE Remote Access - Full Setup Guide",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.reddit.com/r/3Dprinting/comments/nosdsv/i_finally_conquered_petg_heres_yet_another_guide/",
		title: "I finally conquered PETG. Here's yet another guide for dialing it in for those struggling. Never give up hope. : r/3Dprinting",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://makerworld.com/en",
		title: "MakerWorld: Download Free 3D Printing Models",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://blog.prusa3d.com/3d-printing-price-calculator_38905/?read-calc=MTA1MTYw",
		title: "3D Printing Price Calculator - Original Prusa 3D Printers",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.autodesk.com/learn/ondemand/curated/introduction-to-fusion",
		title: "Introduction to Fusion | Autodesk",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.printables.com/model/1102379-filiment-dry-box-storagedown-feeding-system-from-s?fbclid=IwY2xjawHHiRBleHRuA2FlbQIxMQABHWUIvoBsyk0aA0I4o6WIpkl9D-SgXDF5dWBoBJtmIX---sPxoMMggme26Q_aem_NcnaM-1tg3VFJEeFZjh5dA",
		title: "Filiment Dry Box Storage/Down Feeding System From Shelf by Hi_Im_Dave | Download free STL model | Printables.com",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://app.lootstudios.com/my-loots/",
		title: "Loot Studios App - My Loots",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.thingiverse.com/thing:2368959",
		title: "Easy Smartphone Gopro Mount by Pixelle - Thingiverse",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://en.boardgamearena.com/gamepanel?game=wingspan",
		title: "Play Wingspan online from your browser • Board Game Arena",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://rikatillsammans.se/forum/t/lifehacks-for-att-fa-livspusslet-att-fungera-vilka-ar-dina-basta/73939/17",
		title: "Lifehacks för att få livspusslet att fungera | Vilka är dina bästa? - Ett rikt liv bortom pengar - RikaTillsammans Forumet",
		tags: [LinkTag.Finance],
	},
	{
		url: "https://rikatillsammans.se/forum/t/home-hacks-och-andra-tips-som-underlattar-var-vardag/37909",
		title: "Home hacks och andra tips som underlättar vår vardag - Övrigt - RikaTillsammans Forumet",
		tags: [LinkTag.Finance],
	},
	{
		url: "https://rikatillsammans.se/verktyg/fire/",
		title: "Ekonomisk frihet (FIRE): När blir du ekonomisk fri?",
		tags: [LinkTag.Finance],
	},
	{
		url: "https://nvdbpakarta.trafikverket.se/map",
		title: "NVDB på Karta",
		tags: [LinkTag.Maps],
	},
	{
		url: "https://news.ycombinator.com/item?id=43083772",
		title: "List of DRM-Free Bookshops | Hacker News",
		tags: [LinkTag.Books],
	},
	{
		url: "https://news.ycombinator.com/item?id=43073969",
		title: "All Kindles can now be jailbroken | Hacker News",
		tags: [LinkTag.Books],
	},
	{
		url: "https://biblioteket.stockholm.se/titel/1188352",
		title: "Vi skulle ha fjällvandrat — Stockholms stadsbibliotek",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/530415.The_Art_of_Doing_Science_and_Engineering",
		title: "The Art of Doing Science and Engineering: Learning to Learn by Richard Hamming | Goodreads",
		tags: [LinkTag.Books],
	},
	{
		url: "https://archive.org/details/runnyrabbitabill00shel",
		title: "Runny Babbitt by Shel Silverstein | Internet Archive",
		tags: [LinkTag.Books],
	},
	{
		url: "https://issuu.com/osteraker/docs/att_v_ga",
		title: "Att våga by Maria Österåker - Issuu",
		tags: [LinkTag.Books],
	},
	{
		url: "https://thegreatestbooks.org/",
		title: "The Greatest Books of All Time",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.reddit.com/r/suggestmeabook/comments/18g2x6f/what_classic_books_are_absolute_must_reads/",
		title: "What Classic Books are absolute must reads? : r/suggestmeabook",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.reddit.com/r/kindle/comments/iclnu1/free_classic_ebooks_downloads/",
		title: "Free Classic Ebooks Downloads : r/kindle",
		tags: [LinkTag.Books],
	},
	{
		url: "https://archive.org/details/tolkien-j.-the-lord-of-the-rings-harper-collins-ebooks-2010/mode/1up",
		title: "The Lord of the Rings : J.R.R Tolkien : Free Download, Borrow, and Streaming : Internet Archive",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.annalembke.com/dopamine-nation",
		title: "Dopamine Nation by Anna Lembke | Anna Lembke",
		tags: [LinkTag.Books],
	},
	{
		url: "https://oceanofpdf.com/?s=gaiman",
		title: "You searched for gaiman - OceanofPDF",
		tags: [LinkTag.Books],
	},
	{
		url: "https://oceanofpdf.com/",
		title: "Free Download Books",
		tags: [LinkTag.Books],
	},
	{
		url: "https://joeabercrombie.com/",
		title: "Home - Joe Abercrombie",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.reddit.com/r/TrueLit/comments/1fwciah/truelits_100_best_books_of_the_quarter_century/#lightbox",
		title: "Truelit's 100 Best Books of the Quarter Century : r/TrueLit",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.youtube.com/watch?v=5MsznJKTYQc",
		title: "D&D Mayhem with AI Celebs | Artificial Chronicles S1 - YouTube",
		tags: [LinkTag.Ai, LinkTag.Ttrpg],
	},
	{
		url: "https://github.com/cryptomator/cryptomator",
		title: "GitHub - cryptomator/cryptomator: Cryptomator for Windows, macOS, and Linux: Secure client-side encryption for your cloud storage, ensuring privacy and control over your data.",
		tags: [LinkTag.Crypto],
	},
	{
		url: "https://news.ycombinator.com/item?id=42685534",
		title: "Ask HN: Is maintaining a personal blog still worth it? | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://indieweb.org/POSSE",
		title: "POSSE - IndieWeb",
		tags: [LinkTag.Web],
	},
	{
		url: "https://indieweb.org/own_your_data",
		title: "own your data - IndieWeb",
		tags: [LinkTag.Web],
	},
	{
		url: "https://taoofmac.com/",
		title: "Home Page - Tao of Mac",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=41646531",
		title: "Why I still blog after 15 years | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://news.ycombinator.com/item?id=42872276",
		title: "Advice for a friend who wants to start a blog | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://blog.codinghorror.com/five-things-you-didnt-know-about-me-and-my-office/",
		title: "Five Things You Didn't Know About Me (and my office)",
		tags: [LinkTag.Development],
	},
	{
		url: "https://ergaster.org/posts/2024/03/06-welcoming-feedback/",
		title: "Welcoming feedback, where it belongs",
		tags: [LinkTag.Life],
	},
	{
		url: "https://m.webtoo.ls/@astro",
		title: "Astro (@astro@webtoo.ls) - webtoo.ls",
		tags: [LinkTag.Web],
	},
	{
		url: "https://docs.astro.build/en/guides/deploy/",
		title: "Deploy your Astro Site | Docs",
		tags: [LinkTag.Web],
	},
	{
		url: "https://brilliant.org/",
		title: "Brilliant | Learn by doing",
		tags: [LinkTag.Education],
	},
	{
		url: "https://www.pgadmin.org/download/pgadmin-4-macos/",
		title: "Download",
		tags: [LinkTag.Development],
	},
	{
		url: "https://madewithclaude.com/",
		title: "Claude Artifacts",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://www.citationneeded.news/free-and-open-access-in-the-age-of-generative-ai/",
		title: "“Wait, not like that”: Free and open access in the age of generative AI",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://gofastmcp.com/getting-started/welcome",
		title: "Welcome to FastMCP 2.0! - FastMCP",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://docs.docker.com/ai/mcp-catalog-and-toolkit/catalog/",
		title: "Docker MCP Catalog | Docker Docs",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://ampcode.com/manual",
		title: "Owner’s Manual - Amp",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44181700",
		title: "A practical guide to building agents [pdf] | Hacker News",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44182206",
		title: "Show HN: GPT image editing, but for 3D models | Hacker News",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44184849",
		title: "Show HN: App.build, an open-source AI agent that builds full-stack apps | Hacker News",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44159166",
		title: "Cloudlflare builds OAuth with Claude and publishes all the prompts | Hacker News",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44183515",
		title: "Mistral Code | Hacker News",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44163063",
		title: "My AI skeptic friends are all nuts | Hacker News",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://steipete.me/posts/2025/claude-code-is-my-computer",
		title: "Claude Code is My Computer | Peter Steinberger",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://www.openai.fm/",
		title: "OpenAI.fm",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://www.anthropic.com/claude-code",
		title: "Claude Code: Deep Coding at Terminal Velocity \\ Anthropic",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://docs.continue.dev/",
		title: "Introduction | Continue",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44158353",
		title: "Ask HN: How do I learn robotics in 2025? | Hacker News",
		tags: [LinkTag.Robotics],
	},
	{
		url: "https://github.com/henki-robotics/robotics_essentials_ros2",
		title: "henki-robotics/robotics_essentials_ros2: Learn the basics of robotics through hands-on experience using ROS 2 and Gazebo simulation.",
		tags: [LinkTag.Robotics],
	},
	
	{
		url: "https://excalidraw.com/",
		title: "Excalidraw",
		tags: [LinkTag.Development],
	},
	{
		url: "https://docs.amplify.aws/react/start/quickstart/",
		title: "Quickstart - AWS Amplify Gen 2 Documentation",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://docs.amplify.aws/react/start/account-setup/",
		title: "Configure AWS for local development - React - AWS Amplify Gen 2 Documentation",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://www.gyden.io/en/content-hub/a-comprehensive-guide-for-amazon-ecs-ec-2-using-terraform",
		title: "How to setup ECS EC2 with Terraform | Tutorial by Gyden",
		tags: [LinkTag.Infrastructure],
	},
	
	{
		url: "https://trackit.io/cognito-amplify/",
		title: "Authentication Flows with Amazon Cognito & AWS Amplify",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://syang.substack.com/p/what-i-wish-i-could-have-learned",
		title: "What I wish I could have learned before starting using AWS Cognito",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://jwt.io/introduction",
		title: "JSON Web Token Introduction - jwt.io",
		tags: [LinkTag.Development],
	},
	
	{
		url: "https://nodejs.org/en/learn/getting-started/websocket",
		title: "Node.js — Node.js WebSocket",
		tags: [LinkTag.Development],
	},
	{
		url: "https://nodejs.org/en/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs",
		title: "Node.js — How much JavaScript do you need to know to use Node.js?",
		tags: [LinkTag.Development],
	},
	{
		url: "https://12factor.net/backing-services",
		title: "The Twelve-Factor App",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.theodinproject.com/dashboard",
		title: "Dashboard | The Odin Project",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=44221655",
		title: "How I Program with Agents | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://news.ycombinator.com/item?id=44210921",
		title: "The librarian immediately attempts to sell you a vuvuzela | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://www.atlassian.com/blog/productivity/how-to-write-smart-goals",
		title: "How to write SMART goals (with examples)",
		tags: [LinkTag.Career],
	},
	{
		url: "https://fmhy.net/",
		title: "Welcome • freemediaheckyeah",
		tags: [LinkTag.Media],
	},
	{
		url: "https://news.ycombinator.com/item?id=44794508",
		title: "Monitor your security cameras with locally processed AI | Hacker News",
		tags: [LinkTag.Media],
	},
	{
		url: "https://news.ycombinator.com/item?id=44764465",
		title: "Clojure Civitas – Publish Clojure Ideas and Explorations | Hacker News",
		tags: [LinkTag.Media],
	},
	{
		url: "https://oceanofpdf.com/page/2/?s=tim+harford",
		title: "You searched for tim harford - Page 2 of 2 - OceanofPDF",
		tags: [LinkTag.Media],
	},
	
	{
		url: "https://obsidian.md/",
		title: "Obsidian",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf",
		title: "crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf",
		tags: [LinkTag.Career],
	},
	{
		url: "https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_soft_skills_-_v6.pdf",
		title: "crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_soft_skills_-_v6.pdf",
		tags: [LinkTag.Career],
	},
	{
		url: "https://www.awseducate.com/student/s/content",
		title: "Learner Dashboard Page",
		tags: [LinkTag.Infrastructure],
	},
	{
		url: "https://jsoncanvas.org/",
		title: "JSON Canvas — An open file format for infinite canvas data.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://newsletter.pragmaticengineer.com/p/software-engineering-with-llms-in-2025?utm_source=tldrnewsletter",
		title: "Software engineering with LLMs in 2025: reality check",
		tags: [LinkTag.Development],
	},
	{
		url: "https://modelcontextprotocol.io/introduction",
		title: "Introduction - Model Context Protocol",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://news.ycombinator.com/item?id=44483530",
		title: "Backlog.md – Markdown‑native Task Manager and Kanban visualizer for any Git repo | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://aerolite.dev/applite",
		title: "Applite",
		tags: [LinkTag.Development],
	},
	{
		url: "https://github.com/MrLesk/Backlog.md",
		title: "GitHub - MrLesk/Backlog.md: Backlog.md - A tool for managing project collaboration between humans and AI Agents in a git ecosystem",
		tags: [LinkTag.Development],
	},
	{
		url: "https://openrouter.ai/",
		title: "OpenRouter",
		tags: [LinkTag.Tools],
	},
	{
		url: "https://www.hth.se/e-shop/losa-lador/invaandiga-backar/lux-utdragsback-i-full-bredd-med-softstangning-och-skenor-79129875/",
		title: "Lux utdragsback i full bredd med softstängning och skenor | HTH",
		tags: [LinkTag.Home],
	},
	
	{
		url: "https://maxdeviant.com/posts/2025/head-in-the-zed-cloud/",
		title: "Head in the Zed Cloud · maxdeviant.com",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.protondb.com/explore",
		title: "ProtonDB | Explore | Most Steam Followers",
		tags: [LinkTag.Gaming],
	},
	{
		url: "https://news.ycombinator.com/item?id=45966435",
		title: "Short Little Difficult Books | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://countercraft.substack.com/p/short-little-difficult-books",
		title: "Short Little Difficult Books - by Lincoln Michel",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.goodreads.com/book/show/187633.Art_and_Fear",
		title: "Art and Fear by David Bayles | Goodreads",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.amazon.com/Artists-Way-Spiritual-Creativity-Anniversary/dp/1585421464",
		title: "The Artist's Way: A Spiritual Path to Higher Creativity: Cameron, Julia: 8601406316102: Amazon.com: Books",
		tags: [LinkTag.Books],
	},
	{
		url: "https://github.com/unhappychoice/gitlogue",
		title: "GitHub - unhappychoice/gitlogue: A cinematic Git commit replay tool for the terminal, turning your Git history into a living, animated story.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://terminaltrove.com/",
		title: "Terminal Trove - The $HOME of all things in the terminal.",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.t3x.org/zsp/index_d.html",
		title: "T3X.ORG zsp/index",
		tags: [LinkTag.Development],
	},
	
	
	{
		url: "https://news.ycombinator.com/item?id=46611823",
		title: "1000 Blank White Cards | Hacker News",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://lmnt.me/blog/how-to-make-a-damn-website.html",
		title: "How to Make a Damn Website",
		tags: [LinkTag.Web],
	},
	{
		url: "https://mangaplus.shueisha.co.jp/updates",
		title: "MANGA Plus by SHUEISHA",
		tags: [LinkTag.Manga],
	},
	{
		url: "https://undead.live/",
		title: "Bringing your dead characters back to life since 2017!",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://nwn.blogs.com/nwn/2019/12/ai-music-godel-escher-bach-robert-thomas.html",
		title: "New World Notes: Listen: Music Inspired by Gödel, Escher, Bach Co-Created by an Artificial Intelligence Trained on Bach and Human Interaction With the AI",
		tags: [LinkTag.Music],
	},
	{
		url: "http://www.paulgraham.com/index.html",
		title: "Paul Graham",
		tags: [LinkTag.Development],
	},
	{
		url: "https://pixlr.com/editor/",
		title: "Online Photo Editor | Pixlr Editor",
		tags: [LinkTag.Tools],
	},
	{
		url: "https://efficiencyiseverything.com/The-Cookbook-v-1.4.pdf",
		title: "Microsoft Word - The Cookbook V 1.42.docx",
		tags: [LinkTag.Cooking],
	},
	{
		url: "https://boardgamegeek.com/geeklist/164572/card-sleeve-sizes-games",
		title: "Card Sleeve Sizes for Games | BoardGameGeek",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://www.soundtrap.com/pricing",
		title: "Pricing",
		tags: [LinkTag.Music],
	},
	{
		url: "https://en.wikipedia.org/wiki/Who_Killed_the_Electric_Car%3F",
		title: "Who Killed the Electric Car? - Wikipedia",
		tags: [LinkTag.Film],
	},
	{
		url: "https://www.pcgamer.com/into-the-deep-its-time-to-learn-how-to-play-dwarf-fortress/2/",
		title: "Into the deep: it's time to learn how to play Dwarf Fortress: Page 2 | PC Gamer",
		tags: [LinkTag.Gaming],
	},
	{
		url: "https://www.alltpaettkort.se/",
		title: "Allt på ett kort – Spela tillsammans! Brädspel, kortspel & sällskapsspel",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://www.drmaciver.com/2019/05/how-to-do-hard-things/",
		title: "How to do hard things | David R. MacIver",
		tags: [LinkTag.Life],
	},
	{
		url: "https://www.monstermakers.com/monster-clay-soft-medium-and-hard-grades/",
		title: "Monster Clay (Soft, Medium and Hard Grades) Sulfur Free Elastic Clay",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.cleancut.se/component/content/article?id=154",
		title: "Knivskola - cleancut.se",
		tags: [LinkTag.Cooking],
	},
	{
		url: "https://www.artstation.com/fenghuazhong",
		title: "ArtStation - Fenghua Zhong",
		tags: [LinkTag.Art],
	},
	
	{
		url: "https://kk.org/cooltools/best-magazine-articles-ever/",
		title: "The Best Magazine Articles Ever | Cool Tools",
		tags: [LinkTag.Life],
	},
	{
		url: "https://www.polygon.com/2019/7/18/20696081/metal-gear-solid-translation-japanese-english-jeremy-blaustein",
		title: "The bizarre, true story of Metal Gear Solid’s English translation - Polygon",
		tags: [LinkTag.Entertainment],
	},
	{
		url: "https://waitbutwhy.com/2016/03/sound.html",
		title: "Everything You Should Know About Sound — Wait But Why",
		tags: [LinkTag.Music],
	},
	{
		url: "https://wiki.archlinux.org/index.php/Feh#As",
		title: "Feh - ArchWiki",
		tags: [LinkTag.Development],
	},
	{
		url: "https://news.ycombinator.com/item?id=23579184",
		title: "Ask HN: What’s a big trend we should all be following? | Hacker News",
		tags: [LinkTag.News],
	},
	{
		url: "https://libraryofjuggling.com/",
		title: "Library of Juggling - Home",
		tags: [LinkTag.Hobbies],
	},
	{
		url: "https://blog.kagi.com/",
		title: "Kagi Blog",
		tags: [LinkTag.Web],
	},
	{
		url: "https://www.quantamagazine.org/the-theorist-who-sees-math-in-art-music-and-writing-20240112/",
		title: "The Theorist Who Sees Math in Art, Music and Writing | Quanta Magazine",
		tags: [LinkTag.Music],
	},
	{
		url: "http://www.chavant.com/",
		title: "Castilene Home Page",
		tags: [LinkTag.Art],
	},
	{
		url: "https://en.bitcoin.it/wiki/Help:Getting_started",
		title: "Help:Getting started - Bitcoin Wiki",
		tags: [LinkTag.Crypto],
	},
	
	{
		url: "https://electrum.readthedocs.io/en/latest/",
		title: "Welcome to the Electrum Documentation! — Electrum 3.3 documentation",
		tags: [LinkTag.Crypto],
	},
	{
		url: "https://boardgamegeek.com/collection/user/Suparn",
		title: "Suparn | User Collection | BoardGameGeek",
		tags: [LinkTag.BoardGames],
	},
	{
		url: "https://blog.levelupcoding.com/",
		title: "Level Up Coding",
		tags: [LinkTag.Development],
	},
	
	{
		url: "https://dysonlogos.blog/",
		title: "Dyson's Dodecahedron | Award Winning Dungeon Design",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://dysonlogos.blog/maps/",
		title: "Maps | Dyson's Dodecahedron",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.wistedt.net/",
		title: "Fantasy and science fiction maps for roleplaying games - Paths Peculiar",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://app.alchemyrpg.com/",
		title: "Alchemy",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/Damnthatsinteresting/comments/1dk9hfr/making_a_mini_garden/",
		title: "Making a mini garden : r/Damnthatsinteresting",
		tags: [LinkTag.Diy],
	},
	{
		url: "https://www.reddit.com/r/terrariums/",
		title: "Let's talk terrariums.",
		tags: [LinkTag.Diy],
	},
	{
		url: "https://www.reddit.com/r/minigardens/",
		title: "Miniature Gardens",
		tags: [LinkTag.Diy],
	},
	
	{
		url: "https://hemslojden.org/2018/12/smorkniv-ur-hemslojdens-julkalender/",
		title: "Smörkniv ur Hemslöjdens julkalender - Hemslöjden – slöjd och hantverk för alla",
		tags: [LinkTag.Woodworking],
	},
	
	{
		url: "https://www.svenskttra.se/bygg-med-tra/gor-det-sjalv/",
		title: "Gör det själv - Svenskt Trä",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://erikejealmqvist.com/pageom",
		title: "Erik Eje Almqvist",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/woodworking/comments/1ec38ei/kumiko_tools_making_process/",
		title: "Kumiko tools making process : r/woodworking",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://claphams.com/blogposts/everything-you-need-to-know-about-beeswax-furniture-polish/",
		title: "Everything You Need to Know About Beeswax Furniture Polish - Clapham's",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.reddit.com/r/ExperiencedDevs/comments/1dpnoz2/reminder_that_the_us_department_of_defense_has/",
		title: "Reminder that the U.S. Department of Defense has published a beautiful guide on \"Detecting Agile BS\" : r/ExperiencedDevs",
		tags: [LinkTag.Development],
	},
	{
		url: "https://www.jollyroom.se/fornya-barnrummet/stora-aventyr?page=3",
		title: "Inreda barnrum | Jollyroom",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://lugnaforaldrar.se/barnsakra-las/toalettlas-barnlas-till-toalett?gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnUpr8WrtuoSECLoN8_f7zPc5uNJd1YlKv7Vg_dtvYXcRoQ6OGPqKyEaAjIaEALw_wcB",
		title: "Toalettlås | Barnlås till Toalett - Lugna Föräldrar",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://www.midwestshoresco.com/blogs/fun-reads/how-to-crack-open-a-geode",
		title: "5 Ways to Break Open Whole Geodes: A brief guide – Midwest Shores",
		tags: [LinkTag.Diy],
	},
	
	{
		url: "https://rawerk.se/",
		title: "Råwerk - Products inspired by the dark and mystic nature of Bergslagen.",
		tags: [LinkTag.Art],
	},
	
	{
		url: "https://byggverket.se/tjanster/renovering-av-kallvind/",
		title: "Renovering av kallvind | Sovloft | Vindsvåning | Isolering | Ventilering",
		tags: [LinkTag.Home],
	},
	{
		url: "https://www.dammtussen.se/sv/info/massing-rengoring-av-massing.html",
		title: "Mässing - Rengöring av mässing | Dammtussen.se",
		tags: [LinkTag.Home],
	},
	{
		url: "https://ruwix.com/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/",
		title: "Mathematics of the Rubik's Cube - Permutation Group",
		tags: [LinkTag.Math],
	},
	{
		url: "https://www.metalswarehouse.co.uk/5-ways-to-remove-rust-from-metal/",
		title: "5 Ways To Remove Rust From Metal | Metals Warehouse",
		tags: [LinkTag.Home],
	},
	
	{
		url: "https://www.crunchyroll.com/series/GRDK3DD4Y/flcl",
		title: "Watch FLCL - Crunchyroll",
		tags: [LinkTag.Manga],
	},
	{
		url: "https://segling.flexrapro.se/",
		title: "SM i Distanskappsegling 2024 – Svenska Mästerskapen i Distanskappsegling 2024",
		tags: [LinkTag.Sailing],
	},
	{
		url: "https://en.m.wikipedia.org/wiki/Isometric_exercise",
		title: "Isometric exercise - Wikipedia",
		tags: [LinkTag.Fitness],
	},
	{
		url: "https://www.ta-i-tra.se/",
		title: "Ta i Trä – Rubank Verktygs blog",
		tags: [LinkTag.Woodworking],
	},
	
	{
		url: "https://www.tackingduels.com/play/rules",
		title: "Play | rules | tacking duels",
		tags: [LinkTag.Sailing],
	},
	{
		url: "https://www.expresseglare.se/tips-trix/segla-med-strategi/kryssen/",
		title: "Kryssen - Sveriges Expresseglare",
		tags: [LinkTag.Sailing],
	},
	
	{
		url: "http://www.sailingbreezes.com/sailing_breezes_current/articles/march06/dell.htm",
		title: "Bring Your Own Plates",
		tags: [LinkTag.Sailing],
	},
	{
		url: "https://www.srss.se/srss/bli-radioseglare",
		title: "Bli radioseglare - Stockholms Radiosegelsällskap",
		tags: [LinkTag.Sailing],
	},
	{
		url: "https://bambulab.com/en-eu",
		title: "Bambu Lab | Unleash Your Creativity with Bambu Lab 3D Printers - Bambu Lab",
		tags: [LinkTag.Art],
	},
	{
		url: "https://www.3djake.se/bambu-lab/a1-mini-combo",
		title: "Bambu Lab A1 mini Combo - 3DJake Sverige",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://eu.store.bambulab.com/collections/3d-printer/products/a1-mini?variant=49311552176476",
		title: "eu.store.bambulab.com",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.reddit.com/r/3Dprinting/wiki/gettingstarted/",
		title: "Reddit - Dive into anything",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.reddit.com/r/3Dprinting/wiki/materials/",
		title: "Reddit - Dive into anything",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.reddit.com/r/3Dprinting/about/",
		title: "Welcome to R/3D Printing! Come for the Benchy, stay for the Calibration!",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://blog.prusa3d.com/advanced-filament-guide_39718/",
		title: "Advanced filament guide - Original Prusa 3D Printers",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://store.anycubic.com/blogs/3d-printing-guides/different-types-of-3d-printer-filament?tm=tt&ap=gads&aaid=adaSU7wmdvATJ&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1ECtMIpTvYNjPYaM_AhPqTE_8QKpXur4Ljx3QtXSFPmW86X6juHgrxoCvPcQAvD_BwE",
		title: "A Beginner's Guide to Main Types of 3D Printing Filaments",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://help.prusa3d.com/article/asa_1809",
		title: "ASA | Prusa Knowledge Base",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://forum.bambulab.com/t/enclosure-ideas/29115/20?page=3&fbclid=IwY2xjawFhFV5leHRuA2FlbQIxMQABHV6NDLd1zYrIVRwO0f-DU47bq6lRGBJudGQdcpPAIeugeOt3xeKzgfqIjw_aem_VErkVAzvHQKPpgdTKVYUzw",
		title: "Enclosure ideas - Bambu Lab A1 Series / Bambu Lab A1 mini - Bambu Lab Community Forum",
		tags: [LinkTag.ThreeDPrinting],
	},
	
	{
		url: "https://bolist.se/gor-det-sjalv/ut/fasad/uppfora-enkel-yttervagg-i-tra/?srsltid=AfmBOoqhP8G0hxiv1dXbXsxYhuUI7cfsm4Qd3tsBXrt5WFkFPK32zRnP",
		title: "Gör det själv-guide uppföra enkel yttervägg i trä | BOLIST Sveriges närmaste byggvaruhus",
		tags: [LinkTag.Home],
	},
	{
		url: "https://toymakingplans.com/",
		title: "ToymakingPlans.com | Wood Toy Plans for Woodworkers",
		tags: [LinkTag.Woodworking],
	},
	{
		url: "https://www.toysandjoys.com/",
		title: "Toys and Joys: Wooden Toy Plans & Patterns – Wooden Toy Plans, Patterns, Models and Woodworking Projects from Toys and Joys",
		tags: [LinkTag.Woodworking],
	},
	
	{
		url: "https://www.reddit.com/r/discworld/comments/1frfi9k/how_to_devalue_a_signed_pratchett_in_5_seconds_or/",
		title: "How to devalue a signed pratchett in 5 seconds or less : r/discworld",
		tags: [LinkTag.Books],
	},
	{
		url: "https://www.rhino3d.com/",
		title: "Rhino - Rhinoceros 3D",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://www.speljatten.se/produkter/dungeons-dragons-candlekeep-mysteries-alt-cover",
		title: "Dungeons & Dragons - Candlekeep Mysteries (Alt Cover) - Speljätten",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://thealexandrian.net/dungeons-dragons",
		title: "The Alexandrian » Dungeons & Dragons",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.adventuremine.se/bastun/",
		title: "Bastun - The adventuremine",
		tags: [LinkTag.Travel],
	},
	{
		url: "https://www.byggmax.se/bygga-innerv%C3%A4gg-med-tr%C3%A4reglar",
		title: "Bygga innervägg med träreglar",
		tags: [LinkTag.Home],
	},
	{
		url: "https://trendenser.se/2017/10/fredagsbestyr-och-forvandlingsfoton-vart-hus-fore-och-efter/",
		title: "Förvandlingsfoton - Vårt hus före och efter - Trendenser",
		tags: [LinkTag.Home],
	},
	
	{
		url: "https://www.reddit.com/r/osr/comments/16tm30z/what_is_it_about_old_school_essentials/",
		title: "What is it about Old School Essentials? : r/osr",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.basicfantasy.org/",
		title: "Basic Fantasy Role-Playing Game",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://goodman-games.com/dungeon-crawl-classics-rpg/",
		title: "Dungeon Crawl Classics RPG|Goodman Games",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://makerworld.com/en/search/models?keyword=Child%20safety",
		title: "Search:Child safety - MakerWorld",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://makerworld.com/en/models/26783?from=search#profileId-122657",
		title: "Belt Guard for Kids by iamjorgensen - MakerWorld",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://makerworld.com/en/models/727377#profileId-658814",
		title: "Gift Wrap Station Tape Dispenser V1.5! by danielnc06 - MakerWorld",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://makerworld.com/en/models/113606?from=search#profileId-122100",
		title: "Hook for String shelf system by chris_craft - MakerWorld",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://makerworld.com/en/models/715806#profileId-646523",
		title: "Gift Wrap Station Paper Holder V1.5 Update! by danielnc06 - MakerWorld",
		tags: [LinkTag.ThreeDPrinting],
	},
	{
		url: "https://makerworld.com/en/models/690704#profileId-619422",
		title: "Tape dispenser with cover by Domass - MakerWorld",
		tags: [LinkTag.ThreeDPrinting],
	},
	
	{
		url: "https://www.reddit.com/r/rpg/comments/1731e0s/async_play_tips_and_tricks_best_system_to_use/",
		title: "Async play: Tips and tricks? Best system to use? : r/rpg",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.perilplanet.com/freeform-universal/",
		title: "Freeform Universal - Peril Planet",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://homebrewery.naturalcrit.com/share/-zMNd4JOoJvv",
		title: "Paper-Free RPG - The Homebrewery",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.myth-weavers.com/",
		title: "Forums - Myth-Weavers",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.rpgcrossing.com/",
		title: "RPG Crossing Home",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/pbp/comments/1gef5i7/how_to_start_playing_pbp/",
		title: "How to start playing PBP? : r/pbp",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://gamersplane.com/forums/thread/34133/",
		title: "Prologue - Death House | Thread | Gamers Plane",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/rpg/wiki/gamerec/",
		title: "Reddit - Dive into anything",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://storium.com/",
		title: "Storium - the Online Storytelling Game",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://www.reddit.com/r/rpg/comments/1aikmjz/rpgs_specifically_designed_for_asynchronous/",
		title: "RPGs specifically designed for asynchronous play-by-post? : r/rpg",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://freeleaguepublishing.com/get-started/",
		title: "Get Started - Free League Publishing",
		tags: [LinkTag.Ttrpg],
	},
	{
		url: "https://edtechkartan.se/skola/",
		title: "Skola - Edtechkartan | Swedish Edtech Industry",
		tags: [LinkTag.Education],
	},
	{
		url: "https://teckensprakslexikon.su.se",
		title: "Svenskt teckenspråkslexikon - Stockholms universitet",
		tags: [LinkTag.Language],
	},
	{
		url: "https://kive.ai/",
		title: "Kive — Shape visions with AI. Your craft, amplified.",
		tags: [LinkTag.Ai],
	},
	{
		url: "https://drcraigcanapari.com/behavioral-sleep-problems-in-children-part-1-inappropriate-sleep-associations/",
		title: "Toddler Night Wakings: What Causes Them and How to Fix them",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://drcraigcanapari.com/at-long-last-sleep-training-tools-for-the-exhausted-parent/",
		title: "The Best Sleep Training Tools and Techniques in 2024",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://drcraigcanapari.com/sleep_regression",
		title: "How To Deal With A Sleep Regression",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://drcraigcanapari.com/learned-hunger-nighttime-feeding-stop-night-feeding/",
		title: "How to Stop Night Feeds in Your Child and Sleep Better",
		tags: [LinkTag.Kids],
	},
	{
		url: "https://en.m.wikipedia.org/wiki/Rhyming_slang",
		title: "Rhyming slang - Wikipedia",
		tags: [LinkTag.Language],
	},
	{
		url: "https://en.m.wikipedia.org/wiki/Cant_(language)",
		title: "Cant (language) - Wikipedia",
		tags: [LinkTag.Language],
	},
	{
		url: "https://www.deviantart.com/ayej/gallery",
		title: "Ayej | DeviantArt",
		tags: [LinkTag.Art],
	},
	{
		url: "https://fotoforensics.com/",
		title: "FotoForensics",
		tags: [LinkTag.Tools],
	},
	{
		url: "https://all3dp.com/1/50-cool-raspberry-pi-projects-for-december-2023/",
		title: "50 Cool Raspberry Pi Projects for December 2023 | All3DP",
		tags: [LinkTag.HomeAutomation],
	},];
