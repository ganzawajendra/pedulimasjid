import React from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";

const FormUpdateUser = () => {
  return (
    <form
      action=""
      method="post"
      className="grid grid-cols-4 gap-4 mt-5 items-center"
    >
      <div className=" row-span-4 flex items-center justify-center">
        <div className="bg-neutral-200 flex items-center justify-center max-w-max px-10 pt-30 rounded-lg overflow-hidden">
        <i class="fa-solid fa-user text-9xl"></i>
        </div>
      </div>
      <FormInput type="text" name="nama_lengkap" value="Budi Utomo" style="col-span-3">
        Nama Lengkap
      </FormInput>
      <FormInput type="email" name="email" value="budi@gmail.com" style="col-span-2">
        Email
      </FormInput>
      <FormInput type="text" name="no_telp" value="08123456789">
        No Telp
      </FormInput>
      <FormInput type="text" name="alamat" value="Jl. Jend. Sudirman" style="col-span-3">
        Alamat
      </FormInput>
      <FormSubmit value="Edit Admin" name="edit_admin" style="col-start-4"/>
    </form>
  );
};

export default FormUpdateUser;
