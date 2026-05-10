import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo" aria-label="Orion Data Studio home">
        <img src="/Frame.svg" alt="" className="navbar__logo-mark" />
        <img src="/Group.svg" alt="Orion Data Studio" className="navbar__logo-type" />
      </NavLink>
      <ul className="navbar__links">
        <li><NavLink to="/platform">Platform</NavLink></li>
        <li><NavLink to="/ai">AI</NavLink></li>
        <li><NavLink to="/industries">Industries</NavLink></li>
      </ul>
      <NavLink to="/contact" className="navbar__cta">Contact Us</NavLink>
    </nav>
  )
}

export default Navbar
