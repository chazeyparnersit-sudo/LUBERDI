'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  /** Whether to apply standard section padding */
  padded?: boolean
  /** Add the grid decoration background */
  grid?: boolean
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  padded = true,
  grid = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative overflow-hidden ${padded ? 'py-24 md:py-32 lg:py-40' : ''} ${grid ? 'grid-deco' : ''} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

/** Section heading with eyebrow + title + lead */
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  lead?: string
  center?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  lead,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.div
          className={`inline-flex items-center gap-2 mb-4 ${center ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-4 h-px bg-gold-500" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
            {eyebrow}
          </span>
          <span className="w-4 h-px bg-gold-500" />
        </motion.div>
      )}

      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      >
        {title}{' '}
        {titleAccent && (
          <span className="gradient-text">{titleAccent}</span>
        )}
      </motion.h2>

      {lead && (
        <motion.p
          className={`mt-5 text-slate-500 text-base md:text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {lead}
        </motion.p>
      )}
    </div>
  )
}
