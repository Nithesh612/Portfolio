"use client";
import React, { useState } from "react";
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
    desktopImg: "/assets/thumbs/flowai-hub-1.png",
    mobileImg1: "/assets/thumbs/flowai-hub-2.png",
    mobileImg2: "/assets/thumbs/flowai-hub-3.png",
  },
];

export default function Project2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const activeProject = PROJECTS_DATA[activeIndex] || PROJECTS_DATA[0];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handleSelect = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Touch swipe support for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section
      id="showcase"
      className="project-showcase-section"
      style={{
        backgroundColor: "#000000",
        position: "relative",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      <style>{`
        .mockup-card-hover {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          will-change: transform;
        }
        .mockup-card-hover:hover {
          transform: translateY(-4px);
        }
        .project-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
        }
        .project-arrow-btn:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.08);
          box-shadow: 0 0 16px ${activeProject.accentGlow};
        }
        .project-arrow-btn:active {
          transform: scale(0.92);
        }
        .step-dot-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          font-family: monospace;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .project-showcase-section {
          padding: 50px 24px 60px 24px;
        }
        .mobile-project-nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 14px;
          width: 100%;
        }
        .mobile-project-tabs-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          padding: 2px 0;
          flex: 1;
          min-width: 0;
        }
        .mobile-project-tabs-scroll::-webkit-scrollbar {
          display: none;
        }
        .mobile-project-tab-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 15px;
          border-radius: 9999px;
          font-size: 12.5px;
          font-weight: 700;
          font-family: monospace;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-project-tab-pill:hover {
          background-color: rgba(255, 255, 255, 0.14);
        }
        .mobile-project-arrows {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        @media (max-width: 1080px) {
          .parth-main-layout {
            display: none !important;
          }
          .desktop-project-arrows {
            display: none !important;
          }
          .mobile-projects-view {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px;
          }
        }
        @media (min-width: 1081px) {
          .mobile-projects-view {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .project-showcase-section {
            padding: 85px 16px 50px 16px !important;
          }
          .project-showcase-heading {
            padding-top: 10px !important;
            padding-bottom: 22px !important;
          }
        }
        @media (max-width: 480px) {
          .project-showcase-section {
            padding: 82px 12px 40px 12px !important;
          }
          .project-showcase-heading h2 {
            gap: 8px !important;
          }
          .project-title-main {
            font-size: 30px !important;
          }
          .project-title-script {
            font-size: 38px !important;
          }
        }
      `}</style>

      {/* Dynamic Ambient Background Glow (Ultra Smooth GPU) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "600px",
          height: "500px",
          background: `radial-gradient(circle, ${activeProject.accentGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.4s ease",
          transform: "translateZ(0)",
        }}
      />

      {/* Centered Top Section Header */}
      <div
        className="project-showcase-heading"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "35px",
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
            margin: 0,
            lineHeight: 1.2,
            display: "inline-flex",
            alignItems: "baseline",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <span
            className="project-title-main"
            style={{
              fontSize: "clamp(30px, 4.5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              fontFamily: "'Plus Jakarta Sans', 'Instrument Sans', sans-serif",
            }}
          >
            Project
          </span>
          <span
            className="project-title-script"
            style={{
              fontFamily: "'Alex Brush', 'Great Vibes', 'Pinyon Script', 'Playball', cursive",
              fontWeight: 400,
              fontSize: "clamp(42px, 6vw, 74px)",
              color: "#e11d48",
              background: "linear-gradient(135deg, #fb7185 0%, #e11d48 55%, #be123c 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.02em",
              filter: "drop-shadow(0 0 25px rgba(225, 29, 72, 0.4))",
            }}
          >
            Showcase.
          </span>
        </h2>
      </div>

      <div
        style={{
          maxWidth: "1420px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1.15fr 50px 1.75fr",
          gap: "36px",
          alignItems: "center",
          padding: "0 20px 40px 20px",
        }}
        className="parth-main-layout"
      >
        {/* 1. LEFT COLUMN: ACTIVE PROJECT DETAILS (Fixed height to prevent layout shift) */}
        <div style={{ minHeight: "460px", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "8px", position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: direction * 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -direction * 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "440px",
                gap: "14px",
              }}
            >
              {/* Top Header & Title */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: activeProject.accentColor, fontSize: "28px", fontWeight: 900, lineHeight: 1, transition: "color 0.2s ease" }}>—</span>
                  <h3
                    style={{
                      fontSize: "clamp(26px, 2.8vw, 40px)",
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

              {/* Features with Sparkle Star icons ✦ */}
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                {activeProject.features.map((feature, fIdx) => (
                  <div key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: activeProject.accentColor, fontSize: "15px", lineHeight: "19px", flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: "13.5px", color: "rgba(255, 255, 255, 0.88)", lineHeight: 1.45 }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stack Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {activeProject.stack.map((item, sIdx) => (
                  <div
                    key={sIdx}
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
                  </div>
                ))}
              </div>

              {/* Action Buttons: View Details & Live Demo */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: "6px", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================= */}
        {/* 2. MIDDLE SPINE: VERTICAL STEP DOTS */}
        {/* ======================================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            minHeight: "460px",
            position: "relative",
          }}
        >
          {/* Number Step Dots */}
          {PROJECTS_DATA.map((proj, idx) => {
            const isCurr = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(idx)}
                className="step-dot-btn"
                title={`Switch to ${proj.title}`}
                type="button"
                style={{
                  backgroundColor: isCurr ? proj.accentColor : "rgba(255, 255, 255, 0.05)",
                  color: isCurr ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                  borderColor: isCurr ? "#ffffff" : "rgba(255, 255, 255, 0.12)",
                  boxShadow: isCurr ? `0 0 16px ${proj.accentGlow}` : "none",
                  transform: isCurr ? "scale(1.15)" : "scale(1)",
                }}
              >
                {proj.num}
              </button>
            );
          })}
        </div>

        {/* ======================================= */}
        {/* 3. RIGHT COLUMN: ACTIVE MOCKUPS SHOWCASE */}
        {/* ======================================= */}
        <div style={{ position: "relative", minHeight: "460px", display: "flex", alignItems: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.98, x: direction * 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -direction * 20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.9fr",
                gap: "20px",
                alignItems: "center",
                width: "100%",
                minHeight: "440px",
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
                    href={activeProject.liveUrl}
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
                        src={activeProject.mobileImg1}
                        alt={`${activeProject.title} Tablet View`}
                        fill
                        sizes="(max-width: 768px) 320px, 400px"
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
                    href={activeProject.liveUrl}
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
                          src={activeProject.mobileImg2}
                          alt={`${activeProject.title} Laptop View`}
                          fill
                          sizes="(max-width: 768px) 320px, 450px"
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

              {/* 3. Desktop / macOS App Window Frame (Right) */}
              <div
                className="portfolio-thumb not-hide-cursor fw-bold mb-0 mockup-card-hover"
                data-cursor="View Details"
                style={{ borderRadius: "18px" }}
              >
                <Link
                  href={`/Project/${activeProject.id}`}
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
                      src={activeProject.desktopImg}
                      alt={`${activeProject.title} Desktop Showcase`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top left" }}
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE VIEW: CLEAN SINGLE CARD + CAROUSEL NAVIGATION */}
      {/* ========================================================= */}
      <div className="mobile-projects-view" style={{ width: "100%", padding: "0 12px", maxWidth: "560px", margin: "0 auto", position: "relative", zIndex: 3 }}>
        {/* Mobile Top Step Navigation */}
        <div className="mobile-project-nav-bar">
          <div className="mobile-project-tabs-scroll">
            {PROJECTS_DATA.map((proj, idx) => {
              const isCurr = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(idx)}
                  type="button"
                  className={`mobile-project-tab-pill ${isCurr ? "active" : ""}`}
                  style={{
                    backgroundColor: isCurr ? proj.accentColor : "rgba(255, 255, 255, 0.06)",
                    borderColor: isCurr ? proj.accentColor : "rgba(255, 255, 255, 0.15)",
                    boxShadow: isCurr ? `0 0 16px ${proj.accentGlow}` : "none",
                  }}
                >
                  <span style={{ opacity: isCurr ? 1 : 0.6, fontSize: "11px" }}>{proj.num}.</span>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mobile-project-arrows">
            <button
              onClick={handlePrev}
              className="project-arrow-btn"
              style={{ width: "34px", height: "34px" }}
              aria-label="Previous project"
              type="button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={handleNext}
              className="project-arrow-btn"
              style={{ width: "34px", height: "34px" }}
              aria-label="Next project"
              type="button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Active Card with Touch Swipe */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, x: direction * 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 25 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              backgroundColor: "rgba(12, 12, 14, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "clamp(16px, 4.5vw, 22px)",
              borderRadius: "20px",
              border: `1px solid ${activeProject.accentGlow}`,
              boxShadow: `0 14px 40px -12px rgba(0, 0, 0, 0.85), 0 0 24px -6px ${activeProject.accentGlow}`,
            }}
          >
            {/* Top: Desktop Mockup */}
            <Link
              href={`/Project/${activeProject.id}`}
              style={{
                borderRadius: "14px",
                backgroundColor: "#080c14",
                border: "1.5px solid rgba(255, 255, 255, 0.14)",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.9)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                aspectRatio: "16 / 10",
                width: "100%",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  height: "24px",
                  backgroundColor: "#05080e",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                  gap: "6px",
                  zIndex: 2,
                }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#eab308" }} />
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
              </div>
              <div style={{ position: "relative", flex: 1, width: "100%" }}>
                <Image
                  src={activeProject.desktopImg}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
            </Link>

            {/* Bottom: Text Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: activeProject.accentColor, fontSize: "24px", fontWeight: 900, lineHeight: 1 }}>—</span>
                <h3 style={{ fontSize: "clamp(22px, 5vw, 26px)", fontWeight: 800, color: "#ffffff", margin: 0, letterSpacing: "-0.03em" }}>
                  {activeProject.title}
                </h3>
              </div>
              <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.8)", margin: 0 }}>
                {activeProject.description}
              </p>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2px" }}>
                {activeProject.features.map((feature, fIdx) => (
                  <div key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: activeProject.accentColor, fontSize: "14px", lineHeight: "19px", flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.45 }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {activeProject.stack.map((item, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "4px 9px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      fontSize: "11px",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    {item.icon && <img src={item.icon} alt={item.name} style={{ width: "12px", height: "12px" }} />}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action Buttons 50/50 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "8px" }}>
                <Link
                  href={`/Project/${activeProject.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "11px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 10px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span>View Details</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                      justifyContent: "center",
                      gap: "6px",
                      padding: "11px 12px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Quick Switch Controls (Desktop Only) */}
      <div className="desktop-project-arrows" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", width: "100%", marginTop: "15px" }}>
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="project-arrow-btn"
          style={{ width: "32px", height: "32px" }}
          title="Previous Project (<)"
          type="button"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="project-arrow-btn"
          style={{ width: "32px", height: "32px" }}
          title="Next Project (>)"
          type="button"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      {/* See More Projects Bottom Callout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0 20px 0",
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
