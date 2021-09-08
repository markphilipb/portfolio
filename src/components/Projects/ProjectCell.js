import React from "react";
import { ProjectCard, Article, ProjectHeader } from "./ProjectCellElements.js";

const ProjectCell = ({ data }) => {
  return (
    <ProjectCard>
      <Article>
        <ProjectHeader>
          <h3>{data.title}</h3>
        </ProjectHeader>
      </Article>
    </ProjectCard>
  );
};

export default ProjectCell;
