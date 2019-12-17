import React, { useState } from "react";
import styled from "styled-components";
import { RegisterBuyerForm } from "../Components/RegisterBuyerForm";
import { is } from "@babel/types";

export default function Register() {
  const [isSchool, setIsSchool] = useState(false);

  console.log(isSchool);

  return (
    <Container>
      <div className="title">
        <h1>Register</h1>
        <div className="toggleButton" onClick={() => setIsSchool(!isSchool)}>
          <h2 className={(isSchool) ? 'greyButton' : 'greenButton'}>Buyer</h2>
          <h2 className={(!isSchool) ? 'greyButton' : 'greenButton'}>School</h2>
        </div>
      </div>
      { // check which form to render based on state
        (isSchool)
          ? <h1>School Form Goes Here</h1> 
          : <RegisterBuyerForm /> 
      }

    </Container>
  );
}

const Container = styled.div`
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
    justify-content: space-between
  }

  .greyButton {
    background-color: lightgrey
  }

  .greenButton {
    background-color: green
  }

  div {
    // border: solid 1px red
  }

`;
