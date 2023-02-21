import { FC, ReactNode, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text, Transition } from "@mantine/core";
import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";
import NavItems from "./components/NavItems";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

const App: FC<{ opened: boolean }> = ({ opened }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = (): void => {
    return setToggleNav(!toggleNav);
  };
  return (
    <>
      <Flex justify="space-between" align="center">
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

      <Transition
        mounted={opened}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>Your modal</div>}
      </Transition>

      {toggleNav && <NavItems />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
};

export default App;
