'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeaderProps {
  currentSection: string
}

export default function Header({ currentSection }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <Link href={`#${section}`} passHref>
                <motion.div
                  className={`text-lg font-medium capitalize transition-colors ${currentSection === section
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600'
                      : 'text-gray-400 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.div>
              </Link>

            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

