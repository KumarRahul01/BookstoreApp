import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import toast from 'react-hot-toast';

const Navbar = () => {

  

  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  const loginHandler = () => {
    loginWithRedirect();
  };
  
  const logoutHandler = ()=>{
    setTimeout(()=> (console.log("Logout Success")), 2000 )
    logout({
      logoutParams: { returnTo: window.location.origin },
    })
  }


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? "light" : "dark"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "light") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="pFont dark:bg-slate-900 dark:text-white">
      <div className="navbar tracking-wide">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-white text-zinc-700 font-medium rounded-box w-52"
            >
              <li>
                <Link
                  className="cursor-pointer hover:text-pink-700 transition-all duration-150"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-pink-700 transition-all duration-150"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-pink-700 transition-all duration-150"
                  to="/about"
                >
                  About US
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer hover:text-pink-700 transition-all duration-150"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <a className="md:text-3xl sm:text-2xl text-xl font-bold cursor-pointer text-pink-700 tracking-wide lg:-ml-2">
            BookStore
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="px-1 flex gap-10 text-lg font-semibold text-zinc-700 dark:bg-slate-900 dark:text-white">
            <li className="hover:text-pink-400 transition-all duration-150">
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-700" : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-pink-400 transition-all duration-150">
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-700" : "")}
                to={"/courses"}
              >
                Courses
              </NavLink>
            </li>
            <li className="hover:text-pink-400 transition-all duration-150">
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-700" : "")}
                to={"/about"}
              >
                About Us
              </NavLink>
            </li>
            <li className="hover:text-pink-400 transition-all duration-150">
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-700" : "")}
                to={"/contact"}
              >
                Contcat Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Search Box */}
          <label className="hidden md:flex items-center gap-2 mr-3 border-[2px] border-zinc-300 rounded">
            <input
              type="text"
              className="bg-white px-2 py-1 outline-none dark:bg-slate-900 dark:text-white"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Theme Controller */}

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Login Button */}
          <div>
            {isAuthenticated ? (
              <div className="">
                <a
                  className="px-4 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 transition-all duration-150 text-slate-200 rounded sm:text-lg text-md font-medium"
                  onClick={() =>
                    logoutHandler()
                  }
                >
                  Logout
                </a>
              </div>
            ) : (
              <div>
                <a
                  className="px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 transition-all duration-150 text-slate-200 rounded sm:text-lg text-md font-medium"
                  onClick={() => loginHandler()}
                >
                  Login
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
