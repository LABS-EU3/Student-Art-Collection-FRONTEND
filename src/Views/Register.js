import React, { useState } from "react";
import styled from "styled-components";
import RegisterForm from "../Components/RegisterForm";

export default function Register() {
  const [isSchool, setIsSchool] = useState(false);

  // console.log(isSchool);

  return (
    <Container>
      <div className="title">
        <h1>Register</h1>
        <div className="toggleButton" onClick={() => setIsSchool(!isSchool)}>
          <h3 className={(isSchool) ? 'greyButton' : 'greenButton'}>Buyer</h3>
          <h3 className={(!isSchool) ? 'greyButton' : 'greenButton'}>School</h3>
        </div>
      </div>
      <RegisterForm isSchool={isSchool}/>
      {/* { // check which form to render based on state
        (isSchool)
          ? <h1>School Form Goes Here</h1> 
          : <RegisterForm /> 
      } */}

    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ‘Roboto’, sans-serif
  // border: solid 1px red

  .title {
    display flex;
    flex-direction row;
    justify-content: space-between
    width: 80%;
  }

  .toggleButton {
    display flex;
    flex-direction row;
    justify-content: space-between;
    cursor: pointer;
  }
  
  .greyButton {
    background-color: lightgrey
    border-radius: 5px
  }
  
  .greenButton {
    border-radius: 5px
    background-color: green
  }
  
  div {
    // border: solid 1px red
  }
  
  h1 {
    font-size: 3rem
  }
  
  h2 {
    font-size: 2.5rem
    padding: 0.6rem 1.6rem
  }
  
  h3 {
    font-size: 2rem
    padding: 0.6rem 1.6rem
  }
  
  h4 {
    font-size: 1.5rem
  }
  

`;
