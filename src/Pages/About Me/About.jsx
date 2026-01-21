import React from 'react'
import './about.css'
import Skills from '../../Components/About-components/Skills/Skills'
import Description from '../../Components/About-components/Description/Description'

export default function About () {
  return (
    <>
      <main className='main-about'>
        <Skills />
        <Description />
      </main>
    </>
  )
}
