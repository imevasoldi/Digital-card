import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './Components/Info'
import About from './Components/About'
import Interests from './Components/Interests'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className='container'>  
      <div className="info--picture"/>
        <div className='main--content'>
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
