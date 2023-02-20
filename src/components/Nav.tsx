import React from "react";
import { Navbar, Image, Box, Text, Anchor } from "@mantine/core";
import profileImg from "../assets/profile-pic.jpg";
import { nanoid } from "nanoid";
import { ListItem, profileListItems } from "./../data";
import Footer from "./Footer";

const Nav: React.FC = () => {
  return (
    <Navbar display="flex">
      <Image src={profileImg} radius="lg" width="50px" height="50px" />
      {profileListItems.map((listitems: ListItem) => {
        const { text, link } = listitems;
        return (
          <Text key={nanoid()}>
            <Anchor href={link} target="_blank" color="black">
              {text}
            </Anchor>
          </Text>
        );
      })}
      <Footer />
    </Navbar>
  );
};

export default Nav;
