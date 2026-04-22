import React from 'react'
import './project.css'
import projects from './data'
import { GitIcon } from '../../assets/icons'

export default function Project () {
  return (
    <>
      {projects.map(p => (
        <section key={p.name} className='projects'>
          <div className='projects_img-container'>
            <div className='projects_tecnologies'>
              {p.tecn}
            </div>
            <a target='_blank' rel='noopener noreferrer' href={p.href}>
              <img className='projects_img' src={p.src} alt={`Captura de pantalla del proyecto ${p.name}`} loading='lazy' />
            </a>
          </div>
          <div className='projects_description'>
            <a className='projects_decription-name' target='_blank' rel='noopener noreferrer' href={p.href}>{p.name} </a>
            <a className='projects_description-icon' target='_blank' rel='noopener noreferrer' href={p.repo}>Github<GitIcon /></a>
          </div>
        </section>
      )
      )}
    </>

  )
}
