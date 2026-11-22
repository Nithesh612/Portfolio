"use client";
import React, { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Menu({ offcanvasOpen, setOffcanvasOpen }) {
  // Lock background scroll without layout shift or reflow lag
  useEffect(() => {
    if (offcanvasOpen) {
      // Compensate for scrollbar width so hiding it doesn't cause a 17px layout shift across the DOM
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [offcanvasOpen]);

  // Smooth scroll handler with offset
  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    setOffcanvasOpen(false); // Close menu
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";

    // Smoothly scroll after drawer starts closing
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const element = document.querySelector(targetId);
        if (element) {
          if (window.gsap && window.ScrollToPlugin) {
            window.gsap.to(window, {
              duration: 0.9,
              scrollTo: { y: element, offsetY: 70 },
              ease: "power2.inOut",
            });
          } else {
            const targetY = element.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({
              top: Math.max(0, targetY),
              behavior: "smooth",
            });
          }
        } else if (targetId.startsWith("#")) {
          window.location.hash = targetId;
        } else {
          window.location.href = targetId;
        }
      }
    }, 240);
  }, [setOffcanvasOpen]);

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
  }, [offcanvasOpen, setOffcanvasOpen]);

  // Ultra-smooth 60/120 FPS animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.22, ease: "easeIn" },
    },
  };

  const cardVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.34,
        ease: [0.16, 1, 0.3, 1], // Fluid iOS-style deceleration curve
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.25,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {offcanvasOpen && (
        <motion.div
          key="offcanvas-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
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
          {/* CSS Styles for zero-JS-overhead, buttery-smooth interactions */}
          <style>{`
            .offcanvas-close-btn {
              width: 38px;
              height: 38px;
              border-radius: 50%;
              border: 1px solid #e5e7eb;
              background-color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              color: #111827;
              transition: transform 0.25s ease, background-color 0.2s ease, border-color 0.2s ease;
              padding: 0;
            }
            .offcanvas-close-btn:hover {
              background-color: #f3f4f6;
              border-color: #d1d5db;
              transform: rotate(90deg);
            }
            .offcanvas-nav-link {
              display: flex;
              align-items: baseline;
              text-decoration: none;
              color: #000000;
              padding: 3px 0;
              cursor: pointer;
              transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .offcanvas-nav-link:hover {
              transform: translateX(8px);
            }
            .offcanvas-nav-link:hover .offcanvas-nav-title {
              color: #ff5722 !important;
            }
            .offcanvas-nav-num {
              font-size: 13px;
              font-weight: 500;
              color: #9ca3af;
              font-family: monospace;
              width: 36px;
              display: inline-block;
              letter-spacing: 0.05em;
              flex-shrink: 0;
            }
            .offcanvas-nav-title {
              font-size: clamp(34px, 4.8vw, 44px);
              font-weight: 900;
              letter-spacing: -0.03em;
              line-height: 1.15;
              text-transform: uppercase;
              color: #000000;
              transition: color 0.2s ease;
              font-family: 'Anton', 'Poppins', sans-serif;
            }
            .offcanvas-sub-pill {
              display: inline-flex;
              align-items: center;
              font-size: 11.5px;
              font-weight: 700;
              font-family: monospace;
              letter-spacing: 0.08em;
              color: #ff5722;
              text-decoration: none;
              padding: 4px 10px;
              border-radius: 9999px;
              background-color: rgba(255, 87, 34, 0.08);
              border: 1px solid rgba(255, 87, 34, 0.2);
              cursor: pointer;
              transition: all 0.2s ease;
            }
            .offcanvas-sub-pill:hover {
              background-color: #ff5722;
              color: #ffffff;
            }
            .offcanvas-social-btn {
              width: 38px;
              height: 38px;
              border-radius: 50%;
              border: 1px solid #e5e7eb;
              background-color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #111827;
              text-decoration: none;
              transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
            }
            .offcanvas-social-btn.linkedin:hover {
              background-color: #0a66c2;
              border-color: #0a66c2;
              color: #ffffff;
              transform: translateY(-2px);
              box-shadow: 0 6px 16px rgba(10, 102, 194, 0.35);
            }
            .offcanvas-social-btn.github:hover {
              background-color: #24292e;
              border-color: #24292e;
              color: #ffffff;
              transform: translateY(-2px);
              box-shadow: 0 6px 16px rgba(36, 41, 46, 0.35);
            }
            .offcanvas-social-btn.globe:hover {
              background-color: #ff5722;
              border-color: #ff5722;
              color: #ffffff;
              transform: translateY(-2px);
              box-shadow: 0 6px 16px rgba(255, 87, 34, 0.35);
            }
          `}</style>

          {/* Dark Backdrop */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              cursor: "pointer",
            }}
            onClick={() => setOffcanvasOpen(false)}
          />

          {/* White Menu Card revealing from right side */}
          <motion.div
            key="offcanvas-card"
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
              padding: "clamp(24px, 4vw, 36px) clamp(20px, 5vw, 40px)",
              boxShadow: "-15px 0px 50px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontFamily: "var(--font-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
              overflowY: "auto",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              willChange: "transform",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
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
                className="offcanvas-close-btn"
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
                <div key={item.num} style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        handleScroll(e, item.href);
                      } else {
                        setOffcanvasOpen(false);
                      }
                    }}
                    className="offcanvas-nav-link"
                  >
                    <span className="offcanvas-nav-num">
                      {item.num}
                    </span>
                    <span className="offcanvas-nav-title">
                      {item.title}
                    </span>
                  </a>
                  
                  {item.subItems && (
                    <div style={{ paddingLeft: "36px", marginTop: "4px", marginBottom: "4px" }}>
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          onClick={() => {
                            setOffcanvasOpen(false);
                            document.body.style.paddingRight = "";
                            document.body.style.overflow = "";
                          }}
                          className="offcanvas-sub-pill"
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
                    className="offcanvas-social-btn linkedin"
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
                    className="offcanvas-social-btn github"
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
                    className="offcanvas-social-btn globe"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
