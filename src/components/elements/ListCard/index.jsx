import React from "react";
import IconList from "./IconList";
import DetailList from "./DetailList";

const ListCard = ({ icon = "", style = "", iconAlt = "", highlight = "", children }) => {
  return (
    <li className="flex items-center gap-4 p-4">
      <IconList icon={icon} style={style} >{iconAlt}</IconList>
      <DetailList highlight={highlight} >{children}</DetailList>
    </li>
  );
};

export default ListCard;
