import { motion } from 'framer-motion'

export default function About() {
  const info = [
    { label: 'Name', value: 'Abdallah' },
    { label: 'Phone', value: '(+20) 155 032 8625' },
    { label: 'Experience', value: '2 Years' },
    { label: 'Nationality', value: 'Egyptian' },
    { label: 'Email', value: 'abdallahbs9393@gmail.com' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Language', value: 'English, Arabic' },
  ]

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-300 leading-relaxed mb-8"
      >
        I&apos;m a passionate Full Stack Developer with a strong background in web development and a proven track record of delivering high-quality, scalable, and efficient web applications. My expertise lies in building robust and responsive user interfaces using React, Next.js, and TypeScript, while ensuring clean, maintainable, and well-structured codebases.
        On the backend, I have hands-on experience with PHP (Laravel) and MySQL, enabling me to design and implement secure, efficient, and scalable server-side solutions. In addition, I work with WordPress, specializing in Elementor and WooCommerce, to deliver dynamic websites and custom e-commerce solutions tailored to business needs.
        I thrive on bridging frontend and backend technologies to create seamless digital experiences, always focusing on performance, maintainability, and scalability.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {info.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-center py-3 border-b border-slate-800"
          >
            <span className="text-gray-400">{item.label}</span>
            <span className="text-white font-medium">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}