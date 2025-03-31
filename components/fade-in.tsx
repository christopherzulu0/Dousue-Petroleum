"use client"

import type { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", duration = 0.5, className = "" }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: 20, x: 0 }
      case "down":
        return { y: -20, x: 0 }
      case "left":
        return { y: 0, x: 20 }
      case "right":
        return { y: 0, x: -20 }
      case "none":
        return { y: 0, x: 0 }
      default:
        return { y: 20, x: 0 }
    }
  }

  const { y, x } = getDirectionValues()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

