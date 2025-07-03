import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TableAdminMasjid = () => {
  const [masjidList, setMasjidList] = useState();

  const fetchDataMasjid = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      setMasjidList(response.data.masjid);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data donatur:", error);
    }
  };

  useEffect(() => {
    fetchDataMasjid();
  }, []);

  if (!masjidList) {
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
              id
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nama Masjid
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Alamat
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Deskripsi Kebutuhan
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tanggal Dibuat
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aksi
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {masjidList.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-slate-200">
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
                {item.name}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.address}
              </td>
              <td
                className="px-6 py-4 
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                <div className="line-clamp-3 overflow-hidden text-ellipsis">
                  {item.demand}
                </div>
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
                  {item.status}
                </span>
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                {item.created_at}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"
              >
                <Link
                  to="edit-masjid"
                  className="text-orange-500 hover:text-orange-600 hover:underline duration-300 transition-all"
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

export default TableAdminMasjid;
