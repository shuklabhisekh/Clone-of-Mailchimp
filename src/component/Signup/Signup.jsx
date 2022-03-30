import "./Signup.css";
export const Signup = () => {
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
              <form action="">
                <label htmlFor="">Email</label>
                <br />
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
