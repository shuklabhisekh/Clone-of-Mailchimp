import logo from "../../imges/null.svg";
import logo_name from "../../imges/name.svg";

import search from "../../imges/search.svg";
import web from "../../imges/web.svg";
import right_cart from "../../imges/caretRight.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={Navbar ? `sticky white` : `sticky yellow`}>
      <nav className="navbar">
        <div className="navbar--left">
          <ul>
            <li>
              <div class="subnav">
                <button class="subnavbtn">
                  <a href="#">Products</a>
                </button>
                <div class="subnav-content">
                  <ul className="subnav-list">
                    <li>
                      <div>
                        <h2 className="subnav-title">WE'LL HELP YOU —</h2>

                        <div className="subnav-header">
                          <span>Get Your Business Online</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Market Your Business</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2 className="subnav-title">PLATFORM FEATURES —</h2>
                        <div className="subnav-header">
                          <span>Audience Management</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Creative Tools</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Marketing Automation</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Insights & Analytics</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2 className="subnav-title">
                          NOT SURE WHERE TO START? —
                        </h2>

                        <div className="subnav-header">
                          <span>What's Right for Me?</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2 style={{ fontWeight: "500" }}>Product Updates</h2>
                        <p className="subnav-para">
                          Get the latest on new features, product improvements,
                          and other announcements.
                        </p>
                        <a href="#" className="link">
                          See all integrations{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div class="subnav">
                <button class="subnavbtn">
                  <a href="">Resources</a>
                </button>
                <div class="subnav-content">
                  <ul className="subnav-list">
                    <li>
                      <div>
                        <h2 className="subnav-title">LEARN —</h2>

                        <div className="subnav-header">Mailchimp 101</div>
                        <div className="subnav-header">Help Center</div>
                        <div className="subnav-header">
                          <span>Marketing Library</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2 className="subnav-title">COMMUNITY —</h2>
                        <div className="subnav-header">
                          <span>For Freelancers & Agencies</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>For Developers</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          Hire A Trusted Partner
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2 style={{ fontWeight: "500" }}>App Integrations</h2>
                        <p className="subnav-para">
                          Connect your digital tools so you can do more with
                          your marketing.
                        </p>
                        <a href="#" className="link">
                          See all integrations{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div class="subnav">
                <button class="subnavbtn">
                  <a href="">Insprition</a>
                </button>
                <div class="subnav-content">
                  <ul className="subnav-list">
                    <li>
                      <div>
                        <h2 className="subnav-title">
                          <img
                            src="https://eep.io/images/yzco4xsimv0y/MGifxiLMDNEBfuw4CfE2z/d83e5d33c23840148e6f1c9669d11a34/MCP.svg?w=520&fm=webp&q=80"
                            alt=""
                            width="50%"
                            height="20%"
                          />
                        </h2>

                        <div className="subnav-header">
                          <span>Podcasts</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Series</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Films</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2 className="subnav-title">
                          <img
                            src="https://eep.io/images/yzco4xsimv0y/6dAj3Qwts7baFYveSjoNtu/d2f0f010176f132356c978fa96073835/Courier.svg?w=520&fm=webp&q=80"
                            alt=""
                            width="50%"
                            height="20%"
                          />
                        </h2>
                        <div className="subnav-header">
                          <span>Expert Insights</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Industry Trends</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                        <div className="subnav-header">
                          <span>Smart Living</span>
                          <img
                            src={right_cart}
                            className="arrow-color"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <button class="subnavbtn">
                <a href="">Pricing</a>
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar--center">
          <img src={logo} alt="" />
          <img src={logo_name} alt="" />
        </div>
        <div className="navbar--right">
          <ul>
            <li>
              <img src={web} alt="" width="20px" height="20px" />
            </li>
            <li>
              <img src={search} alt="" width="20px" height="20px" />
            </li>
            <li className="login">Log In</li>
            <li className="signup">
              <Link to="/signup">Sign Up Free</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
