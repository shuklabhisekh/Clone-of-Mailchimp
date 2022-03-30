import React, { useState } from "react";
import right_cart from "../../imges/sidemenu-icon/expendArrow.svg";
const Accordion = ({ title, icon, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="flex">
          <img src={require("../../imges/" + icon)} width="25px" />
          <span>{title}</span>
        </div>
        <img
          src={right_cart}
          width="25px"
          height="25px"
          className={isActive ? "rotate-arrow" : ""}
        />
      </div>
      {isActive && (
        <div className="accordion-content">
          <ul className="accor-subList">
            {content.map((c) => {
              return <li>{c}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
