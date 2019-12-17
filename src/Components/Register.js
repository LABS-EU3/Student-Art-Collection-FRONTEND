import React from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
  return (
    <Container>
      <div>
        <h1>Register</h1>
        <div>
          <h1>Buyer</h1>
          <h1>School</h1>
        </div>
      </div>
      <RegisterForm />
    </Container >
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px red
`;

const registerApi = "enter url here";

export const initalSignupForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "must be at least 3 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  lastName: Yup.string()
    .min(3, "must be at least 3 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  email: Yup.string()
    .email("must be a valid email address")
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  password: Yup.string()
    .min(8, "must be at least 8 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field")
});

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .inputField {
    margin: 2px 0
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .has-error {
    border: solid 0.5px red;
  }
  .invalid {
    font-size: 1rem;
    color: red;
  }
  .valid {
    font-size: 1rem;
    color: green;
  }
`;
