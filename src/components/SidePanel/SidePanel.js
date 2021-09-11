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
import ContactIcons from "../Contact/ContactIcons.js";
import Typed from "react-typed";

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
        <Typed
          strings={["Hey, I'm Mark. I'm a Software Engineer"]}
          typeSpeed={40}
          backSpeed={10}
          backDelay={10000}
          loop
        />
      </Blurb>

      <Footer>
        <ContactIcons className="contacticons" />
        <p className="copyright"> &copy; 2021 Mark Balazon </p>
      </Footer>
    </Sidebar>
  );
};

export default SidePanel;
