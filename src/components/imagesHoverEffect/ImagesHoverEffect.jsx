import React from 'react';
import { useState } from 'react';

import styled, { css, keyframes } from 'styled-components';

const fadeInLeft = keyframes`
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
`

const Toggle = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    z-index: 10;
    right: 10px;
    top: 10px;
    background-color: #fff;
    display: none;
    ${({isActive}) => isActive && css`
        display: flex;
    `}
    animation: ${fadeInLeft} .5s;
`

const DivClip = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
    filter: grayscale(100%);
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    min-height: calc(100vh - 95px);
    overflow: hidden;
    /* background: ${({theme}) => theme.primaryColor}; */

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
        /* background: ${({theme}) => theme.primaryColor}; */
    }

    & .section__container:hover .clip {
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }

    & .section__container .clip {
        &:hover {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            filter: grayscale(0);
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
        background-size: cover;
        background-position: center;
        clip-path: polygon(0 0, 55% 0, 20% 100%, 0% 100%);
    }

    & .clip.clip2 {
        background-size: cover;
        background-position: center;
        clip-path: polygon(55% 0, 100% 0, 45% 100%, 20% 100%);
    }

    & .clip.clip3 {
        background-size: cover;
        background-position: center;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 45% 100%);
    }
`

const ImagesHoverEffect = ({sections}) => {

    const [active, setActive] = useState(false);

    const buildSection = () => {
            return sections.map( (c, index) => {
            return <DivClip key={c.id} 
                        className={`clip clip${index + 1}`} 
                        style={{ backgroundImage: `url(${c.principalImage.url})` }}
                        onTouchStart={ (e) => setActive(true) }
                        >
                    <h2 className='services__title'>Nuestros Servicios</h2>
                    <div className='content'>
                        <h2>{c.title}</h2>
                        <p>{c.description}</p>
                    </div>
                </DivClip>
            })
                    
        }
        return (
            <Wrapper id='nuestros-servicios'>
            <Toggle
                onClick={() => setActive(false)}
                isActive={active}
            >
                <i className="fa-solid fa-xmark"></i>
            </Toggle>
            <div className='section__container'>
                {buildSection()}
            </div>
        </Wrapper>
    )
}

export default ImagesHoverEffect;