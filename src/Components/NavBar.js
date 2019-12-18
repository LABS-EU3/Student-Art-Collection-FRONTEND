import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import MobileNav from './MobileNav'
import SearchIcon from '../Assets/magnifying-glass.png'
import UserIcon from '../Assets/user.png'

const NavContainer = styled.div`
width: 100vw;
height: 6rem;
border-bottom: 1px solid rgba(0,0,0, 0.1);

.navigation {
    height: 100%;
    width: 75vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 900px) {
        width: 90vw;
        padding: 0 1rem;
    }

    h1 {
        font-family: 'Shadows Into Light', cursive;
        font-size: 4rem;
        letter-spacing: 10px;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;

        &:hover{
            opacity: 0.5;
            transition: opacity 0.3s ease-in-out;
        }

        @media (max-width: 900px) {
            font-size: 3rem;
        }
    }

    nav {
        width: 40%;
        display: flex;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;

        @media (max-width: 900px) {
            display: none;
        }

        a {
            font-size: 1.3rem;
            opacity: 1;
            transition: opacity 0.2s ease-in-out;

            &:hover {
                opacity: 0.5;
                transition: 0.2s ease-in-out;
            }
        }

        .icons{
            width: 4.8rem;
            display: flex;
            justify-content: space-between;

            img {
            opacity: 1;
            transition: opacity 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
                opacity: 0.5;
                transition: 0.2s ease-in-out;
            }
}        
        }
    }
}
`

const Hamburger = styled.div`
width: 25px;
height: 20px;
display: none;
margin-top: 4px;
cursor: pointer;
opacity: 1;
transition: opacity 0.2s ease-in-out;

&:hover {
    opacity: 0.3;
    transition: opacity 0.2s ease-in-out;
}

div {
    width: 100%;
    height: 2px;
    background-color: black;
}

@media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`

function NavBar() {
    const [menuStyle, changeMenuStyle] = useState(null);

    const openMobileNav = () => {
        changeMenuStyle({ 'width': '50vw' });
    }

    const closeMobileNav = () => {
        changeMenuStyle(null);
    }

    window.addEventListener('resize', closeMobileNav);

    return (
        <NavContainer>
            <div className='navigation'>
                <Link to='/'> <h1>artFunder</h1> </Link>
                <nav>
                    <Link to='/about'>About</Link>
                    <Link to='/browse'>Browse</Link>
                    <Link to='/schools'>Schools</Link>
                    <Link to='/contact'>Contact</Link>
                    <div className='icons'>
                        <Link to='/search'> <img src={SearchIcon} alt='Search icon' /></Link>
                        <Link to='/myaccount'> <img src={UserIcon} alt='Search icon' /></Link>
                    </div>
                </nav>
                <Hamburger onClick={openMobileNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburger>
                <MobileNav styling={menuStyle} closeNav={closeMobileNav} />
            </div>
        </NavContainer>
    )

}

export default NavBar;