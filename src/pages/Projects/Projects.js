import React from "react";
import { ProjectMain, Header } from "./ProjectElements.js";
import data from "../../data/projectsData.js";
import ProjectCell from "../../components/Projects/ProjectCell.js";

const Projects = () => {
  return (
    <ProjectMain>
      <Header>
        <h2 className="title">Projects</h2>
        <p className="subTitle">A collection of my projects</p>
      </Header>
      {data.map((project) => (
        <ProjectCell data={project} />
      ))}
    </ProjectMain>
  );
};

export default Projects;
