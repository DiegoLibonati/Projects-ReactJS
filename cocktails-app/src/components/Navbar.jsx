import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";
import { useGlobalContext } from "../helpers/context";

export const Navbar = () => {
  const { mobileNavbar, manageNavbar } = useGlobalContext();

  return (
    <header className="header_container">
      <div className="header_container_logo">
        <h2>TheCocktailDB</h2>
        <FaBars
          className={mobileNavbar ? "bars rotate-bars" : "bars"}
          onClick={manageNavbar}
        ></FaBars>
      </div>

      <nav
        className={
          mobileNavbar
            ? "header_container_nav nav-open"
            : "header_container_nav"
        }
      >
        <ul className="header_container_nav_list">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
