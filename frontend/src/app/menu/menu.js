"use client";
import React, { useState } from "react";

export default function Menu({ offcanvasOpen, setOffcanvasOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setOffcanvasOpen(false); // Close menu

    if (typeof window !== "undefined") {
      const element = document.querySelector(targetId);
      if (element) {
        // Use GSAP's ScrollToPlugin if available (smooth and robust)
        if (window.gsap) {
          window.gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetId, autoKill: false },
            ease: "power3.inOut"
          });
        } 
        // Fallback for native smoothly if GSAP isn't loaded
        else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `/portfolio${targetId}`;
      }
    }
  };

  return (
    <>
      {/* ==================== Sidebar Overlay Start ==================== */}
      <div
        className={`side-overlay ${offcanvasOpen ? "opened" : ""}`}
        onClick={() => setOffcanvasOpen(false)}
      ></div>
      {/* ==================== Sidebar Overlay End ==================== */}

      {/* ==================== Offcanvus Mobile Menu Start Here ==================== */}
      <div className={`tw-offcanvas-2-area p-relative ${offcanvasOpen ? "opened" : ""}`}>
        <div className="tw-offcanvas-2-bg is-left left-box"></div>
        <div className="tw-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
        <div className="tw-offcanvas-2-wrapper">
          <div className="tw-offcanvas-2-left left-box">
            <div className="tw-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
              <div className="twoffcanvas__logo">
                <a className="logo-1" href="/">
                  <img src="/assets/logo/logo.png" alt="Nithesh Kumar R Logo" style={{ maxWidth: '150px', height: 'auto' }} />
                </a>
              </div>
              <div className="tw-offcanvas-2-close d-md-none text-end">
                <button
                  suppressHydrationWarning
                  className="tw-offcanvas-2-close-btn tw-offcanvas-2-close-btn"
                  onClick={() => setOffcanvasOpen(false)}
                  type="button"
                >
                  <span className="text">
                    <span className="text-white">close</span>
                  </span>
                  <span className="d-inline-block">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32.621"
                          height="1.00918"
                          transform="matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)"
                          fill="currentcolor"
                        />
                        <rect
                          width="32.621"
                          height="1.00918"
                          transform="matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="tw-main-menu-mobile menu-hover-active counter-row">
              <nav className="tw-main-menu-content">
                <ul>
                  <li className="has-dropdown">
                    <a
                      href="#home"
                      className={openSubmenu === "home" ? "expanded" : ""}
                      onClick={(e) => handleScroll(e, '#home')}
                    >
                      Home
                      <button
                        type="button"
                        className={`dropdown-toggle-btn ${openSubmenu === "home" ? "dropdown-opened" : ""}`}
                        onClick={(e) => toggleSubmenu("home", e)}
                      >
                        <i className="ph ph-caret-right"></i>
                      </button>
                    </a>
                    <div
                      className="tw-submenu submenu has-homemenu"
                      style={{ display: openSubmenu === "home" ? "block" : "none" }}
                    >
                      <div className="row gx-6 row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                        {/* 1. Thunder E-Commerce */}
                        <div className="col homemenu">
                          <div className="homemenu-thumb tw-mb-4" style={{ borderRadius: "10px", overflow: "hidden" }}>
                            <img src="/assets/thumbs/ecommerce-thumb.png" alt="Thunder E-Commerce" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                            <div className="homemenu-btn w-100">
                              <div className="tw-mb-2">
                                <a
                                  className="bg-main-two-600 text-white fw-semibold tw-py-3 tw-text-sm d-inline-block hover-bg-white hover-text-heading menu-btn show-1"
                                  href="https://nithesh612.github.io/E-commerce-1/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setOffcanvasOpen(false)}
                                >
                                  Live Demo ↗
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a 
                                href="https://nithesh612.github.io/E-commerce-1/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOffcanvasOpen(false)}
                              >
                                Thunder E-Commerce
                              </a>
                            </h4>
                          </div>
                        </div>

                        {/* 2. BookShelf Management System */}
                        <div className="col homemenu">
                          <div className="homemenu-thumb tw-mb-4" style={{ borderRadius: "10px", overflow: "hidden" }}>
                            <img src="/assets/thumbs/Book-management-system.png" alt="BookShelf Management System" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                            <div className="homemenu-btn w-100">
                              <div className="tw-mb-2">
                                <a
                                  className="bg-main-two-600 text-white fw-semibold tw-py-3 tw-text-sm d-inline-block hover-bg-white hover-text-heading menu-btn show-1"
                                  href="https://book-management-system-r1.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setOffcanvasOpen(false)}
                                >
                                  Live Demo ↗
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a 
                                href="https://book-management-system-r1.vercel.app/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOffcanvasOpen(false)}
                              >
                                BookShelf — Management System
                              </a>
                            </h4>
                          </div>
                        </div>

                        {/* 3. Coming Soon */}
                        <div className="col homemenu">
                          <div className="homemenu-thumb tw-mb-4" style={{ borderRadius: "10px", overflow: "hidden" }}>
                            <img src="/assets/thumbs/coming-soon-img.png" alt="coming-soon" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <a href="#" onClick={(e) => { e.preventDefault(); setOffcanvasOpen(false); }}>Coming Soon</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About Us</a>
                  </li>

                  <li className="has-dropdown">
                    <a
                      href="#services"
                      className={openSubmenu === "services" ? "expanded" : ""}
                      onClick={(e) => handleScroll(e, '#services')}
                    >
                      Services
                      <button
                        type="button"
                        className={`dropdown-toggle-btn ${openSubmenu === "services" ? "dropdown-opened" : ""}`}
                        onClick={(e) => toggleSubmenu("services", e)}
                      >
                        <i className="ph ph-caret-right"></i>
                      </button>
                    </a>
                    <ul
                      className="submenu tw-submenu"
                      style={{ display: openSubmenu === "services" ? "block" : "none" }}
                    >
                      <li>
                        <a href="#services" onClick={() => setOffcanvasOpen(false)}>Our Service</a>
                      </li>
                      <li>
                        <a href="#services" onClick={() => setOffcanvasOpen(false)}>Service Details</a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <a
                      href="#about"
                      className={openSubmenu === "pages" ? "expanded" : ""}
                      onClick={(e) => handleScroll(e, '#about')}
                    >
                      Pages
                      <button
                        type="button"
                        className={`dropdown-toggle-btn ${openSubmenu === "pages" ? "dropdown-opened" : ""}`}
                        onClick={(e) => toggleSubmenu("pages", e)}
                      >
                        <i className="ph ph-caret-right"></i>
                      </button>
                    </a>
                    <ul
                      className="submenu tw-submenu"
                      style={{ display: openSubmenu === "pages" ? "block" : "none" }}
                    >
                      <li>
                        <a href="#about" onClick={() => setOffcanvasOpen(false)}>About Us</a>
                      </li>
                      <li>
                        <a href="#team" onClick={() => setOffcanvasOpen(false)}>Our Team</a>
                      </li>
                      <li>
                        <a href="#testimonial" onClick={() => setOffcanvasOpen(false)}>Testimonials</a>
                      </li>
                      <li>
                        <a href="#pricing" onClick={() => setOffcanvasOpen(false)}>Pricing</a>
                      </li>
                      <li>
                        <a href="#projects" onClick={() => setOffcanvasOpen(false)}>Portfolio One</a>
                      </li>
                      <li>
                        <a href="#projects" onClick={() => setOffcanvasOpen(false)}>Portfolio Details</a>
                      </li>
                      <li>
                        <a href="#faq" onClick={() => setOffcanvasOpen(false)}>Our Faq</a>
                      </li>
                    </ul>
                  </li>



                  <li>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="tw-offcanvas-2-right right-box d-none d-md-block p-relative">
            <div className="tw-offcanvas-2-close text-end">
              <button
                suppressHydrationWarning
                className="tw-offcanvas-2-close-btn"
                onClick={() => setOffcanvasOpen(false)}
                type="button"
              >
                <span className="text">
                  <span>close</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.80859 9.80762L28.1934 28.1924"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.80859 28.1924L28.1934 9.80761"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
            <div className="tw-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
              <div className="twoffcanvas__contact-info">
                <div className="twoffcanvas__contact-title">
                  <h5 className="text-white">Contact us</h5>
                </div>
                <ul>
                  <li>
                    <span className="text-main-two-600 tw-text-xl">
                      <i className="ph ph-map-pin-line"></i>
                    </span>
                    <a
                      className="text-white"
                      href="https://www.google.com/maps/@23.8223586,90.3661283,15z"
                      target="_blank"
                    >
                      Chennai, Saidapet
                    </a>
                  </li>
                  <li>
                    <span className="text-main-two-600 tw-text-xl">
                      <i className="ph ph-envelope"></i>
                    </span>
                    <a className="text-white" href="mailto:nitheshkumar1206@gmail.com">
                      <span className="__cf_email__">nitheshkumar1206@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <ul className="tw-gap-2">
                  <li>
                    <a href="#">
                      <span className="active-media d-flex align-items-center tw-gap-1">
                        Facebook <i className="ph ph-arrow-bend-up-right"></i>
                      </span>
                      <span className="hover-media">
                        <i className="ph ph-facebook-logo"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="active-media d-flex align-items-center tw-gap-1">
                        INSTAGRAM <i className="ph ph-arrow-bend-up-right"></i>
                      </span>
                      <span className="hover-media">
                        <i className="ph ph-instagram-logo"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="active-media d-flex align-items-center tw-gap-1">
                        LINKEDIN <i className="ph ph-arrow-bend-up-right"></i>
                      </span>
                      <span className="hover-media">
                        <i className="ph ph-linkedin-logo"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Offcanvus Mobile Menu End Here ==================== */}
    </>
  );
}
