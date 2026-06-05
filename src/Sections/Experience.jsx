
import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button from '../Components/Button';
import { Award } from 'lucide-react';
import { experience } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="section">
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div className="section-label">
            Experience
          </div>

          <h2
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}
          >
            Building Through
            <br />
            Experience
          </h2>

          <p
            style={{
              maxWidth: '620px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontSize: '16px',
            }}
          >
            A journey of building products, solving problems,
            and creating meaningful work across technology,
            business, and entrepreneurship.
          </p>
        </Motion.div>

        {/* Timeline */}
        <div>
          {experience.map((exp, index) => (
            <Motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              style={{
                padding: '56px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-text)',
                  marginBottom: '14px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {exp.year}
              </div>

              <h3
                style={{
                  fontSize: 'clamp(24px,3vw,34px)',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: 'var(--text-primary)',
                }}
              >
                {exp.title}
              </h3>

              <p
                style={{
                  color: 'var(--accent-text)',
                  marginBottom: '24px',
                  fontSize: '15px',
                }}
              >
                {exp.company}
              </p>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                  fontSize: '16px',
                  maxWidth: '620px',
                  margin: '0 auto',
                }}
              >
                {exp.desc}
              </p>
            </Motion.div>
          ))}
        </div>

        {/* Closing */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            marginTop: '100px',
            textAlign: 'center',
          }}
        >
          <Award
            size={28}
            style={{
              marginBottom: '24px',
              opacity: 0.8,
            }}
          />

          <p
            style={{
              maxWidth: '560px',
              margin: '0 auto 40px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}
          >
            Years of learning, experimentation, failures,
            launches, and continuous improvement across
            software development, business, writing,
            and entrepreneurship.
          </p>

          <Button
            name="Get In Touch"
            style="btn btn-primary"
          />
        </Motion.div>
      </div>
    </section>
  );
}

export default Experience;

