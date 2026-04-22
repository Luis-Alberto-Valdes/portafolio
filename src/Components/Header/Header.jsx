import React, { useEffect, useState } from 'react'
import './header.css'
import Nav from '../Nav/Nav'
import NavResponsive from '../NavResponsive/NavResponsive'
import { GitIcon, LinkedinIcon, MenuBotonIcon } from '../../assets/icons'

export default function Header () {
  const [header, setHeader] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800)

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth <= 800)
    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => window.removeEventListener('resize', updateMobile)
  }, [])

  return (
    <header className='header' role='banner'>
      <div className='header_redes'>
        <a className='link-icons git-hub' target='_blank' rel='noopener noreferrer' href='https://github.com/Luis-Alberto-Valdes/'><GitIcon className='icons-header' aria-label='GitHub' /></a>
        <a className='link-icons linkedin' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/luis-alberto-valdes-346030405/'><LinkedinIcon className='icons-header' aria-label='LinkedIn' /></a>
      </div>
      <div className='header_nav-container'>
        {isMobile
          ? <button className='header_nav_menu' onClick={() => { setHeader((prev) => !prev) }} aria-expanded={header} aria-label='Abrir menú de navegación'><MenuBotonIcon className='header_nav_menu-icon' /></button>
          : <Nav />}
        {header && isMobile ? <NavResponsive onClose={() => setHeader(false)} /> : null}
      </div>
    </header>
  )
}
