import React from 'react'
import AuthLayout from '../components/layouts/AuthLayout'
import FormRegister from '../components/fragments/FormRegister'

const RegisterPage = () => {
  return (
    <>
    <AuthLayout>
      <FormRegister />
    </AuthLayout>
    </>
  )
}

export default RegisterPage