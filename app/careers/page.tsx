"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  TrendingUp,
  Filter,
  ChevronRight,
  CheckCircle,
  Bell,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Logistics Coordinator",
      location: "Lusaka, Zambia",
      department: "logistics",
      type: "full-time",
      description:
        "Coordinate fuel delivery operations, optimize routes, and ensure timely delivery to clients. Work closely with drivers and clients to maintain excellent service.",
      requirements: [
        "3+ years logistics experience",
        "Strong organizational skills",
        "Proficient in logistics software",
      ],
      salary: "$45,000 - $60,000",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Safety Officer",
      location: "Lusaka, Zambia",
      department: "operations",
      type: "full-time",
      description:
        "Develop and implement safety protocols, conduct training, and ensure compliance with safety regulations across all operations.",
      requirements: [
        "5+ years safety management",
        "Relevant safety certifications",
        "Knowledge of petroleum safety regulations",
      ],
      salary: "$55,000 - $70,000",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Sales Representative",
      location: "Lusaka, Zambia",
      department: "sales",
      type: "full-time",
      description:
        "Develop client relationships, identify new business opportunities, and promote our fuel products and services to potential customers.",
      requirements: ["3+ years B2B sales experience", "Strong negotiation skills", "Valid driver's license"],
      salary: "$40,000 - $65,000 + commission",
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Fleet Maintenance Technician",
      location: "Ndola, Zambia",
      department: "technical",
      type: "full-time",
      description:
        "Perform preventive maintenance and repairs on our fleet of fuel delivery trucks and equipment to ensure operational reliability.",
      requirements: [
        "Certified diesel mechanic",
        "3+ years experience with commercial vehicles",
        "Knowledge of fuel delivery systems",
      ],
      salary: "$38,000 - $52,000",
      posted: "5 days ago",
    },
    {
      id: 5,
      title: "Administrative Assistant",
      location: "Lusaka, Zambia",
      department: "admin",
      type: "part-time",
      description:
        "Provide administrative support to the management team, handle correspondence, and maintain office supplies and records.",
      requirements: [
        "2+ years administrative experience",
        "Proficient in Microsoft Office",
        "Excellent organizational skills",
      ],
      salary: "$25,000 - $35,000",
      posted: "1 day ago",
    },
    {
      id: 6,
      title: "Petroleum Engineer Intern",
      location: "Kitwe, Zambia",
      department: "technical",
      type: "internship",
      description:
        "Assist senior engineers in analyzing petroleum operations, optimizing fuel storage solutions, and implementing technical improvements.",
      requirements: [
        "Currently pursuing degree in Petroleum Engineering",
        "Strong analytical skills",
        "Eager to learn and grow",
      ],
      salary: "Competitive stipend",
      posted: "2 weeks ago",
    },
  ]

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation)
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
    const matchesType = selectedType === "all" || job.type === selectedType

    return matchesSearch && matchesLocation && matchesDepartment && matchesType
  })

  // Benefits data
  const benefits = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive medical coverage, wellness programs, and gym membership subsidies.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Career Growth",
      description: "Continuous learning opportunities, leadership training, and clear advancement paths.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Competitive Compensation",
      description: "Above-market salaries, performance bonuses, and profit-sharing opportunities.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible scheduling options, generous paid time off, and family leave policies.",
    },
  ]

  // Locations data
  const locations = [
    {
      city: "Lusaka",
      country: "Zambia",
      address: "123 Independence Avenue, Lusaka",
      positions: 12,
      image: "/placeholder.svg?height=200&width=300",
      locationId: "lusaka",
    },
    {
      city: "Ndola",
      country: "Zambia",
      address: "45 Copper Road, Ndola",
      positions: 5,
      image: "/placeholder.svg?height=200&width=300",
      locationId: "ndola",
    },
    {
      city: "Kitwe",
      country: "Zambia",
      address: "78 Mining Boulevard, Kitwe",
      positions: 3,
      image: "/placeholder.svg?height=200&width=300",
      locationId: "kitwe",
    },
    {
      city: "Lubumbashi",
      country: "Congo",
      address: "90 Central Avenue, Lubumbashi",
      positions: 4,
      image: "/placeholder.svg?height=200&width=300",
      locationId: "lubumbashi",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Team working together"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-primary hover:bg-primary/90">We're Hiring</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Build Your Career With Purpose
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Join Dousue Petroleum and be part of a team that's powering progress across Zambia and Congo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#open-positions">View Open Positions</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="relative z-10 container px-4 md:px-6 mx-auto mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/10 backdrop-blur-md rounded-xl">
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-white">200+</p>
                <p className="text-gray-200">Employees</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
                <p className="text-gray-200">Open Positions</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-white">4</p>
                <p className="text-gray-200">Office Locations</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-white">92%</p>
                <p className="text-gray-200">Employee Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Search Section */}
        <section id="open-positions" className="w-full py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-2">Open Positions</h2>
                <p className="text-muted-foreground">Find your perfect role in our growing team</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Lusaka">Lusaka, Zambia</SelectItem>
                    <SelectItem value="Ndola">Ndola, Zambia</SelectItem>
                    <SelectItem value="Kitwe">Kitwe, Zambia</SelectItem>
                    <SelectItem value="Lubumbashi">Lubumbashi, Congo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="department">Department</Label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="admin">Administration</SelectItem>
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
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
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
                      setSelectedLocation("all")
                      setSelectedDepartment("all")
                      setSelectedType("all")
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>

            {/* Job Alerts */}
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Get Job Alerts</h3>
                    <p className="text-muted-foreground">Be the first to know about new opportunities</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Input placeholder="Enter your email" className="w-full sm:w-[300px]" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Why Join Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Dousue Petroleum, we believe in taking care of our most valuable asset - our people.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Employee Testimonials */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-2">Hear From Our Team</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our employees share their experiences working at Dousue Petroleum
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TestimonialCard
                  name="Sarah M."
                  position="Logistics Manager"
                  years="5 years"
                  quote="Working at Dousue Petroleum has been incredibly rewarding. The company truly invests in employee development and creates a supportive environment where innovation is encouraged."
                />

                <TestimonialCard
                  name="David K."
                  position="Fleet Supervisor"
                  years="3 years"
                  quote="The safety culture at Dousue Petroleum is exceptional. I've never worked for a company that places such a high priority on employee wellbeing and operational safety."
                />

                <TestimonialCard
                  name="Grace N."
                  position="Sales Executive"
                  years="2 years"
                  quote="The opportunities for growth here are amazing. I started in an entry-level position and have been promoted twice in just two years thanks to the mentorship and training programs."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Career Growth Path */}
        <section className="w-full py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Your Career Path</h2>
                <p className="text-muted-foreground mb-8">
                  At Dousue Petroleum, we're committed to helping you grow professionally. Our structured career paths
                  provide clear advancement opportunities across all departments.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Entry Level Opportunities</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We offer numerous entry points for professionals at all stages of their careers:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Graduate Training Programs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Internships with real responsibilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Entry-level positions with training</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Professional Development</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">We invest in your growth through:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Industry certification programs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Leadership development training</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Cross-functional project opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Tuition reimbursement for relevant education</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Leadership Tracks</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Our leadership pipeline includes:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Supervisor development program</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Management training academy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Executive mentorship opportunities</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8">
                  <Button className="flex items-center gap-2">
                    <span>Download Career Path Guide</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Career growth"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Our Locations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore opportunities across our offices in Zambia and Congo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.city} office`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>
                      {location.city}, {location.country}
                    </CardTitle>
                    <CardDescription>{location.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="mb-2">
                      {location.positions} Open Positions
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Our {location.city} office serves as a hub for our operations in the region.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/careers/location/${location.locationId}`}>View Positions</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Our Hiring Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">What to expect when you apply to join our team</p>
            </div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>

              <div className="space-y-12 relative">
                <ProcessStep
                  number="1"
                  title="Application Review"
                  description="Our recruitment team carefully reviews your application and resume to assess your qualifications and experience."
                  position="left"
                />

                <ProcessStep
                  number="2"
                  title="Initial Interview"
                  description="Qualified candidates are invited for an initial interview, which may be conducted virtually or in person."
                  position="right"
                />

                <ProcessStep
                  number="3"
                  title="Technical Assessment"
                  description="Depending on the role, you may be asked to complete a technical assessment or job-specific exercise."
                  position="left"
                />

                <ProcessStep
                  number="4"
                  title="Final Interview"
                  description="Meet with the hiring manager and team members to discuss the role in detail and assess cultural fit."
                  position="right"
                />

                <ProcessStep
                  number="5"
                  title="Offer & Onboarding"
                  description="Successful candidates receive a job offer, followed by a comprehensive onboarding program."
                  position="left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about careers at Dousue Petroleum
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What benefits do you offer employees?</AccordionTrigger>
                  <AccordionContent>
                    We offer a comprehensive benefits package including health insurance, retirement plans, paid time
                    off, professional development opportunities, and performance bonuses. Benefits may vary by location
                    and position.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer relocation assistance?</AccordionTrigger>
                  <AccordionContent>
                    Yes, for certain positions we offer relocation assistance to help new employees move to the location
                    of their new role. The specifics of the relocation package depend on the position and location.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the work culture like?</AccordionTrigger>
                  <AccordionContent>
                    Our culture is built on teamwork, safety, and excellence. We value diversity of thought and
                    background, and foster an environment where employees are empowered to innovate and contribute
                    meaningfully. We maintain a professional yet collaborative atmosphere where everyone's input is
                    valued.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                  <AccordionContent>
                    The timeline varies depending on the position, but typically the entire process from application to
                    offer takes 3-4 weeks. We strive to keep candidates informed throughout the process and provide
                    timely updates on their status.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you offer internships for students?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer structured internship programs for students and recent graduates. Our internships
                    provide hands-on experience and meaningful projects that contribute to our business while developing
                    professional skills.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Join Our Team?</h2>
                <p className="text-primary-foreground/80 mb-8 text-lg">
                  Take the next step in your career journey with Dousue Petroleum. Browse our open positions or submit
                  your resume for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="#open-positions">View Open Positions</a>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white/10"
                      >
                        Submit Your Resume
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Submit Your Resume</DialogTitle>
                        <DialogDescription>
                          Even if you don't see a perfect match for your skills, we'd love to keep your information on
                          file for future opportunities.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="Enter your first name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Enter your last name" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Enter your phone number" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interest">Area of Interest</Label>
                          <Select>
                            <SelectTrigger id="interest">
                              <SelectValue placeholder="Select an area of interest" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="logistics">Logistics</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="technical">Technical</SelectItem>
                              <SelectItem value="admin">Administration</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="resume">Resume/CV</Label>
                          <Input id="resume" type="file" />
                          <p className="text-xs text-muted-foreground">
                            Upload your resume/CV (PDF, DOC, or DOCX format, max 5MB)
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-sm">
                              I agree to the processing of my personal data according to the privacy policy
                            </Label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button type="submit">Submit Application</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team collaboration"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Component for job cards
function JobCard({ job }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" /> {job.location}
            </CardDescription>
          </div>
          <Badge variant={job.type === "full-time" ? "default" : job.type === "part-time" ? "secondary" : "outline"}>
            {job.type === "full-time" ? "Full-time" : job.type === "part-time" ? "Part-time" : "Internship"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-muted-foreground mb-4">{job.description}</p>
        <div className="space-y-2 mb-4">
          {job.requirements.map((req, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
              <span className="text-sm">{req}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
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
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  )
}

// Component for testimonial cards
function TestimonialCard({ name, position, years, quote }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Image src="/placeholder.svg?height=60&width=60" width={60} height={60} alt={name} className="rounded-full" />
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>
              {position}, {years}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-8 h-8 text-primary/20 -translate-x-4 -translate-y-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <p className="text-muted-foreground pt-4">{quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for process steps
function ProcessStep({ number, title, description, position }) {
  return (
    <div className={`flex flex-col md:flex-row items-center ${position === "right" ? "md:flex-row-reverse" : ""}`}>
      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-6 md:pb-0">
        <div className={`${position === "right" ? "md:pl-12" : "md:pr-12"}`}>
          <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto md:mx-0">
            {number}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  )
}

