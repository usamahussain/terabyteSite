/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoAnimation = ({
  property1,
  className,
  symbolicClassName,
  unionClassName,
  union = "https://c.animaapp.com/VAe68flz/img/union-4.svg",
  frameClassName,
  frameClassNameOverride,
  teraByteClassName,
  allRightsClassName,
  groupClassName,
  overlapGroupClassName,
  divClassName,
  ellipseClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`logo-animation ${className}`}>
      <div className={`symbolic ${symbolicClassName}`}>
        <img className={`union ${unionClassName}`} alt="Union" src={union} />
      </div>
      <div className={`frame ${frameClassName}`}>
        <div className={`div ${frameClassNameOverride}`}>
          <p className={`tera-byte ${teraByteClassName}`}>
            <span className="text-wrapper">Tera</span>
            <span className="span">Byte</span>
          </p>
          <div className={`div-2 ${allRightsClassName}`}>
            <div className={`group ${groupClassName}`}>
              <div className={`div-2 ${overlapGroupClassName}`}>
                <div className={`text-wrapper-2 ${divClassName}`}>R</div>
                <div className={`ellipse ${ellipseClassName}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={`designs-wrapper ${divClassNameOverride}`}>
          <div className={`designs ${divClassName1}`}>
            {property1 === "design-agency" && <>Designs</>}

            {property1 === "software-development" && <>Development</>}

            {property1 === "networks" && <>Networks</>}
          </div>
        </div>
      </div>
    </div>
  );
};

LogoAnimation.propTypes = {
  property1: PropTypes.oneOf(["design-agency", "software-development", "networks"]),
  union: PropTypes.string,
};
