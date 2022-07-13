import React from "react";

export const ItemMenu = ({ title, price, img, desc }) => {
  return (
    <>
      <article className="item_container">
        <img src={img} alt={title}></img>

        <div className="item_container_descripcion">
          <div className="item_container_descripcion_header">
            <h2>{title}</h2>
            <p>${price}</p>
          </div>

          <p className="item_desc">{desc}</p>
        </div>
      </article>
    </>
  );
};
