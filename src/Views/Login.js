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
import LoginError from '../Components/Login/LoginError';

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

const Login = ({
  history,
  errorLogin,
  resetErrorLogin,
  loadingStarted,
  loadingFinished,
  setLoggedInUser
}) => {
  // login handler when login form is submitted
  const onLoginHandle = (values, action) => {
    loadingStarted();
    resetErrorLogin();
    axios
      .post(loginEndpoint, values)
      .then(res => {
        // this won't work as there is no login endpoint in the backend yet
        debugger;
        loadingFinished();
        action.resetForm();
        resetErrorLogin();
        if (!res.data.token) {
          switch (res.data.message) {
            case 'please check your email address to confirm account':
              history.push('/confirmation');
              break;
            // case 'Invalid credentials':
            //   errorLogin(res.data.message);
            //   break;
            default:
              console.log('weird');
          }
        } else {
          localStorage.setItem('authorization', res.data.token);
          setLoggedInUser(res.data.user);
          history.push('/');
        }
      })
      .catch(error => {
        debugger;
        loadingFinished();
        if (!error.response) {
          errorLogin('Something went wrong. Please contact us so we can help.');
        } else {
          switch (error.response.status) {
            case 404:
              errorLogin(error.message);
              break;
            case 401:
              errorLogin(error.response.data);
              break;
            default:
              errorLogin(
                'Something went wrong. Please contact us so we can help.'
              );
          }
        }
        // if (error.respone.status === 404) {
        // }
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
      <LoginError />
      <ResetPassword />
    </StyledForm>
  );
};

export default connect(state => state, actionCreators)(Login);
