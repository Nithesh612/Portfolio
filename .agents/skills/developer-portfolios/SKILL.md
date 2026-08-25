---
name: developer-portfolios
description: >-
  Comprehensive guide and design framework for architecting, building, evaluating, and polishing
  world-class developer portfolios. Inspired by the curated emmabostian/developer-portfolios collection,
  use this skill whenever the user is creating, redesigning, reviewing, or enhancing a developer portfolio,
  personal website, software engineer resume site, or project showcase.
---

# Developer Portfolios Design & Engineering Guide

This skill provides a battle-tested blueprint for crafting exceptional developer portfolios that stand out to recruiters, engineering managers, clients, and fellow developers. Inspired by the curated collection of 1,900+ developer portfolios in [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios).

---

## 🎯 The Core Philosophy of an Elite Portfolio

A great developer portfolio is **not just a resume on the web**—it is a live proof-of-work demonstration of engineering rigor, design taste, product thinking, and individuality.

Every world-class portfolio balances five pillars:
1. **Immediate Clarity**: Answer *Who are you?*, *What do you build?*, and *What is your specialty?* within 3 seconds.
2. **Proof of Competence**: Showcase depth over breadth with rich case studies, live demos, and clean source code.
3. **Delight & Micro-Interactions**: Engage the visitor with fluid animations, magnetic buttons, subtle glows, and responsive feedback.
4. **Frictionless Action**: Make it effortless to view code, test live applications, inspect credentials, and get in touch.
5. **Technical Performance**: Lightning-fast load times, responsive across all viewports, accessible, and SEO-optimized.

---

## 🏛️ Portfolio Archetypes & Design Styles

Choose the right archetype based on the developer's specialty and personal brand:

| Archetype | Best For | Signature Features | Reference |
| :--- | :--- | :--- | :--- |
| **Modern Minimalist / Clean SaaS** | Full-Stack, Frontend, Product Engineers | Bento grids, sleek dark mode, glowing borders, smooth typography | [Archetypes Guide](./references/archetypes.md#1-the-modern-minimalist--bento-saas) |
| **Interactive 3D / Creative** | Creative Technologists, 3D/Graphics Devs | Three.js/Spline scenes, particle backgrounds, physics canvas | [Archetypes Guide](./references/archetypes.md#2-the-interactive-3d--canvas-showpiece) |
| **Terminal / Hacker CLI** | Systems, Backend, DevOps, Security Engineers | Interactive CLI prompt, ASCII art, bash command execution, theme switcher | [Archetypes Guide](./references/archetypes.md#3-the-terminal--cli-environment) |
| **Retro OS Desktop** | Creative Full-Stack & UI/UX Engineers | Window management (drag/minimize/maximize), desktop icons, retro dock | [Archetypes Guide](./references/archetypes.md#4-the-retro-desktop--os-simulator) |
| **Deep Case Study / Storyteller** | Senior/Lead Engineers, Architects | Architecture diagrams, problem-solution-metrics narrative, deep technical breakdowns | [Archetypes Guide](./references/archetypes.md#5-the-deep-case-study--engineering-narrative) |

For deep dives and component patterns for each archetype, consult [references/archetypes.md](./references/archetypes.md).

---

## 🧩 Essential Sections & Architecture

A complete portfolio should feature the following well-structured sections:

1. **Header & Navigation**
   - Floating glassmorphism navbar (`backdrop-blur-md`).
   - Active section spy with smooth scrolling.
   - Quick links: Work, Projects, Skills, Experience, About, Contact.
   - Theme toggle (Dark/Light/System) and quick resume download button.

2. **Hero Section**
   - Magnetic headline with dynamic status pill (e.g. `🟢 Available for new opportunities`).
   - High-impact value proposition: *Full Stack Engineer specializing in high-performance web applications & distributed systems.*
   - Primary CTA (*"Explore Projects"*) + Secondary CTA (*"Contact Me"* / *"View Resume"*).
   - Social proof / GitHub stats ticker / Tech stack badge strip.

3. **Featured Projects (The Heart of the Portfolio)**
   - Curated selection of 3–6 top projects (prioritize quality over quantity).
   - Each project card must include:
     - High-res mockups or interactive video/gif preview.
     - Project title, tagline, and role.
     - Tech stack pills (e.g. Next.js, TypeScript, PostgreSQL, Tailwind).
     - Key metrics / quantified impact (e.g. *"Reduced latency by 45%"*, *"10k+ monthly active users"*).
     - Direct links: **Live Demo ↗** and **GitHub Repo ↗**.

4. **Interactive Skill Matrix / Tech Arsenal**
   - Categorized by domain (Frontend, Backend, Cloud & DevOps, Databases, AI/Tooling).
   - Avoid generic progress bars (e.g. "JavaScript 90%")—use real tags, proficiency tiers, or interactive filtering.

5. **Work Experience & Career Chronology**
   - Interactive timeline or collapsible accordion with company logos.
   - Clear job title, company name, date ranges, and location/remote tag.
   - Bullet points highlighting quantified impact, architecture decisions, and technologies used.

6. **Engineering Articles / Thoughts / Notes (Optional but High-Value)**
   - Links to technical blog posts, dev.to/hashnode/medium or integrated MDX blog.
   - Demonstrates communication skills and knowledge sharing.

7. **Contact & Footer**
   - Direct interactive contact form with instant validation.
   - One-click copy email button with visual confirmation.
   - Social links (GitHub, LinkedIn, X/Twitter, Discord, Email).
   - Interactive easter egg or copyright with current year.

For detailed implementation guidelines and copy templates, see [references/components_and_sections.md](./references/components_and_sections.md).

---

## 🎨 Visual Design & Polish Standards

Follow these rules to ensure the portfolio looks world-class:

- **Color Palettes**:
  - *Dark Slate*: Deep neutral background (`#090d16`, `#0f172a`), borders (`#1e293b`), foreground (`#f8fafc`).
  - *Accent Glows*: Electric Violet (`#8b5cf6`), Cyber Cyan (`#06b6d4`), Emerald Pulse (`#10b981`), Sunset Coral (`#f43f5e`).
- **Glassmorphism & Depth**:
  - Background blurs (`backdrop-blur-lg`), semi-transparent surfaces (`rgba(255, 255, 255, 0.03)`), subtle 1px border highlights (`border-white/10`).
- **Typography**:
  - Modern sans-serif heading & body fonts: Inter, Plus Jakarta Sans, Outfit, Space Grotesk, or Geist.
  - Monospace font for code and badges: JetBrains Mono, Fira Code, or Geist Mono.
- **Animations & Micro-interactions**:
  - Smooth spring physics for hovers and modal opens.
  - Hover tilt / card spotlight effect tracking cursor position.
  - Staggered entry animations as sections scroll into view.

---

## 🛠️ Step-by-Step Workflow for Building or Upgrading a Portfolio

When assisting a user with their developer portfolio:

1. **Assess the Developer Profile & Goal**:
   - Determine target role (Frontend, Backend, Full-Stack, Mobile, AI/ML, DevOps).
   - Identify standout projects and key achievements.
   - Select an appropriate archetype.
2. **Review or Design the Layout**:
   - Establish design tokens (colors, typography, grid system).
   - Plan responsive layouts (Mobile first -> Tablet -> Desktop ultrawide).
3. **Build Core Components**:
   - Implement Navbar, Hero, Project Showcase Cards, Experience Timeline, Skills Grid, and Contact Section.
4. **Add Interactive Delight**:
   - Spotlight hover effects, smooth scroll indicators, dynamic badge filters, copy buttons.
5. **Optimize Performance & SEO**:
   - Metadata tags, OpenGraph preview images, semantic tags, Web Vitals optimization.
6. **Verify Across Devices**:
   - Test responsiveness, accessibility (color contrast, keyboard focus, screen readers), and cross-browser stability.
