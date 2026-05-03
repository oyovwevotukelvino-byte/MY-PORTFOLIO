import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import { contactConfig } from '../data/contact';

/* ================= STYLES ================= */
const getContactStyles = (colors) => ({
  section: {
    background: `linear-gradient(to bottom, ${colors.bg}, ${colors.bgSecondary})`,
  },
  primaryCard: {
    border: `${colors.accentEmerald}80`,
    background: `${colors.accentEmerald}0D`,
    glow: colors.glow,
  },
  card: {
    border: `${colors.cardBorder}`,
    background: `${colors.bg}50`,
    hoverBorder: `${colors.accentEmerald}80`,
    hoverBg: `${colors.accentEmerald}0D`,
  },
  iconPrimary: {
    bg: `linear-gradient(135deg, ${colors.accentEmerald}50, ${colors.accent}50)`,
    border: `${colors.accentEmerald}60`,
    color: colors.accentEmerald,
  },
  iconSecondary: {
    bg: `${colors.glass}`,
    border: `${colors.glassBorder}`,
    color: colors.textMuted,
    hoverColor: colors.accentEmerald,
  },
  titlePrimary: {
    color: colors.accentEmerald,
    textShadow: colors.glowText,
  },
  titleSecondary: {
    color: colors.textPrimary,
    hoverColor: colors.accentEmerald,
  },
  descPrimary: colors.accentEmerald,
  descSecondary: colors.textMuted,
  locationCard: {
    background: `${colors.bg}50`,
    border: colors.cardBorder,
    color: colors.textMuted,
  },
  border: colors.cardBorder,
});

/* ================= COMPONENT ================= */
function Contact({ config = contactConfig }) {
  const { colors } = useTheme();
  const styles = getContactStyles(colors);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  // Destructure config
  const { heading, description, note, contacts, location, copyright } = config;

  return (
    <section 
      id="contact" 
      className="w-full py-16 md:py-24 px-4 md:px-6"
      style={styles.section}
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Intro */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 neon-text glow">
            {heading}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            {description}
          </p>
          <div className="text-gray-500 text-base md:text-lg mb-12 md:mb-16">
            {note}
          </div>
        </Motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {contacts.map((contact, index) => {
            const Icon = MessageCircle; // Use fixed icon for now, or map icons
            return (
              <Motion.div
                key={contact.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`glow-hover group p-8 rounded-2xl border transition-all cursor-pointer ${
                  contact.primary 
                    ? 'border-emerald-500/50 bg-emerald-500/5 md:col-span-2 shadow-2xl glow' 
                    : 'border-white/20 bg-black/30 hover:border-emerald-400/50 hover:bg-emerald-500/5'
                }`}
                onClick={() => openLink(contact.link)}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-2xl glow flex-shrink-0 ${
                    contact.primary 
                      ? 'bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/40' 
                      : 'bg-white/10 border border-white/30'
                  }`}>
                    <Icon className={`w-8 h-8 ${contact.primary ? 'text-emerald-400' : 'text-gray-400 group-hover:text-emerald-400 transition-colors'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      contact.primary ? 'text-emerald-400 neon-text' : 'text-white group-hover:text-emerald-400'
                    }`}>
                      {contact.title}
                    </h3>
                    <p className={`text-lg ${contact.primary ? 'text-emerald-300' : 'text-gray-400 group-hover:text-gray-300'}`}>
                      {contact.desc}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 mt-auto ${
                  contact.primary ? 'text-emerald-400 font-semibold' : 'text-sm text-gray-500'
                }`}>
                  <span>Click to connect</span>
                  <ArrowRight className={`w-5 h-5 ${contact.primary ? 'ml-auto' : ''} group-hover:translate-x-1 transition-transform`} />
                </div>
              </Motion.div>
            );
          })}
        </div>

        {/* Location */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-white/10 pt-16"
        >
          <div className="glow-hover inline-flex items-center gap-3 p-6 bg-black/30 rounded-2xl border border-white/20 max-w-sm mx-auto">
            <MapPin className="w-6 h-6 text-gray-400" />
            <span className="text-gray-400">{location}</span>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            {copyright}
          </p>
        </Motion.div>
      </div>
    </section>
  );
}

export default Contact;
