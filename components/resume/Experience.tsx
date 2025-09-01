import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'June 2025 - Present',
    title: 'Fullstack Developer',
    company: 'Digital Egyptian Pioneers',
    type: 'internship',
  },
  {
    period: 'Feb 2024 - Apr 2025',
    title: 'PHP React Fullstack Developer',
    company: 'Company Project - Scandiweb',
    type: 'freelance',
  },
  {
    period: 'June 2024 - September 2024',
    title: 'Full Stack Developer',
    company: 'CodeAlpha',
    type: 'internship',
  },
  {
    period: 'Summer 2024',
    title: 'Web Developer Intern',
    company: 'CodeClause',
    type: 'internship',
  },
]

export default function Experience() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">My Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
          >
            <p className="text-teal-400 text-sm mb-2">{exp.period}</p>
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-300">• {exp.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}