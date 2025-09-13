'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo, LogoMonogram, LogoAbstract, LogoHexagon } from '@/components/Logo'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center gap-2 lg:ml-24">
            Abdallah <span className="text-teal-400"><LogoMonogram/></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative transition-colors hover:text-teal-400 ${
                  pathname === item.path ? 'text-teal-400' : 'text-gray-300'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
                  />
                )}
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-teal-500 text-slate-900 rounded-full font-semibold hover:bg-teal-400 transition-colors"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className={`px-4 py-2 rounded-lg transition-colors hover:bg-slate-800 ${
                      pathname === item.path 
                        ? 'text-teal-400 bg-slate-800/50' 
                        : 'text-gray-300 hover:text-teal-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mx-4 py-3 bg-teal-500 text-slate-900 rounded-full font-semibold text-center hover:bg-teal-400 transition-colors"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}