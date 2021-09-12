import React, { useState } from "react";
import Projects from "../Projects/Projects.js";
import HamburgerPanel from "../../components/HamburgerPanel/HamburgerPanel.js";
import Navbar from "../../components/Navbar/Navbar.js";
import SidePanel from "../../components/SidePanel/SidePanel.js";
import { Main } from "./HomeElements.js";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerPanel isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main>
        <SidePanel />
        <Switch>
          {/* <Route path="/" exact component={Projects} /> */}
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Main>
    </>
  );
};

export default Home;
