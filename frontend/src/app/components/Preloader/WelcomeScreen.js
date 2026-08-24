"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      {/* Background Glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "440px",
            height: "440px",
            background: "rgba(255, 255, 255, 0.08)",
            filter: "blur(120px)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-80px",
            width: "320px",
            height: "320px",
            background: "rgba(255, 255, 255, 0.04)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "relative",
          textAlign: "center",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          maxWidth: "380px",
        }}
      >
        {/* Top 3 Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}
        >
          {/* 1. Code2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.3, rotate: -140, y: 60 },
              visible: { opacity: 1, scale: 1, rotate: 0, y: 0 },
            }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08 }}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.05)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </motion.div>

          {/* 2. User */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.3, rotate: -140, y: 60 },
              visible: { opacity: 1, scale: 1, rotate: 0, y: 0 },
            }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08 }}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.05)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </motion.div>

          {/* 3. Globe */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.3, rotate: -140, y: 60 },
              visible: { opacity: 1, scale: 1, rotate: 0, y: 0 },
            }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08 }}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.05)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            <motion.span
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.9,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: "clamp(22px, 5vw, 34px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Welcome
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.1,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: "clamp(22px, 5vw, 34px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              to my
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(24px, 6vw, 38px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              textAlign: "center",
              margin: 0,
            }}
          >
            Portfolio Website
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 1.7,
            duration: 1,
          }}
          style={{
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: "0.03em",
            margin: 0,
          }}
        >
          Creating Websites That Feel Alive.
        </motion.p>

        {/* Website Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.9,
            duration: 0.5,
          }}
          style={{
            padding: "8px 18px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            fontSize: "12px",
            letterSpacing: "0.25em",
            color: "rgba(255, 255, 255, 0.7)",
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.04)",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <motion.span
            initial={{ width: "0ch" }}
            animate={{ width: "20ch" }}
            transition={{
              delay: 2.1,
              duration: 1.8,
              ease: "easeInOut",
            }}
            style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
          >
            www.nithesh.dev
          </motion.span>

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ marginLeft: "2px" }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Bottom Loading Line */}
        <div
          style={{
            marginTop: "35px",
            width: "240px",
            background: "rgba(255, 255, 255, 0.15)",
            height: "2px",
            overflow: "hidden",
            borderRadius: "9999px",
          }}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ height: "100%", backgroundColor: "#ffffff" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
