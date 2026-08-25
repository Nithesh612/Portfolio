"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

const techStack = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7", color: "#00C7B7" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71", color: "#EA4B71" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B", color: "#21759B" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF", color: "#646CFF" },
  { name: "Codex", icon: "https://cdn.simpleicons.org/openai/000000", color: "#000000" },
];

const categories = ["All", "Web Development", "Full Stack"];

const projects = [
  {
    title: "Thunder E-Commerce",
    category: "Web Development",
    desc: "A modern and immersive e-commerce platform designed for premium gaming gear with interactive product showcases.",
    logo: "T",
    thumbnail: "/assets/thumbs/ecommerce-thumb.png",
    stack: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ],
    github: "https://github.com/nithesh612/E-commerce-1",
    preview: "https://nithesh612.github.io/E-commerce-1/"
  },
  {
    title: "BookShelf — Management System",
    category: "Full Stack",
    desc: "A comprehensive book management system to track, organize reading lists, and manage inventory efficiently.",
    logo: "B",
    thumbnail: "/assets/thumbs/Book-management-system.png",
    stack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ],
    github: "https://github.com/nithesh612/book-management-system",
    preview: "https://book-management-system-r1.vercel.app/"
  }
];

const certificates = [
  { title: "Full Stack Web Development", tech: "Certified", thumbnail: "/assets/thumbs/portfolio-three-thumb1.jpg" },
  { title: "Advanced React & Next.js", tech: "Certified", thumbnail: "/assets/thumbs/portfolio-three-thumb2.jpg" },
  { title: "Master of Computer Applications", tech: "Degree", thumbnail: "/assets/thumbs/portfolio-three-thumb3.jpg" },
];

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/* 3D Rotating Sphere Component (TechnoDome) from portfolio-v1 */
export function TechnoDome({ theme = "dark" }) {
  const isLight = theme === "light";
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const itemEls = useRef([]);
  const isDragging = useRef(false);
  const lastMX = useRef(0);
  const lastMY = useRef(0);
  const rotX = useRef(0.2);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0.004);
  const dragVX = useRef(0);
  const dragVY = useRef(0);
  const rafId = useRef(null);
  const RADIUS = 160;
  const n = techStack.length;

  const positions = useRef([]);
  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    positions.current = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, [n]);

  function project(pos, rx, ry) {
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x1 = pos.x * cosY - pos.z * sinY;
    const z1 = pos.x * sinY + pos.z * cosY;
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const y2 = pos.y * cosX - z1 * sinX;
    const z2 = pos.y * sinX + z1 * cosX;
    return { x: x1, y: y2, z: z2 };
  }

  useEffect(() => {
    const els = itemEls.current;
    function render() {
      if (!isDragging.current) {
        rotY.current += velY.current;
        rotX.current += velX.current;
        velX.current = velX.current * 0.99 + 0.002 * 0.01;
        velY.current = velY.current * 0.99 + 0.004 * 0.01;
      }
      const projected = positions.current.map((pos, i) => ({
        el: itemEls.current[i],
        p: project(pos, rotX.current, rotY.current),
      }));

      projected
        .slice()
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ el, p }, idx) => {
          if (!el) return;
          const x = p.x * RADIUS + 180 - 36;
          const y = p.y * RADIUS + 180 - 36;
          const depth = (p.z + 1) / 2;
          const opacity = 0.25 + depth * 0.75;
          const scale = 0.55 + depth * 0.55;
          el.style.cssText = `position:absolute;left:${x}px;top:${y}px;opacity:${opacity};transform:scale(${scale});z-index:${idx};width:72px;height:72px;`;
        });
      rafId.current = requestAnimationFrame(render);
    }
    rafId.current = requestAnimationFrame(render);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    lastMX.current = e.clientX;
    lastMY.current = e.clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMX.current;
      const dy = e.clientY - lastMY.current;
      dragVX.current = dy * 0.005;
      dragVY.current = dx * 0.005;
      rotX.current += dragVX.current;
      rotY.current += dragVY.current;
      lastMX.current = e.clientX;
      lastMY.current = e.clientY;
    };
    const onMouseUp = () => {
      if (isDragging.current) {
        velX.current = dragVX.current;
        velY.current = dragVY.current || 0.004;
        isDragging.current = false;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>


      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          cursor: "grab",
          margin: "0 auto",
        }}
      >
        <div ref={sceneRef} style={{ position: "relative", width: "360px", height: "360px" }}>
          {techStack.map((tech, i) => (
            <div
              key={i}
              ref={(el) => { if (el) itemEls.current[i] = el; }}
              style={{ position: "absolute", width: 72, height: 72 }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  border: isLight ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.15)",
                  background: isLight ? "rgba(255,255,255,0.95)" : "rgba(10,10,10,0.75)",
                  backdropFilter: "blur(12px)",
                  boxShadow: isLight ? `0 8px 24px -8px ${tech.color === "#FFFFFF" ? "#000000" : tech.color}40, 0 4px 8px -4px rgba(0,0,0,0.05)` : `0 0 20px -8px ${tech.color}55`,
                  transition: "transform 0.2s, border-color 0.2s",
                }}
              >
                <img src={isLight && tech.color === "#FFFFFF" ? tech.icon.replace("FFFFFF", "000000") : tech.icon} alt={tech.name} style={{ width: 28, height: 28, objectFit: "contain" }} />
                <span style={{ fontSize: 9, color: isLight ? "#4B5563" : "rgba(255,255,255,0.6)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE) || 1;
  const paginatedProjects = projects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section
      id="showcase"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        overflow: "hidden",
        padding: "80px 24px",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "1150px", margin: "0 auto", width: "100%" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px", animation: "fadeSlideDown 0.8s ease forwards" }}>
          <div style={{ position: "relative", overflow: "hidden", width: "40px", height: "1px" }}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.2)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)", animation: "lineMove 2s linear infinite" }} />
          </div>
          <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.45em", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
            Project
          </span>
          <div style={{ position: "relative", overflow: "hidden", width: "40px", height: "1px" }}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.2)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)", animation: "lineMove 2s linear infinite" }} />
          </div>
        </div>

        {/* Heading */}
        <div style={{ overflow: "hidden", marginBottom: "40px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Projects
          </h2>
        </div>

        {/* Tab Content */}
        <div style={{ width: "100%", minHeight: "480px" }}>
          {paginatedProjects.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px", alignItems: "stretch" }}>
              {paginatedProjects.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    background: "#0a0a0a",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative", height: "180px", overflow: "hidden", background: "#1a1a1a" }}>
                    <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                    {/* Floating Logo */}
                    <div style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "#000000",
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#ffffff"
                    }}>
                      {item.logo}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div style={{ padding: "20px 20px 0 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    {/* Title */}
                    <div style={{ marginBottom: "8px" }}>
                      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</h3>
                    </div>

                    {/* Description with 2-line clamp */}
                    <p style={{
                      margin: "0 0 16px 0",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: "1.5",
                      height: "42px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}>
                      {item.desc}
                    </p>

                    {/* Tech Stack Pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px", minHeight: "30px" }}>
                      {item.stack.map((tech, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "100px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                          <img src={tech.icon} alt={tech.name} style={{ width: "12px", height: "12px" }} />
                          {tech.name}
                        </div>
                      ))}
                    </div>

                    {/* Footer Buttons */}
                    <div style={{ marginTop: "auto", display: "flex", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "auto -20px 0 -20px" }}>
                      <a
                        href={item.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          height: "50px",
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "rgba(255,255,255,0.8)",
                          textDecoration: "none",
                          background: "rgba(255,255,255,0.02)",
                          transition: "color 0.2s, background 0.2s"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                      >
                        <i className="ph ph-globe" style={{ fontSize: "16px" }}></i> Live Preview <span style={{ color: "#ff5722" }}>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px", textAlign: "center", animation: "fadeSlideDown 0.6s ease forwards" }}>
              <img src="/assets/empty-states/online-business.svg" alt="Empty Category" style={{ width: "100%", maxWidth: "320px", marginBottom: "24px" }} />
              <h3 style={{ fontSize: "26px", fontWeight: "700", color: "#ffffff", marginBottom: "12px" }}>No Projects Found</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "420px", margin: "0 auto", lineHeight: "1.6" }}>
                There are currently no projects in the <span style={{ color: "#ff5722", fontWeight: 600 }}>{activeCategory}</span> category. Please check back later!
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "48px" }}>
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: currentPage === 1 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }
                }}
              >
                ←
              </button>

              {/* Dynamic Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    border: currentPage === page ? "1px solid #ff5722" : "1px solid rgba(255,255,255,0.08)",
                    background: currentPage === page ? "rgba(255,87,34,0.1)" : "transparent",
                    color: currentPage === page ? "#ff5722" : "rgba(255,255,255,0.6)",
                    fontWeight: currentPage === page ? "700" : "400",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: currentPage === totalPages ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }
                }}
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
