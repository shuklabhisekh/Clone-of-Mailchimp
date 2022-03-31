import { Link } from "react-router-dom";
import logo from "../../imges/logo.svg";
import "./Templates.css";
import { templatesList } from "./templates";
export const Campaigntemplate = () => {
  // console.log(templatesList);
  const temp = templatesList.map((template) => {
    return (
      <Link to={`/dashboard/builder/${template.id}`} key={template.id}>
        <div
          style={{
            border: "1px solid #bdbbb9",
            width: "250px",
            height: "250px",
            borderRadius: "3px",
          }}
        >
          <img
            src={require(`./templatesImg/${template.img}`)}
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>
    );
  });
  return (
    <div className="templates">
      <div className="Builder-nav">
        <div>
          <Link to="/dashboard">
            <img src={logo} width="200px" />
          </Link>
          <span style={{ color: "grey" }}>Untitled</span>
        </div>
        <Link to="/dashboard/campaigns">
          <button
            style={{ background: "transparent", color: "grey", border: "none" }}
          >
            Cancel
          </button>
        </Link>
      </div>
      <div className="templates--list">
        <h2>Select a template</h2>
        <ul>
          <li className="active--list">Layouts</li>
          <li>Themes</li>
          <li>Saved templates</li>
          <li>Campaigns</li>
          <li>Code your own</li>
        </ul>
        <div className="highlight-div">
          <img
            src="https://us14.admin.mailchimp.com/images/brand_assets/illos/art-other-first-purchase.png"
            width="70px"
            height="70px"
            alt=""
          />
          <div>
            <h4>More ways to tell your story</h4>
            <p>
              Get access to a variety of layouts that can keep your
              <br /> emails looking professional and fresh.
            </p>
          </div>
          <button>Upgrade Now</button>
        </div>
        <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Featured</h4>
        <div className="template-features">{temp}</div>
      </div>
    </div>
  );
};
