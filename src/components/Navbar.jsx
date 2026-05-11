import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'AI', to: '/ai' },
  { label: 'Industries', to: '/industries' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo" aria-label="Orion Data Studio home" onClick={closeMenu}>
        <img src="/Frame.svg" alt="" className="navbar__logo-mark" />
        <img src="/Group.svg" alt="Orion Data Studio" className="navbar__logo-type" />
      </NavLink>

      <button
        className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/contact" className="navbar__cta" onClick={closeMenu}>Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
