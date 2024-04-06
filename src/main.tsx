import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import Packlistor from "./routes/packlistor.tsx";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Todos from "./routes/todos.tsx";
import Books from "./routes/books.tsx";
import BookPage from "./routes/book.tsx";
import BookmarksPage from "./routes/links.tsx";
import Konst from "./routes/konst.tsx";
import WhatToDo from "./routes/whatToDo.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          { index: true, element: <Todos /> },
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
