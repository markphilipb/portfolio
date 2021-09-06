import styled from "styled-components";

export const Main = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1280px) {
    flex-direction: column-reverse;
  }
`;
