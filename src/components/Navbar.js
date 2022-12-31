import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import dropdownImg from '../assets/biography/dropdown.png'
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
import {faCheckToSlot} from '@fortawesome/free-solid-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'




const Navbar = () => {
  const contactMe =
    "mailto:katherine.negrete.aguilar@gmail.com? subject=subject text";

  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  }

  return (
    <>
    <div className="dropdown-container">
      <div className="menu-trigger" onClick={handleDropdown}>
        <img className="trigger-img" src={dropdownImg} />
      </div>
      <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
        <ul>
          <DropdownItem icon={faScrewdriverWrench}  name="Skills" link=""/>
          <DropdownItem icon={faCheckToSlot}  name="Projects" link=""/>
          <DropdownItem icon={faGraduationCap}  name="My Education" link=""/>
          <DropdownItem icon={faGithub}  name="GitHub" link="https://github.com/katherine-na"/>
          <DropdownItem icon={faLinkedin}  name="Linkdin" link="https://www.linkedin.com/in/katherine-negrete-07b65b240/"/>
        </ul>
      </div>
    </div>
    </>
   );
};

export default Navbar;
