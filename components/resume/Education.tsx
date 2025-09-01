import { motion } from 'framer-motion'

const education = [
  {
    year: '2022 - 2026',
    title: 'Bachelor of Science in Computer Science',
    institution: 'Alexandria University',
  },
  {
    title: 'Strong academic foundation in software engineering, algorithms, data structures, databases, and web technologies.',
  },
  {
    title: 'Focused on full-stack development with practical projects in React, Next.js, TypeScript, PHP (Laravel), MySQL, and have some experience in WordPress.',
  },
  {
    title: 'Consistently ranked among the top students with a GPA of 3.79, demonstrating strong problem-solving and analytical skills.',
  },
]

export default function Education() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-l-2 border-teal-400 pl-6"
          >
            <p className="text-teal-400 text-sm mb-1">{edu.year}</p>
            <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
            {edu.institution && <p className="text-gray-300">• {edu.institution}</p>}
            {/* {edu.level && <p className="text-gray-400 text-sm mt-1">• {edu.level}</p>} */}
          </motion.div>
        ))}
      </div>
    </div>
  )
}