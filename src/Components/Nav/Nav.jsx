import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav () {
  return (
    <>
      <nav className='header_nav'>
        <ul className='header_nav_ul'>
          <li><Link to='/portafolio'>Home</Link></li>
          <li><Link to='/portafolio/about'>About Me</Link></li>
          <li><Link to='/portafolio/projects'>Projects</Link></li>
          <li><Link to='/portafolio/contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
