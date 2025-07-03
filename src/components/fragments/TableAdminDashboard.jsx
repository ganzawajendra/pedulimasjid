import axios from "axios";
import React, { useEffect, useState } from "react";

const TabelAdminDashboard = () => {
  const [donaturList, setDonaturList] = useState();

  const fetchLastDonatur = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      setDonaturList(response.data.lastDonaturs);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data donatur:", error);
    }
  };

  useEffect(() => {
    fetchLastDonatur();
  }, []);

  if (!donaturList) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-5">
        <thead>
          <tr className="text-center bg-gray-100 text-xs text-gray-500">
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NO
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAMA DONATUR
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAMA MASJID
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              TOTAL DONASI
            </td>
          </tr>
        </thead>
        <tbody>
          {donaturList.map((item, index) => (
            <tr className="text-center border-b border-gray-300" key={index}>
              <td
                className="px-6 py-4 whitespace-nowrap text-start
                lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {index + 1}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap text-start
                lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.name}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap text-start
                lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.masjid_name}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap text-start
                lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.nominal.toLocaleString("id-ID",{
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelAdminDashboard;
