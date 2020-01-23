import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/Actions/actionCreators';

const DashNavStyle = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;  
    font-size: 1.5rem;
    color: rgba(0,0,0,0.5);

    @media(max-width: 500px) {
        width: 150px;
        font-size: 1.2rem;
    }

    @media(max-width: 330px) {
        font-size: 1rem;
    }
    
    div {
        height: 85%;
        width: 100%;
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
            padding: 0.5rem;
            text-align: center;
            transition: color 0.2s ease-in-out;
            border-bottom: 1px solid white;

            &:hover {
                color: rgba(0,0,0,0.8);
                transition: color 0.2s ease-in-out;
            }
        }
    }

    .active {
        color: rgba(0,0,0,1);
        border-bottom: 1px solid black;
    }
`

function DashNav({ loggedInUser }) {
    const [isBuyer, setIsBuyer] = useState(null);

    useEffect(() => {
        if (loggedInUser.type === 'buyer') {
            setIsBuyer(true);
        }
        else if (loggedInUser.type === 'school') {
            setIsBuyer(false);
        }
    }, [loggedInUser.type])

    return (
        <DashNavStyle>
            <div>
                <nav>
                    {!isBuyer ? <NavLink exact to='/selling/forsale'>Dashboard</NavLink> : null}
                    <NavLink exact to='/myaccount'>Profile</NavLink>
                    {isBuyer ? <NavLink to='/myaccount/orders?status=all'>Orders</NavLink> : null}
                    <NavLink to='/myaccount/messages?status=inbox'>Messages</NavLink>
                    {isBuyer ? <NavLink to='/myaccount/wishlist'>Wishlist</NavLink> : null}
                    <NavLink to='/myaccount/help'>Help</NavLink>
                </nav>
            </div>
        </DashNavStyle>
    )
}

export default connect(state => state, actions)(DashNav)