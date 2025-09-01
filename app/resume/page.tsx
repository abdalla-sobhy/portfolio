'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Experience from '@/components/resume/Experience'
import Education from '@/components/resume/Education'
import Skills from '@/components/resume/Skills'
import About from '@/components/resume/About'

const tabs = ['Experience', 'Education', 'Skills by Category', 'About Me']

export default function Resume() {
  const [activeTab, setActiveTab] = useState('Experience')

  return (
    <main className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                    activeTab === tab
                      ? 'bg-teal-500 text-slate-900 font-semibold'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'Experience' && <Experience />}
              {activeTab === 'Education' && <Education />}
              {activeTab === 'Skills by Category' && <Skills />}
              {activeTab === 'About Me' && <About />}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}