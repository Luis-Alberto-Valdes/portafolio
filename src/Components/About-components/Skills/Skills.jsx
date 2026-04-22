import './skills.css'
import { CssIcon, GitIcon, HtmlIcon, JsIcon, NextJsIcon, NodeIcon, ReactIcon, SqlIcon, TypescriptIcon } from '../../../assets/icons'

const skills = [
  { label: 'HTML', Icon: HtmlIcon },
  { label: 'CSS', Icon: CssIcon },
  { label: 'JavaScript', Icon: JsIcon },
  { label: 'TypeScript', Icon: TypescriptIcon },
  { label: 'React', Icon: ReactIcon },
  { label: 'Next.js', Icon: NextJsIcon },
  { label: 'Node.js', Icon: NodeIcon },
  { label: 'SQL', Icon: SqlIcon },
  { label: 'Git', Icon: GitIcon }
]

export default function Skills () {
  return (
    <section className='about_skills'>
      <h2 className='about_skills-title'>Habilidades</h2>
      <ul className='about_skills-container'>
        {skills.map(({ label, Icon }) => (
          <li key={label} className='about_skills-items' aria-label={label}>
            <div className='skill-icon'>
              <Icon />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
