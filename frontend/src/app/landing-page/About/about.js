"use client";
import React from "react";
import FrontendDeveloperSection from "./FrontendDeveloper";
import { TechnoDome } from "../Projects/project";

export default function About() {
  return (
    <div id="about">
      {/* Frontend Developer Section (from portfolio-v1) */}
      <FrontendDeveloperSection />

      <section
        className="about-three-area pt-60 pb-20 position-relative z-1"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          backgroundColor: "#ffffff"
        }}
      >
        <div className="container tw-container-1800-px">
          <div className="about-three-top position-relative z-1">
            <div className="row justify-content-center mb-4">
              <div className="col-xl-9">
                <div className="text-center">
                  <h2
                    className="about-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim"
                  >
                    BUILDING DIGITAL EXPERIENCES WITH CLEAN CODE AND CREATIVE DESIGN.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-three-thumb w-100 tw-clip-anim tw-rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <TechnoDome theme="light" />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="about-three-right"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <div>
                    <div style={{ paddingLeft: "20px", marginTop: "0px" }}>
                      <h3 style={{ color: "#000000", fontSize: "32px", fontWeight: "800", letterSpacing: "-0.5px", marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
                        Hello! I am Nithesh Kumar R.
                      </h3>
                      <h4 style={{ color: "#00C696", fontSize: "18px", fontWeight: "600", marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
                        Greetings ladies & gentlemen.
                      </h4>
                      <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 20px 0", fontWeight: "500" }}>
                        I'm a creative and motivated Full Stack Developer with a strong passion for building modern, responsive, and user-friendly web applications. I thrive on exploring new challenges and opportunities that push the boundaries of my coding skills. Known for bridging the gap between elegant frontend interfaces and robust backend architectures, I focus on delivering impactful digital solutions.
                      </p>
                      <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 24px 0", fontWeight: "500" }}>
                        With experience across Next.js, React, Node.js, and modern databases, my approach is clean, strategic, and performance-focused. I am constantly exploring new technologies like Cloud Architectures and AI integrations to sharpen my technical thinking. Let's work together to bring your vision to life.
                      </p>
                    </div>
                  </div>
                  <div className="about-three-counter d-inline-block">
                    <div className="tw-hover-btn-wrapper d-inline-block" style={{ transform: "scale(0.45)", transformOrigin: "left center", marginTop: "-80px", marginLeft: "20px" }}>
                      <a
                        className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden border border-1 border-neutral-200"
                        href="about.html"
                      >
                        <span
                          className="d-flex flex-column justify-content-center align-items-center"
                        >
                          {(() => {
                            const startDate = new Date("2025-08-01"); // Started ~1 year ago from Aug 2026
                            const today = new Date();
                            const diffMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());

                            let numStr, labelStr;
                            if (diffMonths < 12) {
                              numStr = diffMonths + "+";
                              labelStr = "Months of";
                            } else if (diffMonths < 24) {
                              numStr = "1+";
                              labelStr = "Year of";
                            } else {
                              numStr = Math.floor(diffMonths / 12) + "+";
                              labelStr = "Years of";
                            }

                            return (
                              <>
                                <span className="tw-btn-circle-icon text-heading tw-text-8 tw-transition-3 font-heading fw-medium">
                                  {numStr}
                                </span>
                                <span className="text-heading fw-bold text-center tw-transition-3 tw-text-2xl fw-medium">
                                  {labelStr}<br />Experience
                                </span>
                              </>
                            );
                          })()}
                        </span>
                        <i className="tw-btn-circle-dot bg-main-two-600"></i>
                      </a>
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
