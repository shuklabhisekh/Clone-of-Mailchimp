import React, { useState } from "react";

import { Steps } from "./steps";
import { Campaign } from "./campaigns";
export const Content = ({ toggle }) => {
  const [page, setpage] = useState("");
  const getRoute = (data) => {
    setpage(data);
    console.log(page);
  };
  return (
    <div className={toggle ? "content expand" : "content"}>
      {page == "campaigns" ? <Campaign /> : <Steps getRoute={getRoute} />}
    </div>
  );
};
