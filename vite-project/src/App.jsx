import React from 'react'
import Home from './components/Home/Home'
import Servicios from './components/Servicios/Servicios'
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
