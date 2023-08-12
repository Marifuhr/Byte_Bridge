import React from 'react'
import NavBar from '../NavBar/NavBar'
import style from './Servicios.module.css'
import eCommerce from '../../assets/eCommerce.jpeg'
import pagina from '../../assets/pagina.jpeg'
import gestion from '../../assets/gestion.jpeg'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default function Servicios() {
  return (
    <div>
      <NavBar />
      <Link to="/home">
        <button className={style.btn}>Volver</button>
      </Link>
      <div >
      <h1 className={style.h1}>Nuestros Servicios
      </h1>
        <img className={style.img} src={eCommerce} alt="Not Found" />
<>
<img className={style.img1} src={pagina} alt="Not found" />
</>
<img className={style.img2} src={gestion} alt="Noy Found" />
      </div>
      <div className={style.footer}>
<Footer />
      </div>
      
    </div>
  )

}
