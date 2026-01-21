import React from 'react'
import { Link } from 'react-router-dom'
import './navResponsive.css'

export default function NavResponsive () {
  return (
    <>
      <nav className='header_nav-responsive'>
        <ul className='header_nav_ul-responsive'>
          <li><Link to='/portafolio'>Home</Link></li>
          <li><Link to='/portafolio/about'>About Me</Link></li>
          <li><Link to='/portafolio/projects'>Projects</Link></li>
          <li><Link to='/portafolio/contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
