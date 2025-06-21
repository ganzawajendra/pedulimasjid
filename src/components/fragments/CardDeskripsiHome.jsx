import React from "react";
import ListCard from "../elements/ListCard";
import SmallFont from "../elements/ListFont/SmallFont";
import SupportFont from "../elements/ListFont/SupportFont";

const CardDeskripsiHome = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        <SmallFont>Apa itu aplikasi Peduli Masjid?</SmallFont>
        <SupportFont>Aplikasi Peduli Masjid adalah platform digital yang menghubungkan donatur dengan masjid-masjid yang belum layak di pelosok Indonesia. Kami menyediakan sistem:</SupportFont>
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
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        <SmallFont>Setiap Rupiah Anda Akan Membantu:</SmallFont>
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
