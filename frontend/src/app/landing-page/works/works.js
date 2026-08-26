"use client";
import React from "react";

export default function Works() {
  return (
    <section className="portfolio-three-area py-120 position-relative z-1">
      <div className="portfolio-three-shape position-absolute top-0 z-n1" aria-hidden="true">
        <span
          className="portfolio-three-shape-title"
          style={{
            fontFamily: 'var(--heading-font, "Phudu", sans-serif)',
            color: "hsl(var(--heading-color, 208 76% 3%))",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: 0,
            display: "block",
            userSelect: "none",
          }}
        >
          works
        </span>
      </div>
      <div className="container tw-container-1800-px">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-three-wrapper d-flex justify-content-between flex-wrap align-items-start position-relative z-1">
              <div className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper">
                <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                  <div className="tw-mb-6">
                    <div>
                      <h2 className="tw-text-605 fw-medium tw-mb-4">
                        <a
                          className="hover-text-main-two-600"
                          href="https://nithesh612.github.io/E-commerce-1/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Thunder - E-Commerce
                        </a>
                      </h2>
                      <p className="tw-text-gray-400 tw-mb-4" style={{ maxWidth: '600px', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                        A modern and immersive e-commerce platform designed for premium gaming gear.
                        Features an interactive UI, product showcases, and a seamless shopping experience.
                      </p>
                    </div>
                    <div className="portfolio-three-list portfolio-list">
                      <ul className="d-flex tw-gap-205 flex-wrap">
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#"
                          >
                            HTML / CSS / JS
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#"
                          >
                            E-COMMERCE
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-three-button">
                      <a
                        className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                        href="https://nithesh612.github.io/E-commerce-1/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                  data-cursor="View"
                >
                  <a
                    className="d-block cursor-hide tw-rounded-lg"
                    href="https://nithesh612.github.io/E-commerce-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-100 tw-rounded-lg"
                      src="/assets/thumbs/ecommerce-thumb.png"
                      alt="Thunder E-commerce"
                    />
                  </a>
                </div>
              </div>
              <div className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper">
                <div className="portfolio-three-wrap d-flex justify-content-between flex-wrap row-gap-2">
                  <div className="tw-mb-6">
                    <div >
                      <h2 className="tw-text-605 fw-medium tw-mb-4">
                        <a
                          className="hover-text-main-two-600"
                          href="https://book-management-system-r1.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          BookShelf — Management System
                        </a>
                      </h2>
                      <p className="tw-text-gray-400 tw-mb-4" style={{ maxWidth: '600px', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                        A comprehensive book management system to track and organize reading lists efficiently.
                      </p>
                    </div>
                    <div className="portfolio-three-list portfolio-list">
                      <ul className="d-flex tw-gap-205 flex-wrap">
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#"
                          >
                            Next.js / Bootstrap
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                            href="#"
                          >
                            Full Stack
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-three-button">
                      <a
                        className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                        href="https://book-management-system-r1.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                  data-cursor="View"
                >
                  <a
                    className="d-block cursor-hide tw-rounded-lg"
                    href="https://book-management-system-r1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-100 tw-rounded-lg"
                      src="/assets/thumbs/BMS/image.png"
                      alt="BookShelf Management System"
                    />
                  </a>
                </div>
              </div>
              <div className="about-three-counter portfolio-three-counter d-inline-block position-absolute bottom-0 start-0">
                <div className="tw-hover-btn-wrapper d-inline-block">
                  <a
                    className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden"
                    href="about.html"
                  >
                    <span className="d-flex flex-column justify-content-center">
                      <span className="text-heading fw-bold tw-transition-3 tw-text-2xl fw-semibold">
                        Discover <br />
                        Our Projects <i className="ph ph-arrow-up-right"></i>
                      </span>
                    </span>
                    <i className="tw-btn-circle-dot bg-main-two-600"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
