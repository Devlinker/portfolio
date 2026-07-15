import { useState, useEffect } from "react";
import Header from "./components/Header/index.jsx";
import Home from "./Pages/home/index.jsx";
import About from "./Pages/about/index.jsx";
import Skills from "./Pages/skills/index.jsx";
import Qualification from "./Pages/qualification/index.jsx";
import Contact from "./Pages/contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ScrollUp from "./components/ScrollUp/index.jsx";
import CustomCursor from "./components/CustomCursor/index.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // 1. Scroll Header Background Shadow
    const handleHeaderScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      }
    };

    // 2. Track Active Navigation Link
    const handleActiveLinkScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    const handleScroll = () => {
      handleHeaderScroll();
      handleActiveLinkScroll();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run to capture correct states on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <CustomCursor />
    </>
  );
}
