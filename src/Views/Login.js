import React from 'react';
import { Formik, Form, Field } from 'formik';

// COMPONENTS

import LoginForm from '../Components/Login/LoginForm';
import ResetPassword from '../Components/Login/ResetPassword';

const initialValues = {
  username: '',
  password: ''
};

const Login = props => {
  const onLoginHandle = values => {
    console.log(values);
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
