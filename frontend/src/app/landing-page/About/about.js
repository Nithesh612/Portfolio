"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TechnoDome } from "../Projects/page";

const TECH_SETS = [
  // Set 1: Frontend & Core Skills
  [
    { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  ],
  // Set 2: Backend & Database Skills
  [
    { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  // Set 3: Developer Tools & Platforms
  [
    { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  ],
];

function TypingBadge({ targetTech }) {
  const [displayText, setDisplayText] = React.useState(targetTech.name);
  const [currentIcon, setCurrentIcon] = React.useState(targetTech.icon);

  React.useEffect(() => {
    let isMounted = true;
    let timeoutId;

    // Step 1: Backspace / delete previous text
    const deleteText = (text) => {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          if (!isMounted) return;
          setDisplayText(text.slice(0, -1));
          deleteText(text.slice(0, -1));
        }, 40);
      } else {
        // Step 2: Switch icon and start typing new text
        setCurrentIcon(targetTech.icon);
        typeText("", targetTech.name);
      }
    };

    // Step 3: Type new text character by character
    const typeText = (current, target) => {
      if (current.length < target.length) {
        timeoutId = setTimeout(() => {
          if (!isMounted) return;
          const next = target.slice(0, current.length + 1);
          setDisplayText(next);
          typeText(next, target);
        }, 65);
      }
    };

    if (displayText !== targetTech.name) {
      deleteText(displayText);
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [targetTech.name, targetTech.icon]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "13px",
        fontWeight: 600,
        color: "#111827",
        whiteSpace: "nowrap",
      }}
    >
      <img src={currentIcon} alt={displayText || targetTech.name} style={{ width: "15px", height: "15px", transition: "opacity 0.2s" }} />
      <span>{displayText}</span>
    </div>
  );
}

export default function About() {
  const [activeSetIndex, setActiveSetIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSetIndex((prev) => (prev + 1) % TECH_SETS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const currentBadges = TECH_SETS[activeSetIndex];

  return (
    <div id="about">
      <section
        className="about-three-area pt-60 pb-80 position-relative z-1"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          backgroundColor: "#ffffff",
          paddingBottom: "80px",
        }}
      >
        <div className="container tw-container-1800-px">
          <div className="about-three-top position-relative z-1">
            <div className="row justify-content-center mb-4">
              <div className="col-xl-9">
                <div className="text-center">
                  <h2
                    className="about-three-title text-heading fw-bold font-heading"
                    style={{
                      fontSize: "clamp(48px, 7vw, 90px)",
                      fontWeight: "900",
                      fontFamily: "var(--font-display, 'Anton', 'Inter', sans-serif)",
                      lineHeight: "1.05",
                      textTransform: "uppercase",
                      letterSpacing: "-1.5px",
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      color: "#000000",
                    }}
                  >
                    About Me
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="about-three-thumb w-100 tw-rounded-lg">
                  <TechnoDome theme="light" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-three-right">
                  <div>
                    <div style={{ paddingLeft: "20px", marginTop: "0px", whiteSpace: "normal" }}>
                      <h3 style={{ color: "#000000", fontSize: "32px", fontWeight: "800", letterSpacing: "-0.5px", marginBottom: "16px", fontFamily: "'Inter', sans-serif", whiteSpace: "normal" }}>
                        Nice to meet you. I&apos;m{" "}
                        <span
                          style={{
                            background: "linear-gradient(135deg, #e11d48 0%, #f43f5e 25%, #fb7185 50%, #f97316 75%, #f59e0b 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "900",
                          }}
                        >
                          Nithesh Kumar
                        </span>
                      </h3>
                      <h4
                        style={{
                          background: "linear-gradient(135deg, #e11d48 0%, #f43f5e 35%, #fb7185 65%, #f97316 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: "19px",
                          fontWeight: "700",
                          marginBottom: "20px",
                          fontFamily: "'Inter', sans-serif",
                          whiteSpace: "normal",
                          display: "inline-block",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Full Stack Developer
                      </h4>
                      <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 20px 0", fontWeight: "500", whiteSpace: "normal", wordWrap: "break-word" }}>
                        I&apos;m a creative and motivated Full Stack Developer with a strong passion for building modern, responsive, and user-friendly web applications. I thrive on exploring new challenges and opportunities that push the boundaries of my coding skills. Known for bridging the gap between elegant frontend interfaces and robust backend architectures, I focus on delivering impactful digital solutions.
                      </p>
                      <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 24px 0", fontWeight: "500", whiteSpace: "normal", wordWrap: "break-word" }}>
                        With experience across Next.js, React, Node.js, and modern databases, my approach is clean, strategic, and performance-focused. I am constantly exploring new technologies like Cloud Architectures and AI integrations to sharpen my technical thinking. Let&apos;s work together to bring your vision to life.
                      </p>

                      {/* Skill Badges (Static 5 Boxes with Real-time Typing Effect) */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "26px" }}>
                        {[0, 1, 2, 3, 4].map((slotIdx) => {
                          const tech = currentBadges[slotIdx];
                          return (
                            <div
                              key={slotIdx}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "116px",
                                height: "38px",
                                padding: "0 18px",
                                borderRadius: "9999px",
                                backgroundColor: "#f3f4f6",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                position: "relative",
                              }}
                            >
                              <TypingBadge targetTech={tech} />
                            </div>
                          );
                        })}
                      </div>

                      {/* Action Buttons: PROJECTS & RESUME */}
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px", marginTop: "16px", marginBottom: "20px" }}>
                        <a
                          href="#showcase"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "#000000",
                            color: "#ffffff",
                            padding: "12px 28px",
                            fontSize: "11px",
                            textTransform: "uppercase",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            border: "1.5px solid #000000",
                            transition: "all 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff5722";
                            e.currentTarget.style.borderColor = "#ff5722";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#000000";
                            e.currentTarget.style.borderColor = "#000000";
                          }}
                        >
                          PROJECTS
                        </a>

                        <a
                          href="/Nithesh_Kumar_Resume.pdf"
                          download="Nithesh_Kumar_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "#000000",
                            color: "#ffffff",
                            padding: "12px 28px",
                            fontSize: "11px",
                            textTransform: "uppercase",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            border: "1.5px solid #000000",
                            transition: "all 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff5722";
                            e.currentTarget.style.borderColor = "#ff5722";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#000000";
                            e.currentTarget.style.borderColor = "#000000";
                          }}
                        >
                          <span>RESUME</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
