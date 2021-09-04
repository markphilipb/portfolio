import React from "react";
import { Nav, NavLink, NavMenu, Bars } from "./NavbarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>logo</h1>
        </NavLink>
        <Bars />
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
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
