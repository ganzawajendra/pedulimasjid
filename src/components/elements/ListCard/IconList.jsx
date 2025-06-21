import React from 'react'

const IconList = ({icon, style, children}) => {
  return (
    <i className={`${icon} ${style}`}>{children}</i>
  )
}

export default IconList