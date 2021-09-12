import styled from "styled-components";

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: red;
  border-radius: 50%;
`;

export const SwitchCheckBox = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #ccc;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #000;
  }
`;
