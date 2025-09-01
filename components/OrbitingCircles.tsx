'use client'

import { motion } from 'framer-motion'

export default function OrbitingCircles() {
  const circles = [
    { size: 20, duration: 15, delay: 0, reverse: false },
    { size: 30, duration: 20, delay: 5, reverse: true },
    { size: 25, duration: 18, delay: 10, reverse: false },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: 400,
            height: 400,
          }}
          animate={{
            rotate: circle.reverse ? -360 : 360,
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: circle.delay,
          }}
        >
          <div
            className="absolute bg-teal-400 rounded-full"
            style={{
              width: circle.size,
              height: circle.size,
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}