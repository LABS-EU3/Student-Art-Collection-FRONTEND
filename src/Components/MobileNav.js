import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MobileNavStyle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    width: 0px;
    overflow: hidden;
    height : 100vh;
    background-color: black;
    color: white;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    transition: width 0.5s ease-in-out;

.side-nav-bar{
    width: 10rem;
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: space-evenly;
    margin-top: 8rem;

    a:hover{
        color: darkgrey;
    }
}

.close {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
}
`

function MobileNav({ styling, closeNav}) {
    return (
        <MobileNavStyle style={styling}>
            <div className="close" onClick={closeNav}>x</div>
            <div className="side-nav-bar">
                <Link onClick={closeNav} to='/about'>About</Link>
                <Link onClick={closeNav} to='/browse'>Browse</Link>
                <Link onClick={closeNav} to='/schools'>Schools</Link>
                <Link onClick={closeNav} to='/contact'>Contact</Link>
                <Link onClick={closeNav} to='/myaccount'> Login</Link>
            </div>
        </MobileNavStyle>
    )
}

export default MobileNav;
