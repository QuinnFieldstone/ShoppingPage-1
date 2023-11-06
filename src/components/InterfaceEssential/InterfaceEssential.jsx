/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InterfaceEssentialMagnifier1 } from "../../icons/InterfaceEssentialMagnifier1";
import { StyleFilled1 } from "../../icons/StyleFilled1";
import "./style.css";

export const InterfaceEssential = ({ style }) => {
  return (
    <>
      {style === "filled" && <StyleFilled1 className="instance-node-2" />}

      {style === "outlined" && <InterfaceEssentialMagnifier1 className="instance-node-2" color="black" />}
    </>
  );
};

InterfaceEssential.propTypes = {
  style: PropTypes.oneOf(["outlined", "filled"]),
};
