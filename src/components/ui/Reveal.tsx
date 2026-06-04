import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Animation delay in seconds (use index * 0.06 to stagger a list). */
  delay?: number
  y?: number
  className?: string
}

/** Fade/slide a block into view once. Collapses to a plain fade under reduced-motion. */
export function Reveal({ children, delay = 0, y = 22, className }: RevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduced ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
