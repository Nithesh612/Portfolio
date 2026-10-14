"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Clean UI SVG Icons (No keyboard emojis)
const SparkleIcon = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" fill={color} fillOpacity="0.2" />
    </svg>
);

const TrashIcon = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
);

const CloseIcon = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const RocketIcon = ({ size = 13, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const CodeIcon = ({ size = 13, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const GraduationCapIcon = ({ size = 13, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const BriefcaseIcon = ({ size = 13, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const MailIcon = ({ size = 13, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const SendIcon = ({ size = 15, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

// Comprehensive portfolio knowledge base for Nithesh Kumar R (Clean formatted text)
const KNOWLEDGE_BASE = {
    about: `**Nithesh Kumar R** is a passionate **Full Stack Developer** with a **Master of Computer Applications (MCA)** degree. 

He specializes in building modern, high-performance web applications, interactive 3D/GSAP experiences, and scalable full-stack architectures.`,

    skills: `**Nithesh's Core Tech Stack & Skills:**
• **Frontend:** React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap
• **Animations & 3D:** GSAP (GreenSock), Framer Motion, Three.js, React Three Fiber
• **Backend & APIs:** Node.js, Express.js, Python, RESTful APIs
• **Databases:** MongoDB, MySQL, PostgreSQL
• **Tools & Platforms:** Git, GitHub, VS Code, Postman, Vercel, Figma, WordPress`,

    projects: `**Featured Projects by Nithesh:**

1. **Thunder** — High-Performance Gaming Gear & Hardware E-Commerce Platform
   • *Tech:* React, TypeScript, Next.js, Tailwind CSS, Framer Motion
   • Dynamic product catalog (100+ items), persistent cart, real-time filters.
   • [Live Demo](https://nithesh612.github.io/E-Commerce-clone/) | [GitHub](https://github.com/nithesh612/E-Commerce-clone)

2. **BookShelf** — Full-Stack Library & Book Inventory Management System
   • *Tech:* Next.js, React, TypeScript, Bootstrap, Node.js
   • Real-time borrow & return tracking, full CRUD inventory, dynamic author indexing.

3. **Interactive 3D Portfolio**
   • *Tech:* Next.js 16, Three.js, GSAP, Framer Motion, Tailwind CSS
   • Fluid smooth scrolling, interactive physics badges, and custom aesthetic theme.`,

    experience: `**Experience & Specialization:**
• Full Stack Web Development (MERN & Next.js Ecosystem)
• Interactive UI/UX Design with micro-animations and GSAP ScrollTrigger
• High-performance frontend optimization and responsive cross-browser layouts
• API design, authentication, database modeling, and state management`,

    education: `**Education:**
• **Master of Computer Applications (MCA)**
• Strong foundational background in Computer Science, Software Engineering, Data Structures, and Modern Web Architectures.`,

    contact: `**Get in Touch with Nithesh:**
• **GitHub:** [github.com/nithesh612](https://github.com/nithesh612)
• **WhatsApp:** Instant message via the Contact form or wa.me
• **Location:** India
• **Status:** Available for freelance projects, full-time engineering roles, and innovative collaborations!`,

    services: `**Services Nithesh Offers:**
1. **Full Stack Web Apps** — Robust end-to-end applications built with Next.js, React, Node.js & databases.
2. **Interactive Frontend & 3D** — Smooth GSAP animations, 3D Canvas elements, and responsive designs.
3. **E-Commerce & Portals** — Custom online storefronts, inventory management systems, and dashboards.
4. **Performance & SEO** — Lightning-fast loading speed, core web vitals optimization, and clean code architecture.`,

    hire: `**Why Hire Nithesh?**
• Strong foundation with MCA degree & real-world full-stack expertise
• Keen eye for fluid animations, responsive layouts, and modern aesthetics
• Dedicated problem-solver with clean, maintainable code practices
• Fast communicator ready to deliver high-impact results!`
};

const SUGGESTED_QUESTIONS = [
    { label: "Top Projects", icon: RocketIcon, query: "What projects have you built?" },
    { label: "Tech Stack", icon: CodeIcon, query: "What are your core technical skills?" },
    { label: "Education", icon: GraduationCapIcon, query: "Tell me about your education and MCA" },
    { label: "Hire Nithesh", icon: BriefcaseIcon, query: "Why should we hire you?" },
    { label: "Contact Info", icon: MailIcon, query: "How can I contact Nithesh?" },
];

// Smart reply matcher
function getBotResponse(userText) {
    const lower = userText.toLowerCase().trim();

    if (
        lower.includes("hello") ||
        lower.includes("hi") ||
        lower.includes("hey") ||
        lower.includes("greetings") ||
        lower.includes("who are you") ||
        lower.includes("start")
    ) {
        return `Hello! I'm **Nithesh's Portfolio AI Assistant**!

I can help you explore Nithesh's:
• **Projects** (Thunder E-Commerce, BookShelf, Portfolio)
• **Skills & Tech Stack** (Next.js, React, Node, Python, Three.js)
• **Education** (MCA)
• **Contact info & hiring availability**

What would you like to know?`;
    }

    if (
        lower.includes("project") ||
        lower.includes("work") ||
        lower.includes("thunder") ||
        lower.includes("bookshelf") ||
        lower.includes("portfolio") ||
        lower.includes("showcase")
    ) {
        return KNOWLEDGE_BASE.projects;
    }

    if (
        lower.includes("skill") ||
        lower.includes("stack") ||
        lower.includes("technology") ||
        lower.includes("react") ||
        lower.includes("next") ||
        lower.includes("node") ||
        lower.includes("python") ||
        lower.includes("frontend") ||
        lower.includes("backend") ||
        lower.includes("database")
    ) {
        return KNOWLEDGE_BASE.skills;
    }

    if (
        lower.includes("education") ||
        lower.includes("degree") ||
        lower.includes("mca") ||
        lower.includes("college") ||
        lower.includes("study") ||
        lower.includes("qualification")
    ) {
        return KNOWLEDGE_BASE.education;
    }

    if (
        lower.includes("service") ||
        lower.includes("offer") ||
        lower.includes("freelance") ||
        lower.includes("build")
    ) {
        return KNOWLEDGE_BASE.services;
    }

    if (
        lower.includes("hire") ||
        lower.includes("job") ||
        lower.includes("opportunity") ||
        lower.includes("why hire") ||
        lower.includes("collaborate") ||
        lower.includes("available")
    ) {
        return KNOWLEDGE_BASE.hire;
    }

    if (
        lower.includes("experience") ||
        lower.includes("background") ||
        lower.includes("about") ||
        lower.includes("who is nithesh")
    ) {
        return `${KNOWLEDGE_BASE.about}\n\n${KNOWLEDGE_BASE.experience}`;
    }

    if (
        lower.includes("contact") ||
        lower.includes("email") ||
        lower.includes("whatsapp") ||
        lower.includes("phone") ||
        lower.includes("reach") ||
        lower.includes("github") ||
        lower.includes("linkedin") ||
        lower.includes("message")
    ) {
        return KNOWLEDGE_BASE.contact;
    }

    if (
        lower.includes("thank") ||
        lower.includes("awesome") ||
        lower.includes("great") ||
        lower.includes("good") ||
        lower.includes("nice")
    ) {
        return `You're very welcome! Feel free to check out the [Contact Section](#contact) if you'd like to talk directly with Nithesh. Let me know if you need anything else!`;
    }

    // Fallback response with helpful triggers
    return `Thanks for asking! While I might not have the exact answer for "${userText}", I can tell you all about Nithesh's:
• **Projects** (Try asking *"Show me top projects"*)
• **Skills** (Try asking *"What are your technical skills?"*)
• **Contact** (Try asking *"How do I get in touch?"*)

Or you can send Nithesh a direct message via the [Contact Form](#contact)!`;
}

// Cute Purple Mascot SVG matching the mascot creature from user's image
function MascotIcon({ className = "", isWaving = false }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
        >
            <defs>
                <radialGradient id="mascotGlow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="50%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#6b21a8" />
                </linearGradient>
                <linearGradient id="bellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#e879f9" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#3b0764" floodOpacity="0.4" />
                </filter>
            </defs>

            {/* Ambient Halo */}
            <circle cx="50" cy="50" r="46" fill="url(#mascotGlow)" />

            {/* Cute Head Crest */}
            <path
                d="M 50 18 Q 54 8 47 6 Q 44 12 50 20"
                fill="#ec4899"
            />
            <path
                d="M 53 19 Q 62 10 57 8 Q 50 14 53 21"
                fill="#f472b6"
            />

            {/* Main Body */}
            <ellipse
                cx="50"
                cy="54"
                rx="30"
                ry="34"
                fill="url(#bodyGrad)"
                filter="url(#softShadow)"
            />

            {/* Belly Patch */}
            <ellipse
                cx="50"
                cy="60"
                rx="18"
                ry="20"
                fill="url(#bellyGrad)"
                opacity="0.9"
            />

            {/* Little Feet */}
            <ellipse cx="40" cy="87" rx="7" ry="4" fill="#f59e0b" />
            <ellipse cx="60" cy="87" rx="7" ry="4" fill="#f59e0b" />

            {/* Left Wing */}
            <path
                d="M 22 50 C 14 55 12 68 24 70 C 26 62 25 54 22 50 Z"
                fill="url(#wingGrad)"
            />

            {/* Right Wing */}
            <motion.g
                animate={isWaving ? { rotate: [0, -22, 12, -18, 0] } : { rotate: [0, -10, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                style={{ transformOrigin: "74px 50px" }}
            >
                <path
                    d="M 74 48 C 88 40 94 52 82 64 C 77 60 75 52 74 48 Z"
                    fill="url(#wingGrad)"
                />
                <circle cx="86" cy="42" r="2.5" fill="#fef08a" />
            </motion.g>

            {/* Cute Big Eyes */}
            <circle cx="40" cy="45" r="7" fill="#1e1b4b" />
            <circle cx="38" cy="43" r="2.8" fill="#ffffff" />
            <circle cx="42" cy="47" r="1.2" fill="#ffffff" />

            <circle cx="60" cy="45" r="7" fill="#1e1b4b" />
            <circle cx="58" cy="43" r="2.8" fill="#ffffff" />
            <circle cx="62" cy="47" r="1.2" fill="#ffffff" />

            {/* Cheeks Blush */}
            <ellipse cx="32" cy="53" rx="4" ry="2.5" fill="#f43f5e" opacity="0.6" />
            <ellipse cx="68" cy="53" rx="4" ry="2.5" fill="#f43f5e" opacity="0.6" />

            {/* Cute Smiling Beak / Mouth */}
            <path
                d="M 46 51 Q 50 56 54 51 Q 50 49 46 51 Z"
                fill="#fbbf24"
            />
            <path
                d="M 47 52 Q 50 55 53 52"
                stroke="#d97706"
                strokeWidth="0.8"
                fill="none"
            />
        </svg>
    );
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [tooltipTextIndex, setTooltipTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            id: "initial-1",
            sender: "bot",
            text: `Hi there! I'm Nithesh's AI assistant.\n\nAsk me anything about his **projects**, **skills**, **MCA background**, or how to collaborate!`,
            time: "Just now",
        },
    ]);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const TOOLTIP_PROMPTS = [
        "Hey there! Ask me anything!",
        "Want to see Nithesh's projects?",
        "Looking to hire a Full Stack Dev?",
        "Chat with Nithesh Kumar AI!",
    ];

    // Rotate tooltip prompts periodically
    useEffect(() => {
        if (isOpen) return;
        const interval = setInterval(() => {
            setTooltipTextIndex((prev) => (prev + 1) % TOOLTIP_PROMPTS.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [isOpen, TOOLTIP_PROMPTS.length]);

    // Auto scroll to bottom of chat
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            inputRef.current?.focus();
        }
    }, [messages, isTyping, isOpen]);

    const handleToggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSendMessage = (textToSend) => {
        const text = (textToSend || inputMessage).trim();
        if (!text) return;

        const userMsg = {
            id: Date.now().toString(),
            sender: "user",
            text: text,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMsg]);
        if (!textToSend) setInputMessage("");
        setIsTyping(true);

        // Simulate AI response delay
        setTimeout(() => {
            const reply = getBotResponse(text);
            const botMsg = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: reply,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 650);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClearChat = () => {
        setMessages([
            {
                id: Date.now().toString(),
                sender: "bot",
                text: "Chat cleared! What would you like to explore about Nithesh?",
                time: "Just now",
            },
        ]);
    };

    // Helper to format text with bold markdown, line breaks, and links
    const renderFormattedText = (content) => {
        const lines = content.split("\n");
        return lines.map((line, lIdx) => {
            const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

            return (
                <div key={lIdx} style={{ minHeight: line.trim() === "" ? "8px" : "auto", marginBottom: "3px" }}>
                    {parts.map((part, pIdx) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                                <strong key={pIdx} style={{ color: "#ffffff", fontWeight: 600 }}>
                                    {part.slice(2, -2)}
                                </strong>
                            );
                        }
                        if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
                            const label = part.slice(1, part.indexOf("]("));
                            const url = part.slice(part.indexOf("](") + 2, -1);
                            return (
                                <a
                                    key={pIdx}
                                    href={url}
                                    target={url.startsWith("#") ? "_self" : "_blank"}
                                    rel="noreferrer"
                                    style={{
                                        color: "#f472b6",
                                        textDecoration: "underline",
                                        fontWeight: 500,
                                        wordBreak: "break-all",
                                    }}
                                    onClick={() => {
                                        if (url.startsWith("#")) {
                                            setIsOpen(false);
                                        }
                                    }}
                                >
                                    {label}
                                </a>
                            );
                        }
                        return <span key={pIdx}>{part}</span>;
                    })}
                </div>
            );
        });
    };

    return (
        <>
            {/* Floating Widget Container (Bottom-Right) */}
            <div
                style={{
                    position: "fixed",
                    bottom: "24px",
                    right: "24px",
                    zIndex: 99999,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    fontFamily: "'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    pointerEvents: "auto",
                }}
            >
                {/* Chatbot Window Modal (Floating above the mascot launcher) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.92, transformOrigin: "bottom right" }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.92 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                width: "clamp(320px, 90vw, 410px)",
                                height: "min(580px, 78vh)",
                                borderRadius: "24px",
                                background: "linear-gradient(165deg, #181326 0%, #0d0b14 100%)",
                                border: "1px solid rgba(168, 85, 247, 0.35)",
                                boxShadow:
                                    "0 24px 60px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 40px rgba(147, 51, 234, 0.25)",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                backdropFilter: "blur(20px)",
                                marginBottom: "12px",
                            }}
                        >
                            {/* Header */}
                            <div
                                style={{
                                    padding: "14px 18px",
                                    background: "linear-gradient(90deg, rgba(147, 51, 234, 0.35) 0%, rgba(79, 70, 229, 0.25) 100%)",
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    {/* Avatar in header */}
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #f472b6, #a855f7)",
                                            border: "2px solid rgba(255, 255, 255, 0.5)",
                                            padding: "2px",
                                            position: "relative",
                                            boxShadow: "0 4px 12px rgba(168, 85, 247, 0.4)",
                                        }}
                                    >
                                        <MascotIcon className="w-full h-full" isWaving={false} />
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: "0px",
                                                right: "0px",
                                                width: "10px",
                                                height: "10px",
                                                borderRadius: "50%",
                                                backgroundColor: "#22c55e",
                                                border: "2px solid #0d0b14",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            style={{
                                                margin: 0,
                                                fontSize: "15px",
                                                fontWeight: 700,
                                                color: "#ffffff",
                                                letterSpacing: "-0.01em",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                            }}
                                        >
                                            <span>Nithesh AI</span>
                                            <span
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: 600,
                                                    padding: "2px 6px",
                                                    borderRadius: "10px",
                                                    background: "rgba(168, 85, 247, 0.25)",
                                                    border: "1px solid rgba(168, 85, 247, 0.4)",
                                                    color: "#f472b6",
                                                }}
                                            >
                                                PRO
                                            </span>
                                        </h3>
                                        <div
                                            style={{
                                                fontSize: "11px",
                                                color: "#c084fc",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: "5px",
                                                    height: "5px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#22c55e",
                                                    display: "inline-block",
                                                }}
                                            />
                                            Online • Instant Assistant
                                        </div>
                                    </div>
                                </div>

                                {/* Header Action Controls */}
                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <button
                                        type="button"
                                        onClick={handleClearChat}
                                        title="Clear Chat"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.08)",
                                            border: "1px solid rgba(255, 255, 255, 0.12)",
                                            borderRadius: "8px",
                                            width: "30px",
                                            height: "30px",
                                            color: "#e2e8f0",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
                                    >
                                        <TrashIcon size={14} color="#e2e8f0" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        title="Close Chat"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.08)",
                                            border: "1px solid rgba(255, 255, 255, 0.12)",
                                            borderRadius: "8px",
                                            width: "30px",
                                            height: "30px",
                                            color: "#e2e8f0",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239, 68, 68, 0.3)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
                                    >
                                        <CloseIcon size={14} color="#e2e8f0" />
                                    </button>
                                </div>
                            </div>

                            {/* Chat Message Scrollable Feed */}
                            <div
                                style={{
                                    flex: 1,
                                    padding: "18px 16px",
                                    overflowY: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "14px",
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "rgba(168, 85, 247, 0.3) transparent",
                                }}
                            >
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-end",
                                                gap: "8px",
                                                maxWidth: "88%",
                                                flexDirection: msg.sender === "user" ? "row-reverse" : "row",
                                            }}
                                        >
                                            {msg.sender === "bot" && (
                                                <div
                                                    style={{
                                                        width: "28px",
                                                        height: "28px",
                                                        borderRadius: "50%",
                                                        background: "linear-gradient(135deg, #c084fc, #9333ea)",
                                                        flexShrink: 0,
                                                        padding: "2px",
                                                        boxShadow: "0 2px 6px rgba(147, 51, 234, 0.4)",
                                                    }}
                                                >
                                                    <MascotIcon className="w-full h-full" isWaving={false} />
                                                </div>
                                            )}

                                            <div
                                                style={{
                                                    padding: "11px 14px",
                                                    borderRadius:
                                                        msg.sender === "user"
                                                            ? "18px 18px 4px 18px"
                                                            : "18px 18px 18px 4px",
                                                    background:
                                                        msg.sender === "user"
                                                            ? "linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)"
                                                            : "rgba(255, 255, 255, 0.07)",
                                                    color: "#f1f5f9",
                                                    fontSize: "13.5px",
                                                    lineHeight: "1.5",
                                                    border:
                                                        msg.sender === "user"
                                                            ? "1px solid rgba(255, 255, 255, 0.2)"
                                                            : "1px solid rgba(255, 255, 255, 0.09)",
                                                    boxShadow:
                                                        msg.sender === "user"
                                                            ? "0 4px 14px rgba(124, 58, 237, 0.35)"
                                                            : "0 2px 8px rgba(0, 0, 0, 0.2)",
                                                    wordBreak: "break-word",
                                                }}
                                            >
                                                {renderFormattedText(msg.text)}
                                            </div>
                                        </div>

                                        <span
                                            style={{
                                                fontSize: "10px",
                                                color: "rgba(255, 255, 255, 0.4)",
                                                marginTop: "4px",
                                                padding: msg.sender === "user" ? "0 4px 0 0" : "0 0 0 36px",
                                            }}
                                        >
                                            {msg.time}
                                        </span>
                                    </motion.div>
                                ))}

                                {/* Animated Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #c084fc, #9333ea)",
                                                padding: "2px",
                                            }}
                                        >
                                            <MascotIcon className="w-full h-full" isWaving={true} />
                                        </div>
                                        <div
                                            style={{
                                                padding: "10px 14px",
                                                borderRadius: "18px 18px 18px 4px",
                                                background: "rgba(255, 255, 255, 0.08)",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <motion.span
                                                animate={{ scale: [1, 1.4, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                                                style={{
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#c084fc",
                                                }}
                                            />
                                            <motion.span
                                                animate={{ scale: [1, 1.4, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                                                style={{
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#a855f7",
                                                }}
                                            />
                                            <motion.span
                                                animate={{ scale: [1, 1.4, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                                                style={{
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#ec4899",
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Quick Suggestion Chips with Vector SVG Icons */}
                            <div
                                style={{
                                    padding: "8px 14px",
                                    background: "rgba(0, 0, 0, 0.25)",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                                    display: "flex",
                                    gap: "6px",
                                    overflowX: "auto",
                                    scrollbarWidth: "none",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {SUGGESTED_QUESTIONS.map((chip, idx) => {
                                    const IconComponent = chip.icon;
                                    return (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => handleSendMessage(chip.query)}
                                            style={{
                                                background: "rgba(168, 85, 247, 0.15)",
                                                border: "1px solid rgba(168, 85, 247, 0.35)",
                                                color: "#e9d5ff",
                                                borderRadius: "14px",
                                                padding: "5px 11px",
                                                fontSize: "11.5px",
                                                fontWeight: 500,
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                flexShrink: 0,
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "rgba(168, 85, 247, 0.3)";
                                                e.currentTarget.style.borderColor = "#c084fc";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "rgba(168, 85, 247, 0.15)";
                                                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.35)";
                                            }}
                                        >
                                            <IconComponent size={12} color="#c084fc" />
                                            <span>{chip.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Message Input Box */}
                            <div
                                style={{
                                    padding: "12px 14px 14px 14px",
                                    background: "rgba(13, 11, 20, 0.95)",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                                }}
                            >
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSendMessage();
                                    }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        background: "rgba(255, 255, 255, 0.06)",
                                        border: "1px solid rgba(255, 255, 255, 0.12)",
                                        borderRadius: "16px",
                                        padding: "4px 6px 4px 14px",
                                        transition: "border-color 0.2s",
                                    }}
                                >
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Ask about projects, skills, contact..."
                                        style={{
                                            flex: 1,
                                            background: "transparent",
                                            border: "none",
                                            outline: "none",
                                            color: "#ffffff",
                                            fontSize: "13.5px",
                                            fontFamily: "inherit",
                                        }}
                                    />

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.92 }}
                                        disabled={!inputMessage.trim()}
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "12px",
                                            background: inputMessage.trim()
                                                ? "linear-gradient(135deg, #a855f7, #ec4899)"
                                                : "rgba(255, 255, 255, 0.1)",
                                            border: "none",
                                            color: inputMessage.trim() ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: inputMessage.trim() ? "pointer" : "default",
                                            transition: "background 0.2s",
                                        }}
                                    >
                                        <SendIcon size={15} color={inputMessage.trim() ? "#ffffff" : "rgba(255, 255, 255, 0.4)"} />
                                    </motion.button>
                                </form>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "6px",
                                        padding: "0 4px",
                                        fontSize: "10.5px",
                                        color: "rgba(255, 255, 255, 0.35)",
                                    }}
                                >
                                    <span>Powered by Nithesh Portfolio AI</span>
                                    <span>Instant response</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Speech Bubble Callout (Yellow/Golden - visible whenever chat is closed) */}
                <AnimatePresence>
                    {!isOpen && showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.85 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.85 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={handleToggleChat}
                            style={{
                                position: "relative",
                                marginBottom: "8px",
                                cursor: "pointer",
                                filter: "drop-shadow(0 6px 16px rgba(0, 0, 0, 0.3))",
                            }}
                        >
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #fef08a 0%, #facc15 50%, #eab308 100%)",
                                    color: "#451a03",
                                    padding: "7px 11px 7px 10px",
                                    borderRadius: "16px 16px 4px 16px",
                                    border: "1.5px solid #ffffff",
                                    fontSize: "11.5px",
                                    fontWeight: 700,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "7px",
                                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.8), 0 3px 10px rgba(234, 179, 8, 0.35)",
                                    maxWidth: "200px",
                                    userSelect: "none",
                                    WebkitUserSelect: "none",
                                }}
                            >
                                <SparkleIcon size={14} color="#78350f" />
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={tooltipTextIndex}
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ lineHeight: 1.3, letterSpacing: "-0.01em" }}
                                    >
                                        {TOOLTIP_PROMPTS[tooltipTextIndex]}
                                    </motion.span>
                                </AnimatePresence>

                                {/* Close small cross for tooltip */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowTooltip(false);
                                    }}
                                    style={{
                                        background: "rgba(0, 0, 0, 0.12)",
                                        border: "none",
                                        borderRadius: "50%",
                                        width: "15px",
                                        height: "15px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        marginLeft: "1px",
                                        flexShrink: 0,
                                        color: "#78350f",
                                        padding: 0,
                                    }}
                                    title="Dismiss"
                                >
                                    <CloseIcon size={10} color="#78350f" />
                                </button>
                            </div>

                            {/* Speech bubble tail pointing to avatar center */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-6px",
                                    right: "22px",
                                    width: "12px",
                                    height: "7px",
                                    backgroundColor: "#eab308",
                                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mascot Avatar Launcher Button (Always visible) */}
                <button
                    type="button"
                    onClick={handleToggleChat}
                    aria-label={isOpen ? "Close Nithesh AI Chatbot" : "Open Nithesh AI Chatbot"}
                    style={{
                        position: "relative",
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        border: "2.5px solid rgba(255, 255, 255, 0.9)",
                        background: "linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #6366f1 100%)",
                        boxShadow:
                            "0 8px 24px rgba(168, 85, 247, 0.45), 0 0 0 4px rgba(168, 85, 247, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.5)",
                        cursor: "pointer",
                        padding: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        outline: "none",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        transform: "none",
                        transition: "box-shadow 0.2s ease, transform 0.2s ease",
                    }}
                >
                    {/* Animated Pulse Ring */}
                    <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                        style={{
                            position: "absolute",
                            inset: "-3px",
                            borderRadius: "50%",
                            border: "1.5px solid #e879f9",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Mascot Character / Close Icon depending on state */}
                    <div style={{ width: "100%", height: "100%", position: "relative", userSelect: "none", pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {isOpen ? (
                            <CloseIcon size={20} color="#ffffff" />
                        ) : (
                            <MascotIcon className="w-full h-full" isWaving={false} />
                        )}
                    </div>

                    {/* Active Online Indicator (when closed) */}
                    {!isOpen && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1px",
                                right: "1px",
                                width: "13px",
                                height: "13px",
                                borderRadius: "50%",
                                backgroundColor: "#22c55e",
                                border: "2px solid #ffffff",
                                boxShadow: "0 0 8px #22c55e",
                                pointerEvents: "none",
                            }}
                        />
                    )}
                </button>
            </div>
        </>
    );
}
