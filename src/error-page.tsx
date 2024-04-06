import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function errorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    console.error(error);
    return "Unknown error";
  }
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className=" text-white px-6 text-sm ">Page Not Found</div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-50 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-gray-700 border border-current">
              <a href="/">Hem</a>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
}
