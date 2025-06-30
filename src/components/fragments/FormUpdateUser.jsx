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
      <div className="flex items-center justify-center
      lg:row-span-4 lg:col-span-1
      md:row-span-4 md:col-span-1
      sm:row-span-1 sm:col-span-4
      max-sm:row-span-1 max-sm:col-span-4">
        <div className="bg-neutral-200 flex items-center justify-center max-w-max px-10 pt-30 rounded-lg overflow-hidden">
        <i class="fa-solid fa-user text-9xl"></i>
        </div>
      </div>
      <FormInput type="text" name="nama_lengkap" value="Budi Utomo" style="
      lg:col-span-3 lg:col-start-2
      md:col-span-3 md:col-start-2
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10">
        Nama Lengkap
      </FormInput>
      <FormInput type="email" name="email" value="budi@gmail.com" style="
      lg:col-span-2 lg:col-start-2
      md:col-span-2 md:col-start-2
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10">
        Email
      </FormInput>
      <FormInput type="text" name="no_telp" value="08123456789" style="
      lg:col-span-1 lg:col-start-4
      md:col-span-1 md:col-start-4
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10">
        No Telp
      </FormInput>
      <FormInput type="text" name="alamat" value="Jl. Jend. Sudirman" style="
      lg:col-span-3 lg:col-start-2
      md:col-span-3 md:col-start-2
      sm:col-span-2
      max-sm:col-span-4 max-sm:mx-10">
        Alamat
      </FormInput>
      <FormSubmit value="Edit Admin" name="edit_admin" style="
      lg:col-span-1 lg:col-start-4
      md:col-span-3 md:col-start-2
      sm:col-span-4
      max-sm:col-span-4 max-sm:mx-10"/>
    </form>
  );
};

export default FormUpdateUser;
