"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);
  const roleRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(tagRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.8,
      })
        .from(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.9,
            ease: "power2.inOut",
          },
          "-=0.4"
        )
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Inter:wght@400;600;700&display=swap');
      `}</style>

      {/* Main Hero Center Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "950px",
          width: "100%",
          textAlign: "center",
          marginTop: "-2vh",
        }}
      >
        {/* Top Tagline with Accent Line: "Hi I am ───" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
            maxWidth: "680px",
            marginBottom: "8px",
          }}
        >
          <span
            ref={tagRef}
            style={{
              color: "#9ca3af",
              fontSize: "clamp(15px, 1.8vw, 22px)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.22em",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            Hi I am
          </span>
          <div
            ref={lineRef}
            style={{
              flex: 1,
              height: "3px",
              backgroundColor: "#f59e0b",
              borderRadius: "2px",
              boxShadow: "0 0 12px rgba(245, 158, 11, 0.4)",
            }}
          />
        </div>

        {/* Big Bold Name */}
        <h1
          ref={nameRef}
          style={{
            fontSize: "clamp(48px, 9.5vw, 130px)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 12px 0",
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          Nithesh Kumar
        </h1>

        {/* Subtitle / Role with golden accent aligned to the right side of center */}
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            ref={roleRef}
            style={{
              textAlign: "right",
              color: "#f59e0b",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(12px, 1.4vw, 18px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            <div>A FULL STACK</div>
            <div>DEVELOPER</div>
          </div>
        </div>
      </div>

      {/* Right Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          right: "clamp(20px, 4vw, 48px)",
          bottom: "clamp(24px, 4vh, 40px)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transform: "rotate(90deg)",
          transformOrigin: "right center",
          color: "#9ca3af",
          fontSize: "12px",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          zIndex: 20,
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: "24px",
            height: "1px",
            backgroundColor: "#9ca3af",
          }}
        />
      </div>
    </section>
  );
}
