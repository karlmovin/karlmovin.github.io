function BookmarksPage() {
  const bookmarks = [
    {
      id: 1,
      title: "Flightradar24",
      url: "https://www.flightradar24.com/57.08,27.17/5",
    },
  ];

  return (
    <section className="container max-w-screen-xl">
      <p className="text-4xl">Bokmärken</p>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <a href={bookmark.url}>{bookmark.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookmarksPage;
