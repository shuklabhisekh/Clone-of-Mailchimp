import { Route, Routes } from "react-router-dom";
import { Navbar } from "../HomePage/Navbar";

export const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
};
