import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TableAdminDana = () => {
  const [danaList, setDanaList] = useState();

  const fetchDana = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      setDanaList(response.data.pencairanDanas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDana();
  }, []);

  if (!danaList) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pengurus
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama Masjid
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nominal
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tujuan
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aksi
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {danaList.map((item, index) => (
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
                className="px-6 py-4 whitespace-nowrap
                lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.pengurus_name}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.masjid_name}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.nominal.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
              <td
                className="px-6 py-4
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.tujuan}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.status === "Pending" ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded bg-orange-100 text-orange-800">
                    {item.status}
                  </span>
                ) : (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded bg-green-100 text-green-800">
                    {item.status}
                  </span>
                )}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                <Link
                  to="edit-dana"
                  className="text-orange-500 hover:text-orange-600 hover:underline"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdminDana;
