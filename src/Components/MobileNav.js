import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

function MobileNav({ styling, closeNav }) {
  return (
    <MobileNavStyle style={styling}>
      <div className="close" onClick={closeNav}>
        x
      </div>
      <div className="side-nav-bar">
        <NavLink onClick={closeNav} to="/about">
          About
        </NavLink>
        <NavLink onClick={closeNav} to="/browse">
          Browse
        </NavLink>
        <NavLink onClick={closeNav} to="/schools">
          Schools
        </NavLink>
        <NavLink onClick={closeNav} to="/contact">
          Contact
        </NavLink>
        <NavLink onClick={closeNav} to="/myaccount">
          {" "}
          Login
        </NavLink>
      </div>
    </MobileNavStyle>
  );
}

export default MobileNav;
