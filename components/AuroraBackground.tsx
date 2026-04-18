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
        
        {/* 1. n8n Workflow Automation (Left Side) */}
        <motion.div
          className="absolute hidden md:flex flex-col pointer-events-none"
          style={{ width: 400, height: 300, left: '5%', top: '25%', opacity: 0.35 }}
          initial={{ y: 20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-[10px] text-gray-400 font-mono mb-4 px-4 opacity-50 uppercase tracking-widest">n8n Live Workflow</div>
          <div className="relative w-full h-full">
            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {/* Paths */}
              <path d="M 60 30 L 150 100 L 280 80" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 150 100 L 260 200" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              
              {/* Moving data dots on paths */}
              <motion.circle r="4" fill="#ec4899"
                 animate={{ cx: [60, 150, 280], cy: [30, 100, 80] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 style={{ filter: 'drop-shadow(0 0 4px #ec4899)' }}
              />
              <motion.circle r="4" fill="#8B5CF6"
                 animate={{ cx: [150, 260], cy: [100, 200] }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                 style={{ filter: 'drop-shadow(0 0 4px #8B5CF6)' }}
              />
            </svg>
            
            {/* Node UI Elements */}
            <div className="absolute flex items-center justify-center rounded bg-gray-900/80 border border-gray-600/50 text-[10px] text-white/80 p-2 shadow-lg backdrop-blur-md" style={{ left: 20, top: 15, zIndex: 1 }}>🚀 Trigger</div>
            <div className="absolute flex items-center justify-center rounded bg-pink-900/40 border border-pink-500/30 text-[10px] text-white/90 p-2 shadow-[0_0_15px_rgba(236,72,153,0.2)] backdrop-blur-md" style={{ left: 110, top: 85, zIndex: 1 }}>🧠 AI Agent</div>
            <div className="absolute flex items-center justify-center rounded bg-blue-900/40 border border-blue-500/30 text-[10px] text-white/90 p-2 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md" style={{ left: 250, top: 65, zIndex: 1 }}>💾 Update CRM</div>
            <div className="absolute flex items-center justify-center rounded bg-purple-900/40 border border-purple-500/30 text-[10px] text-white/90 p-2 shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-md" style={{ left: 220, top: 185, zIndex: 1 }}>🎨 Gen UI</div>
          </div>
        </motion.div>

        {/* 2. Tiny Agent Building App (Right Side) */}
        <motion.div
           className="absolute hidden lg:flex flex-col rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
           style={{ width: 300, height: 380, right: '8%', top: '15%', background: 'rgba(255,255,255,0.015)', backdropFilter: 'blur(8px)', opacity: 0.4 }}
           initial={{ rotate: 3, y: -20 }}
           animate={{ rotate: [3, 5, 3], y: [0, 20, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
             <div className="w-2 h-2 rounded-full bg-white/20"/>
             <div className="w-2 h-2 rounded-full bg-white/20"/>
             <div className="w-2 h-2 rounded-full bg-white/20"/>
          </div>
          <div className="p-4 relative w-full flex-1 flex flex-col gap-3">
            {/* Wireframe Skeleton being built */}
            <motion.div className="w-full h-8 rounded-md bg-white/5 mb-2" animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.div className="w-full h-24 rounded-lg bg-blue-500/10 mb-2 border border-blue-500/20" animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
            <div className="flex gap-2">
               <motion.div className="flex-1 h-20 rounded-lg bg-purple-500/10 border border-purple-500/20" animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 2, delay: 2, repeat: Infinity }} />
               <motion.div className="flex-1 h-20 rounded-lg bg-white/5" animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 2, delay: 2.5, repeat: Infinity }} />
            </div>

            {/* The Tiny Robot Agent */}
            <motion.div 
               className="absolute z-10 flex flex-col items-center gap-1"
               animate={{ x: [10, 220, 180, 50, 10], y: [10, 60, 180, 150, 10] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               style={{ top: 20, left: 20 }}
            >
               <div className="w-8 h-8 rounded-full bg-[#1e293b] border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center justify-center">
                  <span style={{ fontSize: '14px' }}>🤖</span>
               </div>
               <span className="bg-blue-900/80 border border-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full" style={{ fontSize: '8px', letterSpacing: '0.05em' }}>Building...</span>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. AI Crawler (Bottom Center/Right) */}
        <motion.div
           className="absolute hidden md:flex flex-col rounded-2xl border border-white/10 p-5 overflow-hidden"
           style={{ width: 340, height: 220, right: '35%', bottom: '10%', background: 'rgba(255,255,255,0.015)', backdropFilter: 'blur(8px)', opacity: 0.4 }}
           initial={{ scale: 0.95 }}
           animate={{ scale: [0.95, 0.98, 0.95] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-[11px] text-[#A78BFA] font-mono mb-4 flex items-center gap-2 uppercase tracking-wider">
             <div className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" style={{ boxShadow: '0 0 8px #A78BFA' }} />
             Crawler Active
          </div>
          <div className="relative flex-1 flex flex-col gap-2">
             {/* DOM Code lines */}
             {[
               '<div id="app">', 
               '  <header class="nav">', 
               '    <h1>NeuralEdge</h1>', 
               '  </header>', 
               '  <section class="seo-data">',
               '    <p>Indexing SEO...</p>'
             ].map((code, i) => (
                <motion.div key={i} className="text-[11px] font-mono text-gray-500 pl-3 border-l border-gray-700/50"
                  animate={{ color: ['#6B7280', '#D8B4FE', '#6B7280'] }}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                >
                  {code.replace(/ /g, "\u00A0")}
                </motion.div>
             ))}
             
             {/* The Spider/Scanner Line */}
             <motion.div 
                className="absolute w-full h-[1px] bg-purple-400"
                style={{ boxShadow: '0 0 12px 2px rgba(167,139,250,0.8)' }}
                animate={{ top: [0, 140, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
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
