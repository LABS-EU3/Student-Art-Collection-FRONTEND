import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";

import MobileNav from "./MobileNav";
import UserIcon from "../Assets/user.png";
import NewMessage from "../Assets/newmessage.jpg";

const NavContainer = styled.div`
  width: 100vw;
  height: 6rem;

  .navigation {
    height: 100%;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: ${props => props.theme.black};

    @media (max-width: 1000px) {
      width: 90vw;
      padding: 0 1rem;
    }

    h1 {
      font-family: ${props => props.theme.logoFont};
      font-size: 3.3rem;
      letter-spacing: 5px;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;

      &:hover {
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

      @media (max-width: 1100px) {
        width: 55%;
      }

      @media (max-width: 800px) {
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

      .icons {
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
`;

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
    background-color: ${props => props.theme.black};
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function NavBar({ loggedInUser, logOutUser, messages, setNotifications }) {
  const [menuStyle, changeMenuStyle] = useState({ width: "100vw" });

  const openMobileNav = () => {
    changeMenuStyle({ width: "100vw" });
  };

  const closeMobileNav = () => {
    changeMenuStyle(null);
  };

  window.addEventListener("resize", closeMobileNav);

  const logOutHandler = () => {
    localStorage.clear();
    setNotifications(0);
    logOutUser();

  };

  return (
    <NavContainer>
      <div className="navigation">
        <Link to="/">
          {" "}
          <h1>ARTFUNDER</h1>{" "}
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/schools">Schools</Link>
          <Link to="/contact">Contact</Link>
          {loggedInUser.email ? (
            <Link to="/" onClick={logOutHandler}>
              Log Out
            </Link>
          ) : (
            <Link to="/login">Log In</Link>
          )}
          <div className="icons">
            {loggedInUser.email ? (
              <Link to="/myaccount">
                <img src={UserIcon} alt="Search icon" />
              </Link>
            ) : null}
            {messages.notifications > 0 ? (
              <Link to="/myaccount/messages">
                <img src={NewMessage} alt="New Message" />
              </Link>
            ) : null}
          </div>
        </nav>
        <Hamburger onClick={openMobileNav}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        <MobileNav styling={menuStyle} closeNav={closeMobileNav} logOut={logOutHandler}/>
      </div>
    </NavContainer>
  );
}

export default connect(state => state, actionCreators)(NavBar);
