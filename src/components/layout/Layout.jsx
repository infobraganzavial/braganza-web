import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Modulos propios
import Landing from '../../pages/landing/Landing';
// import Header from '../header/Header';
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
                  label :'Tecnologías',
                  routerLink: "/tecnologias",
                  items : [
                     {
                        label:'Sistemas de Información Geográfica',
                        routerLink: "/gis",
                     },
                     {
                        label:'Sistemas de Posicionamiento Global',
                        routerLink: "/gps",
                     },
                     {
                        label:'GeoAI',
                        routerLink: "/geoai",
                     },
                     {
                        label:'Optimización',
                        routerLink: "/optimizacion",
                     },
                     {
                        label:'Teleobservación',
                        routerLink: "/teleobservacion",
                     },
                  ]
               },
               {
                  label:'Productos',
                  routerLink: "/productos",
                  items : [
                     {
                        label:'Esri',
                        routerLink: "/esri",
                     },
                     {
                        label:'Maxar',
                        routerLink: "/maxar",
                     },
                     {
                        label:'Airbus',
                        routerLink: "/airbus",
                     },
                     {
                        label:'fwLogistic',
                        routerLink: "/fwLogistic",
                     },
                     {
                        label:'Cartografía del Uruguay',
                        routerLink: "/cartografia-uruguay",
                     },
                  ]
               },
               {
                  label:'Soluciones',
                  routerLink: "/soluciones",
                  items : [
                     {
                        label:'Agrícola',
                        routerLink: "/agricola",
                     },
                     {
                        label:'Forestal',
                        routerLink: "/forestal",
                     },
                     {
                        label:'Energía y Gas',
                        routerLink: "/energia-gas",
                     },
                     {
                        label:'Gestión Urbana y Catastro',
                        routerLink: "/gestion-urbana-catastro",
                     },
                     {
                        label:'Bancario',
                        routerLink: "/bancario",
                     },
                     {
                        label:'Logística y Mercado',
                        routerLink: "/logistica-mercado",
                     },
                     {
                        label:'Infraestructura y Servicios',
                        routerLink: "/infraestructura-servicios",
                     },
                     {
                        label:'Gobierno Local',
                        routerLink: "/Ggobierno-local",
                     },
                  ]
               },
               {
                  label:'Servicios',
                  routerLink: "/servicios",
                  items: [
                     {
                        label:'Capacitaciones',
                        routerLink: "/capacitaciones",
                     },
                     {
                        label:'Consultoría y Desarrollo',
                        routerLink: "/consultoria-desarrollo",
                     },
                     {
                        label:'Servicio GIS',
                        routerLink: "/servicio-GIS",
                     },
                     {
                        label:'Procesamiento de Imágenes',
                        routerLink: "/procesamiento-imagenes",
                     },
                  ]
               },
               {
                  label:'Nosotros',
                  routerLink: "/nosotros",
               },
            ];
         /**
          * @property Crea el logo de forma dinámica
          * @classdesc Se crea el logo de manera dinámica, en este caso el logo es una imagen con extención
          * .svg, si bien podemos poner otra imagen con otra extención esta será la más apropiada.
          **/
         const logo = '/logo512.png';
         const logo2 = '/assets/esri.svg';
         const search = '/assets/search-interface-symbol.png';
         const footer = {
            brand: '/assets/footer/thescienceofwhere.svg',
            socialNetworks: [
               {
                  name: 'facebook',
                  url: '#',
                  logo: '/assets/footer/facebook.png'
               },
               {
                  name: 'instagram',
                  url: '#',
                  logo: '/assets/footer/instagram.png'
               },
               {
                  name: 'linkedin',
                  url: '#',
                  logo: '/assets/footer/linkedin.png'
               },
               {
                  name: 'twitter',
                  url: '#',
                  logo: '/assets/footer/twitter.png'
               },
               {
                  name: 'youtube',
                  url: '#',
                  logo: '/assets/footer/youtube.png'
               },
               {
                  name: 'flickr',
                  url: '#',
                  logo: '/assets/footer/flickr.png'
               }
            ]
         }
 
    return ( 
        // Creamos nuestro Layout directamente desde App.
        <Routes>
           {/* <Header
                    items = {items}
                    logo = {logo}
                    logo2 = {logo2}
                    search = {search}
            /> */}
           <Route exact path="/" element={<Landing />}/>
           {/* <Footer brand={footer.brand}
                   socialNetworks={footer.socialNetworks}
                     /> */}
        </Routes>
     );
}

export default Layout;