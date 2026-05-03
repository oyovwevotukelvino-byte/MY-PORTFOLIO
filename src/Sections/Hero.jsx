import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";
import { homeHero } from "../data/hero";

/* ================= UTIL ================= */
const generateStars = (count = 60) =>
  [...Array(count)].map((_, i) => ({
    id: i,
    width: Math.random() * 2 + 1,
    top: Math.random() * 55,
    left: Math.random() * 100,
    opacity: Math.random() * 0.6 + 0.2,
  }));

const stars = generateStars();

/* ================= STYLES (Theme-driven) ================= */
// Get theme values for consistent styling
const getHeroStyles = (colors, fonts) => ({
  section: {
    background: colors.gradientPrimary,
    fontFamily: fonts.body, // ✅ FIXED
  },
  locationBadge: {
    background: colors.glass,
    border: `1px solid ${colors.primaryBorder}`,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: colors.primaryGlow,
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: colors.primaryBg,
    border: `1px solid ${colors.primaryBorder}`,
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: colors.primary,
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    padding: "13px 30px",
    borderRadius: 8,
    height: "80px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: colors.glass,
    border: `1px solid ${colors.glassBorder}`,
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: colors.textSecondary,
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    padding: "13px 30px",
    borderRadius: 8,
    height: "80px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  statCard: {
    padding: "24px",
    borderRadius: 12,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: `1px solid ${colors.primaryBorder}`,
    background: colors.card,
  },
  techBadge: {
    padding: "8px 16px",
    borderRadius: "9999px",
    border: `1px solid ${colors.glassBorder}`,
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },
  glow: {
    background: `radial-gradient(ellipse 80% 100% at 50% 50%, ${colors.primary}88 0%, ${colors.accent}40 40%, transparent 75%)`,
  },
  fade: {
    background: `linear-gradient(to top, ${colors.bg} 0%, transparent 70%)`,
  },
});

/* ================= COMPONENT ================= */
function Hero({ config = homeHero }) {
  const { colors, fonts } = useTheme();
  const styles = getHeroStyles(colors, fonts);
  
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Destructure config with defaults
  const { 
    location, 
    title, 
    tagline, 
    description, 
    buttons, 
    stats, 
    tech 
  } = config;

  return (
    <section
      id="hero"
      className="w-full text-white py-16 md:py-28 px-4 md:px-6 relative overflow-hidden"
      style={styles.section}
    >
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap');
      `}</style>

      {/* ===== Background Layers ===== */}

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {stars.map((s) => (
          <div
            key={s.id}
            style={{
              position: "absolute",
              width: s.width,
              height: s.width,
              background: colors.star,
              borderRadius: "50%",
              top: `${s.top}%`,
              left: `${s.left}%`,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          zIndex: 1,
          top: "52%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "110%",
          height: "130px",
          background: styles.glow.background,
          filter: "blur(8px)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          zIndex: 1,
          top: "54%",
          left: 0,
          right: 0,
          bottom: 0,
          perspective: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-20%",
            right: "-20%",
            bottom: 0,
            transform: "rotateX(55deg)",
            transformOrigin: "top center",
            backgroundImage: `linear-gradient(to bottom, ${colors.gridLine} 1px, transparent 1px), linear-gradient(to right, ${colors.gridLineAlt} 1px, transparent 1px)`,
            backgroundSize: "80px 60px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 2,
          height: "35%",
          background: styles.fade.background,
        }}
      />

      {/* ===== Content ===== */}
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">

        {/* Location */}
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={styles.locationBadge}
        >
          {location.showDot && (
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ background: colors.accent, boxShadow: `0 0 8px ${colors.accent}` }} 
            />
          )}
          {location.text}
        </Motion.div>

        {/* Headline */}
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-black leading-tight"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(32px, 6vw, 76px)",
          }}
        >
          {title.prefix} <br /> {title.middle} <br />

          <span 
            className="block mt-2 text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(28px,5vw,60px)",
              backgroundImage: colors.gradientText,
            }}
          >
            {title.highlight}
          </span>

          <span 
            className="block text-lg md:text-2xl mt-3"
            style={{ color: colors.textSecondary }}
          >
            {tagline}
          </span>
        </Motion.h1>

        {/* Subtext */}
        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-base leading-relaxed"
          style={{ color: colors.textMuted }}
        >
          {description}
        </Motion.p>

        {/* Buttons */}
        <Motion.div className="flex flex-col sm:flex-row gap-4">
          <Motion.button
            onClick={() => scrollTo(buttons.primary.action)}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={styles.primaryBtn}
          >
            {buttons.primary.text} <ArrowRight size={16} />
          </Motion.button>

          <button
            onClick={() => scrollTo(buttons.secondary.action)}
            style={styles.secondaryBtn}
          >
            {buttons.secondary.text} <ArrowRight size={16} />
          </button>
        </Motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center"
              style={styles.statCard}
            >
              <div 
                className="text-2xl font-black"
                style={{ color: colors.primary }}
              >
                {s.num}
              </div>
              <div 
                className="text-xs uppercase tracking-widest"
                style={{ color: colors.textMuted }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="overflow-hidden mt-10 w-full">
          <Motion.div
            className="flex gap-10 whitespace-nowrap"
            style={{ color: colors.textMuted }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...tech, ...tech].map((item, i) => (
              <span
                key={i}
                className="hover:transition"
                style={styles.techBadge}
              >
                {item}
              </span>
            ))}
          </Motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
