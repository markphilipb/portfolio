import React from "react";
import { Link } from "react-router-dom";
import {
  ProfilePic,
  Sidebar,
  Intro,
  Blurb,
  Footer,
} from "./SidePanelElements.js";
import profileImg from "../../imgs/profilePic.jpg";

const SidePanel = () => {
  return (
    <Sidebar>
      <Intro>
        <Link to="/">
          <ProfilePic src={profileImg} alt="hello" />
        </Link>
        <header>
          <h2 className="name">Mark Balazon</h2>
          <p>
            <a href="mailto:mark.balazon@gmail.com" className="email">
              mark.balazon@gmail.com
            </a>
          </p>
        </header>
      </Intro>

      <Blurb>
        <h2>About</h2>
        <p>my about</p>
      </Blurb>

      <Footer>
        <p className="copyright"> &copy; Mark Balazon</p>
      </Footer>
    </Sidebar>
  );
};

export default SidePanel;
