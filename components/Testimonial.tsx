'use client'

import { motion } from 'framer-motion'

const logos = [
  'TechCorp USA',
  'GrowthLabs',
  'NexaDigital',
  'VentureBase',
  'ScaleWorks',
  'FounderStack',
]

// Duplicate for seamless loop
const allLogos = [...logos, ...logos]

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      style={{ padding: '100px 60px', textAlign: 'center' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 14,
            color: '#475569',
            letterSpacing: '0.05em',
            marginBottom: 36,
          }}
        >
          Trusted by growth-focused US businesses
        </motion.p>

        {/* Logo Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              overflow: 'hidden',
              width: '100%',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              marginBottom: 56,
            }}
          >
            <div
              className="ticker-track"
              style={{
                display: 'flex',
                gap: 24,
                width: 'max-content',
              }}
            >
              {allLogos.map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="glass-card"
                  style={{
                    borderRadius: 999,
                    padding: '12px 28px',
                    opacity: 0.55,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 13,
                      color: '#94A3B8',
                    }}
                  >
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial Block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '40px 48px',
            textAlign: 'left',
          }}
        >
          {/* Quote mark */}
          <div
            className="font-syne"
            style={{
              fontWeight: 800,
              fontSize: 64,
              color: '#7DD3FC',
              lineHeight: 0.5,
              marginBottom: 32,
              opacity: 0.8,
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 17,
              color: '#F0F9FF',
              lineHeight: 1.7,
              fontStyle: 'italic',
              marginBottom: 28,
            }}
          >
            NeuralEdge got us ranking on Google AND appearing in ChatGPT answers within 90 days.
            Our qualified leads tripled. Best investment we made this year.
          </p>

          {/* Attribution */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              className="glass-card"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: 12,
                  color: '#7DD3FC',
                  fontWeight: 700,
                }}
              >
                AM
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#F0F9FF',
                  marginBottom: 2,
                }}
              >
                Alex M.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  color: '#94A3B8',
                }}
              >
                Founder, SaaS Startup — Austin, TX
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
