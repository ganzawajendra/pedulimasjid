import axios from "axios";
import ButtonLink from "../elements/Button";
import { useEffect, useState } from "react";

const CardDetailLayout = ({id}) => {

  const [dataMasjid, setDataMasjid] = useState();

  const fetchMasjdiById = async () => {
    try{
      const response = await axios.get(`/mock-db.json`);
      const result = await response.data.masjid.find((item) => item.id === id);
      setDataMasjid(result);
    }catch(err){
      console.error("Terjadi kesalahan saat mengambil data masjid:", err);
    }
  }
  useEffect(() => {
    fetchMasjdiById();
  }, [id])

  return (
    <div className="w-full bg-white mt-10 pb-13 rounded-xl shadow-lg border border-gray-300 overflow-hidden
    max-sm:rounded-none">
      <div className="relative bg-neutral-200 transition-all
      lg:h-150
      md:h-100
      sm:h-80
      max-sm:h-60">
          <img
          src={dataMasjid?.url}
          alt={dataMasjid?.name}
          className="w-full h-full object-contain"
          />
        
      </div>
      <div className="py-5 px-10 grid grid-cols-2">
        <h3 className="font-semibold text-gray-800
        lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm">{dataMasjid?.name}</h3>
        <div className="flex items-center mb-2 gap-2 row-start-2">
          <i className="fa-solid fa-location-dot text-gray-500 
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs"></i>
          <p className="text-sm text-gray-500
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs">{dataMasjid?.address}</p>
        </div>
        <div className="row-start-3">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
            {dataMasjid?.status}
          </span>
        </div>
        <div className="row-span-4 border border-gray-300 rounded-lg p-3 
        lg:row-start-1 lg:col-span-1 lg:mt-0
        md:row-start-1 md:col-span-1 md:mt-0
        sm:row-start-4 sm:mt-5 sm:col-span-2
        max-sm:row-start-4 max-sm:mt-5 max-sm:col-span-2">
          <h4 className="font-medium text-gray-800
          lg:text-sm
          md:text-sm
          sm:text-xs
          max-sm:text-xs">
            INFORMASI MASJID
          </h4>
          <div className="grid grid-cols-2 mt-3">
            <p className="text-xs text-gray-500">Donasi Terkumpul</p>
            <h3 className="text-md  text-gray-800 row-start-2">
              Rp. <span>1.000.000</span>
            </h3>
            <p className="text-xs text-gray-500 text-end">Target</p>
            <h3 className="text-md  text-gray-800 text-end row-start-2">
              Rp. <span>4.000.000</span>
            </h3>
            <div className="col-span-2 bg-gray-300 h-2 mt-3 rounded-full relative">
              <div className="absolute bg-blue-500 h-2 top-0 w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
        <h4 className="mt-4 font-medium text-gray-800 row-start-5
        lg:text-sm
          md:text-sm
          sm:text-xs sm:row-start-8
          max-sm:text-xs max-sm:row-start-8">
          DESKRIPSI KEBUTUHAN
        </h4>
        <p className="px-4 w-full col-span-2 mb-4
        lg:text-sm
          md:text-sm
          sm:text-xs sm:row-start-9
          max-sm:text-xs max-sm:row-start-9">
          {dataMasjid?.demand}
        </p>
        <div className="flex row-start-7 col-start-2 justify-end
        sm:row-start-10
        max-sm:row-start-10">
          <ButtonLink router="/payment" variant="Black" style=" max-w-max py-2">
            Donasi Sekarang
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default CardDetailLayout;
