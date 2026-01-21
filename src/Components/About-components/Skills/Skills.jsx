import './skills.css'
import { CssIcon, GitIcon, HtmlIcon, JsIcon, NodeIcon, ReactIcon } from '../../../assets/icons'

export default function Skills () {
  return (
    <>
      <section className='about_skills'>
        <h2 className='about_skills-title'>Skills</h2>
        <ul className='about_skills-container'>
          <li className='about_skills-items html'><HtmlIcon /></li>
          <li className='about_skills-items css'><CssIcon /></li>
          <li className='about_skills-items javascript'><JsIcon /></li>
          <li className='about_skills-items react'><ReactIcon /></li>
          <li className='about_skills-items nodejs'><NodeIcon /></li>
          <li className='about_skills-items git'><GitIcon /></li>
        </ul>
      </section>
    </>
  )
}
