import styled from "styled-components";

export const SocialIcons = styled.ul`
  color: inherit;
  list-style-type: none;
  padding-inline-start: 0px;

  .iconelem {
    display: inline;
    padding-right: 2em;
    fill: #525252;
  }

  .icon {
    color: #a6a6a6;
    font-size: 22px;
    &:hover {
      color: #01bf71;
      transition: 0.2 ease-in-out;
    }
  }
`;
