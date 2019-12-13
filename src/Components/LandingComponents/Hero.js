import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../Assets/hero.jpg';

const HeroBanner = styled.div`
width: 100%;
height: 500px;
background: url(${HeroImage});
background-size: cover;
display flex;
flex-direction: row-reverse;

@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}

.heroText {
    text-align: center;
    color: white;
    font-family: 'Julius Sans One', sans-serif;
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
        color: white;
        font-size: 1.5rem;
        width: 14rem;
        height: 4rem;
        border-radius: 3px;
    }
}
`
function Hero() {
    return (
        <HeroBanner>
            <div className="heroText">
                <h1 className="topRow">BUY ART</h1>
                <h1 className="bottonRow">SUPORT SCHOOLS</h1>
                <button>Get Started</button>
            </div>
        </HeroBanner>
    )
}

export default Hero;