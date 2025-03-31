"use client"

import { useEffect, useRef, useState } from "react"
import { Droplets, AlertTriangle, ThermometerIcon, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function AdvancedFuelTank() {
  const [fillLevel, setFillLevel] = useState(75)
  const [temperature, setTemperature] = useState(22)
  const [pressure, setPressure] = useState(85)
  const [fuelType, setFuelType] = useState("diesel")
  const [activeTab, setActiveTab] = useState("visual")
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Simulate temperature and pressure changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prev) => {
        const newTemp = prev + (Math.random() * 0.4 - 0.2)
        return Number.parseFloat(newTemp.toFixed(1))
      })

      setPressure((prev) => {
        const newPressure = prev + (Math.random() * 2 - 1)
        return Math.min(100, Math.max(70, Number.parseFloat(newPressure.toFixed(1))))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Show alert when fill level is low
  useEffect(() => {
    if (fillLevel < 20 && !isAlertVisible) {
      setIsAlertVisible(true)
      const timeout = setTimeout(() => {
        setIsAlertVisible(false)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [fillLevel, isAlertVisible])

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Function to resize canvas to match container
    const resizeCanvas = () => {
      if (!canvas || !container) return
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

      // Adjust tank dimensions based on screen size - INCREASED MINIMUM SIZES
      const isMobile = window.innerWidth < 640
      const tankWidth = isMobile
        ? Math.min(canvas.width * 0.95, 320) // Increased from 280
        : Math.min(canvas.width * 0.8, 400) // Increased from 300

      // Adjust tank height to be smaller to ensure it fits
      const tankHeight = isMobile
        ? Math.min(canvas.height * 0.75, 350) // Reduced from 380
        : Math.min(canvas.height * 0.75, 450) // Reduced from 500

      // Draw tank exterior - INCREASED LINE WIDTH
      ctx.fillStyle = "#888888"
      ctx.strokeStyle = "#666666"
      ctx.lineWidth = isMobile ? 4 : 5 // Increased from 3

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
      let liquidColor
      switch (fuelType) {
        case "diesel":
          liquidColor = "#3182CE"
          break
        case "petrol":
          liquidColor = "#38A169"
          break
        case "kerosene":
          liquidColor = "#DD6B20"
          break
        default:
          liquidColor = "#3182CE"
      }

      const gradient = ctx.createLinearGradient(
        centerX - tankWidth / 2 + 15,
        liquidY,
        centerX + tankWidth / 2 - 15,
        liquidY + liquidHeight,
      )
      gradient.addColorStop(0, liquidColor)
      gradient.addColorStop(1, liquidColor.replace("CE", "E1").replace("69", "89").replace("20", "40"))

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

      // Only draw temperature gauge on larger screens
      if (!isMobile) {
        // Temperature gauge
        const tempGaugeX = centerX - tankWidth / 2 - 40
        const tempGaugeY = centerY
        const tempGaugeHeight = 100

        // Gauge background
        ctx.fillStyle = "#444"
        ctx.beginPath()
        ctx.roundRect(tempGaugeX - 5, tempGaugeY - tempGaugeHeight / 2, 10, tempGaugeHeight, 5)
        ctx.fill()

        // Temperature level
        const tempNormalized = (temperature - 10) / 30 // Range 10-40°C
        const tempHeight = Math.max(0, Math.min(1, tempNormalized)) * tempGaugeHeight

        // Temperature color gradient
        let tempColor
        if (temperature < 20)
          tempColor = "#3182CE" // Cool
        else if (temperature < 30)
          tempColor = "#38A169" // Normal
        else tempColor = "#E53E3E" // Hot

        ctx.fillStyle = tempColor
        ctx.beginPath()
        ctx.roundRect(tempGaugeX - 5, tempGaugeY + tempGaugeHeight / 2 - tempHeight, 10, tempHeight, 5)
        ctx.fill()
      }

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
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)" // Increased opacity
      ctx.lineWidth = isMobile ? 2 : 2.5 // Increased line width

      const indicatorSteps = isMobile ? 5 : 10
      for (let i = 1; i <= indicatorSteps; i++) {
        const y = centerY + tankHeight / 2 - 15 - (tankHeight - 30) * (i / indicatorSteps)
        ctx.beginPath()
        ctx.moveTo(centerX - tankWidth / 2 + 25, y)
        ctx.lineTo(centerX - tankWidth / 2 + 40, y) // Made lines longer
        ctx.stroke()

        if (i % 2 === 0 || isMobile) {
          ctx.font = isMobile ? "12px Arial" : "14px Arial" // Increased font size
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)" // Increased opacity
          ctx.fillText(`${i * (100 / indicatorSteps)}%`, centerX - tankWidth / 2 + 45, y + 4)
        }
      }

      // Add bubbles for animation - fewer on mobile
      const bubbleCount = isMobile ? 3 : 5
      const time = Date.now() / 1000
      for (let i = 0; i < bubbleCount; i++) {
        const x = centerX - tankWidth / 4 + Math.sin(time + i) * 20
        const y = liquidY + liquidHeight - ((time * 20 + i * 50) % liquidHeight)

        if (y > liquidY) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.beginPath()
          ctx.arc(x, y, 3 + (i % 3), 0, 2 * Math.PI)
          ctx.fill()
        }
      }

      // Draw warning indicator if fill level is low
      if (fillLevel < 20) {
        ctx.fillStyle = "#E53E3E"
        ctx.beginPath()
        ctx.arc(centerX + tankWidth / 2 - 20, centerY - tankHeight / 2 + 20, 8, 0, 2 * Math.PI)
        ctx.fill()

        // Pulsing effect
        const pulseSize = 12 + Math.sin(Date.now() / 200) * 3
        ctx.strokeStyle = "#E53E3E"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(centerX + tankWidth / 2 - 20, centerY - tankHeight / 2 + 20, pulseSize, 0, 2 * Math.PI)
        ctx.stroke()
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
  }, [fillLevel, fuelType, temperature])

  const getFuelCapacity = () => {
    const baseCapacity = fillLevel * 100

    // Different fuel types have different densities
    switch (fuelType) {
      case "diesel":
        return Math.round(baseCapacity * 1.05)
      case "petrol":
        return Math.round(baseCapacity * 0.95)
      case "kerosene":
        return Math.round(baseCapacity * 1.0)
      default:
        return Math.round(baseCapacity)
    }
  }

  const getPressureStatus = () => {
    if (pressure < 75) return "Low"
    if (pressure > 95) return "High"
    return "Normal"
  }

  const getPressureColor = () => {
    if (pressure < 75) return "text-blue-500"
    if (pressure > 95) return "text-red-500"
    return "text-green-500"
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Tabs defaultValue="visual" className="w-full flex flex-col" style={{ height: "100%" }}>
        <div className="flex justify-between items-center mb-4">
          <TabsList className="w-full flex flex-wrap justify-center">
            <TabsTrigger value="visual">Visual</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {isAlertVisible && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center bg-red-500/10 text-red-500 px-3 py-1 rounded-md"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Low fuel level</span>
            </motion.div>
          )}
        </div>

        <TabsContent
          value="visual"
          className="flex-1 relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] pb-12"
        >
          <div ref={containerRef} className="w-full h-full absolute inset-0">
            <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
          </div>

          <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant={fillLevel < 20 ? "destructive" : "outline"}
                    className="flex gap-1 items-center text-sm"
                  >
                    <Droplets className="h-4 w-4" />
                    {fillLevel}%
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Current fill level</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="flex gap-1 items-center text-sm">
                    <ThermometerIcon className="h-4 w-4" />
                    {temperature}°C
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Current temperature</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TabsContent>

        <TabsContent value="data" className="space-y-4 overflow-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-sm">Fill Level</h4>
                <Badge variant={fillLevel < 20 ? "destructive" : "outline"}>{fillLevel}%</Badge>
              </div>
              <Progress value={fillLevel} className="h-2" />
              <p className="text-xs text-muted-foreground">Capacity: {getFuelCapacity()} Liters</p>
            </div>

            <div className="space-y-2 border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-sm">Temperature</h4>
                <Badge variant="outline">{temperature}°C</Badge>
              </div>
              <Progress
                value={((temperature - 10) / 30) * 100}
                className="h-2"
                indicatorClassName={temperature > 30 ? "bg-red-500" : temperature < 20 ? "bg-blue-500" : ""}
              />
              <p className="text-xs text-muted-foreground">
                Status: {temperature < 20 ? "Cool" : temperature > 30 ? "Hot" : "Normal"}
              </p>
            </div>

            <div className="space-y-2 border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-sm">Pressure</h4>
                <Badge variant="outline">{pressure} kPa</Badge>
              </div>
              <Progress
                value={((pressure - 70) / 30) * 100}
                className="h-2"
                indicatorClassName={pressure > 95 ? "bg-red-500" : pressure < 75 ? "bg-blue-500" : ""}
              />
              <p className="text-xs text-muted-foreground">
                Status: <span className={getPressureColor()}>{getPressureStatus()}</span>
              </p>
            </div>

            <div className="space-y-2 border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-sm">Fuel Type</h4>
                <Badge>{fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}</Badge>
              </div>
              <div className="flex gap-2 mt-2">
                <div className={`w-4 h-4 rounded-full ${fuelType === "diesel" ? "bg-blue-500" : "bg-blue-200"}`}></div>
                <div
                  className={`w-4 h-4 rounded-full ${fuelType === "petrol" ? "bg-green-500" : "bg-green-200"}`}
                ></div>
                <div
                  className={`w-4 h-4 rounded-full ${fuelType === "kerosene" ? "bg-orange-500" : "bg-orange-200"}`}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Density: {fuelType === "diesel" ? "High" : fuelType === "petrol" ? "Low" : "Medium"}
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2 flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Consumption History
            </h4>
            <div className="h-32 flex items-end gap-1">
              {Array.from({ length: 14 }).map((_, i) => {
                const height = 30 + Math.sin(i * 0.5) * 20 + Math.random() * 30
                return (
                  <div
                    key={i}
                    className="bg-primary/80 hover:bg-primary transition-colors rounded-t w-full"
                    style={{ height: `${height}%` }}
                  >
                    <div className="w-full h-full relative group">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-background border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {Math.round(height * 10)} L on Day {i + 1}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>2 Weeks Ago</span>
              <span>Today</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 overflow-auto flex-1">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="fill-level">Fill Level</Label>
                <span className="text-sm font-medium">{fillLevel}%</span>
              </div>
              <Slider
                id="fill-level"
                min={0}
                max={100}
                step={1}
                value={[fillLevel]}
                onValueChange={(value) => setFillLevel(value[0])}
              />
            </div>

            <div className="space-y-2">
              <Label>Fuel Type</Label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={fuelType === "diesel" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFuelType("diesel")}
                >
                  Diesel
                </Button>
                <Button
                  variant={fuelType === "petrol" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFuelType("petrol")}
                >
                  Petrol
                </Button>
                <Button
                  variant={fuelType === "kerosene" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFuelType("kerosene")}
                >
                  Kerosene
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="temperature">Temperature (Manual Override)</Label>
                <span className="text-sm font-medium">{temperature}°C</span>
              </div>
              <Slider
                id="temperature"
                min={10}
                max={40}
                step={0.1}
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="pressure">Pressure (Manual Override)</Label>
                <span className="text-sm font-medium">{pressure} kPa</span>
              </div>
              <Slider
                id="pressure"
                min={70}
                max={100}
                step={0.1}
                value={[pressure]}
                onValueChange={(value) => setPressure(value[0])}
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setFillLevel(75)
                  setTemperature(22)
                  setPressure(85)
                  setFuelType("diesel")
                }}
              >
                Reset to Default
              </Button>
              <Button>Apply Changes</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

