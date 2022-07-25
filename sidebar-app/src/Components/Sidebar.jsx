import React from "react";
import logo from "../logo.svg";
import { links } from "../Helpers/data.js";
import { SidebarItem } from "./SidebarItem";
import { useGlobalContext } from "../Helpers/context";

export const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();

  return (
    <>
      <aside
        className={
          sidebar ? "sidebar_container open-sidebar" : "sidebar_container"
        }
      >
        <div className="sidebar_container_header">
          <img src={logo} alt="logo"></img>
          <button type="button" onClick={() => closeSidebar()}>
            X
          </button>
        </div>

        <nav className="sidebar_container_nav">
          <ul className="sidebar_container_nav_list">
            {links.map((link) => {
              return <SidebarItem key={link.id} {...link}></SidebarItem>;
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};
