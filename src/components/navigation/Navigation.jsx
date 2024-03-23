import React from "react";

import { Link, NavLink } from "react-router-dom";
import { links } from "../../config/links.js";

const Navigation = () => {
  return (
    <>
      <nav className="navbar bg-white-50 w-full shadow-lg font-serif p-2">
        <div className="flex justify-between items-center">
          <div className="menu flex items-center gap-2">
            <Link to="/" className="m-2 cursor-pointer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                className="w-32"
                alt="website logo"
              />
            </Link>
          </div>
          <div className="nav-items flex justify-between items-center gap-4 ">
            <ul className="flex items-center gap-3">
              {links.map((linkItems) => (
                <NavLink
                  className={({ isActive }) => {
                    return !isActive
                      ? "text-black"
                      : "text-indigo-600 transition-all animate-pulse";
                  }}
                  to={linkItems.path}
                  key={linkItems.id}
                >
                  <li className={`hidden sm:block sm:text-lg `}>
                    {linkItems.name}
                  </li>
                </NavLink>
              ))}
            </ul>
            <button className="bg-black p-2 text-white rounded-lg mr-2 shadow-lg hover:bg-indigo-500 transition-all text-lg">
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
