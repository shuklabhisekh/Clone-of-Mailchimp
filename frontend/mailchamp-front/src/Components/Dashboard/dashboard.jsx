import { Sidemenu } from "./sidemenu";
import { Content } from "./content";
import "./dashboard.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Dashboard() {
  const [toggle, settoggle] = useState(false);

  function changeState() {
    settoggle(!toggle);
  }

  return (
    <>
      <Sidemenu stateToggle={changeState} toggle={toggle} />

      <Content toggle={toggle} />
    </>
  );
}

export default Dashboard;
