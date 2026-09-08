"use client";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "../Preloader/WelcomeScreen";
import VelocityMarquee from "./About/VelocityMarquee";
// import ProjectGrid from "./Projects/page";
import Header from "./header";
import HeroSection from "./hero-section";
import About from "./About/about";
import Services from "./Services/services";
import Project from "./Projects/project";
import Works from "./works/works";
import Contact from "./Contact/contact";
import Footer from "./footer";
import Skillset from "./skillset";
import CTA from "./AI/cta";


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
  const [showWelcome, setShowWelcome] = React.useState(false);

  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        setTimeout(() => {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            if (window.gsap) {
              window.gsap.to(window, { duration: 1, scrollTo: element, ease: "power2.inOut" });
            } else {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100);
      }
    };

    const hasVisited = sessionStorage.getItem("welcomeScreenShown");

    if (!hasVisited) {
      setShowWelcome(true);
      sessionStorage.setItem("welcomeScreenShown", "true");

      const timer = setTimeout(() => {
        setShowWelcome(false);
        handleHashScroll();
      }, 4800);

      return () => clearTimeout(timer);
    } else {
      setShowWelcome(false);
      handleHashScroll();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }

    return () => {
      // Clean up GSAP triggers when leaving homepage so return navigation doesn't break
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
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

          <Skillset />
          <CTA />
          {/* <ProjectGrid /> */}
          <Project />
          <Services />

          <Works />

          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
