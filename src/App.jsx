import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./component/HomePage/Homepage";
import { AllRouter } from "./component/Router/AllRouter";
import { Navbar } from "./component/HomePage/Navbar";
import SignInSide from "./component/Login/Login";
import { Signup } from "./component/Signup/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Signup/>
    </div>
  );
}

export default App;
