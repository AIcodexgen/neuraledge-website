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

      {/* Animated Optical / Synapse Network SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.35, zIndex: 0 }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="meshGlow">
            <feGaussianBlur stdDeviation="3" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Global Connection Lines */}
        <g filter="url(#meshGlow)">
          <path
            d="M 100 700 L 300 500 L 500 650 L 800 400 L 950 150 M 300 500 L 400 250 L 700 300 M 100 450 L 400 250 M 500 650 L 900 750 M 700 300 L 800 400"
            stroke="rgba(139,92,246,0.25)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Static Nodes */}
          <circle cx="100" cy="700" r="5" fill="#7DD3FC" />
          <circle cx="300" cy="500" r="7" fill="#8B5CF6" />
          <circle cx="500" cy="650" r="6" fill="#7DD3FC" />
          <circle cx="800" cy="400" r="5" fill="#8B5CF6" />
          <circle cx="950" cy="150" r="6" fill="#7DD3FC" />
          <circle cx="400" cy="250" r="8" fill="#8B5CF6" />
          <circle cx="700" cy="300" r="5" fill="#7DD3FC" />
          <circle cx="100" cy="450" r="4" fill="#8B5CF6" />
          <circle cx="900" cy="750" r="7" fill="#7DD3FC" />
        </g>

        {/* Pulsing Energy Streams (Animated) */}
        <motion.path
          d="M 100 700 L 300 500 L 500 650 L 800 400 L 950 150"
          stroke="#7DD3FC"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          filter="url(#meshGlow)"
        />
        <motion.path
          d="M 100 450 L 400 250 L 700 300 L 800 400"
          stroke="#8B5CF6"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          filter="url(#meshGlow)"
        />
      </svg>

      {/* Floating LLM Imprints */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {[
          { text: 'Claude 3.5 Sonnet', x: '18%', y: '25%', delay: 0 },
          { text: 'GPT-4o', x: '82%', y: '28%', delay: 3 },
          { text: 'Gemini 1.5 Pro', x: '78%', y: '68%', delay: 6 },
          { text: 'LLaMA 3', x: '12%', y: '65%', delay: 9 },
        ].map((llm, i) => (
          <motion.div
            key={i}
            className="absolute font-syne pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.08, 0.08, 0], scale: [0.8, 1, 1.1, 1], y: [0, -30] }}
            transition={{ duration: 15, delay: llm.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              left: llm.x,
              top: llm.y,
              fontSize: 'clamp(28px, 5vw, 80px)',
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
