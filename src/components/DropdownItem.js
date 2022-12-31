import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = (props) => {
  return (
    <>
      <li className="dropdownItem">
        <FontAwesomeIcon icon={props.icon} />
        <a href={props.link} target="_blank">{props.name}</a>
      </li>
    </>
  );
};

export default DropdownItem;
