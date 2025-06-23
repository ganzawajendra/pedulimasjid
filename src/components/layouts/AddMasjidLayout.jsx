import React from "react";
import FormAddMasjid from "../fragments/FormAddMasjid";
import SmallFont from "../elements/ListFont/SmallFont";
import SupportFont from "../elements/ListFont/SupportFont";

const AddMasjidLayout = () => {
  return (
    <>
      <div className="max-w-max mb-5 bg-white rounded-xl rounded-br-lg shadow-lg p-5 border border-gray-300 flex items-center gap-5">
        <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
          <i class="fa-solid fa-user absolute bottom-0 text-3xl"></i>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <SmallFont>Budi Hartanto</SmallFont>
            {"|"}
            <SupportFont style="text-sm">budi@gmail.com</SupportFont>
          </div>
          <SupportFont>Jl. Jendral Sudirman no.890</SupportFont>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl rounded-br-lg shadow-lg p-8 border border-gray-300">
        <SmallFont>Tambahkan Masjid</SmallFont>
        <SupportFont style="text-sm">
          Silahkan tambahkan masjid sesuai dengan masjid yang anda miliki
        </SupportFont>
        <FormAddMasjid />
      </div>
    </>
  );
};

export default AddMasjidLayout;
