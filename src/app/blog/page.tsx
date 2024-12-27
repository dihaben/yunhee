'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Search, ArrowRight } from 'lucide-react'
import { animations, blogArticles, LinkToBlog, theme } from '@/lib/data'



export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredArticles = blogArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tldr.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen bg-gradient-to-b from-${theme.colors.background.gradient.from} to-${theme.colors.background.gradient.to} ${theme.spacing.page}`}>
    <div className={`max-w-${theme.layout.maxWidth} mx-auto px-4`}>
    <div className={`flex items-center justify-between ${theme.spacing.section}`}>
      <motion.h1 
        className={`text-4xl font-bold text-${theme.colors.primary}`}
        {...animations.headerAnimation}
      >
        Blog Articles
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
          <a href={LinkToBlog} className="flex items-center gap-2">
            Visit blog
            <ArrowRight className="h-5 w-5 bounce-x" />
          </a>
        </Button>
      </motion.div>
      </div>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-slate-400 focus:border-blue-600"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 text-red-600 transform -translate-y-1/2"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </Button>
            )}
          </div>
          {searchTerm && (
            <div className="text-sm text-slate-500 mt-2">
              Showing {filteredArticles.length} of {blogArticles.length} articles
            </div>
          )}
        </motion.div>

        <ScrollArea className="h-[600px]">
          <AnimatePresence mode="wait">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-semibold text-blue-600">{article.title}</CardTitle>
                        <Badge variant="secondary">{article.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-500 mb-4">{article.tldr}</p>
                      <Button asChild variant="link" className="p-0">
                        <Link href={article.link} className="flex items-center text-blue-600 hover:text-blue-800">
                          Read More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <p className="text-slate-500">No articles found matching &quot;{searchTerm}&quot;</p>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </div>
    </div>
  )
}

