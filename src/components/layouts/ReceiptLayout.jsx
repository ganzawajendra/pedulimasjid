import React from "react";

const ReceiptLayout = () => {
  return (
    <>
      <div class="p-5 border-x border-gray-300 border-b rounded-b-lg shadow-lg">
        <img
          src="/images/hero.png"
          alt="Masjid Al-Fatih"
          className="w-full h-full object-cover"
        />
        <div class="border-t border-b border-gray-300 py-4 mb-4">
          <div class="flex justify-between mb-2">
            <span class="text-gray-500 text-sm">ID Transaksi</span>
            <span class="font-mono text-sm">idStruck</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-500 text-sm">Tanggal/Waktu</span>
            <span class="text-sm">tanggal</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-500 text-sm">Metode Pembayaran</span>
            <span class="text-sm">metode pembayaran</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Status</span>
            <span class="text-blue-500 font-semibold">berhasil</span>
          </div>
        </div>

        <div class="mb-4">
          <h4 class="font-medium text-gray-700 mb-2">Rincian Donasi</h4>
          <div class="flex justify-between mb-1">
            <span class="text-gray-500 text-sm">Nominal Donasi</span>
            <span>Rp 100000</span>
          </div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-500 text-sm">Biaya Admin</span>
            <span>Rp 0</span>
          </div>
          <div class="flex justify-between mt-3 pt-2 border-t border-gray-200">
            <span class="font-medium text-gray-700 mb-2">Total</span>
            <span class="text-blue-500 font-semibold">Rp 100</span>
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
