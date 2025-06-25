import { Link } from "react-router-dom";
import ButtonLink from "../elements/Button";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full flex justify-between items-center h-13 px-20 bg-white shadow-lg">
      <Link to="/" className="text-xl font-semibold text-gray-800">Peduli Masjid</Link>
      <div className="flex space-x-4 items-center">
        <ButtonLink
        router = "/login"
        variant = "Black">Login</ButtonLink>
        <ButtonLink
        router = "/register"
        variant = "White">Register</ButtonLink>
      </div>
    </nav>
  );
};

export default Navbar;
