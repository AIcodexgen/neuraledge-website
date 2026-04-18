'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none', background: scrolled ? 'rgba(5, 10, 24, 0.75)' : 'transparent', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none', height: '72px' }}
      >
        <div className="flex items-center justify-between h-full" style={{ padding: '0 60px' }}>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="dot-pulse" style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#7DD3FC', flexShrink: 0 }} />
            <span className="font-syne" style={{ fontWeight: 800, fontSize: 20, color: '#F0F9FF', letterSpacing: '-0.02em' }}>NeuralEdge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors duration-200 no-underline" style={{ fontFamily: 'var(--font-space-mono)', fontSize: 12, letterSpacing: '0.1em', color: '#94A3B8' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F0F9FF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>{link.label}</Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link href="/contact" className="glow-btn" style={{ fontSize: 13, padding: '10px 22px' }}>Get a Free Audit →</Link>
          </div>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle mobile menu" id="mobile-menu-button" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {[0, 1, 2].map((i) => (<span key={i} style={{ display: 'block', width: 22, height: 1.5, background: '#94A3B8', borderRadius: 2, transition: 'all 0.3s ease', opacity: mobileOpen && i === 1 ? 0 : 1 }} />))}
          </button>
        </div>
      </motion.header>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: 'rgba(5, 10, 24, 0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          {navLinks.map((link) => (<Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'var(--font-space-mono)', fontSize: 18, letterSpacing: '0.1em', color: '#94A3B8', textDecoration: 'none' }}>{link.label}</Link>))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="glow-btn" style={{ fontSize: 14, marginTop: 16 }}>Get a Free Audit →</Link>
        </motion.div>
      )}
    </>
  )
}
