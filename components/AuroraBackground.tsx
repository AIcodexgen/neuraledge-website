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

      {/* Neural Network Abstract SVG Path Overlay */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', opacity: 0.15 }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <motion.path 
          d="M10,20 L30,40 L60,30 L80,60 L90,20 M30,40 L40,80 L80,60 M10,60 L30,40 M60,30 L20,90"
          stroke="url(#gradientNet)" 
          strokeWidth="0.2" 
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <defs>
          <linearGradient id="gradientNet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* LLM Imprints */}
      {[
        { text: 'GPT-4o', x: '15%', y: '15%', delay: 0 },
        { text: 'Claude 3.5', x: '85%', y: '30%', delay: 2 },
        { text: 'Gemini 1.5', x: '20%', y: '80%', delay: 4 },
        { text: 'Llama 3', x: '75%', y: '75%', delay: 6 },
      ].map((llm, i) => (
        <motion.div
          key={i}
          className="absolute font-syne pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.05, 0.05, 0], scale: [0.8, 1, 1.1, 1], y: [0, -40] }}
          transition={{ duration: 12, delay: llm.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            left: llm.x,
            top: llm.y,
            fontSize: 'clamp(40px, 8vw, 120px)',
            fontWeight: 800,
            color: 'rgba(255,255,255,1)',
            whiteSpace: 'nowrap',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {llm.text}
        </motion.div>
      ))}

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
