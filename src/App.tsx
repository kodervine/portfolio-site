import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
