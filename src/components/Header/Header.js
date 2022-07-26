import React from "react";
import "../../css/Header/Header.css";
import { AiFillShopping } from "react-icons/ai";
import { GiDolphin } from "react-icons/gi";
import Filter from "../Filter/Filter";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <GiDolphin />
        <span>seaOutFit</span>
      </div>
      <Filter
        filterSize={props.filterSize}
        size={props.size}
        filterOrder={props.filterOrder}
        order={props.order}
      />

      <div className="shop">
        <AiFillShopping />
        <span className="num"> {props.cartItems.length} </span>
      </div>
    </header>
  );
}

export default Header;
