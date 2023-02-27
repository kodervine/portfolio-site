import { FC, ReactNode, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Blog from "../pages/Blog";
// import Certifications from "../pages/Certifications";
import Publications from "../pages/Publications";
// import Home from "../pages/Home";
// import PortfolioPage from "../pages/PortfolioPage";
// import About from "../pages/About";
import Loading from "../components/Loading";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const About = lazy(() => import("../pages/About"));
const Certifications = lazy(() => import("../pages/Certifications"));
const Blog = lazy(() => import("../pages/Blog"));

export default () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Suspense>
    </>
  );
};
