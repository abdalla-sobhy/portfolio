'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import OrbitingCircles from '@/components/OrbitingCircles'
import { Github, Linkedin, Download } from 'lucide-react'
import { Logo, LogoMonogram, LogoAbstract, LogoHexagon } from '@/components/Logo'


export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <main className="min-h-screen pt-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-teal-400 font-medium mb-4">FullStack Web Developer</p>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hello I&apos;m<br />
              <span className="gradient-text">Abdallah</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Self-motivated Full Stack Developer with hands-on
              experience building scalable and efficient web applications. Proficient
              in designing APIs, managing databases, and implementing secure,
              real-time backend systems — with solid frontend experience using
              modern JavaScript frameworks.
            </p>
            
            <div className="flex items-center gap-4">
              <Link
                href="/CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border-2 border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all"
              >
                <Download size={20} />
                DOWNLOAD CV
              </Link>
              
              <Link
                href="https://github.com/abdalla-sobhy"
                className="p-3 border-2 border-slate-700 rounded-full hover:border-teal-400 transition-colors"
              >
                <Github size={20} />
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/abdallah-sobhy-6488932a1"
                className="p-3 border-2 border-slate-700 rounded-full hover:border-teal-400 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>
          
          {/* Right content - Image with orbiting circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <OrbitingCircles />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700">
              <Image
                src="/my_image.png"
                alt="Profile"
                fill
                className="object-cover"
                onLoad={() => setImageLoaded(true)}
                priority
              />
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-slate-800"
        >
          <div>
            <AnimatedCounter end={2} duration={2000} />
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>
          
          <div>
            <AnimatedCounter end={28} duration={2000} />
            <p className="text-gray-400 mt-2">repositories</p>
          </div>
          <div>
            <AnimatedCounter end={1456} duration={2000} suffix="+" />
            <p className="text-gray-400 mt-2">Code Commits</p>
          </div>
          <div>
            <AnimatedCounter end={37} duration={2000} suffix="+" />
            <p className="text-gray-400 mt-2">Side Projects</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}