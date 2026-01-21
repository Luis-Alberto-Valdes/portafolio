import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About Me/About'
import Contact from './Pages/Contact/Contact'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/portafolio' element={<Home />} />
        <Route path='/portafolio/projects' element={<Projects />} />
        <Route path='/portafolio/about' element={<About />} />
        <Route path='/portafolio/contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/portafolio' />} />
      </Routes>

    </>
  )
}

export default App
