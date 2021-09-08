import React from "react";
import {
  ProjectCard,
  Article,
  ProjectHeader,
  ProjectPic,
} from "./ProjectCellElements.js";

const ProjectCell = ({ data }) => {
  let image = "../../imgs/projectImgs/eco_trip_pic.png";
  return (
    <ProjectCard>
      <Article>
        <ProjectHeader>
          <h3>{data.title}</h3>
        </ProjectHeader>
        <ProjectPic href={data.link}>
          <img src={data.img} alt={data.title} className="pic" />
        </ProjectPic>
      </Article>
    </ProjectCard>
  );
};

export default ProjectCell;
