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
    debugger;
    console.log(values);
    axios
      .post(loginEndpoint, values)
      .then(res => {
        debugger;
        localStorage.setItem('authorization', res.data.token);
        props.history.push('/');
        action.resetForm();
      })
      .catch(error => {
        debugger;
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
