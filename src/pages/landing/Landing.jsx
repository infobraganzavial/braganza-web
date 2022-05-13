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
				description: `Braganza Vial SAS es una empresa especializada en la realización de obras de infraestructura y saneamiento, que surge de la necesidad de unir los conocimientos adquiridos por el ingeniero Pablo Sánchez a lo largo de su carrera profesional, en conjunto con la experiencia de Eduardo Joao, quien ha dedicado años de su vida al rubro.

				A pesar de que nuestra empresa tiene poco tiempo de fundada, el equipo que lo compone cuenta con amplia experiencia en colaboraciones con proyectos de gran envergadura, además de disponer de maquinaria de calidad que permitan la realización de los trabajos de una manera segura y eficiente.

				Cada proyecto para nosotros representa un reto que estamos dispuestos a afrontar con dedicación, siempre mostrando nuestro compromiso en cumplir con las expectativas de nuestros clientes. Nos enfocamos en brindar las mejores soluciones constructivas en base a las necesidades de nuestros clientes, caracterizándonos por nuestra flexibilidad ante cualquier trabajo, apostando siempre al éxito del proyecto, en cuanto a tiempos de construcción y calidad.`,
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
				url: 'https://cdn.discordapp.com/attachments/967459177339424778/968236544324427896/MOVIMIENTO_DE_TIERRA.jpeg',
			},
			title:'ALQUILERES DE MAQUINARIA',
			description: 'Contamos con variedad de equipos dispuestos a ser alquilados para la realización de distintos trabajos y al personal capacitado para su manejo. Entre estos equipos tenemos retroexcavadoras, excavadoras de pala de diferentes capacidades, compactadoras, camiones para carga, entre otros.',
		},
		{
		   id: 2,
		   principalImage: {
			   url: 'https://cdn.discordapp.com/attachments/967459177339424778/968236544710279178/TOPOGRAFIA.jpeg',
		   },
		   title:'CÁLCULO DE VOLUMEN Y RELEVAMIENTO',
		   description: 'Hacemos relevamientos de superficies, replanteos de información en sitio para seguimiento de proyectos, cálculo de volúmenes de material y estimación de los mismos en base a las especificaciones del proyecto.',
	   },
	   {
		   id: 3,
		   principalImage: {
			  url: 'https://cdn.discordapp.com/attachments/967459177339424778/968253339143921794/ALQUILER_6.jpeg',
		   },
		   title:'OBRAS DE MOVIMIENTO DE SUELOS E INFRAESTRUCTURA',
		   description: 'Nuestro fuerte es realizar trabajos referentes a infraestructura, vialidad y de saneamiento. Realizamos trabajos de excavación, compactación de rellenos, demolición, incluyendo el transporte de los mismos desde el lugar de préstamo, o al vertedero.',
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