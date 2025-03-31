import Image from "next/image"
import {
  Award,
  Calendar,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Mail,
  MessageSquare,
  Quote,
  Star,
  TrendingUp,
  Twitter,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-primary/70 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              transform: "scale(1.1)",
            }}
          ></div>
          <div className="relative z-20 container h-full flex flex-col justify-end pb-8 md:pb-16 lg:pb-20 px-4 md:px-6">
            <div className="max-w-3xl space-y-3 md:space-y-4">
              <Badge className="mb-2 md:mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                Leadership
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">John Dousue</h1>
              <p className="text-lg md:text-2xl text-white">Founder & Chief Executive Officer</p>
              <p className="text-white/90 max-w-xl text-sm md:text-base">
                Visionary leader with over 20 years of experience transforming the fuel supply industry in Zambia and
                neighboring regions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="secondary" className="bg-white/90 hover:bg-white text-primary">
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                  <Linkedin className="mr-2 h-4 w-4" /> Connect
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-muted py-4 md:py-6 border-y">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center">
                <p className="text-2xl md:text-4xl font-bold text-primary">20+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Years in Industry</p>
              </div>
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center">
                <p className="text-2xl md:text-4xl font-bold text-primary">2010</p>
                <p className="text-xs md:text-sm text-muted-foreground">Founded Company</p>
              </div>
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center">
                <p className="text-2xl md:text-4xl font-bold text-primary">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center">
                <p className="text-2xl md:text-4xl font-bold text-primary">2</p>
                <p className="text-xs md:text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <Tabs defaultValue="about" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="journey">Journey</TabsTrigger>
                  <TabsTrigger value="vision">Vision</TabsTrigger>
                </TabsList>
              </div>

              {/* About Tab */}
              <TabsContent value="about" className="space-y-8">
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
                    <div className="relative overflow-hidden rounded-xl border-8 border-white shadow-xl">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        width={600}
                        height={600}
                        alt="John Dousue - CEO Portrait"
                        className="object-cover w-full aspect-square"
                      />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Twitter className="h-4 w-4 mr-2" /> Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Mail className="h-4 w-4 mr-2" /> Email
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-4 border-primary">
                      <Quote className="absolute -left-4 -top-2 h-8 w-8 text-primary bg-background p-1 rounded-full" />
                      <p className="italic text-xl">
                        "My vision for Dousue Petroleum has always been to provide reliable fuel solutions that empower
                        businesses across Zambia and Congo to thrive without worrying about their energy needs."
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Biography</h3>
                      <p className="text-muted-foreground">
                        John Dousue founded Dousue Petroleum Limited in 2010 with a vision to transform the fuel supply
                        industry in Zambia and neighboring regions. With over 20 years of experience in the petroleum
                        sector, John identified critical gaps in the market, particularly in reliability, quality, and
                        customer service.
                      </p>
                      <p className="text-muted-foreground">
                        Prior to establishing Dousue Petroleum, John worked with several multinational energy companies,
                        gaining valuable insights into global best practices and innovative approaches to fuel
                        distribution and management. His experience spans across operations, logistics, and strategic
                        business development.
                      </p>
                      <p className="text-muted-foreground">
                        John holds a Master's degree in Business Administration and a Bachelor's degree in Petroleum
                        Engineering. His technical expertise combined with business acumen has been instrumental in
                        positioning Dousue Petroleum as a leading fuel provider in the region.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-muted rounded-lg p-4">
                        <h4 className="font-medium mb-2">Education</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                            <span>MBA, Business Administration</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                            <span>BSc, Petroleum Engineering</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h4 className="font-medium mb-2">Expertise</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                            <span>Fuel Supply Chain Management</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                            <span>Strategic Business Development</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                            <span>Petroleum Industry Operations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards & Recognition */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">Awards & Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <Award className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">Business Excellence Award</CardTitle>
                        <CardDescription>2019</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Recognized for outstanding contribution to the petroleum industry in Zambia.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <Award className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">Entrepreneur of the Year</CardTitle>
                        <CardDescription>2017</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Awarded for innovative business practices and market leadership.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <Award className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-lg">Supply Chain Innovation</CardTitle>
                        <CardDescription>2015</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Recognized for developing efficient fuel distribution networks.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Journey Tab */}
              <TabsContent value="journey" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8 text-center">The Founding Journey</h3>

                  {/* Timeline */}
                  <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
                    {/* Timeline Item 1 */}
                    <div className="relative">
                      <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div className="bg-card rounded-lg p-5 shadow-sm border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">Early Career</h4>
                          <Badge variant="outline">2000-2005</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          John began his career working with multinational energy companies, gaining experience in
                          various aspects of the petroleum industry. During this time, he developed a deep understanding
                          of fuel supply chains and identified opportunities for improvement.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative">
                      <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="bg-card rounded-lg p-5 shadow-sm border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">Market Research & Planning</h4>
                          <Badge variant="outline">2006-2009</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Recognizing the gaps in the market, John conducted extensive research and developed a business
                          plan for a new kind of fuel supply company. He focused on understanding the specific needs of
                          businesses in Zambia and Congo, particularly those in remote areas.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative">
                      <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                        <Star className="h-4 w-4" />
                      </div>
                      <div className="bg-card rounded-lg p-5 shadow-sm border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">Founding Dousue Petroleum</h4>
                          <Badge variant="outline">2010</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          With a clear vision and strategy, John founded Dousue Petroleum Limited. Starting with a
                          single delivery truck and a small team of dedicated professionals, the company focused on
                          reliability, quality, and exceptional customer service from day one.
                        </p>
                      </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="relative">
                      <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                      <div className="bg-card rounded-lg p-5 shadow-sm border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">Expansion & Growth</h4>
                          <Badge variant="outline">2011-Present</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Under John's leadership, Dousue Petroleum expanded its operations, fleet, and client base. The
                          company established strategic storage facilities and developed innovative solutions for fuel
                          management. Today, it serves a diverse portfolio of clients across multiple industries in
                          Zambia and Congo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">Industry Recognition</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Testimonial 1 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>MK</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">Michael Kabwe</CardTitle>
                            <CardDescription>Mining Industry Association</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm italic">
                          "John's leadership has transformed how the mining industry in Zambia accesses fuel. His
                          company's reliability has been crucial for our operations in remote areas."
                        </p>
                      </CardContent>
                    </Card>

                    {/* Testimonial 2 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>SC</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">Sarah Chanda</CardTitle>
                            <CardDescription>Chamber of Commerce</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm italic">
                          "John Dousue represents the kind of entrepreneurial spirit that is driving economic growth in
                          our region. His innovative approach to business challenges is exemplary."
                        </p>
                      </CardContent>
                    </Card>

                    {/* Testimonial 3 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>DM</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">David Mutale</CardTitle>
                            <CardDescription>Energy Sector Analyst</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm italic">
                          "What sets John apart is his deep understanding of both the technical and business aspects of
                          the petroleum industry. This dual expertise has been key to Dousue Petroleum's success."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Vision Tab */}
              <TabsContent value="vision" className="space-y-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h3 className="text-2xl font-bold mb-4">Leadership Vision & Philosophy</h3>
                  <p className="text-muted-foreground">
                    John's leadership approach is built on core principles that guide both his personal conduct and the
                    company's operations.
                  </p>
                </div>

                {/* Leadership Philosophy */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-center">Integrity</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Maintaining the highest ethical standards in all business dealings and relationships.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-center">Innovation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Continuously seeking better ways to serve customers and improve operations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-center">Empowerment</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Developing team members' skills and providing opportunities for growth.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-center">Accountability</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Taking responsibility for actions and outcomes at all levels of the organization.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Strategic Goals */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">Strategic Vision</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-4">Company Goals</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">
                              Becoming the most trusted fuel provider in Central and Southern Africa
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Building a reputation for reliability and quality that makes Dousue Petroleum the first
                              choice for businesses.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Expanding service network across the region</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Strategically growing our presence to reach more businesses in need of reliable fuel
                              solutions.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Investing in innovative technologies</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Adopting new solutions to enhance efficiency and reduce environmental impact across
                              operations.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-4">Community Impact</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Supporting local economic development</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Creating jobs and business opportunities that contribute to community prosperity.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Environmental responsibility</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Implementing practices that minimize the environmental footprint of fuel distribution.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Education and skills development</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Investing in programs that develop local talent and expertise in the petroleum sector.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CEO Message */}
                <div className="mt-12 max-w-3xl mx-auto">
                  <div className="relative mx-auto p-8 bg-muted rounded-xl">
                    <Quote className="absolute -left-3 -top-3 h-10 w-10 text-primary bg-background p-2 rounded-full" />
                    <Quote className="absolute -right-3 -bottom-3 h-10 w-10 text-primary bg-background p-2 rounded-full rotate-180" />
                    <p className="italic text-lg md:text-xl">
                      "As we look to the future, our commitment to excellence remains unwavering. We understand that
                      reliable fuel supply is not just about delivering a product—it's about empowering businesses to
                      operate without disruption, enabling growth, and contributing to economic development across our
                      region. I invite you to join us on this journey as we continue to innovate and expand our services
                      to meet the evolving needs of our clients."
                    </p>
                    <p className="mt-6 font-bold text-right">— John Dousue, Founder & CEO</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Video Message Section (Placeholder) */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">A Message From Our CEO</h2>
              <p className="text-muted-foreground mt-2">Hear directly from John about our mission and values</p>
            </div>
            <div className="max-w-3xl mx-auto relative aspect-video bg-black/5 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center p-8">
                <Button size="lg" className="rounded-full h-16 w-16 flex items-center justify-center">
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
                    className="ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </Button>
                <p className="mt-4 text-muted-foreground">Video message from John Dousue</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact the CEO */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold">Connect With Our Leadership</h2>
              <p className="text-muted-foreground mt-2">
                Have questions or insights for our CEO? We'd love to hear from you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Ways to reach our leadership team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">john.dousue@dousuepetroleum.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/johndousue</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Twitter className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Twitter</p>
                      <p className="text-sm text-muted-foreground">@JohnDousue</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Meeting</CardTitle>
                  <CardDescription>Request a virtual meeting with our CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input id="name" className="w-full p-2 rounded-md border" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company
                        </label>
                        <input id="company" className="w-full p-2 rounded-md border" placeholder="Your company" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 rounded-md border"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 rounded-md border h-24"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Request Meeting</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

