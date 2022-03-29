import styled from "styled-components";

import device from '../../responsive/breakpoints';

const Responsive = styled.div`

    ${device.tablet`

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
    `}

    ${device.laptop`
        
    `}

    ${device.desktop`
    `}
`

export default Responsive;