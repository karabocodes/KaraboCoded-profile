import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Education from './components/Educations'
import Projects from './components/projects'
import Contact from './components/Contact'

function App() {
  return (
      <div>
        <Sidenav />
        <Main />
        <Education/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
