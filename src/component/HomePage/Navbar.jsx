import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>DummyHome</Link>
      <Link to={"/signin"}>Sign in</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};
