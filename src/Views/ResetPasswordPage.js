import React from 'react';
import { Formik } from 'formik';
import ResetPasswordForm from '../Components/ResetPassword/ResetPasswordForm';
import LoginForm from '../Components/Login/LoginForm';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components';

import { axiosWithBase } from '../AxiosCustom';

const initialPasswordReset = {
  password: ''
};

const validationSchema = yup.object().shape({
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

const ResetPasswordPage = props => {
  const value = queryString.parse(props.location.search);
  const token = value.token;
  debugger;
  const resetPasswordHandler = (values, action) => {
    console.log(values);
    debugger;
    axiosWithBase
      .patch(`/newpassword?token=${token}`, values)
      .then(res => {
        debugger;
        action.resetForm();
        toast.success(`You can now login`);
        setTimeout(() => {
          props.history.push('/login');
        }, 2000);
      })
      .catch(err => {
        toast.error('Something went wrong, please try again');
      });
  };
  return (
    <StyledForm>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialPasswordReset}
        onSubmit={resetPasswordHandler}
        component={ResetPasswordForm}
      />
      <ToastContainer
        position="bottom-left"
        bodyClassName="toast"
        autoClose={false}
        closeButton={false}
      />
    </StyledForm>
  );
};

export default ResetPasswordPage;
