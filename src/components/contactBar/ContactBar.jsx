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
    z-index: 1010;
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

const Link = styled.a`
    font-size: 2em;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: .5s;

    &:hover {
        color: #fff;
    }
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

    & ion-icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: .5s;
    }

    & ion-icon:hover {
        transform: scale(1.1);
    }
`;

const ContactBarGroup = styled.div`
    display: flex;
    width: fit-content;
    margin-right: 10px;
    align-items: center;
`

const ContactBarLink = styled.a`
    color: #fff;
    list-style: none;

    &:hover {
        color: #fff;
    }
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
                <ContactBarLink href="mailto:braganzavial@gmail.com" target="_blank" rel="noopener noreferrer">
                    <ContactBarIcon>
                        <ion-icon name="mail-outline"></ion-icon>
                    </ContactBarIcon>
                </ContactBarLink>
                    <span>info.braganzavial@gmail.com</span>
                </ContactBarGroup>
                <ContactBarGroup>
                <ContactBarLink href="tel:+59826814391" target="_blank" rel="noopener noreferrer">
                    <ContactBarIcon>
                        <ion-icon name="call-outline"></ion-icon>
                    </ContactBarIcon>
                </ContactBarLink>
                    <span>(+598) 2681 4391 </span>
                </ContactBarGroup>
                <ContactBarGroup>
                    <ContactBarLink href="https://wa.me/+59898998465?text=Estoy%20interesado%20en%20contactarlos" target="_blank" rel="noopener noreferrer">
                        <ContactBarIcon>
                            <ion-icon name="logo-whatsapp">
                            </ion-icon>
                        </ContactBarIcon>
                    </ContactBarLink>
                    <span>(+598) 98 998 465</span>
                </ContactBarGroup>
            </ContactBarSection1>
            <ContactBarSection2>
                <ContactBarIcon>
                    <Link href="https://www.facebook.com/braganzavialsa/?notif_id=1651809278087232&notif_t=aymt_simplified_make_page_post&ref=notif" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>
                </ContactBarIcon>
                <ContactBarIcon>
                    <Link href="https://www.instagram.com/braganzavial/" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                </ContactBarIcon>
            </ContactBarSection2>
        </ContactBarContainer>
    );
}

export default ContactBar;
