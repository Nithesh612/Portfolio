"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSend = () => {
    if (!form.name || !form.message) return;
    const text = `Hello, my name is ${form.name}%0A%0A${form.message}`;
    const phone = "919876543210";
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        overflow: "hidden",
        padding: "80px 24px",
      }}
    >
      {/* Ambient background aura */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.08)",
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3))" }} />
          <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.45em", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
            Contact
          </span>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, rgba(255,255,255,0.3))" }} />
        </div>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 7vw, 90px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Let's Build Together
          </h1>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
          {/* Left Side: Info & Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 8px", color: "#ffffff" }}>
              Start a Conversation
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6", margin: 0 }}>
              Have a project, job opportunity, or just want to say hi? Send me a direct message via WhatsApp or connect on social media.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "20px" }}>📍</span>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}>Chennai, Tamil Nadu, India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "20px" }}>✉️</span>
                <a href="mailto:nitheshkumar.dev@gmail.com" style={{ fontSize: "14px", color: "#ff8a65", textDecoration: "none" }}>
                  nitheshkumar.dev@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: "12px" }}>
              <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", display: "block", marginBottom: "12px" }}>
                Social Channels
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  { name: "GitHub", link: "https://github.com" },
                  { name: "LinkedIn", link: "https://linkedin.com" },
                  { name: "Instagram", link: "https://instagram.com" },
                  { name: "Telegram", link: "https://t.me" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 18px",
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                    }}
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div
            style={{
              padding: "36px",
              borderRadius: "28px",
              background: "rgba(18,18,18,0.85)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", fontFamily: "monospace", marginBottom: "8px" }}>
                  Name
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", fontFamily: "monospace", marginBottom: "8px" }}>
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message here..."
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <button
                suppressHydrationWarning
                type="button"
                onClick={handleSend}
                style={{
                  width: "100%",
                  padding: "15px 24px",
                  borderRadius: "14px",
                  background: "#ff5722",
                  color: "#000000",
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
