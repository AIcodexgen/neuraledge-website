'use client'

import { motion } from 'framer-motion'

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#050A18' }}>
      <div className="absolute inset-0 dot-grid" />
      <motion.div animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="absolute" style={{ left: '15%', top: '20%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(125, 211, 252, 0.07) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
      <motion.div animate={{ x: [0, -60, 50, 0], y: [0, 80, -30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute" style={{ left: '70%', top: '65%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
      <motion.div animate={{ x: [0, 50, -80, 0], y: [0, -40, 60, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} className="absolute" style={{ left: '60%', top: '25%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(186, 230, 253, 0.06) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`, backgroundSize: '256px 256px', opacity: 0.4, mixBlendMode: 'overlay', pointerEvents: 'none' }} />
    </div>
  )
}
