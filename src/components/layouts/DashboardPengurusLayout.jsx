import React from "react";
import { Link } from "react-router-dom";
import FormUpdateProgres from "../fragments/FormUpdateProgres";
import FormAddPencairan from "../fragments/FormAddPencairan";

const DashboardPengurusLayout = () => {
  return (
    <div className="min-h-screen mt-10 grid grid-cols-3 gap-5">
      <h1 className="text-xl font-semibold">Dashboard Pengurus</h1>
      {/* Profil Masjid dan Pengurus */}
      <div className="col-span-2 border row-start-2 row-span-4 border-gray-300 rounded-lg overflow-hidden">
        <img
          src="/images/hero.png"
          alt="<?= $masjid['nama']; ?>"
          className="w-full object-cover"
        />
        <div className="p-10">
          <div>
            <h5 className="text-sm text-center uppercase font-semibold">
              Profil Pengurus
            </h5>
            <div className="max-w-max mb-5 bg-white p-5 flex items-center gap-5">
              <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                <i className="fa-solid fa-user absolute bottom-0 text-3xl"></i>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold">Budi Hartanto</h4>
                  {"|"}
                  <p className="text-sm text-gray-500">budi@gmail.com</p>
                </div>
                <p className=" text-gray-500">Jl. Jendral Sudirman no.890</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-sm text-center font-semibold uppercase">
              Profil Masjid
            </h5>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Masjid Al-Fatih</h4>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-gray-500 text-sm"></i>
                    <p className="text-sm text-gray-500">Jl. Durian no. 45</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Terverifikasi
                </span>
              </div>
              <div className="my-4">
                <h4 className="font-semibold">Deskripsi Kebutuhan</h4>
                <p className="text-sm text-gray-500 line-clamp-3 overflow-hidden w-full text-ellipsis">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis autem maxime mollitia alias voluptatem dolor
                  officia vero. Perferendis veniam vel architecto reprehenderit
                  numquam at error voluptatum expedita, beatae, unde ratione
                  facilis atque delectus voluptatibus accusamus suscipit
                  possimus quasi consectetur doloribus cupiditate repellat
                  earum, voluptas perspiciatis illo! Impedit autem quos corporis
                  velit harum amet. Ea impedit minima cumque eveniet porro
                  accusantium aliquid quisquam harum labore, consectetur magni
                  dolores pariatur nisi dicta fuga quo voluptatem est maxime
                  eligendi voluptate facere, et repudiandae.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Status</h4>
                <p className="text-sm text-gray-500">Aktif</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Link
              to="/pengurus/masjid/edit"
              className="text-sm text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-1 rounded duration-300 transition-all"
            >
              Edit
            </Link>
            <Link
              to="/pengurus/masjid/nonaktif"
              className="text-sm text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded duration-300 transition-all"
            >
              Nonaktifkan
            </Link>
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="bg-white p-6 rounded-lg col-start-3 max-h-max row-start-2 shadow-md border border-gray-200">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm tracking-wide">Total Donasi</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">
              Rp <span>1000000</span>
            </h3>
          </div>
          <div className="bg-green-200 size-10 rounded-lg relative">
            <i className="fa-solid fa-dollar-sign text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-800"></i>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border max-h-max col-start-3 row-start-3 border-gray-200">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm tracking-wide">
              Dana Tersalurkan
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">
              Rp <span>300000</span>
            </h3>
          </div>
          <div className="bg-blue-100 size-10 relative rounded-lg">
            <i className="fa-regular fa-clipboard text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600"></i>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border max-h-max border-gray-200 col-start-3 row-start-4">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm tracking-wide">Sisa Dana</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-1">
              Rp <span>700000</span>
            </h3>
          </div>
          <div className="bg-amber-100 size-10 relative rounded-lg">
            <i className="fa-regular fa-clock text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-600"></i>
          </div>
        </div>
      </div>

      {/* Aktivitas Terkini */}
      <div className="col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm text-center uppercase font-semibold">
            Aktivitas Terkini
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Donatur
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nominal
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex size-8">
                      <div className="size-8 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                        <i className="fa-solid fa-user absolute bottom-0 text-2xl"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-800">
                        Budi Doremi
                      </div>
                      <div className="text-sm text-gray-500">
                        budi@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-800 font-medium">
                    Rp <span>300000</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-800 font-medium">
                    20/11/2022
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Berhasil
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Progress */}
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div class="flex items-center mb-6 gap-5">
          <div class="bg-blue-100 size-10 relative rounded-lg">
            <i class="fa-regular fa-image text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600"></i>
          </div>
          <h2 className="text-sm text-center uppercase font-semibold">
            Update Progres Pembangunan
          </h2>
        </div>
        <FormUpdateProgres style="flex flex-col gap-4" />
      </div>

      {/* Ajukan Pencairan */}
      <div class="bg-white p-6 rounded-xl shadow-sm border  border-gray-200 max-h-max">
        <div class="flex items-center mb-6 gap-5">
          <div class="bg-green-200 size-10 relative rounded-lg">
            <i class="fa-solid fa-plus text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-800"></i>
          </div>
          <h2 className="text-sm text-center uppercase font-semibold">
            Ajukan Pencairan Dana
          </h2>
        </div>

        <FormAddPencairan style="flex flex-col gap-4" />
      </div>
    </div>
  );
};

export default DashboardPengurusLayout;
