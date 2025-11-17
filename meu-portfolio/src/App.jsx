import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
