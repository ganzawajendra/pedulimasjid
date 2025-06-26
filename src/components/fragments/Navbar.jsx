import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "../elements/Button";
import { logout } from "../../services/auth.service";
import { use } from "react";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed z-10 w-full flex justify-between items-center h-13 px-20 bg-white shadow-lg">
      <Link to="/" className="text-xl font-semibold text-gray-800">
        Peduli Masjid
      </Link>
      <div className="flex space-x-4 items-center">
        {localStorage.getItem("user") ? (
          <div className="flex items-center space-x-4">
            <p>Hi, {JSON.parse(localStorage.getItem("user")).name}</p>
            <button onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <ButtonLink router="/login" variant="Black">
              Login
            </ButtonLink>
            <ButtonLink router="/register" variant="White">
              Register
            </ButtonLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
