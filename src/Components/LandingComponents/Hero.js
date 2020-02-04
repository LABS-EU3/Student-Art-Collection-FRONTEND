import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import HeroImage from '../../Assets/hero.jpg';
import HeroImage1 from '../../Assets/hero1.jpg';

const HeroBanner = styled.div`
width: 100%;
height: 480px;
background: url(${HeroImage1});
background-size: cover;
display flex;
flex-direction: row-reverse;

@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}

.heroText {
    text-align: center;
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.heroFont};
    font-size: 7rem;
    margin: 13rem 13rem;
    @media(max-width: 800px) {
        margin: 0;
        font-size: 6rem;
    }

    .bottonRow {
        @media(max-width: 800px){
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }

    button {
        background: none;
        color: ${props => props.theme.white};
        font-size: 1.5rem;
        width: 14rem;
        height: 4rem;
        border-radius: 3px;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
        }

        &:focus {
         outline:0;
        }
    }
}
`
function Hero() {
    return (
        <HeroBanner>
            <div className="heroText">
                <h1 className="topRow">BUY ART</h1>
                <h1 className="bottonRow">SUPPORT SCHOOLS</h1>
                <Link to='/signup'><button to='/signup'>Get Started</button></Link>
            </div>
        </HeroBanner>
    )
}

export default Hero;