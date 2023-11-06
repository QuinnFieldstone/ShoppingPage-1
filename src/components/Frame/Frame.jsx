/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ComercialShoppingBasket1 } from "../../icons/ComercialShoppingBasket1";
import { InterfaceEssentialHeart } from "../../icons/InterfaceEssentialHeart";
import "./style.css";

export const Frame = ({ property1, className, elementClassName, element = "/img/0-1.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "default" && <img className={`element ${elementClassName}`} alt="Element" src={element} />}

      {state.property1 === "variant-2" && (
        <div className={`overlap-group ${elementClassName}`}>
          <div className="cart">
            <ComercialShoppingBasket1 className="comercial-shopping" color="#FDFDFD" />
          </div>
          <div className="add-to-wish-list">
            <InterfaceEssentialHeart className="interface-essential" />
          </div>
        </div>
      )}

      <div className="div">
        <p className="text-wrapper">Visionary Brew Magic Mushroom Tea</p>
        <div className="text-wrapper-2">$25</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  element: PropTypes.string,
};
