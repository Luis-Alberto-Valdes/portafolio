import './project.css'
import projects from './data'
import { useState } from 'react'
import ProjectInfo from './ProjectInfo'

export default function Project () {
  const [showInfo, setShowInfo] = useState(null)

  return (
    <>
      {projects.map((p, index) => (
        <section key={p.name} className={`projects ${showInfo === index ? 'projects--active' : ''}`}>
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
            <button className='projects_description_button-info' onClick={() => setShowInfo(showInfo === index ? null : index)}>
              Info ↓
            </button>
          </div>
          {showInfo === index && <ProjectInfo repo={p.repo} description={p.description} />}
        </section>
      ))}
    </>
  )
}
