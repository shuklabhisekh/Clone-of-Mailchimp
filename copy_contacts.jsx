import React from "react";
import "./copy_contacts.css";
import axios from "axios";

export const CopyContacts = () => {
  ///////////////get user id from redux store
  const user_id = "6243ded2b2b25f5a8526ffac";
  //////////////////////////////////////////

  const [contacts, setcontacts] = React.useState(``);

  const handle_data = (e) => {
    setcontacts(e.target.value);
  };

  const submit_data = (e) => {
    const my_contacts = contacts.split("\n");

    const my_contacts_arr = [];

    my_contacts.forEach((el) => {
      let obj = {};

      const single_contact = el.replace(/\s+/g, " ").trim().split(" ");

      single_contact[0] ? (obj.email = single_contact[0]) : (obj.email = "");
      single_contact[1]
        ? (obj.first_name = single_contact[1])
        : (obj.first_name = "");
      single_contact[2]
        ? (obj.last_name = single_contact[2])
        : (obj.last_name = "");
      single_contact[3]
        ? (obj.address = single_contact[3])
        : (obj.address = "");

      my_contacts_arr.push(obj);
    });
    postcontacts(my_contacts_arr);
    // console.log(my_contacts_arr)
  };

  const postcontacts = (data) => {
    axios.post(`http://localhost:3000/subscriber/many/${user_id}`, data);
  };

  return (
    <div id="Copy_contacts_cover">
      <p>Copy and paste your contacts</p>

      <p>
        Not sure how to format your file? <a href="#">Learn how</a>
      </p>

      <p>Paste your contact information into this field.</p>
      <textarea
        id="contact_area"
        name="w3review"
        rows="6"
        onChange={handle_data}
        placeholder="Email Address			First Name	Last Name	Address
amelia@pottedplanter.com	Amelia		Breiner		154 Example Dr. Apt 12 
lilah.morrison@hathaway.edu	Lilah		Morrison	7553 Example St. Bonita 
freddie@pottedplanter.com	Freddie		Jones		7172 Example Dr. Sylvania "
      ></textarea>

      <button id="contact_con_btn" onClick={submit_data}>
        Continue to Organise
      </button>
    </div>
  );
};
