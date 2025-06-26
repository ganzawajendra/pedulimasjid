import React from 'react'

const IconList = ({icon, style, children}) => {
  return (
    <i className={`${icon} ${style}
    md:text-md
    sm:text-sm
    max-sm:text-md transition-all
    `}>{children}</i>
  )
}

export default IconList