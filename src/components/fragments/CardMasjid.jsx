import React from "react";
import { Link } from "react-router-dom";

const CardMasjid = ({name, address, status, demand, created_at, url}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gray-400 h-32 shadow-lg">
        <img
          src={url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {status}
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <i className="fa-solid fa-location-dot text-gray-500 text-sm"></i>
          <p className="text-sm text-gray-500">{address}</p>
        </div>

        <div className="">
          <h4 className="text-sm font-medium text-gray-800">
            Kebutuhan:
          </h4>
          <p className="line-clamp-3 overflow-hidden w-full text-xs text-ellipsis">{demand}</p>
        </div>

        <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-100">
          <div>
          <h4 className="text-sm font-medium text-gray-800">
            Terdaftar:
          </h4>
          <p className="text-xs text-gray-800">{created_at}</p>
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
