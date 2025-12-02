import React, { useEffect, useState } from "react";

// Components
import Carousel from "../../components/carousel/Carousel";
import ContactUs from "../../components/contactUs/ContactUs";
import AboutUs from "../../components/aboutUs/AboutUs";
import OurProjects from "../../components/ourProjects/OutProjects";
import ImagesHoverEffect from "../../components/imagesHoverEffect/ImagesHoverEffect";
import { getCarousel } from "../../services/Carousel";
import { getServices } from "../../services/Services";
import { getAboutUs } from "../../services/AboutUs";

const Landing = () => {
  const [slideImages, setSlideImages] = useState([]);
  const [services, setServices] = useState([]);
  const [aboutUs, setAboutUs] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCarousel()
      .then((data) => {
        setSlideImages(data.images);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getAboutUs()
      .then((data) => {
        setAboutUs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log("aboutUs in Landing component:", aboutUs);

  // const aboutUs = {
  //   imageBg: {
  //     id: 1,
  //     url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763752120/CONAPROLE_-_Excavaciones_-_Pavimentos_sj7rgt.webp",
  //   },
  //   content: [
  //     {
  //       id: 1,
  //       title: "SOBRE NOSOTROS",
  //       description: (
  //         <>
  //           <p>
  //             Braganza Vial SAS es una empresa especializada en la realización
  //             de obras de infraestructura, fundada por Eduardo Joao, con más de
  //             15 años de experiencia en el rubro.
  //           </p>
  //           <p>
  //             Está compuesta por un joven equipo que cuenta con amplia
  //             experiencia, y dispone de un extenso parque de maquinaria que
  //             permitan la realización de los trabajos de una manera segura y
  //             eficiente.
  //           </p>
  //           <p>
  //             Cada proyecto para nosotros representa un reto que estamos
  //             dispuestos a afrontar con dedicación, siempre mostrando nuestro
  //             compromiso en cumplir con las expectativas de nuestros clientes.
  //             Nos enfocamos en brindar las mejores soluciones constructivas en
  //             base a las necesidades particulares, caracterizándonos por nuestra
  //             flexibilidad ante cualquier trabajo, apostando siempre al éxito
  //             del proyecto, en cuanto a tiempos de construcción y calidad.
  //           </p>
  //         </>
  //       ),
  //     },
  //   ],
  // };

  const ourProjects = {
    imageBg: {
      id: 1,
      url: "https://res.cloudinary.com/dc2jukw2z/image/upload/v1763752659/CONAPROLE_-_Movimiento_de_Suelos_-_Plataformas_gpkidm.webp",
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

  return (
    <>
      <Carousel slideImages={slideImages} />
      <ImagesHoverEffect sections={services} />
      <AboutUs aboutUs={aboutUs} />
      <OurProjects ourProjects={ourProjects} />
      <ContactUs />
    </>
  );
};

export default Landing;
