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
          <h3 className="projectTitle">{data.title}</h3>
          <h3>
            <a href={data.frontlink} className="srclink">
              frontend
            </a>{" "}
            |{" "}
            <a href={data.backlink} className="srclink">
              backend
            </a>
          </h3>
        </ProjectHeader>
        <p>{data.desc}</p>
        <ProjectPic href={data.link}>
          <img src={data.img} alt={data.title} className="pic" />
        </ProjectPic>
      </Article>
    </ProjectCard>
  );
};

export default ProjectCell;
