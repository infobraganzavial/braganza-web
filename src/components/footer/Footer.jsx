
import styled from 'styled-components';
import { generate as id } from "shortid";
import { HashLink } from 'react-router-hash-link';

const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    background: #008d39;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SocialNetwork = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
    z-index: 1000;
`

const Menu = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
    z-index: 1000;
`

const Item = styled.li`
    list-style: none;
`

const Link = styled.a`
    font-size: 2em;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: .5s;

    &:hover {
        color: #fff;
        transform: translateY(-10px);
    }
`

const HashLinkStyled = styled(HashLink)`
    font-size: 1.2em;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: .5s;
    text-decoration: none;
    opacity: 0.75;

    &:hover {
        color: #fff;
        opacity: 1;
    }
`

const Paragraph = styled.p`
    color: #fff;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1.1em;
`

const Footer = ({socialNetworks}) => {
    return (
        <StyledFooter>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <SocialNetwork className="social_icon">
                <Item>
                    <Link href="http://" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>
                </Item>
                <Item>
                    <Link href="http://" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </Link>
                </Item>
                <Item>
                    <Link href="http://" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                </Item>
            </SocialNetwork>
            <Menu className="menu">
                <Item>
                    <HashLinkStyled to='#inicio'>Inicio</HashLinkStyled>
                </Item>
                <Item>
                    <HashLinkStyled to='#nuestros-servicios'>Servicios</HashLinkStyled>
                </Item>
                <Item>
                    <HashLinkStyled to='#sobre-nosotros'>Nosotros</HashLinkStyled>
                </Item>
                <Item>
                    <HashLinkStyled to='#proyectos'>Proyectos</HashLinkStyled>
                </Item>
                <Item>
                    <HashLinkStyled to='#contacto'>Contacto</HashLinkStyled>
                </Item>
            </Menu>
            <Paragraph>Powered by Develsoft</Paragraph>
    </StyledFooter>
    )
}

export default Footer;