import "./allcontacts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Add_contact } from "./Add_contact";
export const AllContacts = () => {
  let { user_data } = JSON.parse(localStorage.getItem("user"));
  const user_id = user_data._id;
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/subscriber/${user_id}`)
      .then(({ data }) => {
        console.log("res", data);
        setdata([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [t1, sett1] = useState(false);
  const [t2, sett2] = useState(false);
  const [t3, sett3] = useState(false);

  const [query, setquery] = useState("");
  return (
    <div style={{ marginLeft: "-50px" }}>
      <div className="audi">
        <h1>Audience</h1>
        <h2>{user_data.email}</h2>
        <p>Your audience has 1 contacts. 1 of these are subscribers.</p>
      </div>
      <div className="over">
        <p id="overview">Overview</p>
        <div>
          <p className="submenu-head-contact" onClick={() => sett1(!t1)}>
            <span>Manage contacts</span>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </p>
          {!t1 ? (
            ""
          ) : (
            <ul className="submenu--contact">
              <li>View archieved contacts</li>
              <li>Unsubscribed addresses</li>
              <li>Groups</li>
              <li>Segment</li>
              <li>Tags</li>
              <li>Import history</li>
              <li>Audience export</li>
              <li>Contacts export</li>
              <li>Archieve all contacts</li>
            </ul>
          )}
        </div>
        <div>
          <p className="submenu-head-contact" onClick={() => sett2(!t2)}>
            <span>Add contacts</span>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </p>
          {!t2 ? (
            ""
          ) : (
            <ul className="submenu--contact">
              <li
                onClick={() => {
                  setquery("addSubscriber");
                  sett2(!t2);
                }}
              >
                Add Subscriber
              </li>
              <li>Import contacts</li>
            </ul>
          )}
        </div>

        <p>Signup forms</p>
        <p>Preferences center</p>
        <div>
          <p className="submenu-head-contact" onClick={() => sett3(!t3)}>
            <span>Settings</span>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </p>
          {!t3 ? (
            ""
          ) : (
            <ul className="submenu--contact">
              <li>Audience name and defaults</li>
              <li>GDPR fields and settings</li>
              <li>Publicity settings</li>
              <li>Audience fields and *|MERGE|* tags</li>
              <li>Required email footer content</li>
              <li>Email beamer</li>
              <li>Google analytics</li>
              <li>Webhooks</li>
            </ul>
          )}
        </div>

        <p>Inbox</p>
        <p>Surverys</p>
      </div>
      <div className="srchdiv">
        <img
          className="srchimg"
          src="https://img.icons8.com/ios/72/search--v1.png"
          alt=""
        />
      </div>

      {query == "addSubscriber" ? (
        <Add_contact />
      ) : (
        <div>
          <div className="column">
            <select className="toggle" name="" id=" toggle">
              <option value="">Toggle columns</option>
              <option value="">First Name</option>
              <option value="">Last Name</option>
              <option value="">Address</option>
              <option value="">Phone No.</option>
              <option value="">Birthday</option>
            </select>
            <button className="export">Export Audience</button>
          </div>
          <div className="filterby">
            <select className="sgmnt" name="" id="">
              <option value="">Filter by Tags</option>
            </select>
            <select className="sgmnt" name="" id="">
              <option value="">View segment</option>
            </select>

            <p id="Newsgmnt">New Segment</p>
          </div>
          <div className="tabl">
            <table id="maintable">
              <tr>
                <th></th>
                <th cclassName="email-cell">Email Address</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Tags</th>
                <th>Eamil Marketing</th>
                <th>Source</th>
                <th>Contact rating</th>
                <th>Date Added</th>
                <th>Last changed</th>
              </tr>

              {data.map((e) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{e.email}</td>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.address}</td>
                    <td>{e.tag}</td>
                    <td>Subscribed</td>
                    <td>Admin add</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
