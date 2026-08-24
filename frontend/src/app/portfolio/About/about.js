"use client";
import React from "react";
import FrontendDeveloperSection from "./FrontendDeveloper";
import { TechnoDome } from "./Showcase";

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
                    <div style={{ position: "relative", paddingLeft: "50px", marginTop: "0px" }}>
                      {/* Item 1 */}
                      <div style={{ position: "relative", marginBottom: "24px" }}>
                        <div style={{ position: "absolute", left: "-50px", top: "0" }}>
                          <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(90, 55, 251, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5A37FB" }}>
                            <i className="ph ph-user" style={{ fontSize: "18px" }}></i>
                          </div>
                        </div>
                        <h4 style={{ color: "#000000", fontSize: "15px", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "1px" }}>Who I Am</h4>
                        <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                          I'm Nithesh Kumar R, an MCA graduate and a passionate Full Stack Developer who loves building modern, responsive and user-friendly web applications.
                        </p>
                      </div>

                      {/* Item 2 */}
                      <div style={{ position: "relative", marginBottom: "24px" }}>
                        <div style={{ position: "absolute", left: "-50px", top: "0" }}>
                          <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(90, 55, 251, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5A37FB" }}>
                            <i className="ph ph-code" style={{ fontSize: "18px" }}></i>
                          </div>
                        </div>
                        <h4 style={{ color: "#000000", fontSize: "15px", fontWeight: "700", textTransform: "uppercase", marginBottom: "12px", letterSpacing: "1px" }}>What I Do</h4>
                        <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                          I design and develop digital solutions using Next.js, React, Node.js and modern technologies. I enjoy turning complex problems into simple, intuitive and impactful applications.
                        </p>
                      </div>

                      {/* Item 3 */}
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: "-50px", top: "0" }}>
                          <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(90, 55, 251, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5A37FB" }}>
                            <i className="ph ph-target" style={{ fontSize: "18px" }}></i>
                          </div>
                        </div>
                        <h4 style={{ color: "#000000", fontSize: "15px", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "1px" }}>My Approach</h4>
                        <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                          I believe in writing clean, maintainable and efficient code. I focus on performance, accessibility and great user experience while continuously learning and improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-three-counter d-inline-block">
                    <div className="tw-hover-btn-wrapper d-inline-block" style={{ transform: "scale(0.55)", transformOrigin: "left center", marginTop: "-20px", marginLeft: "50px" }}>
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
