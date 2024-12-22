/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-20 w-20 h-20 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 relative"
        >
          <Image
            src="data:image/jpeg;base64,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"
            alt="Your Name"
            width={80}
            height={90}
            className="rounded-full border-4 border-white/20 mx-auto mt-19"

          />
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hello, I&apos;m Pranav Bedi
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-2 tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            SOFTWARE
          </span>
        </motion.h1>
        <motion.h2
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            DEVELOPER
          </span>
        </motion.h2>
        <motion.div
          className="flex items-center justify-center gap-4 text-3xl md:text-5xl font-light mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
                    <span className="text-white">&</span> 
          <div className="relative px-6 py-1.5 rounded-full border-2 border-white/20">
            <span className="text-white">UX DESIGNER</span>
          </div>

          <motion.div 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Based in Gurugram, India
          </motion.div>

        </motion.div>
        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I create digital Apps that borders on
          <span className="text-violet-400"> Efficiency</span>,
          <span className="text-yellow-400"> Aesthetics</span> and
          <span className="text-fuchsia-400"> Functionality</span>.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a 
            href="https://github.com/Bedi561" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={36} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/pranav-bedi-5a225a228/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={36} />
          </motion.a>
          <motion.a 
            href="mailto:pranavbedi6@gmail.com" 
            className="text-white hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={36} />
          </motion.a>
        </motion.div>
      </motion.div>


      
    </section>
  )
}

