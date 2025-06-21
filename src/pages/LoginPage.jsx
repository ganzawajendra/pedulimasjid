import React from 'react'
import AuthLayout from '../components/layouts/AuthLayout'
import FormLogin from '../components/fragments/FormLogin'

const LoginPage = () => {
  return (
    <>
    <AuthLayout>
      <FormLogin />
    </AuthLayout>
    </>
  )
}

export default LoginPage