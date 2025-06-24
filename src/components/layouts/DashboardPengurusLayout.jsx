import React from "react";

const DashboardPengurusLayout = () => {
  return (
    <div class="min-h-screen mt-10 grid grid-cols-3 gap-5">
      <div class="flex justify-between items-center mb-8 col-span-2">
        <div>
          <h1>Dashboard Pengurus</h1>
          <div className="max-w-max mb-5 bg-white rounded-xl rounded-br-lg shadow-lg p-5 border border-gray-300 flex items-center gap-5">
            <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
              <i class="fa-solid fa-user absolute bottom-0 text-3xl"></i>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h4>Budi Hartanto</h4>
                {"|"}
                <h3>budi@gmail.com</h3>
              </div>
              <h4>Jl. Jendral Sudirman no.890</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
        <img
          src="../asset/img/<?= $masjid['dokumen_path']; ?>"
          alt="<?= $masjid['nama']; ?>"
          class="w-16 h-16 rounded-md object-cover"
        />
        <div class="ml-4">
          <h3 class="font-medium text-gray-800">nama masjid</h3>
          <p class="text-sm text-gray-500">alamat masjid</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
        <div class="flex justify-between">
          <div>
            <p class="text-gray-500 text-sm">Total Donasi</p>
            <h3 class="text-2xl font-semibold text-gray-800 mt-1">
              Rp <span>total donasi</span>
            </h3>
          </div>
          <div class="bg-green-200 p-3 rounded-lg">
            <i class="fa-solid fa-dollar-sign text-lg text-green-800"></i>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
        <div class="flex justify-between">
          <div>
            <p class="text-gray-500 text-sm">Dana Tersalurkan</p>
            <h3 class="text-2xl font-semibold text-gray-800 mt-1">
              Rp <span>doansi terpakai</span>
            </h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-lg">
            <i class="fa-regular fa-clipboard text-lg text-blue-600"></i>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
        <div class="flex justify-between">
          <div>
            <p class="text-gray-500 text-sm">Sisa Dana</p>
            <h3 class="text-2xl font-semibold text-gray-800 mt-1">
              Rp <span>sisa donasi</span>
            </h3>
          </div>
          <div class="bg-amber-100 p-3 rounded-lg">
            <i class="fa-regular fa-clock text-lg text-amber-600"></i>
          </div>
        </div>
      </div>

      <div class="col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg font-semibold text-gray-800">Aktivitas Terkini</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Donatur
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nominal
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        nama donatur
                      </div>
                      <div class="text-sm text-gray-500">email donatur</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    Rp <span>donasi donatur</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">waktu donasi</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Berhasil
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border col-start-2 border-gray-300">
        <div class="flex items-center mb-6 gap-5">
          <div class="bg-blue-100 p-3 rounded-lg">
            <i class="fa-regular fa-image text-lg text-blue-600"></i>
          </div>
          <h2 class="text-lg font-semibold text-gray-800">
            Update Progress Pembangunan
          </h2>
        </div>

        <form
          action=""
          method="post"
          autocomplete="off"
          enctype="multipart/form-data"
        >
          <div class="mb-4">
            <label for="foto_path">Foto</label>
            <input
              type="file"
              name="foto_path"
              id="foto_path"
              accept=".jpg, .png, .jpeg "
              class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700 mb-1"
              for="deskripsi"
            >
              Deskripsi Progress
            </label>
            <textarea
              name="deskripsi"
              id="deskripsi"
              rows="3"
              class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none"
              placeholder="Contoh: Pengecatan tembok bagian depan selesai 80%"
              required
            ></textarea>
          </div>

          <input
            type="submit"
            class="w-full bg-gray-800 hover:bg-gray-900 crursor-pointer text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
            value="Kirim Progress"
            name="submit_progress"
            id="submit_progress"
          ></input>
        </form>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300 max-h-max">
        <div class="flex items-center mb-6 gap-5">
          <div class="bg-green-200 p-3 rounded-lg">
            <i class="fa-solid fa-plus text-lg text-green-800"></i>
          </div>
          <h2 class="text-lg font-semibold text-gray-800">
            Ajukan Pencairan Dana
          </h2>
        </div>

        <form action="" method="post" autocomplete="off">
          <p class="text-red-500 text-sm mb-4">jika error</p>
          <div class="mb-4">
            <label for="nominal">Nominal :</label>
            <input
              type="number"
              name="nominal"
              id="nominal"
              class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none"
              placeholder="Masukkan nominal pencairan"
              required
            />
          </div>
          <div class="mb-4">
            <label for="tujuan">Tujuan :</label>
            <input
              type="text"
              name="tujuan"
              id="tujuan"
              class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none"
              placeholder="Masukkan tujuan pencairan"
              required
            />
          </div>
          <input
            type="submit"
            name="submit_pencairan"
            id="submit_pencairan"
            class="w-full bg-gray-800 cursor-pointer hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
            value="Kirim Pencairan"
          />
        </form>
      </div>
    </div>
  );
};

export default DashboardPengurusLayout;
