import { useEffect, useState } from 'react'
import OneGlobalLogo from '../assets/OneGlobalLogo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Choose Us' },
  { id: 'contact', label: 'Contact Us' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]

        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="nav-bar">
        <a href="#home" className="brand brand-text" onClick={closeMenu}>
          <img 
          src={OneGlobalLogo} 
          alt="One Global Logistics" 
          className="brand-logo"
          />
          </a>

        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header