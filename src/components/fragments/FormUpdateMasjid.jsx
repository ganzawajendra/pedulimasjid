import React from "react";
import FormInput from "../elements/FormInput";
import FormInputReadOnly from "../elements/FormInput/FormInputReadOnly";
import FormSelectInput from "../elements/FormSelectInput";
import FormSubmit from "../elements/FormSubmit";

const FormUpdateMasjid = () => {
  const optionValue = ["Terverifikasi", "Ditolak"];
  return (
    <form
      action=""
      method="post"
      class="grid grid-cols-4 mt-5 items-center gap-5"
    >
      <div className="row-span-4 col-span-2 h-full bg-neutral-200 rounded-lg overflow-hidden
      lg:row-span-4 lg:col-span-2
      md:row-span-4 md:col-span-2
      sm:row-span-1 sm:col-span-4
      max-sm:row-span-1 max-sm:col-span-4 max-sm:rounded-none">
        <img src="/images/hero.png" alt="" className="h-80 object-cover" />
      </div>
      <FormInputReadOnly type="text" name="id" value="1" style="
      lg:col-span-1 lg:col-start-3 lg:row-start-1
      md:col-span-2
      sm:col-span-1
      max-sm:col-span-4 max-sm:mx-10">
        ID
      </FormInputReadOnly>
      <FormInputReadOnly type="text" name="nama" value="Masjid Al-Husna" style="
      lg:col-span-1 lg:col-start-3 lg:row-start-2
      md:col-span-2 md:col-start-3
      sm:col-span-3
      max-sm:col-span-4 max-sm:mx-10">
        Nama Masjid
      </FormInputReadOnly>
      <FormInputReadOnly type="text" name="alamat" value="Jl. Jend. Sudirman" style="
      lg:col-span-1 lg:col-start-4 lg:row-start-2
      md:col-span-2 md:col-start-3 md:row-start-3
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10">
        Alamat
      </FormInputReadOnly>
      <FormInputReadOnly
        type="text"
        name="deskripsi_kebutuhan"
        value="Pembangunan Lt. 2"
        style="
        lg:col-span-2 lg:col-start-3 lg:row-start-3
        md:col-span-4 md:col-start-1 md:row-start-5
        sm:col-span-2
        max-sm:col-span-4 max-sm:mx-10"
      >
        Deskripsi Kegiatan
      </FormInputReadOnly>
      <FormSelectInput name="metode_pembayaran" option={optionValue} style="
      lg:col-span-1 lg:col-start-4 lg:row-start-1
      md:col-span-2 md:col-start-1 md:row-start-6
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10">
        Status
      </FormSelectInput>
      <FormSubmit value="Simpan Perubahan" name="update-masjid" style="
      lg:col-span-2 lg:col-start-3 lg:row-start-4
      md:col-span-2 md:col-start-3 md:row-start-6
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10"/>
    </form>
  );
};

export default FormUpdateMasjid;
