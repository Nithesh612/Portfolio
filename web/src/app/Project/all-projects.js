"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const allProjectsList = [
  {
    id: "thunder",
    title: "Thunder E-Commerce",
    category: "Web Development",
    desc: "A modern and immersive e-commerce platform designed for premium gaming gear with interactive product showcases, dynamic filtering, and real-time cart persistence.",
    logo: "T",
    thumbnail: "/assets/thumbs/ecommerce-thumb.png",
    stack: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
    github: "https://github.com/nithesh612/E-commerce-1",
    preview: "https://nithesh612.github.io/E-commerce-1/",
    detailUrl: "/Project/thunder",
  },
  {
    id: "bookshelf",
    title: "BookShelf — Management System",
    category: "Full Stack",
    desc: "A comprehensive book management and inventory system to track reading lists, organize book archives, and manage borrow-return lifecycles.",
    logo: "B",
    thumbnail: "/assets/thumbs/Book-management-system.png",
    stack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    ],
    github: "https://github.com/nithesh612/book-management-system",
    preview: "https://book-management-system-r1.vercel.app/",
    detailUrl: "/Project/bookshelf",
  },
  {
    id: "flowai",
    title: "FlowAI Hub",
    category: "Full Stack & AI",
    desc: "Intelligent developer productivity suite combining AI code generation, markdown documentation builders, regex debuggers, and API testers.",
    logo: "F",
    thumbnail: "/assets/thumbs/flowai-hub-1.png",
    stack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    ],
    github: "https://github.com/nithesh612",
    preview: "https://github.com/nithesh612",
    detailUrl: "/Project/flowai",
  },
];

const categories = ["All", "Web Development", "Full Stack", "Full Stack & AI"];

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredProjects = allProjectsList.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#080808",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        padding: "40px 24px 100px 24px",
        position: "relative",
      }}
    >
      {/* Top Glowing Fiery Orange Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3.5px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #ff4500 0%, #ff6600 50%, #ff8800 100%)",
          boxShadow: "0 0 14px #ff5722, 0 0 28px rgba(255, 87, 34, 0.6)",
          zIndex: 9999,
          transition: "width 0.05s ease-out",
          pointerEvents: "none",
        }}
      />

      {/* Top Navbar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto 48px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            padding: "8px 18px",
            borderRadius: "100px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          }}
        >
          <span>←</span> Back to Projects
        </Link>

        <a
          href="https://github.com/nithesh612"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255, 255, 255, 0.8)",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          <span>GitHub: @nithesh612</span>
          <span>↗</span>
        </a>
      </div>

      {/* Header Section */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 40px auto", textAlign: "center" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#f59e0b",
            marginBottom: "12px",
            fontFamily: "monospace",
          }}
        >
          ARCHIVE & SHOWCASE
        </div>
        <h1
          style={{
            fontSize: "clamp(34px, 5vw, 64px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: "0 0 16px 0",
            textTransform: "uppercase",
          }}
        >
          ALL PROJECTS
        </h1>
        <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Explore all open-source web applications, full-stack systems, UI components, and software architectures.
        </p>
      </div>

      {/* Filter / Search Bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto 40px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Category Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "100px",
                backgroundColor: selectedCategory === cat ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                color: selectedCategory === cat ? "#000000" : "rgba(255, 255, 255, 0.7)",
                border: "1px solid " + (selectedCategory === cat ? "#ffffff" : "rgba(255, 255, 255, 0.1)"),
                fontSize: "13px",
                fontWeight: selectedCategory === cat ? "700" : "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div style={{ position: "relative", minWidth: "260px" }}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 16px",
              borderRadius: "100px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: "28px",
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "#0d1117",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "18px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }}
          >
            {/* Thumbnail */}
            <Link href={project.detailUrl} style={{ position: "relative", height: "210px", display: "block", overflow: "hidden", backgroundColor: "#05070a" }}>
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85, transition: "transform 0.4s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "14px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#000000",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#ffffff",
                }}
              >
                {project.logo}
              </div>
            </Link>

            {/* Info */}
            <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1 }}>
              <span style={{ fontSize: "11.5px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#f59e0b", fontWeight: 700, marginBottom: "6px" }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", margin: "0 0 10px 0" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.6, margin: "0 0 18px 0", flex: 1 }}>
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {project.stack.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "11.5px",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    {t.icon && <img src={t.icon} alt={t.name} style={{ width: "12px", height: "12px" }} />}
                    {t.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px", paddingTop: "14px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <Link
                  href={project.detailUrl}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Case Study →
                </Link>
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "9px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
