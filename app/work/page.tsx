'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink, Images } from 'lucide-react'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'StoreIt',
    role: 'Fullstack Developer',
    description: 'StoreIt is a file storage and management system that allows users to securely upload, auto organize, and access their files from anywhere. Whether it\'s documents, images, or videos, StoreIt makes file storage simple and efficient.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'MySQL', 'JWT'],
    image: '/projects/ecommerce.png',
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_webdevelopment-fullstack-laravel-activity-7293270451366064128-xO0H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    galleryImages: 1,
  },
  {
    id: 2,
    number: '02',
    title: 'E-Commerce Platform',
    role: 'Full Stack Developer',
    description: 'A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products, orders, and customers.',
    technologies: ['React', 'Laravel', 'MySQL', 'Stripe', 'JWT', 'Socket.io'],
    image: '/projects/luzura.png',
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_ecommerce-webdevelopment-programming-activity-7265405877531107329-Mxxn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    galleryImages: 1,
  },
  {
    id: 3,
    number: '03',
    title: 'Social Media Platform',
    role: 'Full Stack Developer',
    description: 'social media platform similar to Quora. you can post and edit or delete the post with a title, body and an image if you want with a comment section and like-dislike system, and manage content through an admin panel with multi-role authorization',
    technologies: ['PHP', 'laravel', 'blade', 'MySQL'],
    image: '/projects/justpost.png',
    liveUrl: 'https://www.linkedin.com/posts/abdallah-sobhy-6488932a1_laravel-php-bigproject-activity-7243178346895839233-zGhk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjsYNgBUpX7clbBXVsrCbltYcF6ZWfEDe8',
    galleryImages: 1,
  },
]

export default function Work() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
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
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-8xl font-bold text-teal-400/20"
              >
                {project.number}
              </motion.span>
              
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              
              <p className="text-teal-400 mb-6">
                Role: <span className="font-semibold">{project.role}</span>
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm text-gray-400 mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-teal-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-900 rounded-full font-semibold hover:bg-teal-400 transition-colors"
                >
                  Project Video
                  <ExternalLink size={18} />
                </Link>
                
                
              </div>
            </div>
            
            {/* Right content - Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group cursor-pointer"
              onClick={() => setShowGallery(true)}
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold flex items-center gap-2">
                    <Images size={20} />
                    View Gallery
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={prevProject}
            className="p-3 bg-teal-500 text-slate-900 rounded-full hover:bg-teal-400 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentProject ? 'w-8 bg-teal-400' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextProject}
            className="p-3 bg-teal-500 text-slate-900 rounded-full hover:bg-teal-400 transition-colors"
          >
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                {project.title} - Gallery
              </h2>
              
              <div className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot ${currentImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + project.galleryImages) % project.galleryImages)}
                  className="p-2 bg-slate-800 rounded-full hover:bg-slate-700"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-gray-400">
                  {currentImage + 1} / {project.galleryImages}
                </span>
                
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % project.galleryImages)}
                  className="p-2 bg-slate-800 rounded-full hover:bg-slate-700"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}