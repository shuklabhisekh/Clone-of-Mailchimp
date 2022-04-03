import React from "react";
import "./Add_contact.css";
import { useState } from "react";
import { Tagbutton } from "./tags";
import axios from "axios";
import { useNavigate } from "react-router";
export const Add_contact = () => {
  const [show, setShow] = useState(false);
  // const [dummy, setDummy] = useState(true)
  const navigate = useNavigate();
  const [text, setText] = useState({});

  const handleChange = (e) => {
    //   console.log(e);
    const { name, value } = e.target;
    //   console.log(name ,value);
    setText({ ...text, [name]: value });
  };

  const onInputChange = (name, value) => {
    setText({ ...text, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("text",text);
    Register(text);

    async function Register(e) {
      try {
        var register_data = text;
        let { user_data } = JSON.parse(localStorage.getItem("user"));
        const user_id = user_data._id;

        register_data["user_id"] = user_id;
        console.log(register_data, "registered data");
        // register_data = JSON.stringify(register_data);
        axios
          .post(`http://localhost:3001/subscriber/${user_id}`, register_data)
          .then((res) => {
            console.log(res);
            alert("successfully added...!");
          })
          .catch((err) => {
            console.log(err);
          });
        //  console.log(register_data)
      } catch (err) {
        console.log(err);
      }
      navigate("/dashboard");
    }
  };

  const {
    emailAddress,
    firstname,
    lastname,
    address,
    addressLine,
    city,
    state,
    postal,
    emailInputcountory,
    month,
    day,
  } = text;

  return (
    <div id="main_div">
      <h2 className="heading">Add subscriber</h2>

      <div className="paragrap">
        <p>
          Want to subscribe more than one person at a time?{" "}
          <a href="">
            <u>Import an audience</u>
          </a>
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Email Address*</label>
        <br />
        <input
          type="text"
          name="email"
          className="emailInput"
          value={emailAddress}
          onChange={handleChange}
          placeholder=""
        />
        <br />

        <label className="label">First Name</label>
        <br />
        <input
          type="text"
          name="first_name"
          className="emailInput"
          value={firstname}
          onChange={handleChange}
          placeholder=""
        />
        <br />

        <label className="label">Last Name</label>
        <br />
        <input
          type="text"
          name="last_name"
          className="emailInput"
          value={lastname}
          onChange={handleChange}
          placeholder=""
        />
        <br />

        <label className="label">Address </label>
        <br />
        <input
          type="text"
          name="address"
          className="emailInput"
          value={address}
          onChange={handleChange}
          placeholder="Street Address"
        />
        <br />
        <input
          type="text"
          name="addressLine"
          className="emailInput"
          value={addressLine}
          onChange={handleChange}
          placeholder="Address Line 2"
        />
        <br />
        <input
          type="text"
          name="city"
          className="emailInput"
          value={city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        <input
          type="text"
          name="state"
          className="emailInput"
          value={state}
          onChange={handleChange}
          placeholder="State/Prov/Region"
        />
        <br />
        <input
          type="text"
          name="postal"
          className="emailInput"
          value={postal}
          onChange={handleChange}
          placeholder="Postal/Zip"
        />
        <br />

        <select
          className="emailInputcountory"
          name="emailInputcountory "
          defaultValue={emailInputcountory}
          onChange={handleChange}
        >
          <option>USA</option>
          <option>Aaland Islands</option>
          <option>Afghanistan</option>
          <option>Albania</option>
          <option>Algeria</option>
          <option>American Samoa</option>
          <option>Andorra</option>
          <option>Angola</option>
          <option>Anguilla</option>
          <option>Antigua And Barbuda</option>
          <option>Argentina</option>
          <option>Armenia</option>
          <option>Aruba</option>
          <option>Australia</option>
          <option>Austria</option>
          <option>Azerbaijan</option>
          <option>Bahamas</option>
          <option>Bahrain</option>
          <option>Bangladesh</option>
          <option>Barbados</option>
          <option>Belarus</option>
          <option>Belgium</option>
          <option>Belize</option>
          <option>Benin</option>
          <option>Bermuda</option>
          <option>Bhutan</option>
          <option>Bolivia</option>
          <option>Bonaire, Saint Eustatius and Saba</option>
          <option>Bosnia and Herzegovina</option>
          <option>Botswana</option>
          <option>Bouvet Island</option>
          <option>Brazil</option>
          <option>Brunei Darussalam</option>
          <option>Bulgaria</option>
          <option>Burkina Faso</option>
          <option>Burundi</option>
          <option>Cambodia</option>
          <option>Cameroon</option>
          <option>Canada</option>
          <option>Cape Verde</option>
          <option>Cayman Islands</option>
          <option>Central African Republic</option>
          <option>Chad</option>
          <option>Chile</option>
          <option>China</option>
          <option>Christmas Island</option>
          <option>Colombia</option>
          <option>Comoros</option>
          <option>Congo</option>
          <option>Cook Islands</option>
          <option>Costa Rica</option>
          <option>Cote D'Ivoire</option>
          <option>Croatia</option>
          <option>Curacao</option>
          <option>Cyprus</option>
          <option>Czech Republic</option>
          <option>Democratic Republic of the Congo</option>
          <option>Denmark</option>
          <option>Djibouti</option>
          <option>Dominica</option>
          <option>Dominican Republic</option>
          <option>Ecuador</option>
          <option>Egypt</option>
          <option>El Salvador</option>
          <option>Equatorial Guinea</option>
          <option>Eritrea</option>
          <option>Estonia</option>
          <option>Ethiopia</option>
          <option>Falkland Islands</option>
          <option>Faroe Islands</option>
          <option>Fiji</option>
          <option>Finland</option>
          <option>France</option>
          <option>French Guiana</option>
          <option>French Polynesia</option>
          <option>Gabon</option>
          <option>Gambia</option>
          <option>Georgia</option>
          <option>Germany</option>
          <option>Ghana</option>
          <option>Gibraltar</option>
          <option>Greece</option>
          <option>Greenland</option>
          <option>Grenada</option>
          <option>Guadeloupe</option>
          <option>Guam</option>
          <option>Guatemala</option>
          <option>Guernsey</option>
          <option>Guinea</option>
          <option>Guyana</option>
          <option>Haiti</option>
          <option>Honduras</option>
          <option>Hong Kong</option>
          <option>Hungary</option>
          <option>Iceland</option>
          <option>India</option>
          <option>Indonesia</option>
          <option>Iraq</option>
          <option>Ireland</option>
          <option>Isle of Man</option>
          <option>Israel</option>
          <option>Italy</option>
          <option>Jamaica</option>
          <option>Japan</option>
          <option>Jersey (Channel Islands)</option>
          <option>Jordan</option>
          <option>Kazakhstan</option>
          <option>Kenya</option>
          <option>Kiribati</option>
          <option>Kuwait</option>
          <option>Kyrgyzstan</option>
          <option>Lao People's Democratic Republic</option>
          <option>Latvia</option>
          <option>Lebanon</option>
          <option>Lesotho</option>
          <option>Liberia</option>
          <option>Libya</option>
          <option>Liechtenstein</option>
          <option>Lithuania</option>
          <option>Luxembourg</option>
          <option>Macau</option>
          <option>Macedonia</option>
          <option>Madagascar</option>
          <option>Malawi</option>
          <option>Malaysia</option>
          <option>Maldives</option>
          <option>Mali</option>
          <option>Malta</option>
          <option>Marshall Islands</option>
          <option>Martinique</option>
          <option>Mauritania</option>
          <option>Mauritius</option>
          <option>Mayotte</option>
          <option>Mexico</option>
          <option>Moldova, Republic of</option>
          <option>Monaco</option>
          <option>Mongolia</option>
          <option>Montenegro</option>
          <option>Montserrat</option>
          <option>Morocco</option>
          <option>Mozambique</option>
          <option>Myanmar</option>
          <option>Namibia</option>
          <option>Nepal</option>
          <option>Netherlands</option>
          <option>Netherlands Antilles</option>
          <option>New Caledonia</option>
          <option>New Zealand</option>
          <option>Nicaragua</option>
          <option>Niger</option>
          <option>Nigeria</option>
          <option>Niue</option>
          <option>Norfolk Island</option>
          <option>Norway</option>
          <option>Oman</option>
          <option>Pakistan</option>
          <option>Palau</option>
          <option>Palestine</option>
          <option>Panama</option>
          <option>Papua New Guinea</option>
          <option>Paraguay</option>
          <option>Peru</option>
          <option>Philippines</option>
          <option>Pitcairn</option>
          <option>Poland</option>
          <option>Portugal</option>
          <option>Qatar</option>
          <option>Republic of Kosovo</option>
          <option>Reunion</option>
          <option>Romania</option>
          <option>Rwanda</option>
          <option>Saint Kitts and Nevis</option>
          <option>Saint Lucia</option>
          <option>Saint Martin</option>
          <option>Saint Vincent and the Grenadines</option>
          <option>Samoa (Independent)</option>
          <option>San Marino</option>
          <option>Sao Tome and Principe</option>
          <option>Saudi Arabia</option>
          <option>Senegal</option>
          <option>Serbia</option>
          <option>Seychelles</option>
          <option>Sierra Leone</option>
          <option>Singapore</option>
          <option>Sint Maarten</option>
          <option>Slovakia</option>
          <option>Slovenia</option>
          <option>Solomon Islands</option>
          <option>Somalia</option>
          <option>South Africa</option>
          <option>South Georgia and the South Sandwich Islands</option>
          <option>South Korea</option>
          <option>South Sudan</option>
          <option>Spain</option>
          <option>Sri Lanka</option>
          <option>Sudan</option>
          <option>Suriname</option>
          <option>Svalbard and Jan Mayen Islands</option>
          <option>Swaziland</option>
          <option>Sweden</option>
          <option>Switzerland</option>
          <option>Taiwan</option>
          <option>Tajikistan</option>
          <option>Tanzania</option>
          <option>Thailand</option>
          <option>Timor-Leste</option>
          <option>Togo</option>
          <option>Tonga</option>
          <option>Trinidad and Tobago</option>
          <option>Tunisia</option>
          <option>Turkey</option>
          <option>Turkmenistan</option>
          <option>Turks &amp; Caicos Islands</option>
          <option>Uganda</option>
          <option>Ukraine</option>
          <option>United Arab Emirates</option>
          <option>United Kingdom</option>
          <option>Uruguay</option>
          <option>Uzbekistan</option>
          <option>Vanuatu</option>
          <option>Vatican City State (Holy See)</option>
          <option>Venezuela</option>
          <option>Vietnam</option>
          <option>Virgin Islands (British)</option>
          <option>Virgin Islands (U.S.)</option>
          <option>Western Sahara</option>
          <option>Yemen</option>
          <option>Zambia</option>
          <option>Zimbabwe</option>
        </select>

        <label className="label">Birthday</label>
        <div className="brithday-div">
          <span>
            <input
              name="month"
              value={month}
              type="text"
              pattern="[0-9]*"
              maxLength="2"
              size="2"
              onChange={handleChange}
              placeholder="MM"
            />{" "}
            /
            <input
              name="day"
              value={day}
              type="text"
              pattern="[0-9]*"
              maxLength="2"
              size="2"
              onChange={handleChange}
              placeholder="DD"
            />
          </span>
        </div>

        <div className="tag">
          <div>
            <div className="tag_child">
              <h4 className="tag_heading">Tags</h4>
              <button onClick={() => setShow(true)}>+</button>
            </div>

            <Tagbutton show={show} onInputChange={onInputChange} />

            {/* <input type="text" name="" id="tag_input" placeholder="Add or create a tag" onClick={ () => setDummy(false)}/> */}
          </div>
        </div>

        <div className="cheackbok_div">
          <input type="checkbox" />
          <span className="checknox_span">
            This person gave me permission to email them{" "}
          </span>

          <div className="tags_paragraph">
            This person will not receive a confirmation email from Mailchimp.
            Since you’re adding this recipient manually, they won’t have an
            opt-in IP address or date in your records, so be extra sure you have
            permission first.
            <a href="">Learn more</a>
          </div>
          <br />

          <span>
            <input type="checkbox" />
            <span className="checknox_span">
              {" "}
              If this person is already in my audience, update their profile{" "}
            </span>
          </span>
        </div>
        <button className="button">Subscribe</button>
      </form>
    </div>
  );
};
