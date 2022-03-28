import logo from "../../imges/null.svg";
import logo_name from "../../imges/name.svg";
import { useState } from "react";
import Submenu from "./submenu";
import search from "../../imges/search.svg";

import "./navbar.css";
function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [topic, settopic] = useState("");
  return (
    <div>
      <nav className="navbar ">
        <div className="navbar--left">
          <ul>
            <li
              onMouseEnter={() => {
                setIsShown(true);
                settopic("product");
              }}
              onMouseLeave={() => setIsShown(false)}
            >
              Products
            </li>
            <li
              onMouseEnter={() => {
                setIsShown(true);
                settopic("resources");
              }}
              onMouseLeave={() => setIsShown(false)}
            >
              Resources
            </li>
            <li
              onMouseEnter={() => {
                setIsShown(true);
                settopic("insprition");
              }}
              onMouseLeave={() => setIsShown(false)}
            >
              Insprition
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="navbar--center">
          <img src={logo} alt="" />
          <img src={logo_name} alt="" />
        </div>
        <div className="navbar--right">
          <ul>
            <li>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_190618.png"
                alt=""
                width="20px"
                height="20px"
              />
            </li>
            <li>
              <img src={search} alt="" width="20px" height="20px" />
            </li>
            <li className="login">Log In</li>
            <li className="signup">Sign Up Free</li>
          </ul>
        </div>
      </nav>
      {isShown ? <Submenu topic={topic} /> : ""}
    </div>
  );
}

export default Navbar;
