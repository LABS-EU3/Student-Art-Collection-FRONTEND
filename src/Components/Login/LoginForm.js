import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';

import Spinner from '../Spinner';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  input {
    width: 100%;
    background: gray;
    border: none;
    padding: 2rem 0.5rem;
  }
  button {
    width: 50%;
    margin: 1rem auto;
    padding: 1rem;
  }
  * {
    padding: 2rem 0;
  }
`;

const LoginForm = ({ isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledDiv>
      <h2>Sign In</h2>
      <StyledForm>
        <label for="email">Email address</label>
        <Field
          name="email"
          type="email"
          data-testid="emailField"
          className="field"
        />
        <ErrorMessage name="email" component="div" />
        <label for="password">Password</label>
        <Field name="password" type="password" data-testid="passwordField" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Login</button>
      </StyledForm>
    </StyledDiv>
  );
};

export default connect(state => state, actionCreators)(LoginForm);
