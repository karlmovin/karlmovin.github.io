import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import Packning from "./routes/packning.tsx";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Todos from "./routes/todos.tsx";
import Books from "./routes/books.tsx";
import BookPage from "./routes/book.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Todos /> },
          {
            path: "packning",
            element: <Packning />,
          },
          {
            path: "books",
            element: <Books />,
          },
          {
            path: "books/:slug",
            element: <BookPage />,
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
