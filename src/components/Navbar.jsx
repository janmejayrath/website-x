import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { navLinks } from '../data/siteContent'

function Navbar({ currentPath, navigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (event, path) => {
    event.preventDefault()
    setIsOpen(false)
    navigate(path)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand">
          <button className="brand-button" type="button" onClick={() => navigate('/')}>
            <img className="brand-button__logo" src={logo} alt="Indo Climatecare Pvt Ltd." />
          </button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="navbar__toggle"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? '×' : '≡'}
        </button>

        <div className={`navbar__menu ${isOpen ? 'is-open' : ''}`}>
          <nav className="navbar__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.path}
                aria-current={currentPath === link.path ? 'page' : undefined}
                className={`navbar__link ${currentPath === link.path ? 'is-active' : ''}`}
                href={link.path}
                onClick={(event) => handleNavigate(event, link.path)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__meta">
            <div className="navbar__language">
              <span aria-hidden="true">🇬🇧</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
