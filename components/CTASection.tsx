'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section
      id="cta"
      style={{ padding: '140px 60px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background orb — brightest on page */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(125, 211, 252, 0.09) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-syne"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(28px, 5vw, 52px)',
              lineHeight: 1.1,
              marginBottom: 0,
            }}
          >
            <span style={{ color: '#F0F9FF', display: 'block' }}>
              Let&apos;s Get Your Brand Found —
            </span>
            <span style={{ color: '#F0F9FF', display: 'block' }}>
              On Google, and in{' '}
              <span
                style={{
                  color: '#7DD3FC',
                  textShadow: '0 0 40px rgba(125,211,252,0.5)',
                }}
              >
                Every AI Answer.
              </span>
            </span>
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
            fontSize: 18,
            color: '#94A3B8',
            maxWidth: 560,
            margin: '24px auto 0',
            lineHeight: 1.7,
          }}
        >
          Book a free strategy call. We&apos;ll audit your current visibility on Google and AI platforms,
          identify your biggest growth gaps, and show you exactly how SEO + GEO can scale your US business.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: 40 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            style={{ display: 'inline-block' }}
          >
            <Link
              href="/contact"
              className="glow-btn"
              id="cta-book-strategy-call"
              style={{
                fontSize: 17,
                padding: '18px 44px',
                boxShadow: '0 0 0 0 rgba(125,211,252,0)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(125,211,252,0.4)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(125,211,252,0)'
              }}
            >
              Book Your Free Strategy Call
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Micro text */}
          <p
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: 11,
              color: '#475569',
              marginTop: 16,
            }}
          >
            No commitment. No fluff. Just a clear growth roadmap.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 40,
          }}
        >
          {[
            { Icon: ShieldCheck, text: 'Free Audit. No Strings.' },
            { Icon: Clock, text: 'Response Within 24 Hours' },
          ].map(({ Icon, text }) => (
            <div
              key={text}
              className="glass-card"
              style={{
                borderRadius: 999,
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Icon size={14} color="#7DD3FC" />
              <span
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: 11,
                  color: '#94A3B8',
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
