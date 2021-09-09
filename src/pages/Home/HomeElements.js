import styled from "styled-components";

export const Main = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  padding: 4.5em;
  font-family: "Courier New";
  letter-spacing: 0.1em;

  @media screen and (max-width: 1220px) {
    ${"" /* flex-direction: column-reverse; */}
    padding: 0em;
  }
`;
