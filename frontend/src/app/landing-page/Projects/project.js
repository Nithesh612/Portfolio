"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_DATA = [
  {
    id: "thunder",
    num: "01",
    title: "Thunder",
    subtitle: "High-Performance Gaming Gear & Hardware E-Commerce Platform",
    tagline: "Your all-in-one destination for premium esports peripherals and immersive shopping.",
    accentColor: "#ef4444",
    accentGlow: "rgba(239, 68, 68, 0.35)",
    cardGradient: "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)",
    description:
      "🚀 Thunder is an immersive, high-performance gaming hardware and esports gear e-commerce platform. Built with interactive product showcases, dynamic filtering, real-time cart persistence, and lightning-fast responsive navigation to streamline gear discovery.",
    features: [
      "100+ gaming hardware catalog with dynamic category filters and instant search",
      "Interactive cart drawer with persistent local storage and instant order calculations",
      "Optimized responsive architecture with custom animations and smooth micro-interactions",
    ],
    stack: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
    ],
    liveUrl: "https://nithesh612.github.io/E-commerce-1/",
    githubUrl: "https://github.com/nithesh612/E-commerce-1",
    desktopImg: "/assets/thumbs/ecommerce-thumb.png",
    mobileImg1: "/assets/thumbs/ecommerce-thumb.png",
    mobileImg2: "/assets/thumbs/ecommerce-thumb.png",
  },
  {
    id: "bookshelf",
    num: "02",
    title: "BookShelf",
    subtitle: "Full-Stack Library & Book Inventory Management System",
    tagline: "Comprehensive system to track, organize reading lists, and manage inventory seamlessly.",
    accentColor: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.35)",
    cardGradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    description:
      "📚 BookShelf is a full-stack inventory and digital library management platform. Designed for students, librarians, and avid readers to catalog book collections, track real-time borrow & return lifecycles, and monitor literature availability with instant search and analytics.",
    features: [
      "Complete inventory CRUD system with categories, author indexing, and cover previews",
      "Real-time status tracking for borrowed, available, and archived literature records",
      "Modular dashboard with responsive layout and clean, accessible data tables",
    ],
    stack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
    ],
    liveUrl: "https://book-management-system-r1.vercel.app/",
    githubUrl: "https://github.com/nithesh612/book-management-system",
    desktopImg: "/assets/thumbs/Book-management-system.png",
    mobileImg1: "/assets/thumbs/Book-management-system.png",
    mobileImg2: "/assets/thumbs/BMS/image.png",
  },
  {
    id: "flowai",
    num: "03",
    title: "FlowAI Hub",
    subtitle: "AI-Powered Productivity & Workflow Automation Assistant",
    tagline: "Intelligent developer toolkit for automated code assistance, API testing, and task management.",
    accentColor: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.35)",
    cardGradient: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    description:
      "⚡ FlowAI Hub connects modern developer workflows with cutting-edge AI utilities. Featuring real-time code snippet generators, markdown documentation builders, regex & JSON formatters, and smart project planning assistants to accelerate engineering speed 10x.",
    features: [
      "AI-powered code generation, syntax diagnostics, and markdown documentation assistant",
      "Full developer suite with REST API client tester, JSON validator, and regex debugger",
      "Cloud database synchronization with JWT authentication and secure session storage",
    ],
    stack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
    ],
    liveUrl: "https://github.com/nithesh612",
    githubUrl: "https://github.com/nithesh612",
    desktopImg: "/assets/thumbs/portfolio-two-thumb1.jpg",
    mobileImg1: "/assets/thumbs/portfolio-two-thumb2.jpg",
    mobileImg2: "/assets/thumbs/portfolio-two-thumb3.jpg",
  },
];

export default function Project2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const mainLayoutRef = useRef(null);
  const leftPinRef = useRef(null);
  const trackRef = useRef(null);
  const avatarKnobRef = useRef(null);
  const lineProgressRef = useRef(null);
  const cardRefs = useRef([]);

  // GSAP Pinning for Left Side & Scroll Tracking for Right Side + Traveling Avatar Knob
  useEffect(() => {
    let pinST = null;
    let knobST = null;
    let lineST = null;
    let cardSTs = [];

    const initGSAP = () => {
      if (typeof window === "undefined" || !window.gsap || !window.ScrollTrigger) {
        return false;
      }

      // 1. Pin the Left Sticky Container when the main projects layout hits the top of viewport
      if (mainLayoutRef.current && leftPinRef.current) {
        pinST = window.ScrollTrigger.create({
          trigger: mainLayoutRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftPinRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });
      }

      // 2. Animate the Avatar Knob and Golden Line Progress together smoothly as you scroll
      if (mainLayoutRef.current && avatarKnobRef.current && trackRef.current && lineProgressRef.current) {
        const totalDistance = (trackRef.current.clientHeight || 460) - 36;
        knobST = window.gsap.to(avatarKnobRef.current, {
          y: totalDistance,
          ease: "none",
          scrollTrigger: {
            trigger: mainLayoutRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        lineST = window.gsap.to(lineProgressRef.current, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: mainLayoutRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      // 3. Track which Right Card is in the center of the viewport
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const st = window.ScrollTrigger.create({
          trigger: card,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(index);
            }
          },
        });
        cardSTs.push(st);
      });

      return true;
    };

    // Retry initialization in case GSAP is loading async
    if (!initGSAP()) {
      const interval = setInterval(() => {
        if (initGSAP()) {
          clearInterval(interval);
        }
      }, 200);

      const timeout = setTimeout(() => clearInterval(interval), 4000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        if (pinST) pinST.kill();
        if (knobST && knobST.scrollTrigger) knobST.scrollTrigger.kill();
        if (lineST && lineST.scrollTrigger) lineST.scrollTrigger.kill();
        cardSTs.forEach((st) => st.kill());
      };
    }

    return () => {
      if (pinST) pinST.kill();
      if (knobST && knobST.scrollTrigger) knobST.scrollTrigger.kill();
      if (lineST && lineST.scrollTrigger) lineST.scrollTrigger.kill();
      cardSTs.forEach((st) => st.kill());
    };
  }, []);

  const activeProject = PROJECTS_DATA[activeIndex] || PROJECTS_DATA[0];

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (typeof window !== "undefined" && window.gsap && window.ScrollSmoother) {
      const smoother = window.ScrollSmoother.get();
      const targetCard = cardRefs.current[index];
      if (smoother && targetCard) {
        // Scroll to the specific card
        smoother.scrollTo(targetCard, true, "center center");
      } else if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section
      id="showcase"
      ref={sectionRef}
      style={{
        backgroundColor: "#000000",
        position: "relative",
        padding: "0 24px",
        zIndex: 5,
      }}
    >
      <style>{`
        .mockup-card-hover {
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease;
        }
        .mockup-card-hover:hover {
          transform: translateY(-5px);
        }
        @media (max-width: 1080px) {
          .parth-main-layout {
            display: flex !important;
            flex-direction: column !important;
          }
          .parth-spine-col {
            display: none !important;
          }
          .parth-mockups-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Section Ambient Glow (Contained inside Project section) */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "800px",
          height: "600px",
          background: `radial-gradient(circle, ${activeProject.accentGlow} 0%, transparent 65%)`,
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.6s ease",
        }}
      />

      {/* Centered Top Section Header */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "60px",
          paddingBottom: "30px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "rgba(255, 255, 255, 0.65)",
            fontFamily: "var(--font-mono, monospace)",
            marginBottom: "10px",
          }}
        >
          CRAFTING MODERN EXPERIENCES
        </div>
        <h2
          style={{
            fontSize: "clamp(30px, 4.5vw, 56px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          PROJECT{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 700,
              fontFamily: "'Playfair Display', 'Instrument Sans', serif, sans-serif",
              background: "linear-gradient(90deg, #ec4899 0%, #f43f5e 50%, #fb923c 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
              filter: "drop-shadow(0 0 25px rgba(236, 72, 153, 0.45))",
            }}
          >
            SHOWCASE
          </span>
        </h2>
      </div>

      <div
        ref={mainLayoutRef}
        style={{
          maxWidth: "1420px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1.15fr 1.75fr",
          gap: "54px",
          padding: "0 24px",
        }}
        className="parth-main-layout"
      >
        {/* ======================================= */}
        {/* LEFT COLUMN + GOLDEN SPARKLE SPINE */}
        {/* ======================================= */}
        <div style={{ position: "relative" }}>
          {/* Pinned by GSAP */}
          <div
            ref={leftPinRef}
            style={{
              height: "100vh",
              maxHeight: "100vh",
              display: "grid",
              gridTemplateColumns: "1fr 50px",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* 1. Left Content Area */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxHeight: "90vh", paddingLeft: "8px", gap: "16px" }}>
              {/* Title & Description: INSTANT IMMEDIATE SWAP */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ color: activeProject.accentColor, fontSize: "28px", fontWeight: 900, lineHeight: 1, transition: "color 0.15s ease" }}>—</span>
                  <h3
                    style={{
                      fontSize: "clamp(28px, 3vw, 42px)",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "-0.03em",
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {activeProject.title}
                  </h3>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.82)", margin: 0 }}>
                  {activeProject.description}
                </p>
              </div>

              {/* Dynamic Animated Features & Badges */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  {/* Features with Sparkle Star icons ✦ (Staggered Reveal) */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.06,
                          delayChildren: 0.02,
                        },
                      },
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: "9px" }}
                  >
                    {activeProject.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        variants={{
                          hidden: { opacity: 0, y: 10, filter: "blur(3px)" },
                          visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
                        }}
                        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                      >
                        <span style={{ color: activeProject.accentColor, fontSize: "15px", lineHeight: "19px", flexShrink: 0 }}>✦</span>
                        <span style={{ fontSize: "13.5px", color: "rgba(255, 255, 255, 0.88)", lineHeight: 1.45 }}>{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Stack Badges (Staggered Entrance) */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.04,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "2px" }}
                  >
                    {activeProject.stack.map((item, sIdx) => (
                      <motion.div
                        key={sIdx}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9, y: 6 },
                          visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
                        }}
                        whileHover={{ y: -2, borderColor: activeProject.accentColor }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "5px 12px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "12px",
                          color: "rgba(255, 255, 255, 0.88)",
                          cursor: "default",
                          transition: "border-color 0.2s ease",
                        }}
                      >
                        {item.icon && <img src={item.icon} alt={item.name} style={{ width: "13px", height: "13px" }} />}
                        <span>{item.name}</span>
                      </motion.div>
                    ))}
                    {/* Action Buttons: View Details & Live Preview */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px" }}>
                      <Link
                        href={`/Project/${activeProject.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 18px",
                          borderRadius: "9999px",
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          fontSize: "13px",
                          fontWeight: 700,
                          textDecoration: "none",
                          boxShadow: `0 4px 20px ${activeProject.accentGlow}`,
                          transition: "all 0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = `0 6px 24px ${activeProject.accentColor}70`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = `0 4px 20px ${activeProject.accentGlow}`;
                        }}
                      >
                        <span>View Details</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>

                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 16px",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: "13px",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                          }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          <span>Live Demo ↗</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 2. Middle Spine: Golden Luminous Track + Traveling Bold Dot */}
            <div
              ref={trackRef}
              className="parth-spine-col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "460px",
                position: "relative",
                padding: "8px 0",
              }}
            >
              {/* Continuous Vertical Base Track */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  bottom: "18px",
                  width: "3px",
                  borderRadius: "99px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  overflow: "hidden",
                }}
              >
                {/* Golden Animated Progress Fill (Fills down to the bold dot) */}
                <div
                  ref={lineProgressRef}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "0%",
                    background: "linear-gradient(to bottom, #fbbf24 0%, #f59e0b 50%, #eab308 100%)",
                    boxShadow: "0 0 14px rgba(245, 158, 11, 0.9)",
                  }}
                />
              </div>

              {/* Travelling Bold Glowing Dot (Scrubbed with Scroll) */}
              <div
                ref={avatarKnobRef}
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              >
                {/* Bold Solid Core Dot (Static Glow, No Blinking) */}
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                    background: "linear-gradient(135deg, #ffffff 0%, #fbbf24 45%, #f59e0b 100%)",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 16px rgba(245, 158, 11, 0.95), 0 0 30px rgba(245, 158, 11, 0.5)",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: NATIVE SCROLLING MOCKUPS */}
        {/* ======================================= */}
        <div style={{ display: "flex", flexDirection: "column", gap: "100px", padding: "40px 0 40px 0" }}>
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.9fr",
                gap: "20px",
                alignItems: "center",
                minHeight: "85vh",
                position: "relative",
              }}
              className="parth-mockups-grid"
            >
              {/* Left Stack: Tablet (Top) & MacBook Laptop (Bottom) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* 1. Tablet Mockup (Top Left) */}
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 mockup-card-hover"
                  data-cursor="View"
                  style={{ borderRadius: "16px" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block cursor-hide"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#080b11",
                      border: "2px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.85)",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "175px",
                      textDecoration: "none",
                    }}
                  >
                    {/* Tablet Status Bar */}
                    <div
                      style={{
                        height: "18px",
                        backgroundColor: "#05070c",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 10px",
                        fontSize: "8.5px",
                        color: "rgba(255, 255, 255, 0.75)",
                        fontFamily: "monospace",
                        zIndex: 2,
                      }}
                    >
                      <span>2:21</span>
                      <div
                        style={{
                          width: "32px",
                          height: "5px",
                          backgroundColor: "#000000",
                          borderRadius: "20px",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                        }}
                      />
                      <span style={{ fontSize: "8.5px" }}>5G</span>
                    </div>

                    {/* Tablet Screen Content */}
                    <div style={{ position: "relative", flex: 1, width: "100%", height: "calc(100% - 18px)" }}>
                      <Image
                        src={project.mobileImg1}
                        alt={`${project.title} Tablet View`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "top left" }}
                      />
                    </div>
                  </a>
                </div>

                {/* 2. MacBook Laptop Frame (Bottom Left) */}
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 mockup-card-hover"
                  data-cursor="View"
                  style={{ width: "100%" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block cursor-hide"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      textDecoration: "none",
                      position: "relative",
                    }}
                  >
                    {/* Laptop Screen Lid */}
                    <div
                      style={{
                        width: "92%",
                        borderRadius: "12px 12px 0 0",
                        backgroundColor: "#05070a",
                        border: "2px solid rgba(255, 255, 255, 0.14)",
                        borderBottom: "none",
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.8)",
                        overflow: "hidden",
                        position: "relative",
                        height: "155px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Screen Status Bar */}
                      <div
                        style={{
                          height: "16px",
                          backgroundColor: "#05070a",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0 8px",
                          fontSize: "8px",
                          color: "rgba(255, 255, 255, 0.65)",
                          fontFamily: "monospace",
                          zIndex: 2,
                        }}
                      >
                        <span>2:21</span>
                        <div
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "#1e293b",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                          }}
                        />
                        <span>5G</span>
                      </div>

                      {/* Screen Content */}
                      <div style={{ position: "relative", flex: 1, width: "100%", height: "calc(100% - 16px)" }}>
                        <Image
                          src={project.mobileImg2}
                          alt={`${project.title} Laptop View`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover", objectPosition: "top left" }}
                        />
                      </div>
                    </div>

                    {/* MacBook Aluminum Base / Deck */}
                    <div
                      style={{
                        width: "100%",
                        height: "12px",
                        backgroundColor: "#161b24",
                        borderRadius: "0 0 10px 10px",
                        position: "relative",
                        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.9)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Thumb Opening Notch */}
                      <div
                        style={{
                          width: "42px",
                          height: "4px",
                          backgroundColor: "#0c1017",
                          borderRadius: "0 0 4px 4px",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          borderTop: "none",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>

              {/* 3. Desktop / macOS App Window Frame (Right) - Links to Case Study Details */}
              <div
                className="portfolio-thumb not-hide-cursor fw-bold mb-0 mockup-card-hover"
                data-cursor="View Details"
                style={{ borderRadius: "18px" }}
              >
                <Link
                  href={`/Project/${project.id}`}
                  className="d-block cursor-hide"
                  style={{
                    borderRadius: "18px",
                    backgroundColor: "#080c14",
                    border: "2px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 25px 65px -10px rgba(0, 0, 0, 0.9)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "360px",
                    textDecoration: "none",
                  }}
                >
                  {/* macOS Window Titlebar with Traffic Light Buttons */}
                  <div
                    style={{
                      height: "28px",
                      backgroundColor: "#05080e",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 14px",
                      zIndex: 2,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#eab308" }} />
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                    </div>
                    <div style={{ width: "8px", height: "8px" }} />
                    <div style={{ width: "8px", height: "8px" }} />
                  </div>

                  {/* Desktop Screen Content */}
                  <div style={{ position: "relative", flex: 1, width: "100%", height: "calc(100% - 28px)" }}>
                    <Image
                      src={project.desktopImg}
                      alt={`${project.title} Desktop Showcase`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top left" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Projects Bottom Callout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 0 70px 0",
          marginTop: "-20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Link
          href="/Project"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            transition: "all 0.25s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffffff";
            const icon = e.currentTarget.querySelector(".more-projects-arrow");
            if (icon) {
              icon.style.transform = "translateX(3px)";
              icon.style.backgroundColor = "rgba(255,255,255,0.18)";
              icon.style.borderColor = "rgba(255,255,255,0.35)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
            const icon = e.currentTarget.querySelector(".more-projects-arrow");
            if (icon) {
              icon.style.transform = "translateX(0px)";
              icon.style.backgroundColor = "rgba(255,255,255,0.08)";
              icon.style.borderColor = "rgba(255,255,255,0.16)";
            }
          }}
        >
          <span>See more projects</span>
          <span
            className="more-projects-arrow"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
