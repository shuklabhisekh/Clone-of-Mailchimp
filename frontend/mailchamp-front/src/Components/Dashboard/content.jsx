import React, { useState } from "react";

import { Steps } from "./steps";
import { Campaign } from "./campaigns";
export const Content = ({ toggle, pages }) => {
  const [page, setpage] = useState("");
  // const getRoute = (data) => {
  //   setpage(data);
  //   console.log(page);
  // };
  return (
    <div className={toggle ? "content expand" : "content"}>
      {pages == "campaigns" ? <Campaign /> : <Steps />}
    </div>
  );
};
