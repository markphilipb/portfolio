import styled from "styled-components";

export const ProjectCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  padding: 0.5em 2em 3.3em;
  margin-bottom: 5%;
`;

export const Article = styled.article``;

export const ProjectHeader = styled.header`
  overflow-wrap: break-word;
  display: flex;
  justify-content: space-between;

  .projectTitle {
    font-size: 25px;
  }

  .srclink {
    font-size: 15px;
    font-weight: 520;
    color: inherit;
    &:hover {
      color: #01bf71;
      transition: 0.2 ease-in-out;
    }
  }
`;

export const ProjectPic = styled.a`
  .pic {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;
