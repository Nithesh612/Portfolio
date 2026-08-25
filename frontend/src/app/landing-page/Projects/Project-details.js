"use client";
import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const projectData = {
    bookshelf: {
        id: "bookshelf",
        title: "BookShelf — Management System",
        category: "Full Stack Development",
        tagline: "A comprehensive, full-stack book cataloging and inventory management system designed for speed, organization, and effortless reading tracking.",
        logo: "B",
        banner: "/assets/thumbs/Book-management-system.png",
        gallery: [
            "/assets/thumbs/Book-management-system.png",
            "/assets/thumbs/BMS/image.png"
        ],
        preview: "https://book-management-system-r1.vercel.app/",
        github: "https://github.com/nithesh612/book-management-system",
        role: "Lead Full Stack Developer",
        timeline: "2025 - 2026",
        status: "🟢 Live in Production",
        overview: "BookShelf is an end-to-end full-stack web application designed to help avid readers, students, and librarians catalog and manage reading lists and book inventories. Built with Next.js for server-rendered performance and Bootstrap for responsive layouts, it provides real-time state management, instant search, genre filtering, and tracking metrics.",
        challenge: "Traditional spreadsheet tracking or generic note apps lack interactive visual status indicators, automated categorization, and responsive multi-device accessibility needed for fast book inventory lookup.",
        solution: "Developed an intuitive, modular web dashboard featuring real-time CRUD operations, multi-parameter search algorithms, categorized reading status shelves (To-Read, In-Progress, Completed), and optimized client-server state handling.",
        features: [
            {
                title: "Full CRUD Inventory Management",
                desc: "Add, edit, view, and remove books with comprehensive metadata including title, author, genre, year, and cover preview."
            },
            {
                title: "Dynamic Filter & Instant Search",
                desc: "High-speed client-side search across titles and authors with instant genre and reading status filters."
            },
            {
                title: "Reading Status Tracking",
                desc: "Interactive status toggles allowing users to organize books into Wishlist, Reading, and Completed collections."
            },
            {
                title: "100% Responsive & Optimized UI",
                desc: "Adaptive UI layout optimized for desktop, tablet, and mobile devices with fast Next.js page transitions."
            }
        ],
        stack: [
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
            { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3", color: "#7952B3" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
            { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
            { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" }
        ],
        nextProject: {
            id: "thunder",
            title: "Thunder E-Commerce"
        }
    },
    thunder: {
        id: "thunder",
        title: "Thunder E-Commerce",
        category: "Web Development",
        tagline: "An immersive, modern e-commerce platform engineered for premium gaming gear with interactive product showcases and dynamic cart checkout.",
        logo: "T",
        banner: "/assets/thumbs/ecommerce-thumb.png",
        gallery: [
            "/assets/thumbs/ecommerce-thumb.png"
        ],
        preview: "https://nithesh612.github.io/E-commerce-1/",
        github: "https://github.com/nithesh612/E-commerce-1",
        role: "Frontend & UI Developer",
        timeline: "2024 - 2025",
        status: "🟢 Live on GitHub Pages",
        overview: "Thunder E-Commerce is a high-octane gaming equipment storefront engineered with modern HTML5, CSS3, and JavaScript. Featuring sleek dark-mode aesthetics, dynamic catalog filters, interactive product showcases, and modular cart state management.",
        challenge: "Creating a visually striking, high-performance shopping interface without relying on heavy bloated frameworks, ensuring sub-second load times and silky-smooth micro-animations.",
        solution: "Engineered a lightweight custom architecture using vanilla ES6+ JavaScript, CSS grid/flexbox layouts, responsive image loading, and client-side storage for persistent cart items.",
        features: [
            {
                title: "Immersive Gaming Aesthetic",
                desc: "Cyberpunk and dark-themed visual design tailored specifically for gaming gear, keyboards, mice, and audio peripherals."
            },
            {
                title: "Dynamic Product Filtering",
                desc: "Instant categorization by gaming gear type with real-time price sorting and stock indicators."
            },
            {
                title: "Interactive Cart & Checkout Flow",
                desc: "Persistent shopping cart with live quantity counters, subtotal calculations, and responsive modal summaries."
            },
            {
                title: "Ultra-Fast Performance",
                desc: "Zero-dependency lightweight frontend achieving near-perfect Lighthouse performance and responsiveness scores."
            }
        ],
        stack: [
            { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
            { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
            { name: "GitHub Pages", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" }
        ],
        nextProject: {
            id: "bookshelf",
            title: "BookShelf — Management System"
        }
    }
};

function ProjectDetailContent() {
    const searchParams = useSearchParams();
    const projectParam = searchParams.get("project")?.toLowerCase();

    // Default to bookshelf if param is not thunder
    const project = (projectParam && projectData[projectParam]) ? projectData[projectParam] : projectData.bookshelf;
    const [activeImage, setActiveImage] = useState(project.banner);

    useEffect(() => {
        setActiveImage(project.banner);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [project.id]);

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#080808",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                overflowX: "hidden",
            }}
        >
            {/* Top Navbar */}
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backgroundColor: "rgba(10, 10, 10, 0.8)",
                    backdropFilter: "blur(16px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "16px 24px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                            padding: "8px 16px",
                            borderRadius: "100px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                            e.currentTarget.style.color = "#ff5722";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                            e.currentTarget.style.color = "#ffffff";
                        }}
                    >
                        <span>←</span> Back to Projects
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    padding: "8px 14px",
                                    borderRadius: "8px",
                                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)")}
                            >
                                <i className="ph ph-github-logo" style={{ fontSize: "16px" }}></i>
                                <span>GitHub</span>
                            </a>
                        )}

                        {project.preview && (
                            <a
                                href={project.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "#ffffff",
                                    backgroundColor: "#ff5722",
                                    textDecoration: "none",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    padding: "8px 16px",
                                    borderRadius: "8px",
                                    transition: "all 0.2s ease",
                                    boxShadow: "0 4px 16px rgba(255, 87, 34, 0.35)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f4511e")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff5722")}
                            >
                                <span>Live Demo</span>
                                <span>↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 80px 24px" }}>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "40px" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                        <span
                            style={{
                                display: "inline-block",
                                padding: "6px 14px",
                                borderRadius: "100px",
                                backgroundColor: "rgba(255, 87, 34, 0.12)",
                                border: "1px solid rgba(255, 87, 34, 0.3)",
                                color: "#ff5722",
                                fontSize: "12px",
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            {project.category}
                        </span>
                        <span style={{ color: "#4b5563", fontSize: "14px" }}>•</span>
                        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{project.status}</span>
                    </div>

                    <h1
                        style={{
                            fontSize: "clamp(36px, 6vw, 64px)",
                            fontWeight: 900,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1,
                            margin: "0 0 20px 0",
                            color: "#ffffff",
                        }}
                    >
                        {project.title}
                    </h1>

                    <p
                        style={{
                            fontSize: "clamp(16px, 2vw, 20px)",
                            lineHeight: 1.6,
                            color: "rgba(255, 255, 255, 0.7)",
                            maxWidth: "850px",
                            margin: 0,
                        }}
                    >
                        {project.tagline}
                    </p>
                </motion.div>

                {/* Project Meta Bar (4 columns) */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "20px",
                        padding: "24px",
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        marginBottom: "48px",
                    }}
                >
                    <div>
                        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "6px" }}>Role</div>
                        <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>{project.role}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "6px" }}>Timeline</div>
                        <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>{project.timeline}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "6px" }}>Deployment</div>
                        <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>{project.id === "bookshelf" ? "Vercel Platform" : "GitHub Pages"}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "6px" }}>Source Code</div>
                        <div style={{ fontSize: "15px", fontWeight: 600, color: "#ff5722" }}>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5722", textDecoration: "none" }}>
                                Public GitHub Repo ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* Big Showcase Image Display */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        position: "relative",
                        width: "100%",
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        backgroundColor: "#111111",
                        marginBottom: "56px",
                        boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.8)",
                    }}
                >
                    <img
                        src={activeImage}
                        alt={project.title}
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            maxHeight: "650px",
                            objectFit: "cover",
                        }}
                    />

                    {/* Gallery selector if multiple images */}
                    {project.gallery.length > 1 && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                gap: "12px",
                                padding: "8px 12px",
                                borderRadius: "100px",
                                backgroundColor: "rgba(0, 0, 0, 0.75)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                            }}
                        >
                            {project.gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    style={{
                                        padding: "6px 14px",
                                        borderRadius: "100px",
                                        border: "none",
                                        backgroundColor: activeImage === img ? "#ff5722" : "transparent",
                                        color: activeImage === img ? "#ffffff" : "rgba(255,255,255,0.7)",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    View {idx + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Content Section: 2 Columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", marginBottom: "64px" }}>

                    {/* Left Column: Overview & Solution */}
                    <div>
                        <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", marginBottom: "16px" }}>
                            Project Overview
                        </h2>
                        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.75)", marginBottom: "32px" }}>
                            {project.overview}
                        </p>

                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                            The Problem & Challenge
                        </h3>
                        <p style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.7)", marginBottom: "32px" }}>
                            {project.challenge}
                        </p>

                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                            The Solution & Engineering Approach
                        </h3>
                        <p style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
                            {project.solution}
                        </p>
                    </div>

                    {/* Right Column: Key Features & Tech Stack */}
                    <div>
                        <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", marginBottom: "20px" }}>
                            Key Highlights
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                            {project.features.map((feat, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: "20px",
                                        borderRadius: "16px",
                                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                                        border: "1px solid rgba(255, 255, 255, 0.06)",
                                        transition: "border-color 0.2s ease",
                                    }}
                                >
                                    <h4 style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: 700, color: "#ff5722", display: "flex", alignItems: "center", gap: "8px" }}>
                                        <span>✦</span> {feat.title}
                                    </h4>
                                    <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.5" }}>
                                        {feat.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", marginBottom: "16px" }}>
                            Tech Stack & Tooling
                        </h2>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                            {project.stack.map((tech, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "8px 14px",
                                        borderRadius: "100px",
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: "#ffffff",
                                    }}
                                >
                                    <img src={tech.icon} alt={tech.name} style={{ width: "16px", height: "16px", objectFit: "contain" }} />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Box */}
                <div
                    style={{
                        padding: "48px 36px",
                        borderRadius: "24px",
                        background: "linear-gradient(135deg, rgba(255, 87, 34, 0.15) 0%, rgba(10, 10, 10, 0.9) 100%)",
                        border: "1px solid rgba(255, 87, 34, 0.25)",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "56px",
                    }}
                >
                    <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, color: "#ffffff", margin: 0 }}>
                        Experience {project.title} Live
                    </h2>
                    <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.7)", maxWidth: "600px", margin: 0 }}>
                        Explore the deployed web application live or review the clean open-source code on GitHub.
                    </p>

                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
                        <a
                            href={project.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "14px 28px",
                                borderRadius: "12px",
                                backgroundColor: "#ff5722",
                                color: "#ffffff",
                                fontSize: "15px",
                                fontWeight: 700,
                                textDecoration: "none",
                                boxShadow: "0 8px 24px rgba(255, 87, 34, 0.4)",
                            }}
                        >
                            <span>Launch Live App</span>
                            <span>↗</span>
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "14px 28px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                color: "#ffffff",
                                fontSize: "15px",
                                fontWeight: 600,
                                textDecoration: "none",
                            }}
                        >
                            <i className="ph ph-github-logo" style={{ fontSize: "18px" }}></i>
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Next Project Footer Switcher */}
                {project.nextProject && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "32px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                            flexWrap: "wrap",
                            gap: "16px",
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                color: "#9ca3af",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 500,
                            }}
                        >
                            ← Back to All Projects
                        </Link>

                        <Link
                            href={`/project-detail?project=${project.nextProject.id}`}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                color: "#ffffff",
                                textDecoration: "none",
                                fontSize: "15px",
                                fontWeight: 700,
                            }}
                        >
                            <span>Next Project: <strong style={{ color: "#ff5722" }}>{project.nextProject.title}</strong></span>
                            <span>→</span>
                        </Link>
                    </div>
                )}

            </main>
        </div>
    );
}

export default function ProjectDetailPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#080808", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading Project Details...</div>}>
            <ProjectDetailContent />
        </Suspense>
    );
}
