"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SKILLSET_ROWS = [
  // Row 1: Frontend & UI Core Skills
  [
    {
      name: "ReactJS",
      icon: (
        <svg width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "NextJS",
      icon: (
        <svg width="18" height="18" viewBox="0 0 180 180" fill="none">
          <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="black" stroke="#333" strokeWidth="6" />
            <path d="M149.508 157.438L69.8055 54H54V125.979H66.9836V69.7831L139.73 164.717C143.195 162.502 146.467 160.064 149.508 157.438Z" fill="white" />
            <rect x="115" y="54" width="13" height="72" fill="white" />
          </g>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M8.5 10v6.5c0 1.2-.8 1.8-1.9 1.8-1 0-1.6-.5-1.9-1.2l1.2-.7c.2.4.4.7.7.7.4 0 .6-.2.6-.7V10h1.3zm6.4 3.7h-1.3c0-.6-.4-1-.9-1-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1.1 1.3.6 1.9 1.2 1.9 2.2 0 1.3-1 2.2-2.4 2.2-1.3 0-2.2-.8-2.3-2l1.3-.4c.1.7.5 1.1 1 1.1.5 0 .9-.3.9-.8 0-.5-.3-.7-1.1-1.1-1.3-.6-1.9-1.2-1.9-2.1 0-1.2 1-2.1 2.2-2.1 1.1 0 2 .7 2.2 1.7z" fill="#000000" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
          <rect width="256" height="256" rx="30" fill="#3178C6" />
          <path d="M148.5 146.5C148.5 178 171.5 186.5 197 175V152.5C182 159 174.5 156.5 174.5 143.5C174.5 119.5 220 125 220 78C220 48.5 197 39 171.5 50.5V73C185 67 194 70 194 81.5C194 104 148.5 98.5 148.5 146.5ZM40 50H132V75H99V180H73V75H40V50Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "HTML5 & CSS3",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M2 2l1.5 17 8.5 3 8.5-3L22 2H2zm15.8 4.7l-.3 3.5H9.6l.2 2.3h7.4l-.6 6.5-4.6 1.3-4.6-1.3-.3-3.6h2.3l.2 1.8 2.4.7 2.4-.7.3-3H6.8L6 4.7h11.8z" fill="#E44D26" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "Vite",
      icon: (
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
          <path d="M29.8 4.6l-13 24.3c-.4.8-1.5.8-2 0L2 4.6c-.5-.9.2-2 1.2-1.8l12.4 2.3c.3.1.6.1.9 0l12.1-2.3c1-.2 1.7.9 1.2 1.8z" fill="#BD34FE" />
          <path d="M19.7 2.4l-9.3 5.4c-.4.2-.5.7-.3 1.1l3.4 6.7c.2.4.7.5 1.1.3l2.8-1.5c.4-.2.9.1.9.6l.4 6.8c0 .4.4.7.8.5l9.7-14.7c.4-.5-.1-1.2-.7-1l-8 2.2c-.5.1-.9-.3-.8-.7l.8-4.5c.1-.5-.4-.9-.8-.9h-.8z" fill="#FFD62E" />
        </svg>
      ),
    },
  ],

  // Row 2: Backend & Database Core Skills
  [
    {
      name: "NodeJS",
      icon: (
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#539E43" />
          <path d="M16 4.5L26.5 10.5V21.5L16 27.5L5.5 21.5V10.5L16 4.5Z" fill="#333333" />
          <path d="M16 7L24 11.5V20.5L16 25L8 20.5V11.5L16 7Z" fill="#539E43" />
        </svg>
      ),
    },
    {
      name: "ExpressJS",
      icon: (
        <span style={{ fontSize: "12px", fontWeight: "900", fontFamily: "monospace", color: "#ffffff", letterSpacing: "-1px" }}>
          ex
        </span>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2C6.7 2 7 4.3 7 4.3l.01 2.3h5V7.4H4.3S2 7.1 2 12.3s2 5.1 2 5.1h1.2v-1.7s-.1-2 2-2h5.1s1.9.1 1.9-1.9V4.3S12.5 2 11.9 2zm-2.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
          <path d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3l-.01-2.3h-5v-.8h7.71s2.3.3 2.3-4.9-2-5.1-2-5.1h-1.2v1.7s.1 2-2 2h-5.1s-1.9-.1-1.9 1.9v7.6s-.3 2.2.3 2.2zm2.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5C12 1.5 5 7.5 5 13.5C5 17.5 8 21 12 22.5C16 21 19 17.5 19 13.5C19 7.5 12 1.5 12 1.5Z" fill="#13AA52" />
          <path d="M12 1.5V22.5C12 22.5 18 17.5 18 13.5C18 7.5 12 1.5 12 1.5Z" fill="#108840" />
          <path d="M12 22.5V15L10.5 13.5L12 7.5L13.5 13.5L12 15V22.5Z" fill="#FAFAFA" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#00758F">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm-1-6.25c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      ),
    },
    {
      name: "Postman / REST APIs",
      icon: (
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#FF6C37" />
          <path d="M22 13.5l-6-4.5-6 4.5v7l6 4.5 6-4.5v-7z" fill="#ffffff" />
        </svg>
      ),
    },
    {
      name: "WordPress",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#21759B">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 4.225 2.624 7.84 6.36 9.283L4.99 11.838A9.957 9.957 0 0112 4c2.257 0 4.331.751 5.992 2.012L12 2zm7.643 5.485c.613 1.348.961 2.846.961 4.515 0 2.87-1.026 5.5-2.735 7.541l3.08-8.918c.287-.768.423-1.63.423-2.529 0-.21-.013-.415-.038-.619l-1.691.01zm-5.787 5.617l-2.67 7.76c.271.054.549.083.832.083 1.155 0 2.252-.249 3.243-.695l-1.405-7.148zM3.864 8.718l4.498 12.333C5.503 19.57 3.652 16.545 3.652 12c0-1.189.213-2.327.604-3.376l-.392.094z" />
        </svg>
      ),
    },
  ],
];

const TOOLS_ROW_1 = [
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Affinity", icon: "https://cdn.simpleicons.org/affinitydesigner/1B72BA" },
];

const TOOLS_ROW_2 = [
  { name: "Antigravity", icon: "https://cdn.simpleicons.org/google/8B5CF6" },
  { name: "Claude AI", icon: "https://cdn.simpleicons.org/anthropic/D97757" },
  { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/10A37F" },
  { name: "DeepSeek", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/main/packages/static-png/dark/deepseek-color.png" },
  { name: "Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/FFFFFF" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75FF" },
  { name: "Google AI Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Perplexity", icon: "https://cdn.simpleicons.org/perplexity/20B2AA" },
  { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { name: "Hermes Agent", icon: "https://cdn.simpleicons.org/huggingface/FF9D00" },
  { name: "Open Claw", icon: "https://cdn.simpleicons.org/anthropic/00C7B7" },
];

export default function Skillset() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawRotate = useTransform(scrollYProgress, [0, 1], [-135, 135]);
  const rawY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.92]);

  const rotate = useSpring(rawRotate, { stiffness: 80, damping: 24, mass: 0.3 });
  const y = useSpring(rawY, { stiffness: 80, damping: 24, mass: 0.3 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 24, mass: 0.3 });

  return (
    <section
      id="skills"
      ref={containerRef}
      style={{
        backgroundColor: "#000000",
        padding: "120px 20px 140px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "350px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(236, 72, 153, 0.04) 40%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <style>{`
          .skillset-flower-container {
            position: relative;
            width: clamp(300px, 42vw, 460px);
            height: clamp(300px, 42vw, 460px);
            margin-bottom: -220px;
          }
          @media (max-width: 768px) {
            .skillset-flower-container {
              margin-bottom: -80px;
            }
          }
        `}</style>
        {/* Top Floating 3D Sculpture with Seamless Black Shadow Fade */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="skillset-flower-container"
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              rotate,
              y,
              scale,
            }}
          >
            <Image
              src="/assets/skillset-flower.png"
              alt="Skillset 3D Emblem"
              fill
              unoptimized
              sizes="(max-width: 768px) 300px, 460px"
              priority
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))",
              }}
            />
          </motion.div>

          {/* Deep Black Gradient Fade Overlay on lower petals */}
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "-10%",
              width: "120%",
              height: "55%",
              background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.9) 70%, #000000 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </motion.div>

        {/* Soft Radial Black Shadow Vignette behind Text */}
        <div
          style={{
            position: "absolute",
            top: "220px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(380px, 55vw, 700px)",
            height: "240px",
            background: "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 50%, transparent 80%)",
            filter: "blur(25px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Section Pill Label */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "var(--font-mono, monospace)",
            marginBottom: "14px",
          }}
        >
          MY SKILLSET
        </motion.div>

        {/* Main Heading: The Magic Behind */}
        <motion.h2
          style={{
            position: "relative",
            zIndex: 10,
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 54px 0",
            color: "#ffffff",
            textTransform: "none",
            textShadow: "0 4px 25px rgba(0,0,0,0.9)",
          }}
        >
          The Magic{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Instrument Sans', serif, sans-serif",
              background: "linear-gradient(90deg, #ec4899 0%, #f43f5e 45%, #fb923c 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
              textTransform: "none",
              filter: "drop-shadow(0 0 25px rgba(236, 72, 153, 0.45))",
            }}
          >
            Behind
          </span>
        </motion.h2>

        {/* Skill Badges Rows (All 3 Rows matching reference image) */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
            width: "100%",
          }}
        >
          {SKILLSET_ROWS.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                maxWidth: "1050px",
              }}
            >
              {row.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.22)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.06)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                    backdropFilter: "blur(12px)",
                    cursor: "pointer",
                    userSelect: "none",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "20px",
                      height: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.88)",
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}

          {/* Continuous Tools Scrolling (2-Row Opposite Direction Marquees) directly below skills */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1000px",
              overflow: "hidden",
              marginTop: "24px",
              paddingTop: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            {/* Tool Row 1: Scrolls Left Smoothly & Steadily */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 48,
                  ease: "linear",
                },
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "max-content",
              }}
            >
              {[...TOOLS_ROW_1, ...TOOLS_ROW_1, ...TOOLS_ROW_1].map((tool, idx) => (
                <div
                  key={`tool-r1-${tool.name}-${idx}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                    flexShrink: 0,
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.035)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.09)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    style={{ width: "16px", height: "16px", objectFit: "contain" }}
                  />
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.88)", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Tool Row 2: Scrolls Right Smoothly & Steadily */}
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 54,
                  ease: "linear",
                },
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "max-content",
              }}
            >
              {[...TOOLS_ROW_2, ...TOOLS_ROW_2, ...TOOLS_ROW_2].map((tool, idx) => (
                <div
                  key={`tool-r2-${tool.name}-${idx}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                    flexShrink: 0,
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.035)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.09)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    style={{ width: "16px", height: "16px", objectFit: "contain" }}
                  />
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.88)", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
