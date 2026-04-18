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

      {/* Dynamic AI Generation Background Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        
        {/* 1. Chatbot / Code Stream (Left Side) */}
        <motion.div
          className="absolute rounded-2xl border hidden md:flex flex-col"
          style={{ width: 320, height: 400, left: '6%', top: '22%', background: 'rgba(255,255,255,0.015)', borderColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', transformOrigin: 'center' }}
          initial={{ opacity: 0, y: 30, rotate: -4 }}
          animate={{ opacity: 0.25, y: [0, -15, 0] }}
          transition={{ opacity: { duration: 2.5 }, y: { duration: 16, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="h-10 border-b border-white/5 flex items-center px-4">
            <span style={{ fontSize: 10, fontFamily: 'var(--font-space-mono)', color: 'rgba(255,255,255,0.4)' }}>LLM Agent • Generate App</span>
          </div>
          <div className="p-5 flex flex-col gap-4 overflow-hidden mask-bottom relative">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full"
                style={{ width: `${Math.random() * 40 + 30}%`, background: 'rgba(125, 211, 252, 0.4)' }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.7, repeat: Infinity, repeatDelay: 5.6, ease: "easeOut", transformOrigin: "left" }}
              />
            ))}
            <motion.div 
               className="absolute bottom-4 left-5 w-4 h-4 rounded-full bg-blue-400"
               animate={{ opacity: [1, 0, 1] }} 
               transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* 2. Abstract App / Wireframe Creation (Right Side) */}
        <motion.div
          className="absolute rounded-2xl border hidden lg:flex flex-col overflow-hidden shadow-2xl"
          style={{ width: 280, height: 420, right: '8%', top: '15%', background: 'rgba(255,255,255,0.015)', borderColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0, y: -20, rotate: 6 }}
          animate={{ opacity: 0.25, y: [0, 20, 0] }}
          transition={{ opacity: { duration: 2.5, delay: 0.5 }, y: { duration: 18, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20"/>
            <div className="w-2 h-2 rounded-full bg-white/20"/>
            <div className="w-2 h-2 rounded-full bg-white/20"/>
          </div>
          <div className="p-4 flex-1 flex flex-col gap-4">
             {/* Feature Image Loading */}
             <motion.div 
                className="w-full h-32 rounded-xl"
                style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(125, 211, 252, 0.1) 100%)' }}
                initial={{ opacity: 0 }} animate={{ opacity: [0.4, 0.8, 0.4] }} 
                transition={{ duration: 4, repeat: Infinity }} 
             />
             {/* UI Cards appearing */}
             <div className="flex gap-3">
               <motion.div className="flex-1 h-20 rounded-lg bg-white/5" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} />
               <motion.div className="flex-1 h-20 rounded-lg bg-white/5" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} />
             </div>
             {/* Text lines */}
             <motion.div className="h-2 w-3/4 rounded-full bg-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}/>
             <motion.div className="h-2 w-1/2 rounded-full bg-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}/>
          </div>
        </motion.div>

        {/* 3. SEO Rankings Rise Graph (Center Right / Bottom) */}
        <motion.div
          className="absolute rounded-2xl border hidden md:flex flex-col overflow-hidden"
          style={{ width: 360, height: 220, right: '30%', bottom: '10%', background: 'rgba(255,255,255,0.015)', borderColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 0.3, scale: [0.95, 0.98, 0.95] }}
          transition={{ opacity: { duration: 2.5, delay: 1 }, scale: { duration: 12, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="h-10 border-b border-white/5 flex items-center px-4">
            <span style={{ fontSize: 10, fontFamily: 'var(--font-space-mono)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }} className="uppercase">Real-Time SEO Ranking Traffic</span>
          </div>
          <div className="flex-1 p-5 flex items-end gap-2">
           {/* Growing Bars */}
           {[20, 35, 30, 55, 45, 80, 60, 110, 85, 140].map((h, i) => (
             <motion.div
               key={i}
               className="flex-1 rounded-sm"
               style={{ background: 'linear-gradient(to top, rgba(125,211,252,0.05), rgba(125,211,252,0.4))' }}
               initial={{ height: 0 }}
               animate={{ height: h }}
               transition={{ duration: 2.5, delay: i * 0.15 + 1.5, ease: "easeOut" }}
             />
           ))}
          </div>
        </motion.div>
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
