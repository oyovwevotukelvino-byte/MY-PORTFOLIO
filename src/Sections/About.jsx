import React from "react";
import { motion as Motion } from "framer-motion";
import { useTheme } from "../theme/ThemeProvider";

function About() {
  const { colors, fonts } = useTheme();

  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 px-4 md:px-6 backdrop-blur-sm"
      style={{
        background: colors.bgSecondary,
        fontFamily: fonts.body,
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              color: colors.textPrimary,
              fontFamily: fonts.heading,
              textShadow: colors.glowText,
            }}
          >
            About Me
          </h2>

          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: colors.gradientText,
              boxShadow: colors.glow,
            }}
          />
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* ===== LEFT ===== */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{
                color: colors.textPrimary,
                fontFamily: fonts.heading,
              }}
            >
              Strategic Builder, Not Just Coder
            </h3>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Self-taught developer with entrepreneur mindset. I don't just write code – I build systems that scale businesses. 
              From payment integrations that handle real transactions to export platforms connecting Nigeria to Dubai markets.
            </p>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: colors.textMuted }}
            >
              Hands-on with full-stack apps, but my edge is turning ideas into revenue-generating products. 
              Looking for partners who want to build in silence, then dominate.
            </p>

            <Motion.div whileHover={{ scale: 1.05 }}>
              <button
                style={{
                  background: colors.gradientButton,
                  color: colors.textPrimary,
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "18px",
                  boxShadow: colors.glowStrong,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Partner with Me
              </button>
            </Motion.div>
          </Motion.div>

          {/* ===== RIGHT (STATS) ===== */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-8">
              
              {[ 
                { value: "5+", label: "Projects Deployed", color: colors.accent },
                { value: "2+", label: "Business Ideas Live", color: colors.accentPurple },
                { value: "100%", label: "Production Ready", color: colors.accentGreen },
                { value: "24/7", label: "Builder Mode", color: colors.primary },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{
                    background: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="text-4xl font-bold"
                    style={{
                      color: item.color,
                      textShadow: colors.glowText,
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    className="mt-2"
                    style={{ color: colors.textMuted }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}

            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;