import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Search,
  Globe,
  Building,
  Clock,
  Wifi,
  Coffee,
  Car,
  Users,
  ArrowRight,
  TruckIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Global Network
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Strategically located facilities across Zambia and Congo to serve your fuel needs
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search locations..."
                    className="w-full bg-background pl-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-5 items-start">
              <div className="lg:col-span-2 space-y-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-3">Find Us Across Africa</h2>
                  <p className="text-muted-foreground">
                    Our network of depots, offices, and distribution centers ensures reliable fuel delivery across
                    Zambia and Congo. Use the interactive map to explore our locations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      <SelectItem value="zambia">Zambia</SelectItem>
                      <SelectItem value="congo">Congo</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Facilities</SelectItem>
                      <SelectItem value="office">Offices</SelectItem>
                      <SelectItem value="depot">Depots</SelectItem>
                      <SelectItem value="distribution">Distribution Centers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Lusaka Headquarters</h3>
                        <p className="text-sm text-muted-foreground">Lusaka, Zambia</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Kitwe Depot</h3>
                        <p className="text-sm text-muted-foreground">Kitwe, Zambia</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Lubumbashi Office</h3>
                        <p className="text-sm text-muted-foreground">Lubumbashi, Congo</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Livingstone Branch</h3>
                        <p className="text-sm text-muted-foreground">Livingstone, Zambia</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Kolwezi Depot</h3>
                        <p className="text-sm text-muted-foreground">Kolwezi, Congo</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 rounded-xl overflow-hidden border h-[500px] relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Globe className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                      Our interactive map shows all Dousue Petroleum locations across Zambia and Congo. Click on a
                      marker to view details about that location.
                    </p>
                  </div>
                </div>

                {/* Map Markers (Positioned Absolutely) */}
                <div className="absolute top-1/4 left-1/3 animate-pulse">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
                <div className="absolute top-1/3 left-1/2 animate-pulse">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
                <div className="absolute top-1/2 left-1/4 animate-pulse">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
                <div className="absolute top-2/3 left-2/5 animate-pulse">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
                <div className="absolute top-1/2 left-3/5 animate-pulse">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Locations */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Locations</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our key facilities across the region
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Lusaka HQ Card */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Lusaka Headquarters"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Headquarters</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Lusaka Headquarters</CardTitle>
                  <CardDescription>Main Office & Distribution Center</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">123 Business Park, Industrial Area, Lusaka</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">+260 123 456 789</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">lusaka@dousuepetroleum.com</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Building className="h-3 w-3" /> Office
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <TruckIcon className="h-3 w-3" /> Depot
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> 45+ Staff
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm font-medium">Amenities:</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Parking</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Cafeteria</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Conference Rooms</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>24/7 Security</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/careers/location/lusaka">View Location Details</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Kitwe Depot Card */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Kitwe Depot" fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/80 text-primary-foreground">Depot</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Kitwe Depot</CardTitle>
                  <CardDescription>Copperbelt Distribution Center</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">45 Mining Road, Industrial Zone, Kitwe</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">+260 123 456 790</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">kitwe@dousuepetroleum.com</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <TruckIcon className="h-3 w-3" /> Depot
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> 30+ Staff
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm font-medium">Amenities:</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Parking</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Staff Lounge</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Maintenance Bay</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>24/7 Security</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/careers/location/kitwe">View Location Details</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Lubumbashi Office Card */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Lubumbashi Office"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/80 text-primary-foreground">Regional Office</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Lubumbashi Office</CardTitle>
                  <CardDescription>Congo Operations Center</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">56 Avenue Business, Lubumbashi, Congo</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">+243 123 456 789</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">congo@dousuepetroleum.com</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Building className="h-3 w-3" /> Office
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> 25+ Staff
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm font-medium">Amenities:</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Parking</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Conference Room</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>Staff Lounge</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                        <span>24/7 Security</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/careers/location/lubumbashi">View Location Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" className="gap-2">
                View All Locations
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Lusaka Headquarters</h2>
                <p className="text-muted-foreground">
                  Our flagship location in Lusaka serves as the central hub for all Dousue Petroleum operations across
                  Zambia and Congo. The state-of-the-art facility houses our corporate offices, main distribution
                  center, and training facilities.
                </p>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">123 Business Park, Industrial Area, Lusaka, Zambia</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Contact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1">
                          <p className="text-sm">+260 123 456 789</p>
                          <p className="text-sm">lusaka@dousuepetroleum.com</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Hours</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1">
                          <p className="text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                          <p className="text-sm">Sunday: Closed</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Staff</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1">
                          <p className="text-sm">45+ Employees</p>
                          <p className="text-sm">Administrative, Sales, Logistics, Technical</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">Services Available</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                          <span>Fuel Distribution</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                          <span>Storage Facilities</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                          <span>Administrative Services</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                          <span>Customer Support</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                          <span>Contract Management</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-primary" />
                          <span>Training Facilities</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <Car className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">Parking</h3>
                        <p className="text-xs text-muted-foreground">Secure on-site parking for staff and visitors</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <Coffee className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">Cafeteria</h3>
                        <p className="text-xs text-muted-foreground">Full-service cafeteria with daily meal options</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <Wifi className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">Wi-Fi</h3>
                        <p className="text-xs text-muted-foreground">High-speed internet throughout the facility</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">Conference Rooms</h3>
                        <p className="text-xs text-muted-foreground">Multiple meeting spaces with A/V equipment</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <Clock className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">24/7 Security</h3>
                        <p className="text-xs text-muted-foreground">Round-the-clock security personnel and CCTV</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <Building className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">Training Center</h3>
                        <p className="text-xs text-muted-foreground">Dedicated space for employee development</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                        <TruckIcon className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-medium">Loading Bays</h3>
                        <p className="text-xs text-muted-foreground">Multiple bays for efficient loading/unloading</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 rounded-lg border">
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
                          className="h-8 w-8 text-primary mb-2"
                        >
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                        <h3 className="font-medium">Break Room</h3>
                        <p className="text-xs text-muted-foreground">Comfortable space for staff relaxation</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="relative aspect-square rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Office Exterior"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Reception Area"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Conference Room"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Cafeteria"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Loading Bay"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Office Space"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View More Photos
                    </Button>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild>
                    <Link href="/careers/location/lusaka">View Open Positions</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact This Location</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-[400px] rounded-xl overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Lusaka Headquarters"
                    fill
                    className="object-cover"
                  />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Location Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Building className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Corporate Headquarters</h3>
                        <p className="text-sm text-muted-foreground">
                          Our main administrative center housing executive offices and central operations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <TruckIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Primary Distribution Hub</h3>
                        <p className="text-sm text-muted-foreground">
                          Strategic location with excellent access to major highways and transportation routes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Training Facilities</h3>
                        <p className="text-sm text-muted-foreground">
                          State-of-the-art training center for employee development and safety certification.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Emergency Response Center</h3>
                        <p className="text-sm text-muted-foreground">
                          24/7 emergency response team ready to address any fuel-related incidents.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Current Job Openings</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Opportunities at this location
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-primary-foreground/10 p-3">
                      <h3 className="font-medium text-primary-foreground">Logistics Coordinator</h3>
                      <p className="text-sm text-primary-foreground/80">Full-time · Logistics Department</p>
                      <Button variant="secondary" size="sm" className="mt-2" asChild>
                        <Link href="/careers/position/1">View Position</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg bg-primary-foreground/10 p-3">
                      <h3 className="font-medium text-primary-foreground">Safety Officer</h3>
                      <p className="text-sm text-primary-foreground/80">Full-time · Operations Department</p>
                      <Button variant="secondary" size="sm" className="mt-2" asChild>
                        <Link href="/careers/position/2">View Position</Link>
                      </Button>
                    </div>

                    <div className="rounded-lg bg-primary-foreground/10 p-3">
                      <h3 className="font-medium text-primary-foreground">Sales Representative</h3>
                      <p className="text-sm text-primary-foreground/80">Full-time · Sales Department</p>
                      <Button variant="secondary" size="sm" className="mt-2" asChild>
                        <Link href="/careers/position/3">View Position</Link>
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/careers/location/lusaka">View All Positions</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Life at Our Locations</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from our team members about working at Dousue Petroleum
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <Badge variant="secondary">Lusaka HQ</Badge>
                </div>
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Employee" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">David Mwanza</CardTitle>
                      <CardDescription>Logistics Manager, 5 years</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "Working at the Lusaka headquarters has been an incredible journey. The facilities are top-notch,
                    and the collaborative environment has helped me grow professionally. The training center has been
                    invaluable for developing my team's skills."
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <Badge variant="secondary">Kitwe Depot</Badge>
                </div>
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Employee" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Grace Banda</CardTitle>
                      <CardDescription>Operations Supervisor, 3 years</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "The Kitwe depot is a hub of activity, and I love the energy here. Our team works closely with
                    mining clients, and the facility is perfectly set up for efficient operations. The safety protocols
                    and equipment are industry-leading."
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <Badge variant="secondary">Lubumbashi Office</Badge>
                </div>
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Employee" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Jean Kabongo</CardTitle>
                      <CardDescription>Sales Director, 4 years</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "Our Lubumbashi office has grown significantly in the past few years. The modern facilities and
                    strategic location have helped us expand our client base across Congo. The cross-border
                    collaboration with our Zambian colleagues is seamless."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Request Service */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Need Service in a New Area?</h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Don't see your location listed? We're continuously expanding our service area to meet the growing
                  demand for reliable fuel solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>Custom delivery solutions for remote locations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>Temporary fuel depots for project sites</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>Cross-border delivery services</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>Expansion plans based on client needs</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Request Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="Fuel Delivery" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Expanding Our Reach</h3>
                    <p className="text-primary-foreground/90">
                      We're committed to bringing reliable fuel solutions to businesses across Zambia and Congo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

