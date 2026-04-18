'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, Palette } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'AI Website Build',
    body: 'We design and develop conversion-optimized websites using AI tools — faster, smarter, and built to rank. From landing pages to full brand sites, every build is structured for SEO, speed, and AI discoverability from day one.',
    tags: ['AI-Generated', 'High Performance', 'Schema-Ready'],
    featured: false,
    badge: null,
  },
  {
    icon: Globe,
    title: 'SEO & GEO Services',
    body: 'Rank on Google and get cited by ChatGPT, Gemini, and Perplexity. Our dual-engine approach combines traditional SEO with Generative Engine Optimization (GEO) — so your brand shows up wherever your customers are searching.',
    tags: ['Google Rankings', 'AI Citations', 'LLM Visibility'],
    featured: true,
    badge: '★ Most In-Demand 2025',
  },
  {
    icon: Palette,
    title: 'UI/UX Design Services',
    body: 'From wireframes to polished interfaces, we design digital experiences that feel intuitive and look unforgettable. Every pixel is crafted to guide users toward action — built for US audiences with conversion psychology at its core.',
    tags: ['Wireframes', 'Figma Design', 'CRO-Focused'],
    featured: false,
    badge: null,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: '120px 60px' }}
      className="relative"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
          style={{ marginBottom: 56 }}
        >
          <span className="section-label" style={{ marginBottom: 16, display: 'block' }}>
            OUR SERVICES
          </span>
          <h2
            className="font-syne"
            style={{ fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', color: '#F0F9FF', marginBottom: 16 }}
          >
            Three Services. One Growth Engine.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 17,
              color: '#94A3B8',
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Everything your US business needs to get found, look credible, and convert — powered by AI.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            alignItems: 'start',
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="glass-card"
                style={{
                  padding: '36px 28px',
                  cursor: 'default',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  ...(service.featured
                    ? {
                        borderColor: 'rgba(125, 211, 252, 0.3)',
                        boxShadow: '0 0 40px rgba(125,211,252,0.08), 0 8px 32px rgba(0,0,0,0.4)',
                      }
                    : {}),
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Featured Badge */}
                {service.badge && (
                  <div
                    className="glass-card"
                    style={{
                      display: 'inline-flex',
                      borderRadius: 999,
                      padding: '4px 14px',
                      marginBottom: 20,
                      background: 'rgba(125, 211, 252, 0.08)',
                      borderColor: 'rgba(125, 211, 252, 0.3)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-space-mono)',
                        fontSize: 10,
                        color: '#7DD3FC',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>
                )}
                {!service.badge && <div style={{ height: 36, marginBottom: 4 }} />}

                {/* Icon Box */}
                <div
                  className={`icon-box ${service.featured ? 'icon-box-featured' : ''}`}
                  style={{ marginBottom: 20 }}
                >
                  <Icon size={28} color="#7DD3FC" />
                </div>

                {/* Title */}
                <h3
                  className="font-syne"
                  style={{
                    fontWeight: 700,
                    fontSize: 22,
                    color: '#F0F9FF',
                    marginBottom: 14,
                  }}
                >
                  {service.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 15,
                    color: '#94A3B8',
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {service.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 24 }}>
                  {service.tags.map((tag) => (
                    <span key={tag} className="service-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <a href="#" className="ice-link">
                  Learn More →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
