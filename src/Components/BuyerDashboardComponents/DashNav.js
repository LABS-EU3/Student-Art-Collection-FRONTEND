import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import NavBar from '../NavBar'

const DashNavStyle = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;  
    font-size: 1.5rem;
    color: rgba(0,0,0,0.5);
    
    div {
        height: 85%;
        width: 100%;
        // background-color: rgba(50,50,50,0.3);
        border-right: 1px solid rgba(0,0,0,0.1);  
        display: flex;
        align-items: center;
    }

    nav {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: space-evenly;

        a {
            width: 60%;
            padding-bottom: 1rem;
            text-align: center;
            transition: 0.2s ease-in-out;

            &:hover {
                color: rgba(0,0,0,0.8);
                transition: 0.2s ease-in-out;
            }
        }
    }

    .active {
        color: rgba(0,0,0,1);
        border-bottom: 1px solid black;

    }


`

function DashNav() {
    return (
        <DashNavStyle>
            <div>
                <nav>
                    <NavLink exact to='/myaccount'>Profile</NavLink>
                    <NavLink to='/myaccount/orders'>Orders</NavLink>
                    <NavLink to='/myaccount/messages'>Messages</NavLink>
                    <NavLink to='/myaccount/wishlist'>Wishlist</NavLink>
                    <NavLink to='/myaccount/help'>Help</NavLink>
                </nav>
            </div>
        </DashNavStyle>
    )
}

export default DashNav