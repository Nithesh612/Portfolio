# Portfolio Archetypes Reference Guide

This reference details the top portfolio archetypes observed across premier engineering portfolios, with technical recipes and component architectures.

---

## 1. The Modern Minimalist / Bento SaaS

### Overview
Inspired by products like Linear, Vercel, Raycast, and Apple. Highly popular among Full-Stack and Frontend engineers. Emphasizes clean grid layouts, subtle borders, deep dark backgrounds, and subtle ambient glows.

### Key Characteristics
- **Bento Grid Layout**: Multi-sized grid cards (2x1, 1x1, 1x2, 2x2) that group bio, current stack, latest project, github activity, and timezone/location.
- **Subtle Glow Effects**: Radial gradients positioned beneath cards on hover following mouse coordinates (`clientX`, `clientY`).
- **Typography**: Clean, crisp sans-serif (e.g. Geist, Inter, Plus Jakarta Sans) paired with monospace badges.
- **Glassmorphism**: `backdrop-blur-md`, `bg-zinc-900/60`, `border-zinc-800/80`.

### Best Practices
- Keep animations snappy (150ms–250ms ease-out transitions).
- Use high-contrast accents (e.g. glowing cyan, violet, or emerald indicator pills).
- Embed live interactive widgets into bento cards (e.g. Spotify currently playing card, live UTC clock, status indicator).

---

## 2. The Interactive 3D / Canvas Showpiece

### Overview
Ideal for Creative Technologists, Three.js developers, Game engineers, and UI motion specialists who want to immediately demonstrate 3D rendering and WebGL capabilities.

### Key Characteristics
- **Interactive 3D Canvas**: Three.js, React Three Fiber (R3F), or Spline 3D models (e.g. floating laptop, interactive 3D avatar, physics-based tech stack spheres).
- **Particle Backgrounds / Shader Gradients**: Interactive particle systems responding to cursor movements.
- **Smooth Scroll Integration**: GSAP ScrollTrigger or Framer Motion scroll-bound transformations.

### Best Practices
- Always implement a fallback state and performance throttle for lower-end mobile devices (`requestAnimationFrame` clamping, lower mesh polygon counts).
- Allow the user to toggle or pause heavy 3D animations to preserve battery and maintain accessibility.

---

## 3. The Terminal / CLI Environment

### Overview
A favorite among Systems Engineers, Backend Architects, DevOps Engineers, and Cybersecurity Researchers. Recreates a Unix shell or Vim/Emacs interface.

### Key Characteristics
- **Interactive Prompt**: e.g., `guest@portfolio:~$ ` with working commands (`help`, `about`, `projects`, `skills`, `contact`, `clear`, `theme`, `cat resume.txt`, `sudo rm -rf /`).
- **Command History**: Up/Down arrow navigation for previously typed commands.
- **Autocompletion**: Tab completion for available commands.
- **Retro ASCII Art Banner**: Header with styled ASCII font.
- **Dual Mode**: Quick toggle between CLI view and standard GUI view.

### Best Practices
- Always show a list of suggested commands or clickable command chips for visitors who don't want to type manually.
- Include a GUI button ("Switch to Modern UI") for non-technical recruiters.

---

## 4. The Retro Desktop / OS Simulator

### Overview
Simulates a classic operating system interface (macOS Classic, Windows 98, NeXTSTEP, modern macOS / Ubuntu desktop).

### Key Characteristics
- **Desktop Icons**: Clickable icons for "My Projects", "Resume.pdf", "Skills.exe", "Music Player", "Terminal".
- **Draggable & Resizable Windows**: Window manager with minimize, maximize, and close buttons, z-index layering on focus.
- **Dock / Taskbar**: Working start menu, system tray with real-time clock, and active window indicators.
- **Mini Applications**: Built-in simple apps (e.g., retro Paint, Notepad with resume info, Minesweeper or Doom mini-game).

### Best Practices
- Ensure windows default to clean, non-overlapping positions on initial load.
- Ensure touch screen / mobile usability by adapting to full-screen window modals on small screens.

---

## 5. The Deep Case Study / Engineering Narrative

### Overview
Tailored for Senior/Staff Engineers, Technical Leads, and Solutions Architects. Shifts focus from flashy visual effects to profound engineering problem-solving and architectural depth.

### Key Characteristics
- **Architecture Diagrams**: Highlighting microservices, event streams, caching layers, and database schemas.
- **Case Study Structure**:
  1. *The Challenge*: The core business and technical bottleneck.
  2. *The Architecture & Strategy*: Decisions made, tradeoffs evaluated (e.g., PostgreSQL vs DynamoDB, Redis caching vs CDN edge).
  3. *The Implementation*: Critical code snippets and algorithms.
  4. *The Quantified Impact*: Latency reduction, throughput improvement, cost savings, user scale.
- **Interactive Code Walkthroughs**: Side-by-side diff viewers or interactive code block highlights.
