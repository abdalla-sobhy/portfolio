'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skillCategories = {
  Frontend: [
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS', icon: '/icons/css3.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
  ],
  Backend: [
    { name: 'Lravel', icon: '/icons/laravel.svg' },
    { name: 'PHP', icon: '/icons/php.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'GraphQL', icon: '/icons/graphql.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'DBMS', icon: '/icons/database.svg' },
    { name: 'Sanctum', icon: 'no icon' },
    { name: 'JWT', icon: '/icons/Jwt.svg' },
  ],
  'CMS & E-commerce': [
    { name: 'WordPress', icon: '/icons/wordpress.svg' },
    { name: 'WooCommerce', icon: '/icons/woocommerce.svg' },
    { name: 'Elementor', icon: '/icons/elementor.svg' },
    { name: 'Stripe', icon: '/icons/stripe.svg' },
    { name: 'WPForms', icon: '/icons/wpforms.svg' },
    { name: 'Yaycommerce', icon: '/icons/yaycommerce.jpeg' },
  ],
  Tools: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Vite', icon: '/icons/vite.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' },
  ],
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('Frontend')

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">My Skills</h2>
      
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
              activeCategory === category
                ? 'bg-teal-500 text-slate-900 font-semibold'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
                        className="relative flex flex-col items-center justify-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-400 transition-all cursor-pointer"
          >
            <div className="w-16 h-16 mb-3 relative">
              <div className="w-16 h-16 mb-3 relative">
                {skill.icon === 'no icon' ? (
  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-800">
                  {skill.name.substring(0, 2)}
                </span>
              </div>
) : (
  <Image
    src={skill.icon}
    alt={skill.name}
    fill
    className="object-contain"
  />
)}

                {/*  */}
              </div>
            </div>
            <p className="text-sm text-gray-300">{skill.name}</p>
            
            <AnimatePresence>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-2 -right-2 bg-teal-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Decorative line on the right */}
      <div className="absolute right-0 top-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-teal-400 to-transparent -translate-y-1/2" />
    </div>
  )
}