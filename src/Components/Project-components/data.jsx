import React from 'react'
import './icons.css'
import { CssIcon, HtmlIcon, JsIcon, ReactIcon } from '../../assets/icons.jsx'
import Portfolio from '../../assets/Portfolio.png'
import MORNINGDIGEST from '../../assets/MORNINGDIGEST.jpg'

const projects = [
  {
    src: Portfolio,
    name: 'Portfolio',
    href: 'https://0personalportfolio0.netlify.app/portafolio/',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />, <ReactIcon key='react' />]
  },
  {
    src: MORNINGDIGEST,
    name: 'MORNINGDIGEST',
    href: 'https://morningdigest.netlify.app/',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />]
  }
]

export default projects
