import "./campaigns.css";
import { useState } from "react";
export const Campaign = () => {
  const [ctoggle, csettoggle] = useState(false);
  const [ctoggle1, csettoggle1] = useState(false);
  const [ctoggle2, csettoggle2] = useState(false);
  return (
    <div className="campaign-container">
      <div></div>
      <h1>Untitled</h1>
      <span>Edit name</span>
      <div className="campaign-div">
        <div>
          <div>
            <div>
              <h4>To</h4>
              <p>
                <i>Who are you sending this campaign to?</i>
              </p>
            </div>
            {!ctoggle ? (
              <button onClick={() => csettoggle(true)}>Add Recipient</button>
            ) : (
              ""
            )}
          </div>
          {ctoggle ? (
            <div className="sub-camp--div">
              <h4>No contacts yet?</h4>
              <p>
                You can upload a spreadsheet of contacts or import them from
                another service. We’ll walk you through it.
              </p>
              <button className="card-btn card-teal">Import Contacts</button>
              <span onClick={() => csettoggle(false)}>Cancel</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <div>
              <h4>From</h4>
              <p>
                <i>Who is sending this campaign?</i>
              </p>
            </div>
            {!ctoggle1 ? (
              <button onClick={() => csettoggle1(true)}>Add From</button>
            ) : (
              ""
            )}
          </div>
          {ctoggle1 ? (
            <div className="sub-camp--div">
              <div>
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
              </div>
              <button className="card-btn card-teal">save</button>
              <span onClick={() => csettoggle1(false)}>Cancel</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <div>
              <h4>Subject</h4>
              <p>
                <i>What's the subject line for this campaign?</i>
              </p>
            </div>
            {!ctoggle2 ? (
              <button onClick={() => csettoggle2(true)}>Add Subject</button>
            ) : (
              ""
            )}
          </div>
          {ctoggle2 ? (
            <div className="sub-camp--div">
              <div>
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
              </div>
              <button className="card-btn card-teal">save</button>
              <span onClick={() => csettoggle2(false)}>Cancel</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div style={{ borderBottom: "none" }}>
            <div>
              <h4>Content</h4>
              <p>
                <i>Design the content for your email.</i>
              </p>
            </div>
            <button>Design Email</button>
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
