import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button from '../Components/Button';
import { skills } from '../data/skills';
import { Laptop, Code, Database, Paintbrush, TrendingUp } from 'lucide-react';

function Skills() {
  const getIcon = (title) => {
    switch (title) {
      case 'Full-Stack Development': return Laptop;
      case 'Payment Integrations': return Code;
      case 'API & Backend': return Database;
      case 'UI/UX Design': return Paintbrush;  // was DesignTools
      case 'Business Scaling': return TrendingUp;
      default: return Laptop;
    }
  };

  return (
<section id="skills" className="section">
  <div
    style={{
      maxWidth: '760px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    {/* Header */}
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '80px' }}
      
    >
      <div className="section-label">
        Expertise
      </div>

      <h2 className="section-title">
        Skills & Expertise
      </h2>

      <p className="section-desc">
        The tools, technologies, and capabilities I use
        to design, build, and scale modern digital products.
      </p>
    </Motion.div>

    {/* Skills */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginBottom: '96px',
      }}
    >
      {skills.map((skill, index) => {
        const Icon = getIcon(skill.title);

        return (
          <Motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{ y: -2 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px',
              textAlign: 'left',
              transition: 'all 0.25s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--accent-muted)',
                  border: '1px solid var(--accent-border)',
                  flexShrink: 0,
                }}
              >
                <Icon
                  size={24}
                  style={{
                    color: 'var(--accent-text)',
                  }}
                />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {skill.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    fontSize: '15px',
                    margin: 0,
                  }}
                >
                  {skill.desc}
                </p>
              </div>
            </div>
          </Motion.div>
        );
      })}
    </div>

    {/* Footer CTA */}
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p
        style={{
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          marginBottom: '32px',
        }}
      >
        From frontend interfaces to backend systems,
        I focus on building products that are fast,
        scalable, and designed for real business impact.
      </p>

      <Button
        name="View My Projects"
        style="btn btn-primary"
      />
    </Motion.div>
  </div>
</section>
  );
}

export default Skills;
