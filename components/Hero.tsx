'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Globe, Code2, Palette } from 'lucide-react'
import Link from 'next/link'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center relative" style={{ padding: '120px 24px 80px' }}>
      <h1 className="sr-only">AI-Powered Website Design, SEO &amp; GEO Services for US Businesses</h1>
      <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <motion.div {...fadeUp(0.2)} className="flex justify-center mb-8">
          <div className="glass-card flex items-center gap-2" style={{ borderRadius: 999, padding: '8px 20px', display: 'inline-flex' }}>
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: '#7DD3FC', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, color: '#7DD3FC', letterSpacing: '0.02em' }}>★  AI-Powered Digital Marketing — Built for US Businesses</span>
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.35)}>
          <div className="font-syne" style={{ fontWeight: 800, lineHeight: 1.05 }}>
            <div style={{ fontSize: 'clamp(44px, 8vw, 80px)', color: '#F0F9FF' }}>Your Brand. Found.</div>
            <div style={{ fontSize: 'clamp(44px, 8vw, 80px)', color: '#F0F9FF' }}>On Google. On AI.</div>
            <div style={{ fontSize: 'clamp(44px, 8vw, 80px)', color: '#7DD3FC', textShadow: '0 0 40px rgba(125,211,252,0.4)' }}>Everywhere.</div>
          </div>
        </motion.div>
        <motion.p {...fadeUp(0.5)} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, lineHeight: 1.7, color: '#94A3B8', maxWidth: 580, margin: '24px auto 0' }}>
          We build AI-powered websites, dominate search rankings with SEO &amp; GEO, and craft UI/UX experiences that convert — helping US businesses grow faster in the age of AI search.
        </motion.p>
        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center flex-wrap" style={{ gap: 16, marginTop: 40 }}>
          <Link href="/contact" className="glow-btn" id="hero-cta-start-project" style={{ fontSize: 16, padding: '16px 36px' }}>Start Your Project<ArrowRight size={16} /></Link>
          <Link href="/services" className="ghost-btn" id="hero-cta-see-work">See Our Work<ChevronDown size={16} /></Link>
        </motion.div>
        <motion.p {...fadeUp(0.8)} style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, color: '#475569', marginTop: 32, letterSpacing: '0.02em' }}>
          Trusted by growth-focused US businesses  ·  AI-first since 2023  ·  GEO-ready strategies
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex justify-center" style={{ marginTop: 64 }}>
          <div className="glass-card float-anim" style={{ maxWidth: 520, width: '100%', padding: '32px 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
            {[{ Icon: Globe, label: 'SEO & GEO' }, { Icon: Code2, label: 'AI Websites' }, { Icon: Palette, label: 'UI/UX Design' }].map(({ Icon, label }, i) => (
              <div key={i} className="glass-card flex-1 flex flex-col items-center justify-center" style={{ padding: '20px 12px', gap: 10, minHeight: 110 }}>
                <div className="icon-box"><Icon size={24} color="#7DD3FC" /></div>
                <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#7DD3FC', letterSpacing: '0.05em', textAlign: 'center' }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
