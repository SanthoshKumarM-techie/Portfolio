import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Home from './Home'
import HomeBrief from './HomeBrief'
import About from './About'
import StaggeredMenu from './components/StaggeredMenu'
import Projects from './Projects'
import Services from './Services'
import CTA from './QuickLinks'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'View about page', link: '/about' },
  { label: 'Projects', ariaLabel: 'View selected work', link: '/projects' },
  { label: 'Services', ariaLabel: 'View services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
]

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
]

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  })

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'

  const pages = {
    '/about': <About />,
    '/projects': <Projects />,
    '/services': <Services />,
    '/contact': <CTA />,
  }

  const currentPage = pages[currentPath] || (
    <>
      <Home />
      <HomeBrief />
    </>
  )

  return (
    <div>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/10">
        <motion.div
          className="h-full origin-left bg-[#5227FF] shadow-[0_0_18px_rgba(82,39,255,0.45)]"
          style={{ scaleX }}
        />
      </div>

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={false}
        colors={['#B497CF', '#5227FF']}
        logoText="Santhoshkumar"
        accentColor="#5227FF"
        isFixed
      />
      {currentPage}
    </div>
  )
}

export default App
