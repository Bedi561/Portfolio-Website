'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  const [currentText, setCurrentText] = useState('Hello')

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText('नमस्ते')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-[#141414] z-50"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex items-center">
        <svg width="40" height="40" className="mr-4">
          <circle cx="20" cy="20" r="18" fill="#F0E68C" />
        </svg>
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-light"
          style={{ color: '#F0E68C' }}
        >
          {currentText}
        </motion.div>
      </div>
    </motion.div>
  )
}

