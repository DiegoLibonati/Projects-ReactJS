import React, { useEffect } from "react";
import { links } from "../helpers/data.js";
import logo from "../logo.svg";
import { NavbarItem } from "./NavbarItem.jsx";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navbarContainer = useRef();
  const navbarItems = useRef();

  useEffect(() => {
    if (navbar) {
      const navbarHeight = navbarItems.current.getBoundingClientRect().height;

      navbarContainer.current.style.height = `${navbarHeight}px`;
    } else {
      navbarContainer.current.style.height = `0px`;
    }
  }, [navbar]);

  return (
    <>
      <header className="header_container">
        <div className="header_container_logo">
          <a href="/">
            <img src={logo} alt="logo"></img>
          </a>
          <FaBars id="bars" onClick={() => setNavbar(!navbar)}></FaBars>
        </div>

        <nav className="header_container_nav" ref={navbarContainer}>
          <ul className="header_container_nav_list" ref={navbarItems}>
            {links.map((link) => {
              const { id, url, text } = link;

              return <NavbarItem key={id} url={url} text={text}></NavbarItem>;
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};
