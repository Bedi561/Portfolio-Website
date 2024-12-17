'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8">
      <motion.h2
        className="text-5xl mb-12 font-light"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in touch
      </motion.h2>
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="mailto:your.email@example.com" className="text-2xl hover:text-gray-400 transition-colors">Email</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors">LinkedIn</a>
      </motion.div>
    </section>
  )
}
