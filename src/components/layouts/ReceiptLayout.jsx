import React from "react";

const ReceiptLayout = () => {
  if(localStorage.getItem("user") === null) window.location.href = "/login";
  const getPayment = localStorage.getItem("payment") ? JSON.parse(localStorage.getItem("payment")) : null;
  return (
    <>
      <div className="border border-gray-300 shadow-lg rounded-xl overflow-hidden pb-13 mt-5
      lg:rounded-xl lg:border lg:border-gray-200 lg:shadow-lg
      md:rounded-xl md:border md:border-gray-200 md:shadow-lg
      sm:rounded-xl sm:border sm:border-gray-200 sm:shadow-lg
      max-sm:rounded-none max-sm:border-none max-sm:shadow-none">
        <img
          src={getPayment.masjid_url}
          alt={getPayment.masjid_name}
          className="w-full h-full object-cover"
        />
        <div className="flex items-center flex-col py-5 border-b border-gray-300">
          <h3 className="font-semibold text-gray-800 
          lg:text-2xl
          md:text-xl
          sm:text-lg
          max-sm:text-md max-sm:font-bold">Struk Bukti Pembayaran</h3>
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
          max-sm:text-sm">{getPayment.donatur_name}</p>
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
          max-sm:text-sm">{getPayment.masjid_name}</p>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-gray-500 lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs"></i>
                <p className="text-xs text-gray-500">
                  {getPayment.masjid_address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 px-10 border-b border-t border-gray-300">
          <h4 className="font-semibold text-gray-800 mb-2
          lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">
            Timestamp
          </h4>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Nomor Struk</p>
            <p className="text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">Ber-{getPayment.created_at.split("-")}-{getPayment.masjid_id}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Tanggal/Waktu</p>
            <p className="text-gray-800 
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">{getPayment.created_at.split("-").join("/")}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Metode Pembayaran</p>
            <p className="text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm">{getPayment.metode}</p>
          </div>
          <div className="flex justify-between mb-2">
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

        <div className="py-4 px-10">
          <h4 className="font-semibold text-gray-800 mb-2
          lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
            Rincian Donasi
          </h4>
          <div className="flex justify-between mb-2">
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
              Rp <span>{getPayment.amount}</span>
            </p>
          </div>
          <div className="flex justify-between mb-2">
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
          <div className="flex justify-between mb-2">
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
              Rp <span>{getPayment.amount}</span>
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>Struk ini sah sebagai bukti transaksi</p>
          <p className="mt-1">www.pedulimasjid.com | 0800-1234-5678</p>
        </div>
      </div>
    </>
  );
};

export default ReceiptLayout;
