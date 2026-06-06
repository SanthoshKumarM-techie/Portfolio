import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

function SocialMark({ children }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-[0.65rem] font-semibold leading-none tracking-tighter text-neutral-900 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-white">
      {children}
    </span>
  )
}

function QuickLinks() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" }
  ]

  const socialLinks = [
    { icon: <SocialMark>GH</SocialMark>, href: "https://github.com", label: "GitHub" },
    { icon: <SocialMark>in</SocialMark>, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <SocialMark>IG</SocialMark>, href: "https://instagram.com", label: "Instagram" },
    { icon: <SocialMark>X</SocialMark>, href: "https://twitter.com", label: "Twitter" }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  }

  return (
    <footer className="w-full overflow-hidden bg-black/3 px-5 py-12 text-black select-none md:px-10">
      <motion.div
        className="mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-12">
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <p className="text-3xl font-semibold tracking-tighter text-neutral-900">
              Santhoshkumar Muralidharan
            </p>
            <p className="mt-2 max-w-xs text-md leading-relaxed tracking-tighter text-neutral-500">
              Frontend developer focused on clean visual execution, responsive structure, and committed delivery.
            </p>
          </motion.div>

          <motion.nav className="md:col-span-3 md:col-start-7" variants={itemVariants}>
            <p className="mb-4 text-md font-mono tracking-tighter text-neutral-400 ">Quick Links</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xl font-medium tracking-tighter text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 text-neutral-300 transition-colors duration-300 group-hover:text-neutral-950" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div className="md:col-span-2" variants={itemVariants}>
            <p className="mb-4 text-md font-mono tracking-tighter text-neutral-400 ">Connect</p>
            <div className="flex flex-wrap gap-3 md:flex-col">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-md font-medium tracking-tighter text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-label={social.label}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center"
          variants={itemVariants}
        >
          <p className="text-md tracking-tighter text-neutral-400">
            &copy; {currentYear} Santhoshkumar Muralidharan. All rights reserved.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-md font-mono tracking-tighter text-neutral-400 transition-colors duration-300 hover:text-neutral-900"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default QuickLinks
