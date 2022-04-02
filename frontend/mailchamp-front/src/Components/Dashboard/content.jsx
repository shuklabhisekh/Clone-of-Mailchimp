import React, { useState } from "react";

import { Steps } from "./steps";
import { Campaign } from "./campaigns";
import { AllContacts } from "../contacts/allcontacts";
import { Allcampaigns } from "./Allcampaigns";
export const Content = ({ toggle, pages }) => {
  const [page, setpage] = useState("");
  // const getRoute = (data) => {
  //   setpage(data);
  //   console.log(page);
  // };
  return (
    <div className={toggle ? "content expand" : "content"}>
      {pages == "campaigns" ? (
        <Campaign />
      ) : pages == "listmembers" ? (
        <AllContacts />
      ) : pages == "allcampaigns" ? (
        <Allcampaigns />
      ) : (
        <Steps />
      )}
    </div>
  );
};
