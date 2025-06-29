import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "../elements/Button";
import { logout } from "../../services/auth.service";
import { useEffect, useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  const [isNotSmall, setisNotSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setisNotSmall(window.innerWidth > 640);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <nav className={`fixed z-10 w-full flex ${isNotSmall ? "justify-between" : " justify-center"} items-center bg-white shadow-lg
    lg:px-20 lg:h-13
    md:px-10 md:h-12
    sm:px-5 sm:h-10
    max-sm:px-4 max-sm:h-10`}>
        <Link to="/" className="font-semibold text-gray-800 transition-all
        lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm">
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
            isNotSmall && <div className="transition-all space-x-4">
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
