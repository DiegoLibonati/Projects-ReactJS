import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const CartItem = ({ title, price, img, amount }) => {
  return (
    <div className="cart_item">
      <div className="cart_item_img">
        <img className="cart_item_img_img" src={img} alt={title}></img>
      </div>

      <div className="cart_item_information">
        <h3>{title}</h3>
        <p>${price}</p>
        <button type="button">Remove</button>
      </div>

      <div className="cart_item_amount">
        <BsChevronUp id="cart-up"></BsChevronUp>
        <p>{amount}</p>
        <BsChevronDown id="cart-down"></BsChevronDown>
      </div>
    </div>
  );
};
