"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Fuel,
  Warehouse,
  TruckIcon,
  Settings,
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  X,
  Star,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Users,
  BarChart3,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { GlassMorphism } from "@/components/glass-morphism"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FuelCalculator } from "@/components/fuel-calculator"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [isInView, setIsInView] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const services = [
    {
      id: 1,
      title: "Fuel Supply & Distribution",
      icon: <Fuel className="h-8 w-8 text-primary" />,
      description:
        "We provide high-quality diesel, petrol, and bulk fuel delivery services to businesses of all sizes. Our fuel meets all industry standards and regulations.",
      features: ["Diesel (bulk and retail)", "Petrol (bulk and retail)", "Scheduled deliveries", "Quality assurance"],
      category: "supply",
      cta: "Request Quote",
      link: "/contact",
      stats: { clients: 250, deliveries: "5,000+", satisfaction: "98%" },
    },
    {
      id: 2,
      title: "Storage Solutions",
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      description:
        "Our in-house tank storage facilities ensure your fuel is safely stored and readily available when you need it. We offer various storage options to meet your specific requirements.",
      features: ["In-house tank storage", "Secure facilities", "Regular maintenance", "Inventory management"],
      category: "storage",
      cta: "Learn More",
      link: "/contact",
      stats: { capacity: "500,000L", facilities: 12, security: "24/7" },
    },
    {
      id: 3,
      title: "Logistics & Delivery",
      icon: <TruckIcon className="h-8 w-8 text-primary" />,
      description:
        "Our timely, GPS-tracked fleet ensures your fuel arrives when you need it. We prioritize efficiency and reliability in all our delivery operations.",
      features: ["GPS-tracked fleet", "Scheduled deliveries", "Real-time updates", "Trained drivers"],
      category: "logistics",
      cta: "Schedule Delivery",
      link: "/contact",
      stats: { trucks: 50, coverage: "Nationwide", onTime: "99.5%" },
    },
    {
      id: 4,
      title: "Custom Fuel Management",
      icon: <Settings className="h-8 w-8 text-primary" />,
      description:
        "Tailored solutions for mining and industrial clients. We understand the unique fuel requirements of different industries and provide customized services to meet those needs.",
      features: [
        "Mining sector solutions",
        "Industrial client services",
        "Consumption monitoring",
        "Efficiency optimization",
      ],
      category: "management",
      cta: "Discuss Your Needs",
      link: "/contact",
      stats: { industries: 8, savings: "15-20%", clients: 75 },
    },
    {
      id: 5,
      title: "Emergency Fuel Response",
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      description:
        "Rapid delivery in critical situations to keep your operations running. Our emergency response team is available 24/7 to address urgent fuel needs.",
      features: [
        "24/7 emergency service",
        "Rapid response times",
        "Priority scheduling",
        "Critical situation handling",
      ],
      category: "emergency",
      cta: "Emergency Contact",
      link: "/emergency",
      stats: { responseTime: "< 2 hours", availability: "24/7/365", successRate: "100%" },
    },
    {
      id: 6,
      title: "Fuel Quality Testing",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      description:
        "Comprehensive testing services to ensure your fuel meets all quality standards and is free from contaminants that could damage your equipment.",
      features: ["Contaminant testing", "Quality certification", "Regular sampling", "Detailed reports"],
      category: "quality",
      cta: "Schedule Testing",
      link: "/contact",
      stats: { tests: "1,000+", standards: 15, accuracy: "99.9%" },
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Johnson Mining Co.",
      quote:
        "Dousue Petroleum has transformed our fuel management process. Their custom solutions have saved us both time and money.",
      rating: 5,
      service: "Custom Fuel Management",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Chen Logistics",
      quote:
        "The emergency response team at Dousue saved our operations during a critical power outage. Their rapid delivery kept our generators running.",
      rating: 5,
      service: "Emergency Fuel Response",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Emma Williams",
      company: "Williams Construction",
      quote:
        "We've been using Dousue's storage solutions for over 3 years. Their facilities are secure, well-maintained, and their inventory management is flawless.",
      rating: 4,
      service: "Storage Solutions",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const faqs = [
    {
      question: "What types of fuel do you supply?",
      answer:
        "We supply a wide range of fuels including diesel, petrol, and specialized industrial fuels. All our fuels meet or exceed industry standards and regulations.",
    },
    {
      question: "How quickly can you deliver emergency fuel?",
      answer:
        "Our emergency response team is available 24/7 and can typically deliver fuel within 2 hours of your request, depending on your location and the volume required.",
    },
    {
      question: "Do you offer fuel storage solutions for small businesses?",
      answer:
        "Yes, we offer scalable storage solutions suitable for businesses of all sizes. Our team can assess your needs and recommend the most appropriate storage option.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We provide nationwide coverage with particular focus on major industrial and mining regions. Contact us to confirm service availability in your specific location.",
    },
    {
      question: "How do you ensure fuel quality?",
      answer:
        "We conduct regular testing and quality assurance checks on all our fuel supplies. Our fuel quality testing service also provides detailed reports and certifications.",
    },
    {
      question: "Can you help optimize our fuel consumption?",
      answer:
        "Yes, our Custom Fuel Management service includes consumption monitoring and efficiency optimization to help reduce your fuel costs and environmental impact.",
    },
  ]

  const locations = [
    { name: "Sydney Headquarters", lat: -33.8688, lng: 151.2093 },
    { name: "Melbourne Distribution Center", lat: -37.8136, lng: 144.9631 },
    { name: "Brisbane Operations", lat: -27.4698, lng: 153.0251 },
    { name: "Perth Facility", lat: -31.9505, lng: 115.8605 },
    { name: "Adelaide Storage", lat: -34.9285, lng: 138.6007 },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  const handleRequestQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setShowQuoteForm(true)

    // Scroll to the form
    setTimeout(() => {
      const element = document.getElementById("quote-form")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Fuel Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
          </div>

          <motion.div
            className="container relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-6"
            style={{
              opacity: heroOpacity,
              scale: heroScale,
              y: heroY,
            }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 text-sm" variant="outline">
                Premium Services
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4">
                Fueling Your <span className="text-primary">Success</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-white/80 mb-8">
                Comprehensive fuel solutions tailored to your business needs with industry-leading quality and
                reliability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Services Filter Tabs */}
        <section className="w-full py-12 md:py-16 border-b">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Our Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Service Portfolio</h2>
                <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
                  Discover our range of specialized fuel services designed to meet your specific business requirements
                </p>
              </div>
            </FadeIn>

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full max-w-3xl">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="supply">Supply</TabsTrigger>
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                  <TabsTrigger value="logistics">Logistics</TabsTrigger>
                  <TabsTrigger value="management">Management</TabsTrigger>
                  <TabsTrigger value="emergency">Emergency</TabsTrigger>
                  <TabsTrigger value="quality">Quality</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key={activeTab} // Force re-render animation when tab changes
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={item}
                      className="group relative overflow-hidden rounded-xl border bg-background p-1 transition-all hover:shadow-lg"
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <div className="relative z-10 flex flex-col items-start space-y-4 rounded-lg border p-6 transition-transform group-hover:-translate-y-1">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                          {service.icon}
                        </div>

                        <div className="flex items-center gap-2">
                          <h2 className="text-2xl font-bold">{service.title}</h2>
                          {service.category === "emergency" && (
                            <Badge variant="destructive" className="ml-2">
                              24/7
                            </Badge>
                          )}
                        </div>

                        <p className="text-muted-foreground">{service.description}</p>

                        <ul className="space-y-2 text-muted-foreground">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Service Stats */}
                        <div className="w-full grid grid-cols-3 gap-2 py-2 mt-2 border-t border-b">
                          {Object.entries(service.stats).map(([key, value], idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-primary font-bold">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 w-full">
                          <Button
                            variant="outline"
                            className="group flex-1"
                            onClick={() => handleRequestQuote(service.title)}
                          >
                            {service.cta}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>

                          <Button asChild variant="default" size="icon">
                            <Link href={service.link}>
                              <Phone className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Animated corner effect */}
                      <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden">
                        <div className="absolute top-0 right-0 h-10 w-10 -translate-y-1/2 translate-x-1/2 rotate-45 bg-primary transform-gpu transition-all duration-300 group-hover:scale-[2.5]"></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
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
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Compare Options
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Service Comparison</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Find the perfect fuel solution for your business needs
                </p>
              </div>
            </FadeIn>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-4 gap-4">
                  {/* Header */}
                  <div className="col-span-1"></div>
                  <div className="col-span-1 text-center font-bold">Standard</div>
                  <div className="col-span-1 text-center font-bold">Premium</div>
                  <div className="col-span-1 text-center font-bold">Enterprise</div>

                  {/* Pricing */}
                  <div className="col-span-1 font-medium">Pricing</div>
                  <div className="col-span-1 text-center">Market Rate</div>
                  <div className="col-span-1 text-center">Custom Quote</div>
                  <div className="col-span-1 text-center">Volume Discount</div>

                  {/* Delivery Time */}
                  <div className="col-span-1 font-medium">Delivery Time</div>
                  <div className="col-span-1 text-center">24-48 hours</div>
                  <div className="col-span-1 text-center">Same Day</div>
                  <div className="col-span-1 text-center">Priority</div>

                  {/* Quality Testing */}
                  <div className="col-span-1 font-medium">Quality Testing</div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>

                  {/* Storage Options */}
                  <div className="col-span-1 font-medium">Storage Options</div>
                  <div className="col-span-1 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>

                  {/* 24/7 Support */}
                  <div className="col-span-1 font-medium">24/7 Support</div>
                  <div className="col-span-1 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>

                  {/* Consumption Analytics */}
                  <div className="col-span-1 font-medium">Consumption Analytics</div>
                  <div className="col-span-1 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </div>
                  <div className="col-span-1 text-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                  </div>

                  {/* Buttons */}
                  <div className="col-span-1"></div>
                  <div className="col-span-1 text-center pt-4">
                    <Button variant="outline" className="w-full">
                      Select
                    </Button>
                  </div>
                  <div className="col-span-1 text-center pt-4">
                    <Button className="w-full">Select</Button>
                  </div>
                  <div className="col-span-1 text-center pt-4">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Calculator Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Cost Estimation
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Advanced Fuel Calculator</h2>
                  <p className="text-xl text-muted-foreground">
                    Get an accurate estimate of your fuel costs based on your specific requirements and delivery
                    location.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Real-time pricing data</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Multiple fuel type options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Delivery distance calculation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Volume-based discounts</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <GlassMorphism className="p-1">
                  <FuelCalculator />
                </GlassMorphism>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Service Locations Map */}
        <section ref={observerRef} className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Map Background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Coverage
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Service Locations</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  We provide nationwide coverage with strategic distribution centers across the country
                </p>
              </div>
            </FadeIn>

            <div className="relative h-[400px] rounded-xl overflow-hidden border">
              <div className="absolute inset-0 bg-muted/50"></div>

              {/* Map Placeholder - In a real implementation, this would be an actual map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-muted-foreground">Interactive Map Loading...</div>
              </div>

              {/* Location Markers */}
              {locations.map((location, index) => {
                // Calculate position based on lat/lng (simplified for demo)
                const left = ((location.lng + 180) / 360) * 100
                const top = ((90 - location.lat) / 180) * 100

                return (
                  <motion.div
                    key={index}
                    className="absolute z-10"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="h-4 w-4 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute -inset-1 border-2 border-primary rounded-full animate-ping opacity-75"></div>
                      </div>

                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-background border rounded-lg p-2 shadow-lg text-sm">
                        <div className="font-medium">{location.name}</div>
                        <div className="text-xs text-muted-foreground">Full Service Available</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {locations.map((location, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>24/7 Operations</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>Contact: (02) 1234-5678</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Client Success
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Hear from businesses that have transformed their fuel management with our services
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Badge variant="outline">{testimonial.service}</Badge>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="group">
                <Link href="/testimonials">
                  View All Testimonials
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Common Questions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Find answers to common questions about our services
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <Button asChild className="group">
                  <Link href="/contact">
                    Contact Our Support Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section id="quote-form" className="w-full py-20 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <AnimatePresence>
              {showQuoteForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <GlassMorphism className="max-w-3xl mx-auto p-8">
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl font-bold mb-2">Request a Quote</h3>
                      <p className="text-muted-foreground">
                        {selectedService ? `For ${selectedService}` : "For our services"}
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Smith" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your Company Ltd." />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(02) 1234-5678" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="service">Service Required</Label>
                        <Select defaultValue={selectedService ? selectedService : ""}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="volume">Estimated Volume (Liters)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select volume range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Less than 1,000L</SelectItem>
                            <SelectItem value="medium">1,000L - 5,000L</SelectItem>
                            <SelectItem value="large">5,000L - 20,000L</SelectItem>
                            <SelectItem value="xlarge">More than 20,000L</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="frequency">Delivery Frequency</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="once">One-time delivery</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="biweekly">Bi-weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="custom">Custom schedule</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="message">Additional Requirements</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide any specific requirements or questions..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                        <Button variant="outline" onClick={() => setShowQuoteForm(false)}>
                          Cancel
                        </Button>
                        <Button className="group">
                          Submit Request
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </GlassMorphism>
                </motion.div>
              )}
            </AnimatePresence>

            {!showQuoteForm && (
              <div className="text-center">
                <FadeIn>
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Get Started
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                    Ready to Transform Your Fuel Management?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground mb-8">
                    Contact us today to discuss your specific requirements and discover how our services can benefit
                    your business.
                  </p>
                  <Button size="lg" className="group" onClick={() => setShowQuoteForm(true)}>
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </FadeIn>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Our Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">How We Work</h2>
                  <p className="text-xl text-muted-foreground">
                    Our streamlined process ensures efficient and reliable fuel delivery
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-10 md:grid-cols-4">
              <FadeIn delay={0.1}>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-border md:hidden"></div>
                  <div className="hidden md:block absolute top-1/2 left-full h-px w-full bg-border -translate-y-1/2"></div>
                  <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Request</h3>
                    <p className="text-muted-foreground">
                      Contact us with your fuel requirements and delivery location
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-border md:hidden"></div>
                  <div className="hidden md:block absolute top-1/2 left-full h-px w-full bg-border -translate-y-1/2"></div>
                  <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quote</h3>
                    <p className="text-muted-foreground">
                      Receive a detailed quote based on your specific requirements
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-border md:hidden"></div>
                  <div className="hidden md:block absolute top-1/2 left-full h-px w-full bg-border -translate-y-1/2"></div>
                  <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <TruckIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Delivery</h3>
                    <p className="text-muted-foreground">
                      Our team delivers your fuel on schedule with real-time tracking
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-border md:hidden"></div>
                  <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Support</h3>
                    <p className="text-muted-foreground">
                      Ongoing support and regular follow-ups to ensure satisfaction
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="flex justify-center mt-16">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started Today
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

