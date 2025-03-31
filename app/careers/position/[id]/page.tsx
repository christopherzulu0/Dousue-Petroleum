"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { MapPin, Briefcase, DollarSign, Clock, ChevronLeft, CheckCircle, Users, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface JobData {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
}

// This would normally come from a database or API
const getJobData = (jobId: string): JobData | undefined => {
  // Sample job data
  const jobs = [
    {
      id: "1",
      title: "Logistics Coordinator",
      location: "Lusaka, Zambia",
      locationId: "lusaka",
      department: "logistics",
      type: "full-time",
      salary: "$45,000 - $60,000",
      posted: "2 days ago",
      closingDate: "April 30, 2025",
      experience: "3+ years",
      education: "Bachelor's degree in Logistics, Supply Chain Management, or related field",
      reportingTo: "Logistics Manager",
      teamSize: 5,
      description:
        "We are seeking an experienced Logistics Coordinator to join our team in Lusaka. In this role, you will be responsible for coordinating fuel delivery operations, optimizing routes, and ensuring timely delivery to clients. You will work closely with drivers, clients, and other team members to maintain excellent service standards.",
      responsibilities: [
        "Coordinate and schedule fuel deliveries to ensure timely and efficient service",
        "Optimize delivery routes to maximize efficiency and minimize costs",
        "Monitor fuel inventory levels and coordinate with suppliers for replenishment",
        "Maintain accurate records of deliveries, inventory, and client information",
        "Liaise with clients to address any delivery issues or special requirements",
        "Ensure compliance with safety regulations and company policies",
        "Prepare regular reports on delivery performance and logistics operations",
        "Collaborate with the sales team to meet client needs and resolve any issues",
      ],
      requirements: [
        "3+ years of experience in logistics, preferably in the petroleum or related industry",
        "Strong organizational and time management skills",
        "Proficiency in logistics software and Microsoft Office applications",
        "Excellent communication and interpersonal skills",
        "Problem-solving abilities and attention to detail",
        "Knowledge of transportation regulations and safety standards",
        "Valid driver's license",
        "Bachelor's degree in Logistics, Supply Chain Management, or related field (preferred)",
      ],
      benefits: [
        "Competitive salary package with performance bonuses",
        "Comprehensive health insurance coverage",
        "Retirement savings plan with company matching",
        "Paid time off and holidays",
        "Professional development opportunities",
        "Career advancement potential",
        "Employee wellness program",
        "Team building events and activities",
      ],
      applicationProcess: [
        {
          step: 1,
          title: "Application Review",
          description: "Our recruitment team will review your application and resume.",
        },
        {
          step: 2,
          title: "Initial Interview",
          description: "Qualified candidates will be invited for an initial interview.",
        },
        {
          step: 3,
          title: "Skills Assessment",
          description: "Selected candidates will complete a logistics coordination assessment.",
        },
        {
          step: 4,
          title: "Final Interview",
          description: "Meet with the Logistics Manager and team members.",
        },
        {
          step: 5,
          title: "Job Offer",
          description: "Successful candidates will receive a job offer.",
        },
      ],
      teamDescription:
        "You'll be joining our dynamic Logistics team, which is responsible for ensuring the smooth and efficient delivery of fuel products to our clients across Zambia. The team consists of logistics coordinators, dispatchers, and fleet managers who work together to maintain our reputation for reliable service.",
      contactPerson: {
        name: "Sarah Mwanza",
        title: "Recruitment Specialist",
        email: "careers@dousuepetroleum.com",
        phone: "+260 123 456 789",
      },
      similarPositions: [
        {
          id: "7",
          title: "Dispatch Supervisor",
          location: "Lusaka, Zambia",
          department: "logistics",
          type: "full-time",
        },
        {
          id: "9",
          title: "Inventory Specialist",
          location: "Lusaka, Zambia",
          department: "logistics",
          type: "full-time",
        },
        {
          id: "14",
          title: "Cross-Border Logistics Specialist",
          location: "Lubumbashi, Congo",
          department: "logistics",
          type: "full-time",
        },
      ],
    },
    {
      id: "2",
      title: "Safety Officer",
      location: "Lusaka, Zambia",
      locationId: "lusaka",
      department: "operations",
      type: "full-time",
      salary: "$55,000 - $70,000",
      posted: "1 week ago",
      closingDate: "May 15, 2025",
      experience: "5+ years",
      education: "Bachelor's degree in Occupational Health and Safety or related field",
      reportingTo: "Operations Manager",
      teamSize: 3,
      description:
        "We are looking for a dedicated Safety Officer to develop and implement safety protocols, conduct training, and ensure compliance with safety regulations across all operations. The ideal candidate will have a strong background in occupational health and safety, particularly in the petroleum industry.",
      responsibilities: [
        "Develop, implement, and maintain safety policies and procedures",
        "Conduct regular safety inspections and audits of facilities and operations",
        "Investigate incidents, accidents, and near-misses to identify root causes",
        "Develop and deliver safety training programs for employees",
        "Monitor compliance with safety regulations and company policies",
        "Maintain safety documentation and records",
        "Prepare safety reports and presentations for management",
        "Collaborate with department heads to address safety concerns",
      ],
      requirements: [
        "5+ years of experience in safety management, preferably in the petroleum industry",
        "Relevant safety certifications (NEBOSH, OSHA, etc.)",
        "Knowledge of petroleum safety regulations and standards",
        "Experience in developing and implementing safety programs",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
        "Proficiency in safety management software",
        "Bachelor's degree in Occupational Health and Safety or related field",
      ],
      benefits: [
        "Competitive salary package with performance bonuses",
        "Comprehensive health insurance coverage",
        "Retirement savings plan with company matching",
        "Paid time off and holidays",
        "Professional development opportunities",
        "Career advancement potential",
        "Employee wellness program",
        "Team building events and activities",
      ],
      applicationProcess: [
        {
          step: 1,
          title: "Application Review",
          description: "Our recruitment team will review your application and resume.",
        },
        {
          step: 2,
          title: "Initial Interview",
          description: "Qualified candidates will be invited for an initial interview.",
        },
        {
          step: 3,
          title: "Technical Assessment",
          description: "Selected candidates will complete a safety management assessment.",
        },
        {
          step: 4,
          title: "Final Interview",
          description: "Meet with the Operations Manager and team members.",
        },
        {
          step: 5,
          title: "Job Offer",
          description: "Successful candidates will receive a job offer.",
        },
      ],
      teamDescription:
        "You'll be joining our Operations team, which is responsible for ensuring the safe and efficient operation of our facilities and delivery services. The safety team works closely with all departments to maintain our commitment to zero incidents and a culture of safety excellence.",
      contactPerson: {
        name: "David Banda",
        title: "Recruitment Specialist",
        email: "careers@dousuepetroleum.com",
        phone: "+260 123 456 789",
      },
      similarPositions: [
        {
          id: "10",
          title: "Quality Control Inspector",
          location: "Ndola, Zambia",
          department: "operations",
          type: "full-time",
        },
        {
          id: "15",
          title: "Operations Manager",
          location: "Lubumbashi, Congo",
          department: "operations",
          type: "full-time",
        },
      ],
    },
    {
      id: "3",
      title: "Sales Representative",
      location: "Lusaka, Zambia",
      locationId: "lusaka",
      department: "sales",
      type: "full-time",
      salary: "$40,000 - $65,000 + commission",
      posted: "3 days ago",
      closingDate: "April 25, 2025",
      experience: "3+ years",
      education: "Bachelor's degree in Business, Marketing, or related field",
      reportingTo: "Sales Manager",
      teamSize: 8,
      description:
        "We are seeking a motivated Sales Representative to develop client relationships, identify new business opportunities, and promote our fuel products and services to potential customers. The ideal candidate will have a proven track record in B2B sales and excellent relationship-building skills.",
      responsibilities: [
        "Develop and maintain relationships with existing and potential clients",
        "Identify and pursue new business opportunities in the assigned territory",
        "Conduct product presentations and demonstrations for potential clients",
        "Negotiate contracts and close sales deals",
        "Meet or exceed sales targets and quotas",
        "Maintain accurate records of sales activities and client interactions",
        "Provide regular reports on sales performance and market trends",
        "Collaborate with the marketing team on sales strategies and campaigns",
      ],
      requirements: [
        "3+ years of B2B sales experience, preferably in the petroleum or related industry",
        "Strong negotiation and closing skills",
        "Excellent communication and interpersonal abilities",
        "Self-motivated with a results-driven approach",
        "Proficiency in CRM software and Microsoft Office applications",
        "Valid driver's license and willingness to travel within the assigned territory",
        "Bachelor's degree in Business, Marketing, or related field (preferred)",
      ],
      benefits: [
        "Competitive base salary plus commission structure",
        "Comprehensive health insurance coverage",
        "Retirement savings plan with company matching",
        "Paid time off and holidays",
        "Professional development opportunities",
        "Career advancement potential",
        "Company vehicle or transportation allowance",
        "Mobile phone and laptop for business use",
      ],
      applicationProcess: [
        {
          step: 1,
          title: "Application Review",
          description: "Our recruitment team will review your application and resume.",
        },
        {
          step: 2,
          title: "Initial Interview",
          description: "Qualified candidates will be invited for an initial interview.",
        },
        {
          step: 3,
          title: "Sales Presentation",
          description: "Selected candidates will deliver a mock sales presentation.",
        },
        {
          step: 4,
          title: "Final Interview",
          description: "Meet with the Sales Manager and team members.",
        },
        {
          step: 5,
          title: "Job Offer",
          description: "Successful candidates will receive a job offer.",
        },
      ],
      teamDescription:
        "You'll be joining our dynamic Sales team, which is responsible for driving revenue growth and expanding our client base across Zambia. The team consists of sales representatives, account managers, and sales support staff who work together to deliver exceptional service to our clients.",
      contactPerson: {
        name: "Grace Mulenga",
        title: "Recruitment Specialist",
        email: "careers@dousuepetroleum.com",
        phone: "+260 123 456 789",
      },
      similarPositions: [
        {
          id: "11",
          title: "Regional Sales Manager",
          location: "Ndola, Zambia",
          department: "sales",
          type: "full-time",
        },
        {
          id: "13",
          title: "Mining Industry Specialist",
          location: "Kitwe, Zambia",
          department: "sales",
          type: "full-time",
        },
        {
          id: "17",
          title: "Sales Representative",
          location: "Lubumbashi, Congo",
          department: "sales",
          type: "full-time",
        },
      ],
    },
    {
      id: "4",
      title: "Fleet Maintenance Technician",
      location: "Ndola, Zambia",
      locationId: "ndola",
      department: "technical",
      type: "full-time",
      salary: "$38,000 - $52,000",
      posted: "5 days ago",
      closingDate: "May 10, 2025",
      experience: "3+ years",
      education: "Technical certification in Automotive or Diesel Mechanics",
      reportingTo: "Fleet Maintenance Supervisor",
      teamSize: 6,
      description:
        "We are seeking a skilled Fleet Maintenance Technician to perform preventive maintenance and repairs on our fleet of fuel delivery trucks and equipment. The ideal candidate will have experience with commercial vehicles and a strong understanding of diesel engines and fuel delivery systems.",
      responsibilities: [
        "Perform routine maintenance and inspections on delivery trucks and equipment",
        "Diagnose and repair mechanical, electrical, and hydraulic issues",
        "Maintain accurate records of maintenance activities and repairs",
        "Ensure vehicles comply with safety and regulatory standards",
        "Manage inventory of parts and supplies",
        "Respond to emergency breakdowns and provide roadside assistance",
        "Collaborate with the logistics team to minimize vehicle downtime",
        "Stay updated on new vehicle technologies and maintenance techniques",
      ],
      requirements: [
        "Certified diesel mechanic with 3+ years experience with commercial vehicles",
        "Knowledge of fuel delivery systems and equipment",
        "Experience with diagnostic tools and equipment",
        "Strong problem-solving and troubleshooting skills",
        "Ability to work independently and as part of a team",
        "Valid driver's license with clean driving record",
        "Technical certification in Automotive or Diesel Mechanics",
        "Experience with preventive maintenance programs",
      ],
      benefits: [
        "Competitive salary package with overtime opportunities",
        "Comprehensive health insurance coverage",
        "Retirement savings plan with company matching",
        "Paid time off and holidays",
        "Professional development and certification support",
        "Career advancement potential",
        "Tool allowance",
        "Uniform provision",
      ],
      applicationProcess: [
        {
          step: 1,
          title: "Application Review",
          description: "Our recruitment team will review your application and resume.",
        },
        {
          step: 2,
          title: "Initial Interview",
          description: "Qualified candidates will be invited for an initial interview.",
        },
        {
          step: 3,
          title: "Technical Assessment",
          description: "Selected candidates will complete a hands-on technical assessment.",
        },
        {
          step: 4,
          title: "Final Interview",
          description: "Meet with the Fleet Maintenance Supervisor and team members.",
        },
        {
          step: 5,
          title: "Job Offer",
          description: "Successful candidates will receive a job offer.",
        },
      ],
      teamDescription:
        "You'll be joining our Technical team in Ndola, which is responsible for maintaining our fleet of delivery vehicles and equipment. The team consists of maintenance technicians, mechanics, and support staff who work together to ensure our vehicles are safe, reliable, and efficient.",
      contactPerson: {
        name: "Michael Phiri",
        title: "Recruitment Specialist",
        email: "careers@dousuepetroleum.com",
        phone: "+260 123 456 790",
      },
      similarPositions: [
        {
          id: "6",
          title: "Petroleum Engineer Intern",
          location: "Kitwe, Zambia",
          department: "technical",
          type: "internship",
        },
      ],
    },
    // Add more job data as needed
  ]

  return jobs.find((job) => job.id === jobId) || null
}

export default function PositionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const job = getJobData(resolvedParams.id);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });
  
  if (!job) {
    return (
      <div className="container px-4 md:px-6 py-24 mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
        <p className="text-muted-foreground mb-8">The position you're looking for doesn't exist or has been filled.</p>
        <Button asChild>
          <Link href="/careers">Back to Careers</Link>
        </Button>
      </div>
    );
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/careers" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Positions
              </Link>
            </Button>
            
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Badge className="mb-4">
                  {job.type === 'full-time' ? 'Full-time' : job.type === 'part-time' ? 'Part-time' : 'Internship'}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    <Link href={`/careers/location/${job.locationId}`} className="hover:underline">
                      {job.location}
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    <span className="capitalize">{job.department}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#apply">Apply Now</a>
                  </Button>
                  <Button size="lg" variant="outline">
                    Save Position
                  </Button>
                </div>
              </div>
              
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Department:</span>
                    <span className="font-medium capitalize">{job.department}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">{job.experience}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-medium">Bachelor's Degree</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reports To:</span>
                    <span className="font-medium">{job.reportingTo}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size:</span>
                    <span className="font-medium">{job.teamSize} members</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closing Date:</span>
                    <span className="font-medium">{job.closingDate}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/careers/location/${job.locationId}`}>
                      View Location
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Job Details */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="mb-8 w-full overflow-auto">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                    <TabsTrigger value="requirements">Requirements</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Job Description</h3>
                      <p className="text-muted-foreground mb-6">{job.description}</p>
                      
                      <h4 className="text-lg font-semibold mb-3">About the Team</h4>
                      <p className="text-muted-foreground">{job.teamDescription}</p>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Team Structure</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-center">
                          <div className="p-4 rounded-lg border">
                            <p className="text-3xl font-bold text-primary mb-1">{job.teamSize}</p>
                            <p className="text-sm text-muted-foreground">Team Members</p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <p className="text-sm font-medium mb-1">Reports To</p>
                            <p className="font-semibold">{job.reportingTo}</p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <p className="text-sm font-medium mb-1">Department</p>
                            <p className="font-semibold capitalize">{job.department}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="responsibilities" className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="requirements" className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Requirements & Qualifications</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="benefits" className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Benefits & Perks</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {job.benefits.map((benefit, index) => (
                        <Card key={index} className="border-none shadow-sm">
                          <CardContent className="p-4">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                {/* Application Process */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Application Process</h3>
                  <div className="relative">
                    <div className="hidden md:block absolute left-[45px] top-0 bottom-0 w-1 bg-primary/20"></div>
                    <div className="space-y-8">
                      {job.applicationProcess.map((step) => (
                        <div key={step.step} className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                          <div className="flex-shrink-0 w-full md:w-[90px] text-left md:text-center mb-2 md:mb-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center md:mx-auto relative z-10">
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Contact Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Have questions about this position?</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">{job.contactPerson.name}</p>
                        <p className="text-sm text-muted-foreground">{job.contactPerson.title}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">{job.contactPerson.email}</p>
                        <p className="text-sm text-muted-foreground">Email</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">{job.contactPerson.phone}</p>
                        <p className="text-sm text-muted-foreground">Phone</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Similar Positions */}
                {job.similarPositions && job.similarPositions.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Similar Positions</CardTitle>
                      <CardDescription>You might also be interested in these roles</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {job.similarPositions.map((position) => (
                        <Link 
                          key={position.id} 
                          href={`/careers/position/${position.id}`}
                          className="block p-4 rounded-lg border hover:bg-muted transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{position.title}</p>
                              <p className="text-sm text-muted-foreground flex items-center mt-1">
                                <MapPin className="h-3 w-3 mr-1" /> {position.location}
                              </p>
                            </div>
                            <Badge variant="outline" className="capitalize">
                              {position.department}
                            </Badge>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/careers">View All Positions</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )}
                
                {/* Share Job */}
                <Card>
                  <CardHeader>
                    <CardTitle>Share This Position</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                        </svg>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

