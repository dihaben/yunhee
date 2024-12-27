'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, BookOpen, Newspaper, PenTool, ArrowRight } from 'lucide-react'
import aboutImg from "@/public/images/about2.jpg"
import { publications, news, blogArticles, theme, animations, LinkToBlog, LinkToNews, LinkToPublications, AboutData, AcademicBackground, LinkToCV, } from '@/lib/data'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
      <div className={`max-w-6xl mx-auto px-4`}>
              <motion.div
          className={`mb-12 relative h-[400px] ${theme.layout.borderRadius} overflow-hidden ${theme.layout.shadow}`}
          {...animations.fadeIn}
        >
          <Image
            src={aboutImg}
            alt="Professor Yunhee Lee"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <motion.h1 
            className="absolute bottom-8 left-8 text-4xl font-bold text-white"
            {...animations.fadeInUp}
          >
            About Me
          </motion.h1>
        </motion.div>

        <div className="space-y-12">
          <AboutSection />
          <ResearchFocus />
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="publications"
                className={`data-[state=active]:bg-${theme.colors.accent.blue.light} data-[state=active]:text-${theme.colors.accent.blue.DEFAULT}`}
              >
                Publications
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className={`data-[state=active]:bg-${theme.colors.accent.blue.light} data-[state=active]:text-${theme.colors.accent.blue.DEFAULT}`}
              >
                News
              </TabsTrigger>
              <TabsTrigger
                value="blog"
                className={`data-[state=active]:bg-${theme.colors.accent.blue.light} data-[state=active]:text-${theme.colors.accent.blue.DEFAULT}`}
              >
                Blog
              </TabsTrigger>
            </TabsList>
            <TabsContent value="publications">
              <PublicationsSection />
            </TabsContent>
            <TabsContent value="news">
              <NewsSection />
            </TabsContent>
            <TabsContent value="blog">
              <BlogSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <motion.section {...animations.fadeInUp}>
      <Card>
        <CardContent className={theme.spacing.content}>
          <p className={`text-lg text-${theme.colors.text.secondary}`}>
            {AboutData}
          </p>
          <h2 className={`text-2xl font-semibold text-${theme.colors.primary} mt-8`}>Academic Background</h2>
          <p className={`text-lg text-${theme.colors.text.secondary} mt-4`}>
       {AcademicBackground}
          </p>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex mt-4"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-blue-900 border-2 border-blue-600 bg-white group relative"
          >
            <a href={LinkToCV} className="flex items-center gap-2">
              Download CV
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}


function ResearchFocus() {
  const focusAreas = [
    { title: "Urban Planning & Development", icon: <ChevronRight className="h-5 w-5" /> },
    { title: "Environmental Sustainability", icon: <ChevronRight className="h-5 w-5" /> },
    { title: "Smart City Technologies", icon: <ChevronRight className="h-5 w-5" /> },
    { title: "Data Analytics in Urban Systems", icon: <ChevronRight className="h-5 w-5" /> },
  ]

  return (
    <motion.section {...animations.fadeInUp}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-600">Research Focus</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2 text-lg text-slate-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {area.icon}
                <span>{area.title}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.section>
  )
}

function PublicationsSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  {pub.title}
                </h3>
                <p className="text-slate-500 mt-2">{pub.description}</p>
                <Button asChild variant="link" className="mt-2 p-0">
                  <a href={pub.link}>Read Publication</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href={LinkToPublications} className="flex items-center gap-2">
             More publications
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
      </div>
    </ScrollArea>
  )
}

function NewsSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <Newspaper className="h-5 w-5 mr-2 text-blue-600" />
                  {item.title}
                </h3>
                <p className="text-slate-500 mt-2">{item.description}</p>
                <Button asChild variant="link" className="mt-2 p-0">
                  <a href={item.link}>Read More</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href={LinkToNews} className="flex items-center gap-2">
             More news
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
      </div>
    </ScrollArea>
  )
}

function BlogSection() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div className="space-y-8">
        {blogArticles.slice(0, 4).map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <PenTool className="h-5 w-5 mr-2 text-blue-600" />
                  {article.title}
                </h3>
                <p className="text-slate-500 mt-2">{article.tldr}</p>
                <Button asChild variant="link" className="mt-2 p-0">
                  <a href={article.link}>Read</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Button 
            asChild 
            variant="link" 
            className="text-lg text-white border-blue-600 bg-blue-600 group relative"
          >
            <a href={LinkToBlog} className="flex items-center gap-2">
              Visit blog 
              <ArrowRight className="h-5 w-5 bounce-x" />
            </a>
          </Button>
        </motion.div>
      </div>
    </ScrollArea>
  )
}
