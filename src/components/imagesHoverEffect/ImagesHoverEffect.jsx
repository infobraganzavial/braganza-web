import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    min-height: calc(100vh - 95px);
    background: ${({theme}) => theme.primaryColor};

    & .services__title {
        padding: 1rem;
        color: ${({theme}) => theme.textDark};
        width: 40%;
        background: rgba(255,255,255,.8);
    }

    & .section__container  {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: inherit;
        background: ${({theme}) => theme.primaryColor};
    }

    & .section__container:hover .clip {
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }

    & .section__container .clip {
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
            opacity: 0;
            transition: .5s;
    }

    & .clip.clip1 {
        /* background: url(assets/images/control.png); */
        background-size: cover;
        background-position: center;
        clip-path: polygon(0 0, 55% 0, 20% 100%, 0% 100%);
    }

    & .clip.clip2 {
        /* background: url(assets/images/air_fryer.png); */
        background-size: cover;
        background-position: center;
        clip-path: polygon(55% 0, 100% 0, 45% 100%, 20% 100%);
    }

    & .clip.clip3 {
        /* background: url(assets/images/shoes.png); */
        background-size: cover;
        background-position: center;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 45% 100%);
    }
`

const ImagesHoverEffect = ({sections}) => {
    const buildSection = () => {
            return sections.map( (c, index) => {
            return <div key={c.id} className={`clip clip${index + 1}`} style={{ backgroundImage: `url(${c.principalImage.url})` }}>
                    <h2 className='services__title'>Nuestros Servicios</h2>
                    <div className='content'>
                        <h2>{c.title}</h2>
                        <p>{c.description}</p>
                    </div>
                </div>
            })
                    
        }
        return (
            <Wrapper id='nuestros-servicios'>
            <div className='section__container'>
                {buildSection()}
            </div>
        </Wrapper>
    )
}

export default ImagesHoverEffect;