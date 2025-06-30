import React from "react";
import FormInputReadOnly from "../elements/FormInput/FormInputReadOnly";
import FormSelectInput from "../elements/FormSelectInput";
import FormSubmit from "../elements/FormSubmit";

const FormUpdateDana = () => {
  const optionValue = ["Disetujui", "Ditolak"];
  return (
    <>
      <form
        action=""
        method="post"
        className="grid grid-cols-4 gap-4 mt-5 items-center"
      >
        <div className="col-span-2 row-span-4 transition-all
        lg:row-span-4 lg:col-span-2
      md:row-span-1 md:col-span-4
      sm:row-span-1 sm:col-span-4
      max-sm:row-span-1 max-sm:col-span-4 max-sm:rounded-none">
          <div className=" h-80 bg-neutral-200 rounded-lg overflow-hidden">
            <img
              src="/images/hero.png"
              alt=""
              className="h-full object-cover"
            />
          </div>
          <div className="flex item-center justify-around
          max-sm:flex-col max-sm:items-center">
            <div className="max-w-max bg-white p-5 flex items-center gap-2">
              <div className="size-7 bg-gray-300 rounded-full flex items-center justify-center relative transition-all overflow-hidden
              lg:size-7
              md:size-7
              sm:size-6
              max-sm:size-6">
                <i className="fa-solid fa-user absolute bottom-0 transition-all
                lg:text-lg
                md:text-lg
                sm:text-md
                max-sm:text-md"></i>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold transition-all
                  lg:text-sm
                  md:text-sm
                  sm:text-xs
                  max-sm:text-xs">Budi Hartanto</h4>
                  {"|"}
                  <p className="text-xs text-gray-500">budi@gmail.com</p>
                </div>
                <p className=" text-gray-500 transition-all
                lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">
                  Jl. Jendral Sudirman no.890
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <i className="fa-solid fa-arrow-right transition-all
              lg:text-xl
              md:text-lg
              sm:text-md
              max-sm:text-md max-sm:rotate-90"></i>
            </div>
            <div className="max-w-max p-5 flex items-center gap-5">
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold transition-all
                  lg:text-sm
                  md:text-sm
                  sm:text-xs
                  max-sm:text-xs">Masjid Al-Fatih</h4>
                </div>
                <p className=" text-gray-500 transition-all
                lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">
                  Jl. Jendral Sudirman no.890
                </p>
              </div>
            </div>
          </div>
        </div>
        <FormInputReadOnly type="text" name="id" value="1" style="transition-all
        lg:col-span-1 lg:col-start-3
        md:col-span-2
        sm:col-span-2
        max-sm:col-span-4 max-sm:mx-10">
          ID
        </FormInputReadOnly>
        <FormInputReadOnly type="text" name="nama_lengkap" value="Taslim" style="transition-all
        lg:col-span-1 lg:col-start-3 lg:row-start-2
        md:col-span-2
        sm:col-span-4
        max-sm:col-span-4 max-sm:mx-10">
          Nama Pengurus
        </FormInputReadOnly>
        <FormInputReadOnly type="text" name="nama_masjid" value="Masjid An-Nur" style="transition-all
        lg:col-span-1 lg:col-start-4 lg:row-start-2
        md:col-span-2
        sm:col-span-4
        max-sm:col-span-4 max-sm:mx-10">
          Nama Masjid
        </FormInputReadOnly>
        <FormInputReadOnly type="number" name="nominal" value="1000000" style="transition-all
        lg:col-span-1 lg:col-start-3 lg:row-start-3
        md:col-span-2 md:col-start-3 md:row-start-2
        sm:col-span-2 sm:col-start-3 sm:row-start-2
        max-sm:col-span-4 max-sm:mx-10">
          Nominal
        </FormInputReadOnly>
        <FormSelectInput name="status" option={optionValue} style="transition-all
        lg:col-span-1 lg:col-start-4 lg:row-start-1
        md:col-span-2
        sm:col-span-2
        max-sm:col-span-4 max-sm:mx-10">
          Status
        </FormSelectInput>
        <FormSubmit value="Simpan Perubahan" name="edit_pencairan_dana" style="transition-all
        lg:col-span-1 lg:col-start-4 lg:row-start-3
        md:col-span-2
        sm:col-span-2
        max-sm:col-span-4 max-sm:mx-10"/>
      </form>
    </>
  );
};

export default FormUpdateDana;
