'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Logo, LogoMonogram, LogoAbstract, LogoHexagon } from '@/components/Logo'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 lg:ml-24">
          Abdallah <span className="text-teal-400"><LogoMonogram/></span>
        </Link>
        
        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  )
}