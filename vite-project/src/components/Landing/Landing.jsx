import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo-mary.png'
import style from '../Landing/Landing.module.css'



export default function Landing() {
  return (
    <div>
        <img src={logo} alt="Not found" />
      {/* <Link to="/home">
      <button>Home</button>
      </Link> */}
      <>
      <h2 className={style.landing}>Somos un Equipo de Programadores con experiencia en el área de Desarrollo, Diseño y Marketing Digital</h2>
      </>
      <>
      <div className={style.btn}>
         <Link to="/home">
      <button>Bienvenidos</button>
      </Link> 
      </div>
      </>
    </div>
    
  )
}
