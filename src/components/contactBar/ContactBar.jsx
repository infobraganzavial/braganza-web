import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getContactBar,
  getContactBarSocialNetwork,
} from "../../services/ContactBar";

// Presentational Component

// import Loader from "../../components/loader/Loader";

// Theming
// import colors from '../../theming/colors.js';

// Services
// import { ContactUsService } from "../../services/api/CountryService";

const ContactBarContainer = styled.aside`
  position: fixed;
  display: flex;
  justify-content: space-around;
  top: 0;
  left: 0;
  padding: 0 100px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background: #000;
  z-index: 1010;
  color: #dedede;
`;
const ContactBarSection1 = styled.section`
  display: flex;
  align-items: center;
  width: 60%;
`;
const ContactBarSection2 = styled.section`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;

  &:hover {
    color: #fff;
  }
`;

const ContactBarIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: block;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;

  & .img-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.5s;
  }

  & .img-icon:hover {
    transform: scale(1.1);
  }
`;

const ContactBarGroup = styled.div`
  display: flex;
  width: fit-content;
  margin-right: 10px;
  align-items: center;
`;

const ContactBarLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  list-style: none;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const API_URL = process.env.REACT_APP_URL_API;

const ContactBar = () => {
  const [contact, setContact] = useState(null);
  const [contactSocialNetwork, setContactSocialNetwork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getContactBar()
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getContactBarSocialNetwork()
      .then((data) => {
        setContactSocialNetwork(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <ContactBarContainer>Cargando...</ContactBarContainer>;
  if (error) return <ContactBarContainer>Error: {error}</ContactBarContainer>;
  if (!contact) return null;

  return (
    <ContactBarContainer className="contact-bar__containner">
      <ContactBarSection1>
        <ContactBarGroup>
          <ContactBarLink
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactBarIcon>
              <img
                className="img-icon"
                src={`${contact.iconEmail}`}
                alt="email icon"
              />
            </ContactBarIcon>
            <span>{contact.email}</span>
          </ContactBarLink>
        </ContactBarGroup>
        <ContactBarGroup>
          <ContactBarLink
            href={`tel:${contact.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactBarIcon>
              <img
                className="img-icon"
                src={`${contact.iconPhone}`}
                alt="phone icon"
              />
            </ContactBarIcon>
            <span>{contact.phone}</span>
          </ContactBarLink>
        </ContactBarGroup>
        <ContactBarGroup>
          <ContactBarLink
            href={`https://wa.me/${contact.whatsapp}?text=${contact.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactBarIcon>
              <img
                className="img-icon"
                src={`${contact.iconWhatsapp}`}
                alt="whatsapp icon"
              />
            </ContactBarIcon>
            <span>{contact.whatsapp}</span>
          </ContactBarLink>
        </ContactBarGroup>
      </ContactBarSection1>

      <ContactBarSection2>
        {contactSocialNetwork.map((socialNetwork) => (
          <ContactBarIcon key={socialNetwork.id}>
            <Link
              href={socialNetwork.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-icon"
                src={`${socialNetwork.icon}`}
                alt={`icon`}
              />
            </Link>
          </ContactBarIcon>
        ))}
      </ContactBarSection2>
    </ContactBarContainer>
  );
};

export default ContactBar;
