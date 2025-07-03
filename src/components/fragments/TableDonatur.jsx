import axios from "axios";
import React, { useEffect, useState } from "react";

const TableDonatur = () => {
  const [dataDonatur, setDataDonatur] = useState();

  const fetchDataDonatur = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      setDataDonatur(response.data.donaturs);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data donatur:", error);
    }
  };

  useEffect(() => {
    fetchDataDonatur();
  }, []);

  if (!dataDonatur) {
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
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Donatur
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nominal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tanggal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataDonatur.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex size-8">
                    <div className="size-8 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                      <i className="fa-solid fa-user absolute bottom-0 text-2xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div
                      className="font-medium text-gray-800
                      lg:text-sm
                      md:text-sm
                      sm:text-xs
                      max-sm:text-xs"
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-gray-500
                      lg:text-sm
                      md:text-sm
                      sm:text-xs
                      max-sm:text-xs"
                    >
                      {item.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div
                  className="text-gray-800 font-medium
                  lg:text-sm
                      md:text-sm
                      sm:text-xs
                      max-sm:text-xs"
                >
                  {item.nominal.toLocaleString("id-ID",{
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div
                  className="text-gray-800 font-medium
                lg:text-sm
                      md:text-sm
                      sm:text-xs
                      max-sm:text-xs"
                >
                  {item.created_at}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDonatur;
