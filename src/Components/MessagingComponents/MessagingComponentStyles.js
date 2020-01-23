import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CustomButton = styled(NavLink)`
  font-size: 2rem;
  font-family: "Roboto";
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid white;
  padding-bottom: 0.3rem;
  width: 10rem;
  text-align: center;
  cursor: pointer;
  margin: 0 3rem;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;

export const StyledMessagePreview = styled.div`
  width: 95%;
  height: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

   @media(max-width: 750px) {
       font-size: 0.7rem;
       padding: 0;
   }

  h2,
  h3 {
    width: 28%;
  }

  h2 {
    color: black;
  }

  h3 {
    color: rgba(0, 0, 0, 0.5);
  }

  button {
    width: 10%;
    text-align: end;
    color: rgb(251, 115, 115);
    border: none;
    background-color: none;
    height: auto;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    font-size: 0.8rem;

    @media(max-width: 450px){
        display: none;
    }

    :hover {
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }

    :focus {
      outline: none;
    }
  }
`;
