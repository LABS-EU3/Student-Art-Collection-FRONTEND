import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Route } from 'react-router-dom';

// COMPONENTS

import LoginForm from '../Components/Login/LoginForm';
import ResetPassword from '../Components/Login/ResetPassword';

const initialValues = {
  username: '',
  password: ''
};

const loginEndpoint = 'http://localhost:4000/auth/login';

const Login = props => {
  const onLoginHandle = (values, action) => {
    console.log(values);
    axios
      .post(loginEndpoint, values)
      .then(res => {
        localStorage.setItem('authorization', res.data.token);
        props.history.push('/');
        action.resetForm();
      })
      .catch(error => {
        alert(error);
        // set error message state when redux file structure has been clarified
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onLoginHandle}
        component={LoginForm}
      />
      <ResetPassword />
    </div>
  );
};

export default Login;
