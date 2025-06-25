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
      class="grid grid-cols-4 mt-5 items-center gap-10"
    >
      <div className="row-span-4 col-span-2 h-full bg-neutral-200 rounded-lg overflow-hidden">
        <img src="/images/hero.png" alt="" className="h-full object-contain" />
      </div>
      <FormInputReadOnly type="text" name="id" value="1">
        ID
      </FormInputReadOnly>
      <FormInputReadOnly type="text" name="nama" value="Masjid Al-Husna" style="row-start-2 col-start-3">
        Nama Masjid
      </FormInputReadOnly>
      <FormInputReadOnly type="text" name="alamat" value="Jl. Jend. Sudirman" style="row-start-2 col-start-4">
        Alamat
      </FormInputReadOnly>
      <FormInputReadOnly
        type="text"
        name="deskripsi_kebutuhan"
        value="Pembangunan Lt. 2"
        style="row-start-3 col-span-2 col-start-3"
      >
        Deskripsi Kegiatan
      </FormInputReadOnly>
      <FormSelectInput name="metode_pembayaran" option={optionValue}>
        Status
      </FormSelectInput>
      <FormSubmit value="Simpan Perubahan" name="update-masjid" style="col-start-4"/>
    </form>
  );
};

export default FormUpdateMasjid;
