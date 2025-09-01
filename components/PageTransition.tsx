'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Stripe animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed inset-0 bg-teal-600 z-40"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
            style={{ left: `${i * 20}%`, width: '20%' }}
          />
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}