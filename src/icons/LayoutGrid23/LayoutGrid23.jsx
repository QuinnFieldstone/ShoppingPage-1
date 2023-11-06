/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LayoutGrid23 = ({ color = "#FFDAC0", className }) => {
  return (
    <svg
      className={`layout-grid-2-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M6.69635 3.5H18.7678C19.8789 3.5 20.7797 4.39543 20.7797 5.5V8.5C20.7797 9.60457 19.8789 10.5 18.7678 10.5H6.69635C5.58521 10.5 4.68445 9.60457 4.68445 8.5V5.5C4.68445 4.39543 5.58521 3.5 6.69635 3.5ZM18.7678 9C19.0456 9 19.2708 8.77614 19.2708 8.5V5.5C19.2708 5.22386 19.0456 5 18.7678 5H6.69635C6.41857 5 6.19338 5.22386 6.19338 5.5V8.5C6.19338 8.77614 6.41857 9 6.69635 9H18.7678Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M6.69635 13.5H18.7678C19.8789 13.5 20.7797 14.3954 20.7797 15.5V18.5C20.7797 19.6046 19.8789 20.5 18.7678 20.5H6.69635C5.58521 20.5 4.68445 19.6046 4.68445 18.5V15.5C4.68445 14.3954 5.58521 13.5 6.69635 13.5ZM18.7678 19C19.0456 19 19.2708 18.7761 19.2708 18.5V15.5C19.2708 15.2239 19.0456 15 18.7678 15H6.69635C6.41857 15 6.19338 15.2239 6.19338 15.5V18.5C6.19338 18.7761 6.41857 19 6.69635 19H18.7678Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

LayoutGrid23.propTypes = {
  color: PropTypes.string,
};
