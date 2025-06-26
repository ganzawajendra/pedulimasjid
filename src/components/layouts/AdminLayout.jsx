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
      <div className="p-20">
        <div className="mt-10">
          <div className="mb-8">
            <h1 className="text-xl font-semibold">{page}</h1>
            <p className="text-gray-500">
              Selamat datang kembali{" "}
              <span className="font-medium text-blue-500">
                {user.name}
                </span>, atur
              semua data di sini!
            </p>
          </div>
          <div className="border-b border-gray-200">
            <div className="-mb-px flex space-x-8" aria-label="Tabs">
              {Object.keys(routing).map((key) => (
                <NavLink
                  to={routing[key]}
                  key={key}
                  className={({ isActive }) =>
                    isActive
                      ? "border-manual-blue text-manual-blue whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
                  }
                >
                  {key}
                </NavLink>
              ))}
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
