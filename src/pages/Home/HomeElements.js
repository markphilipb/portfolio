import styled from "styled-components";

export const Main = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4.5em;

  @media screen and (max-width: 1440px) {
    flex-direction: column-reverse;
  }
`;
