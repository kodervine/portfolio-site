import React from "react";
import { nanoid } from "nanoid";
import { profileListItems } from "./../data";

interface ListItem {
  text: string;
  link: string;
}

interface Props {
  name: string;
  title: string;
}

const Sidebar: React.FC<Props> = ({ name, title }) => {
  return (
    <aside className="sidebar-container">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <nav>
        <ul>
          {profileListItems.map((listitems: ListItem) => {
            const { text, link } = listitems;
            return (
              <li key={nanoid()}>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <p>
        GET IN TOUCH
        <br />I am available for hire and open to any ideas of cooperation.
      </p>
    </aside>
  );
};

export default Sidebar;
