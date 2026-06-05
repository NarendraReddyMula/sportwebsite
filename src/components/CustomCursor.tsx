import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        !!(target.closest('a') ||
          target.closest('button') ||
          target.closest('[data-cursor-hover]')),
      )
    }

    const leave = () => setIsVisible(false)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-blue-500"
        style={{ width: 8, height: 8 }}
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.3 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-blue-500/60"
        style={{ width: 36, height: 36 }}
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      />
    </>
  )
}
