import React from "react";
import { Link } from "react-router-dom";

const CardMasjid = ({ name, address, status, demand, created_at, url, id }) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
    lg:col-span-1
    md:col-span-1
    sm:col-span-2
    max-sm:col-span-2">
      <div className="bg-gray-400 h-32 shadow-lg">
        <img src={url} alt={name} className="w-full h-full object-cover" />
      </div>
      <div
        className="grid grid-cols-3 transition-all
      lg:p-4
      md:p-2
      sm:p-4
      max-sm:p-2"
      >
        <h3
          className="font-semibold text-gray-800 line-clamp-1 overflow-hidden w-full text-ellipsis transition-all
          lg:text-xl lg:col-span-2 lg:col-start-1
          md:text-md md:col-span-3
          sm:text-lg sm:col-span-3
          max-sm:text-md max-sm:col-span-3 max-sm:font-bold"
        >
          {name}
        </h3>
        <div className="flex items-start transition-all
        lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:justify-end lg:my-0
        md:row-start-3 md:col-span-3 md:justify-start md:my-2
        sm:row-start-3 sm:col-span-3 sm:justify-start sm:my-2
        max-sm:row-start-3 max-sm:col-span-3 max-sm:justify-start max-sm:my-2">
          <span
            className="bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded-full transition-all
          lg:text-xs
          md:text-xs
          sm:text-xs
          max-sm:text-xs"
          >
            {status}
          </span>
        </div>

        <div className="flex items-center gap-1 transition-all
        lg:col-span-3 lg:mb-0
        md:col-span-3 md:mb-0
        sm:col-span-3 sm:mb-0
        max-sm:col-span-3 max-sm:mb-0">
          <i
            className="fa-solid fa-location-dot text-gray-400 transition-all
          lg:text-sm
          md:text-xs
          sm:text-sm
          max-sm:text-xs"
          ></i>
          <p
            className=" font-medium text-gray-400 transition-all line-clamp-1 overflow-hidden w-full text-ellipsis
          lg:text-sm
          md:text-xs
          sm:text-xs
          max-sm:text-xs"
          >
            {address}
          </p>
        </div>

        <div className="col-span-3 transition-all
        lg:my-3
        md:my-2
        sm:my-2
        max-sm:my-2">
          <h4
            className=" font-medium text-gray-800 transition-all
          lg:text-sm lg:tracking-tight
          md:text-xs md:tracking-tight
          sm:text-sm sm:tracking-tight
          max-sm:text-xs max-sm:tracking-tight max-sm:font-bold"
          >
            Kebutuhan:
          </h4>
          <p
            className="line-clamp-3 overflow-hidden w-full text-ellipsis transition-all
          lg:text-sm
          md:text-xs
          sm:text-sm
          max-sm:text-xs"
          >
            {demand}
          </p>
        </div>

        <div className="flex justify-between items-center border-t border-gray-100 col-span-2">
          <div>
            <h4
              className="font-medium text-gray-800 transition-all
          lg:text-sm
          md:text-xs
          sm:text-sm
          max-sm:text-xs max-sm:font-bold"
            >
              Terdaftar:
            </h4>
            <p
              className="text-gray-800 transition-all
          lg:text-sm
          md:text-xs
          sm:text-sm
          max-sm:text-xs"
            >
              {created_at}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center
        max-sm:row-start-6 max-sm:col-start-3">
          <Link
            to={`/card-detail/${id}`}
            className="font-medium flex items-center text-blue-600 hover:text-blue-800 transition-all
            lg:text-md 
            md:text-xs
            sm:text-sm
            max-sm:text-xs"
          >
            Detail <i className="fas fa-chevron-right ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMasjid;
