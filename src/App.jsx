import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './Components/Header/Header'

const Home = lazy(() => import('./Pages/Home/Home'))
const Projects = lazy(() => import('./Pages/Projects/Projects'))
const About = lazy(() => import('./Pages/About Me/About'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))

function App () {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
