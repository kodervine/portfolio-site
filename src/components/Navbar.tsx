import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Box, Collapse, Flex, Text } from "@mantine/core";

import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";

import NavItems from "./NavItems";

type Props = {};

const Navbar = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const handleOpened = () => {
    return setOpened(false);
  };
  return (
    <>
      <Box>
        <Flex justify="space-between" align="center">
          <Text>
            <Link to="/">CHINENYE ANIKWENZE</Link>
          </Text>

          <AiOutlineMenuFold onClick={() => setOpened((o) => !o)} />
        </Flex>

        <Collapse
          in={opened}
          transitionDuration={1000}
          transitionTimingFunction="linear"
        >
          <NavItems handleOpened={handleOpened} />
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
