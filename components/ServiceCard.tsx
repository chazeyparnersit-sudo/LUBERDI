'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { staggerItem } from '@/lib/animations'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href?: string
  index?: number
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href = '/servicios',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover="hover"
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{ '--i': index } as React.CSSProperties}
    >
      {/* Glass base */}
      <motion.div
        className="relative flex flex-col h-full p-7 glass rounded-2xl transition-shadow duration-500"
        variants={{
          hover: {
            y: -8,
            boxShadow: '0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,162,91,0.2)',
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        {/* Gold top line — reveals on hover */}
        <motion.div
          className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
          variants={{
            hover: { opacity: 1 },
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="relative w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 overflow-hidden"
          variants={{
            hover: {
              backgroundColor: 'rgba(200,162,91,0.2)',
              borderColor: 'rgba(200,162,91,0.4)',
            },
          }}
          transition={{ duration: 0.25 }}
        >
          {/* Icon shimmer */}
          <motion.span
            className="absolute inset-0 -skew-x-[20deg] bg-white/20"
            initial={{ x: '-150%' }}
            variants={{ hover: { x: '200%' } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <Icon
            className="w-6 h-6 text-gold-500 relative z-10"
            strokeWidth={1.75}
          />
        </motion.div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-500">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-gold-500/50 shrink-0"
                variants={{ hover: { backgroundColor: 'rgba(200,162,91,0.9)' } }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-500/70 group-hover:text-gold-400 transition-colors duration-300 mt-auto"
        >
          Ver detalle
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </motion.div>
  )
}
