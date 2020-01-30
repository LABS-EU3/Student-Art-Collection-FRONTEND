import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input {
    width: 440px;
    height: 60px;
    margin: 2rem 0 1.5rem 0;
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
    font-size: 2rem;
    padding: 0.6rem 5rem;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
  }
`;

const ResetPasswordFormik = () => {
  return (
    <StyledForm>
      <Field name="email" type="email" placeholder="Enter your email" />
      <button type="submit">Send</button>
    </StyledForm>
  );
};

export default ResetPasswordFormik;
