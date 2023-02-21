import React from "react";
import { useState } from "react";
import { Button, Collapse, Flex, Text } from "@mantine/core";
import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";
import NavItems from "./NavItems";

type Props = {};

const Navbar = (props: Props) => {
  const [opened, setOpened] = useState(false);

  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = (): void => {
    return setToggleNav(!toggleNav);
  };
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        onClick={() => setOpened((o) => !o)}
      >
        <Text>CHINENYE ANIKWENZE</Text>
        {toggleNav ? (
          <Flex
            onClick={handleToggleNav}
            align="center"
            gap="2px"
            style={{ cursor: "pointer" }}
          >
            <AiOutlineCloseCircle />
            hide
          </Flex>
        ) : (
          <AiOutlineMenuFold onClick={handleToggleNav} />
        )}
      </Flex>

      <Collapse
        in={opened}
        transitionDuration={1000}
        transitionTimingFunction="linear"
      >
        {toggleNav && <NavItems />}
      </Collapse>
    </>
  );
};

export default Navbar;
