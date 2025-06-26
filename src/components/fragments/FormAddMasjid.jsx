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
        <FormInput style="col-span-2" type="text" name="nama" placeholder="Masjid Al-Husna">Nama Masjid</FormInput>
        <FormInput style="col-span-2" type="text" name="deskripsi_kebutuhan" placeholder="Pembangunan Lt. 2">Deskripsi Kebutuhan Masjid</FormInput>
        <FormInput style="col-span-4" type="text" name="alamat" placeholder="Jl. Jend. Sudirman">Alamat Masjid</FormInput>
        <FormFileInput style="col-span-4"  name="dokumen_path" accept=".jpg, .png, .jpeg">Upload Dokumen Masjid</FormFileInput>
        <FormSubmit value="Tambah Masjid" name="tambah_masjid" style="col-start-4"/>
    </form>
  );
};

export default FormAddMasjid;
