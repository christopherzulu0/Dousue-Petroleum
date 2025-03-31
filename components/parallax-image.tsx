"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ParallaxImage({ src, alt, width, height, className = "" }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }}>
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full h-auto" />
      </motion.div>
    </div>
  )
}

