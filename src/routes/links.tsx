function Card({
  title,
  description,
  href,
}: {
  title: string;
  description?: string;
  href: string;
}) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          href={href}
          target="_blank"
        >
          Besök
        </a>
      </div>
    </div>
  );
}

function BookmarksPage() {
  const bookmarks = [
    {
      title: "Flightradar24",
      url: "https://www.flightradar24.com/57.08,27.17/5",
      description: "Track flights in real-time",
      tags: ["travel", "flights"],
    },
    {
      title: "Material Design",
      url: "https://m3.material.io/",
      description:
        "Material 3 is the latest version of Google’s open-source design system. Design and build beautiful, usable products with Material 3.",
    },
    {
      url: "https://fonts.google.com/",
      title: "Google Fonts",
      description:
        "Making the web more beautiful, fast, and open through great typography.",
    },
    {
      url: "https://chromewebstore.google.com/collection/2023_favorites",
      title: "Chrome Web Store",
      description: "Extensions, themes, and apps for Chrome",
    },
    {
      url: "https://www.material-tailwind.com/docs/html/installation",
      title: "Material Tailwind",
      description: "Material Design components for Tailwind CSS",
    },
    {
      url: "https://tailwindcss.com/docs/",
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
    },
  ];

  return (
    <section className="container max-w-screen-xl ">
      <p className="text-4xl">Bokmärken</p>
      <ul className="flex flex-wrap flex-row gap-8">
        {bookmarks.map((bookmark) => (
          <li key={bookmark.url}>
            <Card
              href={bookmark.url}
              title={bookmark.title}
              description={bookmark.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookmarksPage;
