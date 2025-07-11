import React from "react";

const SelectInput = ({name, children, ...props}) => {
  return (
    <select
      name={name}
      id={name}
      className="px-2 w-full py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none
      lg:text-md
        md:text-md
        sm:text-sm
        max-sm:text-xs"
      {...props}
    >
        {children}
    </select>
  );
};

export default SelectInput;
