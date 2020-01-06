import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

// COMPONENTS

import LoginForm from '../Components/Login/LoginForm';
import ResetPassword from '../Components/Login/ResetPassword';
import { axiosWithBase } from '../AxiosCustom';

const initialValues = {
  email: '',
  password: ''
};

// make it an env variable

// login endpoint pending build of real endpoint in the backend repo

// const loginEndpoint = 'http://localhost:9000/login';
// // const loginEndpoint =
// //   process.env.REACT_APP_LOGIN_ENDPOINT ||
// //   'https://art-finder-staging.herokuapp.com/login';

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
  max-width: 800px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 0.5px lightgrey;
  border-radius: 10px;
  padding: 80px 20px;
  font-family: ‘Roboto’, sans-serif;
`;

const Login = ({
  history,
  errorLogin,
  resetErrorLogin,
  loadingStarted,
  loadingFinished,
  setLoggedInUser,
  logInError
}) => {
  // login handler when login form is submitted
  const onLoginHandle = (values, action) => {
    loadingStarted();
    resetErrorLogin();
    axiosWithBase
      .post('/login', values)
      .then(res => {
        // this won't work as there is no login endpoint in the backend yet
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
        loadingFinished();
        if (!error.response) {
          errorLogin('Something went wrong. Please contact us so we can help.');
          toast.error(
            'Something went wrong. Please contact us so we can help.'
          );
        } else {
          switch (error.response.status) {
            case 404:
              errorLogin(error.message);
              toast.error(error.message);
              break;
            case 401:
              errorLogin(error.response.data);
              toast.error(error.response.data);
              break;
            default:
              errorLogin(
                'Something went wrong. Please contact us so we can help.'
              );
              toast.error(
                'Something went wrong. Please contact us so we can help.'
              );
          }
        }
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
      {/* <LoginError /> */}
      <ToastContainer
        position="bottom-left"
        bodyClassName="toast"
        autoClose={3000}
        closeButton={false}
      />
      <ResetPassword />
      <Link to="/signup">Not a member yet? Click here.</Link>
    </StyledForm>
  );
};

export default connect(state => state, actionCreators)(Login);
