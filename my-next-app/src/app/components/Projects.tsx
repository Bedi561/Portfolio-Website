'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3' },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-8">
      <motion.h2
        className="text-5xl mb-16 text-center font-light"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#1e1e1e] p-8 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h3 className="text-3xl mb-4 font-light">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
