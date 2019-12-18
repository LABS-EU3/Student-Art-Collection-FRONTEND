import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

    &:hover{
        opacity: 0.5;
    }

}

.active {
    color: orange;
}
`

function MobileNav({ styling, closeNav}) {
    return (
        <MobileNavStyle style={styling}>
            <div className="close" onClick={closeNav}>x</div>
            <div className="side-nav-bar">
                <NavLink onClick={closeNav} to='/about'>About</NavLink>
                <NavLink onClick={closeNav} to='/browse'>Browse</NavLink>
                <NavLink onClick={closeNav} to='/schools'>Schools</NavLink>
                <NavLink onClick={closeNav} to='/contact'>Contact</NavLink>
                <NavLink onClick={closeNav} to='/myaccount'> Login</NavLink>
            </div>
        </MobileNavStyle>
    )
}

export default MobileNav;
