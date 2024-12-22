'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'MongoDB', color: 'text-violet-400' },
  { name: 'Node.js', color: 'text-cyan-400' },
  { name: 'Express', color: 'text-green-400' },
  { name: 'MongoDB', color: 'text-violet-400' },
  { name: 'Firebase', color: 'text-white' },
  { name: 'Git', color: 'text-cyan-600' },
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Next.js', color: 'text-green-400' },
  { name: 'TypeScript', color: 'text-violet-400' },
  { name: 'JavaScript', color: 'text-white' },
  { name: 'Tailwind', color: 'text-cyan-400' },
  { name: 'Postman', color: 'text-yellow-400' },
]

export default function Skill() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-2 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-100 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            I Build amazing Webapps
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-violet-400">
            at Warping speed
          </span>
        </motion.h2>

        {/* Skills marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.span
                key={index}
                className={`text-3xl md:text-4xl font-medium ${skill.color} relative`}
                whileHover={{ scale: 1.1 }}
              >
                {skill.name}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

