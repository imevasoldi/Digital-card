import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './Components/Info'
import About from './Components/About'
import Interests from './Components/Interests'
import { Footer } from './Components/Footer'

function App() {
  return (
    // <div>  
    <div className='container'>  
    {/* <div className="info--picture"/> */}
    {/* <img src='/src/images/img1.jpeg'/> */}
      {/* <div/> */}
        {/* <div className='main--content'> */}
        {/* <div> */}
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      {/* </div> */}
    </div>
  )
}

export default App
