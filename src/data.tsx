import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import ceenditLaptopImg from "./assets/ceendit-laptop.png";
import ceenditPhoneImg from "./assets/ceendit-phone.png";
import dailyTaskLaptopImg from "./assets/daily-task-laptop.png";
import dailyTaskWatchImg from "./assets/daily-task-watch.png";
import kaddIpadImg from "./assets/kadd-ipad.png";
import kaddPhoneImg from "./assets/kadd-phone.png";
import prytoIpadImg from "./assets/pryto-ipad.png";
import prytoPhoneImg from "./assets/pryto-phone.png";
import udemyJavascriptCert from "./assets/udemy-javascript-course.jpg";
import courseraMetaReactBasics from "./assets/coursera-introduction-to-frontend.jpeg";
import courseraMetaIntroToFrontend from "./assets/coursera-reactbasics-meta.jpeg";

export interface ListItem {
  text: string;
  link: string;
}

export const profileListItems: ListItem[] = [
  { text: "About", link: "/about" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "Certifications", link: "/certifications" },
  {
    text: "CV",
    link: "https://drive.google.com/drive/folders/1mtB7QT5DY_l9n7blL6txMKN9G5mg4Iw_",
  },
  { text: "Blog", link: "https://kodervine.hashnode.dev/" },
  { text: "Publications", link: "/publications" },
];

export interface IconItem {
  icon: React.ReactElement;
  link: string;
  text: string;
}

export const iconData: IconItem[] = [
  {
    icon: <AiFillGithub />,
    link: "https://github.com/kodervine",
    text: "Github",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/chinenye-anikwenze/",
    text: "Linkedin",
  },
  {
    icon: <MdOutlineMarkEmailUnread />,
    link: "mailto:anikwenzekelly@gmail.com",
    text: "Email",
  },
  {
    icon: <SiHashnode />,
    link: "https://hashnode.com/@kodervine",
    text: "Hashnode",
  },
  {
    icon: <AiOutlineMedium />,
    link: "https://kodervine.medium.com/",
    text: "Medium",
  },

  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/kodervine",
    text: "Twitter",
  },
];

export interface PortfolioInterface {
  title: string;
  description: string;
  link: string;
  technologiesUsed: string[];
  githubIcon: React.ReactElement;
  githubLink: string;
  image1?: string;
  image2?: string;
}

export const portfolioData: PortfolioInterface[] = [
  {
    title: "Ceendit -  an invoice generator",
    description:
      "Say goodbye to manual invoicing and hello to effortless payment processing. Create professional invoices in pdf format for your clients in less than a minute",
    link: "",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/ceendit-react",
    technologiesUsed: ["React", "Javascript", "Chakra UI", "Firebase"],
    image1: ceenditLaptopImg,
    image2: ceenditPhoneImg,
  },
  {
    title: "Pryto - live crypto currency converter",
    description:
      "This is a live crypto currency converter to naira. Created a multi-page app that updates select crypto currency price in real time with css3, Tailwind css, and vanilla Javascript. The data is powered by the Coingecko APIs to gain access to the current crypto currencies market values.",
    link: "https://kodervine.github.io/pryto/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/pryto",
    technologiesUsed: ["Javascript", "Tailwind", "Coingecko API"],
    image1: prytoIpadImg,
    image2: prytoPhoneImg,
  },
  {
    title: "Kadd - customizable business card creator",
    description:
      "This is a customizable business card creator. Created with HTML, CSS, and Javascript.  Create a customizable business card in just a few clicks. Can change to the theme color of your choice, and save to a png file in seconds",
    link: "https://kadd.netlify.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/kadd-business-card-creator",
    technologiesUsed: ["Javascript", "CSS", "HTML"],
    image1: kaddPhoneImg,
    image2: kaddIpadImg,
  },
  {
    title: "My Tasks - daily schedule tools",
    description:
      "This is a simple daily schedule programme. Created with HTML, Tailwind CSS, and Javascript.Have an organised day by creating simple daily-task reminders. Made with User friendly interface and easy navigation in mind",
    link: "https://my-dailytask.netlify.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/my-daily-task",
    technologiesUsed: ["Javascript", "HTML", "Bootstrap"],
    image1: dailyTaskLaptopImg,
    image2: dailyTaskWatchImg,
  },
];

export const certificationsData = [
  {
    link: "https://www.coursera.org/account/accomplishments/verify/L4F72SP5WTT6",
    image: courseraMetaReactBasics,
    organisation: "Meta",
    title: "React basics",
    description:
      "Organize React projects to create more scalable and maintainable websites and apps. Use props to pass data between components. Create dynamic and interactive web pages and apps.",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/verify/7FX52L2P3K79",
    image: courseraMetaIntroToFrontend,
    organisation: "Meta",
    title: "Introduction to Frontend development",
    description:
      "Distinguish between front-end, back-end, and full-stack developers. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
  },
  {
    link: "https://www.udemy.com/certificate/UC-7e265b5b-9364-4456-af4e-5d512c7810e9/",
    image: udemyJavascriptCert,
    organisation: "Udemy",
    title: "Modern Javascrpt from the beginning",
    description:
      "Distinguish between front-end, back-end, and full-stack developers. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
  },
];
