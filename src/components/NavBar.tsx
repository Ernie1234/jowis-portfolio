import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { ModeToggle } from "./ModeToggle";
import SideBar from "./SideBar";

function NavBar() {
  return (
    <nav className="w-full start-0 sticky top-0 z-50 py-4 bg-white dark:bg-gray-900 backdrop-blur shadow-md md:shadow-lg lg:shadow-xl">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-400 uppercase">
            Jowis
          </span>
        </Link>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:mt-0">
            <li>
              <NavLink
                to="/"
                className="block text-lg py-2 px-3 aria-[current=page]:text-red-400 transition-all duration-300"
              >
                {({ isActive }) => {
                  return isActive ? (
                    <span className="flex flex-col justify-center items-center">
                      Home
                      <GoDotFill size={12} className="text-red-400" />
                    </span>
                  ) : (
                    <span className="text-gray-800 dark:text-gray-50 hover:opacity-85">
                      Home
                    </span>
                  );
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-lg py-2 px-3 aria-[current=page]:text-red-400 transition-all duration-300"
              >
                {({ isActive }) => {
                  return isActive ? (
                    <span className="flex flex-col justify-center items-center">
                      About
                      <GoDotFill size={12} className="text-red-400" />
                    </span>
                  ) : (
                    <span className="text-gray-800 dark:text-gray-50 hover:opacity-85">
                      About
                    </span>
                  );
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className="block text-lg py-2 px-3 aria-[current=page]:text-red-400 transition-all duration-300"
              >
                {({ isActive }) => {
                  return isActive ? (
                    <span className="flex flex-col justify-center items-center">
                      Work
                      <GoDotFill size={12} className="text-red-400" />
                    </span>
                  ) : (
                    <span className="text-gray-800 dark:text-gray-50 hover:opacity-85">
                      Work
                    </span>
                  );
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-lg py-2 px-3 aria-[current=page]:text-red-400 transition-all duration-300"
              >
                {({ isActive }) => {
                  return isActive ? (
                    <span className="flex flex-col justify-center items-center">
                      Contact
                      <GoDotFill size={12} className="text-red-400" />
                    </span>
                  ) : (
                    <span className="text-gray-800 dark:text-gray-50 hover:opacity-85">
                      Contact
                    </span>
                  );
                }}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center space-x-3 md:space-x-0 text-black dark:text-white">
          <ModeToggle />
          <div className="block md:hidden">
            <SideBar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
