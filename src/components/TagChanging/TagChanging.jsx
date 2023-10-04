/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TagChanging = ({ property1 }) => {
  return (
    <>
      {["UI-UX-design", "application", "connectivity", "e-commerce"].includes(property1) && (
        <div className={`tag-changing property ${property1}`}>
          <div className="application-2">
            {property1 === "application" && <>Application</>}

            {property1 === "UI-UX-design" && <>UI UX Design</>}

            {property1 === "connectivity" && <>Connectivity</>}

            {property1 === "e-commerce" && <>eCommerce</>}
          </div>
        </div>
      )}

      {property1 === "cloud-migration" && (
        <img
          className="tag-changing property-cloud"
          alt="Property cloud"
          src="https://c.animaapp.com/VAe68flz/img/property-1-cloud-migration.svg"
        />
      )}
    </>
  );
};

TagChanging.propTypes = {
  property1: PropTypes.oneOf(["connectivity", "UI-UX-design", "cloud-migration", "application", "e-commerce"]),
};
