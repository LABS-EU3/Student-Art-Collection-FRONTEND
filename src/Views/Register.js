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
        <div className="toggle" onClick={() => setIsSchool(!isSchool)}>
          <h2>Buyer</h2>
          <h2>School</h2>
        </div>
      </div>
      { // check which form to render based on state
        (isSchool)
          ? <h1>School Form</h1> 
          : <RegisterBuyerForm /> 
      }
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px red

  .title {
    display flex;
    flex-direction row;
    justify-content: space-between
    width: 80%;
  }

  .toggle {
    display flex;
    flex-direction row;
    justify-content: space-between
  }

  div {
    border: solid 1px red
  }

`;
