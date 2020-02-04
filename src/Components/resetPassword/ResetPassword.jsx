import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  input {
    width: 440px;
    height: 60px;
    margin: 0 0 2rem 0;
    background-color: rgba(238, 243, 248, 0.5);
    border: 1px solid ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    padding-left: 1rem;
    font-size: 1.5rem;

    @media (max-width: 590px) {
      width: 360px;
    }

    @media (max-width: 370px) {
      width: 270px;
    }

    :hover {
      background-color: rgba(238, 243, 248, 0.1);
      transition: all 0.3s ease-in-out;
    }

    :focus {
      border: 1px solid ${props => props.theme.lightGrey};
      outline: none;
    }
  }

  button {
    margin: 0 auto;
    background-color: ${props => props.theme.buttonOrange};
    color: ${props => props.theme.white};
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.6rem 5rem;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.2gs ease-in-out;
    }
  }
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

const ResetPassword = () => {
  return (
    <StyledForm>
      <StyledError name="password" component="h6" />
      <Field
        name="password"
        type="password"
        placeholder="Type your new password"
      />
      <button type="submit">Reset Password</button>
    </StyledForm>
  );
};

export default ResetPassword;
