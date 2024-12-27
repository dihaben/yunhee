'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Download, BookOpen, GraduationCap, Code, Languages, FileText, ArrowRight } from 'lucide-react'
import { animations, LinkToCV, resumeData, theme } from '@/lib/data'

// Add type definitions for the props
interface ResumeData {
  title: string;
  areasOfInterest: string[];
  projects: Array<{
    name: string;
    description: string;
  }>;
  teaching: Array<{
    course: string;
    level: string;
  }>;
  languages: string[];
  publications: Array<{
    title: string;
    journal: string;
    year: string | number;
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlights?: string[];
    projects?: string[];
  }>;
  education: Array<{
    degree: string;
    department: string;
    university: string;
    location: string;
    period: string;
    description?: string;
    highlights?: string[];
    thesis?: string;
  }>;
  skills: Array<{
    title: string;
    area: string;
    tldr: string;
  }>;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface TabProps {
  data: ResumeData;
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
      <div className={`flex items-center justify-between ${theme.spacing.section}`}>
        <motion.h1 
          className={`text-4xl font-bold text-${theme.colors.primary}`}
          {...animations.headerAnimation}
        >
          Research Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className=""
        >
          <Button 
            asChild 
            variant="link" 
              className="text-lg text-blue-900 border-2 border-blue-600 bg-white group relative"
          >
            <a href={LinkToCV} className="flex items-center gap-2">
              Download Resume
              <Download className="h-5 w-5 bounce-y" />
            </a>
          </Button>
        </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-1">
            <TabsList className="flex min-w-full border rounded-lg p-1 bg-white shadow-sm mb-6 overflow-x-auto">
              <TabsTrigger 
                value="overview" 
                className="ml-8 md:ml-0 flex-1 min-w-[100px] data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 rounded-md"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className="flex-1 min-w-[100px] data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="flex-1 min-w-[100px] data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
              >
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                className="flex-1 min-w-[100px] data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
              >
                Skills
              </TabsTrigger>
            </TabsList>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="overview" className="mt-6">
                <OverviewTab data={resumeData} />
              </TabsContent>
              <TabsContent value="experience" className="mt-6">
                <ExperienceTab data={resumeData} />
              </TabsContent>
              <TabsContent value="education" className="mt-6">
                <EducationTab data={resumeData} />
              </TabsContent>
              <TabsContent value="skills" className="mt-6">
                <SkillsTab data={resumeData} />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  )
}

function OverviewTab({ data }: TabProps) {
  return (
    <ScrollArea className="h-[600px]">
      <div className="space-y-8">
        <Section title="Areas of Interest" icon={<BookOpen className="h-5 w-5" />}>
          <div className="flex flex-wrap gap-2">
            {data.areasOfInterest.map((area, index) => (
              <Badge key={index} variant="secondary">{area}</Badge>
            ))}
          </div>
        </Section>

        <Section title="Projects" icon={<Code className="h-5 w-5" />}>
          {data.projects.map((project, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">{project.description}</p>
              </CardContent>
            </Card>
          ))}
       
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href="/projects" className="flex items-center gap-2">
           View all projects
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
       
        </Section>

        <Section title="Teaching" icon={<GraduationCap className="h-5 w-5" />}>
          {data.teaching.map((course, index) => (
            <div key={index} className="mb-2">
              <span className="font-medium">{course.course}</span>
              <span className="text-sm text-slate-500 ml-2">({course.level})</span>
            </div>
          ))}
       
    
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href="/teaching" className="flex items-center gap-2">
           View teaching details
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
     
        </Section>

        <Section title="Languages" icon={<Languages className="h-5 w-5" />}>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((language, index) => (
              <Badge key={index} variant="outline">{language}</Badge>
            ))}
          </div>
        </Section>

        <Section title="Publications" icon={<FileText className="h-5 w-5" />}>
          {data.publications.slice(0, 3).map((pub, index) => (
            <div key={index} className="mb-2">
              <span className="font-medium">{pub.title}</span>
              <span className="text-sm text-slate-500 block">{pub.journal}, {pub.year}</span>
            </div>
          ))}
     
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href="/publications" className="flex items-center gap-2">
           View all publications
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
        
        </Section>
      </div>
    </ScrollArea>
  )
}

function ExperienceTab({ data }: TabProps) {
  return (
    <ScrollArea className="h-[600px]">
      {/* <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Professional Experience
      </h2> */}
      <div className="space-y-8">
        {data.experience.map((exp, index) => (
          <Card key={index} className="hover:bg-slate-50 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800">{exp.title}</CardTitle>
                  <p className="text-slate-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-slate-500">{exp.location}</p>
                </div>
                <span className="text-sm font-medium text-slate-500">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700">{exp.description}</p>
                {exp.highlights && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-700">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-slate-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.projects && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-700">Projects:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.projects.map((project, idx) => (
                        <li key={idx} className="text-slate-600">{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

function EducationTab({ data }: TabProps) {
  return (
    <ScrollArea className="h-[600px]">
      {/* <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
        Academic Background
      </h2> */}
      <div className="space-y-8">
        {data.education.map((edu, index) => (
          <Card key={index} className="hover:bg-slate-50 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800">{edu.degree}</CardTitle>
                  <p className="text-slate-600 font-medium">{edu.department}</p>
                  <p className="text-slate-600">{edu.university}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                </div>
                <span className="text-sm font-medium text-slate-500">{edu.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {edu.description && (
                  <p className="text-slate-700">{edu.description}</p>
                )}
                {edu.highlights && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-700">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-slate-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {edu.thesis && (
                  <div className="space-y-1">
                    <h4 className="font-medium text-slate-700">Thesis:</h4>
                    <p className="text-slate-600">{edu.thesis}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

function SkillsTab({ data }: TabProps) {
  return (
    <ScrollArea className="h-[600px]">
      {/* <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
        Technical Skills & Expertise
      </h2> */}
      <div className="space-y-8">
        {data.skills.map((skill, index) => (
          <Card key={index} className="hover:bg-slate-50 transition-colors">
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">{skill.area}</Badge>
              <p className="mt-2 text-slate-500">{skill.tldr}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

function Section({ title, icon, children }: SectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </div>
  )
}
