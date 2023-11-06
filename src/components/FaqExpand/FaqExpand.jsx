/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowsChevronArrowRight } from "../../icons/ArrowsChevronArrowRight";
import { ArrowsChevronArrowRight1 } from "../../icons/ArrowsChevronArrowRight1";
import "./style.css";

export const FaqExpand = ({ property1, className }) => {
  return (
    <div className={`FAQ-expand ${property1} ${className}`}>
      {property1 === "default" && (
        <>
          <ArrowsChevronArrowRight className="arrows-chevron-arrow" />
          <p className="p">Lorem ipsum dolor sit amet</p>
        </>
      )}

      {property1 === "variant-2" && (
        <div className="overlap-group-2">
          <ArrowsChevronArrowRight1 className="arrows-chevron-arrow-right-1" />
          <p className="text-wrapper-4">Lorem ipsum dolor sit amet</p>
          <p className="text-wrapper-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore. sed do eiusmod tempor incididunt ut labore et
            dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore.
          </p>
        </div>
      )}
    </div>
  );
};

FaqExpand.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
