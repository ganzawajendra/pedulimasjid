import React from "react";
import MediumFont from "../elements/ListFont/MediumFont";
import SupportFont from "../elements/ListFont/SupportFont";
import SmallFont from "../elements/ListFont/SmallFont";
import ExtraSmallFont from "../elements/ListFont/ExtraSmallFont";
import ButtonLink from "../elements/Button";

const CardDetailLayout = () => {
  return (
    <div className="max-w-4xl bg-white py-13 rounded-xl shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src="../asset/img/<?= $masjid['dokumen_path']; ?>"
          alt="tes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="p-5 grid grid-cols-2">
        <MediumFont>MASJID AL-FATIH</MediumFont>
        <div className="flex items-center gap-2 row-start-2">
          <i class="fa-solid fa-location-dot text-gray-600"></i>
          <SupportFont>Jl. Durian no. 45</SupportFont>
        </div>
        <div class="flex justify-end items-start mb-3">
          <ExtraSmallFont style="bg-green-200 text-green-800 font-semibold px-2.5 py-0.5 rounded-full">Terverifikasi</ExtraSmallFont>
        </div>
        <div className="col-start-2 row-span-3 border border-gray-400 rounded-lg p-5 row-start-3">
          <SmallFont style="text-center">INFORMASI MASJID</SmallFont>
          <div className="grid grid-cols-2 mt-3">
            <ExtraSmallFont style="">Donasi Terkumpul</ExtraSmallFont>
            <SupportFont style="text-gray-800 font-semibold row-start-2">
              Rp. <span>1.000.000</span>
            </SupportFont>
            <ExtraSmallFont style="text-end">Target</ExtraSmallFont>
            <SupportFont style="text-gray-800 text-end font-semibold row-start-2">
              Rp. <span>4.000.000</span>
            </SupportFont>
            <div className="col-span-2 bg-gray-300 h-2 mt-3 rounded-full relative">
              <div className="absolute bg-blue-500 h-2 top-0 w-1/2 rounded-full"></div>
            </div>
            <div className="border border-gray-400 rounded-lg p-2 col-span-2 mt-3 flex gap-3 items-center">
              <div className="size-8 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                <i class="fa-solid fa-user absolute bottom-0 text-2xl"></i>
              </div>
              <div>
                <SupportFont style="font-semibold text-gray-800">Nama Pengurus</SupportFont>
                <SupportFont>08782093840</SupportFont>
              </div>
            </div>
          </div>
        </div>
        <SmallFont style="mt-5 row-start-3">Deskripsi Kebutuhan</SmallFont>
        <SupportFont style="row-start-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore id
          nostrum ipsa? Ullam nihil consequatur laborum pariatur eligendi?
          Praesentium blanditiis illo similique nam omnis modi possimus maxime
          minima dicta officia.
        </SupportFont>
        <ButtonLink router="/payment" variant="Black" style = "row-start-6 max-w-max">Donasi Sekarang</ButtonLink>
      </div>
    </div>
  );
};

export default CardDetailLayout;
