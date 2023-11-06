/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComercialShoppingBasket1 } from "../../icons/ComercialShoppingBasket1";
import { StyleFilled2 } from "../../icons/StyleFilled2";
import "./style.css";

export const ComercialShopping = ({ style }) => {
  return (
    <>
      {style === "filled" && <StyleFilled2 className="instance-node" />}

      {style === "outlined" && <ComercialShoppingBasket1 className="instance-node" color="black" />}
    </>
  );
};

ComercialShopping.propTypes = {
  style: PropTypes.oneOf(["outlined", "filled"]),
};
