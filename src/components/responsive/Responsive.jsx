import styled from "styled-components";

import device from '../../responsive/breakpoints';

const Responsive = styled.div`

    ${device.tablet`
        /* Hearder begins here! */
        .header {
            flex-direction: row;
            padding: 0 20px;
            justify-content: space-between;
        }

        .menubar__toggle {
            display: block;
        }

        .menubar {
            position: absolute;
            width: 100%;
            height: calc(100vh - 50px);
            background: #fff;
            top: -100vh;
            /*top: 62.66px;*/
            /*left: -100%;*/
            left: 0;
            transition: 0.5s;
            z-index: -1;
            align-items: flex-start;
        }

        .menubar__border {
            display: none;
        }

        .header .active {
            top: 62.66px;
            /*left:0;*/
        }

        .menubar__root-list {
            display: block;
            text-align: center;
            width: 100%;
        }

        .menubar__menu-item.active-item .menubar__submenu-list {
            position: relative;
            background: var(--bgLight);

            & .menubar__submenu-item {
                width: 100%;
            }
        }

        .menubar__menu-item {
            display: block !important;
        }

        .menubar__logo {
            display: none;
        }

        .menubar__logo-mobile {
            display: block;
        }

        /* Hearder ends here! */

        /* Our Services begins here! */
        .our-services {
            min-height: 100%;
            height: 100%;
            padding: 1rem;
        }

        .our-services__service {
            flex-direction: column-reverse;
            min-height: 100%;
            justify-content: center;
            align-items: center;
        }

        .our-services__figure-container {
            width: 100%;
            max-width: 360px;
            min-width: 360px;
            background-color: #49ad6e;
            clip-path: circle(100% at 50% 50%);
            padding-top: 1rem;
            border-radius: 17rem 17rem 0 0;
        }

        .our-services__figure-container div {
            max-width: 360px;
        }

        .our-services__figure {
            margin: auto;
            margin: auto;
            width: 100%;
            min-width: max-content;
        }

        .our-services__info {
            max-width: 360px;
            width: 100%;
        }

        .our-services__info p{
            font-size: .8rem;
        }
        
        .our-services__info h2{
            font-size: .6rem;
        }

        /* Our Services begins here! */

        /* Contact Us begins here! */
        .form__card--contactUs {
            min-width: max-content;
        }

        /* Contact Us ends here! */ 
    `}

    ${device.mobile`

        /* Our Services begins here! */
        .our-services__figure-container {
            min-width: min-content;
        }

        .our-services__figure {
            
        }

        /* Our services ends here!! */

        /* Contact Us begins here! */
        .form__card--contactUs {
            width: 100%;
        }

        .form__input {
            min-width: 100%;
        }
        /* Contact Us ends here! */ 
        `}

    ${device.laptop`
    /* Hearder ends here! */
        .our-services__info {
            padding: 1rem;
            overflow: hidden;
        }

        .our-services__info h2{
            font-size: 1rem;
        }
        .our-services__info p{
            font-size: .8rem;
        }
        /* Our Services begins here! */
    `}

    ${device.desktop`
    `}
`

export default Responsive;