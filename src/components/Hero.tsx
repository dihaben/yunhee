'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'
// import HeroBg from "@/public/images/herobg.jpg"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://i.imghippo.com/files/igJ8471bGk.jpeg"
        alt="Academic background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 shine-text">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl sm:text-2xl lg:max-w-3xl text-gray-200 mb-8">
        Your one-stop destination to explore my work, research, and contributions to ...
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button 
            asChild 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
          >
            <Link href="/about">Learn More</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-blue-400 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            <Link href="/publications">
              <BookOpen className="mr-2 h-4 w-4" /> Publications
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20"></div>
    </div>
  )
}

