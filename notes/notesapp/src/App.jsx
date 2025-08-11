import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import {Route,Routes} from 'react-router-dom'
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element="Home" />
      </Routes>
        
      
    </>
  )
}

export default App
