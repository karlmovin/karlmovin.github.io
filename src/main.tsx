import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Packlistor from "./routes/packlistor.tsx";
import Root from "./routes/root.tsx";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Blog from "./routes/blog.tsx";
import BookPage from "./routes/book.tsx";
import Books from "./routes/books.tsx";
import Home from "./routes/home.tsx";
import Konst from "./routes/konst.tsx";
import BookmarksPage from "./routes/links.tsx";
import News from "./routes/news.tsx";
import Weather from "./routes/weather.tsx";
import WhatToDo from "./routes/whatToDo.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				children: [
					{ index: true, element: <Home /> },
					{
						path: "packlistor",
						element: <Packlistor />,
					},
					{
						path: "books",
						element: <Books />,
					},
					{
						path: "books/:slug",
						element: <BookPage />,
					},
					{
						path: "bookmarks",
						element: <BookmarksPage />,
					},
					{
						path: "konst",
						element: <Konst />,
					},
					{
						path: "what-to-do",
						element: <WhatToDo />,
					},
					{
						path: "weather",
						element: <Weather />,
					},
					{
						path: "blog",
						element: <Blog />,
					},
					{
						path: "news",
						element: <News />,
					},
				],
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
