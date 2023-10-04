/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Networks = ({ color = "#FCA311", opacity = "unset", className }) => {
  return (
    <svg
      className={`property-1-networks ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="30" cy="29" fill={color} opacity={opacity} r="12" />
      <path
        className="path"
        d="M35 22C35 29.732 28.732 36 21 36M35 22C35 14.268 28.732 8 21 8M35 22H7M21 36C13.268 36 7 29.732 7 22M21 36C9.8 23.9385 16.3333 12.3077 21 8M7 22C7 14.268 13.268 8 21 8M21.3589 8C26.0256 12.3077 32.5589 23.9385 21.3589 36"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M37.5 31H41.5C45.2712 31 47.1569 31 48.3284 32.1716C49.5 33.3431 49.5 35.2288 49.5 39V39C49.5 42.7712 49.5 44.6569 48.3284 45.8284C47.1569 47 45.2712 47 41.5 47H19C15.2288 47 13.3431 47 12.1716 45.8284C11 44.6569 11 42.7712 11 39V37.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M17 41H27.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="42" cy="39" fill="black" r="1" />
      <circle className="circle" cx="38" cy="39" fill="black" r="1" />
      <circle className="circle" cx="34" cy="39" fill="black" r="1" />
    </svg>
  );
};

Property1Networks.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
