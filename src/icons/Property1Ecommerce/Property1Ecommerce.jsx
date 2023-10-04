/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Ecommerce = ({ color = "#FCA311", opacity = "unset", className }) => {
  return (
    <svg
      className={`property-1-ecommerce ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse className="ellipse-12" cx="34" cy="41.5" fill={color} opacity={opacity} rx="13" ry="12.5" />
      <path
        className="path"
        d="M19 15V12C19 9.23858 21.2386 7 24 7V7C26.7614 7 29 9.23858 29 12V15"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M41 48H17.531C13.1107 48 10.9006 48 9.70171 46.5716C8.50278 45.1433 8.88587 42.9666 9.65206 38.6133L12.1161 24.6133C12.6723 21.4527 12.9504 19.8725 14.0658 18.9362C15.1812 18 16.7858 18 19.995 18H29.005C32.2142 18 33.8188 18 34.9342 18.9362C36.0496 19.8725 36.3277 21.4527 36.8839 24.6133L37 25.2727"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M36 34H43.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="29" cy="24" fill="black" r="1" />
      <circle className="circle" cx="20" cy="24" fill="black" r="1" />
      <rect
        className="rect"
        height="14"
        rx="4"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="21"
        x="31"
        y="29"
      />
    </svg>
  );
};

Property1Ecommerce.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
