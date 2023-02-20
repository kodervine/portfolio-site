import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text } from "@mantine/core";
import { AiOutlineMenuFold } from "react-icons/ai";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = (): void => {
    return setToggleNav(!toggleNav);
  };
  return (
    <>
      <Flex justify="space-between" align="center">
        <Text>CHINENYE ANIKWENZE</Text>
        <AiOutlineMenuFold onClick={handleToggleNav} />
      </Flex>
      {toggleNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
