"use client";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "../Preloader/WelcomeScreen";
import VelocityMarquee from "./About/VelocityMarquee";
import Project from "./Projects/project";
import Header from "./header";
import HeroSection from "./hero-section";
import About from "./About/about";
import Skills from "./Skills/skills";
import Services from "./Services/services";
import Works from "./works/works";
import Contact from "./Contact/contact";
import Footer from "./footer";


const MARQUEE_ROWS = [
  {
    items: ["UI Design", "Design Systems", "User Research", "Interaction Design"],
    velocity: 170,
    outline: false,
  },
  {
    items: ["Design", "Figma", "Framer", "AI-Assisted Design", "Frontend Development"],
    velocity: -110,
    outline: true,
  },
];

export default function PortfolioPage() {
  const [showWelcome, setShowWelcome] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.AOS) {
        window.AOS.init();
      }
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && <WelcomeScreen key="welcome-screen" />}
      </AnimatePresence>

      <div className="overlay"></div>
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      <div id="toast-container"></div>
      <div className="back-to-top-wrapper">
        <button suppressHydrationWarning id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <About />
          <VelocityMarquee rows={MARQUEE_ROWS} />
          <Project />
          <Services />
          <Works />
          <Skills />

          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
