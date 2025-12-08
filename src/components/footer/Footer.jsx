import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { getFooter, getSocialNetworks } from "../../services/Footer";

const HEADER_OFFSET = 103; // ajustá a la altura real de tu header

const scrollWithOffset = (el) => {
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
};

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
`;
const SocialNetwork = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
  z-index: 1000;
  padding: 0;
`;

const Menu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
  z-index: 1000;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
`;

const Link = styled.a`
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;

  &:hover {
    color: #fff;
    transform: translateY(-10px);
  }
`;

const HashLinkStyled = styled(HashLink).attrs({
  scroll: scrollWithOffset,
})`
  font-size: 1.2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;

  &:hover {
    color: #fff;
    opacity: 1;
  }
`;

const Paragraph = styled.p`
  color: #fff;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1.1em;
`;

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const [socialNetwork, setSocialNetwork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFooter()
      .then((data) => {
        setFooterData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getSocialNetworks()
      .then((data) => {
        setSocialNetwork(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <StyledFooter>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <SocialNetwork className="social_icon">
        {socialNetwork.map((network, index) => (
          <Item key={index}>
            <Link href={network.url} target="_blank" rel="noopener noreferrer">
              <img
                src={network.icon}
                alt={network.url}
                height={30}
                width={30}
              />
            </Link>
          </Item>
        ))}
      </SocialNetwork>
      <Menu className="menu">
        <Item>
          <HashLinkStyled to="#inicio">Inicio</HashLinkStyled>
        </Item>
        <Item>
          <HashLinkStyled to="#nuestros-servicios">Servicios</HashLinkStyled>
        </Item>
        <Item>
          <HashLinkStyled to="#sobre-nosotros">Nosotros</HashLinkStyled>
        </Item>
        <Item>
          <HashLinkStyled to="#proyectos">Proyectos</HashLinkStyled>
        </Item>
        <Item>
          <HashLinkStyled to="#clientes">Clientes</HashLinkStyled>
        </Item>
        <Item>
          <HashLinkStyled to="#contacto">Contacto</HashLinkStyled>
        </Item>
      </Menu>
      <Paragraph>{footerData.slogan}</Paragraph>
      <Paragraph>{footerData.address}</Paragraph>
    </StyledFooter>
  );
};

export default Footer;
