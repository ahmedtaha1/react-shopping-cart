import React from "react";
import "../../css/Filter/Filter.css";

function Filteroptions(props) {
  return (
    <>
      <div className="filter-options">
        <div className="filter-size">
          <div className="select-size">
            <button
              className={props.size === "All" ? "item active" : "item"}
              value="All"
              onClick={props.filterSize}
            >
              All
            </button>
            <button
              className={props.size === "Xs" ? "item active" : "item"}
              value="Xs"
              onClick={props.filterSize}
            >
              Xs
            </button>
            <button
              className={props.size === "S" ? "item active" : "item"}
              value="S"
              onClick={props.filterSize}
            >
              S
            </button>
            <button
              className={props.size === "M" ? "item active" : "item"}
              value="M"
              onClick={props.filterSize}
            >
              M
            </button>
            <button
              className={props.size === "L" ? "item active" : "item"}
              value="L"
              onClick={props.filterSize}
            >
              L
            </button>
            <button
              className={props.size === "XL" ? "item active" : "item"}
              value="XL"
              onClick={props.filterSize}
            >
              XL
            </button>
          </div>
        </div>
        <div className="filter-price">
          <div className="select-price">
            <button
              className={props.order === "Latest" ? "item active" : "item"}
              onClick={props.filterOrder}
              value="Latest"
            >
              Latest
            </button>
            <button
              className={props.order === "Lowest" ? "item active" : "item"}
              onClick={props.filterOrder}
              value="Lowest"
            >
              Lowest
            </button>
            <button
              className={props.order === "Highest" ? "item active" : "item"}
              onClick={props.filterOrder}
              value="Highest"
            >
              Highest
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filteroptions;
