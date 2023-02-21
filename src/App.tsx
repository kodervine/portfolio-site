import { FC, ReactNode, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Certifications from "./pages/Certifications";
import Publications from "./pages/Publications";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import About from "./pages/About";

const App: FC<{ opened: boolean }> = ({ opened }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </>
  );
};

export default App;
