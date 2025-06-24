import React from "react";
import FormAddPengurus from "../fragments/FormAddPengurus";
import HeroImage from "/images/hero.png";
import CardDeskripsiHome from "../fragments/CardDeskripsiHome";
import ListCard from "../elements/ListCard";
import CardMasjid from "../fragments/CardMasjid";

const HomeLayout = ({ donasi, masjid, donatur }) => {
  return (
    <>
      {/* Hero Section */}
      <div
        className={`bg-[url('/images/hero.png')] bg-contain bg-no-repeat bg-center h-90 flex flex-col items-start px-20 justify-center text-start`}
      >
        <h1 className="text-5xl/15 text-gray-800 w-200">Donasi Masjid Mudah dan Cepat di Peduli Masjid</h1>
        <p className="text-xl my-2 text-gray-500">Temukan informasi donasi masjid dengan mudah dan cepat</p>
      </div>

      {/* Deskripsi Singkat */}
      <div className="w-full flex flex-col items-center justify-center text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Bantu Wujudkan Masjid Layak untuk Umat</h2>
        <p className="text-md text-gray-500">Platform donasi online transparan untuk pembangunan & renovasi masjid
          kurang mampu di seluruh Indonesia.</p>
      </div>

      {/* Fungsi */}
      <div className="grid grid-cols-2 gap-10 mt-10">
        <CardDeskripsiHome />
      </div>

      {/* Card Donasi */}
      <div class="w-full border border-gray-300 shadow-lg grid grid-cols-1 md:grid-cols-5 gap-5 mt-10 rounded-lg p-4 md:p-10">
        <div class="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 order-3 md:order-none">
          <CardMasjid />
        </div>
      </div>

      {/* Statistik */}
      <div className="w-full grid grid-cols-3 mt-10 px-20  py-10">
        <div className="border-l border-gray-800 flex flex-col items-center justify-center p-6">
          <h4 className="text-md text-gray-500">Total Donasi</h4>
          <h3 className="text-lg font-semibold text-gray-800">Rp <span>{donasi}</span></h3>
        </div>
        <div className="border-r border-l border-gray-800 flex flex-col items-center justify-center p-6">
          <h4 className="text-md text-gray-500">Terbantu</h4>
          <h3 className="text-lg font-semibold text-gray-800"><span>{masjid}</span> Masjid</h3>
        </div>
        <div className="border-r border-gray-800 flex flex-col items-center justify-center p-6">
          <h4 className="text-md text-gray-500">Lebih dari</h4>
          <h3 className="text-lg font-semibold text-gray-800"><span>{donatur}</span> Donatur</h3>
        </div>
      </div>

      {/* Open Akun Pengurus */}
      <div className="bg-neutral-200 rounded-lg p-8 mt-10 grid grid-cols-3 gap-5">
        <div className="col-span-2 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Jadi Pengurus Masjid?</h2>
          <p className="text-md text-gray-500">Daftarkan masjid Anda untuk mendapatkan bantuan donasi dari
            masyarakat. Kami akan membantu memverifikasi dan mempromosikan
            kebutuhan masjid Anda.</p>
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
        <div className="col-span-1">
          <FormAddPengurus />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
