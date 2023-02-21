import React from "react";
import { Navbar, Image, Box, Text, Anchor, Flex } from "@mantine/core";
import profileImg from "../assets/profile-pic.jpg";
import { nanoid } from "nanoid";
import { ListItem, profileListItems } from "../data";
import Footer from "./Footer";

const NavItems: React.FC = () => {
  return (
    <Navbar display="flex">
      <Flex>
        <Image src={profileImg} radius="lg" width="50px" height="50px" />
      </Flex>

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

export default NavItems;
