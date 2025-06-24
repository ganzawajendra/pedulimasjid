import React from 'react'
import FormInput from '../elements/FormInput'
import FormSubmit from '../elements/FormSubmit'
import { Link } from 'react-router-dom'

const FormRegister = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
      <h3 className='text-xl font-semibold text-gray-800 '>Register</h3>
      <p className='text-md text-gray-500 '>Lengkapi form dibawah ini untuk mendaftar sebagai donatur</p>

      <form action="" method="post" className="flex flex-col mt-5 gap-3" autoComplete="off">
        <p className="text-red-500 text-sm"></p>
        <FormInput type="text" name="namaLengkap"  placeholder="John Doe">Masukkan Nama Lengkap</FormInput>
        <FormInput type="text" name="noTelp"  placeholder="08123456789">Masukkan No Telp</FormInput>
        <FormInput type="text" name="alamat"  placeholder="Jl. Jend. Sudirman">Masukkan Alamat</FormInput>
        <FormInput type="email" name="email"  placeholder="example@gmail.com" >Masukkan Email</FormInput>
        <FormInput type="password" name="password"  placeholder="********" >Masukkan Password</FormInput>
        <FormSubmit value="Register" name="register" />
      </form>
      <p className="text-md text-center text-gray-500 mt-3">
        Sudah Punya Akun?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-800">
          Login disini
        </Link>
      </p>
    </div>
  )
}

export default FormRegister