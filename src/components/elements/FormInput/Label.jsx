import React from 'react'

const Label = ({name, children}) => {
  return (
    <label htmlFor={name} className="ml-2
    lg:text-sm
    md:text-sm
    sm:text-xs
    max-sm:text-xs" > {children}</label>
  )
}

export default Label