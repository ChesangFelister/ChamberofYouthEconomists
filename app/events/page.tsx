import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Award, BookOpen } from "lucide-react"
import { HoverCard } from "@/components/hover-card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12">
      <AnimatedSection direction="up">
        <h1 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">Upcoming Events</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Join us at our upcoming events where young economists gather to share ideas, network with professionals, and
          develop solutions to pressing economic challenges.
        </p>
      </AnimatedSection>

      <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" delay={0.1}>
        <HoverCard
          variant="lift"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-100 dark:border-green-800"
        >
          <div className="h-48 relative">
            <Image src="/economics-conference.png" alt="Annual Conference" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-bold">UPCOMING</div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-gray-500">June 15-17, 2025</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-300">Annual Economics Conference</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join us for our flagship event featuring keynote speakers, panel discussions, and networking
              opportunities.
            </p>
            <div className="flex items-center mb-4 text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
            </div>
            <Button className="w-full">Register Now</Button>
          </div>
        </HoverCard>

        <HoverCard
          variant="lift"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-100 dark:border-green-800"
        >
          <div className="h-48 relative">
            <Image src="/economics-workshop-session.jpeg" alt="Policy Workshop" fill className="object-cover" />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-gray-500">July 8, 2025</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-300">Economic Policy Workshop</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A hands-on workshop focused on developing practical policy solutions for current economic challenges.
            </p>
            <div className="flex items-center mb-4 text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
            </div>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </div>
        </HoverCard>

        <HoverCard
          variant="lift"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-100 dark:border-green-800"
        >
          <div className="h-48 relative">
            <Image
              src="/economics-conference-discussion.jpeg"
              alt="Young Professionals Forum"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-gray-500">August 22, 2025</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-300">Young Professionals Forum</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A networking event designed specifically for young economists to connect and share ideas.
            </p>
            <div className="flex items-center mb-4 text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
            </div>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </div>
        </HoverCard>
      </StaggeredChildren>

      <AnimatedSection direction="up" delay={0.2}>
        <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300 mt-16">Past Events</h2>
      </AnimatedSection>

      <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" delay={0.3}>
        <Card className="overflow-hidden border-green-100 dark:border-green-800">
          <div className="h-64 relative">
            <Image src="/economics-award-ceremony.jpeg" alt="Annual Awards Ceremony" fill className="object-cover" />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl text-green-700 dark:text-green-300">
                Young Economists Excellence Awards
              </CardTitle>
              <Award className="h-5 w-5 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-3 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" /> March 15, 2025
              <span className="mx-2">•</span>
              <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Our annual awards ceremony recognized outstanding young economists who have made significant contributions
              to economic research and policy development.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View Event Gallery
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-green-100 dark:border-green-800">
          <div className="h-64 relative">
            <Image src="/economics-networking-event.jpeg" alt="Networking Session" fill className="object-cover" />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl text-green-700 dark:text-green-300">
                Economic Policy Networking Session
              </CardTitle>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-3 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" /> February 28, 2025
              <span className="mx-2">•</span>
              <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Young economists connected with industry professionals and policymakers to discuss current economic trends
              and career opportunities.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View Event Highlights
            </Button>
          </CardFooter>
        </Card>
      </StaggeredChildren>

      <AnimatedSection direction="up" delay={0.4}>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Featured Event</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/economics-conference-discussion.jpeg"
                alt="Annual Economic Summit"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
                East African Economic Summit
              </h3>
              <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-300">
                <Calendar className="h-4 w-4 mr-1" /> September 10-12, 2025
                <span className="mx-2">•</span>
                <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join us for our flagship regional summit bringing together economists, policymakers, and business
                leaders from across East Africa. This three-day event will feature keynote presentations, panel
                discussions, and workshops focused on regional economic integration and sustainable development.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Event Schedule</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Three days of keynotes, panels, and networking
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Participants</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      300+ economists and policymakers from East Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Topics</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Regional integration, sustainable development, and policy innovation
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Register Interest
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.5}>
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Monthly Workshops</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We host monthly workshops on various economic topics. These sessions are open to members and provide
            valuable insights and practical skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-green-100 dark:border-green-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 dark:text-green-300">Economic Modeling</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn practical economic modeling techniques with real-world applications.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500">First Tuesday of each month</div>
              </CardFooter>
            </Card>

            <Card className="border-green-100 dark:border-green-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 dark:text-green-300">Policy Analysis</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Develop skills in analyzing and evaluating economic policies.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500">Second Wednesday of each month</div>
              </CardFooter>
            </Card>

            <Card className="border-green-100 dark:border-green-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 dark:text-green-300">Research Methods</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Enhance your economic research skills with expert guidance.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500">Third Thursday of each month</div>
              </CardFooter>
            </Card>

            <Card className="border-green-100 dark:border-green-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 dark:text-green-300">Career Development</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Navigate career paths in economics with mentorship and guidance.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500">Fourth Friday of each month</div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.6}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-green-100 dark:border-green-800">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">Host an Event with Us</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating with the Chamber of Youth Economists for an event? We're always looking for
              partners to host workshops, seminars, and conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">Why Partner With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Access to a network of young economists and professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Expertise in organizing economic forums and workshops
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Platform to showcase your organization's commitment to economic development
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Opportunity to contribute to economic policy discussions
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <Button asChild>
                  <Link href="/contact">Contact Us About Events</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/economics-workshop-session.jpeg" alt="Workshop Session" fill className="object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
