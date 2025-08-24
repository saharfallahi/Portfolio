"use client";

import { useRef } from "react";
import useI18n from "./hooks/useI18n";
import Contact from "./components/Contact";
import useParallax from "./hooks/useParallax";
import useReveal from "./hooks/useReveal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";



export default function HomePage() {
  const { lang } = useI18n();
  useReveal(lang);
  const heroRef = useRef(null);
  useParallax(heroRef);

  return (
    <main>
      <Header />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
