import React from 'react';

// Components
import Carousel from '../../components/carousel/Carousel';
import ContactUs from '../../components/contactUs/ContactUs';
import OurServices from '../../components/ourServices/OurServices';
import OurProjects from '../../components/ourProjects/OurProjects';

const Landing = () => {

    const ourServices ={
        imageBg : {
            id: 1,
            url: 'https://cdn.discordapp.com/attachments/953783217071226941/958814682523774976/serviceBackground.png'
        },
        services: [
            {
                id: 1,
                title: 'Obras de movimiento de suelos e infraestructura',
                shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis est eum laborum quae cum ratione enim adipisci, tempore possimus officiis at quasi repudiandae, tempora laudantium sequi dolores quis similique vero?',
                images : [
                    {
                        id: 1,
                        url: 'https://cdn.discordapp.com/attachments/953783217071226941/958826408560447538/service1.jpg'
                    }
                ]
            },
            {
                id: 2,
                title: 'Alquiles de Maquinaria',
                shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis est eum laborum quae cum ratione enim adipisci, tempore possimus officiis at quasi repudiandae, tempora laudantium sequi dolores quis similique vero?',
                images : [
                    {
                        id: 2,
                        url: 'https://cdn.discordapp.com/attachments/953783217071226941/958827197370613760/service2.jpg'
                    }
                ]
            },
        ]

    } 

    const ourProjects ={
        imageBg : {
            id: 1,
            url: 'https://img.freepik.com/foto-gratis/excavadora-cavando-suelo-luz-dia_23-2149194775.jpg?w=1380&t=st=1649293241~exp=1649293841~hmac=4df9ede8c630510cefea3a604da39c65231b12859e4cec364840d2cedf44c5a2'
        },
        content: [
            {
                id: 1,
                title: 'Sobre nosotros',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis est eum laborum quae cum ratione enim adipisci, tempore possimus officiis at quasi repudiandae, tempora laudantium sequi dolores quis similique vero?',
            },
            {
                id: 2,
                title: 'Misión',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis est eum laborum quae cum ratione enim adipisci, tempore possimus officiis at quasi repudiandae, tempora laudantium sequi dolores quis similique vero?',
                
            },
            {
                id: 2,
                title: 'Vision',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis est eum laborum quae cum ratione enim adipisci, tempore possimus officiis at quasi repudiandae, tempora laudantium sequi dolores quis similique vero?',
                
            },
        ]

    } 

    return (
        <>
            <Carousel/>
            <OurServices ourServices={ourServices}/>
            <OurProjects ourProjects={ourProjects}/>
            <ContactUs/>
        </>
    );
}




export default Landing;