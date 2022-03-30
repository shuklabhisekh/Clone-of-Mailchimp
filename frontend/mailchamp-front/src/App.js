import Header from "./Components/header/header";
import "./App.css";
import Dashboard from "./Components/Dashboard/dashboard";
import { Routes, Route, Link } from "react-router-dom";
import { Signup } from "./Components/Signup/Signup";
// import SignInSide from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" element={<SignInSide />} /> */}
      </Routes>
    </div>
  );
}

export default App;
