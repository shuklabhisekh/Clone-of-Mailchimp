import React, { useState, useEffect } from "react";
import Accordion2 from "./Accordion2";
import { Link } from "react-router-dom";
import axios from "axios";
export const Steps = ({ toggle, getRoute }) => {
  const accordionData = [
    {
      title: "Create your first campaign",
      content: (
        <div className="container--camp">
          <h3>Choose how you’d like to start</h3>
          <div className="card-container">
            <div className="card">
              <img src="https://us14.admin.mailchimp.com/images/app-homepage/onboarding-checklist/email.svg" />
              <p className="card-title">Send your first email</p>
              <p className="card-des">
                Choose a pre-designed template or use our drag-and-drop builder
                to launch a campaign in minutes.
              </p>
              <Link to="/dashboard/campaigns">
                <button
                  className="card-btn card-teal"
                  // onClick={() => getRoute("campaigns")}
                >
                  Create Email
                </button>
              </Link>
            </div>
            <div className="card">
              <img src="https://us14.admin.mailchimp.com/images/app-homepage/onboarding-checklist/automation-img.svg" />
              <p className="card-title">Start an automation</p>
              <p className="card-des">
                Send timely and personalized emails without having to hit the
                send button each time.
              </p>
              <button className="card-btn">Start Automation</button>
            </div>
            <div className="card">
              <img src="https://us14.admin.mailchimp.com/images/app-homepage/onboarding-checklist/website-img.svg" />
              <p className="card-title">Create a website</p>
              <p className="card-des">
                Build a free website with all the tools needed to market your
                business built right in.
              </p>
              <Link to="/dashboard/websitebuilder">
                <button className="card-btn">Build Website</button>
              </Link>
            </div>
          </div>
          <p>
            Have something else in mind?
            <a href="#">Here are some other things you can create</a>
          </p>
        </div>
      ),
    },
    {
      title: "Add your contacts",
      content: (
        <div className="container--camp">
          <h3>These are the people who make up your audience</h3>
          <p
            style={{ textAlign: "left", fontSize: "16px", marginTop: "-13px" }}
          >
            Once you add your contacts, you’ll be able to send your first
            campaign.
          </p>
          <button className="card-btn card-teal">Import Contacts</button>
          <div className="card card-contact">
            <img src="https://us14.admin.mailchimp.com/images/app-homepage/onboarding-checklist/contacts-img.svg" />
            <div>
              <p className="card-title">No contacts? No problem.</p>
              <p className="card-des">
                We’ll help you build your Mailchimp audience with signup forms,
                social posts, and more.
              </p>
            </div>
            <button className="card-btn">Grow Your Audience</button>
          </div>
          <p style={{ textAlign: "left" }}>
            Contacts in a different app right now?{" "}
            <a href="">Sync with integrations</a>
          </p>
        </div>
      ),
    },
    {
      title: "Launch",
      content: (
        <div className="container--camp">
          <h3>Share your campaign with the world</h3>
          <div className="card card-contact">
            <div style={{ display: "flex", padding: "8px" }}>
              <img
                src="https://cdn-images.mailchimp.com/default-campaign-thumbnail.png"
                style={{ width: "15%" }}
              />
              <div>
                <p
                  className="card-des"
                  style={{ margin: "6px 0", color: "#241c15" }}
                >
                  <span
                    style={{
                      padding: "4px 6px",
                      margin: "2px",
                      background: "lightgrey",
                    }}
                  >
                    Draft
                  </span>
                  Campaign • Edited Mar 30
                </p>
                <p className="card-title" style={{ margin: "6px 0" }}>
                  Untitled
                </p>
              </div>
            </div>
            <button className="card-btn card-teal">Finish Campaign</button>
          </div>
          <p style={{ textAlign: "left" }}>
            Have something else in mind?
            <a href="">Here are some other things you can create</a>
          </p>
        </div>
      ),
    },
  ];

  const [totalAudience, settotalAudience] = useState(1);
  let { user_data } = JSON.parse(localStorage.getItem("user"));
  const user_id = user_data._id;
  useEffect(() => {
    axios
      .get(`https://localhost:3001/subscriber/${user_id}`)
      .then(({ data }) => {
        console.log(data);
        settotalAudience(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="content--header">
        <div>
          <img src="https://us14.admin.mailchimp.com/images/app-homepage/onboardingChecklistIllustration.svg" />
          <span>Here’s what we recommend you do next...</span>
        </div>
        <div>
          <span>1/3</span>
        </div>
      </div>
      <div className="accordion">
        {accordionData.map(({ title, content, icon }) => (
          <Accordion2 title={title} content={content} />
        ))}
      </div>
      <div className="container-audience ">
        <div className="audience1">
          <div>
            <h2>Here's what's happening</h2>
            <p>Filter By:All Activity</p>
          </div>
          <div>
            <p style={{ fontSize: "13px" }}>Audience trend • Mar 29</p>
            <h1>0 Subscribers Imported</h1>
          </div>
          <div>
            <h2>You've reached the end of the feed!</h2>
            <img src="https://us14.admin.mailchimp.com/release/1.1.1415adc1c55432119a03cd303d7ae191d9b3e9684/js-src/2b4712ac47a542cb3e055c2b11663810.svg" />
          </div>
        </div>
        <div className="audience2">
          <div>
            <h2>Total Audience</h2>
            <p className="color-teal">Add contact</p>
          </div>
          <div>
            <h1>{totalAudience}</h1>
            <p>
              +1 (<span className="color-teal">+100%</span>) this week
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "16px" }}>Total audience breakdown</h3>

            <div>
              <p>
                ss <br />
                +1 (<span className="color-teal">+100%</span>) this week
              </p>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
