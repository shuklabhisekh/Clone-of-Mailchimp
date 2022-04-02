import "./Allcampaigns.css";
import right_cart from "../../imges/sidemenu-icon/expendArrow.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Allcampaigns = () => {
  const navigate = useNavigate();
  let { user_data } = JSON.parse(localStorage.getItem("user"));
  const user_id = user_data._id;
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/campaigns/${user_id}`)
      .then(({ data }) => {
        console.log("res", data);
        setdata([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function editCamp(data) {
    console.log(data);
    const { contacts, fromdata, html, title, sub } = data;
    localStorage.setItem("fromname", fromdata);
    localStorage.setItem("subject", JSON.stringify(sub));
    localStorage.setItem("html", JSON.stringify(html));
    localStorage.setItem("contact", JSON.stringify(contacts[0]));
    navigate("/dashboard/campaigns");
  }

  return (
    <div className="container--allcampaigns">
      <div className="audi">
        <h1>Campaigns</h1>
        <h2>{user_data.email}</h2>
        <p>Your audience has 1 contacts. 1 of these are subscribers.</p>
      </div>
      <div className="header--allcampaigns">
        <span
          style={{
            color: "teal",
            borderBottom: "1px solid teal",
            paddingBottom: "12px",
          }}
        >
          List View
        </span>
        <span>Calendar View</span>
      </div>
      <div className="showall--camp">
        <div className="left-side-allcampaigns">
          <div className="allcampaigns--nav">
            <h3>View by Status</h3>
            <ul>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/all.svg" />
                  <span>All</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/ongoing.svg" />
                  <span>Ongoing</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/draft.svg" />
                  <span>Draft</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/completed.svg" />
                  <span>Completed</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="allcampaigns--nav">
            <h3>View by Type</h3>
            <ul>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/email.svg" />
                  <span>Emails</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/automation.svg" />
                  <span>Automations</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/landing-page.svg" />
                  <span>Landing Pages</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/ad.svg" />
                  <span>Ads</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/postcard.svg" />
                  <span>Postcards</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/social-post.svg" />
                  <span>Social Posts</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/survey.svg" />
                  <span>Surveys</span>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ padding: "20px 0" }}>
            <div>Create Folder</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 0",
              }}
            >
              <img src="https://us14.admin.mailchimp.com/images/campaigns/nav-icons/folder.svg" />
              <span>Untitled</span>
            </div>
          </div>
        </div>
        <div className="right-side-allcampaigns">
          <div className="right--allcampaigns">
            <input type="text" placeholder="Find a campaign by name or type" />
            <div>
              <span>Sort By</span>
              <select>
                <option>Last update</option>
                <option>Creation date</option>
              </select>
            </div>
          </div>
          <p>
            You can also search by <span>all audiences.</span>
          </p>
          <div
            style={{
              padding: "15px 0",

              color: "rgba(36, 28, 21, 0.65)",
              marginTop: "25px",
            }}
          >
            April 3
          </div>
          {data.map((el) => {
            return (
              <div className="lists-allcamp">
                <div>
                  <div className="imgIcon--allcamp"></div>
                  <div style={{ width: "50%" }}>
                    <div style={{ fontSize: "17px", color: "teal" }}>
                      {el.title}
                    </div>
                    <div style={{ fontSize: "14px", lineHeight: "24px" }}>
                      Regular
                    </div>
                    <p
                      style={{
                        margin: "8px 0",
                        color: "rgba(36, 28, 21, 0.65)",
                      }}
                    >
                      Edited on, {el.createdAt.slice(0, 10)} at{" "}
                      {el.createdAt.slice(11, 16)} by you
                    </p>
                  </div>
                  <span className="tag--allcamps">
                    {el.status == "send" ? (
                      <span style={{ color: "green" }}>Send</span>
                    ) : (
                      "Draft"
                    )}
                  </span>
                </div>
                {el.status == "send" ? (
                  ""
                ) : (
                  <div className="btns--allcamps" onClick={() => editCamp(el)}>
                    <button>Edit</button>
                    <img
                      src={right_cart}
                      className="rotate-arrow"
                      width="20px"
                      height="20px"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
