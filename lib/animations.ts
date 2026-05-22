import { Variants } from 'framer-motion'

// ── Ease curves premium ────────────────────────────────────────
export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.87, 0, 0.13, 1],
  spring: { type: 'spring', stiffness: 280, damping: 22 },
  springBounce: { type: 'spring', stiffness: 400, damping: 16 },
} as const

// ── Fade up ────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: ease.out },
  },
}

// ── Fade in ────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// ── Scale in ──────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: ease.out },
  },
}

// ── Slide from left ───────────────────────────────────────────
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: ease.out },
  },
}

// ── Slide from right ──────────────────────────────────────────
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: ease.out },
  },
}

// ── Stagger container ─────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// ── Stagger item ──────────────────────────────────────────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
}

// ── Card hover ────────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1, transition: { duration: 0.3, ease: ease.out } },
  hover: { y: -8, scale: 1.01, transition: { duration: 0.3, ease: ease.out } },
}

// ── Viewport options (once) ───────────────────────────────────
export const viewportOnce = { once: true, margin: '-80px' }
