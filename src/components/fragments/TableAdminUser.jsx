import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TableAdminUser = () => {
  const [userList, setUserList] = useState();

  const fetchUser = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      setUserList(response.data.userList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!userList) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama Lengkap
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No Telp
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Alamat
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aksi
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.map((item, index) => (
            <tr key={index}>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {index + 1}
              </td>
              <td
                className="px-6 py-4
                        lg:text-md
                        md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.name}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
                        md:text-sm
                        sm:text-xs
                        max-sm:text-xs"
              >
                {item.email}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
                        md:text-sm
                        sm:text-xs
                        max-sm:text-xs"
              >
                {item.noTelp}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
                        md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.role === "pengurus" ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Pengurus
                  </span>
                ) : (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-blue-800">
                    Donatur
                  </span>
                )}
              </td>
              <td
                className="px-6 py-4
              lg:text-md
                        md:text-sm
                        sm:text-xs
            max-sm:text-xs"
              >
                {item.address}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
                        md:text-sm
                        sm:text-xs
            max-sm:text-xs"
              >
                <Link
                  to="edit-user"
                  className="text-orange-500 hover:text-orange-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdminUser;
