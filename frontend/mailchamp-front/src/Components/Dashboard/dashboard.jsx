import { Sidemenu } from "./sidemenu";
import { Content } from "./content";
import "./dashboard.css";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import rightarrow from "../../imges/caretRight.svg";
function Dashboard() {
  const [toggle, settoggle] = useState(false);
  const { pages } = useParams();

  function changeState() {
    settoggle(!toggle);
  }

  const [profile, setprofile] = useState(false);
  const [profileName, setprofileName] = useState();
  function getProfile(name) {
    setprofile(!profile);
    setprofileName(name);
  }

  return (
    <>
      <Sidemenu
        stateToggle={changeState}
        toggle={toggle}
        getProfile={getProfile}
      />

      <Content toggle={toggle} pages={pages} />
      {!profile ? (
        ""
      ) : (
        <div className="profile-details">
          <div>
            <div className="dashboard-profile">{profileName.charAt(0)}</div>
            <div>
              <span
                style={{
                  fontWeight: "500",
                  fontFamily: "Graphik Web Medium",
                  fontSize: "13px",
                }}
              >
                {profileName}
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
            <span id="ownertag">Owner</span>
          </div>
          <ul>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Notifications</span>{" "}
              <img
                src={rightarrow}
                width="10px"
                height="10px"
                style={{ marginRight: "-10px" }}
              />
            </li>
            <li>Profile</li>
            <li>Account & biling</li>
            <li>Pricing plans</li>
            <li>Hire an expert</li>
            <li>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
          <p>
            <u>Privacy</u> and <u>Terms</u>
          </p>
          <p>
            <u>Cookie Preferences</u>
          </p>
        </div>
      )}
    </>
  );
}

export default Dashboard;
