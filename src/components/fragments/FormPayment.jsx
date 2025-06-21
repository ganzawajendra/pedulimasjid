import React from 'react'
import FormInput from '../elements/FormInput'
import FormSelectInput from '../elements/FormSelectInput'
import FormSubmit from '../elements/FormSubmit'

const FormPayment = () => {
  return (
    <form action="" className="grid grid-cols-2 gap-5 mb-5" method="POST">
        <FormInput type="number" name="nominal_donasi" placeholder="Masukkan Nama Bank">Nominal Donasi</FormInput>
        <FormSelectInput name="metode_pembayaran">Pilih Metode Pembayaran</FormSelectInput>
        <FormSubmit value="Bayar" name="bayar" style=' max-w-max'/>
      </form>
  )
}

export default FormPayment