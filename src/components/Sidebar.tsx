import React from "react";

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
          <li>
            <a href="#offer">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#cv">CV</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
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
