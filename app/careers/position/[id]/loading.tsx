import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function PositionLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <Skeleton className="h-8 w-24 mb-8" />

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Skeleton className="h-6 w-20 mb-4" />
                <Skeleton className="h-12 w-3/4 mb-4" />

                <div className="flex flex-wrap gap-4 mb-6">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-32" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>

              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-24 mb-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array(6)
                    .fill(null)
                    .map((_, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    ))}
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
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
                <div className="mb-8">
                  <div className="flex space-x-2 mb-8">
                    {Array(4)
                      .fill(null)
                      .map((_, i) => (
                        <Skeleton key={i} className="h-10 w-28" />
                      ))}
                  </div>

                  <Skeleton className="h-6 w-48 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />

                  <Skeleton className="h-6 w-36 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </div>

                <Card className="mb-8">
                  <CardHeader>
                    <Skeleton className="h-6 w-32 mb-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Array(3)
                        .fill(null)
                        .map((_, i) => (
                          <Skeleton key={i} className="h-24 w-full" />
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-12">
                  <Skeleton className="h-6 w-48 mb-6" />
                  <div className="space-y-8">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <div key={i} className="flex items-start gap-6">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="flex-1">
                            <Skeleton className="h-6 w-32 mb-2" />
                            <Skeleton className="h-4 w-full" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array(3)
                      .fill(null)
                      .map((_, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Skeleton className="h-5 w-5" />
                          <div className="flex-1">
                            <Skeleton className="h-5 w-32 mb-1" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array(3)
                      .fill(null)
                      .map((_, i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                      ))}
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-10 w-full" />
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Skeleton className="h-8 w-64 mx-auto mb-2" />
                <Skeleton className="h-4 w-96 mx-auto" />
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Array(2)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i} className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full" />
                          </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Array(2)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i} className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full" />
                          </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-32 w-full" />
                    </div>

                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-32 w-full" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-96" />
                    </div>

                    <Skeleton className="h-12 w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

