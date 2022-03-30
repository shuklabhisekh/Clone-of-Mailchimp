import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import { DummyHome } from "../HomePage/DummyHome";
import { Navbar } from "../HomePage/Navbar";
import SignInSide from "../Login/Login";
import { Signup } from "../Signup/Signup";

export const AllRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/signin" element={<Signup/>} />
        <Route path="/login" element={<SignInSide/>} />

      </Routes>
    </div>
  );
};
