"use client"

import { useState } from "react"
import {
  BarChart3,
  TrendingUp,
  Truck,
  Calendar,
  Clock,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  Filter,
  ChevronDown,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CustomerDashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="w-full h-full bg-background rounded-lg border overflow-hidden flex flex-col">
      {/* Dashboard Header */}
      <div className="border-b px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="bg-primary p-1 rounded">
            <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
          </div>
          <h1 className="font-bold text-sm sm:text-lg">Dousue Customer Portal</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
              3
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>ZM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Zambia Mining Corp</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@zambiamining.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 overflow-auto p-3 sm:p-6">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div>
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight">Welcome back, Zambia Mining Corp</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Here's what's happening with your fuel supplies today.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" className="text-xs sm:text-sm h-8 sm:h-10">
              <Truck className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              New Order
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="deliveries">Deliveries</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
            {/* Stats Cards */}
            <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
              <Card className="p-2 sm:p-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 px-2 sm:px-6 pt-2 sm:pt-6">
                  <CardTitle className="text-xs sm:text-sm font-medium">Total Fuel Consumption</CardTitle>
                  <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="px-2 sm:px-6 pb-2 sm:pb-6">
                  <div className="text-base sm:text-2xl font-bold">142,500 L</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    <span className="text-green-500 flex items-center">
                      <TrendingUp className="mr-1 h-2 w-2 sm:h-3 sm:w-3" />
                      +12.5% from last month
                    </span>
                  </p>
                  <Progress className="mt-2 sm:mt-3 h-1" value={75} />
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 px-2 sm:px-6 pt-2 sm:pt-6">
                  <CardTitle className="text-xs sm:text-sm font-medium">Active Orders</CardTitle>
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="px-2 sm:px-6 pb-2 sm:pb-6">
                  <div className="text-base sm:text-2xl font-bold">3</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    <span className="flex items-center">2 scheduled, 1 in transit</span>
                  </p>
                  <div className="mt-2 sm:mt-3 flex -space-x-1 sm:-space-x-2">
                    <Avatar className="h-4 w-4 sm:h-6 sm:w-6 border-2 border-background">
                      <AvatarFallback className="bg-primary text-[8px] sm:text-[10px] text-primary-foreground">
                        D1
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-4 w-4 sm:h-6 sm:w-6 border-2 border-background">
                      <AvatarFallback className="bg-green-500 text-[8px] sm:text-[10px] text-white">D2</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-4 w-4 sm:h-6 sm:w-6 border-2 border-background">
                      <AvatarFallback className="bg-orange-500 text-[8px] sm:text-[10px] text-white">D3</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 px-2 sm:px-6 pt-2 sm:pt-6">
                  <CardTitle className="text-xs sm:text-sm font-medium">Current Fuel Levels</CardTitle>
                  <Truck className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="px-2 sm:px-6 pb-2 sm:pb-6">
                  <div className="text-base sm:text-2xl font-bold">42%</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    <span className="text-yellow-500 flex items-center">
                      <AlertTriangle className="mr-1 h-2 w-2 sm:h-3 sm:w-3" />
                      Refill recommended
                    </span>
                  </p>
                  <Progress className="mt-2 sm:mt-3 h-1" value={42} />
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 px-2 sm:px-6 pt-2 sm:pt-6">
                  <CardTitle className="text-xs sm:text-sm font-medium">Next Delivery</CardTitle>
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="px-2 sm:px-6 pb-2 sm:pb-6">
                  <div className="text-base sm:text-2xl font-bold">Tomorrow</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    <span className="flex items-center">10:00 AM - 12:00 PM</span>
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center text-[10px] sm:text-xs">
                    <Badge variant="outline" className="mr-2 text-[8px] sm:text-xs">
                      Diesel
                    </Badge>
                    <span>5,000 L</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity - simplified for mobile */}
            <Card className="p-2 sm:p-0">
              <CardHeader className="px-2 sm:px-6 pt-2 sm:pt-6 pb-1 sm:pb-2">
                <CardTitle className="text-sm sm:text-base">Recent Activity</CardTitle>
                <CardDescription className="text-[10px] sm:text-sm">
                  Your latest fuel orders and deliveries
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2 sm:px-6 pb-2 sm:pb-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between border-b pb-3 sm:pb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-green-500/10 p-1 sm:p-2 rounded-full">
                        <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-xs sm:text-base">Delivery Completed</p>
                        <p className="text-[10px] sm:text-sm text-muted-foreground">
                          Order #DOU-2023-8842 - 10,000 L Diesel
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-sm text-muted-foreground">2 days ago</div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3 sm:pb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-blue-500/10 p-1 sm:p-2 rounded-full">
                        <Truck className="h-3 w-3 sm:h-5 sm:w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-xs sm:text-base">Order Placed</p>
                        <p className="text-[10px] sm:text-sm text-muted-foreground">
                          Order #DOU-2023-8845 - 5,000 L Diesel
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-sm text-muted-foreground">Yesterday</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-yellow-500/10 p-1 sm:p-2 rounded-full">
                        <AlertTriangle className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-medium text-xs sm:text-base">Low Fuel Alert</p>
                        <p className="text-[10px] sm:text-sm text-muted-foreground">
                          Main Storage Tank - 42% Remaining
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-sm text-muted-foreground">Just now</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-2 sm:px-6 pb-2 sm:pb-6 pt-0">
                <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-10">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="pt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Orders</CardTitle>
                    <CardDescription>Manage and track your fuel orders</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search orders..." className="pl-10 w-[250px]" />
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Filter className="mr-2 h-4 w-4" />
                          Filter
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>All Orders</DropdownMenuItem>
                        <DropdownMenuItem>Pending</DropdownMenuItem>
                        <DropdownMenuItem>In Transit</DropdownMenuItem>
                        <DropdownMenuItem>Delivered</DropdownMenuItem>
                        <DropdownMenuItem>Cancelled</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="md:hidden space-y-4">
                    {[
                      {
                        id: "#DOU-2023-8845",
                        date: "Dec 15, 2023",
                        product: "Diesel",
                        quantity: "5,000 L",
                        status: "Scheduled",
                      },
                      {
                        id: "#DOU-2023-8844",
                        date: "Dec 10, 2023",
                        product: "Petrol",
                        quantity: "3,000 L",
                        status: "In Transit",
                      },
                      {
                        id: "#DOU-2023-8842",
                        date: "Dec 5, 2023",
                        product: "Diesel",
                        quantity: "10,000 L",
                        status: "Delivered",
                      },
                      {
                        id: "#DOU-2023-8840",
                        date: "Nov 28, 2023",
                        product: "Diesel",
                        quantity: "8,000 L",
                        status: "Delivered",
                      },
                      {
                        id: "#DOU-2023-8835",
                        date: "Nov 15, 2023",
                        product: "Kerosene",
                        quantity: "2,000 L",
                        status: "Delivered",
                      },
                    ].map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{order.id}</div>
                          <Badge
                            className={`${
                              order.status === "Delivered"
                                ? "bg-green-500"
                                : order.status === "In Transit"
                                  ? "bg-blue-500"
                                  : "bg-orange-500"
                            }`}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-y-1 text-sm">
                          <span className="text-muted-foreground">Date:</span>
                          <span>{order.date}</span>
                          <span className="text-muted-foreground">Product:</span>
                          <span>{order.product}</span>
                          <span className="text-muted-foreground">Quantity:</span>
                          <span>{order.quantity}</span>
                        </div>
                        <div className="flex justify-end gap-2 mt-3">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            {order.status === "Delivered" ? "Invoice" : "Track"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-md border">
                    <div className="hidden md:grid md:grid-cols-6 p-4 text-sm font-medium">
                      <div>Order ID</div>
                      <div>Date</div>
                      <div>Product</div>
                      <div>Quantity</div>
                      <div>Status</div>
                      <div className="text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-6 items-center p-4">
                        <div className="font-medium">#DOU-2023-8845</div>
                        <div className="text-sm">Dec 15, 2023</div>
                        <div>Diesel</div>
                        <div>5,000 L</div>
                        <div>
                          <Badge className="bg-orange-500">Scheduled</Badge>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Track
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 items-center p-4">
                        <div className="font-medium">#DOU-2023-8844</div>
                        <div className="text-sm">Dec 10, 2023</div>
                        <div>Petrol</div>
                        <div>3,000 L</div>
                        <div>
                          <Badge className="bg-blue-500">In Transit</Badge>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Track
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 items-center p-4">
                        <div className="font-medium">#DOU-2023-8842</div>
                        <div className="text-sm">Dec 5, 2023</div>
                        <div>Diesel</div>
                        <div>10,000 L</div>
                        <div>
                          <Badge className="bg-green-500">Delivered</Badge>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Invoice
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 items-center p-4">
                        <div className="font-medium">#DOU-2023-8840</div>
                        <div className="text-sm">Nov 28, 2023</div>
                        <div>Diesel</div>
                        <div>8,000 L</div>
                        <div>
                          <Badge className="bg-green-500">Delivered</Badge>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Invoice
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 items-center p-4">
                        <div className="font-medium">#DOU-2023-8835</div>
                        <div className="text-sm">Nov 15, 2023</div>
                        <div>Kerosene</div>
                        <div>2,000 L</div>
                        <div>
                          <Badge className="bg-green-500">Delivered</Badge>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Invoice
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Showing 5 of 24 orders</div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="deliveries" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deliveries</CardTitle>
                <CardDescription>Track your scheduled fuel deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-orange-500/10 p-2 rounded-full">
                          <Truck className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">Order #DOU-2023-8845</h3>
                          <p className="text-sm text-muted-foreground">5,000 L Diesel</p>
                        </div>
                      </div>
                      <Badge className="bg-orange-500">Tomorrow</Badge>
                    </div>
                    <div className="mt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Delivery Window:</span>
                          <span>10:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Delivery Location:</span>
                          <span>Main Site, Lusaka</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Driver Contact:</span>
                          <span>+260 123 456 789</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm">Track Delivery</Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500/10 p-2 rounded-full">
                          <Truck className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">Order #DOU-2023-8844</h3>
                          <p className="text-sm text-muted-foreground">3,000 L Petrol</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-500">In Transit</Badge>
                    </div>
                    <div className="mt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Estimated Arrival:</span>
                          <span>Today, 4:30 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Current Location:</span>
                          <span>25 km away</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Driver Contact:</span>
                          <span>+260 987 654 321</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-3/4"></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Departed</span>
                          <span>In Transit</span>
                          <span>Arrived</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm">Live Tracking</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="pt-6">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Consumption by Fuel Type</CardTitle>
                  <CardDescription>Last 6 months breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <div className="flex h-full items-end gap-2">
                      <div className="flex-1 flex flex-col space-y-2">
                        <div className="flex-1 bg-blue-500/20 rounded-t relative group">
                          <div className="absolute inset-x-0 bottom-0 bg-blue-500 rounded-t h-[70%]"></div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-background border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Diesel: 105,000 L
                          </div>
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Diesel</span>
                      </div>
                      <div className="flex-1 flex flex-col space-y-2">
                        <div className="flex-1 bg-green-500/20 rounded-t relative group">
                          <div className="absolute inset-x-0 bottom-0 bg-green-500 rounded-t h-[25%]"></div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-background border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Petrol: 35,000 L
                          </div>
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Petrol</span>
                      </div>
                      <div className="flex-1 flex flex-col space-y-2">
                        <div className="flex-1 bg-orange-500/20 rounded-t relative group">
                          <div className="absolute inset-x-0 bottom-0 bg-orange-500 rounded-t h-[5%]"></div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-background border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Kerosene: 2,500 L
                          </div>
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Kerosene</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                  <CardDescription>Monthly spending on fuel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <div className="flex h-full items-end gap-2">
                      {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => {
                        const heights = [60, 75, 50, 65, 85, 70]
                        return (
                          <div key={month} className="relative flex-1 group">
                            <div
                              className="absolute inset-x-0 bottom-0 bg-primary/20 rounded-t"
                              style={{ height: `${heights[i]}%` }}
                            ></div>
                            <div
                              className="absolute inset-x-0 bottom-0 bg-primary rounded-t transition-all duration-500"
                              style={{ height: `${heights[i] * 0.7}%` }}
                            ></div>
                            <div className="absolute inset-x-0 -bottom-6 text-center text-xs text-muted-foreground">
                              {month}
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-background border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                              ${(heights[i] * 500).toLocaleString()}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Efficiency Metrics</CardTitle>
                  <CardDescription>Tracking your fuel usage efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium">Cost per Kilometer</h4>
                        <span className="text-sm font-medium">$0.42</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-muted-foreground">15% below industry average</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium">Fuel Efficiency</h4>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                      <p className="text-xs text-muted-foreground">5% improvement from last quarter</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium">Carbon Footprint</h4>
                        <span className="text-sm font-medium">125 tons</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      <p className="text-xs text-muted-foreground">10% reduction year-over-year</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

