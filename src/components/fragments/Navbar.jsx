import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "../elements/Button";
import { logout } from "../../services/auth.service";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNotSmall, setisNotSmall] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

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
    <nav
      className={`fixed z-10 w-full flex bg-white justify-between items-center shadow-lg
    lg:px-20 lg:h-13
    md:px-10 md:h-12
    sm:px-5 sm:h-11
    max-sm:px-5 max-sm:h-11`}
    >
      <Link
        to="/"
        className="font-semibold text-gray-800 transition-all
        lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm"
      >
        Peduli Masjid
      </Link>
      <div className="flex space-x-4 items-center">
        {localStorage.getItem("user") ? (
          <div className="relative">
            <div
              onClick={() => setDropDown(!dropDown)}
              className="flex items-center cursor-pointer"
            >
              {isNotSmall && (
                <p
                  className=" mr-5
              lg:text-md
              md:text-sm
              sm:text-sm
              max-sm:text-xs"
                >
                  Hi, {JSON.parse(localStorage.getItem("user")).name}
                </p>
              )}
              <i
                className="fa-solid fa-chevron-down
              lg:text-md
              md:text-sm
              sm:text-sm
              max-sm:text-xs"
              ></i>
            </div>

            {dropDown && (
              <div className="absolute right-0 mt-3 rounded shadow-md z-50 bg-white flex justify-center items-center flex-col gap-2 transition-all duration-300 overflow-hidden">
                {!isNotSmall && (
                  <p
                    className=" 
              lg:text-md
              md:text-sm
              sm:text-sm
              max-sm:text-xs"
                  >
                    Hi, {JSON.parse(localStorage.getItem("user")).name}
                  </p>
                )}
                <button
                  onClick={handleLogout}
                  className="text-left w-full text-sm cursor-pointer px-4 py-1.5 text-red-800 flex items-center justify-center gap-3 hover:bg-red-200 transition-all duration-300
                  lg:text-md
              md:text-sm
              sm:text-sm
              max-sm:text-xs"
                >
                  Logout
                  <i className="fa-solid fa-arrow-right-from-bracket
                  lg:text-md
              md:text-sm
              sm:text-sm
              max-sm:text-xs"></i>
                </button>
              </div>
            )}
          </div>
        ) : (
          isNotSmall && (
            <div className="transition-all space-x-4">
              <ButtonLink router="/login" variant="Black">
                Login
              </ButtonLink>
              <ButtonLink router="/register" variant="White">
                Register
              </ButtonLink>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
