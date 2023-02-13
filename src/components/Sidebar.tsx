import React from "react";
import { nanoid } from "nanoid";
import profilePicture from "../assets/profile-pic.jpg";
import { profileListItems } from "./../data";
import { iconData } from "./../data";

interface ListItem {
  text: string;
  link: string;
}

interface IconItem {
  icon: React.ReactElement;
  link: string;
}

interface Props {
  name: string;
  title: string;
}

const Sidebar: React.FC<Props> = ({ name, title }) => {
  return (
    <aside className="sidebar-container">
      <img src={profilePicture} alt="User profile picture" />
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
      <ul className="sidebar-icons">
        {iconData.map((icons: IconItem) => {
          const { icon, link } = icons;
          return (
            <li key={nanoid()}>
              <a href={link}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
