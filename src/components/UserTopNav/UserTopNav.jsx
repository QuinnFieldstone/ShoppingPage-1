/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComercialShoppingBasket2 } from "../../icons/ComercialShoppingBasket2";
import { InterfaceEssentialMagnifier1 } from "../../icons/InterfaceEssentialMagnifier1";
import "./style.css";

export const UserTopNav = ({ className, layer = "/img/layer-1.svg" }) => {
  return (
    <div className={`user-top-nav ${className}`}>
      <div className="overlap">
        <img className="layer" alt="Layer" src={layer} />
        <div className="mushroom">
        <button
          type="button"
          className="btn btn-primary"

        >
          MUSHROOM
                  </button></div>
        <div className="CA-nn-AB-is">
        <button
          type="button"
          className="btn btn-primary"

        >
          CANNABIS
                  </button></div>
        <div className="overlap-2">
          <div className="add-cart">
            <div className="comercial-shopping-wrapper">
              <ComercialShoppingBasket2 className="comercial-shopping-basket-2" />
            </div>
          </div>
          <div className="count">
            <div className="text-wrapper-23">0</div>
          </div>
        </div>
        <div className="search-wrapper">
          <div className="search">
            <div className="overlap-group-4">
              <InterfaceEssentialMagnifier1 className="interface-essential-magnifier-1" color="#F47820" />
              <div className="text-wrapper-24">What do you want</div>
            </div>
          </div>
        </div>
        <div className="wishlist">
          <div className="wish-list">
            <img className="img" alt="Icon" src="/img/icon.svg" />
          </div>
        </div>
        <div className="my-account">
          <img className="ellipse" alt="Ellipse" src="/img/ellipse-28.png" />
          <div className="text-wrapper-25">Account</div>
        </div>
      </div>
    </div>
  );
};

UserTopNav.propTypes = {
  layer: PropTypes.string,
};
