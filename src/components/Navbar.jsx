import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          sero
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/lore" className={({ isActive }) => isActive ? 'active' : ''}>
            Lore
          </NavLink>
          <NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''}>
            Schedule
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
