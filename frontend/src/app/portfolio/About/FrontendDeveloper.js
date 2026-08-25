"use client";
import React, { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BandCard from "./BandCard";

export default function FrontendDeveloperSection() {
  const [showCard, setShowCard] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const fullText = "✦ ABOUT ME";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust speed here

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="frontend-dev"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "92vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        padding: "100px 32px 80px 32px",
        userSelect: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div style={{ position: "relative", zIndex: 40, maxWidth: "750px", width: "100%", marginLeft: "4vw", marginTop: "2vh", pointerEvents: "auto" }}>
        {/* Availability Badge */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
          <span
            suppressHydrationWarning
            style={{
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.85)",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            {typedText}
          </span>
          <span
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontFamily: "var(--font-mono, monospace)",
              marginLeft: "2px",
              animation: "blink 1s infinite",
            }}
          >
            |
          </span>
        </div>

        {/* Big Titles */}
        <div style={{ marginBottom: "24px", position: "relative", zIndex: 20 }}>
          <h2
            style={{
              fontFamily: "var(--font-display, 'Anton', sans-serif)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              color: "#ffffff",
              fontSize: "clamp(46px, 7.5vw, 100px)",
              margin: "0 0 24px 0",
              padding: 0,
            }}
          >
            Full Stack Developer
          </h2>
        </div>

        {/* Paragraph with animated gradient shine */}
        <p
          style={{
            position: "relative",
            zIndex: 20,
            fontSize: "clamp(15px, 2vw, 20px)",
            lineHeight: 1.6,
            maxWidth: "520px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "rgba(255, 255, 255, 0.85)",
            marginBottom: "28px",
          }}
        >
          Building modern websites with clean, responsive, elegant interfaces. Turning ideas and designs into engaging digital experiences.
        </p>

        {/* Skill Badges */}
        <div style={{ position: "relative", zIndex: 20, display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "24px" }}>
          {[
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
            { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
            { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
          ].map((tech) => (
            <div
              key={tech.name}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                borderRadius: "16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.9)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <img src={tech.icon} alt={tech.name} style={{ width: "16px", height: "16px", zIndex: 10, position: "relative" }} />
              <span style={{ position: "relative", zIndex: 10 }}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ position: "relative", zIndex: 40, marginTop: "36px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          {/* Show Card Button */}
          <button
            onClick={() => setShowCard((s) => !s)}
            type="button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1.5px solid #ff5722",
              color: "#ff5722",
              padding: "12px 28px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 600,
              borderRadius: "9999px",
              background: "transparent",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ff5722";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ff5722";
            }}
          >
            {showCard ? "Hide Card" : "Show Card"}
          </button>

          {/* Projects Button */}
          <a
            href="#showcase"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1.5px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              padding: "12px 28px",
              fontSize: "11px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "9999px",
              background: "transparent",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Projects
          </a>

          {/* Resume Button */}
          <a
            href="/Nithesh_Kumar_Resume.pdf" download="Nithesh_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer"
            onClick={() => {
              setIsDownloading(true);
              setTimeout(() => setIsDownloading(false), 800);
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: isDownloading ? "1.5px solid #22c55e" : "1.5px solid rgba(255, 255, 255, 0.3)",
              color: isDownloading ? "#22c55e" : "#ffffff",
              padding: "12px 28px",
              fontSize: "11px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "9999px",
              background: isDownloading ? "rgba(34, 197, 94, 0.1)" : "transparent",
              textDecoration: "none",
              transition: "all 0.25s ease",
              transform: isDownloading ? "scale(0.95)" : "scale(1)",
            }}
            onMouseEnter={(e) => {
              if (isDownloading) return;
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              if (isDownloading) return;
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            {isDownloading ? "Downloading..." : "Resume"}
            <i className={`ph ${isDownloading ? "ph-spinner spinner-animation" : "ph-arrow-down"}`} style={{ fontSize: "14px" }}></i>
          </a>
        </div>
      </div>

      {/* Decorative Background Text (Fills empty space when card is hidden) */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          opacity: showCard ? 0 : 1,
          transition: "opacity 0.8s ease",
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none"
        }}
      >
        <span style={{ fontSize: "clamp(60px, 10vw, 160px)", fontWeight: 900, color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.05)", lineHeight: 0.85, textTransform: "uppercase", letterSpacing: "-0.02em" }}>BUILD</span>
        <span style={{ fontSize: "clamp(60px, 10vw, 160px)", fontWeight: 900, color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.05)", lineHeight: 0.85, textTransform: "uppercase", letterSpacing: "-0.02em", paddingRight: "60px" }}>CREATE</span>
        <span style={{ fontSize: "clamp(60px, 10vw, 160px)", fontWeight: 900, color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.05)", lineHeight: 0.85, textTransform: "uppercase", letterSpacing: "-0.02em" }}>INNOVATE</span>
      </div>

      {/* 3D Hanging Physics ID Card (Exact same as portfolio-v1) */}
      <AnimatePresence>
        {showCard && mounted && (
          <motion.div
            key="3d-hanging-card"
            initial={{ y: "-120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 30,
              pointerEvents: "none",
            }}
          >
            <Suspense fallback={null}>
              <BandCard />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .spinner-animation {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
