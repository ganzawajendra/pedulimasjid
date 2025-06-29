import React from "react";
import FormAddMasjid from "../fragments/FormAddMasjid";

const AddMasjidLayout = () => {
  return (
    <>
      <div
        className="border border-gray-300 shadow-lg p-8 w-full flex flex-col gap-10
    transition-all
    lg:mx-20 lg:rounded-xl
      md:mx-10 md:rounded-xl
      sm:mx-5 sm:rounded-xl
      max-sm:mx-0 max-sm:rounded-none"
      >
        <div className="max-w-max bg-white rounded-xl rounded-br-lg flex items-center gap-5">
          <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
            <i className="fa-solid fa-user absolute bottom-0 text-3xl"></i>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h5
                className="font-semibold text-gray-800
            lg:text-md
          md:text-md
          sm:text-sm
          max-sm:text-sm"
              >
                Budi Hartanto
              </h5>
              {"|"}
              <p className="text-gray-500
            lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs">budi@gmail.com</p>
            </div>
            <p className=" text-gray-500
            lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs">Jl. Jendral Sudirman no.890</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl rounded-br-lg">
          <h3
            className="font-semibold text-gray-800
        lg:text-xl
      md:text-lg
      sm:text-md
      max-sm:text-sm"
          >
            Tambahkan Masjid
          </h3>
          <p
            className="text-gray-500
        lg:text-md
      md:text-sm
      sm:text-xs
      max-sm:text-xs"
          >
            Silahkan tambahkan masjid sesuai dengan masjid yang anda miliki
          </p>
          <FormAddMasjid />
        </div>
      </div>
    </>
  );
};

export default AddMasjidLayout;
