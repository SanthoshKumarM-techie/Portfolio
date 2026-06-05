import React from 'react'
import { motion } from "motion/react";

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built to present my profile, selected work, and contact details with a clean visual style and smooth browsing experience.',
  },
  {
    title: 'Landing Page Design',
    description:
      'A focused landing page concept with strong spacing, clear content hierarchy, and responsive sections designed to guide visitors through the page.',
  },
  {
    title: 'Dashboard UI',
    description:
      'A user interface exploration for organizing important data, actions, and status information into simple, readable dashboard sections.',
  },
  {
    title: 'Web Experience Prototype',
    description:
      'An interactive frontend prototype created to practice component structure, layout systems, and polished details for real-world web interfaces.',
  },
  {
    title: 'Web Experience Prototype',
    description:
      'An interactive frontend prototype created to practice component structure, layout systems, and polished details for real-world web interfaces.',
  },
  {
    title: 'Web Experience Prototype',
    description:
      'An interactive frontend prototype created to practice component structure, layout systems, and polished details for real-world web interfaces.',
  },
  {
    title: 'Web Experience Prototype',
    description:
      'An interactive frontend prototype created to practice component structure, layout systems, and polished details for real-world web interfaces.',
  },
]

const lines = [
  "A collection of projects that showcase my approach to design, development,",
  "problem-solving, and creating modern web experiences. Each project reflects",
  "my commitment to quality, usability, and attention to detail.",
];

function Projects() {
  return (
    <div className="min-h-screen bg-white px-5 py-12 text-black md:px-10">
      <div className='flex justify-between mb-10'>
        <h1 className="mb-8 flex overflow-hidden text-6xl font-bold tracking-tighter">
        {"Projects".split("").map((letter, index) => (
          <span key={index} className="overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </h1>
      <p className="mb-12 max-w-4xl text-2xl leading-tight font-medium tracking-tighter text-black/70">
        {lines.map((line, index) => (
    <div key={index} className="overflow-hidden">
      <motion.p
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {line}
      </motion.p>
    </div>
  ))}
      </p>
      </div>
      
      <div
        className="grid gap-4 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
            className="h-90 bg-black shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:h-100 rounded-2xl"
          >
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
