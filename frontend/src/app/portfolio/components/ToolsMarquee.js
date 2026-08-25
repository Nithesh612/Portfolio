"use client";
import React from "react";
import { motion } from "framer-motion";

const techIcons = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
];

export default function ToolsMarquee() {
  const marqueeItems = [...techIcons, ...techIcons, ...techIcons];

  return (
    <section
      className="tools-marquee-area position-relative z-1"
      style={{
        backgroundColor: "#121212",
        border: "none",
        overflow: "hidden",
        width: "100%",
        padding: "32px 0",
      }}
    >
      <div className="tools-marquee-wrapper" style={{ display: "flex", whiteSpace: "nowrap", position: "relative" }}>
        <motion.div
          className="d-flex align-items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 22,
          }}
          style={{ gap: "56px", paddingRight: "56px" }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "48px",
                height: "48px",
                opacity: 0.75,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                filter: "grayscale(10%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.25)";
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.75";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "grayscale(10%)";
              }}
              title={item.name}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: "36px",
                  height: "36px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle edge fades */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "12%",
          background: "linear-gradient(to right, #121212, transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "12%",
          background: "linear-gradient(to left, #121212, transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </section>
  );
}
