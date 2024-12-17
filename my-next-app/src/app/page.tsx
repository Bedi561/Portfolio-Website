'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Intro from './components/Intro'
import MainContent from './components/MainContent'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true)
    }, 4000) // Increased to allow time for both "Hello" and "नमस्ते"
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-hidden">
    <AnimatePresence mode="wait">
      {!introComplete ? (
        <Intro key="intro" />
      ) : (
        <MainContent key="main" />
      )}
    </AnimatePresence>
  </div>
  )
}
