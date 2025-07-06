import React from "react";
import ListCard from "../elements/ListCard";

const CardDeskripsiHome = () => {
  return (
    <>
      <div className="bg-white shadow-lg max-h-max rounded-lg p-6 border border-gray-300 transition-all apearLeftRight
      lg:col-span-1
      md:col-span-1
      sm:col-span-2
      max-sm:col-span-2 max-sm:rounded-none max-sm:p-4">
        <h3 className=" font-semibold text-gray-800 transition-all
        lg:text-xl
        md:text-md
        sm:text-sm
        max-sm:text-sm max-sm:font-bold">Apa itu aplikasi Peduli Masjid?</h3>
        <p className=" text-gray-500 transition-all
        lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs
        ">Aplikasi Peduli Masjid adalah platform digital yang menghubungkan donatur dengan masjid-masjid yang belum layak di pelosok Indonesia. Kami menyediakan sistem:</p>
        <ul>
          <ListCard
            icon="fa-solid fa-circle-check"
            style="text-lg text-green-500"
            highlight="Terpercaya"
          >
            Setiap masjid diverifikasi ketat oleh tim kami.
          </ListCard>
          <ListCard
            icon="fa-solid fa-circle-check"
            style="text-lg text-green-500"
            highlight="Transparan"
          >
            Pantau perkembangan dana & pembangunan secara real-time.
          </ListCard>
          <ListCard
            icon="fa-solid fa-circle-check"
            style="text-lg text-green-500"
            highlight="Tepat Sasaran"
          >
            Donasi 100% disalurkan untuk kebutuhan masjid.
          </ListCard>
        </ul>
      </div>
      <div className="bg-white shadow-lg max-h-max rounded-lg p-6 border border-gray-300 apearRightLeft
      lg:col-span-1
      md:col-span-1
      sm:col-span-2
      max-sm:col-span-2 max-sm:rounded-none max-sm:p-4">
        <h3 className="font-semibold text-gray-800
        lg:text-xl
        md:text-md
        sm:text-sm
        max-sm:text-sm max-sm:font-bold">Setiap Rupiah Anda Akan Membantu:</h3>
        <ul>
          <ListCard  iconAlt="🕌">
            Renovasi bangunan masjid yang rusak
          </ListCard>
          <ListCard iconAlt="📿">
            Penyediaan alat ibadah (mukena, sajadah, dll)
          </ListCard>
          <ListCard iconAlt="🔊">
            Perbaikan sound system untuk dakwah
          </ListCard>
          <ListCard iconAlt="💡">
            Biaya operasional (listrik, air, kebersihan)
          </ListCard>
        </ul>
      </div>
    </>
  );
};

export default CardDeskripsiHome;
