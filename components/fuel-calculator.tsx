"use client"

import { useState } from "react"
import { Calculator, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FuelCalculator() {
  const [fuelType, setFuelType] = useState("diesel")
  const [volume, setVolume] = useState(1000)
  const [distance, setDistance] = useState(50)
  const [calculationComplete, setCalculationComplete] = useState(false)

  const fuelPrices = {
    diesel: 1.85,
    petrol: 1.92,
    bulk: 1.78,
  }

  const calculateCost = () => {
    const basePrice = volume * fuelPrices[fuelType as keyof typeof fuelPrices]
    const deliveryFee = distance * 0.5
    return (basePrice + deliveryFee).toFixed(2)
  }

  const handleCalculate = () => {
    setCalculationComplete(true)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-primary" />
          <CardTitle>Fuel Cost Calculator</CardTitle>
        </div>
        <CardDescription>Estimate your fuel costs based on volume and delivery distance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fuel-type">Fuel Type</Label>
            <Select value={fuelType} onValueChange={setFuelType}>
              <SelectTrigger id="fuel-type">
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="petrol">Petrol</SelectItem>
                <SelectItem value="bulk">Bulk Fuel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="volume">Volume (Liters)</Label>
              <span className="text-sm text-muted-foreground">{volume} L</span>
            </div>
            <Slider
              id="volume"
              min={100}
              max={10000}
              step={100}
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="distance">Delivery Distance (km)</Label>
              <span className="text-sm text-muted-foreground">{distance} km</span>
            </div>
            <Slider
              id="distance"
              min={1}
              max={500}
              step={1}
              value={[distance]}
              onValueChange={(value) => setDistance(value[0])}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button onClick={handleCalculate} className="w-full mb-4">
          Calculate Cost
        </Button>

        {calculationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full p-4 bg-primary/10 rounded-lg border border-primary/20"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Estimated Cost:</span>
              </div>
              <span className="text-xl font-bold">${calculateCost()}</span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Based on current prices and includes delivery fee</div>
          </motion.div>
        )}
      </CardFooter>
    </Card>
  )
}

