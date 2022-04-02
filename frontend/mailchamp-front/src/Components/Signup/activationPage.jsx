import { Link } from "react-router-dom";
export const ActivationPage = () => {
  return (
    <div id="smallbox0">
      <div id="smallbox1">
        <div id="smallbox2" style={{ height: "105vh" }}>
          <div>
            {" "}
            <Link to="/signup">
              <img
                id="logo"
                src="https://login.mailchimp.com/release/1.1.1cf6f186fff809e72c1926a6889fdf8a84b938d52/images/brand_assets/logos/mc-freddie-dark.svg"
                alt=""
              />
            </Link>
            <div id="smallbox3" style={{ marginTop: "80px" }}>
              <div
                id="welcome"
                style={{ fontSize: "44px", lineHeight: "48.4px" }}
              >
                Check your email
              </div>
              <p style={{ margin: "20px 0" }}>
                We’ve sent a message to you with a link to activate your
                account.
              </p>
              <h4
                style={{
                  margin: "20px 0",
                  fontFamily: "Graphik Web Medium",
                  fontWeight: "500",
                }}
              >
                Didn't get an email ?
              </h4>
              <p style={{ lineHeight: "24px", marginBottom: "20px" }}>
                If you don’t see an email from us within a few minutes, a few
                things could have happened:
              </p>
              <ul style={{ padding: "20px", lineHeight: "24px" }}>
                <li>
                  The email is in your spam folder. (Sometimes things get lost
                  in there.)
                </li>
                <li>
                  The email address you entered had a mistake or typo. (Happens
                  to the best of us.)
                </li>
                <li>
                  You accidentally gave us another email address. (Usually a
                  work or personal one instead of the one you meant.)
                </li>
                <li>
                  We can’t deliver the email to this address. (Usually because
                  of corporate firewalls or filtering.)
                </li>
              </ul>
              <span style={{ color: "teal", borderBottom: "1px solid teal" }}>
                Re-enter your email and try again
              </span>
            </div>
            <div id="credit" style={{ marginTop: "150px" }}>
              ©2001–2022 All Rights Reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group, LLC.
              <br /> Cookie Preferences, Privacy, and Terms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
