import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
      Hola
      <Link to="/about">
      <button>Sobre Nosotros</button>
      </Link>
      <Footer />
    </div>
  )
}
