import React from "react";
import Projects from "./Projects.js";
import HamburgerPanel from "../components/HamburgerPanel/HamburgerPanel.js";
import Navbar from "../components/Navbar/Navbar.js";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HamburgerPanel />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Projects} />
      </Switch>
    </>
  );
};

export default Home;
