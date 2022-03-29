import "./sidemenu.css";
import React from "react";
import Accordion from "./Accordion";
import create from "../../imges/sidemenu-icon/create.svg";
import search from "../../imges/sidemenu-icon/search.svg";
import logo from "../../imges/logo.svg";
import { useState } from "react";
export const Sidemenu = ({ stateToggle, toggle }) => {
  const accordionData = [
    {
      title: "Audience",
      icon: "sidemenu-icon/audience.svg",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Campaigns",
      icon: "sidemenu-icon/champ.svg",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Automations",
      icon: "sidemenu-icon/auto.svg",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Website",
      icon: "sidemenu-icon/web.svg",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Content Studio",
      icon: "sidemenu-icon/studio.svg",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Intergrations",
      icon: "sidemenu-icon/intergration.svg",
      content: ["Audience Dashboard", "All Contact"],
    },
  ];
  return (
    <div className={toggle ? `sidemenu sidemenu-small` : "sidemenu"}>
      <div>
        <div className="flex admin-logo">
          <img src={logo} width="80%" />
          <span className="collpase" onClick={stateToggle}></span>
        </div>
        <div className="create flex" style={{ gap: "13px" }}>
          <img src={create} />
          <span>Create</span>
        </div>
        <div className="accordion">
          {accordionData.map(({ title, content, icon }) => (
            <Accordion title={title} content={content} icon={icon} />
          ))}
        </div>
        <div className="create flex" style={{ padding: "10px 20px" }}>
          <img src={search} />
          <span>Search</span>
        </div>
      </div>
      <div className="profile">
        <button>Upgrade</button>
        <div>
          <img
            src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
            width="50px"
            height="50px"
          />
          <div>
            <span>Shilpa</span>
            <br />
            <span>SSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
