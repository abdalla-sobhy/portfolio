'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink, Images } from 'lucide-react'

// 1. Standardize the data structure: All projects now use 'images' array
const projects = [
  {
    id: 1,
    number: '01',
    title: 'Edvance',
    role: 'Fullstack Developer',
    description: `Developed a comprehensive platform combining a job board and a Learning Management System (LMS) using the ACE (Access to Careers & Education)
framework, bridging the gap between university students' academic skills and professional opportunities.`,
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Laravel', 'PHP', 'MySQL'],
    images: [
      '/projects/Edvance.png',
      '/projects/Edvance2.png',
      '/projects/Edvance3.png',
    ],
    liveUrl: 'https://drive.google.com/file/d/1UxEU52GVasUw2-vW3_iceKUNQc5rT-Mw/view?usp=sharing',
  },
  {
    id: 2,
    number: '02',
    title: 'YouTube Clone',
    role: 'Full Stack Developer',
    description: `A high-performance video streaming platform featuring video uploads, real-time search suggestions, and a custom video player. It includes features like channel subscriptions, video likes/dislikes, and a nested comment system. The application focuses on optimized data fetching and a seamless user experience across all device sizes.`,
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Laravel', 'MySQL', 'Framer Motion'],
    images: [
      '/projects/YouTube.png',
      '/projects/youtube2.png',
      '/projects/youtube3.png',
      '/projects/youtube4.png',
    ],
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_youtube-frontend-hardfrontendprojects-activity-7220861564856221697-a8Ci?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
  },
  {
    id: 3,
    number: '03',
    title: 'StoreIt',
    role: 'Full Stack Developer',
    description: `StoreIt is a file storage and management system that allows users to securely upload, auto organize, and access their files from anywhere. Whether it's documents, images, or videos, StoreIt makes file storage simple and efficient.`,
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'MySQL', 'JWT'],
    images: ['/projects/ecommerce.png'],
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_webdevelopment-fullstack-laravel-activity-7293270451366064128-xO0H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
  },
  {
    id: 4,
    number: '04',
    title: 'E-Commerce Platform',
    role: 'Full Stack Developer',
    description: 'A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products, orders, and customers.',
    technologies: ['React', 'Laravel', 'MySQL', 'Stripe', 'JWT', 'Socket.io'],
    images: ['/projects/luzura.png'],
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_ecommerce-webdevelopment-programming-activity-7265405877531107329-Mxxn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
  },
  {
    id: 5,
    number: '05',
    title: 'Social Media Platform',
    role: 'Full Stack Developer',
    description: 'social media platform similar to Quora. you can post and edit or delete the post with a title, body and an image if you want with a comment section and like-dislike system, and manage content through an admin panel with multi-role authorization',
    technologies: ['PHP', 'laravel', 'blade', 'MySQL'],
    images: ['/projects/justpost.png'],
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_laravel-php-bigproject-activity-7243178346895839233-zGhk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
  },
]

export default function Work() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentImage(0) 
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImage(0)
  }

  const project = projects[currentProject]

  return (
    <main className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div>
              <motion.span className="text-8xl font-bold text-teal-400/20">
                {project.number}
              </motion.span>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-teal-400 mb-6">
                Role: <span className="font-semibold">{project.role}</span>
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">{project.description}</p>
              
              <div className="mb-8">
                <h3 className="text-sm text-gray-400 mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 text-teal-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-900 rounded-full font-semibold hover:bg-teal-400 transition-colors"
              >
                Project Video <ExternalLink size={18} />
              </Link>
            </div>
            
            {/* Right content - Project Cover Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group cursor-pointer"
              onClick={() => setShowGallery(true)}
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-slate-800">
                <Image
                  src={project.images[0]} // Always show the first image as cover
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full">
                    <Images size={20} /> View Gallery ({project.images.length})
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button onClick={prevProject} className="p-3 bg-teal-500 text-slate-900 rounded-full hover:bg-teal-400 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentProject(index); setCurrentImage(0); }}
                className={`w-2 h-2 rounded-full transition-all ${index === currentProject ? 'w-8 bg-teal-400' : 'bg-slate-700'}`}
              />
            ))}
          </div>
          <button onClick={nextProject} className="p-3 bg-teal-500 text-slate-900 rounded-full hover:bg-teal-400 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-center text-white">{project.title}</h2>
              
              <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden">
                <Image
                  src={project.images[currentImage]} // Dynamically show the selected image
                  alt={`${project.title} ${currentImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Gallery Controls */}
              {project.images.length > 1 && (
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)}
                    className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className="flex gap-2">
                    {project.images.map((_, i) => (
                       <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImage ? 'w-6 bg-teal-400' : 'w-2 bg-slate-700'}`} />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentImage((prev) => (prev + 1) % project.images.length)}
                    className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}