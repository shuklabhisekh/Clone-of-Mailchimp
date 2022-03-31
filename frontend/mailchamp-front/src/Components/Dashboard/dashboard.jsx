import { Sidemenu } from "./sidemenu";
import { Content } from "./content";
import "./dashboard.css";
import { useState } from "react";
import { useParams } from "react-router";
function Dashboard() {
  const [toggle, settoggle] = useState(false);
  const { pages } = useParams();

  function changeState() {
    settoggle(!toggle);
  }

  return (
    <>
      <Sidemenu stateToggle={changeState} toggle={toggle} />

      <Content toggle={toggle} pages={pages} />
    </>
  );
}

export default Dashboard;
