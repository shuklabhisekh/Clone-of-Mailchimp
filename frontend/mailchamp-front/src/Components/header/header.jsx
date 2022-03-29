import "./header.css";
import headerImg from "../../imges/header.webp";
import { Homepage } from "./Homepage";
function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <h1>
            Get down to <br />
            business and grow <br /> sales
          </h1>
          <p>
            Engage your customers and boost your business with Mailchimp's
            advanced, yet easy‑to‑use marketing platform.
          </p>
          <button className="signup">Sign up</button>
          <a href="">Compare Plans</a>
        </div>
        <div>
          <img src={headerImg} alt="" />
        </div>
      </div>
      <Homepage />
    </div>
  );
}

export default Header;
