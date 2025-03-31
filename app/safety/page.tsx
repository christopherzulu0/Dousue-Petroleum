import Image from "next/image"
import Link from "next/link"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Award,
  FileText,
  Leaf,
  Download,
  Clock,
  Users,
  BarChart,
  TrendingUp,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SafetyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Safety First Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
          </div>

          <div className="container relative z-20 px-4 md:px-6">
            <div className="flex flex-col items-start max-w-3xl space-y-6">
              <Badge className="bg-primary hover:bg-primary text-white text-sm px-4 py-1">
                Industry-Leading Standards
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Safety is Our <span className="text-primary">Highest Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                At Dousue Petroleum, we're committed to maintaining the highest standards of safety across all our
                operations, protecting our employees, customers, communities, and the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="font-medium">
                  View Safety Certifications
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                >
                  Safety Resources
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Stats Section */}
        <section className="w-full py-12 bg-primary/5 border-y border-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm md:text-base text-muted-foreground">Compliance Rate</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">0</div>
                <p className="text-sm md:text-base text-muted-foreground">Major Incidents in 2023</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm md:text-base text-muted-foreground">Emergency Response</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-sm md:text-base text-muted-foreground">Training Hours Annually</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="commitments" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="commitments">Commitments</TabsTrigger>
                  <TabsTrigger value="training">Training</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>
              </div>

              {/* Safety Commitments Tab */}
              <TabsContent value="commitments" className="space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Our Safety Commitments</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Comprehensive safety measures across all operations to ensure the wellbeing of our employees,
                    customers, and communities.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="group hover:shadow-md transition-all duration-200 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Fuel Handling Protocols</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our team follows strict protocols for the handling, storage, and transfer of all petroleum
                        products. These procedures are designed to prevent spills, contamination, and accidents while
                        ensuring product quality.
                      </CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Specialized training for all handling personnel
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Regular equipment inspections and maintenance
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Proper labeling and documentation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Containment systems to prevent environmental impact
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-200 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                        <Truck className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Driver & Fleet Safety</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our drivers undergo comprehensive safety training and follow strict protocols to ensure the safe
                        transportation of petroleum products. Our fleet is equipped with modern safety features and
                        regularly maintained.
                      </CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Defensive driving training for all drivers
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          GPS tracking and route optimization
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Regular vehicle maintenance and inspections
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Strict adherence to driving hours and rest periods
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-200 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Emergency Preparedness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        We maintain comprehensive emergency response plans for various scenarios, including spills,
                        fires, and other incidents. Our team is trained to respond quickly and effectively to minimize
                        impact.
                      </CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Regular emergency response drills
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Spill containment equipment at all facilities
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Coordination with local emergency services
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          24/7 emergency response team
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-200 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Regulatory Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        We strictly adhere to all national and international regulations governing the petroleum
                        industry. Our compliance team stays updated on regulatory changes to ensure ongoing adherence.
                      </CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Regular compliance audits and assessments
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Proper licensing and permitting
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Documentation and record-keeping
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Staff training on regulatory requirements
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-200 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Environmental Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        We are committed to minimizing our environmental footprint through responsible practices,
                        pollution prevention, and continuous improvement of our operations.
                      </CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Spill prevention and containment systems
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Waste management and recycling programs
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Emissions monitoring and reduction
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Environmental impact assessments
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-200 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Certifications & Awards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our commitment to safety has been recognized through various certifications and awards,
                        reflecting our dedication to maintaining the highest standards in the industry.
                      </CardDescription>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          ISO 9001:2015 Quality Management System
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          ISO 14001:2015 Environmental Management
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          OHSAS 18001 Occupational Health and Safety
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          Industry safety recognition awards
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Safety Training Tab */}
              <TabsContent value="training" className="space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Safety Training & Education</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Our comprehensive training programs ensure that all team members are equipped with the knowledge and
                    skills to maintain a safe working environment.
                  </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Safety Training Session"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <Badge className="bg-primary hover:bg-primary mb-2">Training Video</Badge>
                        <h3 className="text-xl font-medium text-white">Safety Procedures Overview</h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold tracking-tighter">Training Programs</h3>
                    <p className="text-muted-foreground">
                      We believe that a well-trained team is essential for maintaining a safe working environment. All
                      Dousue Petroleum employees undergo comprehensive safety training relevant to their roles.
                    </p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <Clock className="mr-2 h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Initial Safety Orientation</span>
                            </div>
                          </div>
                          <Badge variant="outline">Required</Badge>
                        </div>
                        <Progress value={100} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          All new employees receive thorough safety training before beginning their duties.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <Users className="mr-2 h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Regular Refresher Courses</span>
                            </div>
                          </div>
                          <Badge variant="outline">Quarterly</Badge>
                        </div>
                        <Progress value={75} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Ongoing training to reinforce safety protocols and introduce new procedures.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <BarChart className="mr-2 h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Specialized Training</span>
                            </div>
                          </div>
                          <Badge variant="outline">Role-specific</Badge>
                        </div>
                        <Progress value={90} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Role-specific safety training for drivers, handlers, and technical staff.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <AlertTriangle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Emergency Response Drills</span>
                            </div>
                          </div>
                          <Badge variant="outline">Monthly</Badge>
                        </div>
                        <Progress value={85} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Regular practice sessions for various emergency scenarios.
                        </p>
                      </div>
                    </div>

                    <Button asChild className="mt-4">
                      <Link href="/contact">Learn About Our Safety Programs</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-muted rounded-xl p-6 md:p-8 mt-12">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">100%</h3>
                      <p className="text-sm text-muted-foreground">Employee Participation</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">40+ Hours</h3>
                      <p className="text-sm text-muted-foreground">Annual Training Per Employee</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">95%</h3>
                      <p className="text-sm text-muted-foreground">Safety Knowledge Retention</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">12</h3>
                      <p className="text-sm text-muted-foreground">Training Excellence Awards</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Certifications Tab */}
              <TabsContent value="certifications" className="space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Safety Certifications</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Our commitment to safety is validated through industry-recognized certifications and standards.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col border-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <Badge>Since 2015</Badge>
                      </div>
                      <CardTitle>ISO 9001:2015</CardTitle>
                      <CardDescription>Quality Management System</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        This certification validates our commitment to consistently providing products and services that
                        meet customer and regulatory requirements.
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Certificate
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col border-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Leaf className="h-6 w-6 text-primary" />
                        </div>
                        <Badge>Since 2016</Badge>
                      </div>
                      <CardTitle>ISO 14001:2015</CardTitle>
                      <CardDescription>Environmental Management</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        This certification demonstrates our commitment to environmental responsibility and sustainable
                        practices in all our operations.
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Certificate
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col border-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <Badge>Since 2017</Badge>
                      </div>
                      <CardTitle>OHSAS 18001</CardTitle>
                      <CardDescription>Occupational Health and Safety</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        This certification validates our occupational health and safety management systems, ensuring we
                        provide safe working conditions.
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Certificate
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col border-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Truck className="h-6 w-6 text-primary" />
                        </div>
                        <Badge>Annual</Badge>
                      </div>
                      <CardTitle>Fleet Safety Excellence</CardTitle>
                      <CardDescription>National Transportation Award</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        This award recognizes our exceptional safety record in transportation and logistics operations.
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        View Recognition
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col border-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <AlertTriangle className="h-6 w-6 text-primary" />
                        </div>
                        <Badge>Ongoing</Badge>
                      </div>
                      <CardTitle>Emergency Response Certification</CardTitle>
                      <CardDescription>Crisis Management Excellence</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        This certification recognizes our ability to effectively respond to and manage emergency
                        situations across our operations.
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        View Certification
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col border-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <Badge>Renewed Annually</Badge>
                      </div>
                      <CardTitle>Regulatory Compliance</CardTitle>
                      <CardDescription>Industry Standard Adherence</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        This certification confirms our strict adherence to all regulatory requirements in the petroleum
                        industry.
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        View Compliance Record
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Safety FAQ Section */}
        <section className="w-full py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Safety FAQs</h2>
              <p className="text-muted-foreground md:text-lg">
                Common questions about our safety protocols and procedures
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What safety training do your employees receive?</AccordionTrigger>
                  <AccordionContent>
                    All Dousue Petroleum employees undergo comprehensive safety training specific to their roles. This
                    includes initial orientation, regular refresher courses, specialized training for specific tasks,
                    and emergency response drills. Our training programs cover fuel handling, transportation safety,
                    environmental protection, and regulatory compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do you ensure the safe transportation of petroleum products?</AccordionTrigger>
                  <AccordionContent>
                    We maintain a rigorous fleet safety program that includes defensive driving training for all
                    drivers, regular vehicle maintenance and inspections, GPS tracking and route optimization, and
                    strict adherence to driving hours and rest periods. Our vehicles are equipped with modern safety
                    features and spill containment equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What emergency response procedures do you have in place?</AccordionTrigger>
                  <AccordionContent>
                    We maintain comprehensive emergency response plans for various scenarios, including spills, fires,
                    and other incidents. Our team conducts regular emergency response drills, maintains spill
                    containment equipment at all facilities, coordinates with local emergency services, and operates a
                    24/7 emergency response team ready to address any situation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do you minimize environmental impact?</AccordionTrigger>
                  <AccordionContent>
                    Environmental responsibility is a core value at Dousue Petroleum. We implement spill prevention and
                    containment systems, waste management and recycling programs, emissions monitoring and reduction
                    initiatives, and conduct regular environmental impact assessments. We are ISO 14001:2015 certified
                    for our environmental management system.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What safety certifications does Dousue Petroleum hold?</AccordionTrigger>
                  <AccordionContent>
                    Dousue Petroleum holds several industry-recognized certifications, including ISO 9001:2015 for
                    Quality Management, ISO 14001:2015 for Environmental Management, and OHSAS 18001 for Occupational
                    Health and Safety. We also maintain various industry-specific certifications and have received
                    multiple safety excellence awards.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Safety Resources Section */}
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Safety Resources</h2>
                <p className="text-muted-foreground md:text-xl">
                  Access our comprehensive safety resources and documentation to learn more about our commitment to
                  safety excellence.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="mr-4 bg-primary/10 p-2 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">Safety Policy Document</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive overview of our safety policies</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="mr-4 bg-primary/10 p-2 rounded-full">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">Emergency Response Guide</h3>
                      <p className="text-sm text-muted-foreground">Procedures for handling emergency situations</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="mr-4 bg-primary/10 p-2 rounded-full">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">Transportation Safety Manual</h3>
                      <p className="text-sm text-muted-foreground">Guidelines for safe fuel transportation</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="mr-4 bg-primary/10 p-2 rounded-full">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">Environmental Protection Plan</h3>
                      <p className="text-sm text-muted-foreground">Our commitment to environmental responsibility</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button asChild className="mt-4">
                  <Link href="/contact">Request Additional Resources</Link>
                </Button>
              </div>

              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="Safety Training"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 p-4 rounded-full">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center cursor-pointer">
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
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Safety is Everyone's Responsibility
                </h2>
                <p className="md:text-xl">
                  Join us in our commitment to maintaining the highest standards of safety in the petroleum industry.
                  Contact our safety team to learn more about our programs or to report safety concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button size="lg" variant="secondary">
                    Contact Safety Team
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10">
                    Report a Concern
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
                  <p className="text-primary-foreground/80">
                    Our safety team is available around the clock to address concerns and provide assistance.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Team Training</h3>
                  <p className="text-primary-foreground/80">
                    Request specialized safety training for your team or organization.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Documentation</h3>
                  <p className="text-primary-foreground/80">
                    Access safety documentation, certifications, and compliance records.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Emergency</h3>
                  <p className="text-primary-foreground/80">Immediate response protocols for emergency situations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

