import React from "react";
import "./styles/base.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
