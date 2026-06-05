import React from 'react'
import Home from './Home'
import HomeBrief from './HomeBrief'
import About from './About'
import StaggeredMenu from './components/StaggeredMenu'
import Projects from './Projects'
import Services from './Services'
import CTA from './CTA'

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
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen
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
