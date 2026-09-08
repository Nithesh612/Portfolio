/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef(null);
  const [toggleActive, setToggleActive] = useState(false);

  // Load saved state on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("heroDarkMode");
      if (saved !== null) {
        setToggleActive(saved === "true");
      }
    } catch (e) { }
  }, []);

  // Toggle theme mode & persist state without any audio playback
  const handleToggle = () => {
    setToggleActive((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("heroDarkMode", next.toString());
      } catch (e) { }
      return next;
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-badge-top", {
      opacity: 0,
      y: -15,
      duration: 0.8,
    })
      .from(
        ".hero-coin-box",
        {
          opacity: 0,
          scale: 0.85,
          y: 20,
          duration: 0.9,
        },
        "-=0.5"
      )
      .from(
        ".hero-dot-word",
        {
          opacity: 0,
          y: 25,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        ".hero-title-nithesh",
        {
          opacity: 0,
          y: 35,
          duration: 0.9,
        },
        "-=0.6"
      )
      .from(
        ".hero-title-developer",
        {
          opacity: 0,
          y: 35,
          duration: 0.9,
        },
        "-=0.6"
      )
      .from(
        ".hero-footer-subline",
        {
          opacity: 0,
          y: 15,
          duration: 0.7,
        },
        "-=0.4"
      );
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className={toggleActive ? "hero-dark-mode" : "hero-light-mode"}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: toggleActive ? "#09090B" : "#FAF7F0",
        color: toggleActive ? "#FFFFFF" : "#111111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "90px 24px 45px 24px",
        boxSizing: "border-box",
        userSelect: "text",
        transition: "background-color 0.45s ease, color 0.45s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Montserrat:ital,wght@0,700;0,800;0,900;1,800;1,900&family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* Custom text selection styling for hero section */
        #home ::selection {
          background-color: #ff5722;
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
        }

        /* Organic subtle stippling background */
        .hero-grain-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: 
            radial-gradient(#111111 0.75px, transparent 0.75px),
            radial-gradient(#222222 0.5px, transparent 0.5px);
          background-size: 54px 54px, 27px 27px;
          background-position: 0 0, 14px 14px;
          opacity: 0.15;
          z-index: 1;
          transition: opacity 0.45s ease;
        }

        .hero-dark-mode .hero-grain-bg {
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.25) 0.75px, transparent 0.75px),
            radial-gradient(rgba(255, 255, 255, 0.15) 0.5px, transparent 0.5px);
          opacity: 0.18;
        }

        /* Authentic Dot-Matrix Typography for 'creative' */
        .hero-dot-matrix {
          font-family: 'Doto', monospace, sans-serif;
          font-weight: 900;
          font-variation-settings: 'ROND' 100;
          letter-spacing: -0.02em;
          color: #111111;
          display: inline-block;
          line-height: 0.92;
          text-transform: lowercase;
          transition: color 0.45s ease;
        }

        .hero-dark-mode .hero-dot-matrix {
          color: #FFFFFF;
        }

        /* Hero Centered Stack */
        .hero-typography-stack {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
        }

        /* 3D Crimson Beveled Switch - No Outer Background Shadow */
        .hero-toggle-switch {
          user-select: none;
          -webkit-user-select: none;
          display: inline-flex;
          align-items: center;
          position: relative;
          width: clamp(68px, 9.2vw, 138px);
          height: clamp(36px, 4.8vw, 70px);
          border-radius: 9999px;
          background: linear-gradient(145deg, #c62828 0%, #890c0c 50%, #540000 100%);
          box-shadow: 
            inset 0 2.5px 4px rgba(255, 255, 255, 0.45),
            inset 0 -3px 6px rgba(0, 0, 0, 0.6);
          cursor: pointer;
          padding: clamp(3px, 0.45vw, 6px);
          box-sizing: border-box;
          margin: 0 clamp(5px, 0.8vw, 12px);
          vertical-align: middle;
          transform: translateY(clamp(-3px, -0.4vw, -6px));
          flex-shrink: 0;
        }

        .hero-dark-mode .hero-toggle-switch {
          box-shadow: 
            inset 0 2.5px 4px rgba(255, 255, 255, 0.45),
            inset 0 -3px 6px rgba(0, 0, 0, 0.7);
        }

        .hero-switch-inner-track {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          background: radial-gradient(ellipse at 60% 40%, #7a0c0c 0%, #450303 100%);
          box-shadow: 
            inset 0 4px 8px rgba(0, 0, 0, 0.75),
            inset 0 -1.5px 3px rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          padding: clamp(2px, 0.3vw, 4px);
          box-sizing: border-box;
          position: relative;
        }

        .hero-toggle-knob {
          user-select: none;
          -webkit-user-select: none;
          width: clamp(26px, 3.6vw, 52px);
          height: clamp(26px, 3.6vw, 52px);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 28%, #FFFFFF 0%, #F5F5F5 40%, #D8D8D8 75%, #A8A8A8 100%);
          box-shadow: 
            0 5px 12px rgba(0, 0, 0, 0.45),
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 2.5px 4px rgba(255, 255, 255, 1),
            inset 0 -2.5px 4px rgba(0, 0, 0, 0.25);
          transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateX(0);
          flex-shrink: 0;
        }

        .hero-toggle-switch.is-active .hero-toggle-knob {
          transform: translateX(clamp(32px, 4.4vw, 68px));
        }

        /* Classical Fresco Art Capsule in 'DEVELOPER' */
        .hero-fresco-capsule {
          user-select: none;
          -webkit-user-select: none;
          display: inline-block;
          width: clamp(24px, 3.4vw, 52px);
          height: clamp(50px, 7.2vw, 108px);
          border-radius: 9999px;
          overflow: hidden;
          margin: 0 clamp(3px, 0.5vw, 8px);
          vertical-align: middle;
          position: relative;
          box-shadow: none !important;
          transform: translateY(clamp(-3px, -0.4vw, -6px)) !important;
          transition: none !important;
          background: transparent;
        }

        .hero-fresco-capsule img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          transform: none !important;
          transition: none !important;
        }

        /* Pulsing Status Dot */
        .hero-pulsing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          display: inline-block;
          position: relative;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
          flex-shrink: 0;
        }

        .hero-pulsing-dot::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1.5px solid #22c55e;
          animation: ring-pulse 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        @keyframes ring-pulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Mac Finder & Asterisk Stickers */
        .hero-mac-sticker {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.18));
          cursor: pointer;
        }
        .hero-mac-sticker:hover {
          transform: rotate(10deg) scale(1.15);
        }

        .hero-star-sticker {
          animation: star-rotate 22s linear infinite;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 2px 6px rgba(255, 87, 34, 0.35));
          cursor: pointer;
        }
        .hero-star-sticker:hover {
          animation-play-state: paused;
          transform: scale(1.25) rotate(90deg);
        }

        @keyframes star-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Animated Glowing Gradient Border Pill - Mode Adaptive */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-border-pill {
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
          padding: 1.5px;
          display: inline-block;
          margin-bottom: 20px;
          cursor: pointer;
          background: linear-gradient(110deg, #ff5722, #0284c7, #e5e7eb, #e5e7eb, #f59e0b);
          background-size: 300% 300%;
          animation: gradient-shift 5s ease infinite;
          box-shadow: 0 4px 16px rgba(255, 87, 34, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease;
        }
        .animated-border-pill:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 24px rgba(255, 87, 34, 0.22), 0 2px 6px rgba(0, 0, 0, 0.06);
        }
        .animated-border-pill::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(70deg, #f59e0b, transparent, #ff5722);
          background-size: 300% 300%;
          animation: gradient-shift 5s ease infinite;
          border-radius: 9999px;
          z-index: 0;
          opacity: 0.5;
        }
        .animated-border-pill-content {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 9999px;
          padding: 7px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1;
          transition: background 0.3s ease, color 0.45s ease;
        }
        .animated-border-pill:hover .animated-border-pill-content {
          background: #ffffff;
        }

        /* Dark Mode Specific Animated Border Pill */
        .hero-dark-mode .animated-border-pill {
          background: linear-gradient(110deg, #ff007f, #0055ff, #1a1a1a, #1a1a1a, #ffaa00);
          background-size: 300% 300%;
          box-shadow: -8px 0px 24px -6px rgba(255, 0, 128, 0.35), 8px 8px 24px -6px rgba(255, 170, 0, 0.3);
        }
        .hero-dark-mode .animated-border-pill::after {
          background: linear-gradient(70deg, #ffaa00, transparent, #ff007f);
          background-size: 300% 300%;
          opacity: 0.65;
        }
        .hero-dark-mode .animated-border-pill-content {
          background: #0f0f0f;
        }
        .hero-dark-mode .animated-border-pill:hover .animated-border-pill-content {
          background: #181818;
        }
      `}</style>

      {/* Subtle Background Texture */}
      <div className="hero-grain-bg" />

      {/* Top Status Pill Badge with Animated Gradient Glow */}
      <div className="hero-badge-top" style={{ zIndex: 10 }}>
        <a
          href="https://nexio-hub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-border-pill"
        >
          <div className="animated-border-pill-content">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={toggleActive ? "#38bdf8" : "#0284c7"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: toggleActive
                  ? "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))"
                  : "drop-shadow(0 0 4px rgba(2, 132, 199, 0.4))",
                transition: "stroke 0.45s ease, filter 0.45s ease",
              }}
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <span
              style={{
                fontSize: "12px",
                color: toggleActive ? "#FFFFFF" : "#111827",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                transition: "color 0.45s ease",
              }}
            >
              NEXIO-HUB
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke={toggleActive ? "#9ca3af" : "#6b7280"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.85, transition: "stroke 0.45s ease" }}
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </a>
      </div>

      {/* Centered Master Typography Structure */}
      <div className="hero-typography-stack">
        {/* ROW 1: 'creative' (Dot-Matrix) + Top-Right 3D Coin Badge */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            width: "100%",
            position: "relative",
            marginBottom: "clamp(-12px, -1.8vw, -24px)",
          }}
        >
          {/* Left: Dot-Matrix 'full stack' */}
          <div className="hero-dot-word">
            <span
              className="hero-dot-matrix"
              style={{
                fontSize: "clamp(44px, 8.5vw, 130px)",
                display: "inline-flex",
                alignItems: "baseline",
                gap: "0.18em",
              }}
            >
              <span>full</span>
              <span>stack</span>
            </span>
          </div>

          {/* Right: 3D Coin Card Widget + Subtext */}
          <div
            className="hero-coin-box"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "clamp(4px, 1vw, 14px)",
              maxWidth: "clamp(150px, 18vw, 230px)",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: "clamp(10px, 1.2vw, 14px)",
                overflow: "hidden",
                boxShadow: "none",
                border: "none",
                background: "#f97316",
              }}
            >
              <img
                src="/assets/hero-coin.png"
                alt="3D Coin Widget"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Tagline Below Coin */}
            <div
              style={{
                marginTop: "6px",
                textAlign: "center",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(8px, 0.72vw, 10.5px)",
                lineHeight: "1.35",
                color: toggleActive ? "#9CA3AF" : "#4b5563",
                fontWeight: 600,
                transition: "color 0.45s ease",
              }}
            ></div>
          </div>
        </div>

        {/* ROW 2: 'NITHESH [3D TOGGLE] KUMAR' (One Single Line, Vibrant Orange Sans) */}
        <div
          className="hero-title-nithesh"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 8.8vw, 136px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: "#FF5714",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            whiteSpace: "nowrap",
            position: "relative",
            zIndex: 5,
            transition: "color 0.45s ease",
          }}
        >
          <span>NITHESH</span>

          {/* 3D Realistic Toggle Switch with Multi-Layer Bezel & Track */}
          <div
            className={`hero-toggle-switch ${toggleActive ? "is-active" : ""}`}
            onClick={handleToggle}
            title={toggleActive ? "Click for Light Mode" : "Click for Dark Mode"}
          >
            <div className="hero-switch-inner-track">
              <div className="hero-toggle-knob" />
            </div>
          </div>

          <span>KUMAR</span>
        </div>

        {/* ROW 3: 'DEV [ART CAPSULE] ELOPER' (One Single Line, Black in Light Mode / Pure White in Dark Mode + Stickers) */}
        <div
          className="hero-title-developer"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 9.6vw, 148px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: toggleActive ? "#FFFFFF" : "#0F0F0F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            whiteSpace: "nowrap",
            position: "relative",
            zIndex: 5,
            transition: "color 0.45s ease",
          }}
        >
          <span>DEV</span>

          {/* Michelangelo's Creation of Adam Capsule */}
          <div
            className="hero-fresco-capsule"
            title="The Creation of Adam — Michelangelo"
          >
            <img
              src="/assets/creation-of-adam.jpg"
              alt="Creation of Adam Fresco"
            />
          </div>

          <span style={{ position: "relative" }}>
            ELOPER

            {/* Sticker Badge attached to the 'R' leg */}
            <span
              style={{
                position: "absolute",
                right: "clamp(-20px, -1.8vw, -28px)",
                bottom: "clamp(-3px, -0.4vw, -6px)",
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 1,
                pointerEvents: "auto",
              }}
            >
              {/* 8-Point Asterisk Star */}
              <span
                className="hero-star-sticker"
                style={{
                  width: "clamp(16px, 1.8vw, 28px)",
                  height: "clamp(16px, 1.8vw, 28px)",
                  color: "#ff5722",
                  display: "inline-block",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "100%", height: "100%", display: "block" }}
                >
                  <path d="M12 1.5a1.5 1.5 0 0 1 1.5 1.5v6.086l4.303-4.303a1.5 1.5 0 0 1 2.122 2.122L15.62 11.21h6.08a1.5 1.5 0 0 1 0 3h-6.08l4.305 4.303a1.5 1.5 0 1 1-2.122 2.122L13.5 16.329v6.086a1.5 1.5 0 0 1-3 0v-6.086L6.197 20.634a1.5 1.5 0 0 1-2.122-2.122L8.38 14.21H2.3a1.5 1.5 0 0 1 0-3h6.08L4.075 6.907a1.5 1.5 0 0 1 2.122-2.122L10.5 9.088V3A1.5 1.5 0 0 1 12 1.5Z" />
                </svg>
              </span>
            </span>
          </span>
        </div>
      </div>

      {/* Bottom Center Subtitle Line */}
      <div
        className="hero-footer-subline"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "clamp(30px, 4.5vh, 55px)",
          zIndex: 10,
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <span className="hero-pulsing-dot" />
        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(12px, 1.1vw, 15px)",
            color: toggleActive ? "#D1D5DB" : "#374151",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            transition: "color 0.45s ease",
          }}
        >
          {" "}
          <strong style={{ color: toggleActive ? "#FFFFFF" : "#111827", fontWeight: 800, transition: "color 0.45s ease" }}>
            Full Stack Developer {"&"} AI Engineer
          </strong>{" "}

        </p>
      </div>

    </section>
  );
}
