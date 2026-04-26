import { GitIcon } from '../../assets/icons'

export default function ProjectInfo ({ repo, description }) {
  return (
    <div className='project-info'>
      <p>{description}</p>
      <a className='projects_description-icon' target='_blank' rel='noopener noreferrer' href={repo}>Github<GitIcon /></a>
    </div>
  )
}
