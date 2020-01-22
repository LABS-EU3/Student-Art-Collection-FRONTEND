import React, { useState } from "react";
import styled from "styled-components";
import RegisterForm from "../Components/RegisterForm";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import Spinner from "../Components/Spinner";
import SocialAuthButton from "../Components/SocilaAuthButton";
import { baseURL } from "../AxiosCustom";
import { Link } from "react-router-dom";
import mountains from "../Assets/mountains.jpg";

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
            <h1>Create a {isSchool ? "School" : "Buyer"} Account</h1>
            <h3 className="greenButton" onClick={() => setIsSchool(!isSchool)}>
              change to {isSchool ? "Buyer" : "School"}
            </h3>
          </div>
          <RegisterForm {...props} isSchool={isSchool} />
          {isSchool ? null : (
            <div className="googleButtonContainer">
              <SocialAuthButton url={baseURL + "auth/google"} />
            </div>
          )}
          <Link to="/login"><h4>Already a member?</h4></Link>
        </Content>
      </Container>
    );
  }
}

export default connect(state => state, actionCreators)(Register);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-image: url(${mountains});
  background-size: cover;

  @media (max-width: 700px) {
    background-image: none
  }
`;

export const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.88);
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ‘Roboto’, sans-serif;

  padding: 80px 20px;
  border-radius: 10px;

  @media (max-width: 700px) {
    width: 90%
  }

  .title {
    display flex;
    flex-direction column;
    justify-content: space-between;
    align-items: center;
    height: 90px;
  }

  .googleButtonContainer {
    margin: 20px 0 40px 0;
  }
  
  .greenButton {
    color: white;
    border-radius: 5px;
    background-color: green;
    cursor: pointer;
  }
  
  h1 {
    font-size: 3rem
    font-weight: bold
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
