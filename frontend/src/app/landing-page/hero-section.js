"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const tagRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(tagRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.8,
    })
      .from(
        nameRef.current,
        {
          opacity: 0,
          y: 35,
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        roleRef.current,
        {
          opacity: 0,
          y: 20,
          letterSpacing: "0.4em",
          duration: 0.9,
        },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@1,500;1,600&display=swap');
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-border-pill {
          position: relative;
          overflow: hidden;
          border-radius: 99px;
          padding: 1px;
          display: inline-block;
          margin-bottom: 40px;
          cursor: pointer;
          background: linear-gradient(110deg, #ff007f, #0055ff, #1a1a1a, #1a1a1a, #ffaa00);
          background-size: 300% 300%;
          animation: gradient-shift 5s ease infinite;
          box-shadow: -10px 0px 30px -10px rgba(255, 0, 128, 0.4), -10px 10px 30px -10px rgba(255, 170, 0, 0.3);
        }
        .animated-border-pill::after {
          content: "";
          position: absolute;
          bottom: 0; left: 0; right: 0; top: 0;
          background: linear-gradient(70deg, #ffaa00, transparent, #ff007f);
          background-size: 300% 300%;
          animation: gradient-shift 5s ease infinite;
          border-radius: 99px;
          z-index: 0;
          opacity: 0.6;
        }
        .animated-border-pill-content {
          position: relative;
          background: #0f0f0f;
          border-radius: 99px;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1;
          transition: background 0.3s ease;
        }
        .animated-border-pill:hover .animated-border-pill-content {
          background: #1a1a1a;
        }
      `}</style>

      {/* Main Hero Center Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Top Pill / Status Badge */}
        <a
          ref={tagRef}
          href="https://nexio-hub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-border-pill"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            marginBottom: "16px"
          }}
        >
          <div className="animated-border-pill-content" style={{ padding: "8px 20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))" }}
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <span style={{ fontSize: "12px", color: "#e5e7eb", fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>
              Nexio-hub
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "2px", opacity: 0.8 }}
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </a>

        {/* Big Bold Name */}
        <h1
          ref={nameRef}
          style={{
            fontSize: "clamp(60px, 15vw, 160px)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            margin: "0",
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "normal"
          }}
        >
          NITHESH KUMAR
        </h1>

        {/* Subtitle / Role */}
        <div ref={roleRef} style={{ marginTop: "48px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "clamp(10px, 1.2vw, 16px)",
              color: "#9ca3af",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
              fontWeight: 600
            }}
          >
            DEVELOPER
          </p>
          <p
            style={{
              fontSize: "clamp(10px, 1.2vw, 16px)",
              color: "#9ca3af",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              margin: "0 0 16px 0",
              fontWeight: 600
            }}
          >
            DESIGN AND BUILD PRODUCTS THAT
          </p>
          <p
            style={{
              fontSize: "clamp(36px, 4.5vw, 64px)",
              color: "#ffffff",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              margin: 0,
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}
          >
            deliver real impact.
          </p>
        </div>
      </div>

      {/* Bottom Left: Location / Status */}
      <div
        style={{
          position: "absolute",
          left: "clamp(20px, 4vw, 48px)",
          bottom: "clamp(24px, 4vh, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          textAlign: "center",
          zIndex: 20,
        }}
      >
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#9ca3af", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 }}>
          AVAILABLE FOR<br /><span style={{ color: "#fff" }}>FREELANCE</span>
        </div>
      </div>

      {/* Bottom Right: Role */}
      <div
        style={{
          position: "absolute",
          right: "clamp(20px, 4vw, 48px)",
          bottom: "clamp(24px, 4vh, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          textAlign: "center",
          zIndex: 20,
        }}
      >
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#9ca3af", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 }}>
          Full Stack Dev<br /><span style={{ color: "#fff" }}>& DESIGNER</span>
        </div>
      </div>
    </section>
  );
}
