import "./Signup.css";


export const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="smallbox0">
      <div id="smallbox1">
        <div id="smallbox2">
          <div>
            {" "}
            <img
              id="logo"
              src="https://login.mailchimp.com/release/1.1.1cf6f186fff809e72c1926a6889fdf8a84b938d52/images/brand_assets/logos/mc-freddie-dark.svg"
              alt=""
            />
            <div id="smallbox3">
              <div id="welcome">Welcome to Mailchimp</div>
              <div id="create">
                Create an account or
                <span> log in</span>
              </div>
              <form id="form" action="" onSubmit={handleSubmit}>
                <label id="email" htmlFor="">
                  Email
                </label>
                <br />
                <input type="text" id="emailInput" required />
                <label id="email" htmlFor="">
                  Username
                </label>
                <br />
                <input type="text" id="emailInput" required />
                <label id="email" htmlFor="">
                  Password
                </label>
                <br />
                <input type="text" id="emailInput" required />
                <br />
                <input id="checkbox" type="checkbox" name="" />
                <label id="spamMail" htmlFor="">
                  I don't want to receive <label>promotional emails</label> from
                  Mailchimp.
                </label>
                <br />
                <br />
                <br />
                <label htmlFor="" id="terms">
                  By creating an account, you agree to our <span>Terms</span>{" "}
                  and have read and acknowledge the{" "}
                  <span>Global Privacy Statement</span> .
                </label>
                <br />
                <br />
                <br />
                <input type="submit" value="Sign Up" name="" id="button" />
              </form>
            </div>
            <div id="credit">
              ©2001–2022 All Rights Reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group, LLC. Cookie Preferences,
              Privacy, and Terms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
