import React, { useState } from "react";
import styled from "styled-components";
import RegisterForm from "../Components/RegisterForm";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import Spinner from "../Components/Spinner";
import SocialAuthButton from "../Components/SocilaAuthButton";
import { baseURL } from "../AxiosCustom";

const StyledBackground = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c7c7c7' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 550px;
    height: 85vh;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 590px) {
      width: 100%;
      height: 100%;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: rgba(0, 0, 25, 0.8);
      margin: 3rem 0 2.5rem 0;

      @media (max-width: 590px) {
        font-size: 1.8reml;
      }
    }
    h3 {
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .types {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 1.5rem;
      @media (max-width: 450px) {
        width: 85%;
      }
      button {
        width: 120px;
        background-color: ${props => props.theme.buttonOrange};
        color: ${props => props.theme.white};
        border: none;
        border-radius: 5px;
        font-size: 1.4rem;
        padding: 0.6rem 0;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 0.7;
          transition: opacity 0.2s ease-in-out;
        }
        :focus {
          outline: none;
        }
      }
    }
  }

  h2 {
    width: 70%;
    margin: 1em auto;
    overflow: hidden;
    text-align: center;
    font-weight: 300;
    color: black;
  }
  h2:before,
  h2:after {
    content: "";
    display: inline-block;
    width: 50%;
    margin: 0 0.5em 0 -55%;
    vertical-align: middle;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
  h2:after {
    margin: 0 -55% 0 0.5em;
  }
`;

function Register(props) {
  const [isSchool, setIsSchool] = useState(false);
  if (props.isLoading) {
    return (
      <StyledBackground>
        <div className="container">
          <div style={{width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Spinner />
          </div>
        </div>
      </StyledBackground>
    );
  } else {
    return (
      <StyledBackground>
        <div className="container">
          <h1>Create your account</h1>
          <h3>Are you a</h3>
          <div className="types">
            <button
              style={isSchool ? { opacity: "0.3" } : null}
              onClick={() => setIsSchool(false)}
            >
              Buyer
            </button>
            <button
              style={!isSchool ? { opacity: "0.3" } : null}
              onClick={() => setIsSchool(true)}
            >
              School
            </button>
          </div>
          <RegisterForm {...props} isSchool={isSchool} />
        </div>
      </StyledBackground>
    );
  }
}

export default connect(state => state, actionCreators)(Register);

export const Content = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.lightGrey};
  width: 40%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 80px 20px;
  border-radius: 5px;

  @media (max-width: 900px) {
    padding: 40px 0px;
    width: 90%;
    border: none;
  }

  @media (max-height: 950px) {
    border: none;
  }

  img {
    width: 500px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90px;
  }

  .googleButtonContainer {
    margin: 20px 0 40px 0;
  }

  .changeType {
    color: ${props => props.theme.white};
    border-radius: 5px;
    background-color: ${props => props.theme.buttonOrange};
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
  }

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    padding: 0.6rem 2.6rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  a {
    font-size: 1.2rem;
  }
`;
