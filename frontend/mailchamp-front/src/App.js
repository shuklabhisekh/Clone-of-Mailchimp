import Header from "./Components/header/header";
import "./App.css";
import Dashboard from "./Components/Dashboard/dashboard";
import { Routes, Route, Link } from "react-router-dom";
import { Signup } from "./Components/Signup/Signup";
import SignInSide from "./Components/Login/Login";
import { Builder } from "./Components/Dashboard/builder";
import { Campaigntemplate } from "./Components/Dashboard/campaignsTemplates";
import { DashboardPage } from "./Components/Dashboard/DashboardContact";
import { CopyContacts } from "./Components/Dashboard/copy_contacts";
import { WebBuilder } from "./Components/Dashboard/websitebuilder";
import { ActivationPage } from "./Components/Signup/activationPage";
import { PaymentSelection } from "./Components/Payment/PaymentSelection";
import { Payment } from "./Components/Payment/Payment";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:pages" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activationemail" element={<ActivationPage />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/dashboard/templates" element={<Campaigntemplate />} />
        <Route path="/dashboard/builder/:id" element={<Builder />} />
        <Route path="/members/import" element={<DashboardPage />}></Route>
        <Route path="/members/importList" element={<CopyContacts />}></Route>
        <Route
          path="/dashboard/websitebuilder"
          element={<WebBuilder />}
        ></Route>
        <Route path="/payment" element={<PaymentSelection />}></Route>
        <Route path="/paymentSection" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
