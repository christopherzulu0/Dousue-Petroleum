"use client"

import { useState, useEffect } from "react"
import { Calculator, DollarSign, TrendingUp, TrendingDown, Calendar, Truck, MapPin, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

export function AdvancedPriceCalculator() {
  const [fuelType, setFuelType] = useState("diesel")
  const [volume, setVolume] = useState(1000)
  const [distance, setDistance] = useState(50)
  const [calculationComplete, setCalculationComplete] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState<Date>()
  const [isRecurring, setIsRecurring] = useState(false)
  const [recurringFrequency, setRecurringFrequency] = useState("monthly")
  const [location, setLocation] = useState("lusaka")
  const [additives, setAdditives] = useState(false)
  const [premiumService, setPremiumService] = useState(false)
  const [priceHistory, setPriceHistory] = useState<{ date: string; price: number }[]>([])
  const [priceFluctuation, setPriceFluctuation] = useState<"up" | "down" | "stable">("stable")
  const [deliveryTime, setDeliveryTime] = useState("standard")
  const [activeTab, setActiveTab] = useState("basic")

  const fuelPrices = {
    diesel: 1.85,
    petrol: 1.92,
    bulk: 1.78,
    kerosene: 1.65,
  }

  const locationMultipliers = {
    lusaka: 1.0,
    kitwe: 1.05,
    livingstone: 1.12,
    congo: 1.25,
  }

  const deliveryTimeMultipliers = {
    standard: 1.0,
    express: 1.3,
    scheduled: 1.1,
  }

  // Generate price history on mount
  useEffect(() => {
    const today = new Date()
    const history = Array.from({ length: 30 }).map((_, i) => {
      const date = new Date()
      date.setDate(today.getDate() - (29 - i))

      // Create a somewhat realistic price trend
      const basePrice = 1.75
      const seasonalComponent = Math.sin(i / 5) * 0.05
      const randomComponent = (Math.random() - 0.5) * 0.04
      const trendComponent = i * 0.002

      const price = basePrice + seasonalComponent + randomComponent + trendComponent

      return {
        date: format(date, "MMM dd"),
        price: Number.parseFloat(price.toFixed(2)),
      }
    })

    setPriceHistory(history)

    // Determine price trend
    const lastWeekAvg = history.slice(-7).reduce((sum, item) => sum + item.price, 0) / 7
    const previousWeekAvg = history.slice(-14, -7).reduce((sum, item) => sum + item.price, 0) / 7

    if (lastWeekAvg > previousWeekAvg * 1.01) {
      setPriceFluctuation("up")
    } else if (lastWeekAvg < previousWeekAvg * 0.99) {
      setPriceFluctuation("down")
    } else {
      setPriceFluctuation("stable")
    }
  }, [])

  const calculateCost = () => {
    const basePrice = volume * fuelPrices[fuelType as keyof typeof fuelPrices]
    const deliveryFee = distance * 0.5
    const locationMultiplier = locationMultipliers[location as keyof typeof locationMultipliers]
    const deliveryTimeMultiplier = deliveryTimeMultipliers[deliveryTime as keyof typeof deliveryTimeMultipliers]

    let totalPrice = (basePrice + deliveryFee) * locationMultiplier * deliveryTimeMultiplier

    if (additives) totalPrice += volume * 0.05
    if (premiumService) totalPrice += 50

    return totalPrice.toFixed(2)
  }

  const calculateRecurringCost = () => {
    const singleDeliveryCost = Number.parseFloat(calculateCost())

    // Apply discount based on frequency
    let discountMultiplier = 1.0
    switch (recurringFrequency) {
      case "weekly":
        discountMultiplier = 0.95
        break
      case "biweekly":
        discountMultiplier = 0.97
        break
      case "monthly":
        discountMultiplier = 0.98
        break
    }

    return (singleDeliveryCost * discountMultiplier).toFixed(2)
  }

  const calculateAnnualCost = () => {
    const recurringCost = Number.parseFloat(calculateRecurringCost())

    let deliveriesPerYear = 0
    switch (recurringFrequency) {
      case "weekly":
        deliveriesPerYear = 52
        break
      case "biweekly":
        deliveriesPerYear = 26
        break
      case "monthly":
        deliveriesPerYear = 12
        break
    }

    return (recurringCost * deliveriesPerYear).toFixed(2)
  }

  const getEstimatedDeliveryTime = () => {
    switch (deliveryTime) {
      case "express":
        return "Within 24 hours"
      case "scheduled":
        return deliveryDate ? `On ${format(deliveryDate, "MMMM dd, yyyy")}` : "Select a date"
      default:
        return "2-3 business days"
    }
  }

  const handleCalculate = () => {
    setCalculationComplete(true)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <CardTitle className="text-sm sm:text-base">Advanced Fuel Cost Calculator</CardTitle>
        </div>
        <CardDescription className="text-xs sm:text-sm">
          Calculate your fuel costs with detailed options and delivery scheduling
        </CardDescription>
      </CardHeader>

      <Tabs defaultValue="basic" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 text-[10px] sm:text-xs">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
          <TabsContent value="basic" className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fuel-type" className="text-xs sm:text-sm">
                Fuel Type
              </Label>
              <Select value={fuelType} onValueChange={setFuelType}>
                <SelectTrigger id="fuel-type" className="text-xs sm:text-sm h-8 sm:h-10">
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="bulk">Bulk Fuel</SelectItem>
                  <SelectItem value="kerosene">Kerosene</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="volume" className="text-xs sm:text-sm">
                  Volume (Liters)
                </Label>
                <span className="text-xs sm:text-sm text-muted-foreground">{volume.toLocaleString()} L</span>
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

            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="distance" className="text-xs sm:text-sm">
                  Delivery Distance (km)
                </Label>
                <span className="text-xs sm:text-sm text-muted-foreground">{distance} km</span>
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

            <div className="space-y-2">
              <Label htmlFor="location" className="text-xs sm:text-sm">
                Delivery Location
              </Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" className="text-xs sm:text-sm h-8 sm:h-10">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lusaka">Lusaka</SelectItem>
                  <SelectItem value="kitwe">Kitwe</SelectItem>
                  <SelectItem value="livingstone">Livingstone</SelectItem>
                  <SelectItem value="congo">Congo Border</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="delivery-time" className="text-xs sm:text-sm">
                Delivery Time
              </Label>
              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                <SelectTrigger id="delivery-time" className="text-xs sm:text-sm h-8 sm:h-10">
                  <SelectValue placeholder="Select delivery time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (2-3 days)</SelectItem>
                  <SelectItem value="express">Express (24 hours)</SelectItem>
                  <SelectItem value="scheduled">Scheduled Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {deliveryTime === "scheduled" && (
              <div className="space-y-2">
                <Label className="text-xs sm:text-sm">Scheduled Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-xs sm:text-sm h-8 sm:h-10"
                    >
                      <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      {deliveryDate ? format(deliveryDate, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={deliveryDate}
                      onSelect={setDeliveryDate}
                      initialFocus
                      disabled={(date) => {
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}

            <div className="flex items-center justify-between space-y-0 pt-1 sm:pt-2">
              <Label htmlFor="recurring" className="text-xs sm:text-sm">
                Recurring Delivery
              </Label>
              <Switch id="recurring" checked={isRecurring} onCheckedChange={setIsRecurring} />
            </div>

            {isRecurring && (
              <div className="space-y-2">
                <Label htmlFor="recurring-frequency" className="text-xs sm:text-sm">
                  Delivery Frequency
                </Label>
                <Select value={recurringFrequency} onValueChange={setRecurringFrequency}>
                  <SelectTrigger id="recurring-frequency" className="text-xs sm:text-sm h-8 sm:h-10">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2 pt-1 sm:pt-2">
              <Label className="text-xs sm:text-sm">Additional Options</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch id="additives" checked={additives} onCheckedChange={setAdditives} />
                    <Label htmlFor="additives" className="cursor-pointer text-xs sm:text-sm">
                      Fuel Additives
                    </Label>
                  </div>
                  <Badge variant="outline" className="text-[8px] sm:text-xs">
                    +$0.05/L
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch id="premium" checked={premiumService} onCheckedChange={setPremiumService} />
                    <Label htmlFor="premium" className="cursor-pointer text-xs sm:text-sm">
                      Premium Service
                    </Label>
                  </div>
                  <Badge variant="outline" className="text-[8px] sm:text-xs">
                    +$50.00
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-medium">Fuel Price Trend (30 Days)</h3>
              <div className="h-32 sm:h-40 flex items-end gap-0.5 sm:gap-1">
                {priceHistory.map((item, i) => (
                  <div key={i} className="group relative flex-1">
                    <div
                      className="bg-primary/80 hover:bg-primary transition-colors rounded-t"
                      style={{
                        height: `${((item.price - 1.6) / 0.5) * 80}%`,
                        minHeight: "4px",
                        width: "100%",
                        maxWidth: "8px",
                        margin: "0 auto",
                      }}
                    ></div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-background border rounded px-1 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {item.date}: ${item.price}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[8px] sm:text-xs text-muted-foreground">
                <span>{priceHistory[0]?.date}</span>
                <span>{priceHistory[priceHistory.length - 1]?.date}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 sm:p-3 border rounded-lg">
              <div className="flex items-center">
                <span className="font-medium mr-1 sm:mr-2 text-[10px] sm:text-sm">Current Price Trend:</span>
                {priceFluctuation === "up" ? (
                  <div className="flex items-center text-red-500">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" />
                    <span className="text-[10px] sm:text-sm">Rising</span>
                  </div>
                ) : priceFluctuation === "down" ? (
                  <div className="flex items-center text-green-500">
                    <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" />
                    <span className="text-[10px] sm:text-sm">Falling</span>
                  </div>
                ) : (
                  <div className="flex items-center text-yellow-500">
                    <span className="text-[10px] sm:text-sm">Stable</span>
                  </div>
                )}
              </div>
              <div>
                <Badge variant={priceFluctuation === "down" ? "default" : "outline"} className="text-[8px] sm:text-xs">
                  {priceFluctuation === "down" ? "Good time to buy" : "Monitor prices"}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="border rounded-lg p-2 sm:p-3">
                <h3 className="text-[10px] sm:text-sm font-medium mb-1">Price Comparison</h3>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Diesel:</span>
                    <span>${fuelPrices.diesel}/L</span>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Petrol:</span>
                    <span>${fuelPrices.petrol}/L</span>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Bulk:</span>
                    <span>${fuelPrices.bulk}/L</span>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Kerosene:</span>
                    <span>${fuelPrices.kerosene}/L</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-2 sm:p-3">
                <h3 className="text-[10px] sm:text-sm font-medium mb-1">Location Factors</h3>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Lusaka:</span>
                    <span>Base Price</span>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Kitwe:</span>
                    <span>+5%</span>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Livingstone:</span>
                    <span>+12%</span>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-sm">
                    <span>Congo Border:</span>
                    <span>+25%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>

      <CardFooter className="flex flex-col px-3 sm:px-6 pb-3 sm:pb-6">
        <Button onClick={handleCalculate} className="w-full mb-3 sm:mb-4 text-xs sm:text-sm h-8 sm:h-10">
          Calculate Cost
        </Button>

        <AnimatePresence>
          {calculationComplete && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20 space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-1 sm:mr-2" />
                    <span className="font-medium text-xs sm:text-sm">Estimated Cost:</span>
                  </div>
                  <span className="text-base sm:text-xl font-bold">${calculateCost()}</span>
                </div>

                {isRecurring && (
                  <>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-1 sm:mr-2" />
                        <span className="font-medium text-xs sm:text-sm">Per Delivery (with discount):</span>
                      </div>
                      <span className="text-sm sm:text-lg font-bold">${calculateRecurringCost()}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-1 sm:mr-2" />
                        <span className="font-medium text-xs sm:text-sm">Annual Cost:</span>
                      </div>
                      <span className="text-sm sm:text-lg font-bold">${calculateAnnualCost()}</span>
                    </div>
                  </>
                )}

                <div className="pt-2 border-t">
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 text-[9px] sm:text-sm">
                    <div className="flex items-center">
                      <Truck className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mr-0.5 sm:mr-1" />
                      <span className="text-muted-foreground">Delivery Time:</span>
                    </div>
                    <span>{getEstimatedDeliveryTime()}</span>

                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mr-0.5 sm:mr-1" />
                      <span className="text-muted-foreground">Location:</span>
                    </div>
                    <span>{location.charAt(0).toUpperCase() + location.slice(1)}</span>

                    <div className="flex items-center">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mr-0.5 sm:mr-1" />
                      <span className="text-muted-foreground">Quote Valid For:</span>
                    </div>
                    <span>7 days</span>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <Button size="sm" className="text-xs sm:text-sm h-7 sm:h-8">
                    Proceed to Order
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardFooter>
    </Card>
  )
}

