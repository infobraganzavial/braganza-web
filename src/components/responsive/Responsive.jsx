import styled from "styled-components";

import device from '../../responsive/breakpoints';

const Responsive = styled.div`

    ${device.tablet`
    `}

    ${device.laptop`
        
    `}

    ${device.desktop`
    `}
`

export default Responsive;