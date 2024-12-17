'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function MainContent() {
  const [currentSection, setCurrentSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection('about')
      } else if (scrollPosition < windowHeight * 1.5) {
        setCurrentSection('projects')
      } else {
        setCurrentSection('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <Header currentSection={currentSection} />
      <About />
      <Projects />
      <Contact />
    </motion.div>
  )
}
