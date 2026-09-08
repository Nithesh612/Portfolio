"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Menu({ offcanvasOpen, setOffcanvasOpen }) {
  const [hoveredNav, setHoveredNav] = useState(null);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (offcanvasOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [offcanvasOpen]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setOffcanvasOpen(false); // Close menu
    document.body.style.overflow = "";
    document.body.style.touchAction = "";

    // Smoothly scroll after drawer starts closing
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const element = document.querySelector(targetId);
        if (element) {
          const targetY = element.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: "smooth",
          });
        } else if (targetId.startsWith("#")) {
          window.location.hash = targetId;
        } else {
          window.location.href = targetId;
        }
      }
    }, 280);
  };

  const navItems = [
    { num: "01", title: "HOME", href: "#home" },
    { num: "02", title: "ABOUT", href: "#about" },
    { num: "03", title: "PROJECTS", href: "#showcase", subItems: [{ title: "VIEW ALL PROJECTS", href: "/Project" }] },
    { num: "04", title: "SERVICES", href: "#services" },
    { num: "05", title: "WORK", href: "#works" },
    { num: "06", title: "CONTACT", href: "#contact" },
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && offcanvasOpen) {
        setOffcanvasOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [offcanvasOpen]);

  // Framer Motion Animation Variants for Smooth, Snappy Right-Side Slide In & Out
  const cardVariants = {
    hidden: {
      x: "100%",
      opacity: 0.8,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.04,
        delayChildren: 0.08,
      },
    },
    exit: {
      x: "100%",
      opacity: 0.8,
      transition: {
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 16, x: 8 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: 8,
      x: 8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {offcanvasOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            onClick={() => setOffcanvasOpen(false)}
          />

          {/* White Menu Card revealing from top-right corner */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "min(460px, 100vw)",
              height: "100vh",
              minHeight: "100vh",
              maxHeight: "100vh",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderTopLeftRadius: "28px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "28px",
              borderBottomRightRadius: "0px",
              padding: "clamp(28px, 5vw, 40px) clamp(22px, 6vw, 44px) clamp(24px, 4vw, 36px)",
              boxShadow: "-15px 0px 50px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontFamily: "var(--font-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
              overflowY: "auto",
              willChange: "transform",
            }}
          >
            {/* 1. Header: Discover + Close Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#6b7280",
                  fontFamily: "monospace",
                }}
              >
                <span style={{ fontSize: "9px" }}>■</span> DISCOVER
              </div>

              {/* Close Button */}
              <button
                onClick={() => setOffcanvasOpen(false)}
                type="button"
                aria-label="Close menu"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#111827",
                  transition: "all 0.25s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.transform = "rotate(90deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.transform = "rotate(0deg)";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* 2. Vertically Centered Navigation Links */}
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "auto 0",
                padding: "24px 0",
              }}
            >
              {navItems.map((item) => (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredNav(item.num)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <motion.a
                    variants={linkVariants}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        handleScroll(e, item.href);
                      } else {
                        setOffcanvasOpen(false);
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      textDecoration: "none",
                      color: "#000000",
                      transition: "transform 0.2s ease, color 0.2s ease",
                      padding: "3px 0",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(8px)";
                      const titleEl = e.currentTarget.querySelector(".menu-nav-title");
                      if (titleEl) titleEl.style.color = "#ff5722";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      const titleEl = e.currentTarget.querySelector(".menu-nav-title");
                      if (titleEl) titleEl.style.color = "#000000";
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#9ca3af",
                        fontFamily: "monospace",
                        width: "36px",
                        display: "inline-block",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="menu-nav-title"
                      style={{
                        fontSize: "clamp(34px, 4.8vw, 44px)",
                        fontWeight: 900,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.15,
                        textTransform: "uppercase",
                        color: "#000000",
                        transition: "color 0.2s ease",
                        fontFamily: "'Anton', 'Poppins', sans-serif",
                      }}
                    >
                      {item.title}
                    </span>
                  </motion.a>
                  
                  {item.subItems && (
                    <div style={{ paddingLeft: "36px", marginTop: "4px", marginBottom: "4px" }}>
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          onClick={() => {
                            setOffcanvasOpen(false);
                            document.body.style.overflow = "";
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "11.5px",
                            fontWeight: 700,
                            fontFamily: "monospace",
                            letterSpacing: "0.08em",
                            color: "#ff5722",
                            textDecoration: "none",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(255, 87, 34, 0.08)",
                            border: "1px solid rgba(255, 87, 34, 0.2)",
                            cursor: "pointer",
                            transition: "all 0.2s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff5722";
                            e.currentTarget.style.color = "#ffffff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 87, 34, 0.08)";
                            e.currentTarget.style.color = "#ff5722";
                          }}
                        >
                          ↳ {sub.title} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 3. Bottom Section */}
            <div>
              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#f3f4f6",
                  marginBottom: "22px",
                }}
              />

              {/* Footer Links & Info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  fontFamily: "monospace",
                }}
              >
                {/* Social Icon Badges (LinkedIn, GitHub, Globe) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/nithesh-kumar-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111827",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0a66c2";
                      e.currentTarget.style.borderColor = "#0a66c2";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(10, 102, 194, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#e5e7eb";
                      e.currentTarget.style.color = "#111827";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.04)";
                    }}
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/nithesh612"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111827",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#24292e";
                      e.currentTarget.style.borderColor = "#24292e";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(36, 41, 46, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#e5e7eb";
                      e.currentTarget.style.color = "#111827";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.04)";
                    }}
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                    </svg>
                  </a>

                  {/* Globe / Portfolio */}
                  <a
                    href="https://www.nithesh-kumar.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111827",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ff5722";
                      e.currentTarget.style.borderColor = "#ff5722";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 87, 34, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#e5e7eb";
                      e.currentTarget.style.color = "#111827";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.04)";
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                </div>

                {/* Bottom Copyright */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: "#9ca3af",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#697795ff",
                      fontWeight: 600,
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#111827" }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    EN-IN
                  </span>
                  <span>© {new Date().getFullYear()} NITHESH KUMAR R.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
