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
  { text: "Blog", link: "#blog" },
  { text: "Publications", link: "#blog" },
];

interface IconItem {
  icon: React.ReactElement;
  link: string;
}

export const iconData: IconItem[] = [
  {
    icon: <MdOutlineMarkEmailUnread />,
    link: "mailto:anikwenzekelly@gmail.com",
  },

  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/chinenye-anikwenze/",
  },
  {
    icon: <AiFillTwitterSquare />,
    link: "https://github.com/kodervine",
  },
  {
    icon: <FaGithubSquare />,
    link: "https://github.com/kodervine",
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
