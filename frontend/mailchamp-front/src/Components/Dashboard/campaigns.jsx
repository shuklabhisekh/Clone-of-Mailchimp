import "./campaigns.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export const Campaign = () => {
  const [ctoggle, csettoggle] = useState(false);
  const [ctoggle1, csettoggle1] = useState(false);

  const [ctoggle2, csettoggle2] = useState(false);

  //Edit name
  const [name, setname] = useState("Untitled");
  const [newName, setnewName] = useState("");
  const [editname, seteditname] = useState(false);

  //To send div inputs
  const [fromname, setfromname] = useState("");
  const [saveFrom, setsaveFrom] = useState(false);

  //Subject inputs
  const [subname, setsubname] = useState("");
  const [prevtext, setprevtext] = useState("");
  const [saveFrom1, setsaveFrom1] = useState(false);
  const [send, setsend] = useState(false);
  if (saveFrom == true) {
    localStorage.setItem("fromname", fromname);
  }
  if (saveFrom1 == true) {
    localStorage.setItem("subject", JSON.stringify([subname, prevtext]));
  }

  const [contacts, setcontacts] = useState([]);
  const [html, sethtml] = useState(null);
  const [fromdata, setfromdata] = useState(null);
  const [subject, setsubject] = useState(null);

  useEffect(() => {
    const contacts = localStorage.getItem("contact") || [];
    setcontacts(contacts);
    const html = localStorage.getItem("html");
    sethtml(html);

    const fromdata = localStorage.getItem("fromname");
    setfromdata(fromdata);
    const subject = JSON.parse(localStorage.getItem("subject"));
    setsubject(subject);

    if (contacts != null && fromdata != "" && subject != "" && html != null) {
      setsend(true);
    }
  }, [removeItems]);
  //GETING DATA
  const [loader, setloader] = useState(false);
  function storeData() {
    setloader(true);
    let [sub, prev] = subject;
    let data = { contacts, fromdata, sub, prev, html };
    axios
      .post("http://localhost:3001/sendmail", {
        data,
      })
      .then((res) => {
        console.log(res);
        setloader(false);
        alert("successfully send emails...");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        alert("failed to send emails..");
      });
    removeItems();
    // console.log(data);
  }

  function removeItems() {
    localStorage.removeItem("contact");
    localStorage.removeItem("html");
    localStorage.removeItem("fromname");
    localStorage.removeItem("subject");
  }

  return (
    <div className="campaign-container">
      <div className={loader ? "loading show-loader" : "loading hide-loader"}>
        <span></span>
      </div>
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
          <button
            className={send ? "active-send-btn" : "grey-btn"}
            onClick={storeData}
          >
            Send
          </button>
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
              {contacts.length > 1 ? (
                <img
                  src="https://www.svgrepo.com/show/364354/check-circle-fill.svg"
                  width="25px"
                  height="25px"
                  style={{ marginTop: "12px" }}
                />
              ) : (
                <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              )}

              <div>
                <h4>To</h4>
                <p>
                  <i>Who are you sending this campaign to?</i>
                </p>
              </div>
            </div>
            {!ctoggle ? (
              <button onClick={() => csettoggle(true)}>
                {contacts.length > 1 ? "Edit" : "Add Recipient"}
              </button>
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
              {(saveFrom && fromname.length > 1) || fromdata != null ? (
                <img
                  src="https://www.svgrepo.com/show/364354/check-circle-fill.svg"
                  width="25px"
                  height="25px"
                  style={{ marginTop: "12px" }}
                />
              ) : (
                <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              )}

              <div>
                <h4>From</h4>
                {saveFrom ? (
                  <p>{fromname}</p>
                ) : (
                  <p>
                    <i>Who is sending this campaign?</i>
                  </p>
                )}
              </div>
            </div>
            {!ctoggle1 ? (
              <button onClick={() => csettoggle1(true)}>
                {saveFrom || fromdata != null ? "edit Form" : "Add From"}
              </button>
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
                    <span>{100 - fromname.length} characters</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => {
                      setfromname(e.target.value);
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
                  <input type="text" />
                </div>
              </div>
              <button
                className={fromname.length > 1 ? "" : "save-btn"}
                onClick={() => {
                  csettoggle1(false);
                  setsaveFrom(true);
                }}
              >
                save
              </button>
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
              {(saveFrom1 && subname.length > 1) || subject != null ? (
                <img
                  src="https://www.svgrepo.com/show/364354/check-circle-fill.svg"
                  width="25px"
                  height="25px"
                  style={{ marginTop: "12px" }}
                />
              ) : (
                <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              )}

              <div>
                <h4>Subject</h4>
                <p>
                  <i>What's the subject line for this campaign?</i>
                </p>
              </div>
            </div>
            {!ctoggle2 ? (
              <button onClick={() => csettoggle2(true)}>
                {saveFrom1 || subject != null ? "edit Subject" : "Add Subject"}
              </button>
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
                      <span className="dim-el">
                        {150 - subname.length} characters
                      </span>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => setsubname(e.target.value)}
                    />
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
                      <span className="dim-el">
                        {150 - prevtext.length} characters
                      </span>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => setprevtext(e.target.value)}
                    />
                    <p className="subject-p font-medium">
                      <span>Preview text</span> appears in the inbox after the
                      subject line.
                    </p>
                  </div>
                  <button
                    className={subname.length > 1 ? "" : "save-btn"}
                    onClick={() => {
                      csettoggle2(false);
                      setsaveFrom1(true);
                    }}
                  >
                    save
                  </button>
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
                    {subname.length < 1 ? (
                      <ul className="ul1">
                        <li>Try to use no more than 9 words</li>
                        <li>Try to use no more than 1 emoji</li>
                        <li>Avoid using more than 60 characters</li>
                        <li>Avoid using more than 3 punctuation marks</li>
                      </ul>
                    ) : (
                      <ul className="ul2">
                        <li>
                          <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
                          <div>
                            <strong>It's short and sweet</strong>
                            <p>
                              Subject lines with fewer than 9 words tend to
                              perform better
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
                          <div>
                            <strong>
                              Emojis are great... in small quantities
                            </strong>
                            <p>
                              Subject lines with fewer than 9 words tend to
                              perform better
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
                          <div>
                            <strong>It's short and sweet</strong>
                            <p>
                              Subject lines with fewer than 9 words tend to
                              perform better
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
                          <div>
                            {" "}
                            <strong>It's short and sweet</strong>
                            <p>
                              Subject lines with fewer than 9 words tend to
                              perform better
                            </p>
                          </div>
                        </li>
                      </ul>
                    )}
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
              {html != null ? (
                <img
                  src="https://www.svgrepo.com/show/364354/check-circle-fill.svg"
                  width="25px"
                  height="25px"
                  style={{ marginTop: "12px" }}
                />
              ) : (
                <img src="https://www.svgrepo.com/show/356372/tick-circle.svg" />
              )}

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

      <div className="connect-social">
        <h3>Share Your Campaign</h3>
        <h4>Campaign Link</h4>
        <p>
          https://mailchi.mp/[xxxxxx]/[xxxxxx] <span>Edit</span>
        </p>
        <p>
          Want to brand your campaign link? Click edit to create a custom URL.
        </p>
        <h3>Add A Social Post To Your Campaign</h3>
        <div>
          <img
            src="https://us14.admin.mailchimp.com/images/icons/facebook.svg"
            width="35px"
            height="35px"
            alt="Facebook"
          />
          <div>
            <h4 className="mt">Facebook</h4>
            <p className="color">Connect Facebook</p>
          </div>
        </div>

        <div>
          <img
            src="https://us14.admin.mailchimp.com/images/icons/svg/twitter.svg"
            width="35px"
            height="30px"
            alt="Twitter"
          />
          <div>
            <h4 className="mt">Twitter</h4>
            <p className="color">Connect Twitter</p>
          </div>
        </div>
        <div>
          <img
            src="https://us14.admin.mailchimp.com/images/icons/ig_2x36.png"
            width="35px"
            height="35px"
            alt="instgram"
          />
          <div>
            <h4 className="mt">Instagram</h4>
            <p>
              Add an Instagram post to your campaign by connecting your
              <br />
              <span className="color">Instagram business profile</span> to your
              Facebook page.
            </p>
            <p className="color">Connect Instagram</p>
          </div>
        </div>
        <div>
          <h4>Settings & Tracking Edit</h4>
          <ul>
            <li>
              You're <strong>not using Inbox</strong> to manage replies.
            </li>
            <li>
              Your <strong>embedded videos will not auto-convert </strong>into
              linked thumbnail images.
            </li>
            <li>
              You're <strong>tracking opens.</strong>
            </li>
            <li>
              You're <strong>tracking clicks.</strong>
            </li>
            <li>
              You're <strong>not tracking plain-text clicks.</strong>
            </li>
            <li>
              You're <strong>not tracking e-commerce link activity.</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
