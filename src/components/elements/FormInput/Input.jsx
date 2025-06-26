import React from 'react'

const Input = ({type, name, placeholder, value, onChange}) => {
  return (
    <input
        type={type}
        required
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none"
      />
  )
}

export default Input