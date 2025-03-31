"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Filter, ArrowRight, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/fade-in"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Product data
const products = [
  {
    id: 1,
    name: "Bulk Diesel",
    description: "High-quality diesel fuel for industrial and commercial use",
    category: "diesel",
    tags: ["Bulk", "Industrial"],
    image: "/placeholder.svg?height=300&width=400",
    specs: {
      "Sulfur Content": "Ultra Low",
      "Cetane Number": "51+",
      Availability: "In Stock",
    },
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Petrol",
    description: "High-octane petrol for optimal engine performance",
    category: "petrol",
    tags: ["Retail", "Automotive"],
    image: "/placeholder.svg?height=300&width=400",
    specs: {
      "Octane Rating": "95",
      Additives: "Performance Enhancing",
      Availability: "In Stock",
    },
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Engine Oil",
    description: "High-performance lubricant for all engine types",
    category: "lubricants",
    tags: ["Automotive", "Retail"],
    image: "/placeholder.svg?height=300&width=400",
    specs: {
      Grade: "SAE 10W-40",
      Volume: "5L, 20L, 200L",
      Availability: "In Stock",
    },
    inStock: true,
  },
  {
    id: 4,
    name: "Metal Fuel Drums",
    description: "Heavy-duty storage containers for petroleum products",
    category: "containers",
    tags: ["Industrial", "Bulk"],
    image: "/placeholder.svg?height=300&width=400",
    specs: {
      Capacity: "200L",
      Material: "Steel with Anti-Corrosion Coating",
      Availability: "In Stock",
    },
    inStock: true,
  },
  {
    id: 5,
    name: "Performance Fuel Additive",
    description: "Enhances fuel efficiency and engine performance",
    category: "additives",
    tags: ["Retail", "Automotive"],
    image: "/placeholder.svg?height=300&width=400",
    specs: {
      Volume: "1L, 5L",
      "Compatible With": "Diesel, Petrol",
      Availability: "In Stock",
    },
    inStock: true,
  },
  {
    id: 6,
    name: "Fuel Jerricans",
    description: "Portable containers for safe fuel transport and storage",
    category: "containers",
    tags: ["Retail", "Automotive"],
    image: "/placeholder.svg?height=300&width=400",
    specs: {
      Capacity: "5L, 10L, 20L",
      Material: "High-Density Polyethylene",
      Availability: "In Stock",
    },
    inStock: true,
  },
]

// Product detail modal
const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative overflow-hidden rounded-lg bg-muted/30">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Specifications</h4>
              <div className="space-y-1">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm border-b pb-1">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className={value === "In Stock" ? "text-green-600 font-medium" : ""}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1">Request Quote</Button>
              <Button variant="outline">Download Spec Sheet</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const featuredRef = useRef(null)
  const isInView = useInView(featuredRef, { once: true })

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  const handleProductDetail = (product) => {
    setSelectedProduct(product)
    setIsDetailOpen(true)
  }

  // Filter products based on search, tab, and filters
  const filteredProducts = products.filter((product) => {
    // Search query filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Tab filter
    const matchesTab = activeTab === "all" || product.category === activeTab

    // Tag filters
    const matchesTags = activeFilters.length === 0 || activeFilters.some((filter) => product.tags.includes(filter))

    return matchesSearch && matchesTab && matchesTags
  })

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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-muted overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Our Products
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Premium Petroleum Products
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
                  High-quality fuel and related products for all your business needs
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="w-full py-8 md:py-12 bg-background border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium flex items-center">
                  <Filter className="mr-2 h-4 w-4" /> Filters:
                </span>
                {["Bulk", "Retail", "Industrial", "Automotive"].map((filter) => (
                  <Badge
                    key={filter}
                    variant={activeFilters.includes(filter) ? "default" : "outline"}
                    className="cursor-pointer transition-all"
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Product Categories Tabs */}
            <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
              <TabsList className="mb-12 flex flex-wrap justify-center">
                <TabsTrigger value="all" className="relative">
                  All Products
                  <motion.div className="absolute -bottom-px left-0 right-0 h-[2px] bg-primary" layoutId="activeTab" />
                </TabsTrigger>
                <TabsTrigger value="diesel" className="relative">
                  Diesel
                </TabsTrigger>
                <TabsTrigger value="petrol" className="relative">
                  Petrol
                </TabsTrigger>
                <TabsTrigger value="lubricants" className="relative">
                  Lubricants & Oils
                </TabsTrigger>
                <TabsTrigger value="containers" className="relative">
                  Containers
                </TabsTrigger>
                <TabsTrigger value="additives" className="relative">
                  Additives
                </TabsTrigger>
              </TabsList>

              {/* Product Grid */}
              <TabsContent value={activeTab} className="space-y-12">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.div key={product.id} variants={item}>
                        <Card className="group overflow-hidden transition-all hover:shadow-lg h-full">
                          <CardHeader className="p-0">
                            <div className="overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription className="mt-2">{product.description}</CardDescription>
                              </div>
                              <Badge>{product.category}</Badge>
                            </div>
                            <div className="mt-4 space-y-2">
                              {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">{key}:</span>
                                  <span className={value === "In Stock" ? "text-green-600 font-medium" : ""}>
                                    {value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between p-6 pt-0">
                            <Button variant="outline" className="group" onClick={() => handleProductDetail(product)}>
                              <span>View Details</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button>Request Quote</Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center">
                      <div className="mx-auto w-24 h-24 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                        <Search className="h-10 w-10 text-muted-foreground/50" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">No products found</h3>
                      <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
                      <Button
                        onClick={() => {
                          setSearchQuery("")
                          setActiveFilters([])
                          setActiveTab("all")
                        }}
                      >
                        Reset All Filters
                      </Button>
                    </div>
                  )}
                </motion.div>

                {/* Pagination */}
                {filteredProducts.length > 0 && (
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" disabled>
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
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span className="sr-only">Previous</span>
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-medium">
                        1
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        2
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        3
                      </Button>
                      <Button variant="outline" size="icon">
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
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                        <span className="sr-only">Next</span>
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Products Section */}
        <section ref={featuredRef} className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Our most popular petroleum products for various industries
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div
                className={`relative overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md border group ${isInView ? "animate-in fade-in slide-in-from-left-10 duration-700" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Industrial Diesel"
                      width={100}
                      height={100}
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industrial Diesel</h3>
                    <p className="text-muted-foreground mb-4">
                      High-performance diesel fuel specifically formulated for industrial machinery and generators.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Low Sulfur</Badge>
                      <Badge variant="outline">High Cetane</Badge>
                      <Badge variant="outline">Industrial Grade</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`relative overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md border group ${isInView ? "animate-in fade-in slide-in-from-right-10 duration-700 delay-300" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Premium Lubricants"
                      width={100}
                      height={100}
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Lubricants</h3>
                    <p className="text-muted-foreground mb-4">
                      Advanced lubricant formulations for automotive, marine, and industrial applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Synthetic</Badge>
                      <Badge variant="outline">Long-lasting</Badge>
                      <Badge variant="outline">Multi-purpose</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Products Section */}
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
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Customization
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Need Custom Products?</h2>
                  <p className="text-xl text-muted-foreground">
                    We can source specific petroleum products to meet your unique business requirements. Contact our
                    team to discuss your needs.
                  </p>
                  <Button asChild size="lg" className="group">
                    <Link href="/contact">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Custom Products"
                    className="w-full h-auto object-cover rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Product Quality Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Product Quality
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Our Quality Commitment</h2>
                  <p className="text-xl text-muted-foreground">
                    We ensure all our products meet the highest industry standards
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="group relative overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md border">
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-primary/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Quality Testing</h3>
                    <p className="text-muted-foreground">
                      All products undergo rigorous testing to ensure they meet international quality standards.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="group relative overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md border">
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-primary/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Certified Sources</h3>
                    <p className="text-muted-foreground">
                      We source our products only from certified suppliers with proven track records.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="group relative overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md border">
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-primary/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Product Guarantee</h3>
                    <p className="text-muted-foreground">
                      We stand behind our products with a satisfaction guarantee for all customers.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-[700px]">
                  Find answers to common questions about our products
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I determine which fuel is right for my equipment?</AccordionTrigger>
                  <AccordionContent>
                    We recommend consulting your equipment manufacturer's specifications first. Our team can also
                    provide guidance based on your specific needs and usage patterns. Contact us for a personalized
                    recommendation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What delivery options are available for bulk orders?</AccordionTrigger>
                  <AccordionContent>
                    We offer flexible delivery options for bulk orders, including scheduled deliveries, emergency
                    refills, and long-term supply contracts. Our fleet of tankers can deliver to most locations within
                    our service area.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are your products environmentally friendly?</AccordionTrigger>
                  <AccordionContent>
                    We offer a range of products with varying environmental impacts, including biodiesel blends and
                    low-sulfur options. All our products meet or exceed regulatory standards for emissions and
                    environmental protection.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer custom blending services?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide custom blending services for clients with specific requirements. Our
                    state-of-the-art facilities allow us to create tailored fuel solutions that meet your exact
                    specifications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <FadeIn>
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Delivery
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Fast & Reliable Delivery</h2>
                    <p className="text-muted-foreground">
                      Our dedicated fleet ensures timely delivery of all petroleum products to your location.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <TruckIcon className="h-4 w-4 text-primary" />
                        </div>
                        <span>Nationwide delivery network</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <TruckIcon className="h-4 w-4 text-primary" />
                        </div>
                        <span>Scheduled and emergency deliveries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <TruckIcon className="h-4 w-4 text-primary" />
                        </div>
                        <span>Real-time delivery tracking</span>
                      </li>
                    </ul>
                    <Button className="mt-2">View Delivery Areas</Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Delivery Fleet"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} />
    </div>
  )
}

