import React from "react";
import SmallFont from "../elements/ListFont/SmallFont";
import SupportFont from "../elements/ListFont/SupportFont";

const ReceiptLayout = () => {
  return (
    <>
      <div class="border border-gray-300 shadow-lg rounded-xl overflow-hidden pb-13 mt-10">
        <img
          src="/images/hero.png"
          alt="Masjid Al-Fatih"
          className="w-full h-full object-cover"
        />
        <SmallFont style="text-center mt-4">Berhasil Melakukan Donasi</SmallFont>
        <div className="p-4">
          <SupportFont style="font-semibold my-2 text-gray-800">
            Donatur
          </SupportFont>
          <div className="flex justify-between mb-2">
            <SupportFont style="text-sm">Nama</SupportFont>
            <SupportFont style="text-gray-800">Budi Hartanto</SupportFont>
          </div>
          <div className="flex justify-between mb-2">
            <SupportFont style="text-sm">No Telp</SupportFont>
            <SupportFont style="text-gray-800">08123456789</SupportFont>
          </div>
          <div className="flex justify-between mb-2 items-center">
            <SupportFont style="text-sm">Masjid</SupportFont>
            <div className="flex items-end flex-col gap-1">
              <SupportFont style="text-gray-800">Masjid Al-Fatih</SupportFont>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-gray-500 text-sm"></i>
                <SupportFont style="text-gray-800 text-xs">
                  Jl. Durian no. 45
                </SupportFont>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 border-b border-t border-gray-300">
          <SupportFont style="font-semibold my-2 text-gray-800">
            Timestamp
          </SupportFont>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Nomor Struk</SupportFont>
            <SupportFont style="text-gray-800">Ber-120605-2</SupportFont>
          </div>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Tanggal/Waktu</SupportFont>
            <SupportFont style="text-gray-800">12/06/2023 12:00</SupportFont>
          </div>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Metode Pembayaran</SupportFont>
            <SupportFont style="text-gray-800">Transfer Bank</SupportFont>
          </div>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Status</SupportFont>
            <SupportFont style="text-gray-800">Berhasil</SupportFont>
          </div>
        </div>

        <div class="p-4">
          <SupportFont style="font-semibold my-2 text-gray-800">
            Rincian Donasi
          </SupportFont>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Nominal Donasi</SupportFont>
            <SupportFont style="text-gray-800">Rp <span>100000</span></SupportFont>
          </div>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Biaya Admin</SupportFont>
            <SupportFont style="text-gray-800">Rp <span>0</span></SupportFont>
          </div>
          <div class="flex justify-between mb-2">
            <SupportFont style="text-sm">Total</SupportFont>
            <SupportFont style="text-gray-800 font-semibold">Rp <span>100000</span></SupportFont>
          </div>
        </div>

        <div class="text-center text-xs text-gray-500">
          <p>Struk ini sah sebagai bukti transaksi</p>
          <p class="mt-1">www.pedulimasjid.com | 0800-1234-5678</p>
        </div>
      </div>
    </>
  );
};

export default ReceiptLayout;
