import React from "react";
import FormFileInput from "../elements/FormFileInput";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";

const FormUpdateProgres = ({style = "", action = ""}) => {
  return (
    <form
      action={action}
      method="post"
      autoComplete="off"
      encType="multipart/form-data"
      className={style}
    >
      <FormFileInput name="dokumen_path" accept=".jpg, .png, .jpeg">
        Foto
      </FormFileInput>
      <FormInput
        type="text"
        name="deskripsi"
        placeholder="Pengecatan tembok bagian depan selesai 80%"
      >
        Deskripsi Progres
      </FormInput>
      <FormSubmit value="Tambah Progress" name="tambah_progress" />
    </form>
  );
};

export default FormUpdateProgres;
