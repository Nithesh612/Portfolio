"use client";
import React, { useState } from "react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    message: "",
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleContactChange = (e) => {
    setContactForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    const text = encodeURIComponent(`Hello, my name is ${contactForm.name}\n\n${contactForm.message}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="footer-three-area pt-120 tw-pb-10 position-relative z-1">
      <div className="container tw-container-1800-px" style={{ paddingLeft: "clamp(30px, 6vw, 100px)", paddingRight: "clamp(30px, 6vw, 100px)" }}>
        {/* Top Contact Section Header from Demo */}
        <div
          className="text-center"
          style={{
            textAlign: "center",
            marginBottom: "60px",
            position: "relative",
            zIndex: 2,
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Background Ambient Glow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "-30px",
              transform: "translateX(-50%)",
              width: "300px",
              height: "200px",
              background: "rgba(255, 255, 255, 0.08)",
              filter: "blur(100px)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* Label: CONTACT with animated line accents */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "40px",
                height: "1px",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  animation: "lineMove 2s linear infinite",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.45em",
                color: "rgba(255, 255, 255, 0.45)",
                fontFamily: "monospace",
                fontWeight: 600,
              }}
            >
              Contact
            </span>

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "40px",
                height: "1px",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  animation: "lineMove 2s linear infinite",
                }}
              />
            </div>
          </div>

          {/* Title: Let's Build Together */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(38px, 6.5vw, 84px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: "1.05",
                margin: 0,
                textTransform: "none",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #ffffff 55%, rgba(255, 255, 255, 0.42) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 25px rgba(255,255,255,0.15))",
                }}
              >
                Let's Build Together
              </span>
            </h2>
          </div>
        </div>

        <div className="row justify-content-between pb-120" style={{ rowGap: "clamp(80px, 12vw, 120px)" }}>
          <div className="col-xl-6 col-lg-6">
            <div
              className="footer-three-top-left tw-pe-xl-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div style={{ marginBottom: "50px", display: "flex", flexDirection: "column" }}>
                <style>{`
                  .signature-contact {
                    font-family: 'Great Vibes', cursive;
                    font-size: clamp(42px, 5vw, 72px);
                    font-weight: 400;
                    margin: 0;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    letter-spacing: 2px;
                    line-height: 1.3;
                    color: #ffffff;
                    
                    /* Signature Initial State */
                    display: inline-block;
                    padding: 10px 20px 10px 5px;
                    white-space: nowrap;
                  }
                  
                  [data-aos="sign-draw"] {
                    clip-path: polygon(0 -50%, 0 -50%, 0 150%, 0 150%);
                  }
                  
                  [data-aos="sign-draw"].aos-animate {
                    animation: sign-draw-anim 4s cubic-bezier(0.2, 0.6, 0.3, 1) 0.5s forwards;
                  }

                  @keyframes sign-draw-anim {
                    0% { clip-path: polygon(0 -50%, 0 -50%, 0 150%, 0 150%); }
                    100% { clip-path: polygon(0 -50%, 110% -50%, 110% 150%, 0 150%); }
                  }
                `}</style>
                <p
                  style={{
                    fontSize: "clamp(16px, 1.2vw, 18px)",
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: "1.6",
                    margin: 0,
                    marginBottom: "30px",
                    maxWidth: "90%",
                  }}
                >
                  Building digital experiences that matter, one line of code at a time.<br />
                  Crafting interfaces that feel alive, solving problems that make a difference,<br />
                  and turning ideas into reality.
                </p>
                <div>
                  <h2 className="signature-contact" data-aos="sign-draw">
                    Nithesh Kumar
                  </h2>
                </div>
              </div>

              <div
                className="d-flex flex-column"
                style={{ gap: "20px", marginBottom: "44px" }}
              >
                <a
                  className="footer-contact-item"
                  href="mailto:nitheshkumar1206@gmail.com"
                >
                  <div className="footer-contact-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="footer-contact-text">
                    nitheshkumar1206@gmail.com
                  </span>
                </a>
              </div>

              {/* Animated Social Login Icons */}
              <div className="social-login-icons" style={{ marginTop: "10px" }}>
                {/* 1. X (Twitter) */}
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="socialcontainer" aria-label="X (Twitter)">
                  <div className="icon social-icon-1-1">
                    <svg viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" className="svgIcontwit" fill="white">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </div>
                  <div className="social-icon-1">
                    <svg viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" className="svgIcontwit" fill="white">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </div>
                </a>

                {/* 2. Instagram */}
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="socialcontainer" aria-label="Instagram">
                  <div className="icon social-icon-2-2">
                    <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                  <div className="social-icon-2">
                    <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                </a>

                {/* 3. WhatsApp */}
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="socialcontainer" aria-label="WhatsApp">
                  <div className="icon social-icon-3-3">
                    <svg viewBox="0 0 448 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </div>
                  <div className="social-icon-3">
                    <svg viewBox="0 0 448 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </div>
                </a>

                {/* 4. GitHub */}
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="socialcontainer" aria-label="GitHub">
                  <div className="icon social-icon-4-4">
                    <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </div>
                  <div className="social-icon-4">
                    <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </div>
                </a>

                {/* 5. Mail (Gmail) */}
                <a href="mailto:nitheshkumar1206@gmail.com" className="socialcontainer" aria-label="Email (Gmail)">
                  <div className="icon social-icon-5-5">
                    <svg viewBox="0 0 512 512" fill="white" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </div>
                  <div className="social-icon-5">
                    <svg viewBox="0 0 512 512" fill="white" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="premium-contact-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >
              {/* Animated Spin Border Glow */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "32px", overflow: "hidden", pointerEvents: "none" }}>
                <div className="contact-card-spin-border" />
              </div>

              {/* Cursor Follow Glow */}
              <div
                className="contact-card-glow"
                style={{
                  left: mousePos.x - 140,
                  top: mousePos.y - 140,
                }}
              />

              {/* Top Accent Line */}
              <div className="contact-card-top-line" />

              {/* Ambient Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "320px",
                  height: "320px",
                  background: "rgba(255, 255, 255, 0.05)",
                  filter: "blur(100px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 10, padding: "clamp(24px, 4vw, 36px)", display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Top Title & Subtitle */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <h3
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 28px)",
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        margin: 0,
                        background: "linear-gradient(90deg, #ffffff 0%, #ffffff 60%, rgba(255, 255, 255, 0.7) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Send Message
                    </h3>
                    <span
                      style={{
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "rgba(255, 255, 255, 0.3)",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      DIRECT
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "rgba(255, 255, 255, 0.4)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    Your message opens directly in WhatsApp—no spam, just real connection.
                  </p>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleSendWhatsApp} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      placeholder="Your Name"
                      required
                      className="premium-contact-input"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Write your message..."
                      required
                      className="premium-contact-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!contactForm.name || !contactForm.message}
                    className="premium-send-btn"
                  >
                    <svg
                      style={{ width: "18px", height: "18px" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16126562 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99621575 L3.03521743,10.4371852 C3.03521743,10.5942826 3.19218622,10.75138 3.50612381,10.75138 L16.6915026,11.5368670 C16.6915026,11.5368670 17.1624089,11.5368670 17.1624089,12.0081591 C17.1624089,12.4794512 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                    </svg>
                    <span>Send Message</span>
                  </button>

                  {/* Status Footer */}
                  <div
                    className="contact-status-badge"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px 16px",
                      marginTop: "16px",
                      borderRadius: "100px",
                      background: "rgba(74, 222, 128, 0.08)",
                      border: "1px solid rgba(74, 222, 128, 0.2)",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "default",
                      width: "fit-content",
                    }}
                  >
                    <div style={{ position: "relative", width: "10px", height: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span
                        className="status-ping"
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          backgroundColor: "#4ade80",
                          opacity: 0.75,
                          animation: "pingRadar 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                        }}
                      />
                      <span
                        className="status-dot"
                        style={{
                          position: "relative",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#22c55e",
                          boxShadow: "0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.5)",
                          animation: "pulseStatusDot 2s infinite ease-in-out",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontFamily: "var(--font-mono, monospace)",
                        margin: 0,
                      }}
                    >
                      Usually replies within a few hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
