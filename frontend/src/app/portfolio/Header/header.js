"use client";
import React, { useState } from "react";
import Image from "next/image";
import Menu from "../../menu/menu";

export default function Header() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

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
      {/* ==================== Header Start Here ==================== */}
      <header className="custom-header-navbar w-100">
        <div className="container tw-container-1800-px d-flex align-items-center justify-content-between position-relative">
          {/* Brand Logo & Title */}
          <a href="/" className="custom-nav-brand">
            <span className="brand-title d-none d-sm-inline-block">
              Nithesh kumar R
            </span>
          </a>

          {/* Center Nav Menu Links */}
          <nav className="d-none d-lg-block" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <ul className="custom-nav-links">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="custom-nav-link">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="custom-nav-link">About</a>
              </li>
              <li>
                <a href="#showcase" onClick={(e) => handleScroll(e, '#showcase')} className="custom-nav-link">Project</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="custom-nav-link">Showcase</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="custom-nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Right Section: Header Right Buttons */}
          <div className="d-flex align-items-center">
            {/* Header Right start */}
            <div className="header-right d-flex align-items-center tw-gap-3">
              {/* Header Button Start */}
              <div className="header-three-button d-none d-md-block">
                <a
                  className="tw-hover-btn bg-black text-white fw-bold d-inline-block hover-text-white text-uppercase"
                  href="contact.html"
                >
                  download cv
                  <span className="tw-hover-btn-circle-dot bg-main-two-600"></span>
                </a>
              </div>
              {/* Header Button End */}

              {/* Placeholder to prevent overlap since menu is fixed */}
              <div style={{ width: "56px", height: "56px" }}></div>

              {/* Menu Button Start */}
              <div className="header-three-menu" style={{ position: "fixed", top: "16px", right: "30px", zIndex: 1050, display: offcanvasOpen ? "none" : "block" }}>
                <button
                  suppressHydrationWarning
                  className="tw-offcanvas-open-btn tw-transition-3"
                  onClick={() => setOffcanvasOpen(true)}
                  type="button"
                >
                  <span>
                    <img
                      className="tw-transition-3"
                      src="/assets/icons/header-three-toggle.svg"
                      alt="toggle"
                    />
                  </span>
                </button>
              </div>
              {/* Menu Button End */}
            </div>
            {/* Header Right End */}
          </div>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
}
