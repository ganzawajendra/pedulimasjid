import React from "react";
import { Link } from "react-router-dom";

const CardMasjid = () => {
  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="bg-gray-400 h-32 shadow-lg">
        <img
          src="../asset/img/<?= $dataMasjid['dokumen_path']; ?>"
          alt="tes"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-4 md:p-6">
        <div class="flex justify-between items-start mb-3 md:mb-4">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800">tes</h2>
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            tes
          </span>
        </div>

        <div class="flex items-center text-gray-600 mb-2 md:mb-3">
          <i class="fas fa-map-marker-alt mr-2 text-blue-500 text-sm md:text-base"></i>
          <p class="text-xs md:text-sm">tes</p>
        </div>

        <div class="mb-3 md:mb-4">
          <h3 class="text-xs md:text-sm font-medium text-gray-700 mb-1">
            Kebutuhan:
          </h3>
          <p class="text-xs md:text-sm text-gray-600">tes</p>
        </div>

        <div class="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-100">
          <span class="text-xs text-gray-500">
            Diinput: <span>tes</span>
          </span>
          <Link
            to="/card-detail"
            class="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium"
          >
            Detail <i class="fas fa-chevron-right ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMasjid;
