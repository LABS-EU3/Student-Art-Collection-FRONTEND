import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MobileNavStyle = styled.div`
  font-size: 2rem;
  width: 0px;
  overflow: hidden;
  height: 100%;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  transition: width 0.5s ease-in-out;

  .side-nav-bar {
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-evenly;
    margin-bottom: 10vh;

    a:hover {
      color: ${props => props.theme.buttonOrange};
    }
  }

  .close {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .active {
    color: ${props => props.theme.buttonOrange};
  }
`;

function MobileNav(props) {
  return (
    <MobileNavStyle style={props.styling}>
      <div className="close" onClick={props.closeNav}>
        x
      </div>
      <div className="side-nav-bar">
        <NavLink onClick={props.closeNav} to="/about">
          About
        </NavLink>
        <NavLink onClick={props.closeNav} to="/browse">
          Browse
        </NavLink>
        <NavLink onClick={props.closeNav} to="/schools">
          Schools
        </NavLink>
        <NavLink onClick={props.closeNav} to="/contact">
          Contact
        </NavLink>
        {props.loggedInUser.email ? (
          <Link  onClick={props.closeNav} to="/" onClick={props.logOut}>
            Log Out
          </Link>
        ) : (
          <Link onClick={props.closeNav} to="/login">Log In</Link>
        )}
        <div className="icons">
          {props.loggedInUser.email ? (
            <Link onClick={props.closeNav} to="/myaccount">My Account{props.messages.notifications > 0 ? `(${props.messages.notifications})` : null}</Link>
          ) : null}
        </div>
      </div>
    </MobileNavStyle>
  );
}

export default connect(state => state, actionCreators)(MobileNav);
