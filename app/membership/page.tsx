import Link from "next/link"
import { BookOpen, Briefcase, CheckCircle, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function MembershipPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary-gradient">
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 dark:text-green-300">
                Join Our Community
              </h1>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Become a member of the Chamber of Youth Economists and contribute to solving economic challenges through
                collaboration, innovation, and practical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 section-divider-gradient">
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-green-700">Membership Benefits</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The Chamber provides young professionals with opportunities for participation in policymaking
                  processes, access to mentorship from industry experts, and development of leadership skills as a means
                  of advancing socioeconomic transformation.
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Participation in Policymaking</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Engage in economic research, draft memoranda, and propose policy solutions to real-world economic
                      challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Mentorship & Networking</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Access a network of experienced economists, academics, and industry experts who provide
                      mentorship, share insights, and inspire the next generation of economic thinkers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Leadership Development</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Develop leadership skills through participation in Chamber activities, committees, and initiatives
                      focused on solving economic problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Exclusive Events & Resources</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Gain access to member-only events, workshops, publications, and resources designed to enhance your
                      economic knowledge and career prospects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Professional Recognition</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Build your professional reputation through association with a respected organization dedicated to
                      economic development and policy innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter text-green-700">Membership Types</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-green-100 hover:border-green-200 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-green-100 p-2 text-green-600">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">Economists</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        For professionals with economics training who want to participate in policymaking processes and
                        leadership opportunities.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-100 hover:border-green-200 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-green-100 p-2 text-green-600">
                          <FileText className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">Policy Experts</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        For those with specialized knowledge in public policy who can contribute to research, drafting,
                        and advocacy efforts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-100 hover:border-green-200 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-green-100 p-2 text-green-600">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">Public Finance Experts</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        For professionals who can provide perspective on public finance to inform policy research and
                        advocacy work.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-100 hover:border-green-200 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-green-100 p-2 text-green-600">
                          <Users className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">Development Experts</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        For those who can ensure socioeconomic growth principles are reflected in the Chamber's policy
                        research and advocacy work.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="mt-10 space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter text-green-700">Application Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Application Review</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Our team will review your application within 5-7 business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Interview</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Selected applicants will be invited for a brief interview (in-person or virtual).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Acceptance</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Successful applicants will receive an acceptance notification with membership details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold">Onboarding</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Complete the onboarding process to gain access to member benefits and resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tighter mb-6 text-green-700">Membership Application Form</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          required
                          className="border-green-200 focus-visible:ring-green-500 dark:border-green-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          placeholder="Enter your country"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Enter your city"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Professional Background</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="current-position">Current Position</Label>
                        <Input
                          id="current-position"
                          placeholder="Enter your current position"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          placeholder="Enter your organization"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select>
                        <SelectTrigger id="experience" className="border-green-200 focus-visible:ring-green-500">
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Education</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="highest-degree">Highest Degree</Label>
                        <Select>
                          <SelectTrigger id="highest-degree" className="border-green-200 focus-visible:ring-green-500">
                            <SelectValue placeholder="Select highest degree" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field-of-study">Field of Study</Label>
                        <Input
                          id="field-of-study"
                          placeholder="Enter your field of study"
                          required
                          className="border-green-200 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        placeholder="Enter your educational institution"
                        required
                        className="border-green-200 focus-visible:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Membership Type</h3>
                    <div className="space-y-2">
                      <RadioGroup defaultValue="economist">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem
                            value="economist"
                            id="economist"
                            className="border-green-500 text-green-600"
                          />
                          <Label htmlFor="economist" className="font-normal">
                            Economist
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem
                            value="policy-expert"
                            id="policy-expert"
                            className="border-green-500 text-green-600"
                          />
                          <Label htmlFor="policy-expert" className="font-normal">
                            Policy Expert
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem
                            value="finance-expert"
                            id="finance-expert"
                            className="border-green-500 text-green-600"
                          />
                          <Label htmlFor="finance-expert" className="font-normal">
                            Public Finance Expert
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem
                            value="development-expert"
                            id="development-expert"
                            className="border-green-500 text-green-600"
                          />
                          <Label htmlFor="development-expert" className="font-normal">
                            Development Expert
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Areas of Interest/Expertise</h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="macroeconomics" className="border-green-500 text-green-600" />
                        <Label htmlFor="macroeconomics" className="font-normal">
                          Macroeconomics
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="microeconomics" className="border-green-500 text-green-600" />
                        <Label htmlFor="microeconomics" className="font-normal">
                          Microeconomics
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="development-economics" className="border-green-500 text-green-600" />
                        <Label htmlFor="development-economics" className="font-normal">
                          Development Economics
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="international-economics" className="border-green-500 text-green-600" />
                        <Label htmlFor="international-economics" className="font-normal">
                          International Economics
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="public-finance" className="border-green-500 text-green-600" />
                        <Label htmlFor="public-finance" className="font-normal">
                          Public Finance
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="monetary-policy" className="border-green-500 text-green-600" />
                        <Label htmlFor="monetary-policy" className="font-normal">
                          Monetary Policy
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="fiscal-policy" className="border-green-500 text-green-600" />
                        <Label htmlFor="fiscal-policy" className="font-normal">
                          Fiscal Policy
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="economic-development" className="border-green-500 text-green-600" />
                        <Label htmlFor="economic-development" className="font-normal">
                          Economic Development
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to join the Chamber of Youth Economists?</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Please describe your motivation for joining and how you hope to contribute"
                        className="min-h-[100px] border-green-200 focus-visible:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additional-info">Additional Information (Optional)</Label>
                      <Textarea
                        id="additional-info"
                        placeholder="Any other information you would like to share"
                        className="min-h-[100px] border-green-200 focus-visible:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required className="border-green-500 text-green-600" />
                      <Label htmlFor="terms" className="font-normal text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-green-600 hover:underline underline-offset-4">
                          terms and conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-green-600 hover:underline underline-offset-4">
                          privacy policy
                        </Link>
                        .
                      </Label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 text-lg shadow-md"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
