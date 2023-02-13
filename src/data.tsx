import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

interface Link {
  text: string;
  link: string;
}

export const profileListItems: Link[] = [
  { text: "About Me", link: "#offer" },
  { text: "Portfolio", link: "#portfolio" },
  { text: "Contact Me", link: "#contact" },
  { text: "CV", link: "#cv" },
  { text: "PERSONAL BLOG", link: "#blog" },
];

interface IconItem {
  icon: React.ReactElement;
  link: string;
}

export const iconData: IconItem[] = [
  {
    icon: <MdOutlineMarkEmailUnread />,
    link: "/home",
  },
  {
    icon: <FaGithubSquare />,
    link: "/about",
  },
  {
    icon: <AiFillLinkedin />,
    link: "/about",
  },
  {
    icon: <AiFillTwitterSquare />,
    link: "/about",
  },
];
