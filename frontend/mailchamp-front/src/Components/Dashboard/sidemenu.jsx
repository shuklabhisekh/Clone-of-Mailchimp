import "./sidemenu.css";
import React from "react";
import Accordion from "./Accordion";
import create from "../../imges/sidemenu-icon/create.svg";
import search from "../../imges/sidemenu-icon/search.svg";
import logo from "../../imges/logo.svg";

export const Sidemenu = ({ stateToggle, toggle }) => {
  const accordionData = [
    {
      title: "Audience",
      icon: "sidemenu-icon/audience.svg",
      content: [
        "Audience Dashboard",
        "All Contacts",
        "Signup froms",
        "Tag",
        "Segments",
        "Surveys",
        "Preferences center",
        "Inbox",
      ],
    },
    {
      title: "Campaigns",
      icon: "sidemenu-icon/champ.svg",
      content: ["All campaigns", "Email templates", "Reports"],
    },
    {
      title: "Automations",
      icon: "sidemenu-icon/auto.svg",
      content: [
        "Customer Journeys",
        "Transactional Email",
        "Retargeting ads",
        "Postcards",
      ],
    },
    {
      title: "Website",
      icon: "sidemenu-icon/web.svg",
      content: [
        "Website",
        "Store",
        "Appointments",
        "Domains",
        "Settings",
        "Reports",
      ],
    },
    {
      title: "Content Studio",
      icon: "sidemenu-icon/studio.svg",
      content: [
        "Creative Assistant",
        "My Files",
        "Products",
        "Giphy",
        "Instagram",
        "My Logo",
      ],
    },
    {
      title: "Intergrations",
      icon: "sidemenu-icon/intergration.svg",
      content: ["Manage", "Add new"],
    },
  ];

  let { user_data } = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={toggle ? `sidemenu sidemenu-small` : "sidemenu"}>
      <div>
        <div className="flex admin-logo">
          <img src={logo} width="80%" alt="" />
          <span className="collpase" onClick={stateToggle}></span>
        </div>
        <div className="create flex" style={{ gap: "13px" }}>
          <img src={create} alt="" />
          <span>Create</span>
        </div>
        <div className="accordion">
          {accordionData.map(({ title, content, icon }) => (
            <Accordion title={title} content={content} icon={icon} />
          ))}
        </div>
        <div className="create flex" style={{ padding: "10px 20px" }}>
          <img src={search} alt="" />
          <span>Search</span>
        </div>
      </div>
      <div className="profile">
        <button>Upgrade</button>
        <div>
          <img
            src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
            alt=""
            width="50px"
            height="50px"
          />
          <div>
            <span>{user_data.username}</span>
            <br />
            <span>SSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
