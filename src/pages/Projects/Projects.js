import React from "react";
import { Main, Header } from "./ProjectElements.js";
import data from "../../data/projectsData.js";
import ProjectCell from "../../components/Projects/ProjectCell.js";

const Projects = () => {
  return (
    <Main>
      <Header>
        <h2>Projects</h2>
        <p>A collection of my projects</p>
      </Header>
      {data.map((project) => (
        <ProjectCell data={project} />
      ))}
    </Main>
  );
};

export default Projects;
