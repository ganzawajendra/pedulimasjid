import React from "react";
import { NavLink } from "react-router-dom";

const AdminLayout = ({ children, page }) => {
  const routing = {
    "Dashboard": "/admin/dashboard",
    "Management Masjid": "/admin/management-masjid",
    "Management Pencairan Dana": "/admin/management-dana",
    "Management User": "/admin/management-user",
  };

  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <>
        <div className="mt-10 ">
          <div className="mb-8 overflow-hidden">
            <h1 className="font-semibold apearLeftRight
            lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm max-sm:text-center">{page}</h1>
            <p className="text-gray-500 apearLeftRight
            lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs max-sm:text-center">
              Selamat datang kembali{" "}
              <span className="font-medium text-blue-500">
                {user.name}
                </span>, atur
              semua data di sini!
            </p>
          </div>
          <div className="border-b border-gray-200">
            <div className="mb-px flex justify-around overflow-x-auto" aria-label="Tabs">
              {Object.keys(routing).map((key) => (
                <NavLink
                  to={routing[key]}
                  key={key}
                  className={({ isActive }) =>
                    isActive
                      ? "mx-4 border-manual-blue text-manual-blue whitespace-nowrap py-4 px-1 border-b-2 font-medium lg:text-sm md:text-sm sm:text-xs max-sm:text-xs  transition-all"
                      : "mx-4 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all lg:text-sm md:text-sm sm:text-xs max-sm:text-xs"
                  }
                >
                  {key}
                </NavLink>
              ))}
            </div>
          </div>
          {children}
        </div>
    </>
  );
};

export default AdminLayout;
