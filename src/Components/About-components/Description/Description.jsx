import './description.css'
import { useState } from 'react'
import { languaje } from './descriptionLanguaje.js'

export default function Description () {
  const [lang, setLang] = useState(languaje.en)

  return (
    <>
      <section className='description-container'>
        <h2 className='description-title'>Description</h2>
        <p className='description-text'>
          <button
            className='description-btn' onClick={() => {
              if (lang === languaje.es) setLang(languaje.en)
              if (lang === languaje.en) setLang(languaje.es)
            }}
          > {lang === languaje.es ? 'Change to english' : 'Cambiar a español'}
          </button>
          {lang.description}
        </p>
      </section>
    </>
  )
}
