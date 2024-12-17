'use client'

import { motion } from 'framer-motion'

export default function Header({ currentSection }: { currentSection: string }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6">
      <nav>
        <ul className="flex justify-end space-x-6">
          {['about', 'projects', 'contact'].map((section) => (
            <motion.li
              key={section}
              animate={{
                color: currentSection === section ? '#ffffff' : '#808080',
              }}
              transition={{ duration: 0.3 }}
            >
              <a href={`#${section}`} className="text-lg capitalize">
                {section}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
