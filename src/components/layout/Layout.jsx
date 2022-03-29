import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Modulos propios
import Landing from '../../pages/landing/Landing';
import Header from '../header/Header';
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
                  routerLink: "/inicio",
               },
               {
                  label:'Servicios',
                  routerLink: "/servicios",
               },
               {
                  label:'Nosotros',
                  routerLink: "/nosotros",
               },
               {
                  label:'Proyectos',
                  routerLink: "/proyectos",
               },
               {
                  label:'Contacto',
                  routerLink: "/contacto",
               },
            ];
         /**
          * @property Crea el logo de forma dinámica
          * @classdesc Se crea el logo de manera dinámica, en este caso el logo es una imagen con extención
          * .svg, si bien podemos poner otra imagen con otra extención esta será la más apropiada.
          **/
         const logo = '/logo512.png';
 
    return ( 
        // Creamos nuestro Layout directamente desde App.
        <>
         <Header
                  items = {items}
                  logo = {logo}
         />
         <br/>
         <br/>
        <Routes>
           <Route exact path="/" element={<Landing />}/>
           {/* <Footer brand={footer.brand}
                   socialNetworks={footer.socialNetworks}
                     /> */}
        </Routes>
        </>
     );
}

export default Layout;