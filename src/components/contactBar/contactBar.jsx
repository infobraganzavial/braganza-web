// import { useState } from "react";
import styled from 'styled-components';

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
    z-index: 20;
    color: #dedede;
`
const ContactBarSection1 = styled.section`
    display: flex;
    align-items: center;
    width: 60%;
`;
const ContactBarSection2 = styled.section`
    display: flex;
    align-items: center;

`

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

    & img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: .5s;
    }

    & img:hover {
        transform: scale(1.1);
    }
`;

const ContactBarGroup = styled.div`
    display: flex;
    width: fit-content;
    margin-right: 10px;
    align-items: center;
`

const ContactBar = () => {

    // const [loading, setLoading] = useState(false);

    // if(loading) return (
    //     <>
    //     {/* <Loader /> */}
    //     {/* <Dialog 
    //             position='bottom-left'
    //             showToast={showToast}
    //             /> */}
    //     </>
    // );

    return (
        <ContactBarContainer className="contact-bar__containner">
            <ContactBarSection1>
                <ContactBarGroup>
                    <ContactBarIcon><img src="/assets/svg/email.svg" alt="" /></ContactBarIcon>
                    <span>Correo</span>
                </ContactBarGroup>
                <ContactBarGroup>
                    <ContactBarIcon><img src="/assets/svg/phone-number.svg" alt="" /></ContactBarIcon>
                    <span>Teléfono</span>
                </ContactBarGroup>
                <ContactBarGroup>
                    <ContactBarIcon><img src="/assets/svg/whatsapp.svg" alt="" /></ContactBarIcon>
                    <span>Whatsapp</span>
                </ContactBarGroup>
            </ContactBarSection1>
            <ContactBarSection2>
                <ContactBarIcon><img src="/assets/svg/facebook2.svg" alt="" /></ContactBarIcon>
                <ContactBarIcon><img src="/assets/svg/instagram.svg" alt="" /></ContactBarIcon>
            </ContactBarSection2>
        </ContactBarContainer>
    );
}

export default ContactBar;