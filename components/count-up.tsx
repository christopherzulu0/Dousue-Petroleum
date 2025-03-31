"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  start?: number
  delay?: number
}

export function CountUp({ end, duration = 2, start = 0, delay = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) {
          startTimestamp = timestamp + delay * 1000
        }

        if (timestamp < startTimestamp) {
          requestAnimationFrame(step)
          return
        }

        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * (end - start) + start)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      requestAnimationFrame(step)
    }
  }, [isInView, end, duration, start, delay, hasAnimated])

  return <span ref={ref}>{count}</span>
}

