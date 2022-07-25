import React from "react";

export const SidebarItem = ({ url, text, icon }) => {
  return (
    <>
      <li>
        <a href={url}>
          {icon}
          {text}
        </a>
      </li>
    </>
  );
};
