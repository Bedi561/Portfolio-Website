'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ChevronUp } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen relative flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Grainy background effect */}
      <div className="fixed inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Funky background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/2 -left-20 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 right-1/3 w-50 h-50 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            Get in Touch
          </span>
        </motion.h2>

        {/* Contact links */}
        <motion.div 
          className="flex justify-center gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="mailto:pranavbedi6@gmail.com"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3 bg-white/10 rounded-full mb-2 group-hover:bg-violet-500/20 transition-colors">
              <Mail size={24} className="group-hover:text-violet-400" />
            </div>
            <span className="text-sm">Email</span>
          </motion.a>
          <motion.a 
            href="https://github.com/Bedi561"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3 bg-white/10 rounded-full mb-2 group-hover:bg-yellow-500/20 transition-colors">
              <Github size={24} className="group-hover:text-yellow-400" />
            </div>
            <span className="text-sm">GitHub</span>
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/pranav-bedi-5a225a228/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3 bg-white/10 rounded-full mb-2 group-hover:bg-fuchsia-500/20 transition-colors">
              <Linkedin size={24} className="group-hover:text-fuchsia-400" />
            </div>
            <span className="text-sm">LinkedIn</span>
          </motion.a>
        </motion.div>

        {/* CTA text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl mt-12 text-gray-300"
        >
          Let&apos;s collaborate on your next project and create something{' '}
          <span className="text-violet-400">Innovative</span>,{' '}
          <span className="text-yellow-400">Elegant</span>, and{' '}
          <span className="text-fuchsia-400">High-performing</span>.
        </motion.p>

        {/* Scroll to top indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <ChevronUp className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

