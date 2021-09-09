import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcons } from "./ContactElements.js";

import data from "../../data/contact.js";

const ContactIcons = () => (
  <SocialIcons>
    {data.map((s) => (
      <li className="iconelem" key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon className="icon" icon={s.icon} />
        </a>
      </li>
    ))}
  </SocialIcons>
);

export default ContactIcons;
