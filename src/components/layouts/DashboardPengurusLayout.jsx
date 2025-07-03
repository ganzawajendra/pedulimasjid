import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import FormUpdateProgres from "../fragments/FormUpdateProgres";
import FormAddPencairan from "../fragments/FormAddPencairan";
import axios from "axios";
import TableDonatur from "../fragments/TableDonatur";

const DashboardPengurusLayout = () => {

  const[dataMasjid, setDataMasjid] = useState();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address:""
  });
  const fetchMasjid = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      const result = await response.data.masjid[3];
      setDataMasjid(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMasjid();
    const getUser = localStorage.getItem("user");
    setProfile(JSON.parse(getUser));
  }, []);

  const statistic = [
    {
      title: "Total Donasi",
      value: 53600000,
      icon: "fa-solid fa-dollar-sign",
      color: "text-green-800",
      bg: "bg-green-200",
    },
    {
      title: "Dana Tersalurkan",
      value: 23000000,
      icon: "fa-regular fa-clipboard",
      color: "text-blue-800",
      bg: "bg-blue-200",
    },
    {
      title: "Sisa Dana",
      value: 30600000,
      icon: "fa-regular fa-clock",
      color: "text-red-800",
      bg: "bg-red-200",
    },
  ];
  if (!dataMasjid || !profile) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }
  return (
    <div className="mt-10 grid grid-cols-3 gap-5">
      <div className=" col-span-3">
        <h1
          className="font-semibold w-full 
        lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm max-sm:text-center"
        >
          Dashboard Pengurus
        </h1>
      </div>
      {/* Profil Masjid dan Pengurus */}
      <div
        className="border row-start-2 row-span-4 border-gray-300 rounded-lg overflow-hidden
      lg:col-span-2 lg:rounded-xl
      md:col-span-2 md:rounded-xl
      sm:col-span-2 sm:rounded-xl
      max-sm:col-span-3 max-sm:rounded-none"
      >
        <img
          src={dataMasjid.url}
          alt={dataMasjid.name}
          className="object-cover w-full
          lg:h-50
          md:h-40
          sm:h-30
          max-sm:h-30"
        />
        <div className="lg:p-10 md:p-5 sm:p-4 max-sm:p-3">
          <div>
            <h5
              className="text-center uppercase font-semibold
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs max-sm:font-bold"
            >
              Profil Pengurus
            </h5>
            <div className="max-w-max mb-5 bg-white p-5 flex items-center gap-5">
              <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                <i className="fa-solid fa-user absolute bottom-0 text-3xl"></i>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4
                    className="font-semibold
                  lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm"
                  >
                    {profile.name}
                  </h4>
                  {"|"}
                  <p
                    className=" text-gray-500
                  lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"
                  >
                    {profile.email}
                  </p>
                </div>
                <p
                  className=" text-gray-500
                lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"
                >
                  {profile.address}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5
              className="text-center font-semibold uppercase
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs max-sm:font-bold"
            >
              Profil Masjid
            </h5>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4
                    className="font-semibold
                  lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm max-sm:font-bold"
                  >
                    {dataMasjid.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-location-dot text-gray-500 lg:text-sm
                    md:text-xs
                    sm:text-xs
                    max-sm:text-xs"
                    ></i>
                    <p
                      className="text-gray-500
                    lg:text-sm
                    md:text-xs
                    sm:text-xs
                    max-sm:text-xs"
                    >
                      {dataMasjid.address}
                    </p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  {dataMasjid.status}
                </span>
              </div>
              <div className="my-4">
                <h4
                  className="font-semibold
                lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm max-sm:font-bold"
                >
                  Deskripsi Kebutuhan
                </h4>
                <p
                  className="text-gray-500 line-clamp-3 overflow-hidden w-full text-ellipsis
                lg:text-sm
                    md:text-xs
                    sm:text-xs
                    max-sm:text-xs"
                >
                  {dataMasjid.demand}
                </p>
              </div>
              <div>
                <h4
                  className="font-semibold
                lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm max-sm:font-bold"
                >
                  Status
                </h4>
                <p
                  className="text-gray-500
                lg:text-sm
                    md:text-xs
                    sm:text-xs
                    max-sm:text-xs"
                >
                  Aktif
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Link
              to="/dashboard-pengurus/edit"
              className="text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-1 rounded duration-300 transition-all
              lg:text-sm
                    md:text-xs
                    sm:text-xs
                    max-sm:text-xs"
            >
              Edit
            </Link>
            <Link
              to="/pengurus/masjid/nonaktif"
              className=" text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded duration-300 transition-all
              lg:text-sm
                    md:text-xs
                    sm:text-xs
                    max-sm:text-xs"
            >
              Nonaktifkan
            </Link>
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div
        className="flex gap-5
      lg:col-start-3 lg:row-span-3 lg:row-start-2 lg:flex-col
      md:col-start-3 md:row-span-3 md:row-start-2 md:flex-col
      sm:col-start-3 sm:row-span-3 sm:row-start-2 sm:flex-col
      max-sm:row-start-6 max-sm:col-start-1 max-sm:col-span-3 max-sm:flex-wrap"
      >
        {statistic.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full p-6 max-h-max row-start-2 shadow-md border border-gray-200
      lg:p-6 lg:rounded-xl
      md:p-4 md:rounded-xl
      sm:p-4 sm:rounded-xl
      max-sm:p-2 max-sm:rounded-none"
          >
            <div className="grid grid-cols-3">
              <p
                className="text-gray-500 text-xs uppercase tracking-wide
            lg:col-span-2 lg:row-start-1
            md:col-span-2 md:row-start-1
            sm:col-span-3 sm:row-start-2
            max-sm:col-span-3 max-sm:row-start-2 max-sm:text-center"
              >
                {item.title}
              </p>
              <h3
                className="font-semibold text-gray-800
            lg:text-xl lg:mt-1
            md:text-lg md:col-span-2 md:row-start-2 md:mt-1
            sm:text-md sm:col-span-3 sm:row-start-3 sm:mt-0
            max-sm:text-sm max-sm:col-span-3 max-sm:row-start-3 max-sm:mt-0 max-sm:text-center max-sm:font-bold"
              >
                {item.value.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h3>
              <div
                className="flex items-center justify-end
          lg:col-span-1 lg:row-span-2 lg:justify-end lg:mb-0
          md:col-span-1 md:row-span-2 md:justify-end md:mb-0
          sm:col-span-3 sm:row-start-1 sm:justify-start sm:mb-2
          max-sm:col-span-3 max-sm:row-start-1 max-sm:justify-center max-sm:mb-2"
              >
                <div
                  className={`${item.bg} w-10 h-10 rounded-lg relative
            lg:size-10
            md:size-8 
            sm:size-7`}
                >
                  <i
                    className={`${item.icon} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${item.color}
              lg:text-lg
              md:text-lg`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aktivitas Terkini */}
      <div className="col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-center uppercase font-semibold
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs max-sm:font-bold"
          >
            Aktivitas Terkini
          </h2>
        </div>
        <TableDonatur />
      </div>

      {/* Update Progress */}
      <div
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200
      lg:col-span-1
      md:col-span-3
      sm:col-span-3
      max-sm:col-span-3"
      >
        <div className="flex items-center mb-6 gap-5">
          <div className="bg-blue-100 size-10 relative rounded-lg">
            <i className="fa-regular fa-image text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600"></i>
          </div>
          <h2
            className="text-center uppercase font-semibold
          lg:text-sm
                      md:text-sm
                      sm:text-xs
                      max-sm:text-xs max-sm:font-bold"
          >
            Update Progres Pembangunan
          </h2>
        </div>
        <FormUpdateProgres style="flex flex-col gap-4" />
      </div>

      {/* Ajukan Pencairan */}
      <div
        className="bg-white p-6 rounded-xl shadow-sm border  border-gray-200 max-h-max
      lg:col-span-1
      md:col-span-3
      sm:col-span-3
      max-sm:col-span-3"
      >
        <div className="flex items-center mb-6 gap-5">
          <div className="bg-green-200 size-10 relative rounded-lg">
            <i className="fa-solid fa-plus text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-800"></i>
          </div>
          <h2
            className="text-center uppercase font-semibold
          lg:text-sm
                      md:text-sm
                      sm:text-xs
                      max-sm:text-xs max-sm:font-bold"
          >
            Ajukan Pencairan Dana
          </h2>
        </div>

        <FormAddPencairan style="flex flex-col gap-4" />
      </div>
    </div>
  );
};

export default DashboardPengurusLayout;
