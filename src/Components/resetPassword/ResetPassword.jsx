import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 auto;
  font-family: ‘Roboto’, sans-serif;
  h1 {
    font-size: 3rem;
    padding: 2rem 0;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  label {
    font-size: 2rem;
    padding: 1rem 0;
  }
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: solid 0.5px lightgrey;
  }
  button {
    margin: 40px auto;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    padding: 0.6rem 5rem;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
  }
  * {
    padding: 2rem 0;
  }
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const ResetPassword = () => {
  return (
    <StyledDiv>
      <StyledForm>
        <Field
          name="password"
          type="password"
          placeholder="Type your new password"
        />
        <StyledError name="password" component="div" />
        <button>Reset Password</button>
      </StyledForm>
    </StyledDiv>
  );
};

export default ResetPassword;