import { Route, Routes } from "react-router-dom";
import { Navbar } from "../HomePage/Navbar";
import { Login } from "../Login/Login";

export const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
