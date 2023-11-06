/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InterfaceEssentialMagnifier1 = ({ color = "#F47820", className }) => {
  return (
    <svg
      className={`interface-essential-magnifier-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.3848 6.39121C4.5733 3.53735 7.35801 1.67514 10.4495 1.66688C13.7813 1.64933 16.7439 3.78348 17.7825 6.94935C18.8211 10.1152 17.6984 13.5896 15.0037 15.5491C12.3089 17.5087 8.65771 17.5057 5.96612 15.5419L3.56612 17.9419C3.3221 18.1856 2.9268 18.1856 2.68278 17.9419C2.43907 17.6979 2.43907 17.3026 2.68278 17.0585L5.00778 14.7335C2.83604 12.5334 2.1963 9.24507 3.3848 6.39121ZM4.49909 11.8077C5.49699 14.2124 7.8459 15.7786 10.4495 15.7752V15.7419C13.983 15.7374 16.8516 12.8837 16.8745 9.35021C16.8778 6.74666 15.3116 4.39775 12.9069 3.39985C10.5022 2.40196 7.73306 2.95184 5.89207 4.79283C4.05108 6.63382 3.5012 9.40293 4.49909 11.8077Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

InterfaceEssentialMagnifier1.propTypes = {
  color: PropTypes.string,
};
