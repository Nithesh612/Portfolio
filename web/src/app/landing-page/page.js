"use client";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "../Preloader/WelcomeScreen";
import VelocityMarquee from "./About/VelocityMarquee";
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
  const [showWelcome, setShowWelcome] = React.useState(true);

  useEffect(() => {
    const hasHash = typeof window !== "undefined" && window.location.hash;
    const hasVisited = typeof window !== "undefined" && sessionStorage.getItem("portfolio_visited");

    if (hasHash || hasVisited) {
      setShowWelcome(false);
      if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      if (hasHash) {
        const id = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
      return;
    }

    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio_visited", "true");
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }

    return () => {
      // Clean up GSAP triggers & ScrollSmoother when leaving homepage so return navigation doesn't break
      if (typeof window !== "undefined") {
        if (window.ScrollSmoother) {
          const smoother = window.ScrollSmoother.get();
          if (smoother) smoother.kill();
        }
        if (window.ScrollTrigger) {
          window.ScrollTrigger.getAll().forEach((t) => t.kill());
        }
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
        document.documentElement.style.overflow = "auto";
        document.documentElement.style.height = "auto";
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

      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <About />
          <VelocityMarquee rows={MARQUEE_ROWS} />

          <Skillset />
          <CTA />
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
