import React from "react";
import src from "./nores.webp";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
function NoResult() {
  return (
    <div className="nores">
      <BsFillEmojiDizzyFill className="icon" />
      <h2>Sorry, no products matched your search!</h2>
      <p>Enter a different keyword and try.</p>
    </div>
  );
}

export default NoResult;
