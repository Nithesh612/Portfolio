"use client";
import React, { useState } from "react";
import Image from "next/image";
import Menu from "../../menu/menu";

export default function Header() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const element = document.querySelector(targetId);
      if (window.ScrollSmoother) {
        const smoother = window.ScrollSmoother.get();
        if (smoother && element) {
          smoother.scrollTo(targetId, true);
          return;
        }
      }
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  return (
    <>
      <Menu offcanvasOpen={offcanvasOpen} setOffcanvasOpen={setOffcanvasOpen} />
      {/* Right Section: Fixed Pill Menu */}
      <div
        style={{
          position: "fixed",
          top: "24px",
          right: "32px",
          zIndex: 1050,
          display: offcanvasOpen ? "none" : "flex",
          alignItems: "center",
          gap: "16px",
          padding: "10px 16px 10px 24px",
          background: "rgba(30, 30, 30, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "9999px",
          color: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
        }}
      >
        <a
          href="/Nithesh_Kumar_Resume.pdf"
          download="Nithesh_Kumar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.5px",
            transition: "color 0.3s ease",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ff5722";
            setIsHovered(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#ffffff";
            setIsHovered(false);
          }}
        >
          <div style={{ 
            position: "relative", 
            height: "20px", 
            width: "98px", 
            overflow: "hidden",
            display: "flex",
            alignItems: "center"
          }}>
            <span style={{ 
              position: "absolute", 
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)", 
              transform: isHovered ? "translateY(-100%)" : "translateY(0)" 
            }}>
              <i className="ph ph-arrow-down" style={{ fontSize: "14px" }}></i>
              Resume
            </span>
            <span style={{ 
              position: "absolute", 
              top: "100%",
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)", 
              transform: isHovered ? "translateY(-100%)" : "translateY(0)" 
            }}>
              <i className="ph ph-download-simple" style={{ fontSize: "14px" }}></i>
              Download
            </span>
          </div>
        </a>

        <button
          suppressHydrationWarning
          onClick={() => setOffcanvasOpen(true)}
          type="button"
          style={{
            background: "transparent",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#ff5722"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
        >
          <i className="ph ph-dots-nine" style={{ fontSize: "24px" }}></i>
        </button>
      </div>
    </>
  );
}
