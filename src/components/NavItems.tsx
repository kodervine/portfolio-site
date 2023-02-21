import React from "react";
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
}));
const NavItems: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Navbar display="flex" className={classes.nav}>
      <Flex>
        <Image src={profileImg} radius="lg" width="50px" height="50px" />
      </Flex>

      {profileListItems.map((listitems: ListItem) => {
        const { text, link } = listitems;
        return (
          <Text key={nanoid()}>
            <Anchor href={link} color="black">
              {text}
            </Anchor>
          </Text>
        );
      })}
      <Footer />
    </Navbar>
  );
};

export default NavItems;
