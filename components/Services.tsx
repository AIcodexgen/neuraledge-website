'use client'

import { motion } from 'framer-motion'
// Removing unused imports

const DevAnim = () => (
  <div className="w-full h-40 rounded-2xl bg-[#0f172a]/60 border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center shadow-inner">
      <div className="absolute top-0 w-full h-6 bg-black/40 flex items-center px-3 gap-1.5 border-b border-white/5">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
        <div className="ml-2 text-[9px] font-mono text-gray-500 uppercase tracking-widest">build.ts</div>
      </div>
      <div className="p-4 w-full mt-4 flex flex-col gap-2">
         {['<div class="website">', '   <Hero />', '   <AI_Features />', '</div>'].map((line, i) => (
             <motion.div key={i} className="text-[11px] font-mono text-emerald-400 pl-2 border-l-2 border-emerald-500/20"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, -10] }}
                transition={{ duration: 4, delay: i * 0.8, repeat: Infinity }}
             >{line.replace(/ /g, "\u00A0")}</motion.div>
         ))}
      </div>
      <motion.div className="absolute right-4 bottom-4 w-8 h-8 rounded-lg bg-[#1e293b] border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <span style={{ fontSize: '14px' }}>⚙️</span>
      </motion.div>
      <div className="absolute bottom-2 right-14 text-[9px] font-mono text-emerald-500/60 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">AGENT.DEV</div>
  </div>
)

const SeoAnim = () => (
  <div className="w-full h-40 rounded-2xl bg-[#0f172a]/60 border border-white/5 mb-6 relative overflow-hidden flex items-end justify-center p-5 gap-3 shadow-inner">
      <motion.div className="absolute w-8 h-8 rounded-full bg-[#1e293b] border border-blue-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] z-20"
         animate={{ x: [-60, 0, 60, 0, -60], y: [-70, -50, -70, -90, -70] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ fontSize: '14px' }}>🕷️</span>
      </motion.div>
      <div className="absolute inset-0 bg-blue-500/5" />
      {[30, 50, 45, 80, 110].map((h, i) => (
         <motion.div key={i} className="w-8 rounded-t-lg bg-gradient-to-t from-blue-600/20 to-blue-400/50 border-t-2 border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] z-10"
            initial={{ height: 15 }}
            animate={{ height: [15, h, 15] }}
            transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
         />
      ))}
      <div className="absolute bottom-2 right-4 text-[9px] font-mono text-blue-400/70 font-bold bg-blue-500/10 px-2 py-0.5 rounded-full z-30">AGENT.SEO</div>
  </div>
)

const DesignAnim = () => (
  <div className="w-full h-40 rounded-2xl bg-[#0f172a]/60 border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center shadow-inner">
     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
     
     <motion.div className="w-20 h-20 border-2 border-dashed border-purple-500/50 rounded-xl absolute z-10"
        animate={{ rotate: 180, scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
     />
     <motion.div className="w-12 h-12 bg-purple-500/20 backdrop-blur-md border px-2 py-1 border-purple-400/60 rounded-full absolute z-20 shadow-[0_0_15px_rgba(167,139,250,0.3)]"
        animate={{ x: [-30, 30, -30], y: [-15, 15, -15] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
     />
     
     <motion.div className="absolute w-6 h-6 rounded flex items-center justify-center font-bold text-xl z-30 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
         animate={{ x: [40, -40, 30, 40], y: [20, -30, 30, 20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
     >👆</motion.div>
     <div className="absolute bottom-2 right-4 text-[9px] font-mono text-purple-400/70 font-bold bg-purple-500/10 px-2 py-0.5 rounded-full z-40">AGENT.UX</div>
  </div>
)

const services = [
  {
    animation: <DevAnim />,
    title: 'AI Website Build',
    body: 'We design and develop conversion-optimized websites using AI tools — faster, smarter, and built to rank. From landing pages to full brand sites, every build is structured for SEO, speed, and AI discoverability from day one.',
    tags: ['AI-Generated', 'High Performance', 'Schema-Ready'],
    featured: false,
    badge: null,
  },
  {
    animation: <SeoAnim />,
    title: 'SEO & GEO Services',
    body: 'Rank on Google and get cited by ChatGPT, Gemini, and Perplexity. Our dual-engine approach combines traditional SEO with Generative Engine Optimization (GEO) — so your brand shows up wherever your customers are searching.',
    tags: ['Google Rankings', 'AI Citations', 'LLM Visibility'],
    featured: true,
    badge: '★ Most In-Demand 2025',
  },
  {
    animation: <DesignAnim />,
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
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
                className="glass-card flex flex-col"
                style={{
                  padding: '16px',
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
                {/* Agent Visual Simulation */}
                {service.animation}

                {/* Content Container */}
                <div style={{ padding: '8px 12px 16px 12px' }}>
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
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
