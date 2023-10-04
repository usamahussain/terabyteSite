/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Pos = ({ color = "#FCA311", opacity = "unset", className }) => {
  return (
    <svg
      className={`property-1-pos ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse className="ellipse-12" cx="36" cy="31.5" fill={color} opacity={opacity} rx="13" ry="12.5" />
      <path
        className="path"
        d="M20 16.7327L31 16.7327"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M20 22.7327L24 22.7327"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M43 24.2411V7.22329C43 6.66718 42.5463 6.2179 41.9902 6.22334L37.7063 6.26527C37.4054 6.26822 37.1219 6.40649 36.9343 6.64175L35.8426 8.01069C35.6264 8.28478 35.2195 8.29677 34.9879 8.03587L33.3485 6.18828C33.117 5.92737 32.71 5.93936 32.4938 6.21346L31.0763 8.01069C30.8601 8.28478 30.4531 8.29677 30.2216 8.03587L28.5821 6.18828C28.3506 5.92737 27.9437 5.93936 27.7275 6.21346L26.3099 8.01069C26.0937 8.28478 25.6868 8.29677 25.4552 8.03587L23.8158 6.18828C23.5843 5.92737 23.1773 5.93936 22.9611 6.21346L21.8025 7.68236C21.4407 8.14108 20.7644 8.19326 20.3365 7.79547L18.8953 6.45571C18.7103 6.28371 18.4671 6.18811 18.2145 6.18811H14C13.4477 6.18811 13 6.63583 13 7.18811V28.4401L13 47.6157C13 48.2605 13.5235 48.7814 14.1651 48.7751L18.2222 48.7354C18.5684 48.732 18.8948 48.5726 19.1113 48.3011L20.1574 46.9893C20.3736 46.7152 20.7805 46.7032 21.0121 46.9641L22.6515 48.8117C22.883 49.0726 23.29 49.0606 23.5062 48.7865L24.9237 46.9893C25.1399 46.7152 25.5469 46.7032 25.7784 46.9641L27.4179 48.8117C27.6494 49.0726 28.0563 49.0606 28.2725 48.7865L29.6901 46.9893C29.9063 46.7152 30.3133 46.7032 30.5448 46.9641L32.1842 48.8117C32.4157 49.0726 32.8227 49.0606 33.0389 48.7865L34.0955 47.4469C34.5129 46.9177 35.2902 46.8574 35.7834 47.316L37.0608 48.5035C37.2741 48.7018 37.5539 48.8119 37.8444 48.8119H41.8462C42.4834 48.8119 43 48.2928 43 47.6524L43 32.9369"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle className="circle" cx="21" cy="38.7327" fill="black" r="1" />
      <circle className="circle" cx="25" cy="38.7327" fill="black" r="1" />
    </svg>
  );
};

Property1Pos.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
