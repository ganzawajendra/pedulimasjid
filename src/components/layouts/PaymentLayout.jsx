import React from "react";
import SmallFont from "../elements/ListFont/SmallFont";
import SupportFont from "../elements/ListFont/SupportFont";
import ExtraSmallFont from "../elements/ListFont/ExtraSmallFont";
import FormPayment from "../fragments/FormPayment";

const PaymentLayout = () => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-xl overflow-hidden pb-13 mt-10">
      <div className="flex items-stretch mb-6 rounded-lg">
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-transparent">
            <img
              src="/images/hero.png"
              alt="Masjid Al-Fatih"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 p-6 text-white">
            <SmallFont style="">MASJID AL-FATIH</SmallFont>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-location-dot text-gray-500 text-sm"></i>
              <ExtraSmallFont style="">Jl. Durian no. 45</ExtraSmallFont>
            </div>
            <ExtraSmallFont style=" font-semibold mt-4">Deskripsi Kebutuhan</ExtraSmallFont>
            <SupportFont style="line-clamp-3 overflow-hidden w-1/2 text-ellipsis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ea ipsam molestiae quidem exercitationem placeat voluptatem eligendi dolorem veniam iusto reprehenderit nisi maxime unde facilis cupiditate perspiciatis perferendis dic</SupportFont>
            <ExtraSmallFont style=" font-semibold mt-4">Kekurangan</ExtraSmallFont>
            <SupportFont>Rp <span>500.000</span></SupportFont>
          </div>
        </div>
      </div>
      <FormPayment />
    </div>
  );
};

export default PaymentLayout;
