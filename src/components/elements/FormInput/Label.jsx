import React from 'react'

const Label = ({name, children}) => {
  return (
    <label htmlFor={name} className="text-sm ml-2" > {children}</label>
  )
}

export default Label