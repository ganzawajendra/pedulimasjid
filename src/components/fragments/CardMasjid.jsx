import React from "react";
import { Link } from "react-router-dom";

const CardMasjid = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gray-400 h-32 shadow-lg">
        <img
          src="/images/hero.png"
          alt="tes"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800">Masjid Al-Fatih</h3>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Terverifikasi
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <i className="fa-solid fa-location-dot text-gray-500 text-sm"></i>
          <p className="text-sm text-gray-500">tes</p>
        </div>

        <div className="">
          <h4 className="text-sm font-medium text-gray-800">
            Kebutuhan:
          </h4>
          <p className="line-clamp-3 overflow-hidden w-full text-xs text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit nesciunt, eos blanditiis consequatur veritatis nisi similique tempora neque, magnam ipsam laborum cumque unde qui, quasi pariatur quae! Velit eveniet dignissimos, tempore itaque eos facere pariatur maiores animi mollitia architecto voluptatum fuga voluptatem ratione nam dolore ipsa eaque doloremque perferendis debitis explicabo illo? Perspiciatis tempora nisi non veniam itaque nulla quibusdam, mollitia vitae facilis deleniti, delectus accusamus ratione ex nam! Voluptatum nisi omnis alias dicta eligendi? Odio, culpa reprehenderit dolor laudantium magni, ad incidunt sint amet et assumenda porro quos quia a saepe maxime alias quae quaerat quis veritatis natus.</p>
        </div>

        <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-100">
          <div>
          <h4 className="text-sm font-medium text-gray-800">
            Terdaftar:
          </h4>
          <p className="text-xs text-gray-800">2020-20-20 20:20</p>
          </div>
          <Link
            to="/card-detail"
            className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium"
          >
            Detail <i className="fas fa-chevron-right ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMasjid;
