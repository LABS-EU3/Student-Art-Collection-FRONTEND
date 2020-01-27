import React, { useState } from "react";
import styled from "styled-components";
import RegisterForm from "../Components/RegisterForm";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import Spinner from "../Components/Spinner";
import SocialAuthButton from "../Components/SocilaAuthButton";
import { baseURL } from "../AxiosCustom";
import { Link } from "react-router-dom";
import register from "../Assets/register.svg";
import register2 from "../Assets/register2.svg";

function Register(props) {
  const [isSchool, setIsSchool] = useState(false);

  if (props.isLoading) {
    return (
      <Content>
        <Spinner />
      </Content>
    );
  } else {
    return (
      <Container>
        <Content>
          <div className="title">
            <h1>Register as a {isSchool ? "School" : "Buyer"}</h1>
            <h3 className="changeType" onClick={() => setIsSchool(!isSchool)}>
              Register as a {isSchool ? "Buyer" : "School"}
            </h3>
          </div>
          <RegisterForm {...props} isSchool={isSchool} />
          {isSchool ? null : (
            <div className="googleButtonContainer">
              <SocialAuthButton url={baseURL + "auth/google"} />
            </div>
          )}
          <Link to="/login">
            <h4>Already a member?</h4>
          </Link>
        </Content>
        <ImageDiv>
          <img src={register2} alt="man with a form" />
        </ImageDiv>
      </Container>
    );
  }
}

export default connect(state => state, actionCreators)(Register);

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 700px) {
    background-image: none
  }

  @media (max-height: 900px) {
    height: 100%;
    width: 100%
  }
`;

const ImageDiv = styled.div`
  width: 40%;
  max-width: 700px;
  height: 600px;
  image: cover;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }

`;

export const Content = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.lightGrey};
  width: 40%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ‘Roboto’, sans-serif;

  padding: 80px 20px;
  border-radius: 5px;

  @media (max-width: 900px) {
    padding: 40px 0px;
    width: 90%
    border: none
  }

  @media (max-height: 950px) {
    border: none
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
  }
  
  h1 {
    font-size: 3rem
    text-align: center
  }
  
  h3 {
    font-size: 2rem
    padding: 0.6rem 2.6rem
  }
  
  h4 {
    font-size: 1.5rem
  }

  a {
    font-size: 1.2rem
  }
`;
