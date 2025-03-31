"use client"

import { useState } from "react"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  ArrowRight,
  AlertCircle,
  Truck,
  FileText,
  HelpCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [chatOpen, setChatOpen] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    console.log("Form submitted:", formData)
    alert("Your message has been sent successfully!")
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Get In Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're here to answer your questions and provide the support you need
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-form">Contact Us</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#emergency">Emergency Contact</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak directly with our team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Main Office:</span>
                    <span className="font-medium">+260 123 456 789</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sales Team:</span>
                    <span className="font-medium">+260 123 456 790</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Support:</span>
                    <span className="font-medium">+260 123 456 791</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+260123456789">Call Now</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Send us a message anytime</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">General Inquiries:</span>
                    <span className="font-medium">info@dousuepetroleum.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sales:</span>
                    <span className="font-medium">sales@dousuepetroleum.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Support:</span>
                    <span className="font-medium">support@dousuepetroleum.com</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:info@dousuepetroleum.com">Email Now</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Visit Us</CardTitle>
                  <CardDescription>Come to our offices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Headquarters:</span>
                    <span className="font-medium">Lusaka, Zambia</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Regional Office:</span>
                    <span className="font-medium">Lubumbashi, Congo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Hours:</span>
                    <span className="font-medium">Mon-Fri: 8AM-5PM</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/locations">View Locations</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section id="contact-form" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Send Us a Message</h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below, and our team will get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleSelectChange(value, "inquiryType")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Enter the subject of your inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden border">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <MapPin className="h-16 w-16 text-muted-foreground/50" />
                    <span className="absolute text-lg font-medium">Interactive Map</span>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Our main contact details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-bold">Main Office</h3>
                        <p className="text-muted-foreground">123 Business Park, Industrial Area, Lusaka, Zambia</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">+260 123 456 789</p>
                        <p className="text-muted-foreground">+260 987 654 321 (Emergency Line)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">info@dousuepetroleum.com</p>
                        <p className="text-muted-foreground">sales@dousuepetroleum.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-bold">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                        <p className="text-muted-foreground mt-1">Emergency services available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Chat */}
        <div className={`fixed bottom-6 right-6 z-50 ${chatOpen ? "w-80" : "w-auto"}`}>
          {chatOpen ? (
            <Card className="shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground py-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base">Live Chat Support</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setChatOpen(false)}
                    className="h-8 w-8 text-primary-foreground"
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
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-3 h-80 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="bg-muted p-2 rounded-lg text-sm">
                      <p>Hello! Welcome to Dousue Petroleum support. How can I help you today?</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-primary/10 p-2 rounded-lg text-sm">
                      <p>Hi, I'm interested in your fuel delivery services.</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
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
                        className="h-4 w-4 text-primary-foreground"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="bg-muted p-2 rounded-lg text-sm">
                      <p>
                        Great! I'd be happy to provide information about our fuel delivery services. Could you please
                        tell me your location and what type of fuel you're interested in?
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <div className="flex w-full gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button size="icon" className="h-10 w-10">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ) : (
            <Button size="lg" className="rounded-full h-14 w-14 shadow-lg" onClick={() => setChatOpen(true)}>
              <MessageSquare className="h-6 w-6" />
            </Button>
          )}
        </div>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our services
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Delivery Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What areas do you service?</AccordionTrigger>
                      <AccordionContent>
                        We currently provide fuel delivery services across Zambia and Congo, with a focus on major urban
                        centers, mining regions, and industrial zones. Our strategically located depots allow us to
                        reach most locations within 24-48 hours.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What is the minimum order quantity?</AccordionTrigger>
                      <AccordionContent>
                        Our minimum order quantity varies by location and fuel type. For standard diesel and petrol
                        deliveries, we typically require a minimum of 500 liters. For specialized fuels or remote
                        locations, please contact our sales team for specific requirements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How quickly can you deliver?</AccordionTrigger>
                      <AccordionContent>
                        Our standard delivery time is 24-48 hours from order confirmation. For urgent needs, we offer
                        expedited delivery services in select areas. Emergency fuel services are available 24/7 for
                        critical operations.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Billing & Contracts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept bank transfers, corporate checks, and major credit cards. For regular customers, we
                        offer credit terms subject to approval. Mobile payment options are available in select regions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do you offer long-term contracts?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we specialize in long-term fuel supply contracts for businesses. These contracts can
                        include fixed pricing, priority delivery, and dedicated account management. Contact our sales
                        team to discuss contract options tailored to your needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How are fuel prices determined?</AccordionTrigger>
                      <AccordionContent>
                        Our fuel prices are based on current market rates, volume purchased, delivery location, and
                        contract terms. We strive to offer competitive pricing while maintaining the highest quality
                        standards. Bulk purchases qualify for volume discounts.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Support & Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I report an emergency?</AccordionTrigger>
                      <AccordionContent>
                        For fuel-related emergencies, call our 24/7 emergency line at +260 987 654 321. Our emergency
                        response team is trained to handle spills, equipment failures, and urgent delivery needs. Please
                        provide your location and nature of the emergency.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do you provide fuel quality testing?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer fuel quality testing services to ensure your fuel meets industry standards. Our
                        technicians can perform on-site testing or collect samples for laboratory analysis. Regular
                        testing is included in our premium service contracts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can you help with fuel storage solutions?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely. We provide consultation on fuel storage requirements and can supply temporary or
                        permanent storage tanks. Our team can assist with regulatory compliance, installation, and
                        maintenance of fuel storage systems tailored to your operational needs.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" className="gap-2">
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section id="emergency" className="w-full py-12 md:py-24 lg:py-32 bg-destructive text-destructive-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-destructive-foreground/10 px-3 py-1 text-sm">
                  24/7 Support
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Emergency Fuel Services</h2>
                <p className="text-destructive-foreground/90 md:text-xl">
                  For urgent fuel needs outside of business hours, please contact our emergency response team.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span>Fuel spills and environmental incidents</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span>Critical equipment fuel shortages</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span>Urgent delivery requirements</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span>Fuel quality concerns</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="tel:+260987654321">Call Emergency Line</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/emergency">Emergency Procedures</Link>
                  </Button>
                </div>
              </div>

              <Card className="bg-destructive-foreground text-destructive">
                <CardHeader>
                  <CardTitle>Emergency Contact Information</CardTitle>
                  <CardDescription className="text-destructive/80">
                    Available 24 hours a day, 7 days a week
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-destructive mt-0.5" />
                    <div>
                      <h3 className="font-bold">Emergency Hotline</h3>
                      <p className="text-destructive/80">+260 987 654 321</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-destructive mt-0.5" />
                    <div>
                      <h3 className="font-bold">Emergency Email</h3>
                      <p className="text-destructive/80">emergency@dousuepetroleum.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-destructive mt-0.5" />
                    <div>
                      <h3 className="font-bold">Emergency Response Centers</h3>
                      <p className="text-destructive/80">Lusaka, Kitwe, and Lubumbashi</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 mt-4">
                    <h4 className="font-medium mb-2">Response Time Commitment</h4>
                    <p className="text-sm text-destructive/80 mb-2">
                      Our emergency response teams are committed to the following response times:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Urban Areas:</span>
                        <span className="font-medium">1-2 Hours</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Industrial Zones:</span>
                        <span className="font-medium">2-3 Hours</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Remote Locations:</span>
                        <span className="font-medium">3-6 Hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Updated</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Subscribe to our newsletter for the latest news, pricing updates, and industry insights
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

