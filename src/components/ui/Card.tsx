import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  delay?: number
  className?: string
  interactive?: boolean
}

/**
 * Card that animates into view and lifts on hover.
 * Both transforms are Framer-driven (no CSS/inline conflict); colour/glow
 * hover states live in CSS. Reduced-motion disables movement.
 */
export function Card({ children, delay = 0, className = '', interactive = true }: CardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      className={`card ${interactive ? 'card--interactive' : ''} ${className}`.trim()}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0.3 : 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={reduced || !interactive ? undefined : { y: -5 }}
    >
      {children}
    </motion.article>
  )
}
