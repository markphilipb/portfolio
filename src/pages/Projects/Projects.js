import React from "react";
import { ProjectMain, Header, ProjectContainer } from "./ProjectElements.js";
import data from "../../data/projectsData.js";
import ProjectCell from "../../components/Projects/ProjectCell.js";

const Projects = () => {
  return (
    <ProjectMain>
      <Header>
        <h2 className="title">Projects</h2>
        <p className="subTitle">A collection of my projects</p>
      </Header>
      <ProjectContainer>
        {data.map((project) => (
          <ProjectCell data={project} />
        ))}
      </ProjectContainer>
    </ProjectMain>
  );
};

export default Projects;
