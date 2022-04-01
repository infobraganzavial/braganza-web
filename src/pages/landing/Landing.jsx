import React from 'react';

// Components
import Carousel from '../../components/carousel/Carousel';
import ContactUs from '../../components/contactUs/ContactUs';
import OurServices from '../../components/ourServices/OurServices';

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

    return (
        <>
            <Carousel/>
            <OurServices ourServices={ourServices}/>
            <ContactUs/>
        </>
    );
}




export default Landing;