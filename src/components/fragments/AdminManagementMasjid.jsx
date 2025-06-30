import React from "react";
import { Link } from "react-router-dom";

const AdminManagementMasjid = () => {
  return (
    <div className="min-h-screen my-10">
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
          <tr>
            <td className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">1</td>
            <td className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Masjid Al-Fatih</td>
            <td className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Jl. Raya No. 1</td>
            <td className="px-6 py-4 
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              <div className="line-clamp-3 overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum aperiam, dignissimos dolorem voluptatum tempore! Nihil odit, nesciunt voluptates, exercitationem molestiae sit at voluptate reprehenderit quaerat dolore id quis ex quo recusandae excepturi delectus aspernatur cum voluptatibus enim! Aliquam, minima.</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
                Terverifikasi
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">created at</td>
            <td className="px-6 py-4 whitespace-nowrap
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              <Link
                to="edit-masjid"
                className="text-orange-500 hover:text-orange-600 hover:underline duration-300 transition-all"
              >
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagementMasjid;
