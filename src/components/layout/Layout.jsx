import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Landing from '../../pages/landing/Landing';
import Header from '../header/Header';
import ContactBar from '../contactBar/ContactBar';
import Footer from '../footer/Footer';
// import Footer from '../footer/Footer';

const Layout = (props) => {
    /**
     * El array items tiene diferentes labels los cuales contienen distintos nombres. Estos nombres serán
     * los que se verán en nuestra barra de navegación.
     * También tenemos la posibilidad de hacer una lista autodesplegable al hacerclic sobre un label, esto lo hacemos
     * agregando otro array de items dentro de un label, como lo es en el ejemplo de home.
     * @namespace
     * @typedef {object} state Estado del componente
     * @property {object[]} items Crea los distintos elementos del navbar
     * @property 
     */
     const items = [
               {
                  label :'Inicio',
                  routerLink: "/#inicio",
               },
               {
                  label:'Servicios',
                  routerLink: "/#nuestros-servicios",
               },
               {
                  label:'Nosotros',
                  routerLink: "/#sobre-nosotros",
               },
               {
                  label:'Proyectos',
                  routerLink: "/#proyectos",
               },
               {
                  label:'Contacto',
                  routerLink: "/#contacto",
               },
            ];
         /**
          * @property Crea el logo de forma dinámica
          * @classdesc Se crea el logo de manera dinámica, en este caso el logo es una imagen con extención
          * .svg, si bien podemos poner otra imagen con otra extención esta será la más apropiada.
          **/
         const logo = '/logo512.png';
         const logoMobile = '/logo192.png';


         const socialNetworks = [
            {
               href: 'https://www.instagram.com/',
               alt: 'instagram',
               img: '/assets/svg/instagram-footer.svg'
            },
            {
               href: 'https://web.whatsapp.com/',
               alt: 'whatsapp',
               img: '/assets/svg/whatsapp.svg'
            },
            {
               href: 'https://www.facebook.com/',
               alt: 'facebook',
               img: '/assets/svg/facebook2.svg'
            },
         ];
 
    return ( 
        // Creamos nuestro Layout directamente desde App.
        <>
         <ContactBar/>
         <Header
                  items = {items}
                  logo = {logo}
                  logoMobile = {logoMobile}
                  hashLink
         />
         <Routes>
            <Route exact path="/" element={<Landing />}/>
         </Routes>
         <Footer socialNetworks={socialNetworks} />
        </>
     );
}

export default Layout;