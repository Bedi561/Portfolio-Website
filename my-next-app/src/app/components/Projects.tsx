'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
const projects = [
  { id: 1, title: 'CourseKraft', description: 'A web-based admin panel for managing courses and users efficiently.', tags: ['JavaScript', 'Node.js', 'Express'] },
  { id: 3, title: 'Key Logger', description: 'A utility for capturing and analyzing keystrokes for educational purposes.', tags: ['JavaScript', 'Event Listeners'] },
  // { id: 5, title: 'Guessing Game', description: 'A fun, interactive number guessing game with dynamic user feedback.', tags: ['JavaScript', 'Game Development'] },
  { id: 8, title: 'Expense Manager', description: 'An intuitive tool to track and manage expenses over time.', tags: ['JavaScript', 'React'] },
  { id: 10, title: 'To-Do App', description: 'A task management app to help users track and complete their daily goals.', tags: ['React', 'State Management'] },
  { id: 11, title: 'Gmail Clone', description: 'A clone of the Gmail interface with email functionality.', tags: ['JavaScript', 'UI Design'] },
  { id: 12, title: 'Peer Chat', description: 'A real-time chat application for peer-to-peer communication.', tags: ['JavaScript', 'WebSockets'] },
  { id: 13, title: 'YouTube Clone', description: 'A clone of YouTube with features like video playback and search.', tags: ['JavaScript', 'API Integration'] },
  { id: 14, title: 'Twitter Clone', description: 'A Twitter-inspired platform for creating and engaging with posts.', tags: ['TypeScript', 'Next.js'] },
  { id: 15, title: 'Discord Parody', description: 'A parody of the Discord app with basic chatting functionalities.', tags: ['JavaScript', 'WebSockets', 'UI Design'] },
];


export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        {/* <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div> */}
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <motion.h2
          className="text-6xl mb-16 text-center font-bold tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            Projects
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.button
                className="flex items-center text-sm font-medium text-violet-400 group-hover:text-fuchsia-600 transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <ArrowUpRight className="ml-1 w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

