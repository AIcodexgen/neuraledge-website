'use client'

import { ExternalLink, MessageSquare, Share2, MapPin } from 'lucide-react'
import Link from 'next/link'

const navLinks = ['Home', 'Services', 'About', 'Contact']
const navHrefs = ['/', '/services', '/about', '/contact']

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '64px 60px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Upper Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: 12 }}>
              <span
                className="dot-pulse"
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#7DD3FC',
                }}
              />
              <span
                className="font-syne"
                style={{ fontWeight: 800, fontSize: 20, color: '#F0F9FF', letterSpacing: '-0.02em' }}
              >
                NeuralEdge
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 14,
                color: '#94A3B8',
                maxWidth: 240,
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              AI-Powered Websites. SEO &amp; GEO. UI/UX Design. Built for US Businesses.
            </p>
            <div className="flex items-center" style={{ gap: 6 }}>
              <MapPin size={12} color="#7DD3FC" />
              <span
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: 11,
                  color: '#94A3B8',
                }}
              >
                Serving US Businesses Nationwide
              </span>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: 11,
                color: '#7DD3FC',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: 20,
              }}
            >
              NAVIGATION
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((label, i) => (
                <Link
                  key={label}
                  href={navHrefs[i]}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 14,
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F0F9FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — CTA Mini */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: 11,
                color: '#7DD3FC',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: 14,
              }}
            >
              READY TO GROW?
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 14,
                color: '#94A3B8',
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              Let&apos;s talk about your visibility on Google and AI platforms.
            </p>
            <Link
              href="/contact"
              className="glow-btn"
              style={{ fontSize: 12, padding: '10px 22px' }}
            >
              Book a Free Call
            </Link>

            {/* Social Icons */}
            <div
              className="flex"
              style={{ gap: 10, marginTop: 20 }}
            >
              {[
                { Icon: ExternalLink, label: 'LinkedIn', href: '#' },
                { Icon: MessageSquare, label: 'Instagram', href: '#' },
                { Icon: Share2, label: 'Twitter/X', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="glass-card"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    const icon = el.querySelector('svg')
                    if (icon) icon.style.color = '#7DD3FC'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    const icon = el.querySelector('svg')
                    if (icon) icon.style.color = '#94A3B8'
                  }}
                >
                  <Icon size={16} color="#94A3B8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            margin: '0 0 24px',
          }}
        />

        {/* Bottom Bar */}
        <div
          className="flex items-center flex-wrap"
          style={{ justifyContent: 'space-between', gap: 16 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: 11,
              color: '#475569',
            }}
          >
            © 2025 NeuralEdge. All Rights Reserved.
          </p>
          <div className="flex" style={{ gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 12,
                  color: '#475569',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#94A3B8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
