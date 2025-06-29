import { Link } from "react-router-dom";

const ButtonLink = (props, onClick) => {
  const {
    router = "#",
    variant = "hover:bg-gray-900 bg-gray-800 text-white",
    children = "Button",
    style = ""
  } = props;

  let variantClass = variant;
  if (variant === "Black") {
    variantClass = "hover:bg-white hover:text-gray-800 hover:shadow-lg bg-gray-800 text-white";
  } else if (variant === "White") {
    variantClass = "hover:bg-neutral-200 hover:shadow-lg bg-white text-gray-800 border border-gray-300";
  }

  return (
    <Link
      to={router}
      onClick={onClick}
      className={`${variantClass} ${style} rounded text-sm transition-all duration-200
      lg:px-4 lg:py-1.5 lg:text-sm
      md:px-3 md:py-1 md:text-xs
      sm:px-3 sm:py-1 sm:text-xs
      max-sm:px-5 max-sm:py-1.5 max-sm:text-xs`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;