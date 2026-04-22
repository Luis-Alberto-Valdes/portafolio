import './icons.css'
import { CssIcon, HtmlIcon, JsIcon, NextJsIcon, NodeIcon, ReactIcon, SqlIcon, TypescriptIcon } from '../../assets/icons.jsx'
import Portfolio from '../../assets/Portfolio.webp'
import MORNINGDIGEST from '../../assets/MORNINGDIGEST.webp'
import ECommerce from '../../assets/E-Commerce.webp'

const projects = [
  {
    src: Portfolio,
    name: 'Portfolio',
    href: 'https://luis-alberto-valdes.netlify.app/portafolio',
    repo: 'https://github.com/Luis-Alberto-Valdes/portafolio',
    description: 'Portafolio personal desarrollado con React y Vite. Incluye secciones de About, Projects y Contact con diseño responsivo y animaciones.',
    tecn: [<CssIcon key='css' />, <JsIcon key='js' />, <ReactIcon key='react' />]
  },
  {
    src: MORNINGDIGEST,
    name: 'MORNINGDIGEST',
    href: 'https://morningdigest.netlify.app/',
    repo: 'https://github.com/Luis-Alberto-Valdes/App-de-Noticias',
    description: 'Aplicación web para resúmenes diarios de noticias. Construida con HTML, CSS, JavaScript y Node.js para el backend.',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />, <NodeIcon key='node' />, <SqlIcon key='sql' />]
  },
  {
    src: ECommerce,
    name: 'E-Commerce',
    href: 'https://e-comerce-portfolio.netlify.app/',
    repo: 'https://github.com/Luis-Alberto-Valdes/E-Comerce',
    description: 'Plataforma de comercio electrónico desarrollada con Next.js, TypeScript y React. Incluye carrito de compras y gestión de productos.',
    tecn: [<CssIcon key='css' />, <TypescriptIcon key='typescript' />, <ReactIcon key='react' />, <NextJsIcon key='nextjs' />]
  }

]

export default projects
