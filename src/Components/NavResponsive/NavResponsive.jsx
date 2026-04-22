import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navResponsive.css'

export default function NavResponsive ({ onClose }) {
  const { pathname } = useLocation()
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Sobre Mi', path: '/about' },
    { label: 'Projectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' }
  ]

  return (
    <nav className='header_nav-responsive' aria-label='Navegación móvil'>
      <ul className='header_nav_ul-responsive'>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} onClick={onClose} aria-current={pathname === item.path ? 'page' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
