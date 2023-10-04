/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icons2 = ({ color = "#858484", opacity = "unset", className }) => {
  return (
    <svg
      className={`icons-2 ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse className="ellipse-12" cx="38" cy="34.5" fill={color} opacity={opacity} rx="13" ry="12.5" />
      <path
        className="path"
        d="M50 30V21C50 17.2288 50 15.3431 48.8284 14.1716C47.6569 13 45.7712 13 42 13H14C10.2288 13 8.34315 13 7.17157 14.1716C6 15.3431 6 17.2288 6 21V35C6 38.7712 6 40.6569 7.17157 41.8284C8.34315 43 10.2288 43 14 43H43C45.8089 43 47.2134 43 48.2223 42.3259C48.659 42.034 49.034 41.659 49.3259 41.2223C50 40.2134 50 38.8089 50 36V36"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="20" cy="19" fill="black" r="1" />
      <circle className="circle" cx="16" cy="19" fill="black" r="1" />
      <circle className="circle" cx="12" cy="19" fill="black" r="1" />
      <path
        className="path"
        d="M21 26L16.6727 30.7601C16.3012 31.1687 16.3313 31.8012 16.7399 32.1727L21.5 36.5M31 26L25 36.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M35.5 36.5L39.8273 31.7399C40.1988 31.3313 40.1687 30.6988 39.7601 30.3273L35 26"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icons2.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
