import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { generate as id } from 'shortid';

import getSiblings from '../../helpers/getSiblings';

const StyledHeader = styled.header`
    position: absolute;
    display: flex;
    justify-content: space-around;
    top: 0;
    left: 0;
    padding: 0 100px;
    width: 100%;
    box-sizing: border-box;
    background: #fff;

    & .menubar__toggle {
        color: var(--primary-color);
        float: right;
        line-height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
    }
`

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    float: right;

    & .menubar__root-list {
        margin: 0;
        padding: 0; 
        display: flex;

        & .menubar__menu-item {
            list-style: none;
            position: relative;

            & .menubar__menuitem-link {
                display: block;
                padding: 1rem;
                color: #595959;
                text-decoration: none;

                &:hover 
                {
                    color: var(--text-color-dark);
                    box-shadow: inset 0 -3px 0 0 var(--primary-color-rgb);
                    fill: currentColor;
                }

                &.active
                {
                    color: var(--text-color-dark);
                    box-shadow: inset 0 -3px 0 0 var(--primary-color-rgb);
                    fill: currentColor;
                }
            }

            & .menubar__submenu-list {
                position: absolute;
                left: 0;
                background: #fff;
                padding: 0;
                z-index: 9999;
                display: none;
                width: 100%;
                min-width: max-content;
            }
        }

        & .menubar__menu-item.active .menubar__submenu-list  {
            display: block;

            & .menubar__submenu-item {
                display: block;
                width: 100%;
            }
        }

        & .menubar__parent-sub-menu-item::before {
            content: '\f107';
            font-family: fontAwesome;
            position: absolute;
            line-height: 57px;
            color: #595959;
            right: 0px;
        }

        & .active.menubar__parent-sub-menu-item::before {
            content: '\f106';
        }
    }
`

const Brand = styled.div`

    & .menubar__brand-border {
        border-right: 1px solid rgba(0,0,0,.2);
        margin: 0 1rem;
    }

    & .menubar__logo {
        opacity: .7;
    }

    & .menubar__logo:hover {
        opacity: 1;
        cursor: pointer;
    }
`

const Search = styled.div`
    margin-left: auto;

    & .menubar__search {
        opacity: .7;
        padding: 1rem;

        &:hover{
            opacity: 1;
            cursor: pointer;
            box-shadow: inset 0 -3px 0 0 var(--primary-color-rgb);
            fill: currentColor;
        }
    }
`

const Header = ({items, logo, logo2, search}) => {

    const [active, setActive] = useState(false);

    /**
     * @description Le setea o quita la clase active al link del menu
     * @returns void
     */
     const handleOnClick = (myRef) => {
        const li = myRef.current;
        // Listas hermanas a la seleccionada
        let siblingsLis = getSiblings(li);
        // Quitamos todas las activas de las hermanos activos
        siblingsLis.forEach( item => {
            item.classList.remove('active');
            item.querySelector('a').classList.remove('active');
        });
        // toggle al current li
        li.classList.toggle('active');
        // toggle al current a
        li.querySelector('a').classList.toggle('active');
    }

    /**
     * @description Construye los subitems
     * @param {object[]} subItems 
     * @returns JSX.Element[]
     */
     const buildListSubItems = subItems => {
        return subItems.map( subItem => {
            return <li className="menubar__submenu-item" key={id()}>
                <Link className="menubar__menuitem-link" to={subItem.routerLink}>
                    {subItem.label}
                </Link>
            </li>
        });
    }

    /**
     * @description Construye el ul para los subitems
     * @param {object[]} subItems 
     * @returns 
     */
     const buildUlSubItems = subItems => <ul className='menubar__submenu-list'>{ buildListSubItems(subItems)}</ul>;

    /**
     * @description Construye los items que vienen en los props.
     * @returns JSX.IntrinsicElements.li
     */
    const buildListItems = () => {
        return items.map( item => {
            const myRef = React.createRef();
            if( item.items && item.items.length ) {
                return <li className='menubar__menu-item menubar__parent-sub-menu-item'
                           onClick={() => handleOnClick(myRef)}
                           ref={myRef}
                           key={id()}>
                    <Link className='menubar__menuitem-link' to="/">
                        {item.label}
                    </Link>
                    {buildUlSubItems(item.items)}
                </li>
            } else {
                return <li className="menubar__menu-item" key={id()} onClick={() => handleOnClick(myRef)} ref={myRef}>
                    <Link className="menubar__menuitem-link" to={item.routerLink}>
                        {item.label}
                    </Link>
                </li>
            }
        });
    }

    return (
        <StyledHeader className='header'>
            <Brand className='menubar__brand'>
                <img alt="ica"
                     src={logo}
                     height="45"
                     className="p-mr-2 menubar__logo"/>
                {logo2 && <>
                    <span className='menubar__brand-border'></span>
                    <img alt="esri"
                        src={logo2}
                        height="25"
                        className="p-mr-2 menubar__logo"/>
                </>
                        }
            </Brand>
            <StyledNav className={`menubar ${ active && 'active' }`}>
                <ul className='menubar__root-list'>
                    { buildListItems() }
                </ul>
            </StyledNav>
            {search && <Search className='menubar__right'>
                    <div className="menubar__search">
                        <img alt="search"
                             src={search}
                             height="25"
                             className="p-mr-2 menubar__search-img"/>
                    </div>
            </Search>} 
            <div className="menubar__toggle"><i className="fa-solid fa-bars" onClick={() => setActive(!active)}></i></div>
        </StyledHeader>
    );
}

export default Header;