'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { resumeData, theme, animations, LinkToProjects } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProjectPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
      <div className={`max-w-${theme.layout.maxWidth} mx-auto px-4`}>
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
            <a href={LinkToProjects} className="flex items-center gap-2">
              View all projects 
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
        </div>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-6">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={project.name}
                {...animations.fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`hover:${theme.layout.shadow} transition-shadow`}>
                  <CardHeader>
                    <CardTitle className={`text-xl text-${theme.colors.primary}`}>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-${theme.colors.text.secondary} ${theme.spacing.element}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.areasOfInterest.slice(0, 2).map((area) => (
                        <Badge key={area} variant="secondary">{area}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}