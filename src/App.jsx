import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./component/HomePage/Homepage";
import { AllRouter } from "./component/Router/AllRouter";
import { Navbar } from "./component/HomePage/Navbar";
import SignInSide from "./component/Login/Login";
import { Signup } from "./component/Signup/Signup";
import { DashboardPage } from "./component/HomePage/DashboardPart";
import { PaymentSelection } from "./component/PaymentSelection/PaymentSelection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <SignInSide /> */}
      {/* <DashboardPage/> */}
      <PaymentSelection/>
    </div>
  );
}

export default App;
