import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

// COMPONENTS

import LoginForm from '../Components/Login/LoginForm';
import ResetPassword from '../Components/Login/ResetPassword';

const initialValues = {
  email: '',
  password: ''
};

// make it an env variable

// login endpoint pending build of real endpoint in the backend repo

const loginEndpoint = 'http://localhost:9000/login';

// validation schema by yup plugged into formik

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(8)
});

const StyledForm = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = ({ history, errorLogin, isError, resetErrorLogin }) => {
  // login handler when login form is submitted
  const onLoginHandle = (values, action) => {
    console.log(values);
    axios
      .post(loginEndpoint, values)
      .then(res => {
        // this won't work as there is no login endpoint in the backend yet
        debugger;
        action.resetForm();
        resetErrorLogin();
        localStorage.setItem('authorization', res.data.token);
        history.push('/');
      })
      .catch(error => {
        debugger;
        errorLogin();
        // set error message state when redux file structure has been clarified
      });
  };

  return (
    <StyledForm>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onLoginHandle}
        component={LoginForm}
      />
      <ResetPassword />
      {isError ? <div>Error logging in. Please try again</div> : null}
    </StyledForm>
  );
};

export default connect(state => state, actionCreators)(Login);
