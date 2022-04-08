import styled, { css } from 'styled-components';

const Button = styled.button`
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: ${(theme) => `linear-gradient(-35deg, ${theme.primaryColorRgba} 30%, ${theme.secundaryColorRgba} 70%)`};
    margin-top: 15px;
    border-radius: 20px;
    font-weight: 400;
    color: var(--tertiary-color);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    border: none;
    outline: none;
    transition: color, background-color .5s;
    cursor: pointer;
    width: 100%;
    max-width: 120px;
    text-decoration: none;

    &:active {
        transform: scale(.9);
    }

    ${({danger, ghost}) => danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primaryColor};
        border: 1px solid ${({ theme }) => theme.primaryColor};
    `}

    ${({danger, ghost}) => danger && !ghost && css`
        background-color: ${({ theme }) => theme.primaryColor};
    `}

    ${({danger, ghost}) => !danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primaryColor};
        border: 1px solid ${({ theme }) => theme.primaryColor};
    `}

    ${({primary, ghost}) => primary && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.secundaryColor};
        border: 1px solid ${({ theme }) => theme.secundaryColor};
    `}

    ${({primary, ghost}) => primary && !ghost && css`
        background-color: ${({ theme }) => theme.secundaryColor};
    `}

    ${({primary, ghost}) => !primary && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.secundaryColor};
        border: 1px solid ${({ theme }) => theme.secundaryColor};
    `}
`

export default Button;