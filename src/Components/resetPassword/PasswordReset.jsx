// DEPENDENCIES
import React from 'react';
import { Formik } from 'formik';
import queryString from 'query-string';
import * as yup from 'yup';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

//HELPERS
import { axiosWithBase } from '../../AxiosCustom';
import * as actionCreators from '../../store/Actions/actionCreators';

// COMPONENTS
import ResetPassword from './ResetPassword';

const initialValues = {
  password: ''
};

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Must be at least 8 charaters')
    .max(127, 'Must be shorter than 127')
    .required('This is a required field')
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

const PasswordReset = ({
  location,
  history,
  loadingStarted,
  loadingFinished
}) => {
  const value = queryString.parse(location.search);
  const token = value.token;
  const submitNewPasswordHandler = (values, action) => {
    loadingStarted();
    axiosWithBase()
      .patch(`/newpassword?token=${token}`, values)
      .then(res => {
        loadingFinished();
        action.resetForm();
        toast.success(
          'You have reset your password. You will be redirected to sign in page in 3 seconds'
        );
        setTimeout(() => {
          return history.push('/login');
        }, 3000);
      })
      .catch(error => {
        loadingFinished();
        toast.error(error.response.data);
      });
  };

  return (
    <StyledForm>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitNewPasswordHandler}
        component={ResetPassword}
      />
      <ToastContainer
        position="bottom-left"
        bodyClassName="toast"
        autoClose={3000}
        closeButton={false}
      />
    </StyledForm>
  );
};

export default connect(state => state, actionCreators)(PasswordReset);
