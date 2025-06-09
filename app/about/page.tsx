import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/80 z-10"></div>
        <Image src="/economics-conference.png" alt="Economics conference" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-6 md:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Learn about our mission, vision, and the team behind the Chamber of Youth Economists
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800 dark:text-emerald-300">Our Story</h2>
              <p className="mb-4">
                The Chamber of Youth Economists was founded in 2015 by a group of passionate young economists who saw
                the need for a platform where young professionals could collaborate, learn, and contribute to economic
                policy development.
              </p>
              <p className="mb-4">
                What started as a small group of like-minded individuals has grown into a global network of young
                economists dedicated to making a positive impact on society through economic knowledge and innovation.
              </p>
              <p className="mb-6">
                Today, the Chamber serves as a bridge between academic knowledge and practical application, providing
                young economists with the tools, resources, and connections they need to succeed in their careers and
                contribute to economic development.
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/membership">Join Our Community</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/team-meeting.jpeg" alt="Team meeting" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-800 dark:text-emerald-300">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-300">Excellence</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We strive for excellence in all our activities, from research and policy development to educational
                  programs and events.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-300">Collaboration</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We believe in the power of collaboration and teamwork to solve complex economic challenges and drive
                  innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-300">Integrity</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We uphold the highest standards of integrity, ethics, and professionalism in all our endeavors and
                  interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-300">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We encourage innovative thinking and creative approaches to economic challenges and opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">5</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-300">Inclusivity</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We value diversity and inclusivity, welcoming young economists from all backgrounds and perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-300">6</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-300">Impact</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We are committed to making a positive impact on society through economic knowledge, research, and
                  policy development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-800 dark:text-emerald-300">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/young-woman-professional-headshot.png" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-emerald-800 dark:text-emerald-300">Sarah Johnson</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium mb-3">President</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                PhD in Economics with expertise in macroeconomic policy and international development.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/young-man-professional-headshot.png" alt="Michael Chen" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-emerald-800 dark:text-emerald-300">Michael Chen</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium mb-3">Vice President</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Specializes in behavioral economics and public policy with extensive research experience.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/young-woman-glasses-headshot.png" alt="Aisha Patel" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-emerald-800 dark:text-emerald-300">Aisha Patel</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium mb-3">Research Director</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Expert in development economics with a focus on emerging markets and sustainable growth.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Link href="/organization">View Full Organization Structure</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become a member today and be part of a global network of young economists making a difference.
          </p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-6">
            <Link href="/membership">Apply for Membership</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
