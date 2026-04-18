'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  {
    stat: '800%',
    label: 'LLM Referral Traffic Growth YoY',
    source: 'Source: Semrush, 2024',
    numericValue: 800,
    suffix: '%',
  },
  {
    stat: '58%',
    label: 'Users Now Discover Brands via AI',
    source: 'Source: Capgemini, 2025',
    numericValue: 58,
    suffix: '%',
  },
  {
    stat: '27%',
    label: 'Avg. Conversion Rate from AI-Cited Traffic',
    source: 'Source: Backlinko, 2025',
    numericValue: 27,
    suffix: '%',
  },
  {
    stat: '3×',
    label: 'Faster Delivery with AI Website Build',
    source: 'Internal benchmark',
    numericValue: 3,
    suffix: '×',
  },
]

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 30 })
  const displayRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isInView) return
    motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on('change', (latest: number) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return (
    <span ref={ref} className="stat-number" suppressHydrationWarning>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  )
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        padding: '100px 60px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.03)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
          style={{ marginBottom: 20 }}
        >
          <h2
            className="font-syne"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 38px)',
              color: '#F0F9FF',
              lineHeight: 1.2,
            }}
          >
            The AI Search Era Is Here. Is Your Brand Ready?
          </h2>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 17,
            color: '#94A3B8',
            textAlign: 'center',
            maxWidth: 660,
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          By 2026, over 25% of all search queries will bypass Google entirely — going straight to
          AI-generated answers on ChatGPT, Perplexity, and Gemini. Brands that don&apos;t optimize
          for GEO today will be invisible tomorrow. We make sure that doesn&apos;t happen to you.
        </motion.p>

        {/* Stat Tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
            marginTop: 56,
          }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card"
              style={{ padding: '32px 24px', textAlign: 'center' }}
            >
              <CountUpNumber value={item.numericValue} suffix={item.suffix} />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 14,
                  color: '#94A3B8',
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: 9,
                  color: '#475569',
                  marginTop: 6,
                }}
              >
                {item.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
