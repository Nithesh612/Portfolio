"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);
  const textBgRef = useRef(null);

  useEffect(() => {
    // Small parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(textBgRef.current, { x: x * 1.5, y: y * 1.5, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#111111", // Dark background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Corner Texts */}
      <div style={{ position: "absolute", top: "40px", left: "40px", color: "#e8dfcd", fontSize: "14px", fontFamily: "sans-serif", zIndex: 30 }}>
        Full Stack Developer
      </div>
      <div style={{ position: "absolute", top: "40px", right: "40px", display: "flex", alignItems: "center", color: "#e8dfcd", fontSize: "14px", zIndex: 30 }}>
        <div style={{ width: "60px", height: "1px", backgroundColor: "#e8dfcd", marginRight: "10px" }}></div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
      <div style={{ position: "absolute", bottom: "40px", left: "40px", color: "#e8dfcd", fontSize: "14px", fontFamily: "sans-serif", zIndex: 30 }}>
        Nithesh Kumar R
      </div>
      <div style={{ position: "absolute", bottom: "40px", right: "40px", color: "#e8dfcd", fontSize: "14px", fontFamily: "sans-serif", zIndex: 30 }}>
        www.portfolio.com
      </div>

      {/* Background Text Layer (Solid) */}
      <h1 
        ref={textBgRef}
        style={{
          position: "absolute",
          fontSize: "clamp(80px, 20vw, 320px)",
          fontWeight: 800,
          lineHeight: 1,
          color: "#e8dfcd",
          margin: 0,
          whiteSpace: "nowrap",
          letterSpacing: "-0.05em",
          zIndex: 1,
          fontFamily: "'Inter', sans-serif",
          textTransform: "uppercase"
        }}
      >
        PORTFOLIO
      </h1>
    </section>
  );
}
