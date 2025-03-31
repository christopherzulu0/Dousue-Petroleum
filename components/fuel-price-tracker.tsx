"use client"

import { useState, useEffect } from "react"
import { BarChart3, TrendingUp, TrendingDown, Droplets } from "lucide-react"
import { motion } from "framer-motion"

export function FuelPriceTracker() {
  const [prices, setPrices] = useState({
    diesel: 1.85,
    petrol: 1.92,
    bulk: 1.78,
  })

  const [trends, setTrends] = useState({
    diesel: "up",
    petrol: "down",
    bulk: "up",
  })

  // Simulate price changes
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => ({
        diesel: Number.parseFloat((prev.diesel + (Math.random() * 0.04 - 0.02)).toFixed(2)),
        petrol: Number.parseFloat((prev.petrol + (Math.random() * 0.04 - 0.02)).toFixed(2)),
        bulk: Number.parseFloat((prev.bulk + (Math.random() * 0.04 - 0.02)).toFixed(2)),
      }))

      setTrends((prev) => ({
        diesel: Math.random() > 0.5 ? "up" : "down",
        petrol: Math.random() > 0.5 ? "up" : "down",
        bulk: Math.random() > 0.5 ? "up" : "down",
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold flex items-center">
          <BarChart3 className="mr-2 h-5 w-5" />
          Live Fuel Prices
        </h3>
        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Updated Live</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="mr-2 h-4 w-4 text-blue-400" />
            <span>Diesel</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold">${prices.diesel}</span>
            <motion.div
              animate={{ y: trends.diesel === "up" ? -2 : 2 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="ml-2"
            >
              {trends.diesel === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-400" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400" />
              )}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="mr-2 h-4 w-4 text-green-400" />
            <span>Petrol</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold">${prices.petrol}</span>
            <motion.div
              animate={{ y: trends.petrol === "up" ? -2 : 2 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="ml-2"
            >
              {trends.petrol === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-400" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400" />
              )}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="mr-2 h-4 w-4 text-yellow-400" />
            <span>Bulk</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold">${prices.bulk}</span>
            <motion.div
              animate={{ y: trends.bulk === "up" ? -2 : 2 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="ml-2"
            >
              {trends.bulk === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-400" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

