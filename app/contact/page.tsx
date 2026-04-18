'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // EmailJS integration placeholder (requires service_id, template_id, public_key setup)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate send
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: '14px 18px',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: 15,
    color: '#F0F9FF',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <section style={{ padding: '60px 40px 80px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
              style={{ marginBottom: 48 }}
            >
              <span className="section-label" style={{ marginBottom: 14, display: 'block' }}>
                CONTACT
              </span>
              <h1
                className="font-syne"
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 5vw, 52px)',
                  color: '#F0F9FF',
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Book Your Free Strategy Call
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 17,
                  color: '#94A3B8',
                  maxWidth: 540,
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                Tell us about your business. We&apos;ll come back with a free visibility audit and
                a custom growth roadmap — no strings attached.
              </p>
            </motion.div>

            {/* Grid: Form + Info */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 40,
                alignItems: 'start',
              }}
            >
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card"
                style={{ padding: '40px 36px' }}
              >
                {status === 'sent' ? (
                  <div className="text-center" style={{ padding: '40px 0' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                    <h3
                      className="font-syne"
                      style={{ fontWeight: 700, fontSize: 22, color: '#F0F9FF', marginBottom: 12 }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: '#94A3B8', fontSize: 15 }}>
                      We&apos;ll get back to you within 24 hours with your free audit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#7DD3FC', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}
                      >
                        FULL NAME *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(125,211,252,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#7DD3FC', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(125,211,252,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-company"
                        style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#7DD3FC', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}
                      >
                        COMPANY
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Your Company Name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(125,211,252,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-service"
                        style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#7DD3FC', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}
                      >
                        SERVICE INTERESTED IN
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(125,211,252,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      >
                        <option value="" style={{ background: '#0A1628' }}>Select a service…</option>
                        <option value="ai-website" style={{ background: '#0A1628' }}>AI Website Build</option>
                        <option value="seo-geo" style={{ background: '#0A1628' }}>SEO & GEO Services</option>
                        <option value="uiux" style={{ background: '#0A1628' }}>UI/UX Design</option>
                        <option value="all" style={{ background: '#0A1628' }}>All Three</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#7DD3FC', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}
                      >
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Tell us about your business and goals…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(125,211,252,0.4)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <button
                      type="submit"
                      id="contact-submit-button"
                      disabled={status === 'sending'}
                      className="glow-btn"
                      style={{
                        fontSize: 15,
                        padding: '14px 28px',
                        width: '100%',
                        justifyContent: 'center',
                        opacity: status === 'sending' ? 0.7 : 1,
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                      {status !== 'sending' && <Send size={16} />}
                    </button>
                    {status === 'error' && (
                      <p style={{ color: '#f87171', fontSize: 13, textAlign: 'center' }}>
                        Something went wrong. Please email us directly.
                      </p>
                    )}
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
              >
                {[
                  { Icon: Mail, label: 'Email Us', value: 'hello@neuraledge.ai', href: 'mailto:hello@neuraledge.ai' },
                  { Icon: Phone, label: 'Call Us', value: '+1 (555) 000-0000', href: 'tel:+15550000000' },
                  { Icon: MapPin, label: 'Location', value: 'Serving US Businesses Nationwide', href: '#' },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="glass-card" style={{ padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div className="icon-box" style={{ flexShrink: 0 }}>
                      <Icon size={20} color="#7DD3FC" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: '#475569', letterSpacing: '0.1em', marginBottom: 6 }}>
                        {label.toUpperCase()}
                      </p>
                      <a
                        href={href}
                        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, color: '#F0F9FF', textDecoration: 'none' }}
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Promise Card */}
                <div className="glass-card" style={{ padding: '28px', borderColor: 'rgba(125,211,252,0.2)' }}>
                  <h3
                    className="font-syne"
                    style={{ fontWeight: 700, fontSize: 18, color: '#F0F9FF', marginBottom: 12 }}
                  >
                    Our Promise
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      'Free, no-obligation visibility audit',
                      'Custom strategy tailored to your business',
                      'Response within 24 business hours',
                      'No pushy sales tactics — ever',
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 14,
                          color: '#94A3B8',
                          display: 'flex',
                          gap: 10,
                          alignItems: 'flex-start',
                        }}
                      >
                        <span style={{ color: '#7DD3FC', flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
