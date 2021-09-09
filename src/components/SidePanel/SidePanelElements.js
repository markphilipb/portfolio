import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfilePic = styled.img`
  width: 10em;
  border-radius: 50%;
  display: block;

  @media screen and (max-width: 1580px) {
    margin: 0 auto;
    width: 10em;
  }
`;

export const Sidebar = styled.section`
  background: #fff;
  margin-right: 3em;
  min-width: 22em;
  width: 22em;

  @media screen and (max-width: 1580px) {
    ${"" /* padding: 4.5em; */}
    margin: 0 auto;
    width: 100%;
    padding-top: 15%;
  }
`;

export const Intro = styled.section`
  color: #525252;
  overflow-wrap: break-word;

  .name {
    font-size: 40px;
  }

  .email {
    text-decoration: none;
    color: #525252;
    font-size: 20px;

    &:hover {
      color: #01bf71;
      transition: 0.2 ease-in-out;
    }
  }
  @media screen and (max-width: 1580px) {
    text-align: center;
  }
`;

export const Blurb = styled.section`
  color: #525252;
  align-items: left;
  overflow-wrap: break-word;
  border-top: 1px solid hsla(0, 0%, 62.7%, 0.3);
  margin: 3em 0 0;
  padding: 2em 0 0;

  @media screen and (max-width: 1580px) {
    text-align: center;
  }
`;

export const Footer = styled.section`
  color: #525252;
  align-items: left;
  padding: 2em 0 0;

  .copyright {
    font-size: 15px;
  }

  @media screen and (max-width: 1580px) {
    text-align: center;
  }
`;
