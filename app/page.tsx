"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"
import { ChevronRight, Fuel, Shield, Phone, Truck, ArrowRight, ChevronDown, Gauge } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { FuelPriceTracker } from "@/components/fuel-price-tracker"
import { AdvancedPriceCalculator } from "@/components/advanced-price-calculator"
import { ParticleBackground } from "@/components/particle-background"
import { AdvancedFuelTank } from "@/components/advanced-fuel-tank"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlassMorphism } from "@/components/glass-morphism"
import { LiquidButton } from "@/components/liquid-button"
import { ChatbotAssistant } from "@/components/chatbot-assistant"

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  // Fix the hero section to be more mobile-friendly
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Update the hero section to be more responsive */}
        <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
          <ParticleBackground />
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Fuel Tanker"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 backdrop-blur-sm"></div>
          </div>

          <motion.div
            style={{ opacity, scale, y }}
            className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32"
          >
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Powering Progress
                  </span>{" "}
                  <br className="md:block hidden" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                    Across Zambia & Congo
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-white/80 mb-8">
                  Dousue Petroleum provides premium fuel products and reliable delivery services to keep your business
                  running smoothly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <LiquidButton
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white group"
                >
                  <Link href="/order">
                    Order Fuel Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </LiquidButton>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute bottom-32 right-10 md:right-32 hidden lg:block"
            >
              <GlassMorphism className="p-6 max-w-xs">
                <FuelPriceTracker />
              </GlassMorphism>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <Badge className="mb-4" variant="outline">
                    Our Solutions
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Premium Fuel Solutions
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive fuel services tailored to your business needs
                  </p>
                </div>
              </div>
            </FadeIn>

            <Tabs defaultValue="overview" className="w-full mb-16" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="overview" className="relative">
                    Overview
                    {activeTab === "overview" && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute -bottom-px left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="products" className="relative">
                    Products
                    {activeTab === "products" && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute -bottom-px left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="services" className="relative">
                    Services
                    {activeTab === "services" && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute -bottom-px left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="mt-8">
                {/* Fix the grid layouts to be more responsive */}
                <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <FadeIn delay={0.1}>
                    <div className="group relative overflow-hidden rounded-xl border bg-background p-1 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="relative z-10 flex flex-col items-center space-y-4 rounded-lg border p-6 transition-transform group-hover:-translate-y-1">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Fuel className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Fuel Supply & Distribution</h3>
                        <p className="text-center text-muted-foreground">
                          Diesel, petrol, and bulk delivery services for businesses of all sizes.
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center text-sm font-medium text-primary group"
                        >
                          Learn more
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="group relative overflow-hidden rounded-xl border bg-background p-1 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="relative z-10 flex flex-col items-center space-y-4 rounded-lg border p-6 transition-transform group-hover:-translate-y-1">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Truck className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Logistics & Delivery</h3>
                        <p className="text-center text-muted-foreground">
                          Timely, GPS-tracked fleet ensuring your fuel arrives when you need it.
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center text-sm font-medium text-primary group"
                        >
                          Learn more
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="group relative overflow-hidden rounded-xl border bg-background p-1 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="relative z-10 flex flex-col items-center space-y-4 rounded-lg border p-6 transition-transform group-hover:-translate-y-1">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Shield className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Emergency Fuel Response</h3>
                        <p className="text-center text-muted-foreground">
                          Rapid delivery in critical situations to keep your operations running.
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center text-sm font-medium text-primary group"
                        >
                          Learn more
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </TabsContent>

              <TabsContent value="products" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <FadeIn delay={0.1}>
                    <Card className="group overflow-hidden transition-all hover:shadow-lg">
                      <CardHeader className="p-0">
                        <div className="overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Bulk Diesel"
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Bulk Diesel</CardTitle>
                            <CardDescription className="mt-2">High-quality diesel fuel</CardDescription>
                          </div>
                          <Badge>Diesel</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full group">
                          <Link href="/products">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <Card className="group overflow-hidden transition-all hover:shadow-lg">
                      <CardHeader className="p-0">
                        <div className="overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Premium Petrol"
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Premium Petrol</CardTitle>
                            <CardDescription className="mt-2">High-octane petrol</CardDescription>
                          </div>
                          <Badge>Petrol</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full group">
                          <Link href="/products">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <Card className="group overflow-hidden transition-all hover:shadow-lg">
                      <CardHeader className="p-0">
                        <div className="overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Engine Oil"
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Engine Oil</CardTitle>
                            <CardDescription className="mt-2">Premium lubricants</CardDescription>
                          </div>
                          <Badge>Lubricants</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full group">
                          <Link href="/products">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <Card className="group overflow-hidden transition-all hover:shadow-lg">
                      <CardHeader className="p-0">
                        <div className="overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Fuel Additives"
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Fuel Additives</CardTitle>
                            <CardDescription className="mt-2">Performance enhancers</CardDescription>
                          </div>
                          <Badge>Additives</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full group">
                          <Link href="/products">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </FadeIn>
                </div>
              </TabsContent>

              <TabsContent value="services" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <FadeIn delay={0.1}>
                    <Card className="group overflow-hidden transition-all hover:shadow-lg border-primary/20">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Truck className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle>Scheduled Deliveries</CardTitle>
                            <CardDescription>Regular fuel supply on your schedule</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            Customized delivery schedules
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            Real-time delivery tracking
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            Automated reordering options
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full group">
                          <Link href="/services">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <Card className="group overflow-hidden transition-all hover:shadow-lg border-primary/20">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Gauge className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle>Fuel Monitoring</CardTitle>
                            <CardDescription>Advanced consumption tracking</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            Real-time tank level monitoring
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            Consumption analytics
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            Efficiency recommendations
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full group">
                          <Link href="/services">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </FadeIn>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button asChild variant="outline" className="group">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Make the fuel calculator and tank section more responsive */}
        <section className="w-full py-12 sm:py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <Badge className="mb-4" variant="outline">
                    Interactive Tools
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Calculate Your Fuel Needs
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    Use our interactive calculator to estimate your fuel requirements and costs based on your specific
                    needs.
                  </p>
                  <div className="mt-8">
                    <AdvancedPriceCalculator />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm shadow-xl mt-8 lg:mt-0">
                  <AdvancedFuelTank />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Fix the delivery tracking section */}
        <section className="w-full py-12 sm:py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/10" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-16">
                <div className="space-y-2 max-w-3xl">
                  <Badge className="mb-4" variant="outline">
                    Get Started
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Ready to Power Your Business?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    Contact us today to discuss your fuel requirements and how we can support your operations.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="mx-auto max-w-lg">
              <FadeIn delay={0.2}>
                <GlassMorphism className="p-4 sm:p-8">
                  <div className="grid gap-4 sm:gap-6">
                    <div className="group relative overflow-hidden rounded-xl bg-background p-1 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="relative z-10 flex items-center space-x-4 rounded-lg border p-4 sm:p-6 transition-transform group-hover:-translate-y-1">
                        <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Call Us</h3>
                          <p className="text-sm sm:text-base text-muted-foreground">+260 123 456 789</p>
                        </div>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-background p-1 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="relative z-10 flex items-center space-x-4 rounded-lg border p-4 sm:p-6 transition-transform group-hover:-translate-y-1">
                        <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Email Us</h3>
                          <p className="text-sm sm:text-base text-muted-foreground">info@dousuepetroleum.com</p>
                        </div>
                      </div>
                    </div>

                    <LiquidButton asChild size="lg" className="w-full group">
                      <Link href="/contact">
                        Contact Us Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </LiquidButton>
                  </div>
                </GlassMorphism>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Chatbot Assistant */}
      <ChatbotAssistant />
    </div>
  )
}

export default Home

