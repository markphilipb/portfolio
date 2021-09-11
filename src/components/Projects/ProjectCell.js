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
          <div className="links">
            <a href={data.frontlink} className="srclink">
              frontend{" "}
            </a>
            <a href={data.backlink} className="srclink">
              backend
            </a>
          </div>
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
