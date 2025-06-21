import React from 'react'
import FormInput from '../elements/FormInput'
import FormSubmit from '../elements/FormSubmit'
import { Link } from 'react-router-dom'
import MediumFont from '../elements/ListFont/MediumFont'
import SupportFont from '../elements/ListFont/SupportFont'

const FormRegister = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
      <MediumFont>Register</MediumFont>
      <SupportFont>Lengkapi form dibawah ini untuk mendaftar sebagai donatur</SupportFont>

      <form action="" method="post" className="flex flex-col mt-5 gap-3" autoComplete="off">
        <p className="text-red-500 text-sm"></p>
        <FormInput type="text" name="namaLengkap"  placeholder="John Doe">Masukkan Nama Lengkap</FormInput>
        <FormInput type="text" name="noTelp"  placeholder="08123456789">Masukkan No Telp</FormInput>
        <FormInput type="text" name="alamat"  placeholder="Masukkan Alamat">Masukkan Alamat</FormInput>
        <FormInput type="email" name="email"  placeholder="example@gmail.com" >Masukkan Email</FormInput>
        <FormInput type="password" name="password"  placeholder="********" >Masukkan Password</FormInput>
        <FormSubmit value="Register" name="register" />
      </form>
      <SupportFont style='text-center mt-3'>
        Sudah Punya Akun?{" "}
        <Link to="/login" className="text-blue-500">
          Login disini
        </Link>
      </SupportFont>
    </div>
  )
}

export default FormRegister