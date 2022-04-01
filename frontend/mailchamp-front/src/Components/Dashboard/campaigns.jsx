import "./campaigns.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Campaign = () => {
  const [ctoggle, csettoggle] = useState(false);
  const [ctoggle1, csettoggle1] = useState(false);
  const [ctoggle2, csettoggle2] = useState(false);
  const [name, setname] = useState("Untitled");
  const [newName, setnewName] = useState("");
  const [editname, seteditname] = useState(false);

  const [char, setchar] = useState(100);
  const [fromname, setfromname] = useState("");
  return (
    <div className="campaign-container">
      <div className="campaign-nav">
        <div>
          <div className="bg-email"></div>
          <div>
            <h4>
              Let's get started! <span>Draft</span>
            </h4>
            <p>Draft email</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a className="finish-btn">Finish later</a>
          <button className="grey-btn">Schedule</button>
          <button className="grey-btn">Send</button>
        </div>
      </div>
      <div className="campaign--name">
        {!editname ? (
          <div>
            <h2>{name}</h2>
            <span className="editname" onClick={() => seteditname(true)}>
              Edit name
            </span>
          </div>
        ) : (
          <div>
            <input type="text" onChange={(e) => setnewName(e.target.value)} />
            <div>
              <button
                onClick={() => {
                  setname(newName);
                  seteditname(false);
                }}
              >
                Save
              </button>
              <span
                href=""
                onClick={() => seteditname(false)}
                className="finish-btn"
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="campaign-div">
        <div style={{ borderTop: "none" }}>
          <div>
            <div className="campaign--head">
              <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              <div>
                <h4>To</h4>
                <p>
                  <i>Who are you sending this campaign to?</i>
                </p>
              </div>
            </div>
            {!ctoggle ? (
              <button onClick={() => csettoggle(true)}>Add Recipient</button>
            ) : (
              ""
            )}
          </div>
          {ctoggle ? (
            <div
              className="sub-camp--div"
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <img
                src="https://us14.admin.mailchimp.com/images/brand_assets/illos/art-empty-default-alt.png"
                width="150px"
                height="150px"
              />
              <div>
                <h1>No contacts yet?</h1>
                <p className="dim-el">
                  You can upload a spreadsheet of contacts or import them from
                  another service. <br />
                  We’ll walk you through it.
                </p>
                <Link to="/members/import">
                  <button
                    style={{ background: "#007c89", marginRight: "10px" }}
                  >
                    Import Contacts
                  </button>
                </Link>
                <span className="finish-btn" onClick={() => csettoggle(false)}>
                  Cancel
                </span>
                <p
                  className="dim-el"
                  style={{ fontSize: "14px", margin: "9px 0" }}
                >
                  Your email draft is saved under Campaigns, and you can come
                  back to it any time.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <div className="campaign--head">
              <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              <div>
                <h4>From</h4>
                <p>
                  <i>Who is sending this campaign?</i>
                </p>
              </div>
            </div>
            {!ctoggle1 ? (
              <button onClick={() => csettoggle1(true)}>Add From</button>
            ) : (
              ""
            )}
          </div>
          {ctoggle1 ? (
            <div
              className="sub-camp--div"
              style={{ width: "90%", marginTop: "-25px" }}
            >
              <div className="sub-camp--inputs">
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "95%",
                      fontWeight: "500",
                    }}
                    className="font-medium"
                  >
                    <span>Name</span>
                    <span>{char} characters</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => {
                      setfromname(e.target.value);
                      setchar(char - 1);
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "18px",
                      color: "rgba(36, 28, 21, 0.65)",
                    }}
                  >
                    Use something subscribers will instantly recognize, like
                    your company name.
                  </p>
                </div>
                <div>
                  <div style={{ fontWeight: "500" }} className="font-medium">
                    Email
                  </div>
                  <input type="text" value="shilpa@gmail.com" disabled />
                </div>
              </div>
              <button className="save-btn">save</button>
              <span className="finish-btn" onClick={() => csettoggle1(false)}>
                Cancel
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <div className="campaign--head">
              <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              <div>
                <h4>Subject</h4>
                <p>
                  <i>What's the subject line for this campaign?</i>
                </p>
              </div>
            </div>
            {!ctoggle2 ? (
              <button onClick={() => csettoggle2(true)}>Add Subject</button>
            ) : (
              ""
            )}
          </div>
          {ctoggle2 ? (
            <div
              className="sub-camp--div"
              style={{ width: "90%", marginTop: "-25px" }}
            >
              <div className="sub-camp--inputs">
                <div>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "95%",
                        fontWeight: "500",
                      }}
                      className="font-medium"
                    >
                      <span>Subject</span>
                      <span className="dim-el">150 characters</span>
                    </div>
                    <input type="text" />
                    <p className="subject-p font-medium">
                      See how your <span>recent subject lines</span> performed.
                      <span>View our subject line guide</span>
                    </p>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "95%",
                        fontWeight: "500",
                      }}
                      className="font-medium"
                    >
                      <span>PreviewText</span>
                      <span className="dim-el">150 characters</span>
                    </div>
                    <input type="text" />
                    <p className="subject-p font-medium">
                      <span>Preview text</span> appears in the inbox after the
                      subject line.
                    </p>
                  </div>
                  <button className="save-btn">save</button>
                  <span
                    className="finish-btn"
                    onClick={() => csettoggle2(false)}
                  >
                    Cancel
                  </span>
                </div>
                <div>
                  <div className="subject-card">
                    <h5>
                      A great subject line gives your audience a reason to open
                      your email.
                    </h5>
                    <span>Based on best practice</span>
                    <ul>
                      <li>Try to use no more than 9 words</li>
                      <li>Try to use no more than 1 emoji</li>
                      <li>Avoid using more than 60 characters</li>
                      <li>Avoid using more than 3 punctuation marks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div style={{ borderBottom: "none" }}>
            <div className="campaign--head">
              <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              <div>
                <h4>Content</h4>
                <p>
                  <i>Design the content for your email.</i>
                </p>
              </div>
            </div>
            <button>
              <Link to="/dashboard/templates">Design Email</Link>
            </button>
          </div>
          <div className="sub-camp--div" style={{ textAlign: "center" }}>
            <img
              src="https://cdn-images.mailchimp.com/template_icons_basic/svg/template-bg.svg"
              width="200px"
              height="250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
