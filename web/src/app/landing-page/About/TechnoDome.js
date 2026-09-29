"use client";
import React, { useEffect, useRef, useState } from "react";

const TECH_NODES = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
];

export function TechnoDome() {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Animation & Physics state in mutable ref for smooth 60fps
  const stateRef = useRef({
    angleX: 0.1,
    angleY: 0,
    targetSpeedX: 0,
    targetSpeedY: 0.004, // Gentle continuous rotation
    currentSpeedX: 0,
    currentSpeedY: 0.004,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let animId;
    const isSmall = typeof window !== "undefined" && window.innerWidth < 768;
    const isMedium = typeof window !== "undefined" && window.innerWidth < 1024;
    const radius = isSmall
      ? Math.min(95, (window.innerWidth - 60) / 2)
      : isMedium
      ? 160
      : 220;
    const count = TECH_NODES.length;

    // Precompute Fibonacci sphere coordinates
    const baseCoords = TECH_NODES.map((_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: (radius * 0.82) * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      };
    });

    const updateSphere = () => {
      const state = stateRef.current;

      if (!state.isDragging) {
        state.currentSpeedX += (state.targetSpeedX - state.currentSpeedX) * 0.05;
        state.currentSpeedY += (state.targetSpeedY - state.currentSpeedY) * 0.05;
        state.angleX += state.currentSpeedX;
        state.angleY += state.currentSpeedY;
      }

      const cosX = Math.cos(state.angleX);
      const sinX = Math.sin(state.angleX);
      const cosY = Math.cos(state.angleY);
      const sinY = Math.sin(state.angleY);

      baseCoords.forEach((base, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;

        // Rotate around Y
        let rx1 = base.x * cosY + base.z * sinY;
        let ry1 = base.y;
        let rz1 = -base.x * sinY + base.z * cosY;

        // Rotate around X (slight pitch)
        let rx = rx1;
        let ry = ry1 * cosX - rz1 * sinX;
        let rz = ry1 * sinX + rz1 * cosX;

        // Perspective depth calculation
        const depth = (rz + radius) / (2 * radius); // 0 (back) to 1 (front)
        const scale = 0.75 + depth * 0.45; // 0.75 to 1.2
        const opacity = 0.35 + depth * 0.65; // 0.35 to 1.0
        const zIndex = Math.round(depth * 100);

        el.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0px) scale(${scale.toFixed(2)})`;
        el.style.opacity = opacity.toFixed(2);
        el.style.zIndex = `${zIndex}`;
      });

      animId = requestAnimationFrame(updateSphere);
    };

    animId = requestAnimationFrame(updateSphere);
    return () => cancelAnimationFrame(animId);
  }, [mounted, isMobile]);

  // Mouse / Touch handlers
  const handleMouseDown = (e) => {
    stateRef.current.isDragging = true;
    stateRef.current.lastMouseX = e.clientX;
    stateRef.current.lastMouseY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!stateRef.current.isDragging) return;
    const deltaX = e.clientX - stateRef.current.lastMouseX;
    const deltaY = e.clientY - stateRef.current.lastMouseY;
    stateRef.current.lastMouseX = e.clientX;
    stateRef.current.lastMouseY = e.clientY;

    stateRef.current.angleY += deltaX * 0.006;
    stateRef.current.angleX -= deltaY * 0.006;
  };

  const handleMouseUp = () => {
    stateRef.current.isDragging = false;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      stateRef.current.isDragging = true;
      stateRef.current.lastMouseX = e.touches[0].clientX;
      stateRef.current.lastMouseY = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!stateRef.current.isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - stateRef.current.lastMouseX;
    const deltaY = e.touches[0].clientY - stateRef.current.lastMouseY;
    stateRef.current.lastMouseX = e.touches[0].clientX;
    stateRef.current.lastMouseY = e.touches[0].clientY;

    stateRef.current.angleY += deltaX * 0.006;
    stateRef.current.angleX -= deltaY * 0.006;
  };

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "260px" : "480px",
        marginBottom: isMobile ? "28px" : "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        userSelect: "none",
        overflow: "visible",
        background: "transparent",
        border: "none",
        boxShadow: "none",
      }}
    >
      {/* 3D Floating Tech Badges */}
      {mounted &&
        TECH_NODES.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (nodeRefs.current[idx] = el)}
            suppressHydrationWarning
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: isMobile ? "-13px" : "-18px",
              marginLeft: isMobile ? "-36px" : "-52px",
              willChange: "transform, opacity",
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: isMobile ? "5px" : "8px",
                padding: isMobile ? "4px 9px" : "7px 16px",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                color: "#111827",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                whiteSpace: "nowrap",
                fontSize: isMobile ? "10.5px" : "12.5px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: isMobile ? "12px" : "16px",
                  height: isMobile ? "12px" : "16px",
                  objectFit: "contain",
                }}
              />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TechnoDome;
