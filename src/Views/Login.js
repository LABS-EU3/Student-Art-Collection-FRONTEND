import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Route } from 'react-router-dom';
import * as yup from 'yup';

// COMPONENTS

import LoginForm from '../Components/Login/LoginForm';
import ResetPassword from '../Components/Login/ResetPassword';

const initialValues = {
  username: '',
  password: ''
};

// login endpoint pending build of real endpoint in the backend repo

const loginEndpoint = 'http://localhost:4000/auth/login';

// validation schema by yup plugged into formik

const validationSchema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(8)
});

// login handler when login form is submitted

const Login = props => {
  const onLoginHandle = (values, action) => {
    console.log(values);
    axios
      .post(loginEndpoint, values)
      .then(res => {
        // this won't work as there is no login endpoint in the backend yet

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
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onLoginHandle}
        component={LoginForm}
      />
      <ResetPassword />
    </div>
  );
};

export default Login;
