import React from "react";
import "../../css/Footer/Footer.css";
import { words } from "../../Words";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <p> {words.footerTitle}</p>
      <p>
        {words.content} <AiFillHeart className="heart" />
      </p>
    </footer>
  );
}

export default Footer;
