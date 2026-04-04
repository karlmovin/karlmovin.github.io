import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PackingLists from "./routes/packing_lists.tsx";
import Root from "./routes/root.tsx";
import "./i18n";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Blog from "./routes/blog.tsx";
import BookPage from "./routes/book.tsx";
import Books from "./routes/books.tsx";
import Home from "./routes/home.tsx";
import Art from "./routes/art.tsx";
import LinksPage from "./routes/links.tsx";
import News from "./routes/news.tsx";
import Weather from "./routes/weather.tsx";
import Woodworking from "./routes/woodworking.tsx";
import Rpg from "./routes/rpg.tsx";

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
						path: "packing_lists",
						element: <PackingLists />,
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
						path: "links",
						element: <LinksPage />,
					},
					{
						path: "art",
						element: <Art />,
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
					{
						path: "woodworking",
						element: <Woodworking />,
					},
					{
						path: "rpg",
						element: <Rpg />,
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
