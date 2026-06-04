import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const MAX_DIST = 130
const HOVER_RADIUS = 120

/**
 * Animated node/edge graph evoking cloud / network / security.
 * Decorative (aria-hidden). Pauses when the tab is hidden and renders a
 * single static frame when the user prefers reduced motion.
 */
export function CyberNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--accent-rgb').trim() || '47, 129, 247'
    const accent2 = styles.getPropertyValue('--accent-2-rgb').trim() || '56, 189, 248'

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    let running = true
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(44, Math.max(16, Math.round((width * height) / 13500)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 1.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(${accent}, ${(1 - dist / MAX_DIST) * 0.45})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        const near = Math.hypot(node.x - mouse.x, node.y - mouse.y) < HOVER_RADIUS
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = near ? `rgba(${accent2}, 0.95)` : `rgba(${accent}, 0.8)`
        ctx.fill()
        if (near) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r + 4, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${accent2}, 0.35)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x <= 0 || node.x >= width) node.vx *= -1
        if (node.y <= 0 || node.y >= height) node.vy *= -1
      }
      draw()
      if (running) raf = requestAnimationFrame(step)
    }

    resize()
    if (reduced) {
      draw()
    } else {
      raf = requestAnimationFrame(step)
    }

    const onResize = () => resize()
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!reduced) {
        running = true
        raf = requestAnimationFrame(step)
      }
    }

    window.addEventListener('resize', onResize)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [theme, reduced])

  return <canvas ref={canvasRef} className={className} role="presentation" aria-hidden="true" />
}
