import React, { useState } from "react";
import Projects from "./Projects.js";
import HamburgerPanel from "../components/HamburgerPanel/HamburgerPanel.js";
import Navbar from "../components/Navbar/Navbar.js";
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
      <Switch>
        <Route path="/" exact component={Projects} />
      </Switch>
    </>
  );
};

export default Home;
