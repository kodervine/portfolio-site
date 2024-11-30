import { Routes, Route, Navigate } from "react-router-dom";
import Publications from "../pages/Publications";
import Loading from "../components/Loading";
import { Suspense, lazy } from "react";
import Features from "../pages/Features";

const Home = lazy(() => import("../pages/Home"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const About = lazy(() => import("../pages/About"));
const Certifications = lazy(() => import("../pages/Certifications"));
const Blog = lazy(() => import("../pages/Blog"));

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/features" element={<Features />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
