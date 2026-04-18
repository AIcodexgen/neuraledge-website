'use client'

import { motion } from 'framer-motion'
import { Search, Wrench, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit & Strategy',
    body: 'We analyze your current digital presence, identify SEO and GEO gaps, and map a custom growth strategy aligned to your US market goals.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Build & Optimize',
    body: 'We build or redesign your website with AI tools, implement on-page and technical SEO, and structure your content for both Google and generative AI engines.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Rank & Get Cited',
    body: 'We run GEO and SEO campaigns that put your brand on page one of Google and inside AI-generated answers on ChatGPT, Perplexity, and Gemini.',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export default function HowWeWork() {
  return (
    <section
      id="process"
      style={{ padding: '120px 60px' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
          style={{ marginBottom: 64 }}
        >
          <span className="section-label" style={{ marginBottom: 14, display: 'block' }}>
            THE PROCESS
          </span>
          <h2
            className="font-syne"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#F0F9FF',
            }}
          >
            From Strategy to Search Dominance
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            position: 'relative',
          }}
        >
          {/* Dashed connector line — desktop only */}
          <div
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              right: '10%',
              height: 1,
              borderTop: '1px dashed rgba(125, 211, 252, 0.2)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="glass-card"
                style={{
                  padding: '40px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                }}
              >
                {/* Watermark number */}
                <span
                  className="font-syne"
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontSize: 96,
                    fontWeight: 800,
                    color: 'rgba(125, 211, 252, 0.04)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="icon-box" style={{ marginBottom: 24 }}>
                  <Icon size={24} color="#7DD3FC" />
                </div>

                {/* Step label */}
                <span
                  style={{
                    fontFamily: 'var(--font-space-mono)',
                    fontSize: 10,
                    color: '#475569',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  STEP {step.number}
                </span>

                {/* Title */}
                <h3
                  className="font-syne"
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    color: '#F0F9FF',
                    marginBottom: 14,
                  }}
                >
                  {step.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 15,
                    color: '#94A3B8',
                    lineHeight: 1.7,
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
