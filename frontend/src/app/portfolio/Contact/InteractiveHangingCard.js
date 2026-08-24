"use client";
import React, { useState, useRef, useEffect } from "react";

export default function InteractiveHangingCard({ isOpen, onClose }) {
  const cardRef = useRef(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -16;
    const rY = ((x - centerX) / centerX) * 16;

    setRotX(rX);
    setRotY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  if (!isOpen) return null;

  return (
    <div
      className="hanging-card-wrapper"
      style={{
        position: "absolute",
        top: "40px",
        right: "5%",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: "cardDropSwing 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        pointerEvents: "auto",
      }}
    >
      {/* Lanyard Strap */}
      <div
        style={{
          width: "28px",
          height: "110px",
          background: "linear-gradient(90deg, #ff5722 0%, #ff8a65 30%, #e64a19 70%, #ff5722 100%)",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.5), 0 4px 15px rgba(0,0,0,0.6)",
          position: "relative",
          borderRadius: "4px 4px 0 0",
          borderLeft: "1px dashed rgba(255,255,255,0.4)",
          borderRight: "1px dashed rgba(255,255,255,0.4)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(90deg)",
            fontSize: "8px",
            fontFamily: "monospace",
            fontWeight: "900",
            letterSpacing: "0.2em",
            color: "#ffffff",
            whiteSpace: "nowrap",
            textShadow: "0 1px 2px rgba(0,0,0,0.8)",
          }}
        >
          DEVELOPER
        </span>
      </div>

      {/* Metal Lanyard Clip */}
      <div
        style={{
          width: "36px",
          height: "18px",
          background: "linear-gradient(180deg, #d4d4d8 0%, #71717a 50%, #27272a 100%)",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.4)",
          position: "relative",
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: "14px",
          height: "20px",
          border: "3px solid #a1a1aa",
          borderTop: "none",
          borderRadius: "0 0 10px 10px",
          marginTop: "-4px",
          marginBottom: "-6px",
          zIndex: 3,
        }}
      />

      {/* 3D Tilt Badge Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "310px",
          height: "450px",
          borderRadius: "24px",
          position: "relative",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: isHovered
            ? `0 35px 80px rgba(0,0,0,0.9), 0 0 40px rgba(255, 87, 34, 0.35)`
            : `0 25px 60px rgba(0,0,0,0.8), 0 0 25px rgba(255, 87, 34, 0.15)`,
          cursor: "grab",
        }}
      >
        {/* Physical Badge Body */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #18181b 0%, #09090b 50%, #000000 100%)",
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            color: "#ffffff",
          }}
        >
          {/* Holographic Sheen Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 87, 34, 0.1) 40%, transparent 70%)`,
              pointerEvents: "none",
              borderRadius: "24px",
            }}
          />

          {/* Badge Top Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5722", boxShadow: "0 0 10px #ff5722" }} />
              <span style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", fontWeight: "700" }}>
                PASSPORT · 2026
              </span>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#ff5722"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
            >
              ✕
            </button>
          </div>

          {/* Central Profile Card Section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "10px 0", position: "relative", zIndex: 5 }}>
            {/* Photo Avatar */}
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "22px",
                overflow: "hidden",
                border: "2px solid #ff5722",
                boxShadow: "0 8px 25px rgba(255,87,34,0.3)",
                marginBottom: "14px",
                background: "#1f1f23",
              }}
            >
              <img
                src="/favicon.ico"
                alt="Nithesh Kumar R"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: "0 0 4px 0", letterSpacing: "-0.02em" }}>
              Nithesh Kumar R
            </h3>
            <p style={{ fontSize: "11px", fontWeight: "700", color: "#ff8a65", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 4px 0" }}>
              Full Stack & UI Developer
            </p>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
              MCA · Chennai, India
            </span>
          </div>

          {/* Micro Skill Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "6px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "14px",
              padding: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
              zIndex: 5,
            }}
          >
            {["Next.js", "React.js", "TypeScript", "Tailwind"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Barcode & Security Chip Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)", position: "relative", zIndex: 5 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Simulated Micro Barcode */}
              <div style={{ display: "flex", gap: "2px", height: "16px", opacity: 0.7 }}>
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3].map((w, i) => (
                  <span key={i} style={{ width: `${w}px`, background: "#fff", height: "100%", display: "inline-block" }} />
                ))}
              </div>
              <span style={{ fontSize: "8px", fontFamily: "monospace", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                DEV-9842-2026
              </span>
            </div>

            <div
              style={{
                width: "28px",
                height: "22px",
                borderRadius: "4px",
                background: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
                border: "1px solid #fde047",
                boxShadow: "0 0 10px rgba(234, 179, 8, 0.4)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cardDropSwing {
          0% {
            transform: translateY(-130%) rotate(-12deg);
            opacity: 0;
          }
          50% {
            transform: translateY(10%) rotate(5deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-4%) rotate(-2deg);
          }
          100% {
            transform: translateY(0%) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
