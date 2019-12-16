import React from 'react';
import { Formik, Form, Field } from 'formik';
import LoginForm from '../Components/LoginForm';

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
    </div>
  );
};

export default Login;
