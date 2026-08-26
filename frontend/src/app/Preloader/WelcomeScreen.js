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
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
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
        exit={{ 
          opacity: 0,
          y: -50,
          transition: {
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }
        }}
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
              color: "#ffffff",
              textTransform: "uppercase"
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
            www.nithesh-kumar.vercel.app
          </motion.span>

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ marginLeft: "2px" }}
          >
            |
          </motion.span>
        </motion.div>

        {/* New Glowing Loading Bar */}
        <div style={{ marginTop: "40px", width: "320px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "#60a5fa", fontSize: "12px", letterSpacing: "0.3em", fontWeight: 600 }}>LOADING</span>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>
            {/* Bar Track */}
            <div
              style={{
                flex: 1,
                background: "rgba(59, 130, 246, 0.15)",
                height: "4px",
                borderRadius: "9999px",
                position: "relative",
              }}
            >
              {/* Animated Progress Fill */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)",
                  borderRadius: "9999px",
                  position: "relative",
                  boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                }}
              >
                {/* Glowing Dot at the tip */}
                <div
                  style={{
                    position: "absolute",
                    right: "-3px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    boxShadow: "0 0 12px 4px rgba(96, 165, 250, 0.8)"
                  }}
                />
              </motion.div>
            </div>

            {/* Percentage Text */}
            <div style={{ color: "#60a5fa", fontSize: "14px", fontWeight: 600, fontFamily: "monospace", minWidth: "35px" }}>
              <PercentageCounter />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Subcomponent to handle the number animation cleanly
function PercentageCounter() {
  const { useMotionValue, useTransform, animate } = require("framer-motion");
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (v) => `${v}%`);

  React.useEffect(() => {
    const controls = animate(count, 100, { duration: 4.2, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [count, animate]);

  return <motion.span>{display}</motion.span>;
}
