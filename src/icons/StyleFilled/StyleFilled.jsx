/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StyleFilled = ({ className }) => {
  return (
    <svg
      className={`style-filled ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4 5.5C4 4.39543 4.89543 3.5 6 3.5H18C19.1046 3.5 20 4.39543 20 5.5V8.5C20 9.60457 19.1046 10.5 18 10.5H6C4.89543 10.5 4 9.60457 4 8.5V5.5Z"
        fill="black"
      />
      <path
        className="path"
        d="M4 15.5C4 14.3954 4.89543 13.5 6 13.5H18C19.1046 13.5 20 14.3954 20 15.5V18.5C20 19.6046 19.1046 20.5 18 20.5H6C4.89543 20.5 4 19.6046 4 18.5V15.5Z"
        fill="black"
      />
    </svg>
  );
};
