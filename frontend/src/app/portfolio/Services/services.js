"use client";
import React from "react";

export default function Services() {
  return (
    <div id="services">
      {/* ======================== Marquee section start =========================== */}
      <div className="marquee tw-pt-17 bg-black">
        <div className="marquee_left d-flex align-items-center justify-content-between tw-gap-16 overflow-hidden">
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-white">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-stroke">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-white">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-stroke">
              Services <span className="text-white">-</span>
            </h2>
          </div>
          <div>
            <h2 className="marquee-two-title marquee-three-title text-uppercase text-white">
              Services <span className="text-white">-</span>
            </h2>
          </div>
        </div>
      </div>
      {/* ======================== Marquee section end =========================== */}

      <section className="service-three-area bg-black pt-120 tw-pb-15">
        <div className="container tw-container-1800-px">
          <div className="row">
            <div className="col-12">
              <div className="service-three-wrapper">
                <div
                  className="service-three-single"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          01
                          <img
                            className="tw-transition-3"
                            src="/assets/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="service-details.html">Web Development</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Full Stack
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Frontend UI
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                React / Next.js
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="service-details.html">
                        <img
                          src="/assets/thumbs/service-three-thumb3.png"
                          alt="thumb1"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="service-three-single ms-auto"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          02
                          <img
                            className="tw-transition-3"
                            src="/assets/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="service-details.html">Business Branding</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Creative Direction
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Brand Identity
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Graphic Design
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="service-details.html">
                        <img
                          src="/assets/thumbs/service-three-thumb2.png"
                          alt="thumb1"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="service-three-single"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          03
                          <img
                            className="tw-transition-3"
                            src="/assets/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="service-details.html">Graphic Design</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Illustration
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Creative Direction
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Visual Identity
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="service-details.html">
                        <img
                          src="/assets/thumbs/service-three-thumb1.png"
                          alt="thumb1"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="service-three-single ms-auto"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="500"
                >
                  <div className="service-three-item d-flex justify-content-between align-items-center">
                    <div className="service-three-content d-flex tw-gap-14">
                      <div>
                        <span className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">
                          04
                          <img
                            className="tw-transition-3"
                            src="/assets/icons/service-three-arrow.svg"
                            alt="arrow"
                          />
                        </span>
                      </div>
                      <div>
                        <div>
                          <h2 className="service-three-title tw-text-15 text-white tw-mb-4">
                            <a href="service-details.html">Application Design</a>
                          </h2>
                        </div>
                        <div className="portfolio-list portfolio-two-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Creative Direction
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Brand Identity
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                href="#"
                              >
                                Graphic Design
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-three-thumb">
                      <a href="service-details.html">
                        <img
                          src="/assets/thumbs/service-three-thumb4.png"
                          alt="thumb1"
                        />
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
