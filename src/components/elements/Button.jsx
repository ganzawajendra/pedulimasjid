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
    variantClass = "hover:bg-neutral-200 hover:shadow-lg bg-white text-gray-800";
  }

  return (
    <Link
      to={router}
      onClick={onClick}
      className={`${variantClass} ${style} rounded px-4 py-1 text-sm transition-all duration-300`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;