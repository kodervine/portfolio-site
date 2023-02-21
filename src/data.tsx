import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
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
  description: string;
  link: string;
  technologiesUsed: string[];
  githubIcon: React.ReactElement;
  githubLink: string;
}

export const portfolioData: PortfolioInterface[] = [
  {
    title: "Ceendit -  an invoice generator.",
    description:
      "Say goodbye to manual invoicing and hello to effortless payment processing. Create professional invoices in pdf format for your clients in less than a minute",
    link: "",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/ceendit-react",
    technologiesUsed: ["React", "Javascript", "Chakra UI", "Firebase"],
  },
  {
    title: "Pryto - live crypto currency converter",
    description:
      "This is a live crypto currency converter to naira. Created a multi-page app that updates select crypto currency price in real time with css3, Tailwind css, and vanilla Javascript. The data is powered by the Coingecko APIs to gain access to the current crypto currencies market values.",
    link: "https://kodervine.github.io/pryto/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/pryto",
    technologiesUsed: ["Javascript", "Tailwind", "Coingecko API"],
  },
  {
    title: "Kadd - customizable business card creator",
    description:
      "This is a customizable business card creator. Created with HTML, CSS, and Javascript.  Create a customizable business card in just a few clicks. Can change to the theme color of your choice, and save to a png file in seconds",
    link: "https://kadd.netlify.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/kadd-business-card-creator",
    technologiesUsed: ["Javascript", "CSS", "HTML"],
  },
  {
    title: "My Tasks - daily schedule tools",
    description:
      "This is a simple daily schedule programme. Created with HTML, Tailwind CSS, and Javascript.Have an organised day by creating simple daily-task reminders. Made with User friendly interface and easy navigation in mind",
    link: "https://my-dailytask.netlify.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/my-daily-task",
    technologiesUsed: ["Javascript", "HTML", "Bootstrap"],
  },
];
