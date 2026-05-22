'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  disabled?: boolean
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm gap-1.5 rounded-xl',
  md: 'px-7 py-3.5 text-sm gap-2 rounded-xl',
  lg: 'px-9 py-4 text-base gap-2.5 rounded-2xl',
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-[length:200%_100%] text-vault-900 font-semibold shadow-gold-sm hover:shadow-gold',
  secondary:
    'glass text-white font-medium hover:border-gold-500/30 hover:bg-white/[0.07]',
  outline:
    'border-1.5 border-gold-500/50 text-gold-400 font-medium hover:bg-gold-500/10 hover:border-gold-500',
  ghost:
    'text-slate-400 font-medium hover:text-white hover:bg-white/[0.04]',
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
}: AnimatedButtonProps) {
  const classes = `
    relative inline-flex items-center justify-center overflow-hidden
    transition-all duration-300 font-body
    ${SIZE_CLASSES[size]}
    ${VARIANT_CLASSES[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `

  const inner = (
    <motion.span
      className={classes}
      whileHover={disabled ? {} : { scale: 1.025, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {/* Shimmer sweep on hover (primary only) */}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 -skew-x-[20deg] bg-white/25 pointer-events-none"
          initial={{ x: '-120%' }}
          whileHover={{ x: '220%' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-[inherit]">
        {children}
      </span>
    </motion.span>
  )

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    ) : (
      <Link href={href}>{inner}</Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} type="button">
      {inner}
    </button>
  )
}
