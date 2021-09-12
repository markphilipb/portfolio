import React from "react";
import { Nav, NavLink, NavMenu, Bars, ModeSwitch } from "./NavbarElements.js";
import SwitchToggle from "../Switch/SwitchToggle.js";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <p className="nameLogo">mark balazon</p>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            about
          </NavLink>
          <NavLink to="/resume" activeStyle>
            resume
          </NavLink>
          <NavLink to="/projects" activeStyle>
            projects
          </NavLink>
          <NavLink to="/contact" activeStyle>
            contact
          </NavLink>
          <ModeSwitch />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
