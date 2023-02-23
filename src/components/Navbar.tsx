import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Box, Collapse, Flex, Text } from "@mantine/core";

import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";

import NavItems from "./NavItems";

type Props = {};

const Navbar = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const handleCloseNav = () => {
    return setOpened(!opened);
  };
  const navigate = useNavigate();
  const handleHomeNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <Box>
        <Flex justify="space-between" align="center">
          <Text
            weight="bold"
            size={18}
            onClick={() => {
              setOpened(false);
              handleHomeNavigate();
            }}
          >
            CHINENYE ANIKWENZE
          </Text>

          <AiOutlineMenuFold onClick={() => setOpened((o) => !o)} />
        </Flex>

        <Collapse
          in={opened}
          transitionDuration={1000}
          transitionTimingFunction="linear"
        >
          <NavItems handleCloseNav={handleCloseNav} />
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
