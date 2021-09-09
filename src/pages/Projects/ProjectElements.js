import styled from "styled-components";

export const ProjectMain = styled.div`
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #525252;
  min-width: 10em;
  width: 65em;

  @media screen and (max-width: 1220px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const ProjectContainer = styled.div`
  padding: 3.75em 3em 3.3em;

  @media screen and (max-width: 900px) {
    padding: 0em;
  }
`;

export const Header = styled.section`
  color: #525252;
  align-items: left;
  overflow-wrap: break-word;
  padding: 3.75em 3em 3.3em;

  .title {
    font-size: 40px;
  }

  .subTitle {
    font-size: 20px;
  }
`;
