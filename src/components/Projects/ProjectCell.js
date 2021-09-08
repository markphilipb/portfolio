import React from "react";
import {
  ProjectCard,
  Article,
  ProjectHeader,
  ProjectPic,
} from "./ProjectCellElements.js";

const ProjectCell = ({ data }) => {
  return (
    <ProjectCard>
      <Article>
        <ProjectHeader>
          <h3>{data.title}</h3>
        </ProjectHeader>
        <ProjectPic href={data.link}>
          <img
            src={require("./../../imgs/projectImgs/eco_trip_pic.png")}
            alt={data.title}
          />
        </ProjectPic>
      </Article>
    </ProjectCard>
  );
};

export default ProjectCell;
