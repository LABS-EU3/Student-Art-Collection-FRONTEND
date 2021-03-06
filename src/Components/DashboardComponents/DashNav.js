import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/Actions/actionCreators';

const DashNavStyle = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${props => props.theme.lightGrey};

    @media(max-width: 500px) {
        width: 100%;
        font-size: 1.2rem;
    }
    
    div {
        height: 85%;
        width: 100%;
        border-right: 1px solid ${props => props.theme.veryLightGrey};  
        display: flex;
        align-items: center;

        @media(max-width: 500px) {
            font-size: 1.2rem;
        }
    }

  nav {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

        @media(max-width: 500px) {
            flex-direction: row;
            height: 50px;
            width: 100%;
            align-items: center;
            justify-content: space-evenly;
        }

        a {
            width: 60%;
            color: ${props => props.theme.lightGrey};
            padding: 0.5rem;
            text-align: center;
            transition: color 0.2s ease-in-out;
            border-bottom: 1px solid ${props => props.theme.white};

            @media(max-width: 500px) {
                width: 18%;
                padding: 0.5rem 0;
                font-size: 1.1rem;
            }

            &:hover {
                color: ${props => props.theme.black};
                transition: color 0.2s ease-in-out;
            }
        }
    }
  }

  .active {
    color: ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.black};
  }
`;

function DashNav(props) {
  const [isBuyer, setIsBuyer] = useState(null);

  const notification =
    props.messages.notifications > 0 ? (
      <span>{props.messages.notifications}</span>
    ) : null;

  useEffect(() => {
    if (props.loggedInUser.type === 'buyer') {
      setIsBuyer(true);
    } else if (props.loggedInUser.type === 'school') {
      setIsBuyer(false);
    }
  }, [props.loggedInUser.type]);
  return (
    <DashNavStyle data-testid="dashboardNavBar">
      <div>
        <nav>
          {!isBuyer ? (
            <NavLink exact to="/selling/forsale" data-testid="schoolDashboard">
              Dashboard
            </NavLink>
          ) : null}
          <NavLink exact to="/myaccount">
            Profile
          </NavLink>
          {isBuyer ? (
            <NavLink to="/myaccount/orders?status=all">Orders</NavLink>
          ) : null}
          <NavLink
            to="/myaccount/messages"
            style={props.messages.notifications > 0 ? { color: 'red' } : null}
          >
            Messages {notification}
          </NavLink>
          {isBuyer ? (
            <NavLink to="/myaccount/wishlist">Wishlist</NavLink>
          ) : null}
          <NavLink to="/myaccount/help">Help</NavLink>
        </nav>
      </div>
    </DashNavStyle>
  );
}

export default connect(state => state, actions)(DashNav);
