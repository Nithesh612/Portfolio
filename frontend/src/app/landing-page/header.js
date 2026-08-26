"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./menus";

export default function Header() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isBookHovered, setIsBookHovered] = useState(false);
  const dropdownRef = useRef(null);

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMoreDropdownOpen(false);
    
    if (typeof window !== "undefined") {
      const element = document.querySelector(targetId);
      if (window.ScrollSmoother) {
        const smoother = window.ScrollSmoother.get();
        if (smoother && element) {
          smoother.scrollTo(targetId, true, "top top");
          return;
        }
      }
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "showcase", "skills", "services", "works", "contact"];
    const handleScrollPos = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === "skills" ? "skills" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollPos, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollPos);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "showcase", label: "Work", href: "#showcase" },
    { id: "skills", label: "Skills", href: "#skills" },
  ];

  return (
    <>
      <Menu offcanvasOpen={offcanvasOpen} setOffcanvasOpen={setOffcanvasOpen} />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9990,
          padding: "20px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pointerEvents: "none",
        }}
        className="portfolio-header-container"
      >
        <style>{`
          .portfolio-header-container {
            padding: 20px 36px;
          }
          @media (max-width: 1120px) {
            .header-center-nav {
              display: none !important;
            }
          }
          @media (max-width: 900px) {
            .portfolio-header-container {
              padding: 14px 18px !important;
            }
            .header-branding-text {
              display: none !important;
            }
            .header-book-btn-desktop {
              display: none !important;
            }
          }
          @media (max-width: 600px) {
            .header-branding-divider {
              display: none !important;
            }
          }
          @keyframes status-pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 8px #22c55e, 0 0 16px rgba(34, 197, 94, 0.5);
            }
            50% {
              transform: scale(1.25);
              box-shadow: 0 0 14px #22c55e, 0 0 24px rgba(34, 197, 94, 0.85);
            }
          }
          .nav-item-btn {
            position: relative;
            padding: 7px 16px;
            font-size: 13.5px;
            font-weight: 500;
            text-decoration: none;
            border-radius: 9999px;
            color: rgba(255, 255, 255, 0.75);
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
          }
          .nav-item-btn:hover {
            color: #ffffff;
          }
          .nav-item-btn.active {
            background-color: #ffffff;
            color: #000000 !important;
            font-weight: 700;
            box-shadow: 0 2px 12px rgba(255, 255, 255, 0.25);
          }
          .header-dropdown-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 9px 14px;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            border-radius: 8px;
            transition: all 0.2s ease;
          }
          .header-dropdown-item:hover {
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
          }
        `}</style>

        {/* ======================================================== */}
        {/* LEFT SECTION: Logo Monogram & CREATIVE ENGINEER Status (Commented out) */}
        {/* ======================================================== */}
        {/*
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "7px 18px",
            backgroundColor: "rgba(15, 15, 18, 0.90)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            borderRadius: "9999px",
            boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
            pointerEvents: "auto",
            userSelect: "none",
          }}
        >
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', 'Cinzel', serif",
                fontSize: "22px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                lineHeight: 1,
                padding: "2px 0",
                textShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
            >
              <span style={{ fontStyle: "italic", marginRight: "-2px" }}>N</span>
              <span>K</span>
            </div>
          </a>

          <div
            className="header-branding-divider"
            style={{
              height: "24px",
              width: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.18)",
            }}
          />

          <div
            className="header-branding-text"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                animation: "status-pulse 2s infinite ease-in-out",
                flexShrink: 0,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1px",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.15,
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#9ca3af",
                  textTransform: "uppercase",
                }}
              >
                CREATIVE ENGINEER
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: "#22c55e",
                  textTransform: "uppercase",
                }}
              >
                BUILDING THE FUTURE
              </span>
            </div>
          </div>
        </div>
        */}

        {/* Spacer for flex alignment if needed */}
        <div style={{ display: "none" }} />

        {/* ======================================================== */}
        {/* CENTER SECTION: Centered Floating Dark Pill Navigation (Commented out) */}
        {/* ======================================================== */}
        {/*
        <div
          className="header-center-nav"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "5px 7px",
            backgroundColor: "rgba(15, 15, 18, 0.90)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            borderRadius: "9999px",
            boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
            pointerEvents: "auto",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`nav-item-btn ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}

          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              className={`nav-item-btn ${
                ["services", "contact"].includes(activeSection) ? "active" : ""
              }`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                gap: "4px",
                padding: "7px 12px",
              }}
            >
              <span>More</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: moreDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <AnimatePresence>
              {moreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    right: 0,
                    width: "180px",
                    backgroundColor: "rgba(22, 22, 26, 0.95)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    borderRadius: "14px",
                    padding: "8px",
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    zIndex: 1000,
                  }}
                >
                  <a
                    href="#services"
                    onClick={(e) => handleScroll(e, "#services")}
                    className="header-dropdown-item"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Services
                  </a>
                  <a
                    href="#works"
                    onClick={(e) => handleScroll(e, "#works")}
                    className="header-dropdown-item"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    Projects Grid
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    className="header-dropdown-item"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Contact Info
                  </a>
                  <a
                    href="/Nithesh_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-dropdown-item"
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", marginTop: "4px", paddingTop: "8px" }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    Resume PDF
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            style={{
              height: "18px",
              width: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
              margin: "0 6px",
            }}
          />

          <a
            href="https://github.com/nithesh612"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255, 255, 255, 0.85)",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        </div>
        */}

        {/* ======================================================== */}
        {/* RIGHT SECTION: Unified 3D Glassmorphic Pill (Book + ☰)   */}
        {/* ======================================================== */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 6px 4px 16px",
            backgroundColor: "rgba(15, 15, 18, 0.90)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            borderRadius: "9999px",
            boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
            pointerEvents: "auto",
          }}
        >
          {/* Book a Call -> Contact Rolling Action Link */}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            onMouseEnter={() => setIsBookHovered(true)}
            onMouseLeave={() => setIsBookHovered(false)}
            style={{
              color: isBookHovered ? "#ff5722" : "#ffffff",
              fontSize: "13.5px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "color 0.3s ease",
              position: "relative",
              height: "22px",
              width: "108px",
              overflow: "hidden",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* Top State: Book a Call with Phone Icon */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
                transform: isBookHovered ? "translateY(-100%)" : "translateY(0)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Book a Call
            </span>

            {/* Bottom State (on hover): Contact with Send/Arrow Icon */}
            <span
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
                transform: isBookHovered ? "translateY(-100%)" : "translateY(0)",
                color: "#ff5722",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Contact
            </span>
          </a>

          {/* 3-Lines / Hamburger Drawer Menu Trigger Button */}
          <button
            suppressHydrationWarning
            onClick={() => setOffcanvasOpen(true)}
            type="button"
            aria-label="Open Navigation Menu"
            title="Open Menu"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.22)";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* 3 Horizontal Lines (Hamburger Icon) */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
