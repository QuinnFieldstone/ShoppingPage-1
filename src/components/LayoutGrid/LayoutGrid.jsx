/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LayoutGrid23 } from "../../icons/LayoutGrid23";
import { StyleFilled } from "../../icons/StyleFilled";
import "./style.css";

export const LayoutGrid = ({ style }) => {
  return (
    <>
      {style === "filled" && <StyleFilled className="instance-node-3" />}

      {style === "outlined" && <LayoutGrid23 className="instance-node-3" color="black" />}
    </>
  );
};

LayoutGrid.propTypes = {
  style: PropTypes.oneOf(["outlined", "filled"]),
};
