import React from "react";
import { motion } from "framer-motion";
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

// Generate random stars for background
const stars = [...Array(60)].map((_, i) => ({
  id: i,
  width: Math.random() * 2 + 1,
  top: Math.random() * 55,
  left: Math.random() * 100,
  opacity: Math.random() * 0.6 + 0.2,
}));

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="w-full text-white py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000510 0%, #000c2e 35%, #001a6e 58%, #0044aa 65%, #001a6e 70%, #000c2e 100%)",
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap');
      `}</style>

      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {stars.map((s) => (
          <div
            key={s.id}
            style={{
              position: "absolute",
              width: s.width + "px",
              height: s.width + "px",
              background: "white",
              borderRadius: "50%",
              top: s.top + "%",
              left: s.left + "%",
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      {/* Horizon Cyan Glow */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          zIndex: 1,
          top: "52%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "110%",
          height: "130px",
          background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(0,255,255,0.55) 0%, rgba(0,180,255,0.25) 40%, transparent 75%)",
          filter: "blur(8px)",
        }}
      />

      {/* Perspective Grid */}
      <div
        className="absolute pointer-events-none overflow-hidden hidden md:block"
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
            backgroundImage: "linear-gradient(to bottom, rgba(0,200,255,0.7) 1px, transparent 1px), linear-gradient(to right, rgba(120,80,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 60px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 2,
          height: "35%",
          background: "linear-gradient(to top, #000510 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="max-w-5xl mx-auto text-center relative flex flex-col items-center gap-4 md:gap-6"
        style={{ zIndex: 10 }}
      >
        {/* Location Chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(0,229,255,0.3)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "7px 20px",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "'Rajdhani', sans-serif",
            color: "rgba(0,229,255,0.8)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              background: "#00ffff",
              borderRadius: "50%",
              display: "inline-block",
              boxShadow: "0 0 8px #00ffff",
            }}
          />
          Abuja, Nigeria
        </motion.div>

        {/* Headline - Professional Size */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(32px, 6vw, 76px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#f0f8ff",
            margin: 0,
            textShadow: "0 0 25px rgba(0,180,255,0.25)",
          }}
        >
          SOFTWARE
          <br />
          DEVELOPER
          <br />
          <span
            style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              background: "linear-gradient(90deg, #00e5ff 0%, #7b7fff 50%, #00ffcc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              marginTop: 6,
            }}
          >
            &amp; ENTREPRENEUR
          </span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Building Real-World Digital Products"
              
             </span>

        </motion.h1>

        {/* Subheading - Standard Professional Size */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "rgba(180, 200, 220, 0.75)",
            maxWidth: 500,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          I design, build, and scale applications that solve real business problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button
  onClick={() => scrollTo("projects")}
  whileHover={{ scale: 1.08, y: -2 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(0,229,255,0.12)",
    border: "1px solid rgba(0,229,255,0.5)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: "#00e5ff",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    padding: "13px 30px",
    borderRadius: 8,
    cursor: "pointer",
    textTransform: "uppercase",
    boxShadow: "0 0 0 rgba(0,229,255,0)",
  }}
  onHoverStart={(e) => {
    e.target.style.boxShadow = "0 0 24px rgba(0,229,255,0.35)";
    e.target.style.background = "rgba(0,229,255,0.22)";
  }}
  onHoverEnd={(e) => {
    e.target.style.boxShadow = "none";
    e.target.style.background = "rgba(0,229,255,0.12)";
  }}
>
  View My Work <ArrowRight size={16} />
</motion.button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "rgba(203,213,225,0.9)",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "13px 30px",
              borderRadius: 8,
              cursor: "pointer",
              transition: "all 0.2s",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "rgba(203,213,225,0.9)";
            }}
          >
            Let's Work <ArrowRight size={16} />
          </button>
        </motion.div>
      
        {/* Stat Cards */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(0,20,60,0.6)",
                border: "1px solid rgba(0,229,255,0.25)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: 10,
                padding: "16px 28px",
                textAlign: "center",
                minWidth: 110,
              }}
            >
              <div
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: 26,
                  fontWeight: 900,
                  color: "#00e5ff",
                  lineHeight: 1,
                  marginBottom: 6,
                  textShadow: "0 0 12px rgba(0,229,255,0.5)",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: 12,
                  color: "rgba(100,116,139,1)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
        <div className="overflow-hidden mt-12 w-full">
  <motion.div
    className="flex gap-10 text-gray-400 text-lg whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    }}
  >
    {tech.map((item, index) => (
      <motion.span
        key={index}
        whileHover={{
          scale: 1.1,
          y: -4,
          color: "#00e5ff",
          textShadow: "0 0 12px rgba(0,229,255,0.6)",
        }}
        style={{
          padding: "6px 16px",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 20,
          backdropFilter: "blur(8px)",
          cursor: "default",
        }}
      >
        {item}
      </motion.span>
    ))}

    {/* Duplicate for seamless loop */}
    {tech.map((item, index) => (
      <motion.span
        key={"dup-" + index}
        style={{
          padding: "6px 16px",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 20,
          backdropFilter: "blur(8px)",
        }}
      >
        {item}
      </motion.span>
    ))}
  </motion.div>
</div>

        {/* Glass Tech Card */}
        
      </div>
    </section>
  );
}

export default Hero;
