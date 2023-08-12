import React from 'react'
import logo from '../../assets/logo-mary.png'
import './NavBar.css'



export default function NavBar() {
  return (
    <div className="navbar-container">
    <div className="navbar">
      <img src={logo} alt="not found" className='logo'/>
    </div>
    </div>
  )
}
