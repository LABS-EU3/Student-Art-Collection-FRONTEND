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
    color: ${props => props.theme.lightGrey}

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
        border-right: 1px solid ${props => props.theme.veryLightGrey};  
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
            color: ${props => props.theme.lightGrey};
            padding: 0.5rem;
            text-align: center;
            transition: color 0.2s ease-in-out;
            border-bottom: 1px solid ${props => props.theme.white};

            &:hover {
                color: r${props => props.theme.black};
                transition: color 0.2s ease-in-out;
            }
        }
    }

    .active {
        color: ${props => props.theme.black};
        border-bottom: 1px solid ${props => props.theme.black};
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
                    <NavLink to='/myaccount/messages'>Messages</NavLink>
                    {isBuyer ? <NavLink to='/myaccount/wishlist'>Wishlist</NavLink> : null}
                    <NavLink to='/myaccount/help'>Help</NavLink>
                </nav>
            </div>
        </DashNavStyle>
    )
}

export default connect(state => state, actions)(DashNav)