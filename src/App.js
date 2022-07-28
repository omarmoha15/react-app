import React from 'react'
import './App.css';
import Home from './componants/Home'
import { BrowserRouter,Link , Router,Routes,NavLink, Route } from 'react-router-dom'
import Details from './componants/Details'

function App() {
  return (
    <BrowserRouter>



    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details" element={<Details/>}/>
    </Routes>


    </BrowserRouter>
  )
}

export default App