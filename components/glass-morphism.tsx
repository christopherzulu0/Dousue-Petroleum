"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlassMorphismProps {
  children: ReactNode
  className?: string
}

export function GlassMorphism({ children, className = "" }: GlassMorphismProps) {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

