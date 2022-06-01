import styled, { keyframes } from 'styled-components';
import colors from '../../theming/colors';

const loader = keyframes`
    0%,10%,100%{
        width: 0;
    }
    70%,90%{
        width: 100%;
    }
`

const LoaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${colors.lightColor};
`

const H2 = styled.h2`
    color: ${colors.secundaryColor};
    font-size: 3vw;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const Small = styled.small`
    position: relative;
    font-size: 3vw;
    color: ${colors.lightColor};
    -webkit-text-stroke: 0.3vw ${colors.lightColor};
    text-transform: uppercase;

    &::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        height: 100%;
        color: ${colors.secundaryColor};
        -webkit-text-stroke: 0vw ${colors.lightColor};
        overflow: hidden;
        animation: ${loader} 2s linear infinite;
    }
`

const Loader = () => {
    return (<LoaderContainer>
        <H2>Cargando<Small data-text="...">...</Small></H2>
    </LoaderContainer>);
}

export default Loader;