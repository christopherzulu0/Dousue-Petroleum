"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Briefcase,
  Search,
  CheckCircle,
  ChevronLeft,
  Building,
  Users,
  Coffee,
  Car,
  Clock,
  Phone,
  Mail,
  Filter,
  DollarSign,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

// This would normally come from a database or API
const getLocationData = (locationName) => {
  // Sample location data
  const locations = [
    {
      id: "lusaka",
      name: "Lusaka",
      country: "Zambia",
      address: "123 Independence Avenue, Lusaka",
      description:
        "Our headquarters in Lusaka serves as the main hub for our operations across Zambia. The office houses our executive team, administrative staff, logistics department, and sales team.",
      coordinates: {
        lat: -15.3875,
        lng: 28.3228,
      },
      phone: "+260 123 456 789",
      email: "lusaka@dousuepetroleum.com",
      openingHours: "Monday to Friday, 8:00 AM - 5:00 PM",
      amenities: ["On-site parking", "Cafeteria", "Gym", "Conference facilities"],
      nearbyTransport: ["Bus station (500m)", "Taxi stand (200m)"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      teamSize: 120,
      departments: ["Executive", "Administration", "Logistics", "Sales", "Finance", "HR"],
      jobs: [
        {
          id: "1",
          title: "Logistics Coordinator",
          department: "logistics",
          type: "full-time",
          salary: "$45,000 - $60,000",
          posted: "2 days ago",
        },
        {
          id: "2",
          title: "Safety Officer",
          department: "operations",
          type: "full-time",
          salary: "$55,000 - $70,000",
          posted: "1 week ago",
        },
        {
          id: "3",
          title: "Sales Representative",
          department: "sales",
          type: "full-time",
          salary: "$40,000 - $65,000 + commission",
          posted: "3 days ago",
        },
        {
          id: "5",
          title: "Administrative Assistant",
          department: "admin",
          type: "part-time",
          salary: "$25,000 - $35,000",
          posted: "1 day ago",
        },
        {
          id: "7",
          title: "Dispatch Supervisor",
          department: "logistics",
          type: "full-time",
          salary: "$50,000 - $65,000",
          posted: "5 days ago",
        },
        {
          id: "9",
          title: "Inventory Specialist",
          department: "logistics",
          type: "full-time",
          salary: "$38,000 - $48,000",
          posted: "1 week ago",
        },
        {
          id: "12",
          title: "Training Coordinator",
          department: "hr",
          type: "full-time",
          salary: "$42,000 - $55,000",
          posted: "3 days ago",
        },
      ],
    },
    {
      id: "ndola",
      name: "Ndola",
      country: "Zambia",
      address: "45 Copper Road, Ndola",
      description:
        "Our Ndola office serves the Copperbelt region, focusing on distribution and technical operations. The facility includes both office space and a technical workshop for our fleet maintenance team.",
      coordinates: {
        lat: -12.9687,
        lng: 28.6365,
      },
      phone: "+260 123 456 790",
      email: "ndola@dousuepetroleum.com",
      openingHours: "Monday to Friday, 8:00 AM - 5:00 PM",
      amenities: ["On-site parking", "Break room", "Technical workshop"],
      nearbyTransport: ["Bus station (800m)", "Taxi stand (300m)"],
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
      teamSize: 45,
      departments: ["Operations", "Technical", "Sales", "Administration"],
      jobs: [
        {
          id: "4",
          title: "Fleet Maintenance Technician",
          department: "technical",
          type: "full-time",
          salary: "$38,000 - $52,000",
          posted: "5 days ago",
        },
        {
          id: "10",
          title: "Quality Control Inspector",
          department: "operations",
          type: "full-time",
          salary: "$45,000 - $58,000",
          posted: "2 weeks ago",
        },
        {
          id: "11",
          title: "Regional Sales Manager",
          department: "sales",
          type: "full-time",
          salary: "$60,000 - $80,000 + commission",
          posted: "1 week ago",
        },
      ],
    },
    {
      id: "kitwe",
      name: "Kitwe",
      country: "Zambia",
      address: "78 Mining Boulevard, Kitwe",
      description:
        "Our Kitwe office primarily serves the mining industry in the region, with a focus on specialized fuel products and services for mining operations.",
      coordinates: {
        lat: -12.8016,
        lng: 28.2137,
      },
      phone: "+260 123 456 791",
      email: "kitwe@dousuepetroleum.com",
      openingHours: "Monday to Friday, 8:00 AM - 5:00 PM",
      amenities: ["On-site parking", "Break room"],
      nearbyTransport: ["Bus station (600m)"],
      images: ["/placeholder.svg?height=400&width=600"],
      teamSize: 25,
      departments: ["Sales", "Technical", "Administration"],
      jobs: [
        {
          id: "6",
          title: "Petroleum Engineer Intern",
          department: "technical",
          type: "internship",
          salary: "Competitive stipend",
          posted: "2 weeks ago",
        },
        {
          id: "13",
          title: "Mining Industry Specialist",
          department: "sales",
          type: "full-time",
          salary: "$55,000 - $70,000",
          posted: "3 days ago",
        },
      ],
    },
    {
      id: "lubumbashi",
      name: "Lubumbashi",
      country: "Congo",
      address: "90 Central Avenue, Lubumbashi",
      description:
        "Our Lubumbashi office is our main hub for operations in the Democratic Republic of Congo, focusing on cross-border logistics and distribution.",
      coordinates: {
        lat: -11.6642,
        lng: 27.4822,
      },
      phone: "+243 123 456 789",
      email: "lubumbashi@dousuepetroleum.com",
      openingHours: "Monday to Friday, 8:00 AM - 5:00 PM",
      amenities: ["On-site parking", "Break room", "Security services"],
      nearbyTransport: ["Bus station (1km)", "Taxi stand (200m)"],
      images: ["/placeholder.svg?height=400&width=600"],
      teamSize: 30,
      departments: ["Logistics", "Sales", "Administration", "Operations"],
      jobs: [
        {
          id: "14",
          title: "Cross-Border Logistics Specialist",
          department: "logistics",
          type: "full-time",
          salary: "$48,000 - $62,000",
          posted: "1 week ago",
        },
        {
          id: "15",
          title: "Operations Manager",
          department: "operations",
          type: "full-time",
          salary: "$65,000 - $85,000",
          posted: "2 weeks ago",
        },
        {
          id: "16",
          title: "Administrative Coordinator",
          department: "admin",
          type: "full-time",
          salary: "$35,000 - $45,000",
          posted: "3 days ago",
        },
        {
          id: "17",
          title: "Sales Representative",
          department: "sales",
          type: "full-time",
          salary: "$40,000 - $60,000 + commission",
          posted: "5 days ago",
        },
      ],
    },
  ]

  return locations.find((location) => location.id === locationName.toLowerCase()) || null
}

export default function LocationJobsPage({ params }) {
  const location = getLocationData(params.location)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  if (!location) {
    return (
      <div className="container px-4 md:px-6 py-24 mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
        <p className="text-muted-foreground mb-8">The location you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/careers">Back to Careers</Link>
        </Button>
      </div>
    )
  }

  // Filter jobs based on search and filters
  const filteredJobs = location.jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
    const matchesType = selectedType === "all" || job.type === selectedType

    return matchesSearch && matchesDepartment && matchesType
  })

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={location.images[0] || "/placeholder.svg"}
              alt={`${location.name} office`}
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6 mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-8 bg-white/10 hover:bg-white/20 text-white">
              <Link href="/careers" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Locations
              </Link>
            </Button>

            <div className="max-w-3xl">
              <Badge className="mb-4 bg-primary hover:bg-primary/90">{location.country}</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white">
                {location.name} Office
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">{location.description}</p>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>{location.teamSize} Team Members</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  <span>{location.jobs.length} Open Positions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">About Our {location.name} Office</h2>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <p className="text-muted-foreground">{location.description}</p>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Departments</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {location.departments.map((department, index) => (
                              <Badge key={index} variant="outline" className="capitalize">
                                {department}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{location.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{location.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{location.openingHours}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-lg overflow-hidden h-[300px] relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-muted">
                        <p className="text-muted-foreground">Map of {location.name} Office</p>
                        {/* In a real implementation, this would be a Google Maps or similar map component */}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Office Amenities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {location.amenities.map((amenity, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                <span>{amenity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Transportation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {location.nearbyTransport.map((transport, index) => (
                              <li key={index} className="flex items-center">
                                <Car className="h-4 w-4 text-primary mr-2" />
                                <span>{transport}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Nearby</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                              <Coffee className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm">Cafes</span>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                              <Building className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-sm">Restaurants</span>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
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
                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                              </svg>
                            </div>
                            <span className="text-sm">Banks</span>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
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
                                <path d="m7 11 2-2-2-2" />
                                <path d="M11 13h4" />
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              </svg>
                            </div>
                            <span className="text-sm">Shopping</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="gallery" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {location.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${location.name} office image ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Office Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">
                      {location.name}, {location.country}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Address:</span>
                    <span className="font-medium">{location.address}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size:</span>
                    <span className="font-medium">{location.teamSize} employees</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Departments:</span>
                    <span className="font-medium">{location.departments.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Positions:</span>
                    <span className="font-medium">{location.jobs.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hours:</span>
                    <span className="font-medium">{location.openingHours}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="#open-positions">View Open Positions</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-2">Open Positions in {location.name}</h2>
                <p className="text-muted-foreground">Find your perfect role in our {location.name} office</p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-[300px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search positions..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <Label htmlFor="department">Department</Label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {location.departments.map((department, index) => (
                      <SelectItem key={index} value={department.toLowerCase()}>
                        {department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Job Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" /> {location.name}, {location.country}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={
                            job.type === "full-time" ? "default" : job.type === "part-time" ? "secondary" : "outline"
                          }
                        >
                          {job.type === "full-time"
                            ? "Full-time"
                            : job.type === "part-time"
                              ? "Part-time"
                              : "Internship"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="capitalize">{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button variant="outline" asChild>
                        <Link href={`/careers/position/${job.id}`}>View Details</Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/careers/position/${job.id}#apply`}>Apply Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12 bg-background rounded-lg border">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No positions found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedDepartment("all")
                      setSelectedType("all")
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Other Locations</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["lusaka", "ndola", "kitwe", "lubumbashi"]
                .filter((loc) => loc !== location.id)
                .map((locationId) => {
                  const otherLocation = getLocationData(locationId)
                  return (
                    <Card key={locationId} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 relative">
                        <Image
                          src={otherLocation.images[0] || "/placeholder.svg"}
                          alt={`${otherLocation.name} office`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>
                          {otherLocation.name}, {otherLocation.country}
                        </CardTitle>
                        <CardDescription>{otherLocation.jobs.length} Open Positions</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" asChild className="w-full">
                          <Link href={`/careers/location/${otherLocation.id}`}>View Location</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="rounded-xl bg-primary text-primary-foreground p-6 md:p-10">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See the Right Position?</h2>
                  <p className="mb-6">
                    We're always looking for talented individuals to join our team. Submit your resume for future
                    opportunities at our {location.name} office.
                  </p>
                  <Button variant="secondary" asChild>
                    <Link href="/careers#apply-now">Submit Your Resume</Link>
                  </Button>
                </div>
                <div className="hidden lg:block relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Team collaboration"
                    width={500}
                    height={300}
                    className="rounded-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

