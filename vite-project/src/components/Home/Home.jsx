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
      </div>
          
    <section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <h2 class="section-title dark-blue-text">Proyectos</h2>

         
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text load-hidden">
                <h3 class="project-wrapper__text-title">E-Commerce</h3>
                <div>
                  <p class="mb-4">
                    Este proyecto se llama "El Rincón del Sabiondo" es una página de marketing de libros digitales, donde el usuario puede ingresar sin iniciar sesión y poder conocer los detalles de la aplicación.
                    En caso de que quieras comprar, debes iniciar sesión. También tiene un panel de administración. Donde el administrador controla los movimientos de los usuarios registrados, como compras, suscripciones y si están activos o no. El administrador también controla el stock de los libros, pudiendo así deshabilitar el libro que no está en stock.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="cta-btn cta-btn--hero"
                  href="https://el-rincon-del-sabiondo-eta.vercel.app"
                >
                Ver en vivo
                </a> 
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image load-hidden">
                
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    class="thumbnail rounded js-tilt"
                  >
                  
                  </div>
                
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text load-hidden">
                <h3 class="project-wrapper__text-title">Página Web</h3>
                <div>
                  <p class="mb-4">
                    Este proyecto se llama "FOOD" es una página de búsqueda de recetas, donde el usuario interesado puede visualizar su receta preferida. La página cuenta con un amplio menú, entre ellos comidas saludables, bebidas y postres. También existe la posibilidad de que el usuario pueda crear su propia receta y ésta será publicada para la comunidad alrededor del mundo de la web.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="cta-btn cta-btn--hero"
                  href="https://www.youtube.com/watch?v=aYVkL5bbpoU"
                >
                Ver en vivo
                </a> 
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image load-hidden">
                
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    class="thumbnail rounded js-tilt"
                  >
                    
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
