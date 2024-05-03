import { NavLink } from "react-router-dom";
import karl from "./assets/karl.png";

function Nav() {
  function toggleDropdown() {
    const navbar = document.getElementById("navbar");
    if (
      navbar &&
      window.getComputedStyle(navbar).getPropertyValue("display") === "none"
    ) {
      navbar.style.display = "block";
    } else if (navbar) {
      navbar.style.display = "none";
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={karl} className="h-12 rounded-full" alt="Karl" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Karl Movin
          </span>
        </NavLink>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
            {/* <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Hem
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/packlistor"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Packlistor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Böcker
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookmarks"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Bokmärken
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/konst"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Konst
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weather"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Väder
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/what-to-do"
                className={({ isActive, isPending }) =>
                  isActive ? "nav-active" : isPending ? "" : "nav-inactive"
                }
              >
                Vad ska jag göra idag?
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
