'use client'

import { motion } from 'framer-motion'
// import { Search, Wrench, TrendingUp } from 'lucide-react' (no longer needed)

const ScannerAnim = () => (
  <div className="relative w-full h-36 bg-[#0f172a]/60 rounded-xl overflow-hidden mb-8 border border-white/5 flex items-center justify-center shadow-inner">
     <div className="absolute top-2 left-3 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
     </div>
     <div className="grid grid-cols-6 grid-rows-3 gap-3 opacity-40">
        {Array.from({length: 18}).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-sky-400" />)}
     </div>
     <motion.div className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent border-r-2 border-sky-400"
        style={{ filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.5))' }}
        animate={{ left: ['-20%', '120%', '-20%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
     <div className="absolute bottom-2 right-3 text-[9px] font-mono text-sky-300">AGENT.AUDIT()</div>
  </div>
)

const BuilderAnim = () => (
  <div className="relative w-full h-36 bg-[#0f172a]/60 rounded-xl overflow-hidden mb-8 border border-white/5 flex flex-col items-center justify-center gap-3 p-5 shadow-inner">
     <div className="absolute top-2 left-3 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
     </div>
     <motion.div className="w-full h-4 bg-purple-500/20 rounded border border-purple-500/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
     <motion.div className="w-3/4 h-4 self-start bg-purple-500/20 rounded border border-purple-500/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
     <motion.div className="w-1/2 h-4 self-start bg-purple-500/20 rounded border border-purple-500/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
     <motion.div className="absolute w-8 h-8 rounded-lg border border-purple-400/80 bg-[#1e293b] shadow-[0_0_15px_rgba(167,139,250,0.6)] flex items-center justify-center text-[12px] z-10"
        animate={{ x: [-50, 50, -30, 20, -50], y: [-20, 10, -10, 20, -20] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
     >🛠️</motion.div>
     <div className="absolute bottom-2 right-3 text-[9px] font-mono text-purple-300">AGENT.BUILD()</div>
  </div>
)

const RankAnim = () => (
  <div className="relative w-full h-36 bg-[#0f172a]/60 rounded-xl overflow-hidden mb-8 border border-white/5 flex items-end justify-center gap-3 p-5 shadow-inner">
     <div className="absolute top-2 left-3 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
     </div>
     <motion.div className="absolute w-full h-full bg-gradient-to-b from-pink-500/10 to-transparent"
        animate={{ opacity: [0, 0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
     
     {[30, 60, 45, 80, 100].map((h, i) => (
        <motion.div key={i} className="relative w-8 rounded-t-md bg-gradient-to-t from-pink-500/20 to-pink-400/50 border-t-2 border-pink-400 z-10"
           initial={{ height: 10 }}
           animate={{ height: [10, h, 10] }}
           transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
     ))}
     <div className="absolute bottom-2 right-3 text-[9px] font-mono text-pink-300 z-20">AGENT.RANK()</div>
  </div>
)

const steps = [
  {
    number: '01',
    animation: <ScannerAnim />,
    title: 'Audit & Strategy',
    body: 'We analyze your current digital presence, identify SEO and GEO gaps, and map a custom growth strategy aligned to your US market goals.',
  },
  {
    number: '02',
    animation: <BuilderAnim />,
    title: 'Build & Optimize',
    body: 'We build or redesign your website with AI tools, implement on-page and technical SEO, and structure your content for both Google and generative AI engines.',
  },
  {
    number: '03',
    animation: <RankAnim />,
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

          {steps.map((step) => {
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="glass-card"
                style={{
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                
                {/* Agent Animation Visual */}
                {step.animation}

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
