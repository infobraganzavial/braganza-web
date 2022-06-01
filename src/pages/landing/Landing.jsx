import React from 'react';

// Components
import Carousel from '../../components/carousel/Carousel';
import ContactUs from '../../components/contactUs/ContactUs';
import AboutUs from '../../components/aboutUs/AboutUs';
import OurProjects from '../../components/ourProjects/OutProjects';
import ImagesHoverEffect from '../../components/imagesHoverEffect/ImagesHoverEffect';

const Landing = () => {

	const slideImages = [
        {
            url: 'https://cdn.discordapp.com/attachments/967459177339424778/968260441711190107/MOVIMIENTO_DE_TIERRA_EN_FACULTAD_DE_VERTERINARIA.jpeg',
        },
        {
            url: 'https://cdn.discordapp.com/attachments/967459177339424778/968186667636777060/2.jpeg',
        },
        {
            url: 'https://cdn.discordapp.com/attachments/967459177339424778/968256862061490286/3.jpeg',
        },
        {
            url: 'https://cdn.discordapp.com/attachments/967459177339424778/968253673014693989/alquileres.jpeg',
        },
        {
            url: 'https://cdn.discordapp.com/attachments/967459177339424778/968186668718891038/5.jpeg',
        },
    ];

	const aboutUs ={
		imageBg : {
			id: 1,
			url: 'https://cdn.discordapp.com/attachments/967459177339424778/968694977070760027/NOSOTROS_3.jpeg'
		},
		content: [
			{
				id: 1,
				title: 'Sobre nosotros',
				description: `Braganza Vial SAS es una empresa especializada en la realización de obras de infraestructura, fundada por el ingeniero Pablo Sánchez y Eduardo Joao, ambos con más de 15 años de experiencia en el rubro.

				Está compuesta por un joven equipo que cuenta con amplia experiencia, y dispone de un extenso parque de maquinaria que permitan la realización de los trabajos de una manera segura y eficiente.

				Cada proyecto para nosotros representa un reto que estamos dispuestos a afrontar con dedicación, siempre mostrando nuestro compromiso en cumplir con las expectativas de nuestros clientes. Nos enfocamos en brindar las mejores soluciones constructivas en base a las necesidades particulares, caracterizándonos por nuestra flexibilidad ante cualquier trabajo, apostando siempre al éxito del proyecto, en cuanto a tiempos de construcción y calidad.`,
			}
		]

	} 

	const ourProjects ={
		imageBg : {
			id: 1,
			url: 'https://cdn.discordapp.com/attachments/967459177339424778/968267304355913748/WhatsApp_Image_2022-04-25_at_6.43.22_PM.jpeg'
		},
		content: [
			{
				id: 1,
				title: 'Plataforma para galpones en Ruta 101 Km 24',
				service: '',
				images : [
					{
						id: 1,
						url: 'https://cdn.discordapp.com/attachments/967459177339424778/967573908607893565/CHERDIL.jpeg'
					}
				],
				alliedCompany: 'Lavalleja, Marzo - Junio  2021'
			},
			{
				id: 2,
				title: 'Saneamiento. Tendido de PEAD cruce CCFC.',
				service: '',
				images : [
					{
						id: 1,
						url: 'https://cdn.discordapp.com/attachments/967459177339424778/968695458530730094/GEOFINAL.jpeg'
					}
				],
				alliedCompany: 'Canelones, Junio - Agosto 2021'
			},
			{
				id: 3,
				title: 'Licitación Pública Nacional 02/2020: Pavimentación circuito “Vejigas- Barrancas”',
				service: '',
				images : [
					{
						id: 1,
						url: 'https://cdn.discordapp.com/attachments/967459177339424778/967573909039902780/OSUSA.jpeg'
					}
				],
				alliedCompany: 'Lavalleja, Marzo - Junio  2021'
			},
			{
				id: 4,
				title: 'UPM2 - Realización de dique impermeable en arcilla, revestido en piedra.',
				service: '',
				images : [
					{
						id: 1,
						url: 'https://cdn.discordapp.com/attachments/967459177339424778/967573909287346227/UPM2_-_DIQUE.jpeg'
					}
				],
				alliedCompany: 'Paso de los Toros, Agosto 2021'
			},
			{
				id: 5,
				title: 'UPM2 - Movimiento de piedra y explosión de piedra con martillo hidráulico.',
				service: '',
				images : [
					{
						id: 1,
						url: 'https://cdn.discordapp.com/attachments/967459177339424778/967573909547397181/UPM2_-_EXPLOSION_PIEDRA.jpeg'
					}
				],
				alliedCompany: 'Paso de los Toros, Agosto 2021'
			},
			{
				id: 6,
				title: 'UPM2 - Excavación y nivelación para caño de pead de 1500.',
				service: '',
				images : [
					{
						id: 1,
						url: 'https://cdn.discordapp.com/attachments/967459177339424778/968695458799173703/UPM2_-_NIVELACION.jpeg'
					}
				],
				alliedCompany: 'Paso de los Toros, Agosto 2021'
			},
		]

	} 

	const sections = [
		{
			id: 1,
			principalImage: {
				url: 'https://cdn.discordapp.com/attachments/967459177339424778/968253339143921794/ALQUILER_6.jpeg',
			 },
			 title:'OBRAS DE INFRAESTRUCTURA',
			 description: 'Nuestra fortaleza son los trabajos referentes a infraestructura: movimiento de suelos, vialidad, redes de agua potable, gas y saneamiento.',
		},
		{
		   id: 2,
		   principalImage: {
			   url: 'https://cdn.discordapp.com/attachments/967459177339424778/968236544710279178/TOPOGRAFIA.jpeg',
		   },
		   title:'OBRAS DE HORMIGÓN ARMADO',
		   description: 'Contamos con vasta experiencia en obras de hormigón armado: pavimentos, alcantarillas, plateas de fundación, etc.',
	   },
	   {
		   id: 3,
		   principalImage: {
			   url: 'https://cdn.discordapp.com/attachments/967459177339424778/968236544324427896/MOVIMIENTO_DE_TIERRA.jpeg',
			},
			title:'ALQUILERES DE MAQUINARIA',
			description: 'Contamos con variedad de equipos con personal capacitado. Entre estos equipos tenemos retroexcavadoras, compactadores, camiones de carga, palas cargadoras, etc.',
		}
	];

	return (
		<>
			<Carousel slideImages={slideImages} />
			<ImagesHoverEffect sections={sections} />
			<AboutUs aboutUs={aboutUs}/>
			<OurProjects ourProjects={ourProjects}/>
			<ContactUs/>
		</>
	);
}




export default Landing;