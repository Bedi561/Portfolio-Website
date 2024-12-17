'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function About() {
  const pathVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  }

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-8 bg-black">
      {/* Grainy background effect */}
      <div className="fixed inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Avatar and greeting */}
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Your Name"
              width={120}
              height={120}
              className="rounded-full border-2 border-white/20"
            />
            <motion.div 
              className="absolute -right-32 -top-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm [Your Name]
            </motion.div>
          </div>
        </motion.div>

        {/* Main titles with subtle animation */}
        <div className="space-y-2 relative">
          <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.1)' }}>
            <motion.path
              d="M 50 50 C 50 -50, 450 -50, 450 50 C 450 150, 50 150, 50 50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
              variants={pathVariants}
              initial="initial"
              animate="animate"
              style={{ pathLength: 0 }}
            />
          </svg>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight relative"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              FULLSTACK
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              DEVELOPER
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              & DESIGNER
            </span>
          </motion.h1>

          {/* Location */}
          <motion.div 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Based in [Your City], [Your Country]
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="mt-8 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>

          {/* CTA button */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full inline-block hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Bottom text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl mt-12 text-gray-300"
          >
            Crafting digital experiences with a focus on{' '}
            <span className="text-purple-400">Innovation</span>,{' '}
            <span className="text-teal-400">Elegance</span>, and{' '}
            <span className="text-yellow-400">Performance</span>.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

