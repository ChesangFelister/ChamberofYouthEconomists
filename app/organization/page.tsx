import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, ExternalLink, Users, Award, Target } from "lucide-react"
import { HoverCard } from "@/components/hover-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrganizationPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-4">Our Organization</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          The Chamber of Youth Economists operates with a clear organizational structure designed to maximize impact and
          foster collaboration among young economists across Africa and beyond.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-700 dark:text-green-300">About Our Organization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-100 dark:border-green-800">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-green-700 dark:text-green-300">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                To create a more equitable and sustainable world by providing access to education, healthcare, and
                economic opportunities for all.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-green-700 dark:text-green-300">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                A dedicated team of 11-50 professionals committed to driving positive change through innovative
                solutions and sustainable practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-green-700 dark:text-green-300">Our Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Since 2024, we've been working collaboratively with partners and stakeholders to address pressing
                economic challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-700 dark:text-green-300">Leadership Structure</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-green-100 dark:border-green-800">
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
            <Image
              src="/leadership-structure.png"
              alt="Chamber of Youth Economists Leadership Structure"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
            Our organizational structure ensures effective governance and professional expertise across all areas of
            economic policy and development.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-green-700 dark:text-green-300">Executive Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HoverCard
            variant="glow"
            color="rgba(0, 128, 0, 0.1)"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-green-100 dark:border-green-800"
          >
            <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image src="/young-woman-professional-headshot.png" alt="Sarah Johnson" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-green-700 dark:text-green-300">Sarah Johnson</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-3">President & Founder</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Leading the organization's strategic vision and policy research initiatives. Expertise in economic
              development and youth empowerment across East Africa.
            </p>
            <div className="flex justify-center space-x-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 p-2 rounded-full transition-colors group"
                aria-label="Sarah Johnson's LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:sarah.johnson@chamberofyoutheconomists.org"
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 p-2 rounded-full transition-colors group"
                aria-label="Email Sarah Johnson"
              >
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>🎓 Economics & Development Studies</p>
            </div>
          </HoverCard>

          <HoverCard
            variant="glow"
            color="rgba(0, 128, 0, 0.1)"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-green-100 dark:border-green-800"
          >
            <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image src="/young-man-professional-headshot.png" alt="Michael Chen" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-green-700 dark:text-green-300">Michael Chen</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-3">Vice President</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Specializes in macroeconomic policy and international trade relations. Leads our research initiatives and
              partnerships with international organizations.
            </p>
            <div className="flex justify-center space-x-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 p-2 rounded-full transition-colors group"
                aria-label="Michael Chen's LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:michael.chen@chamberofyoutheconomists.org"
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 p-2 rounded-full transition-colors group"
                aria-label="Email Michael Chen"
              >
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>🎓 International Economics</p>
            </div>
          </HoverCard>

          <HoverCard
            variant="glow"
            color="rgba(0, 128, 0, 0.1)"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-green-100 dark:border-green-800"
          >
            <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image src="/young-woman-glasses-headshot.png" alt="Amara Okafor" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-green-700 dark:text-green-300">Amara Okafor</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-3">Secretary General</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Expert in development economics with a focus on African economies and sustainable growth models.
              Coordinates our educational programs and member engagement.
            </p>
            <div className="flex justify-center space-x-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 p-2 rounded-full transition-colors group"
                aria-label="Amara Okafor's LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:amara.okafor@chamberofyoutheconomists.org"
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 p-2 rounded-full transition-colors group"
                aria-label="Email Amara Okafor"
              >
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>🎓 Development Economics</p>
            </div>
          </HoverCard>

          <HoverCard
            variant="glow"
            color="rgba(0, 128, 0, 0.1)"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-green-100 dark:border-green-800"
          >
            <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image src="/team-meeting.jpeg" alt="David Kimani" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-green-700 dark:text-green-300">David Kimani</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-3">Treasurer</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Financial management and strategic planning expert. Oversees organizational finances and ensures
              sustainable growth and resource allocation.
            </p>
            <div className="flex justify-center space-x-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 p-2 rounded-full transition-colors group"
                aria-label="David Kimani's LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:david.kimani@chamberofyoutheconomists.org"
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 p-2 rounded-full transition-colors group"
                aria-label="Email David Kimani"
              >
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>🎓 Finance & Economics</p>
            </div>
          </HoverCard>

          <HoverCard
            variant="glow"
            color="rgba(0, 128, 0, 0.1)"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-green-100 dark:border-green-800"
          >
            <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image src="/team-group.jpeg" alt="Grace Wanjiku" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-green-700 dark:text-green-300">Grace Wanjiku</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-3">Director of Programs</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Leads program development and implementation. Specializes in youth empowerment initiatives and educational
              outreach programs.
            </p>
            <div className="flex justify-center space-x-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 p-2 rounded-full transition-colors group"
                aria-label="Grace Wanjiku's LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:grace.wanjiku@chamberofyoutheconomists.org"
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 p-2 rounded-full transition-colors group"
                aria-label="Email Grace Wanjiku"
              >
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>🎓 Public Policy & Administration</p>
            </div>
          </HoverCard>

          <HoverCard
            variant="glow"
            color="rgba(0, 128, 0, 0.1)"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border border-green-100 dark:border-green-800"
          >
            <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image src="/discussion-meeting.jpeg" alt="James Mwangi" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-xl mb-1 text-green-700 dark:text-green-300">James Mwangi</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-3">Research Director</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Heads our research initiatives and policy analysis. Expert in economic modeling and data analysis with
              focus on emerging market economies.
            </p>
            <div className="flex justify-center space-x-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 p-2 rounded-full transition-colors group"
                aria-label="James Mwangi's LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:james.mwangi@chamberofyoutheconomists.org"
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 p-2 rounded-full transition-colors group"
                aria-label="Email James Mwangi"
              >
                <Mail className="h-4 w-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>🎓 Econometrics & Statistics</p>
            </div>
          </HoverCard>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">Connect with Our Team</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our leadership team is always open to connecting with fellow economists, researchers, and anyone interested
            in our mission. Reach out to us through LinkedIn or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="https://www.linkedin.com/company/chamber-of-youth-economists/" target="_blank">
                <Linkedin className="h-4 w-4 mr-2" />
                Follow us on LinkedIn
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/membership">Join Our Organization</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-green-700 dark:text-green-300">Organizational Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-100 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in open communication and transparent operations. All our activities, research, and
                decision-making processes are conducted with full transparency to our members and stakeholders.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We encourage innovative thinking and creative solutions to economic challenges. Our young economists
                bring fresh perspectives to traditional economic problems.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We foster a collaborative environment where young economists can work together, share knowledge, and
                learn from each other's experiences and expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Every initiative we undertake is designed to create meaningful, measurable impact on economic
                development and youth empowerment in our communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
