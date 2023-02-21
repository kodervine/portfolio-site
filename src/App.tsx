import { FC, ReactNode, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

const App: FC<{ opened: boolean }> = ({ opened }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
};

export default App;
