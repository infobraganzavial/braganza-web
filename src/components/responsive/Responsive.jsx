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
            top: 50px;
            left: -100%;
            transition: 0.5s;
            z-index: 9999;
            align-items: flex-start;
        }

        .menubar__border {
            display: none;
        }

        .active {
            left:0;
        }

        .menubar__root-list {
            display: block;
            text-align: center;
            width: 100%;
        }

        .menubar__menu-item.active .menubar__submenu-list {
            position: relative;
            background: var(--bgLight);

            & .menubar__submenu-item {
                width: 100%;
            }
        }

        .menubar__menu-item {
            display: block !important;
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
        }

        .our-services__figure-container {
            width: 100%;
            background-color: #49ad6e;
            clip-path: circle(100% at 50% 50%);
            padding-top: 2rem;
            border-radius: 17rem 17rem 0 0;
            min-width: 100%;
        }

        .our-services__info {
            width: 100%;
        }

        .our-services__info p{
            font-size: .8rem;
        }
        
        .our-services__info h2{
            font-size: .6rem;
        }

        /* Our Services begins here! */
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