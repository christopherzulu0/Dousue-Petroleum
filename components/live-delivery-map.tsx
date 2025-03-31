"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Truck, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"

export function LiveDeliveryMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      origin: { lat: -15.3875, lng: 28.3228 }, // Lusaka
      destination: { lat: -12.8, lng: 28.2 }, // Copperbelt
      progress: 0,
      status: "in-transit",
      eta: "2 hours",
    },
    {
      id: 2,
      origin: { lat: -15.3875, lng: 28.3228 }, // Lusaka
      destination: { lat: -17.8, lng: 25.8 }, // Livingstone
      progress: 75,
      status: "in-transit",
      eta: "45 minutes",
    },
    {
      id: 3,
      origin: { lat: -15.3875, lng: 28.3228 }, // Lusaka
      destination: { lat: -11.6, lng: 27.5 }, // DRC Border
      progress: 100,
      status: "delivered",
      eta: "Completed",
    },
  ])

  // Simulate delivery progress
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveries((prev) =>
        prev.map((delivery) => {
          if (delivery.status === "delivered") return delivery

          const newProgress = delivery.progress + 0.5
          return {
            ...delivery,
            progress: newProgress >= 100 ? 100 : newProgress,
            status: newProgress >= 100 ? "delivered" : "in-transit",
            eta: newProgress >= 100 ? "Completed" : delivery.eta,
          }
        }),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
      {/* Map background */}
      <div className="absolute inset-0 bg-blue-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-cover opacity-50"></div>
      </div>

      {/* Map overlay */}
      <div className="absolute inset-0 p-2 sm:p-4">
        {/* Origin marker - Lusaka */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <MapPin className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
            <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-2 py-0.5 sm:py-1 rounded shadow-md text-[8px] sm:text-xs font-medium">
              Lusaka HQ
            </div>
          </div>
        </div>

        {/* Delivery routes */}
        {deliveries.map((delivery) => {
          // Calculate positions (simplified for demo)
          const startX = 50
          const startY = 50

          let endX, endY

          if (delivery.id === 1) {
            // North
            endX = 50
            endY = 20
          } else if (delivery.id === 2) {
            // South
            endX = 40
            endY = 80
          } else {
            // Northeast
            endX = 70
            endY = 30
          }

          // Calculate current position based on progress
          const currentX = startX + (endX - startX) * (delivery.progress / 100)
          const currentY = startY + (endY - startY) * (delivery.progress / 100)

          return (
            <div key={delivery.id}>
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <line
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="#CBD5E0"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${currentX}%`}
                  y2={`${currentY}%`}
                  stroke="#3182CE"
                  strokeWidth="3"
                />
              </svg>

              {/* Truck marker */}
              {delivery.status === "in-transit" && (
                <motion.div
                  className="absolute z-10"
                  style={{
                    left: `${currentX}%`,
                    top: `${currentY}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="bg-primary text-white p-0.5 sm:p-1 rounded-full">
                    <Truck className="h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                </motion.div>
              )}

              {/* Destination marker */}
              <div
                className="absolute z-10"
                style={{
                  left: `${endX}%`,
                  top: `${endY}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {delivery.status === "delivered" ? (
                  <div className="bg-green-500 text-white p-0.5 sm:p-1 rounded-full">
                    <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 bg-red-500 rounded-full"></div>
                    <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-2 py-0.5 sm:py-1 rounded shadow-md text-[8px] sm:text-xs whitespace-nowrap">
                      ETA: {delivery.eta}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white p-2 sm:p-3 rounded-lg shadow-md z-20">
        <h4 className="font-medium text-[10px] sm:text-sm mb-1 sm:mb-2">Active Deliveries</h4>
        <div className="space-y-1 sm:space-y-2">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="flex items-center text-[8px] sm:text-xs">
              <Badge
                variant={delivery.status === "delivered" ? "default" : "outline"}
                className="mr-1 sm:mr-2 text-[8px] sm:text-xs"
              >
                #{delivery.id}
              </Badge>
              <span className="mr-1 sm:mr-2">
                {delivery.status === "delivered" ? "Delivered" : `${Math.round(delivery.progress)}% Complete`}
              </span>
              {delivery.status === "in-transit" && <span className="text-muted-foreground">ETA: {delivery.eta}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

