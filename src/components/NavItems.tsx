import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Image,
  Box,
  Text,
  Anchor,
  Flex,
  createStyles,
} from "@mantine/core";
import profileImg from "../assets/profile-pic.jpg";
import { nanoid } from "nanoid";
import { ListItem, profileListItems } from "../data";
import Footer from "./Footer";

const useStyles = createStyles((theme) => ({
  nav: {
    height: "100vh",
    overflow: "hidden",
  },

  anchor: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[8],
  },
}));
const NavItems: React.FC = ({ handleOpened }) => {
  const { classes } = useStyles();

  return (
    <Navbar display="flex" className={classes.nav}>
      <Flex>
        <Image src={profileImg} radius={50} width="50px" height="50px" />
      </Flex>

      {profileListItems.map((listitems: ListItem) => {
        const { text, link } = listitems;
        return (
          <Text key={nanoid()} my={4} size={16}>
            <Anchor className={classes.anchor} onClick={handleOpened}>
              <Link to={link}>{text}</Link>
            </Anchor>
          </Text>
        );
      })}
      <Footer />
    </Navbar>
  );
};

export default NavItems;
