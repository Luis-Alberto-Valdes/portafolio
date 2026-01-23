import React, { useState } from 'react'
import './header.css'
import Nav from '../Nav/Nav'
import NavResponsive from '../NavResponsive/NavResponsive'
import { GitIcon, LinkedinIcon, MenuBotonIcon } from '../../assets/icons'

export default function Header () {
  const [header, setHeader] = useState(false)

  return (
    <header className='header'>
      <div className='header_redes'>
        <a className='link-icons  git-hub' target='blank' href='https://github.com/Luis-Alberto-Valdes/'><GitIcon className='icons-header' /></a>
        <a className='link-icons linkedin' target='blank' href=''><LinkedinIcon className='icons-header' /></a>
      </div>
      <div className=' header_nav-container'>
        {window.innerWidth > 800
          ? <Nav />
          : <button className='header_nav_menu' onClick={() => { setHeader(!header) }}><MenuBotonIcon className='header_nav_menu-icon' /></button>}
        {header ? <NavResponsive /> : ''}
      </div>

    </header>

  )
}
