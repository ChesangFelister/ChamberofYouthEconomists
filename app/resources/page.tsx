import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HoverCard } from "@/components/hover-card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Video, BookOpen, LinkIcon } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-12">
      <AnimatedSection direction="up">
        <h1 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">Resources</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Explore our collection of resources designed to deepen your understanding of economics and support your
          professional development as a young economist.
        </p>
      </AnimatedSection>

      <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" delay={0.1}>
        <HoverCard
          variant="scale"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-100 dark:border-green-800"
        >
          <div className="h-48 relative">
            <Image src="/economics-lecture.png" alt="Economics lecture" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-300">Research Papers</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Access our collection of research papers on various economic topics authored by our members and partners.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Papers
            </Button>
          </div>
        </HoverCard>

        <HoverCard
          variant="scale"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-100 dark:border-green-800"
        >
          <div className="h-48 relative">
            <Image src="/economics-panel.png" alt="Economics panel" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-300">Policy Briefs</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore our policy briefs that provide concise analysis and recommendations on current economic issues.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Briefs
            </Button>
          </div>
        </HoverCard>

        <HoverCard
          variant="scale"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-100 dark:border-green-800"
        >
          <div className="h-48 relative">
            <Image
              src="/economics-conference-discussion.jpeg"
              alt="Economics discussion"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-green-700 dark:text-green-300">Webinars & Lectures</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Watch recordings of our webinars and lectures featuring prominent economists and thought leaders.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Watch Videos
            </Button>
          </div>
        </HoverCard>
      </StaggeredChildren>

      <AnimatedSection direction="up" delay={0.2}>
        <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300 mt-16">Latest Publications</h2>
      </AnimatedSection>

      <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" delay={0.3}>
        <Card className="overflow-hidden border-green-100 dark:border-green-800">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl text-green-700 dark:text-green-300">
                Economic Development in East Africa: Challenges and Opportunities
              </CardTitle>
              <FileText className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This comprehensive report examines the current economic landscape in East Africa, identifying key
              challenges and emerging opportunities for sustainable development.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="font-medium">Authors:</span>
              <span className="ml-2">Sarah Johnson, Michael Chen, Amara Okafor</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-2" /> Download PDF
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-green-100 dark:border-green-800">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl text-green-700 dark:text-green-300">
                Youth Unemployment: Policy Solutions for Developing Economies
              </CardTitle>
              <FileText className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This policy brief presents innovative approaches to addressing youth unemployment in developing economies,
              with a focus on skills development and entrepreneurship.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="font-medium">Authors:</span>
              <span className="ml-2">James Mwangi, Grace Wanjiku</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-2" /> Download PDF
            </Button>
          </CardContent>
        </Card>
      </StaggeredChildren>

      <AnimatedSection direction="up" delay={0.4}>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300">Featured Resource</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
              <Image src="/economics-workshop-session.jpeg" alt="Workshop Session" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
                Economic Research Methodology: A Practical Guide for Young Economists
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This comprehensive guide provides young economists with practical tools and methodologies for conducting
                rigorous economic research. From data collection to analysis and presentation, this resource covers all
                aspects of the research process.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Contents</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Research design, data collection methods, statistical analysis, and presentation techniques
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Video className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Includes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      PDF guide, video tutorials, and practical exercises
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto flex items-center">
                <Download className="h-4 w-4 mr-2" /> Download Resource Pack
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.5}>
        <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300">Educational Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-green-100 dark:border-green-800">
            <div className="h-40 relative">
              <Image src="/economics-interview.png" alt="Economics basics" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-300">Economics Fundamentals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                A series of introductory materials covering basic economic concepts and principles.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <div className="h-40 relative">
              <Image src="/economics-award-ceremony.jpeg" alt="Data analysis" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-300">Data Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Resources for economic data analysis, including software guides and tutorials.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Access Tools
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <div className="h-40 relative">
              <Image src="/economics-networking-event.jpeg" alt="Career development" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-300">Career Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Guides and resources for building a successful career in economics.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Explore Resources
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-100 dark:border-green-800">
            <div className="h-40 relative">
              <Image src="/economics-conference-discussion.jpeg" alt="Policy writing" fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700 dark:text-green-300">Policy Writing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Learn how to write effective policy briefs and recommendations.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.6}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-green-100 dark:border-green-800">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">External Resources</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We've curated a collection of valuable external resources to support your learning and professional
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <LinkIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">World Bank Open Data</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Free and open access to global development data.
                </p>
                <Link
                  href="https://data.worldbank.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline flex items-center"
                >
                  Visit Website <LinkIcon className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <LinkIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">IMF Data</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Access to IMF's economic and financial data.
                </p>
                <Link
                  href="https://www.imf.org/en/Data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline flex items-center"
                >
                  Visit Website <LinkIcon className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <LinkIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">NBER Working Papers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Research papers from the National Bureau of Economic Research.
                </p>
                <Link
                  href="https://www.nber.org/papers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline flex items-center"
                >
                  Visit Website <LinkIcon className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <LinkIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  African Development Bank Data Portal
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Comprehensive data on African economies and development.
                </p>
                <Link
                  href="https://www.afdb.org/en/knowledge/statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline flex items-center"
                >
                  Visit Website <LinkIcon className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.7}>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Need Specific Resources?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us and our team will help you access the resources you need.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Our Resource Team</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  )
}
