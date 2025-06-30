"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart2, BookOpen, Calendar, Eye, GraduationCap, LineChart, Target, Users } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { HoverCard } from "@/components/hover-card"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { LearnMoreModal } from "@/components/learn-more-modal"

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Service card component with flip animation
function ServiceCard({
  icon: Icon,
  title,
  shortDescription,
  fullDescription,
  benefits,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  className?: string
}) {
  return (
    <div className="group h-36 sm:h-40 md:h-44" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg shadow-md p-3 sm:p-4 text-center flex flex-col justify-center ${className}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-center mb-2">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </div>
          <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1">{title}</h3>
          <p className="text-xs sm:text-xs opacity-80 leading-tight">{shortDescription}</p>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg shadow-md p-3 sm:p-4 text-center flex flex-col justify-center ${className}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="font-bold text-xs sm:text-sm md:text-base mb-2">{title}</h3>
          <p className="text-xs opacity-80 leading-tight mb-2">{fullDescription}</p>
          <div className="space-y-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="text-xs opacity-75 flex items-center justify-center">
                <span className="w-1 h-1 bg-current rounded-full mr-1 flex-shrink-0"></span>
                <span className="truncate">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(true)
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/80 z-10"></div>
        <Image
          src="/discussion-meeting.jpeg"
          alt="Young economists in discussion"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-6 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight"
          >
            EMPOWERING YOUNG ECONOMISTS AROUND THE WORLD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            A focused forum for young economists to channel their knowledge into the conception and application of
            practical ideas for society's economic development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 mt-2"
          >
            <Button
              asChild
              size="xl"
              className="rounded-full px-12 py-6 text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 border border-amber-300 hover:shadow-lg shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f97316)",
                borderColor: "#fcd34d",
                color: "#0f172a"
              }}
            >
              <Link href="/membership">JOIN US</Link>
            </Button>
            <Button
              type="button"
              onClick={handleLearnMoreClick}
              size="xl"
              className="rounded-full px-12 py-6 text-lg font-bold bg-white text-emerald-800 border border-white hover:bg-slate-50 hover:text-emerald-900 shadow-md shadow-lg hover:shadow-xl cursor-pointer"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-30 mx-auto px-6 md:px-8 -mt-20 max-w-6xl pb-16 md:pb-24 lg:pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={GraduationCap}
              title="EDUCATION"
              shortDescription="Access to workshops, seminars, and resources"
              fullDescription="Expert-led educational programs for professional development."
              benefits={["Expert workshops", "Online resources", "Certification", "Peer learning"]}
              className="bg-white text-slate-800 hover:bg-emerald-50"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={BarChart2}
              title="POLICY RESEARCH"
              shortDescription="Participate in economic research and policy development"
              fullDescription="Contribute to cutting-edge research with real-world impact."
              benefits={["Research opportunities", "Policy drafting", "Data analysis", "Publication support"]}
              className="bg-white text-slate-800 hover:bg-emerald-50"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={Users}
              title="NETWORKING"
              shortDescription="Connect with peers, mentors, and industry professionals"
              fullDescription="Build lasting relationships with economists and industry leaders."
              benefits={["Professional connections", "Mentorship matching", "Industry events", "Alumni network"]}
              className="bg-white text-slate-800 hover:bg-emerald-50"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={Calendar}
              title="EVENTS"
              shortDescription="Attend conferences, debates, and competitions"
              fullDescription="Participate in high-quality conferences and competitive events."
              benefits={["Annual conferences", "Monthly debates", "Case competitions", "Guest speakers"]}
              className="bg-white text-slate-800 hover:bg-emerald-50"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={LineChart}
              title="LEADERSHIP"
              shortDescription="Develop essential leadership skills"
              fullDescription="Build leadership capabilities through hands-on experience."
              benefits={["Leadership training", "Committee roles", "Project management", "Public speaking"]}
              className="bg-white text-slate-800 hover:bg-emerald-50"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy, Mission & Vision Section */}
      <section 
        className="py-28 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
        style={{ background: "linear-gradient(90deg, #059669, #047857)" }}
      >
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-5">Philosophy, Mission & Vision</h2>
            <div 
              className="h-1 w-40 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"
              style={{ background: "linear-gradient(90deg, #fbbf24, #f97316)" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.3)"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-amber-400 p-3"
                  style={{ backgroundColor: "#fbbf24" }}
                >
                  <BookOpen className="h-6 w-6 text-emerald-900" style={{ color: "#064e3b" }} />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Philosophy</h3>
              <p className="text-white/90 text-center leading-relaxed">
                Youth are a resource unto themselves. Our central objective is human development to facilitate economic
                development.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.3)"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-amber-400 p-3"
                  style={{ backgroundColor: "#fbbf24" }}
                >
                  <Target className="h-6 w-6 text-emerald-900" style={{ color: "#064e3b" }} />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Mission</h3>
              <p className="text-white/90 text-center leading-relaxed">
                Provide a focused forum for young economists to channel their knowledge into practical ideas for
                society's economic development.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.3)"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-amber-400 p-3"
                  style={{ backgroundColor: "#fbbf24" }}
                >
                  <Eye className="h-6 w-6 text-emerald-900" style={{ color: "#064e3b" }} />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Vision</h3>
              <p className="text-white/90 text-center leading-relaxed">
                Become a critical contributor to solving the economic problem by harnessing the economic intellect of
                the youth.
              </p>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-5 dark:text-slate-200">Why Choose Us?</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-20 text-lg dark:text-slate-300">
            The Chamber of Youth Economists offers unique opportunities for growth, networking, and making a real impact
            in economic policy.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base dark:text-slate-300">
                  The Chamber of Youth Economists is a focused forum for young economists to channel their knowledge
                  into the conception and application of practical ideas for society's economic development.
                </p>

                <p className="hidden sm:block text-slate-600 leading-relaxed text-sm sm:text-base dark:text-slate-300">
                  The Chamber provides young professionals with opportunities for participation in policymaking
                  processes, access to mentorship from industry experts, and development of leadership skills as a means
                  of advancing socioeconomic transformation.
                </p>

                <p className="hidden lg:block text-slate-600 leading-relaxed dark:text-slate-300">
                  By bringing together youth economists and other young professionals in anchor professions, we aim to
                  foster collaboration, innovation, and practical solutions for socioeconomic development.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/economics-workshop-session.jpeg"
                  alt="Chamber of Youth Economists workshop session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-28 bg-white dark:bg-slate-800">
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3 mb-12 md:mb-0 md:pr-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-2 dark:text-emerald-300">
                Youth Economists Organization With a Difference.
              </h2>
              <h3 
                className="text-xl sm:text-2xl font-bold text-amber-600 mb-4 sm:mb-6 dark:text-amber-400"
                style={{ color: "#d97706" }}
              >
                Innovation.
              </h3>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed dark:text-slate-300 text-sm sm:text-base">
                The Chamber of Youth Economists is one of the leading groups in the world and Africa focused on
                empowering young economists through innovative solutions.
              </p>

              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 cursor-pointer"
                onClick={handleLearnMoreClick}
                type="button"
              >
                LEARN MORE
              </Button>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg">
                <div className="mb-4 h-40 sm:h-48 relative">
                  <Image
                    src="/economics-conference-discussion.jpeg"
                    alt="Policy research"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pb-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-emerald-700 mb-2 sm:mb-3 dark:text-emerald-300">
                    POLICY RESEARCH
                  </CardTitle>
                  <p className="text-slate-600 mb-3 sm:mb-4 dark:text-slate-300 text-sm sm:text-base">
                    The Chamber is one of the leading groups in Africa focused on policy research and economic
                    solutions.
                  </p>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50 cursor-pointer"
                    onClick={handleLearnMoreClick}
                    type="button"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden shadow-lg">
                <div className="mb-4 h-40 sm:h-48 relative">
                  <Image
                    src="/economics-award-ceremony.jpeg"
                    alt="Leadership development"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pb-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-emerald-700 mb-2 sm:mb-3 dark:text-emerald-300">
                    LEADERSHIP DEVELOPMENT
                  </CardTitle>
                  <p className="text-slate-600 mb-3 sm:mb-4 dark:text-slate-300 text-sm sm:text-base">
                    We provide young economists with the skills and opportunities for economic leadership.
                  </p>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50 cursor-pointer"
                    onClick={handleLearnMoreClick}
                    type="button"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section 
        className="py-28 bg-emerald-900 text-white"
        style={{ backgroundColor: "#064e3b" }}
      >
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <div className="mb-20 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">Our Services</h2>
            <p className="text-white/90 mb-6 leading-relaxed text-lg">
              We offer a comprehensive range of services designed to support young economists in their professional
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.2)"
              className="border border-white/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <GraduationCap className="h-10 w-10 text-amber-400" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Access to workshops, seminars, and resources to enhance your economic knowledge and skills.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.2)"
              className="border border-white/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <BarChart2 className="h-10 w-10 text-amber-400" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="text-xl font-bold mb-4">POLICY RESEARCH</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Participate in economic research, drafting memoranda, and proposing policy solutions.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.2)"
              className="border border-white/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <Users className="h-10 w-10 text-amber-400" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="text-xl font-bold mb-4">NETWORKING</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Connect with peers, mentors, and industry professionals in the field of economics.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.2)"
              className="border border-white/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <Calendar className="h-10 w-10 text-amber-400" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="text-xl font-bold mb-4">EVENTS</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Participate in conferences, debates, and competitions focused on economic issues.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.2)"
              className="border border-white/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <LineChart className="h-10 w-10 text-amber-400" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="text-xl font-bold mb-4">LEADERSHIP</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Develop leadership skills through participation in Chamber activities and committees.
              </p>
            </HoverCard>

            <HoverCard
              variant="glow"
              color="rgba(255, 255, 255, 0.2)"
              className="border border-white/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <BookOpen className="h-10 w-10 text-amber-400" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="text-xl font-bold mb-4">MENTORSHIP</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Access a network of experienced economists, academics, and industry experts.
              </p>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900 dark:to-amber-900">
        <div className="mx-auto px-6 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 dark:text-emerald-300">
            Ready to Join Our Community?
          </h2>
          <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto leading-relaxed dark:text-slate-300">
            Become a member today and gain access to our resources, events, and a network of like-minded young
            economists dedicated to making a difference.
          </p>
          <Button
            asChild
            size="xl"
            className="rounded-md px-12 py-7 text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 border border-amber-300 hover:shadow-lg shadow-lg hover:shadow-xl"
            style={{
              background: "linear-gradient(90deg, #fbbf24, #f97316)",
              borderColor: "#fcd34d",
              color: "#0f172a"
            }}
          >
            <Link href="/membership">BECOME A MEMBER</Link>
          </Button>
        </div>
      </section>

      {/* Learn More Modal */}
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </main>
  )
}

