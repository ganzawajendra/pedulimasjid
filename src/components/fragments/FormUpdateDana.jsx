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
        <div className="col-span-2 row-span-4">
          <div className=" h-80 bg-neutral-200 rounded-lg overflow-hidden">
            <img
              src="/images/hero.png"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <div className="flex item-center justify-around">
            <div className="max-w-max bg-white p-5 flex items-center gap-2">
              <div className="size-7 bg-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                <i className="fa-solid fa-user absolute bottom-0 text-lg"></i>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold text-sm">Budi Hartanto</h4>
                  {"|"}
                  <p className="text-xs text-gray-500">budi@gmail.com</p>
                </div>
                <p className=" text-gray-500 text-sm">
                  Jl. Jendral Sudirman no.890
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-xl"></i>
            </div>
            <div className="max-w-max p-5 flex items-center gap-5">
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold text-sm">Masjid Al-Fatih</h4>
                </div>
                <p className=" text-gray-500 text-sm">
                  Jl. Jendral Sudirman no.890
                </p>
              </div>
            </div>
          </div>
        </div>
        <FormInputReadOnly type="text" name="id" value="1" >
          ID
        </FormInputReadOnly>
        <FormInputReadOnly type="text" name="nama_lengkap" value="Taslim" style="row-start-2 col-start-3">
          Nama Pengurus
        </FormInputReadOnly>
        <FormInputReadOnly type="text" name="nama_masjid" value="Masjid An-Nur" style="row-start-2 col-start-4">
          Nama Masjid
        </FormInputReadOnly>
        <FormInputReadOnly type="number" name="nominal" value="1000000" style="row-start-3 col-start-3">
          Nominal
        </FormInputReadOnly>
        <FormSelectInput name="status" option={optionValue} style="row-start-3 col-start-4">
          Status
        </FormSelectInput>
        <FormSubmit value="Simpan Perubahan" name="edit_pencairan_dana" style="row-start-4 col-start-4"/>
      </form>
    </>
  );
};

export default FormUpdateDana;
