"use client"

import { useEffect, useRef, useState } from "react"
import { Droplets, Gauge } from "lucide-react"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export function ThreeDFuelTank() {
  const [fillLevel, setFillLevel] = useState(75)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Use canvas 2D rendering instead of Three.js to avoid the error
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Function to handle resize and maintain proper dimensions
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return

      // Set canvas dimensions to match container size
      const container = containerRef.current
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    // Initial resize
    resizeCanvas()

    const drawTank = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Determine if mobile based on canvas width
      const isMobile = window.innerWidth < 640

      // Make tank much larger relative to canvas
      const tankWidth = isMobile ? Math.min(canvas.width * 0.95, 350) : Math.min(canvas.width * 0.8, 450)

      const tankHeight = isMobile ? Math.min(canvas.height * 0.85, 400) : Math.min(canvas.height * 0.85, 550)

      // Draw tank exterior - make lines thicker for better visibility
      ctx.fillStyle = "#888888"
      ctx.strokeStyle = "#666666"
      ctx.lineWidth = isMobile ? 4 : 5

      // Tank body
      ctx.beginPath()
      ctx.roundRect(centerX - tankWidth / 2, centerY - tankHeight / 2, tankWidth, tankHeight, 20)
      ctx.fill()
      ctx.stroke()

      // Tank interior
      ctx.fillStyle = "#444444"
      ctx.beginPath()
      ctx.roundRect(centerX - tankWidth / 2 + 10, centerY - tankHeight / 2 + 10, tankWidth - 20, tankHeight - 20, 15)
      ctx.fill()

      // Calculate liquid height based on fill level
      const liquidHeight = (tankHeight - 30) * (fillLevel / 100)
      const liquidY = centerY + tankHeight / 2 - 15 - liquidHeight

      // Draw liquid
      const gradient = ctx.createLinearGradient(
        centerX - tankWidth / 2 + 15,
        liquidY,
        centerX + tankWidth / 2 - 15,
        liquidY + liquidHeight,
      )
      gradient.addColorStop(0, "#3182CE")
      gradient.addColorStop(1, "#4299E1")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(centerX - tankWidth / 2 + 15, liquidY, tankWidth - 30, liquidHeight, 10)
      ctx.fill()

      // Draw tank cap
      ctx.fillStyle = "#555555"
      ctx.beginPath()
      ctx.roundRect(centerX - 30, centerY - tankHeight / 2 - 15, 60, 25, 10)
      ctx.fill()

      // Draw pipe
      ctx.fillStyle = "#555555"
      ctx.beginPath()
      ctx.roundRect(centerX + tankWidth / 2 - 5, centerY + tankHeight / 4, 40, 20, 5)
      ctx.fill()

      // Draw shine effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.beginPath()
      ctx.ellipse(
        centerX - tankWidth / 4,
        centerY - tankHeight / 4,
        tankWidth / 6,
        tankHeight / 8,
        Math.PI / 4,
        0,
        2 * Math.PI,
      )
      ctx.fill()

      // Draw level indicator lines - fewer on mobile
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 2

      // Use fewer indicator lines on mobile
      const steps = isMobile ? 5 : 10
      for (let i = 1; i <= steps; i++) {
        const y = centerY + tankHeight / 2 - 15 - (tankHeight - 30) * (i / steps)
        ctx.beginPath()
        ctx.moveTo(centerX - tankWidth / 2 + 25, y)
        ctx.lineTo(centerX - tankWidth / 2 + 45, y)
        ctx.stroke()

        // Make text larger and more visible
        const fontSize = isMobile ? 12 : 14
        ctx.font = `${fontSize}px Arial`
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fillText(`${Math.round(i * (100 / steps))}%`, centerX - tankWidth / 2 + 50, y + 4)
      }

      // Add bubbles for animation
      const time = Date.now() / 1000
      for (let i = 0; i < 5; i++) {
        const x = centerX - tankWidth / 4 + Math.sin(time + i) * 20
        const y = liquidY + liquidHeight - ((time * 20 + i * 50) % liquidHeight)

        if (y > liquidY) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.beginPath()
          ctx.arc(x, y, 3 + (i % 3), 0, 2 * Math.PI)
          ctx.fill()
        }
      }
    }

    // Initial draw
    drawTank()

    // Animation loop
    let animationFrame: number
    const animate = () => {
      drawTank()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      drawTank()
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [fillLevel])

  return (
    <div className="w-full flex flex-col h-full">
      {/* Significantly increase the minimum height */}
      <div
        ref={containerRef}
        className="relative flex-1 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: "block" }} // Ensure no extra space
        />
      </div>

      <div className="p-4 sm:p-6 bg-white rounded-b-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Droplets className="h-6 w-6 text-primary mr-2" />
            <Label htmlFor="fill-level" className="text-base sm:text-lg">
              Tank Fill Level
            </Label>
          </div>
          <span className="text-base sm:text-lg font-medium">{fillLevel}%</span>
        </div>
        <Slider
          id="fill-level"
          min={0}
          max={100}
          step={1}
          value={[fillLevel]}
          onValueChange={(value) => setFillLevel(value[0])}
          className="my-2"
        />

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Gauge className="h-6 w-6 text-primary mr-2" />
            <span className="text-base sm:text-lg">Estimated Capacity:</span>
          </div>
          <span className="text-base sm:text-lg font-medium">{Math.round(fillLevel * 100)} Liters</span>
        </div>
      </div>
    </div>
  )
}

