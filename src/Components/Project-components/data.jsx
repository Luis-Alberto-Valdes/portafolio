import React from 'react'
import './icons.css'
import { CssIcon, HtmlIcon, JsIcon, NodeIcon, ReactIcon } from '../../assets/icons.jsx'
import tiendaOnline from '../../assets/Tienda-Online.png'

const projects = [
  {
    src: tiendaOnline,
    name: 'Online Shop(Fake)',
    href: 'https://tu-abuelo.github.io/Tienda-Online/',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />, <ReactIcon key='react' />, <NodeIcon key='node' />]
  },
  {
    src: tiendaOnline,
    name: 'Online Shop(Fake)',
    href: 'https://tu-abuelo.github.io/Tienda-Online/',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />, <ReactIcon key='react' />]
  }
]

export default projects
