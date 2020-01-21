import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';

import Spinner from '../Spinner';
import SocialAuthButton from '../SocilaAuthButton';
import { baseURL } from '../../AxiosCustom'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
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

const LoginForm = ({ isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledDiv>
      <h1>Sign In</h1>
      <StyledForm>
        <label htmlFor="email">email</label>
        <Field
          name="email"
          type="email"
          data-testid="emailField"
          className="field"
          placeholder="Enter your email"
        />
        <StyledError name="email" component="div" />
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          data-testid="passwordField"
          placeholder="Enter your password"
        />
        <StyledError name="password" component="div" />
        <button type="submit">Login</button>
      </StyledForm>
      <SocialAuthButton
        isSchool={false}
        url={baseURL+'auth/google'}
      />
    </StyledDiv>
  );
};

export default connect(state => state, actionCreators)(LoginForm);
