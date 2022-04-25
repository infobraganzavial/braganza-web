import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #111;

    & .services__title {
        padding: 1rem;
        color: ${({theme}) => theme.textDark};
        width: 40%;
        background: rgba(255,255,255,.8);
    }

    & .services__container  {
        position: relative;
        width: 100%;
        height: 100vh;
        background: #222;
    }

    & .services__container:hover .clip {
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }

    & .services__container .clip {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: .5s;

        &:hover {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        &:hover .content{
            bottom: 0;
            opacity: 1;
        }
    }

    & .clip .content {
            position: absolute;
            bottom: -100%;
            left: 0;
            width: 70%;
            padding: 20px;
            background: #fff;
            color: ${({theme}) => theme.textDark};
            opacity: 0;
            transition: .5s;
    }

    & .clip.clip1 {
        /* background: url(assets/slider/gis.jpg); */
        background-size: cover;
        clip-path: polygon(0 0, 55% 0, 20% 100%, 0% 100%);
    }

    & .clip.clip2 {
        /* background: url(assets/slider/gis1.jpg); */
        background-size: cover;
        clip-path: polygon(55% 0, 100% 0, 45% 100%, 20% 100%);
    }

    & .clip.clip3 {
        /* background: url(assets/slider/gis3.jpg); */
        background-size: cover;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 45% 100%);
    }
`

const Services = ({services}) => {
    const buildCourse = () => {
        return services.map(s => {
            return (
                <div className='services__container' key={s.id}>
                    <div className='clip clip1' style={{ backgroundImage: `url(${s.principalImage.url})` }}>
                        <h2 className='services__title'>Cursos</h2>
                        <div className='content'>
                            <h2>{s.title}</h2>
                            <p>{s.description}</p>
                        </div>
                    </div>
                    <div className='clip clip2' style={{ backgroundImage: `url(${s.images[0].url})` }}>
                        <h2 className='services__title'>Cursos</h2>
                        <div className='content'>
                            <h2>{s.title}</h2>
                            <p>{s.description}</p>
                        </div>
                    </div>
                    <div className='clip clip3' style={{ backgroundImage: `url(${s.images[1].url})` }}>
                        <h2 className='services__title'>Cursos</h2>
                        <div className='content'>
                            <h2>{s.title}</h2>
                            <p>{s.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <Wrapper>
            {buildCourse()}
        </Wrapper>
    )
}

export default Services;