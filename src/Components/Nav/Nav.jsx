import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'

export default function Nav () {
  const { pathname } = useLocation()
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Sobre Mi', path: '/about' },
    { label: 'Projectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' }
  ]

  return (
    <nav className='header_nav' aria-label='Navegación principal'>
      <ul className='header_nav_ul'>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className={pathname === item.path ? 'active' : undefined} aria-current={pathname === item.path ? 'page' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
