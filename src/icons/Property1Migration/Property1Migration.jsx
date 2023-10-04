/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Migration = ({ color = "#FCA311", opacity = "unset", className }) => {
  return (
    <svg
      className={`property-1-migration ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse className="ellipse-12" cx="27" cy="26.5" fill={color} opacity={opacity} rx="13" ry="12.5" />
      <rect
        className="rect"
        height="15"
        rx="4"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="27"
        x="5"
        y="8"
      />
      <path
        className="path"
        d="M20 18H27"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M38 43H45"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M24 39V39C24 38.0707 24 37.606 24.0769 37.2196C24.3925 35.6329 25.6329 34.3925 27.2196 34.0769C27.606 34 28.0707 34 29 34H43.5C46.7875 34 48.4312 34 49.5376 34.908C49.7401 35.0742 49.9258 35.2599 50.092 35.4624C51 36.5688 51 38.2125 51 41.5V41.5C51 44.7875 51 46.4312 50.092 47.5376C49.9258 47.7401 49.7401 47.9258 49.5376 48.092C48.4312 49 46.7875 49 43.5 49H28.5C28.0357 49 27.8035 49 27.6079 48.9807C25.7088 48.7937 24.2063 47.2912 24.0193 45.3921C24 45.1965 24 44.9643 24 44.5V44.5V44"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M37 15C39.4074 15.8772 44.2222 19.1053 44.2222 25M44.2222 25L47 22.3684M44.2222 25L40.8889 22.8947"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M17 39C14.5926 38.1228 9.77778 34.8947 9.77778 29M9.77778 29L7 31.6316M9.77778 29L13.1111 31.1053"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="11" cy="13" fill="black" r="1" />
      <circle className="circle" cx="29" cy="39" fill="black" r="1" />
      <circle className="circle" cx="15" cy="13" fill="black" r="1" />
      <circle className="circle" cx="33" cy="39" fill="black" r="1" />
    </svg>
  );
};

Property1Migration.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
