import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CustomButton = styled(NavLink)`
  font-size: 2rem;
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
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: 750px) {
    font-size: 0.7rem;
    padding: 0;
  }

  h2,
  h3 {
    width: 28%;
  }

  a {
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
    background-color: transparent;
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

export const StyledMessageBox = styled.div`
  width: 70%;
  height: 80%;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  @media(max-width: 800px){
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
  .from,
  .subject {
    height: 10%;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;



    h3 {
      font-size: 1.2rem;
      margin: 0 3rem;
      width: 5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  .message {
    width: 100%;
    height: 60%;
    padding: 2rem;
    overflow: scroll;
    p {
      font-size: 1.5rem;
      width: 100%;
    }

    textarea {
      font-size: 1.5rem;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  .buttons {
    padding: 2rem 3.5rem;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    a {
      height: 35px;
      background-color: #ff6347;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 2rem;
      padding: 0.6rem 5rem;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
        transition: opacity 0.1s ease-in-out;
      }
    }

    button {
      height: 38px;
      background-color: #ff6347;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 2rem;
      padding: 0.6rem 5rem;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
        transition: opacity 0.1s ease-in-out;
      }
    }

    #back {
      background-color: white;
      color: rgba(0, 0, 0, 0.8);
      font-size: 3rem;
      width: auto;
      padding: 0 1rem;
    }
  }
`;
