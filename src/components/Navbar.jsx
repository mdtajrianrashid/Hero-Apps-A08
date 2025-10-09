import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import githubLogo from "../assets/github-logo.png";

const Navbar = () => {
  const activeStyle =
    "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold";

  return (
    <div className="navbar bg-white shadow-lg md:px-8 fixed top-0 left-0 w-full z-50">

      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
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
            className="menu menu-sm dropdown-content bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-xl z-[1000] mt-3 w-52 p-2 shadow-lg transition-all duration-300"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-white/20 rounded-md font-semibold" : "hover:bg-white/20 rounded-md"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "bg-white/20 rounded-md font-semibold" : "hover:bg-white/20 rounded-md"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "bg-white/20 rounded-md font-semibold" : "hover:bg-white/20 rounded-md"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink
          to="/"
          className="border-0 text-sm md:text-lg flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold normal-case transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_10px_#9F62F2]"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 object-contain transition-transform duration-500"
          />
          HERO.IO
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium text-black">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#632EE3] transition-colors ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `hover:text-[#632EE3] transition-colors ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `hover:text-[#632EE3] transition-colors ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/mdtajrianrashid"
          target="_blank"
          rel="noopener noreferrer"
          className="relative btn text-sm md:text-base font-semibold text-white border-0 flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg px-5 py-2 transition-all duration-500 overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
          <img
            src={githubLogo}
            alt="GitHub"
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
          />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
