import React, { useEffect, useState } from "react";
import FormAddPengurus from "../fragments/FormAddPengurus";
import HeroImage from "/images/hero.png";
import CardDeskripsiHome from "../fragments/CardDeskripsiHome";
import ListCard from "../elements/ListCard";
import CardMasjid from "../fragments/CardMasjid";
import axios from "axios";
import ButtonLink from "../elements/Button";

const HomeLayout = ({ donasi, masjid, donatur }) => {
  const [masjidList, setMasjidList] = useState([]);
  const [isSmall, setIsSmall] = useState(false);

  // Fetch with API
  const fetchMasjid = async () => {
    try {
      const response = await axios.get("/mock-db.json");
      setMasjidList(response.data.masjid);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMasjid();

    const checkSize = () => {
      setIsSmall(window.innerWidth < 640);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className={`bg-[url('/images/hero.png')] bg-cover bg-no-repeat bg-center flex flex-col items-start justify-center text-start transition-all
          max-sm:h-40 max-sm:px-5
          sm:h-60 sm:px-5 
          md:px-10 md:h-70 
          lg:px-20 lg:h-90 
           `}
      >
        <h1
          className=" text-gray-800 transition-all
        lg:w-150 lg:text-5xl/15
        md:w-100 md:text-3xl 
        sm:w-90 sm:text-xl
        max-sm: w-70 max-sm:text-xl"
        >
          Donasi Masjid Mudah dan Cepat di Peduli Masjid
        </h1>
        <p
          className="my-2 text-gray-500 transition-all
        sm:text-sm
        md:text-lg 
        lg:text-xl
        max-sm:text-xs max-sm:w-3/4"
        >
          Temukan informasi donasi masjid dengan mudah dan cepat
        </p>
      </div>

      {/* Deskripsi Singkat */}
      <div
        className="w-full flex flex-col items-center justify-center text-center transition-all
      lg:mt-10 
      md:mt-5
      sm:mt-5
      max-sm:mt-4"
      >
        <h2
          className=" font-semibold text-gray-800 transition-all
        lg:text-2xl 
        md:text-lg
        sm:text-md
        max-sm:text-sm"
        >
          Bantu Wujudkan Masjid Layak untuk Umat
        </h2>
        <div
          className="
        lg:px-5 
        md:px-3 
        sm:px-15 
        max-sm:px-15"
        >
          <p
            className=" text-gray-500 transition-all
        lg:text-lg 
        md:text-sm
        sm:text-sm
        max-sm:text-xs"
          >
            Platform donasi online transparan untuk pembangunan & renovasi
            masjid kurang mampu di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* Kalau Small */}
      {isSmall && (
        <div className="flex items-center justify-center gap-5 my-5 transition-all">
            <ButtonLink router="/login" variant="Black">
              Login
            </ButtonLink>
            <ButtonLink router="/register" variant="White">
              Register
            </ButtonLink>
        </div>
      )}

      {/* Fungsi */}
      <div
        className="grid grid-cols-2 gap-10 mt-10
      lg:gap-10 lg:mt-10
      md:gap-10 md:mt-10
      sm:gap-5 sm:mt-5
      max-sm:gap-0 max-sm:mt-5"
      >
        <CardDeskripsiHome />
      </div>

      {/* Card Donasi */}
      <div className="w-full  gap-5 mt-10 rounded-lg p-4">
        <div className=" grid grid-cols-4 gap-5">
          {masjidList.map((item, index) => (
            <CardMasjid
              key={index}
              name={item.name}
              address={item.address}
              status={item.status}
              demand={item.demand}
              created_at={item.created_at}
              url={item.url}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* Statistik */}
      <div
        className="w-full grid grid-cols-3 mt-10 transition-all
      lg:px-20 lg:py-10
      md:px-10 md:py-5
      sm:px-5 sm:py-5
      max-sm:px-5 max-sm:py-5"
      >
        <div className="border-l border-gray-800 flex flex-col items-center justify-center p-6">
          <h4
            className="text-gray-500 text-center transition-all
          lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs"
          >
            Total Donasi
          </h4>
          <h3
            className="font-semibold text-center text-gray-800 transition-all
          lg:text-xl
        md:text-md
        sm:text-sm
        max-sm:text-sm"
          >
            Rp <span>{donasi}</span>
          </h3>
        </div>
        <div className="border-r border-l border-gray-800 flex flex-col items-center justify-center p-6">
          <h4
            className="text-gray-500 text-center transition-all
          lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs"
          >
            Terbantu
          </h4>
          <h3
            className="font-semibold text-center text-gray-800 transition-all
          lg:text-xl
        md:text-md
        sm:text-sm
        max-sm:text-sm"
          >
            <span>{masjid}</span> Masjid
          </h3>
        </div>
        <div className="border-r border-gray-800 flex flex-col items-center justify-center p-6">
          <h4
            className="text-gray-500 text-center transition-all
          lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs"
          >
            Lebih dari
          </h4>
          <h3
            className="font-semibold text-center text-gray-800 transition-all
          lg:text-xl
        md:text-md
        sm:text-sm
        max-sm:text-sm"
          >
            <span>{donatur}</span> Donatur
          </h3>
        </div>
      </div>

      {/* Open Akun Pengurus */}
      <div className="bg-neutral-200 rounded-lg p-8 mt-10 grid grid-cols-5 gap-5">
        <div
          className=" flex flex-col justify-center
        lg:col-span-3
        md:col-span-2
        sm:col-span-5
        max-sm:col-span-5 max-sm:rounded-none"
        >
          <h2
            className="font-semibold text-gray-800
          lg:text-2xl 
        md:text-lg
        sm:text-md
        max-sm:text-sm"
          >
            Jadi Pengurus Masjid?
          </h2>
          <p
            className="text-gray-500
          lg:text-lg 
        md:text-sm
        sm:text-sm
        max-sm:text-xs"
          >
            Daftarkan masjid Anda untuk mendapatkan bantuan donasi dari
            masyarakat. Kami akan membantu memverifikasi dan mempromosikan
            kebutuhan masjid Anda.
          </p>
          <ul className="space-y-2 text-gray-700">
            <ListCard icon="fa-solid fa-check" style="text-green-500">
              Kelola donasi dengan transparan
            </ListCard>
            <ListCard icon="fa-solid fa-check" style="text-green-500">
              Update progress pembangunan
            </ListCard>
            <ListCard icon="fa-solid fa-check" style="text-green-500">
              Ajukan pencairan dana mudah
            </ListCard>
          </ul>
        </div>
        <div
          className="
        lg:col-span-2
        md:col-span-3
        sm:col-span-5
        max-sm:col-span-5"
        >
          <FormAddPengurus />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
