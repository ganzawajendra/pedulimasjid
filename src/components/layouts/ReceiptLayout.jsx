import React from "react";

const ReceiptLayout = () => {
  return (
    <>
      <div class="border border-gray-300 shadow-lg rounded-xl overflow-hidden pb-13 mt-5
      lg:rounded-xl lg:border lg:border-gray-200 lg:shadow-lg
      md:rounded-xl md:border md:border-gray-200 md:shadow-lg
      sm:rounded-xl sm:border sm:border-gray-200 sm:shadow-lg
      max-sm:rounded-none max-sm:border-none max-sm:shadow-none">
        <img
          src="/images/hero.png"
          alt="Masjid Al-Fatih"
          className="w-full h-full object-cover"
        />
        <div className="flex items-center flex-col py-5 border-b border-gray-300">
          <h3 className="font-semibold text-gray-800 
          lg:text-2xl
          md:text-xl
          sm:text-lg
          max-sm:text-md">Struk Bukti Pembayaran</h3>
          <p className="text-gray-500 text-center px-5
          lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Terima kasih telah membantu masjid, donasi anda telah kami terima</p>
        </div>
        <div className="py-5 px-10">
          <h4 className="font-semibold text-gray-800 mb-2
          lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">
            Donatur
          </h4>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Nama</p>
            <p className=" text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Budi Hartanto</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">No Telp</p>
            <p className=" text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">08123456789</p>
          </div>
          <div className="flex justify-between mb-2 items-start">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Masjid</p>
            <div className="flex items-end flex-col gap-1">
              <p className=" text-gray-800
              lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Masjid Al-Fatih</p>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-gray-500 lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs"></i>
                <p className="text-xs text-gray-500">
                  Jl. Durian no. 45
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4 px-10 border-b border-t border-gray-300">
          <h4 class="font-semibold text-gray-800 mb-2
          lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">
            Timestamp
          </h4>
          <div class="flex justify-between mb-2">
            <p className="text-sm text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Nomor Struk</p>
            <p className="text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Ber-120605-2</p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Tanggal/Waktu</p>
            <p className="text-gray-800 
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">12/06/2023 12:00</p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Metode Pembayaran</p>
            <p className="text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Transfer Bank</p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Status</p>
            <p className="text-green-600 font-semibold
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Berhasil</p>
          </div>
        </div>

        <div class="py-4 px-10">
          <h4 class="font-semibold text-gray-800 mb-2
          lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
            Rincian Donasi
          </h4>
          <div class="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Nominal Donasi</p>
            <p className="text-gray-800 
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">
              Rp <span>100000</span>
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Biaya Admin</p>
            <p className="text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">
              Rp <span>0</span>
            </p>
          </div>
          <div class="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Total</p>
            <p className="text-gray-800 font-semibold
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">
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
