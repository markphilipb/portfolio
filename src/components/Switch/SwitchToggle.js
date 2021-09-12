import react from "react";
import "./Switch.css";
import { SwitchLabel, SwitchCheckBox, SwitchSlider } from "./SwitchElements.js";

const SwitchToggle = ({ isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
};

export default SwitchToggle;
