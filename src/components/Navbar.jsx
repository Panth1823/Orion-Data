import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">ORION</div>
      <ul className="navbar__links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/ai">AI</NavLink></li>
        <li><NavLink to="/platform">Platform</NavLink></li>
        <li><NavLink to="/industries">Industries</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
