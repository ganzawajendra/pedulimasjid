import React from 'react'
import Label from '../FormInput/Label'
import Input from '../FormInput/Input'

const FormFileInput = ({style, name, type, children, accept}) => {
  return (
    <>
    <div className={style}>
      <Label name={name}>{children}</Label>
      <Input type="file" name={name} accept={accept}/>
    </div>
    </>
  )
}

export default FormFileInput