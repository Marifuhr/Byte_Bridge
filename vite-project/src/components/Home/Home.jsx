// import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {/* <h1 className={styles.title}>Nuestra Historia</h1> */}
        <div className={styles.textContainer}>
          <h2>
            Nuestro entusiasta equipo de desarrolladores web recién recibidos está ingresando con fuerza en el mundo de la tecnología, listos para ofrecer soluciones digitales a medida para pequeñas y medianas empresas. Con un enfoque en el diseño y desarrollo de páginas web atractivas y funcionales, así como en la implementación de plataformas de comercio electrónico y la gestión de redes sociales, nuestro equipo está comprometido en brindar servicios de calidad que impulsen el crecimiento y la visibilidad en línea de nuestros clientes. Con una combinación de creatividad, conocimiento técnico y pasión por la innovación, nos esforzamos por crear experiencias digitales únicas y efectivas que se alineen con las necesidades y objetivos de cada empresa con la que trabajamos.
          </h2>
          <Link to="/servicios" className={styles.button}>
            Ver servicios
          </Link>
        </div>
        <div>
          <h2 className={styles.pro}>Proyectos</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
