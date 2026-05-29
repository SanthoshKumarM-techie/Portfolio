import React from 'react'
import Home from './Home'
import HomeBrief from './HomeBrief'
import About from './About'
import StaggeredMenu from './components/StaggeredMenu'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '/#home' },
  { label: 'Work', ariaLabel: 'View selected work', link: '/#work' },
  { label: 'Services', ariaLabel: 'View services', link: '/#services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' },
  { label: 'About', ariaLabel: 'View about page', link: '/about' },
]

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
]

function App() {
  const isAboutPage = window.location.pathname === '/about'

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
      {isAboutPage ? (
        <About />
      ) : (
        <>
          <Home />
          <HomeBrief />
        </>
      )}
    </div>
  )
}

export default App
