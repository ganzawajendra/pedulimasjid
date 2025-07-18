import React from 'react'

const FormSubmit = ({value, name, style}) => {
  return (
    <input type="submit" value={value} name={name} className={`hover:bg-white ${style} hover:text-gray-800 hover:shadow-lg bg-gray-800 text-white rounded px-4 py-2 transition-all duration-300 cursor-pointer font-semibold
    lg:text-sm
    md:text-sm
    sm:text-xs
    max-sm:text-xs`} />
  )
}

export default FormSubmit