'use client'

import { motion } from 'framer-motion'

interface FloatingBlobsProps {
  intensity?: 'low' | 'medium' | 'high'
}

export default function FloatingBlobs({ intensity = 'medium' }: FloatingBlobsProps) {
  const opacities = { low: 0.04, medium: 0.07, high: 0.12 }
  const o = opacities[intensity]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>

      {/* ── Blob 1 — Gold, top-left ── */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: `radial-gradient(circle at 40% 40%, rgba(200,162,91,${o * 1.5}), transparent 65%)`,
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.12, 1.04, 1],
          x: [0, 18, -8, 0],
          y: [0, -22, 10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Blob 2 — Blue/teal, right side ── */}
      <motion.div
        className="absolute top-1/4 -right-48 w-[560px] h-[560px] rounded-full"
        style={{
          background: `radial-gradient(circle at 60% 40%, rgba(56,112,214,${o}), transparent 65%)`,
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.18, 0.95, 1],
          x: [0, -12, 20, 0],
          y: [0, 28, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />

      {/* ── Blob 3 — Gold, bottom-center ── */}
      <motion.div
        className="absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(200,162,91,${o * 0.8}), transparent 65%)`,
          filter: 'blur(48px)',
        }}
        animate={{
          scale: [1, 1.22, 1, 1],
          y: [0, -32, 8, 0],
          x: [0, 12, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* ── Blob 4 — Subtle white, center ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,${o * 0.3}), transparent 60%)`,
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── Geometric ring ── */}
      <motion.div
        className="absolute top-16 right-24 w-64 h-64 rounded-full border border-gold-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-16 right-24 w-48 h-48 rounded-full border border-gold-500/[0.06] m-8"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
