import React from "react";

// Components
import Carousel from "../../components/carousel/Carousel";
import ContactUs from "../../components/contactUs/ContactUs";
import AboutUs from "../../components/aboutUs/AboutUs";
import OurProjects from "../../components/ourProjects/OutProjects";
import ImagesHoverEffect from "../../components/imagesHoverEffect/ImagesHoverEffect";

const Landing = () => {
  const slideImages = [
    {
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750178/BERKER_-_Plataformas_etugux.webp",
    },
    {
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750280/BERKER_-_Excavaciones_-_Vial_hnepgf.webp",
    },
    {
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750281/BERKER_-_Movimiento_de_Suelos_-_Sistema_Vial_sohyw9.webp",
    },
    {
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750284/BERKER_Ecavaciones_Infraestructura_xnqmyo.webp",
    },
    {
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750283/CERRO_COLORADO_-_Lagunas_de_Tratamiento_ohipzw.webp",
    },
  ];

  const aboutUs = {
    imageBg: {
      id: 1,
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763752120/CONAPROLE_-_Excavaciones_-_Pavimentos_sj7rgt.webp",
    },
    content: [
      {
        id: 1,
        title: "Sobre nosotros",
        description: `Braganza Vial SAS es una empresa especializada en la realización de obras de infraestructura, fundada por Eduardo Joao, con más de 15 años de experiencia en el rubro.

				Está compuesta por un joven equipo que cuenta con amplia experiencia, y dispone de un extenso parque de maquinaria que permitan la realización de los trabajos de una manera segura y eficiente.
				
				Cada proyecto para nosotros representa un reto que estamos dispuestos a afrontar con dedicación, siempre mostrando nuestro compromiso en cumplir con las expectativas de nuestros clientes. Nos enfocamos en brindar las mejores soluciones constructivas en base a las necesidades particulares, caracterizándonos por nuestra flexibilidad ante cualquier trabajo, apostando siempre al éxito del proyecto, en cuanto a tiempos de construcción y calidad.`,
      },
    ],
  };

  const ourProjects = {
    imageBg: {
      id: 1,
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751268/CONAPROLE_-_Movimiento_de_Suelos_-_Plataformas_bfjbks.webp",
    },
    content: [
      {
        id: 1,
        title: "Plataforma para galpones en Ruta 101 Km 24",
        service: "",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751272/MEVIR_-_Cerrillos_-_Muro_Hormig%C3%B3n_Armado_idpnqg.webp",
          },
        ],
        alliedCompany: "Lavalleja, Marzo - Junio  2021",
      },
      {
        id: 2,
        title: "Saneamiento. Tendido de PEAD cruce CCFC.",
        service: "",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751273/MEVIR_-_Cerrillos_Movimiento_de_Suelos_-_Plataformas_tbu7zx.webp",
          },
        ],
        alliedCompany: "Canelones, Junio - Agosto 2021",
      },
      {
        id: 3,
        title:
          "Licitación Pública Nacional 02/2020: Pavimentación circuito “Vejigas- Barrancas”",
        service: "",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751270/MEVIR_-_Caraguat%C3%A1_-_Excavaciones_-_Alcantarillas_-_Hrmigones_qrfvg8.webp",
          },
        ],
        alliedCompany: "Lavalleja, Marzo - Junio  2021",
      },
      {
        id: 4,
        title:
          "UPM2 - Realización de dique impermeable en arcilla, revestido en piedra.",
        service: "",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751275/MEVIR_-_Cerrillos_-_Conformaci%C3%B3n_Plataformas_c737fy.webp",
          },
        ],
        alliedCompany: "Paso de los Toros, Agosto 2021",
      },
      {
        id: 5,
        title:
          "UPM2 - Movimiento de piedra y explosión de piedra con martillo hidráulico.",
        service: "",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751277/MEVIR_-_Cerrillos_Conformaci%C3%B3n_Plataformas_owf4l8.webp",
          },
        ],
        alliedCompany: "Paso de los Toros, Agosto 2021",
      },
      {
        id: 6,
        title: "UPM2 - Excavación y nivelación para caño de pead de 1500.",
        service: "",
        images: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763751492/MEVIR_-_Cerrillos_Movimiento_de_Suelos_-_Plataformas_kctzp9.webp",
          },
        ],
        alliedCompany: "Paso de los Toros, Agosto 2021",
      },
    ],
  };

  const sections = [
    {
      id: 1,
      principalImage: {
        url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750541/CERRO_COLORDO_Lagunas_de_Tratamiento_wmyi4n.webp",
      },
      title: "OBRAS DE INFRAESTRUCTURA",
      description: (
        <>
          En Braganza Vial nuestra fortaleza es la cercanía con los clientes, el
          compromiso con un trabajo eficiente y de calidad.
          <br />
          <br />
          Nos especializamos en:
          <ul>
            <li>Movimiento de suelos</li>
            <li>Vialidad</li>
            <li>Redes de saneamiento</li>
            <li>Redes de Agua potable</li>
            <li>Redes de Gas</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      principalImage: {
        url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750541/MEVIR_-_Cerrillos_-_Muro_Hormig%C3%B3n_Armado_embrwo.webp",
      },
      title: "OBRAS DE HORMIGÓN ARMADO",
      description: (
        <>
          Contamos con una amplia trayectoria en la ejecución de obras de
          hormigón armado, aplicando controles de calidad rigurosos en cada
          etapa.
          <br />
          <br />
          Realizamos:
          <ul>
            <li>Pavimentos</li>
            <li>Alcantarillado</li>
            <li>Plateas de fundación</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      principalImage: {
        url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763750539/CONAPROLE_-_Movimiento_de_Suelos_otri48.webp",
      },
      title: "ALQUILERES DE MAQUINARIA",
      description: (
        <>
          Brindamos un servicio integral de alquiler de maquinaria con:
          <br />
          <br />
          <ul>
            <li>Personal idóneo y capacitado</li>
            <li>Equipos modernos y seguros, entre ellos:</li>
            <ul>
              <li>Excavadoras</li>
              <li>Retroexcavadoras</li>
              <li>Cilindros compactadores</li>
              <li>Autocargador de hormigón</li>
              <li>Camiones cargadores</li>
              <li>Motoniveladoras</li>
            </ul>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <Carousel slideImages={slideImages} />
      <ImagesHoverEffect sections={sections} />
      <AboutUs aboutUs={aboutUs} />
      <OurProjects ourProjects={ourProjects} />
      <ContactUs />
    </>
  );
};

export default Landing;
