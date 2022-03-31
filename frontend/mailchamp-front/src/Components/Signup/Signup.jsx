import { useState } from "react";
import "./Signup.css";
import axios from "axios";
export const Signup = () => {
  const [text, setText] = useState({});

  const { username, password, email } = text;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    Register(text);
    async function Register(e) {
      try {
        //   console.log("inside")
        //    e.preventDefault();
        var register_data = {
          //   first_name: document.getElementById("f_name").value,
          //   last_name: document.getElementById("l_name").value,
          //   email: document.getElementById("email").value,
          //   password: document.getElementById("password").value,
          email: e.email,
          username: e.username,
          password: e.password,
        };
        // console.log(register_data, "registered data");
        axios
          .post("http://localhost:3001/mails/sendverification", register_data)
          .then((res) => {
            console.log("this is email data");
          })
          .catch((err) => {
            console.log(err);
          });
        register_data = JSON.stringify(register_data);
        //  console.log(register_data)
      } catch (err) {
        console.log(err);
      }

      let reg_api = `http://localhost:3001/register`;
      let responce = await fetch(reg_api, {
        method: "POST",
        body: register_data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await responce.json();
      console.log("data send to mongo", data);
    }
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
                <input
                  name="email"
                  value={email}
                  type="text"
                  id="emailInput"
                  onChange={handleChange}
                  required
                />
                <label id="email" htmlFor="">
                  Username
                </label>
                <br />
                <input
                  name="username"
                  value={username}
                  type="text"
                  onChange={handleChange}
                  id="emailInput"
                  required
                />
                <label id="email" htmlFor="">
                  Password
                </label>
                <br />
                <input
                  name="password"
                  value={password}
                  type="text"
                  onChange={handleChange}
                  id="emailInput"
                  required
                />
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
