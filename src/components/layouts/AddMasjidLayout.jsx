import React from "react";
import FormAddMasjid from "../fragments/FormAddMasjid";

const AddMasjidLayout = () => {
  return (
    <>
      <div className="max-w-max mb-5 bg-white rounded-xl rounded-br-lg shadow-lg p-5 border border-gray-300 flex items-center gap-5">
        <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
          <i className="fa-solid fa-user absolute bottom-0 text-3xl"></i>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h5 className="text-md font-semibold text-gray-800">Budi Hartanto</h5>
            {"|"}
            <p className="text-sm text-gray-500">budi@gmail.com</p>
          </div>
          <p className="text-sm text-gray-500">Jl. Jendral Sudirman no.890</p>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl rounded-br-lg shadow-lg p-8 border border-gray-300">
        <h3 className="text-xl font-semibold text-gray-800">Tambahkan Masjid</h3>
        <p className="text-md text-gray-500">
          Silahkan tambahkan masjid sesuai dengan masjid yang anda miliki
        </p>
        <FormAddMasjid />
      </div>
    </>
  );
};

export default AddMasjidLayout;
