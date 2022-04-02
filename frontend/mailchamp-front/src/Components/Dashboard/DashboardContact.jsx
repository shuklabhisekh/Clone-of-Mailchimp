import "./DashboardContact.css";
import logo from "../../imges/logo.svg";
import { Link } from "react-router-dom";
export const DashboardPage = () => {
  const handlecolor = () => {};

  return (
    <div id="contact0">
      <div id="contact1">
        <div id="contactNav">
          <div id="leftPart">
            <div id="logo">
              {" "}
              <img src={logo} alt="" />{" "}
            </div>
            <div>
              {" "}
              <div id="importContact">Import Contacts</div>
              <div id="chooseMethod">Choose Method</div>
              <div id="border"></div>
            </div>
          </div>
          <div id="exit">
            <button>
              {" "}
              <Link to="/dashboard/campaigns">Exit </Link>
            </button>
          </div>
        </div>
        <div id="contact2">
          <div id="contact21">How would you like to add contacts?</div>
          <div id="contact22">
            Build your Mailchimp audience by adding or importing contacts you
            already have permission to market to.{" "}
            <a>Learn how consent impacts email delivery.</a>
          </div>
          <div id="chooseBox">
            <div>
              <div id="svg">
                {/* <img src="" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 1v22H1V1h22zm-6 2v7h-3.732l-.284-.25a3 3 0 100 4.5l.284-.25H17v7h4V3h-4zm-2 18v-5h-1a5 5 0 110-8h1V3H3v18h12z"
                  ></path>
                </svg>

                <input type="radio" name="" id="" />
              </div>
              <div id="textName">Import from another service</div>
              <div id="textInfo">
                Add contacts automatically from tools you already use.
              </div>
            </div>
            <div onClick={handlecolor}>
              <div id="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M12.782 7.098L13 21.5h-2l.218-14.402-6.036 5.633-1.364-1.462L12 3.632l8.182 7.637-1.364 1.462-6.036-5.633z"></path>
                </svg>
                <input type="radio" name="" id="" />
              </div>
              <div id="textName">Upload a file</div>
              <div id="textInfo">
                Import contacts from a CSV or tab-delimited TXT file.{" "}
                <a style={{ color: "black", textDecoration: "underline" }}>
                  More info
                </a>
              </div>
            </div>
          </div>
          <div id="chooseBox1">
            <div>
              <div id="svg">
                {/* <img src="" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  class="wink-icon"
                >
                  <path d="M18 4H4v14H2V2h16v2z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 22V6h16v16H6zM8 8h12v12H8V8z"
                  ></path>
                </svg>

                <input type="radio" name="" checked id="" />
              </div>
              <div id="textName">Copy and paste</div>
              <div id="textInfo">
                Directly paste in new contacts from a spreadsheet or similar
                list.
              </div>
            </div>
          </div>
          <div id="questionMark">?</div>
          <button id="button">
            <Link to="/members/importList" style={{ color: "#fff" }}>
              Continue
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
