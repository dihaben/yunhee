'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Download, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Image from 'next/image'
import aboutImg from "@/public/images/about2.jpg"
import SectionHeader from '@/components/SectionHeader'
import { AboutData, LinkToCV, YunheeAboutImage } from '@/lib/data'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />

      <main className="py-12 space-y-12">
        <AboutSection />
        <ResearchInterests />
        <Achievements />
        <RecentPublications />
        <ContactSection />
      </main>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">Hello! I&apos;m <span className="text-blue-600">Yunhee Lee</span></h1>
            <p className="text-lg text-slate-500 mb-6">
            {AboutData}
            </p>
            <div className='flex gap-6 items-center'>
            <Button asChild variant="outline" className="text-blue-600 border-blue-600 border">
              <Link href="/about">
                Read More <ArrowRight className="ml-1 h-4 w-4 bounce-x" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-blue-600 bg-blue-600">
              <Link href={LinkToCV}>
                Download resume  <Download className="ml-1 h-4 w-4 bounce-y" />
              </Link>
            </Button>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={aboutImg || YunheeAboutImage}
              alt="Professor Yunhee Lee"
              fill
              className="rounded shadow"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ResearchInterests() {
  const interests = [
    { title: "Urban Planning", description: "Exploring sustainable city development and smart urban solutions.", icon: <Lightbulb className="h-8 w-8 text-yellow-500" /> },
    { title: "Environmental Sustainability", description: "Researching eco-friendly practices and green technologies for urban areas.", icon: <Lightbulb className="h-8 w-8 text-green-500" /> },
    { title: "Smart Cities", description: "Investigating the integration of technology in urban infrastructure and services.", icon: <Lightbulb className="h-8 w-8 text-blue-500" /> },
  ]

  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Research Interests & Expertise" />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {interests.map((interest, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {interest.icon}
                    <span>{interest.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Recognitions & Achievements" />
        <Card className="mt-8 bg-white shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <Award className="h-10 w-10 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-slate-500 mb-4">
                  I am honored to have received several awards for my contributions to urban planning and sustainability research, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-500">
                  <motion.li animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.2 }}>
                    Urban Innovation Award 2023
                  </motion.li>
                  <motion.li animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.4 }}>
                    Sustainability Research Excellence Prize
                  </motion.li>
                  {isExpanded && (
                    <>
                      <motion.li animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.6 }}>
                        Smart City Development Grant
                      </motion.li>
                      <motion.li animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.8 }}>
                        Environmental Policy Impact Award
                      </motion.li>
                    </>
                  )}
                </ul>
                <Button
                  variant="link"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 p-0 h-auto font-semibold text-blue-600"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function RecentPublications() {
  const publications = [
    { title: "The Future of Sustainable Urban Mobility", journal: "Journal of Urban Planning", year: 2023 },
    { title: "Smart Grid Integration in Developing Cities", journal: "Sustainable Energy Review", year: 2022 },
    { title: "Green Spaces and Mental Health in Urban Areas", journal: "Environmental Psychology Today", year: 2021 },
  ]

  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <SectionHeader title="Recent Publications" />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/publications" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
              <Card className="bg-white shadow hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{pub.journal}</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-600">{pub.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Connect with Me" />
        <Card className="mt-8 bg-white/50 backdrop-blur-sm shadow-lg">
          <CardContent className="pt-6">
            <p className="text-lg text-slate-500 mb-6">
              Let&apos;s collaborate on building sustainable, smart cities for tomorrow! Reach out via my <Link href="/contact" className="text-blue-600">contact page</Link> or connect on <Link href="" className="text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
