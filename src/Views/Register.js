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
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 50px Auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
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
  

`;
