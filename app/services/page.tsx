'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, Code, Database, Layers } from 'lucide-react'
import { useRouter } from 'next/navigation'

const services = [
  {
    id: '01',
    title: 'Frontend Development',
    icon: Code,
    description: 'I specialize in building modern, responsive user interfaces using React, Next.js, and TypeScript. With expertise in state management (Redux, React Query) and UI frameworks (Tailwind CSS, DaisyUI), I focus on delivering intuitive, accessible experiences. I also leverage Zod for robust form validation, ensuring clean, maintainable, and high-performance code.',
  },
  {
    id: '02',
    title: 'Backend Development',
    icon: Database,
    description: 'I build robust and scalable backends using PHP and Laravel with MySQL as the primary database. My experience includes working with both schema-based and OOP design using plain PHP, as well as developing APIs within the Laravel framework. I implement secure authentication solutions with JWT, OAuth, and Laravel Sanctum, while designing RESTful APIs that ensure efficient and reliable data handling.',
  },
  {
    id: '03',
    title: 'Full-Stack Solutions',
    icon: Layers,
    description: 'I deliver end-to-end web applications by combining frontend and backend expertise. My toolkit includes Next.js for server-side rendering (SSR), WebSockets for real-time features, and TypeScript for strong type safety. I ensure seamless integration between the frontend and backend, creating cohesive and efficient user experiences.',
  },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>('01')
  const router = useRouter()

  return (
    <main className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12"
        >
          My Services
        </motion.h1>

        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedService === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-slate-800 pb-6"
              >
                <div
                  className="flex items-start gap-6 cursor-pointer"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  <span className="text-6xl font-bold text-teal-400/30">{service.id}</span>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center gap-4">
                      <Icon className="text-teal-400" size={32} />
                      {service.title}
                    </h2>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push('/contact')
                        }}
                        className="px-6 py-3 bg-teal-500 text-slate-900 rounded-full font-semibold hover:bg-teal-400 transition-colors"
                      >
                        Get Started
                      </button>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    className="p-2 bg-slate-800 rounded-full"
                  >
                    <ChevronRight className="text-teal-400" size={24} />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}