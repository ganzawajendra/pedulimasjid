import React from "react";

const ReceiptLayout = () => {
  return (
    <>
      <div class="border border-gray-300 shadow-lg rounded-xl overflow-hidden pb-13 mt-10">
        <img
          src="/images/hero.png"
          alt="Masjid Al-Fatih"
          className="w-full h-full object-cover"
        />
        <div className="py-5 px-10">
          <h4 className="text-md font-semibold text-gray-800 mb-2">
            Donatur
          </h4>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Nama</p>
            <p className=" text-gray-800">Budi Hartanto</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">No Telp</p>
            <p className=" text-gray-800">08123456789</p>
          </div>
          <div className="flex justify-between mb-2 items-start">
            <p className="text-sm text-gray-500">Masjid</p>
            <div className="flex items-end flex-col gap-1">
              <p className=" text-gray-800">Masjid Al-Fatih</p>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-gray-500 text-sm"></i>
                <p className="text-xs text-gray-500">
                  Jl. Durian no. 45
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4 px-10 border-b border-t border-gray-300">
          <h4 class="text-md font-semibold text-gray-800 mb-2">
            Timestamp
          </h4>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Nomor Struk</p>
            <p className="text-md text-gray-800">Ber-120605-2</p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Tanggal/Waktu</p>
            <p className="text-md text-gray-800">12/06/2023 12:00</p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Metode Pembayaran</p>
            <p className="text-md text-gray-800">Transfer Bank</p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Status</p>
            <p className="text-md text-green-600 font-semibold">Berhasil</p>
          </div>
        </div>

        <div class="py-4 px-10">
          <h4 class="text-md font-semibold text-gray-800 mb-2">
            Rincian Donasi
          </h4>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Nominal Donasi</p>
            <p className="text-md text-gray-800">
              Rp <span>100000</span>
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Biaya Admin</p>
            <p className="text-md text-gray-800">
              Rp <span>0</span>
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-md text-gray-800 font-semibold">
              Rp <span>100000</span>
            </p>
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
