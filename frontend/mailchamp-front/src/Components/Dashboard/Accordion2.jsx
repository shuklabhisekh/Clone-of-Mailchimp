import React, { useState } from "react";
import right_cart from "../../imges/sidemenu-icon/expendArrow.svg";
const Accordion2 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div
        className="accordion-title right-accordion"
        onClick={() => setIsActive(!isActive)}
      >
        <h2>{title}</h2>
        <img
          src={right_cart}
          width="25px"
          height="25px"
          className={isActive ? "rotate-arrow" : ""}
        />
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((c) => {
            return <div>{c}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion2;
