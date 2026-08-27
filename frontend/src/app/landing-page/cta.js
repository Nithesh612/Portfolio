"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Small parallax for the glowing orb
  const orbY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: "#f9f9f9",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`
        .cta-inner-container {
          flex-direction: row;
          text-align: left;
          flex-wrap: nowrap !important;
          gap: 40px;
        }
        .cta-text-container {
          align-items: flex-start;
          flex: 1;
        }
        .cta-orb-container {
          width: clamp(130px, 16vw, 190px);
          height: clamp(130px, 16vw, 190px);
        }
        @media (max-width: 768px) {
          .cta-inner-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 16px !important;
          }
          .cta-orb-container {
            width: clamp(70px, 22vw, 130px) !important;
            height: clamp(70px, 22vw, 130px) !important;
            flex-shrink: 0;
          }
        }
      `}</style>
      <div
        className="cta-inner-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left Side: Text */}
        <motion.div
          className="cta-text-container"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 6vw, 84px)",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Building Future
          </h2>
          <h2
            style={{
              fontSize: "clamp(26px, 6vw, 84px)",
              fontWeight: 800,
              background: "linear-gradient(135deg, #e11d48 0%, #f43f5e 35%, #fb7185 65%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Digital Experiences.
          </h2>
        </motion.div>

        {/* Right Side: 3D Iridescent Liquid Glass Orb */ }
  <motion.div
    style={{ y: orbY, position: "relative", zIndex: 1 }}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <style>{`
            @keyframes glass-morph {
              0% {
                border-radius: 60% 40% 65% 35% / 45% 65% 35% 55%;
                transform: rotate(0deg) scale(1);
              }
              25% {
                border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
                transform: rotate(90deg) scale(1.02);
              }
              50% {
                border-radius: 40% 60% 55% 45% / 45% 55% 50% 50%;
                transform: rotate(180deg) scale(0.99);
              }
              75% {
                border-radius: 55% 45% 45% 55% / 50% 60% 40% 50%;
                transform: rotate(270deg) scale(1.02);
              }
              100% {
                border-radius: 60% 40% 65% 35% / 45% 65% 35% 55%;
                transform: rotate(360deg) scale(1);
              }
            }

            @keyframes sheen-rotate {
              0% {
                filter: hue-rotate(0deg);
              }
              50% {
                filter: hue-rotate(25deg);
              }
              100% {
                filter: hue-rotate(0deg);
              }
            }

            .glass-orb-container {
              cursor: pointer;
            }

            .glass-orb {
              width: 74%;
              height: 74%;
              position: relative;
              background: radial-gradient(circle at 45% 45%, #ffffff 0%, #f1f4f8 45%, #e2e8f0 75%, rgba(226, 232, 240, 0.6) 100%);
              border-radius: 60% 40% 65% 35% / 45% 65% 35% 55%;
              box-shadow: 
                inset 3px 5px 10px rgba(255, 255, 255, 0.95),
                inset -3px -5px 10px rgba(255, 255, 255, 0.8),
                inset 14px 18px 30px rgba(217, 70, 239, 0.75),
                inset 24px 30px 48px rgba(168, 85, 247, 0.45),
                inset -14px -18px 30px rgba(56, 189, 248, 0.85),
                inset -24px -30px 48px rgba(2, 132, 199, 0.45),
                0 10px 25px rgba(217, 70, 239, 0.15),
                0 10px 30px rgba(56, 189, 248, 0.2);
              animation: glass-morph 16s ease-in-out infinite, sheen-rotate 24s ease-in-out infinite;
              transform-origin: center center;
              transition: box-shadow 1.2s cubic-bezier(0.25, 1, 0.5, 1), filter 1.2s cubic-bezier(0.25, 1, 0.5, 1);
            }

            /* Specular rim gloss highlight */
            .glass-orb::before {
              content: "";
              position: absolute;
              inset: 3px;
              border-radius: inherit;
              background: radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 30%, transparent 60%);
              pointer-events: none;
              transition: opacity 1.2s ease;
            }

            .glass-orb-container:hover .glass-orb {
              filter: brightness(1.04) contrast(1.02);
              box-shadow: 
                inset 4px 6px 12px rgba(255, 255, 255, 1),
                inset -4px -6px 12px rgba(255, 255, 255, 0.9),
                inset 18px 22px 36px rgba(217, 70, 239, 0.85),
                inset 30px 38px 56px rgba(168, 85, 247, 0.55),
                inset -18px -22px 36px rgba(56, 189, 248, 0.95),
                inset -30px -38px 56px rgba(2, 132, 199, 0.55),
                0 15px 35px rgba(217, 70, 239, 0.25),
                0 15px 40px rgba(56, 189, 248, 0.3);
            }
          `}</style>

    {/* Outer Soft Grey Circular Backdrop */}
    <div
      className="glass-orb-container"
      style={{
        width: "clamp(130px, 16vw, 190px)",
        height: "clamp(130px, 16vw, 190px)",
        borderRadius: "50%",
        backgroundColor: "#eceef1",
        boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 20px rgba(0,0,0,0.02)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Inner 3D Glass Liquid Droplet */}
      <div className="glass-orb" />
    </div>
  </motion.div>

      </div >
    </section >
  );
}
