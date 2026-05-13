import AboutPage from "./pages/AboutPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import BirdPage from "./pages/BirdPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bird" element={<BirdPage />} />
      </Routes>
    </HashRouter>
  );
}
