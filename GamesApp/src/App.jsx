import {Routes,Route} from "react-router-dom"

import  Home  from './pages/Home/index.jsx'

import './App.css'
function App() {
  

  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
