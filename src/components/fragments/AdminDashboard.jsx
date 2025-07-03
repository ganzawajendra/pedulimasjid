import React from "react";
import TableAdminDashboard from "./TableAdminDashboard";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-8 my-10 gap-5">
      {/* Total Masjid */}
      <div
        className="col-span-3 flex items-start p-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max
      lg:col-span-3 lg:col-start-1 lg:row-start-1
      md:col-span-5 md:col-start-1 md:row-start-1
      sm:col-span-8 sm:col-start-1 sm:row-start-1
      max-sm:col-span-8 max-sm:col-start-1 max-sm:row-start-1 max-sm:rounded-none max-sm:flex-col
      "
      >
        <div
          className="bg-gray-800 rounded-lg relative
        lg:size-10
            md:size-8 
            sm:size-7
            max-sm:size-7"
        >
          <i
            className="fa-solid fa-mosque text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"
          ></i>
        </div>
        <div className="w-full">
          <div className="flex items-end flex-col mb-4">
            <p className="text-xs text-gray-500">TOTAL MASJID</p>
            <h1 className="text-xl font-semibold text-gray-800 mt-1">
              <span>30</span> Masjid
            </h1>
          </div>
          <div
            className="flex items-center justify-end gap-5
          max-sm:flex-wrap"
          >
            <p className="bg-orange-200 p-2 rounded-md text-orange-600 text-xs font-semibold">
              Pending : <span>10</span>
            </p>
            <p className="bg-red-200 p-2 rounded-md text-red-500 text-xs font-semibold">
              Ditolak : <span>10</span>
            </p>
            <p className="bg-green-200 p-2 rounded-md text-green-800 text-xs font-semibold">
              Terverifikasi : <span>10</span>
            </p>
          </div>
        </div>
      </div>

      {/* Total Pengguna */}
      <div
        className="col-span-3 flex items-start p-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max
      lg:col-span-3 lg:col-start-4 lg:row-start-1
      md:col-span-8 md:col-start-1 md:row-start-2
      sm:col-span-8 sm:col-start-1 sm:row-start-2
      max-sm:col-span-8 max-sm:col-start-1 max-sm:row-start-2 max-sm:rounded-none max-sm:flex-col"
      >
        <div
          className="bg-gray-800 rounded-lg relative
        lg:size-10
            md:size-8 
            sm:size-7
            max-sm:size-7"
        >
          <i
            className="fa-solid fa-user text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"
          ></i>
        </div>
        <div className="w-full">
          <div className="flex items-end flex-col mb-4 ">
            <p className="text-xs text-gray-500">TOTAL PENGGUNA</p>
            <h1 className="text-xl font-semibold text-gray-800 mt-1">
              <span>400</span> Pengguna
            </h1>
          </div>
          <div
            className="flex items-center justify-end gap-5
          max-sm:flex-wrap"
          >
            <p className="bg-blue-100 text-blue-800 p-2 rounded-md text-xs font-semibold">
              Donatur : <span>100</span>
            </p>
            <p className="bg-teal-100 text-teal-800 p-2 rounded-md text-xs font-semibold">
              Pengurus Masjid : <span>300</span>
            </p>
          </div>
        </div>
      </div>

      {/* Total Donasi */}
      <div
        className="flex items-start p-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white
      lg:col-span-2 lg:col-start-7 lg:row-start-1 lg:max-h-max lg:items-start
      md:col-span-3 md:col-start-6 md:row-start-1 md:items-center
      sm:col-span-8 sm:col-start-1 sm:row-start-3
      max-sm:col-span-8 max-sm:col-start-1 max-sm:row-start-3 max-sm:rounded-none max-sm:flex-col"
      >
        <div
          className="bg-gray-800 rounded-lg relative
        lg:size-10
            md:size-8 
            sm:size-7
            max-sm:size-7"
        >
          <i
            className="fa-solid fa-dollar-sign text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"
          ></i>
        </div>
        <div className="w-full">
          <div className="flex items-end flex-col">
            <p className="text-xs text-gray-500">TOTAL DONASI</p>
            <h1 className="text-xl font-semibold text-gray-800 mt-1">
              Rp <span>130.000.000</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className="col-span-8 flex items-start p-5 gap-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max
      max-sm:rounded-none max-sm:flex-col"
      >
        <div
          className="bg-gray-800 rounded-lg relative
        lg:size-10
            md:size-8 
            sm:size-7
            max-sm:size-7"
        >
          <i
            className="fa-solid fa-info text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"
          ></i>
        </div>
        <div className="w-full">
          <div className="flex items-end flex-col">
            <p className="text-xs text-gray-500">DONATUR TERAKHIR</p>
          </div>
          <TableAdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
