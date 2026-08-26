"use client";
import React from "react";
import Script from "next/script";

export default function Footer() {
  return (
    <>
      <section className="footer-three-area pt-0 position-relative z-1">
        <div className="footer-three-border tw-px-18 tw-mb-10">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-three-middile d-flex align-items-center justify-content-between">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <h4 className="tw-text-2xl text-white tw-mb-2">
                      Quick Links
                    </h4>
                    <ul className="d-flex tw-gap-2 flex-wrap">
                      <li>
                        <a className="tw-text-lg text-white" href="#home">
                          Home,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="#about">
                          About Me,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="#showcase">
                          Projects,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="#skills">
                          Skills,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="#services">
                          Services,
                        </a>
                      </li>
                      <li>
                        <a className="tw-text-lg text-white" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="align-self-center align-self-md-auto my-4 my-md-0"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <a
                      className="footer-three-back-to-top tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 text-white tw-text-3xl rounded-circle"
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <i className="ph ph-arrow-up"></i>
                    </a>
                  </div>
                  <div
                    className="text-lg-end"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <h4 className="tw-text-2xl text-white tw-mb-2">
                      Nithesh Kumar R Portfolio
                    </h4>
                    <p className="tw-text-lg text-white">
                      © 2025 Nithesh Kumar R, MCA. All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container tw-container-1800-px">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-three-bottom text-center">
                  <h5 className="footer-three-bottom-title text-white text-center">
                    Nithesh Kumar R, MCA
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="position-absolute top-0 start-0 z-n1"
            src="/assets/shapes/footer-three-bg-shape.png"
            alt="shape"
          />
        </div>
      </section>

      {/* Scripts are loaded by ScriptLoader in layout.js — no need to duplicate here */}
      {/*
      <Script src="/components/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/components/js/phosphor-icon.js" strategy="afterInteractive" />
      <Script src="/components/js/boostrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/components/js/aos.js" strategy="afterInteractive" />
      <Script src="/components/js/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/components/js/jquery.marquee.min.js" strategy="afterInteractive" />
      <Script src="/components/js/purecounter.js" strategy="afterInteractive" />
      <Script src="/components/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/components/js/gsap/gsap.js" strategy="afterInteractive" />
      <Script src="/components/js/gsap/gsap-scroll-to-plugin.js" strategy="afterInteractive" />
      <Script src="/components/js/gsap/gsap-scroll-smoother.js" strategy="afterInteractive" />
      <Script src="/components/js/gsap/gsap-scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/components/js/gsap/gsap-split-text.js" strategy="afterInteractive" />
      <Script src="/components/js/gsap/chroma.min.js" strategy="afterInteractive" />
      <Script src="/components/js/slider-active.js" strategy="lazyOnload" />
      <Script src="/components/js/custom-gsap.js" strategy="lazyOnload" />
      <Script src="/components/js/main.js" strategy="lazyOnload" />
      <Script src="/components/js/tw-cursor.js" strategy="lazyOnload" />
      */}
    </>
  );
}
