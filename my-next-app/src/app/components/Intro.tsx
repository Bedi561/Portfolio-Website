'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = ['Hello', 'नमस्ते']

export default function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length)
    }, 2000)

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, greetings.length * 2000 + 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black z-50"
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <div className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" className="mr-6">
                <motion.circle 
                  cx="30" 
                  cy="30" 
                  r="28" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-7xl font-light tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
                  {greetings[currentIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

