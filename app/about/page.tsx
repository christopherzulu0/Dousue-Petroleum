"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Calendar,
  MapPin,
  Users,
  Award,
  TrendingUp,
  Fuel,
  Shield,
  Truck,
  Globe,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Play,
  X,
  ExternalLink,
  ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/fade-in"
import { CountUp } from "@/components/count-up"
import { ParallaxImage } from "@/components/parallax-image"
import { GlassMorphism } from "@/components/glass-morphism"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { LiquidButton } from "@/components/liquid-button"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeValue, setActiveValue] = useState(0)
  const [progressValue, setProgressValue] = useState(13)
  const timelineRef = useRef(null)
  const statsRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true })

  // Parallax effect for hero section
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  // Progress animation
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 500)
    return () => clearTimeout(timer)
  }, [])

  // Core values with icons and descriptions
  const coreValues = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      name: "Reliability",
      description: "We deliver on our promises, ensuring consistent service that our clients can depend on.",
      stats: "99.8% on-time delivery rate",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      name: "Excellence",
      description: "We strive for the highest standards in every aspect of our operations.",
      stats: "ISO 9001:2015 certified",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      name: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices.",
      stats: "Zero compliance violations",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      name: "Innovation",
      description: "We continuously seek better ways to serve our clients and improve our operations.",
      stats: "12 industry-first solutions",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      name: "Sustainability",
      description: "We are committed to responsible practices that protect our environment and communities.",
      stats: "15% carbon footprint reduction",
    },
  ]

  // Timeline animation
  const timelineItems = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Dousue Petroleum was established in Lusaka, Zambia with a vision to transform fuel distribution in the region.",
      icon: <Fuel className="h-5 w-5 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2012",
      title: "Expansion to Congo",
      description: "Opened our first international office in Congo, extending our services across borders.",
      icon: <Globe className="h-5 w-5 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2015",
      title: "Fleet Expansion",
      description: "Expanded our delivery fleet to 50 trucks, enhancing our capacity to serve more clients.",
      icon: <Truck className="h-5 w-5 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2017",
      title: "Storage Facility",
      description: "Inaugurated our state-of-the-art storage facility with a capacity of 5 million liters.",
      icon: <Fuel className="h-5 w-5 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our digital tracking system and customer portal for real-time delivery monitoring.",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Introduced our eco-friendly practices and carbon offset program for a greener future.",
      icon: <Globe className="h-5 w-5 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Team members data with enhanced information
  const teamMembers = [
    {
      name: "John Dousue",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Founded Dousue Petroleum with a vision to transform fuel distribution across Zambia and Congo.",
      extendedBio:
        "With over 20 years of experience in the petroleum industry, John identified critical gaps in the market and established Dousue Petroleum to address them. His leadership has driven the company's growth from a small local operation to a regional leader.",
      education: "MBA, Stanford University | BSc Petroleum Engineering, University of Cape Town",
      achievements: ["Ernst & Young Entrepreneur of the Year 2018", "Zambia Business Leader Award 2020"],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "john@dousuepetroleum.com",
      },
    },
    {
      name: "Sarah Mwanza",
      position: "Chief Operations Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Oversees all operational aspects with 15+ years of experience in the petroleum industry.",
      extendedBio:
        "Sarah joined Dousue Petroleum in 2012 after a successful career at Shell. She has been instrumental in optimizing our logistics operations and implementing quality control systems that have set new standards in the industry.",
      education: "MSc Operations Management, London Business School | BEng Chemical Engineering, University of Zambia",
      achievements: ["Women in Energy Excellence Award 2019", "Operations Innovation Award 2021"],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@dousuepetroleum.com",
      },
    },
    {
      name: "Michael Banda",
      position: "Finance Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Manages financial strategy and growth with expertise in international finance.",
      extendedBio:
        "Michael brings over 18 years of financial expertise to Dousue Petroleum. His strategic financial planning has enabled the company's rapid expansion while maintaining strong financial health and attracting key investors.",
      education: "CFA | MBA Finance, INSEAD | BCom Accounting, University of South Africa",
      achievements: ["CFO of the Year 2022 - Zambia", "Financial Excellence Award 2020"],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "michael@dousuepetroleum.com",
      },
    },
    {
      name: "Lisa Tembo",
      position: "Logistics Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Coordinates our fleet operations and ensures timely delivery to all our clients.",
      extendedBio:
        "Lisa has revolutionized our logistics operations with her innovative approach to route optimization and fleet management. Under her leadership, our on-time delivery rate has reached an industry-leading 99.8%.",
      education: "MSc Supply Chain Management, MIT | BSc Logistics, University of Zambia",
      achievements: ["Supply Chain Innovator Award 2021", "Logistics Professional of the Year 2019"],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@dousuepetroleum.com",
      },
    },
    {
      name: "David Mutale",
      position: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leads our technical team with innovative solutions for fuel storage and distribution.",
      extendedBio:
        "David's engineering expertise has been crucial in developing our state-of-the-art storage facilities and distribution systems. His focus on safety and efficiency has set new benchmarks in the industry.",
      education:
        "PhD Petroleum Engineering, Imperial College London | MEng Mechanical Engineering, University of Cape Town",
      achievements: ["Technical Innovation Award 2020", "Safety Excellence Recognition 2022"],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "david@dousuepetroleum.com",
      },
    },
    {
      name: "Grace Phiri",
      position: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensures exceptional service and maintains strong relationships with our clients.",
      extendedBio:
        "Grace has built our customer service department from the ground up, implementing systems and training programs that have resulted in our industry-leading customer satisfaction ratings.",
      education: "MBA Marketing, Harvard Business School | BA Communications, University of Zambia",
      achievements: ["Customer Service Excellence Award 2021", "CRM Innovator of the Year 2020"],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "grace@dousuepetroleum.com",
      },
    },
  ]

  // Testimonials data with enhanced information
  const testimonials = [
    {
      quote:
        "Dousue Petroleum has been our trusted fuel partner for over 5 years. Their reliability and quality service have been instrumental to our mining operations.",
      author: "James Mulenga",
      position: "Operations Director",
      company: "Zambia Mining Corporation",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      relationship: "Client since 2018",
    },
    {
      quote:
        "The real-time tracking system has revolutionized how we manage our fuel supplies. We always know exactly when to expect our deliveries.",
      author: "Christine Kabwe",
      position: "Logistics Manager",
      company: "Congo Transport Ltd",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      relationship: "Client since 2020",
    },
    {
      quote:
        "Their emergency response team saved our operations during a critical power outage. The fuel was delivered within hours, preventing significant losses.",
      author: "Robert Chanda",
      position: "Facilities Director",
      company: "Lusaka General Hospital",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      relationship: "Client since 2019",
    },
    {
      quote:
        "As a logistics company, we need reliable fuel partners. Dousue Petroleum has never disappointed us with their consistent quality and service.",
      author: "Maria Nkonde",
      position: "CEO",
      company: "Express Logistics",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      relationship: "Client since 2017",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve all major cities and regions in Zambia and Congo, with plans to expand to neighboring countries in the near future. Our strategic locations allow us to deliver fuel efficiently throughout our service area.",
    },
    {
      question: "What types of fuel do you supply?",
      answer:
        "We supply a wide range of petroleum products including diesel, petrol, kerosene, and specialized industrial fuels. We also offer premium fuel options with performance-enhancing additives for specific applications.",
    },
    {
      question: "How quickly can you deliver fuel?",
      answer:
        "Our standard delivery time is 24-48 hours from order confirmation. We also offer express delivery services for urgent needs, with delivery times as short as 4-6 hours depending on your location.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer competitive volume-based pricing for bulk orders. We also provide customized pricing plans for long-term contracts and regular delivery schedules. Contact our sales team for a personalized quote.",
    },
    {
      question: "How do you ensure fuel quality?",
      answer:
        "We maintain strict quality control measures throughout our supply chain. All our fuel undergoes rigorous testing at multiple stages to ensure it meets or exceeds industry standards and specifications.",
    },
  ]

  // Awards and certifications
  const awards = [
    {
      year: "2023",
      title: "Sustainability Excellence Award",
      organization: "African Energy Council",
    },
    {
      year: "2022",
      title: "Best Logistics Provider",
      organization: "Zambia Business Awards",
    },
    {
      year: "2021",
      title: "Customer Service Excellence",
      organization: "Congo Business Association",
    },
    {
      year: "2020",
      title: "Innovation in Fuel Distribution",
      organization: "African Petroleum Institute",
    },
    {
      year: "2019",
      title: "Safety Standards Excellence",
      organization: "International Safety Council",
    },
  ]

  // Certifications
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      year: "2018",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      year: "2019",
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety",
      year: "2020",
    },
    {
      name: "OHSAS 18001",
      description: "Occupational Health and Safety Assessment",
      year: "2017",
    },
  ]

  // Render star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))
  }

  // 3D card effect for team members
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  const cardRefs = useRef(teamMembers.map(() => useRef(null)))

  const handleMouseMoveWrapper = useCallback((e, index) => {
    const cardRef = cardRefs.current[index]
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }, [])

  const handleMouseLeaveWrapper = useCallback((index) => {
    const cardRef = cardRefs.current[index]
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Parallax and Video */}
        <section ref={heroRef} className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Dousue Petroleum Headquarters"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-4" variant="outline">
                    About Us
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl text-white mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Fueling Progress
                    </span>{" "}
                    <br className="md:block hidden" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                      Across Central Africa
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-white/80 mb-8">
                    Since 2010, Dousue Petroleum has been a trusted provider of premium fuel products and reliable
                    delivery services throughout Zambia and Congo.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <LiquidButton asChild size="lg" className="group">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </LiquidButton>

                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 group">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Our Story
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0 bg-black overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=450&width=800"
                          alt="Company Video"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-16 w-16 text-white opacity-70" />
                        </div>
                        <DialogClose className="absolute top-2 right-2 rounded-full p-2 bg-black/50 text-white hover:bg-black/70">
                          <X className="h-4 w-4" />
                        </DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl opacity-70 animate-pulse"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-white">Company Progress</h3>
                      <Badge variant="outline" className="text-white">
                        Est. 2010
                      </Badge>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-white/80">
                          <span>Years in Operation</span>
                          <span className="font-bold text-white">{progressValue >= 100 ? 13 : "..."} years</span>
                        </div>
                        <Progress value={progressValue} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-white/80">
                          <span>Regional Coverage</span>
                          <span className="font-bold text-white">{progressValue >= 100 ? "2 countries" : "..."}</span>
                        </div>
                        <Progress value={progressValue} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-white/80">
                          <span>Client Satisfaction</span>
                          <span className="font-bold text-white">{progressValue >= 100 ? "98%" : "..."}</span>
                        </div>
                        <Progress value={progressValue} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-white/80">
                          <span>Fleet Size Growth</span>
                          <span className="font-bold text-white">{progressValue >= 100 ? "450%" : "..."}</span>
                        </div>
                        <Progress value={progressValue} className="h-2" />
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-sm text-white/80">Currently Expanding</span>
                        </div>
                        <Link href="/careers" className="text-sm text-primary hover:text-primary/80 flex items-center">
                          Join Our Team
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* Company Overview Section with Interactive Tabs */}
        <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-10">
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
                  <TabsTrigger value="mission" className="relative">
                    Mission & Values
                    {activeTab === "mission" && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute -bottom-px left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="approach" className="relative">
                    Our Approach
                    {activeTab === "approach" && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute -bottom-px left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  <FadeIn>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        Our Story
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Dousue Petroleum was founded in 2010 with a clear vision: to transform the fuel distribution
                        landscape in Central Africa by providing reliable, high-quality petroleum products and
                        exceptional service.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        What began as a small operation in Lusaka, Zambia has grown into a regional leader in fuel
                        supply and logistics, serving businesses across Zambia and Congo. Our growth has been driven by
                        our unwavering commitment to reliability, quality, and customer satisfaction.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        Today, with a fleet of modern delivery vehicles, strategic storage facilities, and a dedicated
                        team of professionals, we continue to power progress across the region, one delivery at a time.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 blur-xl opacity-50"></div>
                      <ParallaxImage
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="Dousue Petroleum History"
                        className="rounded-xl shadow-lg relative"
                      />
                      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium">Est. 2010</span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Key Statistics with Animated Counters */}
                <div className="py-12" ref={statsRef}>
                  <FadeIn>
                    <h3 className="text-2xl font-bold tracking-tighter text-center mb-12">Our Impact in Numbers</h3>
                  </FadeIn>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <FadeIn delay={0.1}>
                      <div className="flex flex-col items-center text-center group">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                          <Calendar className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-primary">
                          <CountUp end={13} />+
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground mt-2">Years of Experience</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                      <div className="flex flex-col items-center text-center group">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                          <Truck className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-primary">
                          <CountUp end={75} />+
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground mt-2">Delivery Vehicles</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                      <div className="flex flex-col items-center text-center group">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                          <Users className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-primary">
                          <CountUp end={500} />+
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground mt-2">Business Clients</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                      <div className="flex flex-col items-center text-center group">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                          <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-primary">
                          <CountUp end={12} />
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground mt-2">Locations</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                {/* Awards and Certifications */}
                <div className="grid gap-10 md:grid-cols-2 mt-12">
                  <FadeIn>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2 text-primary" />
                          Awards & Recognition
                        </CardTitle>
                        <CardDescription>Our industry achievements and recognition</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {awards.map((award, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20">
                              <span className="text-xs font-medium text-primary">{award.year}</span>
                            </div>
                            <div>
                              <h4 className="font-medium">{award.title}</h4>
                              <p className="text-sm text-muted-foreground">{award.organization}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Shield className="h-5 w-5 mr-2 text-primary" />
                          Certifications
                        </CardTitle>
                        <CardDescription>Our commitment to international standards</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{cert.name}</h4>
                              <p className="text-sm text-muted-foreground">{cert.description}</p>
                              <p className="text-xs text-muted-foreground">Certified since {cert.year}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
              </TabsContent>

              <TabsContent value="mission" className="space-y-8">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  <FadeIn>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        Our Mission
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        To provide reliable, high-quality fuel solutions that empower businesses and communities across
                        Central Africa to thrive and grow.
                      </p>
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mt-8">
                        Our Vision
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        To be the most trusted fuel provider in Central and Southern Africa, known for excellence,
                        innovation, and commitment to sustainable development.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 blur-xl opacity-50"></div>
                      <GlassMorphism className="p-8 relative">
                        <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>

                        <div className="space-y-6">
                          {coreValues.map((value, index) => (
                            <motion.div
                              key={index}
                              className={`flex items-start space-x-4 p-3 rounded-lg transition-all cursor-pointer ${activeValue === index ? "bg-primary/10 border border-primary/20" : "hover:bg-primary/5"}`}
                              onClick={() => setActiveValue(index)}
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                {value.icon}
                              </div>
                              <div>
                                <h4 className="text-xl font-semibold">{value.name}</h4>
                                <p className="text-muted-foreground">{value.description}</p>
                                {activeValue === index && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-2 pt-2 border-t border-primary/20"
                                  >
                                    <p className="text-sm font-medium text-primary">{value.stats}</p>
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </GlassMorphism>
                    </div>
                  </FadeIn>
                </div>
              </TabsContent>

              <TabsContent value="approach" className="space-y-8">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  <FadeIn>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        Our Approach
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        At Dousue Petroleum, we take a comprehensive approach to fuel supply and distribution, focusing
                        on reliability, quality, and customer satisfaction at every step.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        We understand that fuel is a critical resource for our clients' operations, which is why we've
                        developed systems and processes that ensure consistent, timely delivery and exceptional service.
                      </p>

                      <div className="mt-8">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium">Quality Assurance</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground mb-4">
                                Our rigorous quality control process ensures that all fuel products meet or exceed
                                industry standards:
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Laboratory testing at multiple stages of the supply chain</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Regular equipment calibration and maintenance</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Certified quality management system (ISO 9001:2015)</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium">Logistics Excellence</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground mb-4">
                                Our advanced logistics system ensures timely and efficient delivery:
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>GPS-tracked fleet with real-time monitoring</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>AI-powered route optimization</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Automated scheduling and dispatch system</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium">
                              Customer-Centric Service
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground mb-4">
                                We put our customers at the center of everything we do:
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Dedicated account managers for personalized service</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>24/7 customer support for urgent needs</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Regular client satisfaction surveys and feedback loops</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-medium">
                              Sustainability Commitment
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground mb-4">
                                Our environmental responsibility initiatives include:
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Carbon offset programs for our operations</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Fuel-efficient fleet and eco-driving training</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                  <span>Investment in renewable energy research</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-primary/5 border-primary/20 group hover:shadow-md transition-all hover:-translate-y-1">
                        <CardHeader className="pb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Fuel className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="mt-2">Quality Assurance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Rigorous testing and monitoring to ensure all our products meet the highest standards.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-primary/5 border-primary/20 group hover:shadow-md transition-all hover:-translate-y-1">
                        <CardHeader className="pb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Truck className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="mt-2">Efficient Logistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Advanced route planning and GPS tracking for timely and efficient deliveries.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-primary/5 border-primary/20 group hover:shadow-md transition-all hover:-translate-y-1">
                        <CardHeader className="pb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="mt-2">Customer Focus</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Tailored solutions and responsive service to meet each client's unique needs.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-primary/5 border-primary/20 group hover:shadow-md transition-all hover:-translate-y-1">
                        <CardHeader className="pb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <TrendingUp className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="mt-2">Continuous Improvement</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Ongoing investment in technology and training to enhance our capabilities.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </FadeIn>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Interactive Timeline Section with Enhanced Visuals */}
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

          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <Badge className="mb-4" variant="outline">
                    Our Journey
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Milestones & Achievements
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Key moments in our history that have shaped who we are today
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Enhanced Interactive Timeline */}
            <div ref={timelineRef} className="relative mx-auto max-w-5xl">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10"></div>

              <div className="space-y-12 md:space-y-24">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline node */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10 top-0 md:top-6">
                      <div className="relative">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-20">
                          {item.icon}
                        </div>
                        <div className="absolute -inset-1 rounded-full bg-primary/20 animate-pulse blur-sm"></div>
                      </div>
                    </div>

                    {/* Mobile layout (stacked) */}
                    <div className="md:hidden relative pl-12 ml-auto mr-4 mb-16">
                      {/* Vertical timeline line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20"></div>

                      {/* Horizontal connector line */}
                      <div className="absolute left-0 top-4 w-8 h-[2px] bg-primary/20"></div>

                      {/* Content card with background that hides the vertical line */}
                      <div className="relative z-10 bg-background">
                        <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all group w-full">
                          <CardHeader className="pb-2">
                            <Badge className="w-fit mb-2 group-hover:bg-primary/90 transition-colors">
                              {item.year}
                            </Badge>
                            <CardTitle>{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                            <div className="mt-4 overflow-hidden rounded-lg">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Desktop layout (alternating) */}
                    <div className="hidden md:flex items-center justify-between">
                      <div className={`w-5/12 ${index % 2 === 1 ? "order-1" : "order-none"}`}>
                        {index % 2 === 0 && (
                          <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all group">
                            <CardHeader className="pb-2">
                              <Badge className="w-fit mb-2 group-hover:bg-primary/90 transition-colors">
                                {item.year}
                              </Badge>
                              <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">{item.description}</p>
                              <div className="mt-4 overflow-hidden rounded-lg">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title}
                                  width={300}
                                  height={200}
                                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>

                      <div className="w-5/12">
                        {index % 2 === 1 && (
                          <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all group">
                            <CardHeader className="pb-2">
                              <Badge className="w-fit mb-2 group-hover:bg-primary/90 transition-colors">
                                {item.year}
                              </Badge>
                              <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">{item.description}</p>
                              <div className="mt-4 overflow-hidden rounded-lg">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title}
                                  width={300}
                                  height={200}
                                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with 3D Cards and Modal Profiles */}
        <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <Badge className="mb-4" variant="outline">
                    Our People
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Meet Our Leadership Team
                  </h2>
                  <p className="text-xl text-muted-foreground">The experienced professionals guiding our company</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => {
                const cardRef = useRef(null)

                const handleMouseMoveWrapper = (e) => {
                  if (!cardRef.current) return

                  const card = cardRef.current
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top

                  const centerX = rect.width / 2
                  const centerY = rect.height / 2

                  const rotateX = (y - centerY) / 10
                  const rotateY = (centerX - x) / 10

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                }

                const handleMouseLeaveWrapper = () => {
                  if (!cardRef.current) return
                  cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                }

                return (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div
                      ref={cardRef}
                      className="group relative overflow-hidden rounded-xl transition-all duration-300 transform-gpu"
                      onMouseMove={(e) => handleMouseMoveWrapper(e)}
                      onMouseLeave={() => handleMouseLeaveWrapper()}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ transform: "translateZ(20px)" }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                      <div
                        className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <div className="rounded-lg bg-background/80 backdrop-blur-sm p-4">
                          <h3 className="text-lg font-bold">{member.name}</h3>
                          <p className="text-sm text-primary">{member.position}</p>
                          <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>

                          <div className="flex gap-2 mt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedTeamMember(member)}
                              className="text-xs"
                            >
                              View Profile
                            </Button>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="h-4 w-4"
                                    >
                                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                      <rect width="4" height="12" x="2" y="9" />
                                      <circle cx="4" cy="4" r="2" />
                                    </svg>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>LinkedIn</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild variant="outline" className="group">
                <Link href="/careers">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Team Member Profile Modal */}
            <Dialog open={selectedTeamMember !== null} onOpenChange={(open) => !open && setSelectedTeamMember(null)}>
              <DialogContent className="sm:max-w-[600px]">
                {selectedTeamMember && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{selectedTeamMember.name}</DialogTitle>
                      <DialogDescription>{selectedTeamMember.position}</DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                      <div className="md:col-span-1">
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={selectedTeamMember.image || "/placeholder.svg"}
                            alt={selectedTeamMember.name}
                            width={200}
                            height={200}
                            className="w-full h-auto object-cover"
                          />
                        </div>

                        <div className="mt-4 space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Connect</h4>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon" asChild>
                              <a
                                href={selectedTeamMember.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                  <rect width="4" height="12" x="2" y="9" />
                                  <circle cx="4" cy="4" r="2" />
                                </svg>
                              </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                              <a
                                href={selectedTeamMember.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                              </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                              <a href={`mailto:${selectedTeamMember.socialLinks.email}`}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <rect width="20" height="16" x="2" y="4" rx="2" />
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Biography</h4>
                          <p className="mt-1">{selectedTeamMember.extendedBio}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Education</h4>
                          <p className="mt-1">{selectedTeamMember.education}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Achievements</h4>
                          <ul className="mt-1 space-y-1">
                            {selectedTeamMember.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <DialogClose>Close</DialogClose>
                      </Button>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <Badge className="mb-4" variant="outline">
                    Client Testimonials
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    What Our Clients Say
                  </h2>
                  <p className="text-xl text-muted-foreground">Hear from businesses that rely on our services</p>
                </div>
              </div>
            </FadeIn>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/10 h-full hover:shadow-lg transition-all">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="mb-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-8 w-8 text-primary/40"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                          </div>
                          <p className="text-lg italic flex-1">{testimonial.quote}</p>

                          <div className="mt-4 flex justify-start">
                            <div className="flex items-center">{renderStars(testimonial.rating)}</div>
                          </div>

                          <div className="flex items-center mt-6">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage src={testimonial.image} alt={testimonial.author} />
                              <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                              <p className="text-xs text-primary mt-1">{testimonial.relationship}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative mr-2" />
                <CarouselNext className="relative ml-2" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Enhanced Map Section with Interactive Elements */}
        <section className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <Badge className="mb-4" variant="outline">
                    Our Presence
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Serving Central Africa
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    With strategic locations across Zambia and Congo, we're positioned to serve businesses throughout
                    the region with efficiency and reliability.
                  </p>

                  <div className="mt-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Headquarters - Lusaka, Zambia</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              Our main headquarters houses our administrative offices, central dispatch, and primary
                              storage facility.
                            </p>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>123 Business Park, Industrial Area, Lusaka</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 text-primary"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                              <span>+260 123 456 789</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2" asChild>
                              <Link href="/contact">
                                Contact HQ
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Regional Office - Lubumbashi, Congo</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              Our Congo regional office manages operations across the DRC, serving mining and industrial
                              clients.
                            </p>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>45 Avenue Business, Lubumbashi</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 text-primary"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                              <span>+243 123 456 789</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2" asChild>
                              <Link href="/contact">
                                Contact Congo Office
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Distribution Centers</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              Our 10 distribution centers are strategically located to ensure efficient delivery
                              throughout our service area.
                            </p>
                            <ul className="mt-2 space-y-1">
                              <li className="flex items-center">
                                <MapPin className="h-4 w-4 text-primary mr-2" />
                                <span>Kitwe, Zambia</span>
                              </li>
                              <li className="flex items-center">
                                <MapPin className="h-4 w-4 text-primary mr-2" />
                                <span>Ndola, Zambia</span>
                              </li>
                              <li className="flex items-center">
                                <MapPin className="h-4 w-4 text-primary mr-2" />
                                <span>Livingstone, Zambia</span>
                              </li>
                              <li className="flex items-center">
                                <MapPin className="h-4 w-4 text-primary mr-2" />
                                <span>Kolwezi, Congo</span>
                              </li>
                              <li className="flex items-center">
                                <MapPin className="h-4 w-4 text-primary mr-2" />
                                <span>And 6 more locations...</span>
                              </li>
                            </ul>
                            <Button variant="outline" size="sm" className="mt-2" asChild>
                              <Link href="/locations">
                                View All Locations
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 blur-xl opacity-50"></div>
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl border">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Map of Dousue Petroleum locations"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Map Markers with Animation */}
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative group cursor-pointer">
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                        <div className="absolute -inset-1 animate-ping rounded-full bg-primary/50"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                          Lusaka HQ
                        </div>
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm rounded p-2 text-xs w-40 text-center">
                          Main headquarters with administrative offices and primary storage facility
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative group cursor-pointer">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <div className="absolute -inset-1 animate-ping rounded-full bg-primary/50"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                          Lubumbashi
                        </div>
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm rounded p-2 text-xs w-40 text-center">
                          Regional office serving Congo and border areas
                        </div>
                      </div>
                    </div>

                    {/* Additional markers */}
                    <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative group cursor-pointer">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                          Kitwe
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative group cursor-pointer">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                          Livingstone
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative group cursor-pointer">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                          Ndola
                        </div>
                      </div>
                    </div>

                    {/* Map Legend */}
                    <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg text-xs">
                      <div className="flex items-center mb-1">
                        <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                        <span>Main Offices</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                        <span>Distribution Centers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <Badge className="mb-4" variant="outline">
                    FAQ
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-muted-foreground">Answers to common questions about our services</p>
                </div>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Don't see your question here?</p>
                <Button asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <FadeIn>
                <Badge className="mb-4" variant="outline">
                  Partner With Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
                  Ready to Experience Reliable Fuel Solutions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of businesses across Zambia and Congo who trust Dousue Petroleum for their fuel needs.
                  Contact us today to discuss how we can support your operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <LiquidButton asChild size="lg" className="group">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </LiquidButton>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

