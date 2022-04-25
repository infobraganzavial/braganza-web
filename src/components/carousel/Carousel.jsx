// Import Swiper React components
import React, { useRef } from 'react';
// import { generate as id } from 'shortid';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import { generate as id } from "shortid";

// Import Swiper styles
import 'swiper/css';
import './Carousel.css';

const Carousel = ({slideImages}) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    let sw;

    /**
     * @description Cargar SwiperSlide.
     * @returns void
     */
     const buildSwiperSlide = () => {
        return slideImages.map( image => {
            return <SwiperSlide key={id()}>
                <section className='carousel__slide' style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${image.url})`}} >

                </section>
            </SwiperSlide>
        });
    }

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<li key=${id()} class='${className} slider__caption'></li>`;
        }
    }

    return (
        <div
            id='inicio'
            onMouseEnter={() => {if(sw) sw.autoplay.stop()}}
            onMouseLeave={() => {if(sw) sw.autoplay.start()}}
        >
            <Swiper
                onAutoplayPause={() => console.log('slide autoplay')}
                pagination={pagination}
                style={{ '--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}}
                loop={true}
                speed={4000}
                grabCursor={false}
                autoplay={{ 'delay': 4000, 'disableOnInteraction': false }}
                modules={[Autoplay, Navigation, Pagination]}
                onSlideChange={(swiper) => sw = swiper}
                onSwiper={(swiper) => sw = swiper}
                onInit={(swiper) => {
                    sw = swiper;
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {buildSwiperSlide()}
                <div ref={prevRef} className="swiper-button-prev-custom button-arrow-custom"><i className="pi pi-angle-double-left swiper-arrow-size"></i></div>
                <div ref={nextRef} className="swiper-button-next-custom button-arrow-custom"><i className="pi pi-angle-double-right swiper-arrow-size"></i></div>
            </Swiper>
        </div>
    );
}

export default Carousel;