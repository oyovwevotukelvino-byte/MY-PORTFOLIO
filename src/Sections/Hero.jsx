import React from "react";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { ArrowRight } from "lucide-react";

const tech = [
  "React", "Node.js", "Next.js", "Tailwind", "MongoDB",
  "Express", "Paystack", "Firebase", "Figma", "Git",
  "APIs", "Full-Stack"
];

const stats = [
  { num: "12+", label: "Projects" },
  { num: "3+", label: "Years Exp." },
  { num: "5", label: "Tech Stacks" },
];

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="w-full text-white py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #0d1528 40%, #0a1020 70%, #060d1a 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute pointer-events-none"
        style={{ width: 400, height: 400, top: -100, left: -80, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none"
        style={{ width: 300, height: 300, bottom: 0, right: -60, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none"
        style={{ width: 220, height: 220, top: "45%", right: 160, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-5">

        {/* Location chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "6px 18px", borderRadius: 100,
            fontSize: 12, fontWeight: 500,
            color: "rgba(148,163,184,1)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}
        >
          <span style={{ width: 6, height: 6, background: "#38bdf8", borderRadius: "50%", display: "inline-block" }} />
          Abuja, Nigeria
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px, 6vw, 62px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
            margin: 0,
          }}
        >
          Software Developer<br />
          &amp;{" "}
          <span style={{
            background: "linear-gradient(90deg, #38bdf8 0%, #818cf8 50%, #34d399 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Entrepreneur
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 16, fontWeight: 300,
            color: "rgba(148,163,184,0.85)",
            maxWidth: 440, lineHeight: 1.7, margin: 0,
          }}
        >
          I design, build, and scale applications that solve real business problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(56,189,248,0.15)",
              border: "1px solid rgba(56,189,248,0.35)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "#7dd3fc",
              fontSize: 14, fontWeight: 500,
              padding: "11px 26px", borderRadius: 12,
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(56,189,248,0.25)";
              e.currentTarget.style.borderColor = "rgba(56,189,248,0.6)";
              e.currentTarget.style.color = "#bae6fd";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(56,189,248,0.15)";
              e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)";
              e.currentTarget.style.color = "#7dd3fc";
            }}
          >
            View My Work <ArrowRight size={16} />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "rgba(203,213,225,0.9)",
              fontSize: 14, fontWeight: 500,
              padding: "11px 26px", borderRadius: 12,
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#f1f5f9";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(203,213,225,0.9)";
            }}
          >
            Let's Work <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          className="flex gap-3 justify-center flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: 14,
              padding: "14px 24px",
              textAlign: "center", minWidth: 100,
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 22, fontWeight: 700,
                color: "#38bdf8", lineHeight: 1, marginBottom: 4,
              }}>{s.num}</div>
              <div style={{
                fontSize: 11, color: "rgba(100,116,139,1)",
                textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500,
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Glass tech card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 20,
            padding: "24px 32px",
            width: "100%", maxWidth: 580,
          }}
        >
          <p style={{
            fontSize: 11, textTransform: "uppercase",
            letterSpacing: "0.1em", color: "rgba(100,116,139,1)",
            fontWeight: 500, marginBottom: 14, marginTop: 0,
          }}>Tech Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {tech.map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(148,163,184,0.9)",
                  fontSize: 12, fontWeight: 500,
                  padding: "5px 14px", borderRadius: 8,
                  letterSpacing: "0.02em", cursor: "default",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(56,189,248,0.1)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
                  e.currentTarget.style.color = "#7dd3fc";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(148,163,184,0.9)";
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Syne font import — add to your index.html or global CSS instead */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');`}</style>
    </section>
  );
}

export default Hero;

