import Header from "./Components/header/header";
import "./App.css";
import Dashboard from "./Components/Dashboard/dashboard";
import { Routes, Route, Link } from "react-router-dom";
import { Signup } from "./Components/Signup/Signup";
import SignInSide from "./Components/Login/Login";
import { Builder } from "./Components/Dashboard/builder";
import { Campaigntemplate } from "./Components/Dashboard/campaignsTemplates";
import { DashboardPage } from "./Components/Dashboard/DashboardContact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:pages" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/dashboard/templates" element={<Campaigntemplate />} />
        <Route path="/dashboard/builder/:id" element={<Builder />} />
        <Route path="/members/import" element={<DashboardPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
