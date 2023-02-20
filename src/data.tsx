import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export interface ListItem {
  text: string;
  link: string;
}

export const profileListItems: ListItem[] = [
  { text: "About", link: "#offer" },
  { text: "Portfolio", link: "#portfolio" },
  { text: "Certifications", link: "#contact" },
  { text: "CV", link: "#cv" },
  { text: "Blog", link: "#blog" },
  { text: "Publications", link: "#blog" },
];

export interface IconItem {
  icon: React.ReactElement;
  link: string;
}

export const iconData: IconItem[] = [
  {
    icon: <AiFillGithub />,
    link: "https://github.com/kodervine",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/chinenye-anikwenze/",
  },
  {
    icon: <MdOutlineMarkEmailUnread />,
    link: "mailto:anikwenzekelly@gmail.com",
  },
  {
    icon: <SiHashnode />,
    link: "https://hashnode.com/@kodervine",
  },
  {
    icon: <AiOutlineMedium />,
    link: "https://kodervine.medium.com/",
  },

  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/kodervine",
  },
];

export interface PortfolioInterface {
  title: string;
  description1: string;
  descriptionItems: string;
  moreDetailsLink: string;
  technologiesUsed: string[];
}

export const portfolioData: PortfolioInterface[] = [
  {
    title: "Ceendit",
    description1: "",
    descriptionItems: "",
    moreDetailsLink: "",
    technologiesUsed: ["React", "Chakra UI"],
  },
];
