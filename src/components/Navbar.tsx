import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Box, Collapse, Flex, Text } from "@mantine/core";
import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";
import NavItems from "./NavItems";

const Navbar = (props: any) => {
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
      <Box
        style={{
          padding: "10px 0px",
          boxShadow: " 0px 15px 10px -15px #111",
        }}
      >
        <Flex justify="space-between" align="center">
          <Text
            weight="bold"
            size={20}
            onClick={() => {
              setOpened(false);
              handleHomeNavigate();
            }}
            style={{ cursor: "pointer" }}
          >
            {props.title}
          </Text>

          <AiOutlineMenuFold onClick={() => setOpened((o) => !o)} size={25} />
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
