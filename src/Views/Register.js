
import React, { useState } from "react";
import styled from "styled-components";
import RegisterForm from "../Components/RegisterForm";
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import Spinner from "../Components/Spinner";
import { Link } from 'react-router-dom';

function Register(props) {
  const [isSchool, setIsSchool] = useState(false);

  // console.log(isSchool);

  if (props.isLoading) {
    return (
      <Container>
        <Spinner/>
      </Container>
    )
  } else {
    return (
      <Container>
        <div className="title">
          <h1>Register</h1>
          <div className="toggleButton" onClick={() => setIsSchool(!isSchool)}>
            <h3 className={(isSchool) ? 'greyButton' : 'greenButton'}>Buyer</h3>
            <h3 className={(!isSchool) ? 'greyButton' : 'greenButton'}>School</h3>
          </div>
        </div>
        <RegisterForm {...props} isSchool={isSchool}/>
        <Link to='/login' >Already a member?</Link>
      </Container>
    );
  }

}

export default connect(state => state, actionCreators)(Register)

export const Container = styled.div`
  max-width: 800px;
  margin: 30px Auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  font-family: ‘Roboto’, sans-serif;

  @media (min-width: 500px) {
    margin-top: 100px;
  }

  @media (min-width: 1000px) {
    padding: 80px 20px;
    border-radius: 10px;
    border: solid 0.5px lightgrey;
  }

  @media (min-width: 1500px) {
    max-width: 1200px;
    padding: 80px 50px;
  }

  .title {
    display flex;
    flex-direction row;
    justify-content: space-between;
    width: 80%;

    @media (max-width: 500px) {
      flex-direction column;
      height: 80px;
      align-items: center
    }
  }

  .toggleButton {
    display flex;
    flex-direction row;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
  }
  
  .greyButton {
    background-color: lightgrey
    border-radius: 5px
  }
  
  .greenButton {
    color: white
    border-radius: 5px
    background-color: green
  }
  
  div {
    // border: solid 1px red
  }
  
  h1 {
    font-size: 3rem
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
