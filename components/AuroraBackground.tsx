'use client'

import { motion } from 'framer-motion'

export default function AuroraBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: '#050A18' }}
    >
      <div className="absolute inset-0 dot-grid" />
      
      {/* Background Orbs */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{
          left: '15%',
          top: '20%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(125, 211, 252, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <motion.div
        animate={{ x: [0, -60, 50, 0], y: [0, 80, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{
          left: '70%',
          top: '65%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <motion.div
        animate={{ x: [0, 50, -80, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{
          left: '60%',
          top: '25%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(186, 230, 253, 0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* High-Tech 3D Perspective Grid */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[60vh] opacity-30 pointer-events-none"
        style={{
          perspective: '1000px',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ backgroundPosition: ['0px 0px', '0px 80px'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '-100%',
            bottom: 0,
            transformOrigin: '50% 100%',
            transform: 'rotateX(75deg)',
            backgroundImage: `
              linear-gradient(to bottom, rgba(125,211,252,0) 0%, rgba(125,211,252,0.8) 100%),
              linear-gradient(to right, rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 80px 80px, 80px 80px',
          }}
        />
      </div>

      {/* Floating LLM Imprints */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { text: 'Claude 3.5 Sonnet', x: '20%', y: '20%', delay: 0 },
          { text: 'GPT-4o', x: '75%', y: '25%', delay: 3 },
          { text: 'Gemini 1.5 Pro', x: '80%', y: '65%', delay: 6 },
          { text: 'LLaMA 3', x: '15%', y: '70%', delay: 9 },
        ].map((llm, i) => (
          <motion.div
            key={i}
            className="absolute font-syne pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.08, 0.08, 0], scale: [0.8, 1, 1.1, 1], y: [0, -60] }}
            transition={{ duration: 16, delay: llm.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              left: llm.x,
              top: llm.y,
              fontSize: 'clamp(32px, 6vw, 100px)',
              fontWeight: 800,
              color: 'rgba(255,255,255,1)',
              whiteSpace: 'nowrap',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {llm.text}
          </motion.div>
        ))}
      </div>

      {/* Noise Filter Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
          opacity: 0.5,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
