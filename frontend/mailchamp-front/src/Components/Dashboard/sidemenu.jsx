import "./sidemenu.css";
import React from "react";
import Accordion from "./Accordion";
import create from "../../imges/sidemenu-icon/create.svg";
import search from "../../imges/sidemenu-icon/search.svg";
import logo from "../../imges/logo.svg";
import star from "../../imges/star.svg";
import { Link } from "react-router-dom";
export const Sidemenu = ({ stateToggle, toggle, getProfile }) => {
  const accordionData = [
    {
      title: "Audience",
      icon: "sidemenu-icon/audience.svg",
      content: [
        "Audience Dashboard",
        <Link to="/dashboard/listmembers">All Contacts</Link>,
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
      content: [
        <Link to="/dashboard/allcampaigns">All campaigns</Link>,
        "Email templates",
        "Reports",
      ],
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
        <Link to="/dashboard">
          <div className="flex admin-logo">
            <img src={logo} width="80%" alt="" />
            <span className="collpase" onClick={stateToggle}></span>
          </div>
        </Link>
        <Link to="/dashboard/campaigns">
          <div className="create flex" style={{ gap: "13px" }}>
            <img src={create} alt="" />
            <span>Create</span>
          </div>
        </Link>
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
        <img src={star} className={toggle ? "hoverimg" : "imghide"} />

        <button>
          {" "}
          <Link to="/payment">Upgrade</Link>
        </button>

        <div className={toggle ? "showname" : ""}>
          <div
            className={
              toggle ? "profileName dashboard-profile" : "dashboard-profile"
            }
            onClick={() => getProfile(user_data.username)}
          >
            {user_data.username.charAt(0)}
          </div>

          <div>
            <span
              style={{
                fontWeight: "500",
                fontFamily: "Graphik Web Medium",
                fontSize: "13px",
              }}
            >
              {user_data.username}
            </span>

            <span
              style={{
                fontSize: "10px",
                display: "block",
                marginTop: "3px",
              }}
            >
              SSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
