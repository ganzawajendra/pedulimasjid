import React from "react";
import FormInput from "../elements/FormInput";
import FormFileInput from "../elements/FormFileInput";
import FormSubmit from "../elements/FormSubmit";

const FormAddMasjid = () => {
  return (
    <form
      action=""
      method="post"
      className="grid grid-cols-4 gap-4 mt-5 items-center "
      encType="multipart/form-data"
      autoComplete="off"
    >
        <FormInput style="
        lg:col-span-2
        md:col-span-2
        sm:col-span-4
        max-sm:col-span-4" type="text" name="nama" placeholder="Masjid Al-Husna">Nama Masjid</FormInput>
        <FormInput style="
        lg:col-span-2
        md:col-span-2
        sm:col-span-4
        max-sm:col-span-4" type="text" name="deskripsi_kebutuhan" placeholder="Pembangunan Lt. 2">Deskripsi Kebutuhan Masjid</FormInput>
        <FormInput style="col-span-4" type="text" name="alamat" placeholder="Jl. Jend. Sudirman">Alamat Masjid</FormInput>
        <FormFileInput style="col-span-4"  name="dokumen_path" accept=".jpg, .png, .jpeg">Upload Dokumen Masjid</FormFileInput>
        <FormSubmit value="Tambah Masjid" name="tambah_masjid" style="
        lg:col-start-4 lg:col-span-1
        md:col-start-4 md:col-span-1
        sm:col-start-3 sm:col-span-2
        max-sm:col-start-1 max-sm:col-span-4"/>
    </form>
  );
};

export default FormAddMasjid;
