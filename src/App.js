import React from 'react'
import './App.css';
import Home from './componants/Home'
import { BrowserRouter,Link , Router,Routes,NavLink, Route } from 'react-router-dom'
import Detils from './componants/Detils'

function App() {
  return (
    <BrowserRouter>



    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Detils" element={<Detils/>}/>
    </Routes>


    </BrowserRouter>
  )
}

export default App